# ReactJS Rules

## Standards

- Utiliser exclusivement des composants fonctionnels.
- Garder les composants petits, explicites et composables.
- Extraire les sections métier dans des composants dédiés dès qu'un fichier
  commence à mélanger plusieurs responsabilités.
- Préférer la composition aux composants trop configurables.

## State Management

- Garder l'état au plus près de son usage.
- Éviter l'état dérivé inutile.
- Utiliser `useEffect` uniquement pour synchroniser avec l'extérieur.
- Nettoyer systématiquement les effets.

## Rendering

- Rendre les listes à partir de données typées et stables.
- Ne jamais utiliser l'index comme `key` si l'ordre peut évoluer.
- Éviter le rendu conditionnel complexe inline quand une extraction améliore la
  lisibilité.

## Project Structure

- Organiser par responsabilité : `components`, `sections`, `hooks`, `lib`,
  `types`, `data` si la base grossit.
- Limiter les composants fourre-tout.
- Les assets et contenus statiques doivent rester faciles à localiser.

## Quality

- Pas de logique métier lourde dans le JSX.
- Pas de manipulation directe du DOM sauf besoin précis d'animation ou
  d'intégration.
- Les composants doivent être pensés mobile-first.
