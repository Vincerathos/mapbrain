# CHANGELOG

## 01-07-2026

- 15:10 Recomposition de la section `audiences` pour mieux mélanger texte et images ligne par ligne, en cassant l’effet de colonne d’images à droite tout en conservant 3 lignes et 3 visuels.
- 15:02 Simplification forte de la mosaïque `audiences` vers 3 lignes nettes et 3 images seulement, avec moins de cartes texte, une dispersion plus aérée et une composition desktop plus lisible.
- 15:00 Réduction de la mosaïque `audiences` à 5 tuiles image en supprimant 3 visuels supplémentaires au profit de cartes texte, afin de renforcer la lecture éditoriale tout en conservant un rectangle complet.
- 14:57 Rééquilibrage de la section `audiences` vers davantage de contenu éditorial et moins d’images, avec une vraie carte `PME` développée à la bonne taille et une mosaïque finale majoritairement composée de cartes texte.
- 14:45 Recalage de la mosaïque `audiences` pour former un rectangle plein sans trou sur desktop grâce à des positions de grille explicites, puis remplacement des derniers visuels figuratifs par une sélection d’images abstraites uniquement.
- 14:41 Remplacement des images cassées de la section `audiences` par des URLs directes plus fiables afin d’éliminer les tuiles blanches dues au hotlinking bloqué sur certains visuels décoratifs.
- 21:06 Refonte complète de la section `audiences` en vraie mosaïque bento asymétrique avec tailles de tuiles variées, cartes texte plus éditoriales et remplacement des anciens visuels uniformes par une sélection d’images décoratives plus fortes trouvées sur le web.

## 30-06-2026

- 20:58 Augmentation plus franche de la largeur des cards mobiles de `Projects` après vérification browser, le précédent passage à `296px` restant trop discret visuellement ; les cards passent désormais à `332px`.
- 20:56 Élargissement supplémentaire des cards mobiles de la section `Projects` pour afficher des visuels plus larges sans réaugmenter artificiellement leur hauteur.
- 20:54 Ajustement fin des cards mobiles de `Projects` en les rendant un peu moins hautes mais plus larges, puis ajout d’un indicateur explicite invitant l’utilisateur à toucher une card pour ouvrir la démo Loom.
- 20:52 Augmentation forte de la hauteur visuelle des cards mobiles de la section `Projects` en resserrant nettement leur ratio d’image pour leur redonner plus de présence verticale à l’écran.
- 20:50 Allègement visuel supplémentaire de la scène mobile `Projects` en supprimant l’effet de voile latéral et le dimming agressif des cards actives, tout en réduisant nettement la taille des cartes, des overlays et du padding pour afficher plus de projets à l’écran.
- 20:28 Correction de l’expérience mobile de la section `Projects` après vérification dans le browser intégré : la preview Loom n’est plus masquée sur petit écran, le tap sur une card ouvre une modale vidéo visible avec fermeture dédiée, le scroll de fond est bloqué pendant l’ouverture et le rail ne rogne plus la première carte à gauche.
- 14:42 Correction responsive mobile de la hero et du bandeau logos avec suppression du débordement horizontal global, resserrage du wordmark, empilement des cartes de service sur petit écran et réduction du grand vide bas dans la scène principale.
- 14:24 Renommage éditorial des 7 projets Loom dans `src/data/site-content.ts` avec titres, descriptions et résultats réécrits en FR/EN à partir du contenu réel des walkthroughs pour remplacer les placeholders trop génériques.
- 14:13 Recalage des cards de la section `Projects` vers un format plus panoramique avec moins de hauteur et davantage de largeur, sur desktop comme sur les breakpoints intermédiaires et mobile.
- 14:13 Nouvelle augmentation de la présence visuelle des cards de la section `Projects` en élargissant encore leur hauteur d’affichage dans la grille.
- 14:11 Nouvelle augmentation légère de la hauteur des cards de la section `Projects` pour leur donner davantage de présence visuelle dans la grille.
- 14:08 Augmentation légère de la hauteur visuelle des cards de la section `Projects` en ajustant leur ratio d’image, afin d’obtenir une présence plus forte sans casser le carrousel existant.
- 14:14 Correction de la source des miniatures de la section `Projects` pour utiliser les vraies `thumbnail_url` de Loom via `oEmbed`, avec repli sur l’image projet seulement si Loom ne renvoie pas de vignette exploitable.
- 14:05 Correction de l’interaction dans la section `Projects` pour qu’une carte agrandie bloque bien les éléments derrière elle, tout en rendant le spotlight et ses liens réellement cliquables et en remplaçant les miniatures Loom vides par des images visibles par défaut.
- 13:54 Intégration des projets fournis dans la section `Projects` avec 7 walkthroughs Loom réels et 3 prototypes Stitch reliés aux cartes concernées, puis refonte de `src/sections/projects-section.tsx` pour afficher une vidéo et des liens externes propres à chaque projet.

