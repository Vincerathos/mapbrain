import type { Locale, SiteContent } from '../types/site'

export const siteContent: Record<Locale, SiteContent> = {
  fr: {
    meta: {
      title: 'MAPBRAIN | Analyse. Build. Scale.',
      description:
        "MAPBRAIN accompagne les startups, PME et organisations de l'idée à la croissance grâce à la stratégie, au design, au développement et à l'IA."
    },
    navigation: {
      items: [
        { href: '#promise', label: 'Promesse' },
        { href: '#framework', label: 'Méthode' },
        { href: '#automation', label: 'IA & automatisation' },
        { href: '#projects', label: 'Projets' },
        { href: '#capabilities', label: 'Capacités' },
        { href: '#partners', label: 'Écosystème' }
      ],
      cta: { href: '#contact', label: 'Réserver un audit' }
    },
    hero: {
      eyebrow: 'Conseil, produit, IA et croissance dans une seule trajectoire',
      title: 'Analyse. Build. Scale.',
      subtitle: 'Analyser juste. Construire vite. Accélérer durablement.',
      body:
        'MAPBRAIN aide les équipes à réduire le risque, accélérer les décisions et produire plus vite grâce à une exécution unifiée.',
      rotatingPhrases: [
        'Analyser juste. Construire vite. Accélérer durablement.',
        'Valider les opportunités avant de lancer trop tôt.',
        'Concevoir des produits clairs, crédibles et rentables.'
      ],
      primaryCta: { href: '#contact', label: 'Lancer un audit' },
      secondaryCta: { href: '#framework', label: 'Voir le framework' },
      badgeTitle: 'MAPBRAIN Team',
      badgeBody: 'Analyse, build et scale pour les équipes qui veulent aller vite.',
      serviceTags: [
        'Validation business',
        'Design produit',
        'Développement web & mobile',
        'IA appliquée',
        'Croissance'
      ],
      metrics: [
        { value: '03', label: 'chapitres clairs pour passer de l’idée à la croissance' },
        { value: '01', label: 'partenaire pour cadrer, produire et accélérer' },
        { value: '24/7', label: 'capacité d’automatisation pensée pour les équipes' }
      ],
      image: {
        src: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1600&q=80',
        alt: "Équipe en réunion stratégique autour d'une table de travail dans un studio contemporain."
      },
      visualEyebrow: 'Analyse / Build / Scale / IA',
      visualTitle:
        'Une base claire pour prendre de meilleures décisions et accélérer sans disperser l’exécution.'
    },
    about: {
      eyebrow: 'About us',
      title:
        'Nous structurons des produits, des opérations et de la croissance avec une exécution pensée pour durer.',
      body:
        'MAPBRAIN combine stratégie, design, développement, IA et réseau pour transformer une ambition en système concret, crédible et scalable.',
      figures: [
        { value: '100+', label: 'Projects Built' },
        { value: '100%', label: 'Client Satisfaction' },
        { value: '$1M+', label: 'Partner Perks & Credits' },
        { value: 'Worldwide', label: 'Global Presence' },
        { value: 'Several / Week', label: 'MVPs Built' }
      ],
      recognition: [
        { value: '#1', label: 'Mobile App on Coder' },
        { value: 'Station F', label: 'Startup Selection' },
        { value: 'Microsoft & Google', label: 'Official Partnerships' },
        { value: 'Sortlist', label: 'Trusted Agency' },
        { value: 'Cannes Festival', label: 'Selected Program' },
        { value: 'Global Network', label: 'Industry Leaders & Public Figures' },
        { value: '$1M+ Valuation', label: 'Company Growth Milestone' },
        { value: '6 Continents', label: 'International Presence' },
        { value: 'VC & BA Interest', label: 'Investor Recognition' },
        { value: 'AI-Driven', label: 'Product & Growth Experts' }
      ]
    },
    promise: {
      eyebrow: 'Notre promesse',
      title: "Passer de l'idée à la croissance sans fragmenter l'exécution.",
      body:
        'MAPBRAIN réunit stratégie, intelligence artificielle, design et engineering dans un même mouvement. Le résultat recherché est simple : moins de friction, moins de risque et plus de vitesse.',
      points: [
        {
          title: 'Comprendre avant de produire',
          description:
            'Chaque décision produit est ancrée dans une lecture business, marché et usage.'
        },
        {
          title: 'Construire sans dette évitable',
          description:
            'Le design, la technique et la structure de contenu avancent ensemble dès le départ.'
        },
        {
          title: 'Accélérer avec de vrais leviers',
          description:
            "L'IA et l'automatisation servent les opérations, les équipes et la croissance concrète."
        }
      ]
    },
    audiences: {
      eyebrow: 'Pour qui',
      title: 'Une offre pensée pour les structures qui doivent décider vite et bien.',
      items: [
        {
          icon: 'rocket',
          title: 'Startups',
          description: 'Valider une idée, lancer un produit et accélérer une traction encore fragile.'
        },
        {
          icon: 'factory',
          title: 'PME',
          description: 'Automatiser les opérations, gagner du temps et améliorer la productivité.'
        },
        {
          icon: 'building',
          title: 'Entreprises',
          description: "Moderniser des parcours, créer de nouveaux services et intégrer l'IA utile."
        },
        {
          icon: 'landmark',
          title: 'Organisations',
          description: "Structurer l'innovation, piloter de nouveaux projets et déployer des initiatives lisibles."
        }
      ]
    },
    framework: {
      eyebrow: 'Le framework MAPBRAIN',
      title: 'Trois séquences pour cadrer, construire et faire passer le produit à l’échelle.',
      body:
        'Le site suit volontairement une logique séquentielle : analyser avant d’investir, produire avec précision, puis accélérer avec les bons leviers.',
      whatWeDoLabel: 'Ce que nous faisons',
      gainsLabel: 'Ce que vous gagnez',
      steps: [
        {
          step: '01',
          label: 'Analyse',
          title: 'Comprendre le marché, les usages et la valeur avant le développement.',
          description:
            'Nous clarifions l’opportunité, les angles de différenciation et les arbitrages business pour éviter les faux départs.',
          whatWeDo: [
            'Études de marché et lecture concurrentielle',
            'Validation business et produit',
            'Cadrage de proposition de valeur',
            'Hypothèses de croissance prioritaires'
          ],
          gains: ['Moins de risque', 'Plus de clarté', 'Des décisions plus rapides'],
          image: {
            src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80',
            alt: 'Session de cadrage stratégique autour de documents et indicateurs.'
          }
        },
        {
          step: '02',
          label: 'Build',
          title: 'Transformer une direction claire en produit digital crédible et performant.',
          description:
            'Nous dessinons l’expérience, la structure et la base technique avec une exécution alignée sur la vitesse de mise sur le marché.',
          whatWeDo: [
            'UX/UI design et direction produit',
            'Applications web, mobile et SaaS',
            'E-commerce et outils métiers',
            'Systèmes de contenus et de conversion'
          ],
          gains: ['Meilleure expérience', 'Livraison plus nette', 'Base scalable'],
          image: {
            src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80',
            alt: 'Studio produit avec interface designée sur grand écran et table de travail.'
          }
        },
        {
          step: '03',
          label: 'Scale',
          title: 'Activer la croissance avec des systèmes, du contenu et de l’automatisation.',
          description:
            'Une fois le produit en place, nous structurons les leviers qui augmentent la capacité des équipes sans complexifier les opérations.',
          whatWeDo: [
            'Workflows automatisés et IA métier',
            'Systèmes de prospection et de contenu',
            'Optimisation des opérations',
            'Accès à un écosystème de partenaires'
          ],
          gains: ['Plus de productivité', 'Coûts mieux tenus', 'Croissance plus lisible'],
          image: {
            src: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1600&q=80',
            alt: 'Réunion de pilotage croissance avec écrans, data et coordination équipe.'
          }
        }
      ]
    },
    automation: {
      eyebrow: 'IA & automatisation',
      title: 'Des assistants conçus pour produire un impact métier réel.',
      body:
        "L'objectif n'est pas d'ajouter de la technologie pour cocher une case. L'objectif est d'augmenter les équipes, réduire les tâches répétitives et accélérer les opérations.",
      image: {
        src: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80',
        alt: "Poste de travail avancé avec écrans, données et environnement orienté automatisation."
      },
      useCases: [
        {
          icon: 'target',
          title: 'Assistant Vente',
          description: 'Automatise prospection, qualification, relances et préparation commerciale.',
          results: ['Plus d’opportunités', 'Plus de rendez-vous qualifiés']
        },
        {
          icon: 'megaphone',
          title: 'Assistant Marketing',
          description: 'Produit et redistribue du contenu SEO, social, newsletter ou vidéo.',
          results: ['Visibilité renforcée', 'Coûts de production réduits']
        },
        {
          icon: 'video',
          title: 'Assistant Vidéo',
          description: 'Transforme articles, podcasts ou scripts en contenus multi-formats.',
          results: ['Production accélérée', 'Diffusion multi-plateformes']
        },
        {
          icon: 'users',
          title: 'Assistant RH',
          description: 'Fluidifie tri de candidatures, préqualification et onboarding.',
          results: ['Recrutement plus rapide', 'Charge administrative réduite']
        },
        {
          icon: 'settings',
          title: 'Assistant Opérations',
          description: 'Orchestre documents, reporting, validations et synchronisations métier.',
          results: ['Moins d’erreurs', 'Processus plus propres']
        },
        {
          icon: 'message',
          title: 'Assistant Support',
          description: 'Répond, qualifie et escalade les demandes clients en continu.',
          results: ['Réponses plus rapides', 'Support scalable']
        }
      ]
    },
    projects: {
      eyebrow: 'Projets',
      title: 'Des formats de réalisation pensés comme des preuves de niveau, pas comme une simple galerie.',
      body:
        'Voici des projets réellement montrés via Loom et, quand disponible, reliés à leur prototype Stitch. L’objectif est de montrer le niveau de clarté, de design et d’exécution porté par MAPBRAIN.',
      items: [
        {
          sector: 'Prototype Stitch',
          title: 'Horizon',
          description:
            'Application mobile et web de suivi joueur avec progression, expérience, classement et personnalisation du profil dans une interface orientée engagement.',
          loomUrl: 'https://www.loom.com/share/3e920f6a951c4064afafc168c8c4fd13',
          prototypeUrl: 'https://stitch.withgoogle.com/projects/7178457093054865312',
          outcomes: ['Suivi de progression', 'Classement joueur', 'Expérience mobile + web'],
          image: {
            src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80',
            alt: 'Dashboard analytique premium affiché sur grand écran dans un environnement produit.'
          }
        },
        {
          sector: 'Prototype Stitch',
          title: 'FlatSweep',
          description:
            'Plateforme de changement de logement étudiant pensée pour fluidifier les échanges, simplifier les prises de contact et intégrer une assistance conversationnelle.',
          loomUrl: 'https://www.loom.com/share/7232391d1fff49a99d0892ea79bae4d7',
          prototypeUrl: 'https://stitch.withgoogle.com/projects/118447669452290376',
          outcomes: ['Échange de logements', 'Contact simplifié', 'Bot d’assistance intégré'],
          image: {
            src: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80',
            alt: 'Équipe de travail autour d’écrans et de documents pour piloter des opérations.'
          }
        },
        {
          sector: 'Prototype Stitch',
          title: 'FlatSwipe',
          description:
            'Application de découverte immobilière augmentée par IA, avec recommandations selon les préférences, messagerie intégrée et montée en compte premium.',
          loomUrl: 'https://www.loom.com/share/545c88b73703429ebd8ea374b5b20027',
          prototypeUrl: 'https://stitch.withgoogle.com/projects/3065775189670600268',
          outcomes: ['Recommandation assistée par IA', 'Messagerie native', 'Upsell vers compte pro'],
          image: {
            src: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&q=80',
            alt: 'Studio créatif avec équipe produit et grands écrans de travail collaboratif.'
          }
        },
        {
          sector: 'Walkthrough Loom',
          title: 'Luxury Commerce Dashboard',
          description:
            'Concept de boutique Shopify premium avec vitrine e-commerce, nouvelles collections, bestsellers et tableau de bord vendeur piloté par la performance.',
          loomUrl: 'https://www.loom.com/share/5a5237704f3a467ea51a317d0f57cc36',
          outcomes: ['Storefront premium', 'Dashboard vendeur', 'Suivi revenu et conversion'],
          image: {
            src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80',
            alt: 'Poste de travail avec interface produit et environnement de développement.'
          }
        },
        {
          sector: 'Walkthrough Loom',
          title: 'Linguist VR',
          description:
            'Expérience immersive d’apprentissage des langues en VR avec exploration d’univers, progression XP, classement global et lecture analytique des performances.',
          loomUrl: 'https://www.loom.com/share/9f7b76eb73254366a703d5438af14ae2',
          outcomes: ['Exploration VR', 'Apprentissage multilingue', 'XP et analytics'],
          image: {
            src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80',
            alt: 'Atelier de cadrage stratégique avec documents et écrans en réunion.'
          }
        },
        {
          sector: 'Walkthrough Loom',
          title: 'Missoria Ops',
          description:
            'Interface de gestion opérationnelle pour piloter interventions, satisfaction, tickets, planning, échanges terrain et facturation depuis un même socle.',
          loomUrl: 'https://www.loom.com/share/aa46ced9f1874cdeb5fe4c0527334194',
          outcomes: ['Pilotage des interventions', 'Gestion planning et tickets', 'Facturation intégrée'],
          image: {
            src: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1600&q=80',
            alt: 'Espace de travail premium avec matériaux sobres et perspective architecturale.'
          }
        },
        {
          sector: 'Walkthrough Loom',
          title: 'Studio Portrait AI',
          description:
            'Prototype exploratoire autour d’un studio de génération de portraits assisté par IA, montré comme preuve de capacité sur des interfaces créatives et expérimentales.',
          loomUrl: 'https://www.loom.com/share/b82cf2efa9c64ed9943f719a0cd66ea7',
          outcomes: ['Direction créative IA', 'Interface exploratoire', 'Cas d’usage visuel'],
          image: {
            src: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80',
            alt: 'Environnement technologique avec écrans et données orienté produit et automatisation.'
          }
        }
      ]
    },
    capabilities: {
      eyebrow: 'Capacités d’exécution',
      title: 'Ce que MAPBRAIN peut mettre en place dès le v1 d’un produit ou d’un système.',
      body:
        'Même sans afficher un portfolio détaillé à ce stade, le site doit donner une perception nette de la largeur de nos capacités et de la précision de notre exécution.',
      image: {
        src: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1600&q=80',
        alt: 'Grand espace de travail éditorial et technologique avec matériaux sobres.'
      },
      columns: [
        {
          title: 'Produits livrables',
          items: [
            'Sites corporate premium',
            'Applications web et SaaS',
            'Applications mobiles',
            'Plateformes e-commerce',
            'Outils internes métier'
          ]
        },
        {
          title: 'Formats d’accompagnement',
          items: [
            'Audit stratégique',
            'Sprint de cadrage',
            'Design + développement',
            'Automatisation IA',
            'Optimisation continue'
          ]
        },
        {
          title: 'Résultats recherchés',
          items: [
            'Time-to-market raccourci',
            'Expérience plus convaincante',
            'Ops plus efficaces',
            'Croissance plus structurée',
            'ROI mieux piloté'
          ]
        }
      ]
    },
    partners: {
      eyebrow: 'Écosystème',
      title: 'Un réseau technologique et opérationnel conçu pour aider les projets ambitieux à aller plus vite.',
      body:
        'Construire un produit n’est qu’une partie du chemin. Accéder aux bons outils, aux bons partenaires et aux bonnes opportunités fait souvent la différence.',
      perksLabel: 'Avantages stratégiques',
      logos: [
        { name: 'OpenAI' },
        { name: 'Anthropic' },
        { name: 'Microsoft' },
        { name: 'Google' },
        { name: 'AWS' },
        { name: 'NVIDIA' },
        { name: 'Vercel' },
        { name: 'Stripe' },
        { name: 'HubSpot' },
        { name: 'Airtable' },
        { name: 'Cloudflare' },
        { name: 'GitHub' }
      ],
      perks: [
        'Accès à des crédits cloud et outils IA',
        'Réduction des coûts d’infrastructure',
        'Mise en relation avec des programmes et experts',
        'Accélération de la mise sur le marché'
      ],
      stats: [
        { value: '$1M+', label: 'de perks potentiels cumulés selon éligibilité' },
        { value: 'Global', label: 'écosystème de partenaires et d’experts activable' },
        { value: 'Faster', label: 'accès aux ressources, outils et opportunités utiles' }
      ]
    },
    finalCta: {
      eyebrow: 'Prochaine étape',
      title: 'Vous avez une opportunité, une idée ou un produit à faire accélérer.',
      body:
        'Le point de départ recommandé est un audit stratégique court pour clarifier le potentiel, les priorités et le bon plan d’exécution.',
      primaryCta: {
        href: 'mailto:hello@mapbrain.agency?subject=Audit%20strategique%20MAPBRAIN',
        label: 'Réserver un audit par email'
      },
      channels: [
        { label: 'Email', value: 'hello@mapbrain.agency', href: 'mailto:hello@mapbrain.agency' },
        { label: 'Localisation', value: 'Interventions en France et à distance', href: '#contact' },
        { label: 'Format', value: 'Audit, sprint, build complet ou optimisation', href: '#framework' }
      ]
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Des questions avant de lancer le chantier ?',
      body:
        'Voici les réponses les plus utiles pour comprendre comment MAPBRAIN cadre, exécute et accélère un projet.',
      contactPrompt: 'Vous avez encore une question ?',
      contactCta: {
        href: 'mailto:hello@mapbrain.agency?subject=Question%20MAPBRAIN',
        label: 'Nous contacter'
      },
      visual: {
        src: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&w=1200&q=80',
        alt: 'Professionnel avec casque de realite virtuelle dans un univers technologique'
      },
      items: [
        {
          question: 'Quels types de missions MAPBRAIN peut prendre en charge ?',
          answer:
            'Nous intervenons sur le cadrage stratégique, le design produit, le développement web ou SaaS, l’automatisation IA et les systèmes de croissance.'
        },
        {
          question: 'Travaillez-vous plutôt en audit, en sprint ou en accompagnement long ?',
          answer:
            'Les trois sont possibles. Nous pouvons démarrer par un audit court, enchaîner sur un sprint ciblé ou prendre un produit en exécution plus continue selon le contexte.'
        },
        {
          question: 'À quelle vitesse peut-on lancer une première phase ?',
          answer:
            'Dès que le cadrage et les priorités sont clairs. L’objectif est justement de réduire les cycles de flottement pour enclencher rapidement une première phase utile.'
        },
        {
          question: 'Est-ce que vous combinez stratégie, produit et automatisation dans une même mission ?',
          answer:
            'Oui. MAPBRAIN est pensé pour relier validation business, livraison produit et gains opérationnels dans une même trajectoire.'
        },
        {
          question: 'Travaillez-vous avec des équipes déjà en place ?',
          answer:
            'Oui. Nous pouvons renforcer une équipe existante, structurer la collaboration avec des partenaires externes ou porter une partie de l’exécution en direct.'
        },
        {
          question: 'Comment savoir si un audit est la bonne première étape ?',
          answer:
            'Quand il faut clarifier une opportunité, arbitrer des priorités ou éviter de lancer trop tôt, l’audit permet de réduire le risque avant d’investir davantage.'
        }
      ]
    },
    footer: {
      blurb: 'MAPBRAIN aide les équipes à transformer leurs opportunités en produits puis en leviers de croissance.',
      copyright: 'MAPBRAIN — Analyse. Build. Scale.'
    }
  },
  en: {
    meta: {
      title: 'MAPBRAIN | Analyze. Build. Scale.',
      description:
        'MAPBRAIN helps startups, SMEs and organizations move from opportunity validation to growth through strategy, design, engineering and AI.'
    },
    navigation: {
      items: [
        { href: '#promise', label: 'Promise' },
        { href: '#framework', label: 'Framework' },
        { href: '#automation', label: 'AI & automation' },
        { href: '#projects', label: 'Projects' },
        { href: '#capabilities', label: 'Capabilities' },
        { href: '#partners', label: 'Ecosystem' }
      ],
      cta: { href: '#contact', label: 'Book an audit' }
    },
    hero: {
      eyebrow: 'Strategy, product, AI and growth aligned in one path',
      title: 'Analyze. Build. Scale.',
      subtitle: 'Analyze clearly. Build fast. Scale with intent.',
      body:
        'MAPBRAIN helps teams reduce risk, speed up decisions and ship faster through one aligned execution layer.',
      rotatingPhrases: [
        'Analyze clearly. Build fast. Scale with intent.',
        'Validate opportunities before shipping too early.',
        'Design sharper products with stronger business traction.'
      ],
      primaryCta: { href: '#contact', label: 'Start an audit' },
      secondaryCta: { href: '#framework', label: 'View the framework' },
      badgeTitle: 'MAPBRAIN Team',
      badgeBody: 'Analyze, build and scale for teams that need speed and clarity.',
      serviceTags: [
        'Business validation',
        'Product design',
        'Web & mobile development',
        'Applied AI',
        'Growth systems'
      ],
      metrics: [
        { value: '03', label: 'clear chapters from idea to growth' },
        { value: '01', label: 'partner to frame, build and accelerate' },
        { value: '24/7', label: 'automation capacity designed for teams' }
      ],
      image: {
        src: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1600&q=80',
        alt: 'Leadership team in a strategic workshop around a table inside a contemporary studio.'
      },
      visualEyebrow: 'Analyze / Build / Scale / AI',
      visualTitle:
        'A sharper base for better decisions, faster shipping and more credible growth.'
    },
    about: {
      eyebrow: 'About us',
      title:
        'We structure products, operations and growth through execution designed to hold up over time.',
      body:
        'MAPBRAIN combines strategy, design, development, AI and network leverage to turn ambition into a concrete, credible and scalable system.',
      figures: [
        { value: '100+', label: 'Projects Built' },
        { value: '100%', label: 'Client Satisfaction' },
        { value: '$1M+', label: 'Partner Perks & Credits' },
        { value: 'Worldwide', label: 'Global Presence' },
        { value: 'Several / Week', label: 'MVPs Built' }
      ],
      recognition: [
        { value: '#1', label: 'Mobile App on Coder' },
        { value: 'Station F', label: 'Startup Selection' },
        { value: 'Microsoft & Google', label: 'Official Partnerships' },
        { value: 'Sortlist', label: 'Trusted Agency' },
        { value: 'Cannes Festival', label: 'Selected Program' },
        { value: 'Global Network', label: 'Industry Leaders & Public Figures' },
        { value: '$1M+ Valuation', label: 'Company Growth Milestone' },
        { value: '6 Continents', label: 'International Presence' },
        { value: 'VC & BA Interest', label: 'Investor Recognition' },
        { value: 'AI-Driven', label: 'Product & Growth Experts' }
      ]
    },
    promise: {
      eyebrow: 'Our promise',
      title: 'Move from idea to growth without splitting execution across too many actors.',
      body:
        'MAPBRAIN brings strategy, artificial intelligence, design and engineering into one motion. The outcome is simple: less friction, less risk and more speed.',
      points: [
        {
          title: 'Understand before building',
          description: 'Every product decision is grounded in business, market and user understanding.'
        },
        {
          title: 'Build without avoidable debt',
          description: 'Design, technical structure and content direction evolve together from day one.'
        },
        {
          title: 'Scale with real levers',
          description: 'AI and automation are used to increase team capacity and operational clarity.'
        }
      ]
    },
    audiences: {
      eyebrow: 'Who it is for',
      title: 'An offer designed for teams that need to decide quickly and execute cleanly.',
      items: [
        {
          icon: 'rocket',
          title: 'Startups',
          description: 'Validate an idea, launch a product and accelerate fragile early traction.'
        },
        {
          icon: 'factory',
          title: 'SMEs',
          description: 'Automate operations, save time and improve team productivity.'
        },
        {
          icon: 'building',
          title: 'Enterprises',
          description: 'Modernize journeys, launch new services and integrate useful AI.'
        },
        {
          icon: 'landmark',
          title: 'Organizations',
          description: 'Structure innovation, lead new initiatives and make complex projects readable.'
        }
      ]
    },
    framework: {
      eyebrow: 'The MAPBRAIN framework',
      title: 'Three sequences to frame, build and scale the right product.',
      body:
        'The site intentionally follows a real sequence: analyze before investing, build with precision, then scale with the right systems.',
      whatWeDoLabel: 'What we do',
      gainsLabel: 'What you gain',
      steps: [
        {
          step: '01',
          label: 'Analyze',
          title: 'Understand market, usage and value before development starts.',
          description:
            'We clarify the opportunity, differentiation angles and business trade-offs to avoid expensive false starts.',
          whatWeDo: [
            'Market research and competitive analysis',
            'Business and product validation',
            'Value proposition framing',
            'Priority growth hypotheses'
          ],
          gains: ['Lower risk', 'Clearer direction', 'Faster decisions'],
          image: {
            src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80',
            alt: 'Strategic framing session around documents and indicators.'
          }
        },
        {
          step: '02',
          label: 'Build',
          title: 'Turn a clear direction into a credible and high-performing digital product.',
          description:
            'We shape the experience, structure and technical base with execution aligned to time-to-market.',
          whatWeDo: [
            'UX/UI design and product direction',
            'Web, mobile and SaaS applications',
            'E-commerce and internal tools',
            'Content and conversion systems'
          ],
          gains: ['Stronger experience', 'Sharper delivery', 'Scalable base'],
          image: {
            src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80',
            alt: 'Product studio with large-screen interface design and material workspace.'
          }
        },
        {
          step: '03',
          label: 'Scale',
          title: 'Activate growth with systems, content and automation.',
          description:
            'Once the product exists, we structure the levers that increase team capacity without adding operational noise.',
          whatWeDo: [
            'Workflow automation and AI for teams',
            'Prospecting and content systems',
            'Operational optimization',
            'Access to a relevant partner ecosystem'
          ],
          gains: ['More productivity', 'Tighter costs', 'More readable growth'],
          image: {
            src: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1600&q=80',
            alt: 'Growth steering meeting with screens, data and coordinated team.'
          }
        }
      ]
    },
    automation: {
      eyebrow: 'AI & automation',
      title: 'Assistants designed to create real business impact.',
      body:
        'The goal is not to add technology for its own sake. The goal is to augment teams, reduce repetitive work and accelerate operations.',
      image: {
        src: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80',
        alt: 'Advanced workstation with screens, data and an automation-oriented environment.'
      },
      useCases: [
        {
          icon: 'target',
          title: 'Sales Assistant',
          description: 'Automates prospecting, qualification, follow-ups and sales preparation.',
          results: ['More opportunities', 'More qualified meetings']
        },
        {
          icon: 'megaphone',
          title: 'Marketing Assistant',
          description: 'Creates and redistributes SEO, social, newsletter and video content.',
          results: ['Stronger visibility', 'Lower production cost']
        },
        {
          icon: 'video',
          title: 'Video Assistant',
          description: 'Turns articles, podcasts or scripts into multi-format content.',
          results: ['Faster production', 'Cross-platform distribution']
        },
        {
          icon: 'users',
          title: 'HR Assistant',
          description: 'Improves candidate triage, prequalification and onboarding.',
          results: ['Faster hiring', 'Reduced admin load']
        },
        {
          icon: 'settings',
          title: 'Operations Assistant',
          description: 'Orchestrates documents, reporting, approvals and tool syncing.',
          results: ['Fewer errors', 'Cleaner processes']
        },
        {
          icon: 'message',
          title: 'Support Assistant',
          description: 'Answers, qualifies and escalates customer requests continuously.',
          results: ['Faster replies', 'Scalable support']
        }
      ]
    },
    projects: {
      eyebrow: 'Projects',
      title: 'Delivery formats designed as proof of level, not as a generic gallery.',
      body:
        'These are real agency projects shown through Loom and, when available, connected to their Stitch prototypes. The goal is to make the level of clarity, design and execution visible immediately.',
      items: [
        {
          sector: 'Stitch Prototype',
          title: 'Horizon',
          description:
            'Mobile and web gaming companion focused on player progression, experience, rankings and profile improvement inside one engaging product surface.',
          loomUrl: 'https://www.loom.com/share/3e920f6a951c4064afafc168c8c4fd13',
          prototypeUrl: 'https://stitch.withgoogle.com/projects/7178457093054865312',
          outcomes: ['Progress tracking', 'Player rankings', 'Mobile + web experience'],
          image: {
            src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80',
            alt: 'Premium analytics dashboard displayed on a large screen in a product environment.'
          }
        },
        {
          sector: 'Stitch Prototype',
          title: 'FlatSweep',
          description:
            'Student housing exchange platform designed to simplify relocation, speed up user contact and integrate conversational assistance inside the flow.',
          loomUrl: 'https://www.loom.com/share/7232391d1fff49a99d0892ea79bae4d7',
          prototypeUrl: 'https://stitch.withgoogle.com/projects/118447669452290376',
          outcomes: ['Housing exchange flow', 'Simplified contact', 'Embedded support bot'],
          image: {
            src: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80',
            alt: 'Working team around screens and documents to steer operations.'
          }
        },
        {
          sector: 'Stitch Prototype',
          title: 'FlatSwipe',
          description:
            'AI-assisted housing discovery app with preference-based recommendations, native messaging and a premium account upgrade path.',
          loomUrl: 'https://www.loom.com/share/545c88b73703429ebd8ea374b5b20027',
          prototypeUrl: 'https://stitch.withgoogle.com/projects/3065775189670600268',
          outcomes: ['AI recommendations', 'Built-in messaging', 'Premium upgrade path'],
          image: {
            src: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&q=80',
            alt: 'Creative studio with a product team and large collaborative screens.'
          }
        },
        {
          sector: 'Loom Walkthrough',
          title: 'Luxury Commerce Dashboard',
          description:
            'Premium Shopify commerce concept combining a polished storefront, curated collections, bestsellers and a seller dashboard focused on performance.',
          loomUrl: 'https://www.loom.com/share/5a5237704f3a467ea51a317d0f57cc36',
          outcomes: ['Premium storefront', 'Seller dashboard', 'Revenue and conversion tracking'],
          image: {
            src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80',
            alt: 'Product workstation with interface screens and a development environment.'
          }
        },
        {
          sector: 'Loom Walkthrough',
          title: 'Linguist VR',
          description:
            'Immersive language-learning experience in VR with explorable worlds, XP progression, global ranking and analytics-driven vocabulary improvement.',
          loomUrl: 'https://www.loom.com/share/9f7b76eb73254366a703d5438af14ae2',
          outcomes: ['VR exploration', 'Multi-language learning', 'XP and analytics'],
          image: {
            src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80',
            alt: 'Strategic workshop with documents and screens in a meeting room.'
          }
        },
        {
          sector: 'Loom Walkthrough',
          title: 'Missoria Ops',
          description:
            'Operational management interface built to centralize interventions, satisfaction, open tickets, scheduling, team communication and billing.',
          loomUrl: 'https://www.loom.com/share/aa46ced9f1874cdeb5fe4c0527334194',
          outcomes: ['Intervention tracking', 'Scheduling and tickets', 'Integrated billing'],
          image: {
            src: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1600&q=80',
            alt: 'Premium workspace with restrained materials and architectural perspective.'
          }
        },
        {
          sector: 'Loom Walkthrough',
          title: 'Studio Portrait AI',
          description:
            'Exploratory AI portrait studio shown as a proof of capability on more experimental, creative and generative interface work.',
          loomUrl: 'https://www.loom.com/share/b82cf2efa9c64ed9943f719a0cd66ea7',
          outcomes: ['Creative AI direction', 'Exploratory interface', 'Visual use case'],
          image: {
            src: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80',
            alt: 'Technology environment with screens and data oriented toward product and automation.'
          }
        }
      ]
    },
    capabilities: {
      eyebrow: 'Execution capabilities',
      title: 'What MAPBRAIN can put in place from the first version of a product or system.',
      body:
        'Even without a detailed case-study library yet, the site should clearly communicate the breadth of our capabilities and the sharpness of execution.',
      image: {
        src: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1600&q=80',
        alt: 'Large editorial and technical workspace with restrained materials.'
      },
      columns: [
        {
          title: 'What we build',
          items: [
            'Premium corporate websites',
            'Web applications and SaaS platforms',
            'Mobile applications',
            'E-commerce platforms',
            'Internal business tools'
          ]
        },
        {
          title: 'Engagement formats',
          items: [
            'Strategic audit',
            'Framing sprint',
            'Design + development',
            'AI automation',
            'Continuous optimization'
          ]
        },
        {
          title: 'Target outcomes',
          items: [
            'Shorter time-to-market',
            'More convincing experiences',
            'More efficient operations',
            'More structured growth',
            'Better-controlled ROI'
          ]
        }
      ]
    },
    partners: {
      eyebrow: 'Ecosystem',
      title: 'A technology and growth network built to help ambitious teams move faster.',
      body:
        'Building a product is only one part of the journey. Access to the right tools, people and opportunities often makes the difference.',
      perksLabel: 'Strategic advantages',
      logos: [
        { name: 'OpenAI' },
        { name: 'Anthropic' },
        { name: 'Microsoft' },
        { name: 'Google' },
        { name: 'AWS' },
        { name: 'NVIDIA' },
        { name: 'Vercel' },
        { name: 'Stripe' },
        { name: 'HubSpot' },
        { name: 'Airtable' },
        { name: 'Cloudflare' },
        { name: 'GitHub' }
      ],
      perks: [
        'Access to cloud credits and AI tools',
        'Lower infrastructure costs',
        'Connections to programs and experts',
        'Faster path to market'
      ],
      stats: [
        { value: '$1M+', label: 'in combined startup perks depending on eligibility' },
        { value: 'Global', label: 'partner and expert ecosystem that can be activated fast' },
        { value: 'Faster', label: 'access to useful resources, tooling and opportunities' }
      ]
    },
    finalCta: {
      eyebrow: 'Next step',
      title: 'You already have an opportunity, an idea or a product that needs acceleration.',
      body:
        'The recommended starting point is a short strategic audit to clarify potential, priorities and the right execution plan.',
      primaryCta: {
        href: 'mailto:hello@mapbrain.agency?subject=MAPBRAIN%20Strategic%20Audit',
        label: 'Book an audit by email'
      },
      channels: [
        { label: 'Email', value: 'hello@mapbrain.agency', href: 'mailto:hello@mapbrain.agency' },
        { label: 'Coverage', value: 'France-based and remote engagements', href: '#contact' },
        { label: 'Formats', value: 'Audit, sprint, full build or optimization', href: '#framework' }
      ]
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Questions before starting the work?',
      body:
        'Here are the answers that matter most to understand how MAPBRAIN frames, builds and accelerates a project.',
      contactPrompt: 'Still have a question?',
      contactCta: {
        href: 'mailto:hello@mapbrain.agency?subject=Question%20for%20MAPBRAIN',
        label: 'Contact us'
      },
      visual: {
        src: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&w=1200&q=80',
        alt: 'Professional wearing a virtual reality headset in a tech environment'
      },
      items: [
        {
          question: 'What kinds of missions can MAPBRAIN handle?',
          answer:
            'We work across strategic framing, product design, web or SaaS development, AI automation and growth systems.'
        },
        {
          question: 'Do you work through audits, sprints or longer partnerships?',
          answer:
            'All three are possible. We can start with a short audit, move into a focused sprint or support execution over a longer arc depending on the situation.'
        },
        {
          question: 'How fast can a first phase start?',
          answer:
            'As soon as the framing and priorities are clear. The goal is precisely to reduce drift and trigger a useful first phase quickly.'
        },
        {
          question: 'Can you combine strategy, product and automation in one engagement?',
          answer:
            'Yes. MAPBRAIN is built to connect business validation, product delivery and operational leverage inside one trajectory.'
        },
        {
          question: 'Do you work with teams that already have internal resources?',
          answer:
            'Yes. We can strengthen an existing team, help structure external partners or directly own part of the execution layer.'
        },
        {
          question: 'How do we know a strategic audit is the right first step?',
          answer:
            'When an opportunity needs clarification, priorities are unclear or the risk of building too early is high, the audit is usually the best starting point.'
        }
      ]
    },
    footer: {
      blurb: 'MAPBRAIN helps teams turn opportunities into products and products into growth systems.',
      copyright: 'MAPBRAIN — Analyze. Build. Scale.'
    }
  }
}
