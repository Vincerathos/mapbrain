# Audit de performance — MAPBRAIN

_Date : 2026-07-15 · Build analysé : production (`pnpm build`) frais._

> ✅ **Mise à jour (même jour)** : les correctifs P1 à P4 ont été appliqués, plus une
> refonte de structure (section Formations, suppression des doublons, hero avec CTA).
> Résultats : **JS 429 → 353 Ko (gzip 134 → 106 Ko)**, GSAP supprimé, polices en
> `<link preconnect>`, animations en CSS pur, 2 `backdrop-blur` restants (au lieu de 9),
> 0 requête vers randomuser/jsdelivr/simpleicons. Voir le détail des changements dans
> le récapitulatif de session. Le rapport ci-dessous décrit l'état **avant** correctifs.

---

## 1. Résumé exécutif

Le site est un **one-page statique** (Vite + React 19 + Tailwind 4 + GSAP + i18next),
déployé sur Vercel. Il n'y a **pas de backend** : la lenteur ressentie ne vient pas du
serveur mais de **trois facteurs côté navigateur**, par ordre d'impact :

1. **Le chargement des polices Google bloque l'affichage du texte** (chaîne réseau en cascade).
2. **Les animations d'apparition animent un flou (`filter: blur`)** sur ~36 blocs → scroll saccadé.
3. **Le JavaScript est livré en un seul bloc de 429 Ko** (134 Ko gzip), tout chargé avant le premier rendu.

Les correctifs 1 et 2 sont les plus rentables : gros gain de vitesse ressentie, **peu d'effort,
zéro changement visuel**.

---

## 2. Mesures

### Build de production (fresh)

| Ressource | Taille | Gzip |
|-----------|--------|------|
| `index-*.js` | 429 Ko | **134 Ko** |
| `index-*.css` | 71 Ko | 14 Ko |
| **1 seul chunk JS** (aucun code-splitting) | — | — |
| Modules transformés | 1 816 | — |

### Runtime (mesuré en local, cache chaud)

| Métrique | Valeur | Lecture |
|----------|--------|---------|
| CLS (décalage de mise en page) | **0** | ✅ Excellent — le problème n'est PAS la mise en page |
| Long task au render initial | 53 ms | ⚠️ Un blocage du thread principal au démarrage |
| `domInteractive` | ~14 ms | Non représentatif (localhost, sans latence) |

> ⚠️ **Important sur la méthodo** : les mesures locales sont trop optimistes (aucune latence
> réseau, polices en cache). Les vrais goulots sont **réseau** (polices) et **GPU** (flou au
> scroll) — invisibles en local mais bien réels chez un visiteur sur mobile / connexion moyenne.
> Pour des chiffres terrain, lancer un **Lighthouse mobile** sur l'URL Vercel de production
> (throttling 4G activé).

---

## 3. Problèmes détaillés

### 🔴 P1 — Les polices bloquent le rendu du texte
**Fichier :** `src/index.css:1`

```css
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono...&family=Instrument+Sans...&family=Manrope...&display=swap');
```

Un `@import` CSS est **render-blocking et séquentiel**. Le navigateur doit :
1. télécharger `index.css`
2. y découvrir l'`@import`
3. télécharger **un second CSS** chez `fonts.googleapis.com`
4. puis télécharger les fichiers `.woff2` chez `fonts.gstatic.com`

Chaque étape attend la précédente. En plus, **3 familles × plusieurs graisses** = jusqu'à
~10 fichiers de police. Sur mobile/4G, cette cascade retarde l'apparition du texte de plusieurs
centaines de ms. **C'est la cause n°1 de la lenteur perçue.**

**Correctif :**
- Sortir les polices du CSS et les déclarer dans `index.html` avec préconnexion :
  ```html
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=...&display=swap" />
  ```