## 29-06-2026

- 10:18 Généralisation des animations d’entrée GSAP sur l’ensemble des sections avec un reveal plus premium (opacity, translate, léger scale et blur), puis branchement explicite des blocs restés statiques comme `About`, le marquee logos, `Projects`, `FAQ`, le formulaire de contact et le footer.
- 09:46 Remplacement de la palette du site par une nouvelle gamme issue du logo MAPBRAIN autour du saumon `#D09880` et de deux teintes rose/violet, avec refonte des variables globales, des gradients principaux et des accents visuels dans la hero, les blocs promesse, partenaires, automatisation, contact et présentation.
- 01:36 Correction de la section de contact en supprimant une prop devenue inutile dans `src/sections/final-cta-section.tsx` et en réalignant son appel dans `src/App.tsx` pour rétablir un build propre.
- 01:36 Relance complète de la validation projet avec `tsc --noEmit`, `eslint` et `vite build`, puis remise à l'état du dépôt du `pnpm-lock.yaml` modifié uniquement par la réparation d'environnement locale.

## 23-06-2026

- 09:41 Création d'un `AGENTS.md` projet pour cadrer le positionnement MAPBRAIN, la promesse éditoriale, les priorités produit et les règles de collaboration pour le développement du site portfolio.
- 09:41 Ajout d'un dossier `.agents/rules` avec des règles dédiées au contenu, à React, TypeScript strict, Tailwind CSS, la sécurité, l'accessibilité et GSAP afin d'encadrer les futures implémentations.
- 09:41 Installation de `tailwindcss`, `@tailwindcss/vite`, `gsap` et `lucide-react` avec `pnpm`, puis branchement de Tailwind dans `vite.config.js` et `src/index.css`.
- 11:24 Refonte visuelle de la home page en s'appuyant sur les captures de référence, avec une palette orange plus marquée, des sections réagencées dans un style plus éditorial et une hero repensée.
- 11:24 Remplacement du grand visuel de la hero par un fond orange animé en vagues légères, intégré en Tailwind/CSS pour conserver un rendu premium, lisible et cohérent sur mobile comme sur desktop.
- 11:34 Localisation complète des textes de la hero selon la langue active, ajout des gardes de réduction de mouvement et ajustement du contraste du panneau animé pour fiabiliser le rendu.
- 11:34 Refonte des sections promesse, audiences, méthode, IA, capacités, écosystème et CTA final dans une direction plus orange et plus éditoriale, avec ajout d'une vraie section `Projets` au portfolio.
- 14:45 Correction du layout desktop de la section `Capacités d’exécution` en supprimant une grille parente devenue vide, ce qui élimine la grande colonne blanche à droite et redonne une largeur correcte au contenu.

## 24-06-2026

- 10:41 Refonte majeure de la home page pour la rapprocher fortement de l’architecture visuelle d’Avoora, avec une hero type wordmark géant, une grande scène dégradée, des headings de section en bandeau et des cartes plus proches de la référence.
- 10:41 Remplacement de la palette précédente par une direction construite autour des couleurs `#c18bd1` et `#d69b82`, intégrées dans les surfaces, gradients, panneaux et blocs éditoriaux de toute la page.
- 10:41 Adaptation des sections `Promesse`, `Pour qui`, `Méthode`, `IA`, `Projets`, `Capacités`, `Écosystème` et `Contact` vers des compositions inspirées d’Avoora tout en conservant le contenu MAPBRAIN, le switch FR/EN et le logo `public/logo-mapbrain.png`.
- 11:19 Refonte ciblée de la zone header/hero pour rapprocher la composition de la référence: wordmark géant, carte contact top-right, scène dégradée, colonne d'actions et cartes basses réalignées.
- 11:26 Recomposition stricte du header intégré à la hero selon la référence, sans bande de header séparée, avec top bar fusionnée, carte contact repositionnée et ajustements fins des proportions du hero.
- 11:41 Nouvelle itération de la hero pour rapprocher plus finement le wordmark, la top bar minimale, le panneau dégradé teal/bleu/orange, l’ancrage bas des cartes et la densité visuelle de la colonne d’actions.
- 10:57 Refonte ciblée des sections centrales `Promesse`, `Pour qui`, `Framework` et `IA & automatisation` vers une structure plus littérale type Avoora, avec grands bandeaux, cartes éditoriales plus aérées, alternance de surfaces claires et hiérarchie visuelle renforcée sans changer le contenu FR/EN.
- 11:00 Refonte des sections basses `Projets`, `Capacités`, `Écosystème`, `Contact` et `Footer` vers une composition beaucoup plus fidèle aux slices Avoora, avec grandes cartes éditoriales, rythmes de grille plus précis, CTA final bipartite et clôture de marque plus premium tout en conservant le contenu MAPBRAIN en FR/EN.
- 14:58 Deuxième passe de fidélité visuelle sur les sections basses pour coller plus littéralement aux slices Avoora: bandeau `Case Studies` recentré, carte projet héro plus structurée, bloc `Let's Talk` réagencé en double colonne proche de la référence et footer reconstruit avec cartes de navigation fines, ligne de copyright et wordmark final dominant.

