# TypeScript Rules

## Strict Typing

- TypeScript strict attendu sur tout nouveau code.
- `any` est interdit.
- `unknown` est autorisé uniquement avec raffinements explicites.
- Les types implicites fragiles doivent être remplacés par des types nommés.

## Modelling

- Créer des interfaces ou types pour les props, données CMS-like, items de
  navigation, cartes de services, témoignages et CTA.
- Préférer les unions littérales quand les valeurs sont finies et connues.
- Éviter les types trop génériques qui masquent les contraintes métier.

## Safety

- Vérifier les données externes avant consommation.
- Typiser les retours des helpers utilitaires.
- Ne pas utiliser d'assertions `as` sans justification claire.

## Maintainability

- Mutualiser les types réutilisés dans des modules dédiés.
- Choisir des noms de types métier plutôt que des noms purement techniques.
- Quand une donnée structure le rendu, son type doit refléter précisément cette
  structure.