- **Réduire à 2 familles** et aux graisses réellement utilisées (auditer `Manrope`,
  `Instrument Sans`, `IBM Plex Mono` — 3 polices sur une landing, c'est beaucoup).
- Mieux encore : **auto-héberger** les `.woff2` dans `/public/fonts` + `@font-face` local +
  `<link rel="preload">`. Supprime totalement la dépendance à un tiers.

---

### 🔴 P2 — Animation de `filter: blur()` au scroll
**Fichier :** `src/hooks/use-reveal.ts:36-61` · appliqué à **~36 blocs `[data-reveal]`**

```js
gsap.set(targets, { filter: 'blur(10px)', opacity: 0, scale: 0.985, y: 34 })
// ...
gsap.to(targets, { filter: 'blur(0px)', opacity: 1, scale: 1, y: 0, stagger: 0.08 })
```

Animer `filter: blur()` est **l'une des propriétés les plus coûteuses** : le GPU doit
recalculer le flou à **chaque frame** de l'animation, sur chaque bloc. Multiplié par le nombre
d'éléments révélés, c'est la source principale du **scroll qui rame**.

**Correctif :**
- Retirer le `blur` de l'animation. Garder `opacity` + `translateY` (`y`) suffit pour un effet
  d'apparition élégant et **quasi gratuit** pour le GPU. Le rendu final est visuellement
  identique une fois l'anim terminée.
- Optionnel : si l'effet de flou est tenu à garder, ne l'appliquer qu'au **hero** (1 zone), pas
  aux 36 blocs.
- Bonus : ajouter `will-change: transform, opacity` sur les cibles animées.

---

### 🟠 P3 — Bundle JS monolithique (429 Ko / 134 Ko gzip)
**Config :** `vite.config.js` (aucun `manualChunks`) · `src/hooks/use-reveal.ts:2`

Tout le JS est livré en **un seul fichier** chargé avant le premier rendu, GSAP inclus en
entier (`import { gsap } from 'gsap'`) alors qu'il ne sert qu'aux apparitions.

**Correctif :**
- Séparer les dépendances tierces via `build.rollupOptions.output.manualChunks`
  (react, gsap, i18next dans des chunks distincts → meilleur cache navigateur).
- Charger GSAP en **lazy** (`await import('gsap')` dans le hook) : le hero s'affiche sans
  attendre GSAP.
- Si l'effet P2 est simplifié en CSS pur, **GSAP peut être retiré entièrement** (~40-70 Ko gzip
  en moins).

---

### 🟠 P4 — 9 zones en `backdrop-blur` (dont plusieurs `-xl`)
**Fichiers :** `header.tsx`, `hero-section.tsx` (×2), `partners-section.tsx` (×3),
`automation-section.tsx`, `promise-section.tsx`, `ui/locale-switcher.tsx`

`backdrop-blur` recalcule le flou de l'arrière-plan **en continu pendant le scroll**. Le header
est en `backdrop-blur-md` **fixe** → coût permanent sur toute la navigation. Les `backdrop-blur-xl`
(hero, partners, automation) sont les plus lourds.

**Correctif :**
- Rétrograder les `backdrop-blur-xl` → `-md`, ou remplacer par un **fond semi-opaque** (`bg-white/85`)
  là où le flou est purement décoratif : différence visuelle minime, gain GPU réel sur mobile.
- Garder le `backdrop-blur` uniquement sur le header (utile pour la lisibilité au scroll).

---

### 🟡 P5 — Pistes secondaires
- **Lazy-load des sections sous la ligne de flottaison** (`React.lazy` + `Suspense`) : les 13
  sections sont toutes montées d'un coup. Le hero seul suffit au premier écran.
- **`loading="lazy"` / dimensions explicites** sur les images (préserve le CLS déjà à 0).
- Vérifier que Vercel sert bien en **Brotli** (par défaut oui) et avec cache long sur les assets
  hashés.

---

## 4. Plan d'action recommandé

| Priorité | Action | Effort | Gain vitesse | Risque visuel |
|:--------:|--------|:------:|:------------:|:-------------:|
| 1 | Polices → `<link>` dans HTML + réduire familles/graisses | ~15 min | ⭐⭐⭐ | Aucun |
| 2 | Retirer `blur` de `use-reveal` (garder opacity + y) | ~20 min | ⭐⭐⭐ | Aucun |
| 3 | `backdrop-blur-xl` → `-md` / fond opaque sur zones déco | ~30 min | ⭐⭐ | Minime |
| 4 | `manualChunks` + GSAP lazy (ou suppression) | ~30 min | ⭐⭐ | Aucun |
| 5 | `React.lazy` sections + `loading="lazy"` images | ~30 min | ⭐ | Aucun |

**Total ~2 h** pour un site nettement plus rapide et fluide, sans refonte.

---

## 5. Prochaine étape suggérée

Lancer un **Lighthouse mobile sur l'URL Vercel de production** pour figer un score « avant »,
appliquer P1 + P2, puis re-mesurer. Ces deux correctifs seuls devraient transformer la sensation
de vitesse au chargement et au scroll.
