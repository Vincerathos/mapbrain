# GSAP Rules

## Usage

- Utiliser GSAP pour renforcer la narration visuelle, pas pour décorer sans but.
- Privilégier des animations sobres, fluides et utiles à la compréhension.
- Animer l'entrée des sections clés, la mise en valeur des CTA ou la lecture du
  framework, sans surcharge.

## Integration

- Encapsuler les animations dans des hooks ou effets clairement isolés.
- Nettoyer systématiquement les timelines et `ScrollTrigger` si utilisés.
- Limiter les sélecteurs fragiles ; préférer les refs React.

## Performance

- Animer en priorité `transform` et `opacity`.
- Éviter les animations coûteuses sur mobile.
- Prévoir une version dégradée quand `prefers-reduced-motion` est actif.