## 28-06-2026

- 11:12 Refonte du footer en version full width inspirée de la référence fournie, avec ligne haute minimaliste, liens MAPBRAIN adaptés au site et grand wordmark texturé `MAPBRAIN` occupant toute la largeur.
- 09:55 Suppression complète du contenu du header pour ne conserver qu’un unique bouton de bascule de langue aligné à droite, avec interaction FR/EN directe et accessible.
- 09:55 Refonte de la hero pour la rapprocher beaucoup plus strictement de la référence `slice-000.png` avec wordmark géant, carte de contact en haut à droite, scène dégradée immersive, colonne d’actions et cartes basses réorganisées autour du contenu MAPBRAIN.
- 09:55 Réécriture des contenus hero FR/EN et ajustement des gradients, accents et micro-éléments graphiques afin de conserver la composition Avoora tout en remplaçant la marque et le message par ceux de MAPBRAIN.
- 10:08 Correction d’un écran blanc au chargement en remplaçant dans la hero une icône `lucide-react` invalide (`Linkedin`) par une icône exportée (`Globe`), puis validation du typage avec `tsc --noEmit`.
- 10:16 Remplacement du simple bouton de langue par un vrai toggle segmenté FR/EN avec curseur glissant, animation de slide et états visuels plus nets dans le header.
- 10:22 Réduction du switch de langue du header vers une version beaucoup plus petite et minimaliste, sans icône, avec une capsule glissante inspirée de l’esprit `shadcn/ui`.
- 10:34 Recalage visuel itératif de la hero contre la référence `slice-000.png` depuis le browser en 1920x1080: nouvelle police d’affichage, hiérarchie typo resserrée, panneau dégradé retouché, carte contact redimensionnée, panneaux translucides et cartes basses rapprochés de la composition Avoora.
- 10:34 Réécriture ciblée du copy hero FR/EN pour mieux épouser la structure de la référence, avec un grand titre blanc plus compact, un body plus court et une lecture plus proche du rythme visuel attendu.
- 10:46 Suppression de l’accroche supérieure de la hero, suppression du bloc CTA + panneau vitré montré en référence utilisateur, élargissement du panneau principal et remplacement des placeholders avatars par de vraies photos de profils externes.
- 10:46 Remplacement de la colonne d’actions droite par une colonne sociale `LinkedIn / Instagram / X / Facebook` avec logos externes, puis réajustement de la largeur du hero directement depuis le browser ouvert.
- 10:58 Renforcement du wordmark `MAPBRAIN®_Agency` avec une graisse plus marquée, augmentation de l’espace vertical au-dessus de la hero et refonte du fond animé vers une composition plus vivante proche de la référence.
- 10:58 Ajout d’un système de phrases rotatives animées pour le message principal de la hero, avec transitions douces, respect du mode `prefers-reduced-motion` et recalage de la largeur du bloc de titre après vérification directe dans le browser.
- 11:07 Ajout sous la hero d’un bandeau de logos défilants sans texte, très proche visuellement de la section supérieure, avec répétition du logo MAPBRAIN, filtre gris et animation marquee continue.
- 11:18 Ajout d’une section `About / Key Figures / Recognition` inspirée de la référence, placée juste après le bandeau de logos, avec doubles visuels colorés, chiffres MAPBRAIN et grille de reconnaissances stratégiques.
- 10:48 Refonte de la section `Projets` en showcase Loom avec deux rails vidéo défilants, cartes enrichies à partir des vrais contenus MAPBRAIN et spotlight central qui agrandit et lance la vidéo placeholder au survol.
- 10:54 Déplacement de la section `Projets` juste après `About` puis refonte de sa scène en version beaucoup plus large, plus haute et full bleed, avec spotlight central dominant et rails vidéo débordants inspirés beaucoup plus littéralement de la référence fournie.
- 10:56 Suppression des sections `Pourquoi MAPBRAIN`, `Trois séquences pour cadrer, construire et faire passer le produit à l’échelle.` et `Parlons-en` afin d’alléger la home et recentrer le parcours sur les blocs jugés utiles.
- 10:58 Élargissement du container éditorial de la section `Projets` pour laisser davantage d’amplitude au grand titre et au texte d’introduction avant la scène vidéo.
- 10:59 Suppression du padding bas inutile sous l’en-tête éditorial de la section `Projets` pour coller le contenu à la scène vidéo sans grand vide intermédiaire.
- 11:01 Intégration visible du vrai embed Loom fourni dans le spotlight central de la section `Projets`, avec recentrage strict à l’intérieur de la section pour éviter tout débordement hors de la scène.
- 11:05 Optimisation ciblée de la section `Projets` pour restaurer la fluidité du site: embed Loom chargé seulement après survol, suppression du chargement permanent, réduction du nombre de cartes, arrêt des animations pendant l’état actif et allègement des effets CSS coûteux.
- 11:07 Correction de l’interaction de fermeture dans la section `Projets`: un clic dans la scène en dehors des cartes referme désormais correctement la vidéo agrandie.
- 11:11 Refonte visuelle du header et des cards de la section `Projets` avec intitulé plus court, espacement titre/sous-titre rééquilibré, rapprochement du carrousel, cards Loom plus grandes et remplacement des visuels custom par de vraies miniatures Loom.
- 11:13 Remplacement de l’URL d’embed Loom de la section `Projets` par l’embed exact fourni afin d’aligner strictement le lecteur affiché sur la source Loom demandée.
- 11:16 Ajout d’une instrumentation client massive dans la section `Projets` avec logs détaillés sur les rendus, états, survols, sorties de hover, mouvements souris, thumbnails Loom, iframe Loom, erreurs runtime et snapshots réguliers des ressources/perfs pour débogage poussé.
- 11:20 Correction basée sur les logs de la section `Projets` en basculant la miniature et l’iframe vers les métadonnées oEmbed Loom réelles, avec vignette Loom visible aussi dans le panneau central avant le montage du lecteur.
- 11:24 Refonte complète de la section située sous `Projets` en bloc `Notre expertise / Our expertise` inspiré de la référence, avec accordéon horizontal 5 services et contenu MAPBRAIN réparti entre stratégie, design, développement web, IA & automation et growth ops.
- 11:28 Deuxième passe de fidélité visuelle sur la section `Notre expertise` pour la rapprocher plus littéralement de la référence: heading plus fin, séparation gauche/droite plus stricte, panneaux plus pâles, proportions d’accordéon recalées et transitions de hover plus douces.
- 11:30 Uniformisation du fond global du site en `#F9F9F9` sur l’ensemble des sections et ralentissement supplémentaire de l’animation de la section `Notre expertise` avec une courbe plus douce et moins abrupte.
- 19:31 Forçage global du fond `#f9f9f9` sur toutes les sections racines du site via la feuille de style principale afin d’uniformiser entièrement l’arrière-plan de la page.
- 19:37 Uniformisation du rythme vertical entre toutes les sections affichées de la home via des classes partagées d’espacement (`section-shell`), avec recalage de la hero, du bandeau logos, des sections éditoriales, de l’intro projets et du footer pour obtenir un rendu visuellement cohérent.
- 19:42 Réduction du rythme vertical global entre les sections en resserrant les classes d’espacement partagées pour obtenir une page plus compacte tout en conservant une séparation homogène entre les blocs.
- 19:49 Harmonisation des titres de sections hors hero autour d’un composant récurrent `SectionBandHeading`, avec un même bandeau titre/eyebrow appliqué aux sections affichées et aux sections de réserve, puis validation du typage via `tsc --noEmit`.
- 19:53 Élargissement net du conteneur commun des titres de sections en doublant la largeur maximale utile du bloc titre et en réduisant la colonne secondaire du bandeau pour laisser plus d’amplitude aux intitulés.
- 19:56 Uniformisation de la largeur des sections sur le gabarit `About` en ramenant tous les wrappers principaux à `max-w-[1720px]`, y compris `Projects`, `Capabilities`, `Partners`, `Contact`, `Promise` et `Framework`, puis validation via `tsc --noEmit`.
- 20:02 Adoucissement supplémentaire de l’accordéon `Notre expertise` en réduisant l’écart de largeur entre cartes actives et inactives et en allongeant les transitions pour obtenir un hover plus léger et moins abrupt.
- 20:05 Suppression du léger effet de tremblement sur le hover de `Notre expertise` en évitant les réactivations d’état inutiles et en retirant les transitions parasites sur le titre vertical, l’image et le bouton.
- 20:08 Agrandissement supplémentaire des cards du carrousel Loom dans la section `Des projets montrés en Loom, pas racontés.` sur desktop et sur les breakpoints intermédiaires.
- 20:12 Refonte complète de la section `Une offre pensée pour les structures qui doivent décider vite et bien.` dans un style plus cohérent avec les autres sections récentes, avec grande carte leader, colonnes secondaires plus éditoriales et bloc final sombre de synthèse.
- 20:16 Refonte plus radicale de la section audiences dans une direction plus premium et moins générique via un grand manifeste éditorial à gauche et un rail de cartes cibles à droite, pour mieux coller au langage visuel des sections récentes.
- 20:20 Remplacement de la section audiences par une vraie composition bento grid avec alternance cartes texte / cartes image, en réinjectant le contenu MAPBRAIN dans une structure beaucoup plus proche de la nouvelle référence fournie.
- 20:24 Réalignement strict de la bento grid de la section audiences avec des hauteurs de lignes fixes et des spans explicites afin que toutes les cards tombent proprement sur une grille cohérente.
- 20:28 Recalcul complet de la section audiences en vraie grille 4x2 régulière, sans spans asymétriques, avec hauteurs identiques et copy raccourcie pour obtenir un alignement propre et stable.
- 20:08 Correction du fond du footer en remplaçant la couleur codée en dur `#f6f3ef` par `var(--surface)`, avec réalignement du gradient bas et des `ring-offset` de focus pour conserver un rendu cohérent avec le reste du site.
- 20:20 Réduction du grand vide sous les vidéos Loom dans la section projets en abaissant la hauteur minimale de la scène et en resserrant son padding vertical pour que le bloc épouse mieux la hauteur réelle du contenu.
- 20:27 Refonte de la section audiences en 4 colonnes par 2 rangées avec cards toutes à la même taille et alternance stricte `texte/image`, `image/texte`, `texte/image`, `image/texte`, tout en conservant les contenus localisés FR/EN.
- 20:30 Remplacement de l’image externe cassée du cerveau IA par un visuel SVG local `public/ai-brain-illustration.svg` afin de garantir un chargement fiable et cohérent dans la grille audiences, puis validation via `tsc --noEmit`.
- 20:32 Refonte complète de la section écosystème vers une composition plus premium: grand manifeste sombre avec points d’accélération, colonne d’avantages opérationnels structurés et registre de partenaires en grille éditoriale, le tout sans changer les données métier FR/EN.
- 20:35 Deuxième refonte de la section écosystème dans une direction plus légère et plus illustrative inspirée des autres sections: scène image immersive, cartes signal plus compactes, icônes, capsules partenaires animées et réduction nette de la densité de texte, puis validation via `tsc --noEmit`.
- 20:38 Fusion de tout le contenu de la section écosystème dans un unique bloc principal en supprimant le panneau secondaire, avec intégration directe des capsules partenaires et des stats sous la scène principale pour un rendu plus compact et cohérent.
- 20:39 Suppression complète du bloc inférieur de la section écosystème contenant les capsules partenaires et les cartes statistiques afin de ne conserver que la scène principale et la colonne d’avantages.
- 20:42 Élargissement du panneau texte flottant dans la section écosystème en augmentant nettement sa largeur utile et en desserrant légèrement ses marges latérales pour améliorer la lecture.
- 20:45 Ajout d’une nouvelle section FAQ avec données FR/EN, accordéon de questions, visuel latéral et CTA de contact, puis insertion de ce bloc dans la home avant le footer en attente de validation avant commit.
- 20:47 Transformation du bloc contact en vrai formulaire avec champs nom, email, société et message, puis mise en place d’un envoi simple via `mailto` pour disposer d’une interaction réelle sans backend.
- 20:48 Réintégration effective de la section contact dans le flux principal de la home après la FAQ, afin de rendre le formulaire visible sur la page et non seulement présent dans son composant.
- 20:52 Refonte stricte du bloc `Let's Talk` pour le rapprocher au plus près de la référence fournie: titre centré sans bandeau standard, panneau clair en deux colonnes, libellés et placeholders exacts, image latérale VR, liste `What we offer`, zones `E-Mail / Office` et bouton `Submit` sans ajout d’éléments hors capture.
- 21:00 Traduction du bloc contact dans les deux langues en adaptant le titre, les intertitres, la liste d’offre, le texte d’introduction, les placeholders du formulaire et le libellé du bouton selon la langue active.
