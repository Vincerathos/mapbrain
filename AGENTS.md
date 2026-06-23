# AGENTS.md

## Objectif du projet

Construire un site portfolio premium pour l'agence MAPBRAIN. Le site doit
présenter une offre claire, crédible et orientée conversion autour de la
promesse suivante :

**Analyse. Build. Scale.**

MAPBRAIN se positionne comme un partenaire unique qui accompagne startups, PME,
entreprises et organisations depuis la validation d'une opportunité jusqu'au
développement produit, à l'automatisation par l'IA et à l'accélération de la
croissance.

## Positionnement à respecter

- Ton premium, clair, stratégique, orienté résultats.
- Pas de jargon gratuit ni de promesses vagues.
- Toujours mettre en avant la réduction du risque, la vitesse d'exécution, la
  productivité et le retour sur investissement.
- Valoriser l'IA comme levier concret de performance, pas comme effet de mode.
- Préserver une lecture fluide en français, avec une architecture facilement
  déclinable en anglais.

## Piliers de contenu

- `Analyse` : validation marché, validation business, validation produit,
  stratégie de croissance, analyse concurrentielle.
- `Build` : UX/UI, design produit, applications web, mobile, SaaS, e-commerce,
  outils métiers.
- `Scale` : croissance, optimisation, accompagnement stratégique, réseau,
  partenaires, accès à des ressources et opportunités.
- `IA & Automatisation` : assistants métier concrets pour vente, marketing,
  vidéo, RH, opérations, support client.

## Règles de collaboration

- Lire et appliquer les règles dans `.agents/rules/` avant toute implémentation
  significative.
- Favoriser React avec TypeScript strict, composants typés, props explicites et
  architecture simple.
- Interdire `any`, les hacks de typage et les contournements de lint non
  justifiés.
- Utiliser Tailwind CSS comme système principal de styles.
- Garder le code accessible, responsive, sécurisé et maintenable.
- Toute nouvelle section du site doit servir soit la compréhension de l'offre,
  soit la crédibilité, soit la conversion.

## Priorités produit

1. Clarifier l'offre en quelques secondes.
2. Structurer un parcours de lecture orienté conversion.
3. Montrer la valeur business avant la technique.
4. Concevoir une base front-end propre et extensible.

## Référentiel local

Les règles détaillées sont dans :

- `.agents/rules/content-strategy.md`
- `.agents/rules/reactjs.md`
- `.agents/rules/typescript.md`
- `.agents/rules/tailwindcss.md`
- `.agents/rules/security.md`
- `.agents/rules/accessibility.md`
- `.agents/rules/gsap.md`
