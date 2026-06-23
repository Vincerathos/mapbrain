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
      eyebrow: 'Le studio qui transforme les idées en entreprises performantes',
      title: 'Analyse. Build. Scale.',
      subtitle: 'Un partenaire unique pour structurer, construire et accélérer.',
      body:
        "Nous aidons les startups, PME et organisations à valider leurs opportunités, concevoir les bons produits et activer la croissance avec l'intelligence artificielle, le design et la technologie.",
      primaryCta: { href: '#contact', label: 'Réserver un audit stratégique' },
      secondaryCta: { href: '#framework', label: 'Découvrir notre méthode' },
      badgeTitle: 'MAPBRAIN',
      badgeBody: 'Audit stratégique et accélération produit',
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
      visualEyebrow: 'Stratégie / Design / Engineering / IA',
      visualTitle: 'Pensé pour rester vivant, précis et immédiatement mémorable.'
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
        'Même au lancement, le portfolio doit faire sentir le type de mandats que MAPBRAIN peut porter: cadrage fort, exécution propre et impact métier lisible.',
      items: [
        {
          sector: 'SaaS B2B',
          title: 'Plateforme de pilotage commercial augmentée par IA.',
          description:
            'Refonte d’un outil de prospection et de suivi pour faire converger qualification, relances et reporting dans une même interface.',
          outcomes: ['Tunnel clarifié', 'Temps de traitement réduit', 'Meilleure visibilité pipeline'],
          image: {
            src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80',
            alt: 'Dashboard analytique premium affiché sur grand écran dans un environnement produit.'
          }
        },
        {
          sector: 'Service & opérations',
          title: 'Système d’automatisation métier pour équipe en croissance.',
          description:
            'Conception d’un socle digital qui connecte les demandes, les documents et les validations pour fluidifier les opérations internes.',
          outcomes: ['Moins de tâches manuelles', 'Circulation d’information plus nette', 'Base prête à scaler'],
          image: {
            src: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80',
            alt: 'Équipe de travail autour d’écrans et de documents pour piloter des opérations.'
          }
        },
        {
          sector: 'Marque & acquisition',
          title: 'Écosystème de contenu et de conversion pour offre premium.',
          description:
            'Direction de site, structure éditoriale et dispositifs d’acquisition pour rendre une offre plus lisible, plus crédible et plus performante.',
          outcomes: ['Positionnement renforcé', 'Lecture de l’offre simplifiée', 'Conversion mieux soutenue'],
          image: {
            src: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&q=80',
            alt: 'Studio créatif avec équipe produit et grands écrans de travail collaboratif.'
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
      eyebrow: 'The studio turning ideas into high-performing businesses',
      title: 'Analyze. Build. Scale.',
      subtitle: 'One partner to structure, build and accelerate.',
      body:
        'We help startups, SMEs and organizations validate opportunities, shape the right products and activate growth through artificial intelligence, design and technology.',
      primaryCta: { href: '#contact', label: 'Book a strategic audit' },
      secondaryCta: { href: '#framework', label: 'Explore our method' },
      badgeTitle: 'MAPBRAIN',
      badgeBody: 'Strategic audit and product acceleration',
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
      visualEyebrow: 'Strategy / Design / Engineering / AI',
      visualTitle: 'Built to stay alive, sharp and instantly memorable.'
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
        'Even in the first release, the portfolio should express the kind of mandates MAPBRAIN can lead: strong framing, clean execution and measurable business value.',
      items: [
        {
          sector: 'B2B SaaS',
          title: 'AI-augmented commercial steering platform.',
          description:
            'A redesign of a prospecting and follow-up tool to align qualification, outreach and reporting inside one sharper product surface.',
          outcomes: ['Clearer funnel', 'Lower handling time', 'Stronger pipeline visibility'],
          image: {
            src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80',
            alt: 'Premium analytics dashboard displayed on a large screen in a product environment.'
          }
        },
        {
          sector: 'Services & operations',
          title: 'Operational automation system for a scaling team.',
          description:
            'A digital backbone connecting requests, documents and approvals to make internal execution cleaner and easier to scale.',
          outcomes: ['Less manual work', 'Cleaner information flow', 'Scalable operating base'],
          image: {
            src: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80',
            alt: 'Working team around screens and documents to steer operations.'
          }
        },
        {
          sector: 'Brand & acquisition',
          title: 'Content and conversion ecosystem for a premium offer.',
          description:
            'Site direction, editorial structure and acquisition systems shaped to make an offer more readable, credible and performant.',
          outcomes: ['Stronger positioning', 'Simpler offer reading', 'Better conversion support'],
          image: {
            src: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&q=80',
            alt: 'Creative studio with a product team and large collaborative screens.'
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
    footer: {
      blurb: 'MAPBRAIN helps teams turn opportunities into products and products into growth systems.',
      copyright: 'MAPBRAIN — Analyze. Build. Scale.'
    }
  }
}
