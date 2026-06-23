# Tailwind CSS Rules

## Styling Strategy

- Tailwind CSS est la source principale de styles UI.
- Construire les interfaces mobile-first.
- Utiliser une échelle d'espacement cohérente.
- Préférer les classes utilitaires aux fichiers CSS volumineux.

## Design System

- Centraliser les tokens utiles via thème, variables CSS ou conventions de
  classes.
- Définir une identité visuelle premium, nette et non générique.
- Soigner la hiérarchie typographique, les contrastes et les rythmes verticaux.

## Component Rules

- Les classes longues et répétées doivent être factorisées proprement.
- Éviter l'accumulation arbitraire de valeurs custom inline.
- Réserver les styles globaux aux bases du document et aux helpers nécessaires.

## Responsive

- Commencer par le mobile, enrichir ensuite pour `md`, `lg`, `xl`.
- Tester les débordements horizontaux, la lisibilité et le rythme des sections.
- Les composants interactifs doivent rester utilisables au tactile.
