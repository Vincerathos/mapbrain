# Security Rules

## Front-End Security

- Ne jamais exposer de secret, clé privée, token ou variable sensible côté
  client.
- Toute URL externe doit être explicitement validée avant intégration.
- Éviter `dangerouslySetInnerHTML` sauf nécessité absolue et contenu maîtrisé.
- Aucune donnée utilisateur ne doit être injectée dans le DOM sans validation.

## Code Safety

- Préférer les dépendances reconnues et limitées au strict besoin.
- Réduire la surface de code custom pour l'auth, les formulaires et les appels
  externes.
- Garder une séparation claire entre contenu statique, configuration et logique.

## UX Safety

- Les liens externes ouverts dans un nouvel onglet doivent utiliser
  `rel="noreferrer"`.
- Les formulaires doivent prévoir validation, messages d'erreur clairs et
  contraintes minimales.
- Ne pas tromper l'utilisateur avec de faux compteurs, faux logos ou preuves
  non vérifiables.
