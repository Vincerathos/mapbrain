import type { Locale, SiteContent } from '../types/site'

export const siteContent: Record<Locale, SiteContent> = {
  fr: {
    meta: {
      title: 'MapBrain Academy | Formations IA certifiées Qualiopi',
      description:
        "MapBrain Academy forme vos équipes à l'IA : six parcours certifiés Qualiopi, du collaborateur au comité de direction, finançables OPCO. Présentiel, distanciel ou hybride."
    },
    navigation: {
      items: [
        { href: '#formations', label: 'Les parcours' },
        { href: '#faq', label: 'FAQ' },
        { href: '#contact', label: 'Contact' }
      ],
      cta: { href: '#contact', label: 'Demander un devis' }
    },
    agency: {
      meta: {
        title: 'MAPBRAIN | Studio produit & IA',
        description:
          "MAPBRAIN construit des produits digitaux et automatise les opérations : stratégie, design, développement web et SaaS, IA. Basé à Marseille, actif partout."
      },
      navigation: {
        items: [
          { href: '#framework', label: 'Méthode' },
          { href: '#automation', label: 'IA & automatisation' },
          { href: '#projects', label: 'Projets' },
          { href: '#about', label: 'À propos' },
          { href: '#partners', label: 'Écosystème' }
        ],
        cta: { href: '#contact', label: 'Réserver un audit' }
      },
      hero: {
        title: 'Analyse. Build. Scale.',
        subtitle: 'Transformez vos idées en produits concrets.',
        body:
          "Nous construisons des produits digitaux, nous automatisons ce qui fait perdre du temps à vos équipes. De l'idée au lancement, avec un seul interlocuteur.",
        rotatingPhrases: [
          'Transformez vos idées en produits concrets.',
          'Automatisez ce qui vous fait perdre du temps.',
          'Analyse. Build. Scale.'
        ],
        primaryCta: { href: '#contact', label: 'Réserver un audit stratégique' },
        secondaryCta: { href: '#projects', label: 'Voir nos projets' },
        badgeTitle: 'MAPBRAIN Team',
        badgeBody: 'Analyse, build et scale pour les équipes qui veulent aller vite.',
        serviceTags: [
          'Validation business',
          'Design produit',
          'Développement web & mobile',
          'IA & automatisation',
          'Croissance'
        ]
      }
    },
    hero: {
      title: 'Analyse. Build. Scale.',
      subtitle: "Formez vos équipes à l'intelligence artificielle.",
      body:
        "Des formations IA concrètes pour gagner en productivité, automatiser vos processus et transformer votre entreprise. Organisme certifié Qualiopi.",
      rotatingPhrases: [
        "Formez vos équipes à l'intelligence artificielle.",
        'Des formations concrètes, sur vos cas réels.',
        "Gagnez jusqu'à 2 heures par jour."
      ],
      primaryCta: { href: '#formations', label: 'Découvrir les parcours' },
      secondaryCta: { href: '#contact', label: 'Demander un devis' },
      badgeTitle: 'MapBrain Academy',
      badgeBody: 'Centre de formation IA & automatisation, certifié Qualiopi.',
      serviceTags: [
        'Formations sur mesure',
        'Présentiel · Distanciel · Hybride',
        'Ateliers pratiques',
        'Certifié Qualiopi',
        'Finançable OPCO'
      ]
    },
    home: {
      statsTitle: 'MapBrain en quelques chiffres',
      stats: [
        { value: '6', label: 'parcours de formation' },
        { value: '100+', label: "cas d'usage entreprise" },
        { value: '200+', label: 'ateliers pratiques' },
        { value: '1-2 h', label: 'gagnées par jour et par collaborateur' },
        { value: '4-12', label: 'participants par groupe' },
        { value: '100 %', label: 'orienté entreprise' }
      ],
      parcoursTitle: 'Nos parcours',
      parcoursCta: { href: '#formations', label: 'Voir le détail des parcours' },
      parcoursCards: [
        {
          color: 'blue',
          title: 'AI Essentials',
          description: "Comprendre les fondamentaux de l'IA.",
          tools: 'ChatGPT · Claude · Gemini · Copilot'
        },
        {
          color: 'green',
          title: 'IA & Productivité',
          description: "Utiliser l'IA au quotidien. ⭐ Best-seller",
          tools: 'ChatGPT · Claude · Perplexity · NotebookLM'
        },
        {
          color: 'purple',
          title: 'AI Productivity Suite',
          description: 'Les meilleurs outils IA professionnels.',
          tools: 'Microsoft 365 · Google Workspace · Canva'
        },
        {
          color: 'orange',
          title: 'Automatiser son entreprise',
          description: 'Créer des automatisations sans coder.',
          tools: 'Make · n8n · Zapier · Power Automate'
        },
        {
          color: 'red',
          title: 'IA, Automatisation & Agents',
          description: 'Construire des assistants et des agents IA. ⭐ Parcours phare',
          tools: 'Agents IA · API · Webhooks'
        },
        {
          color: 'dark',
          title: 'AI Business Transformation',
          description: "Construire la stratégie IA de votre entreprise.",
          tools: 'Dirigeants · CODIR · COMEX'
        }
      ],
      customTitle: 'Des formations entièrement personnalisées',
      customChecks: [
        'Votre secteur',
        'Vos métiers',
        'Vos processus',
        'Vos objectifs',
        'Votre niveau de maturité IA'
      ],
      customNote: 'Aucune formation standardisée.',
      useCasesTitle: "Des cas d'usage concrets, métier par métier",
      useCaseLabels: { automate: 'Automatiser', create: 'Créer', deploy: 'Déployer' },
      useCases: [
        {
          icon: 'users',
          title: 'Ressources Humaines',
          automate: "le recrutement et l'onboarding",
          create: 'un assistant RH',
          deploy: 'un agent de gestion des talents'
        },
        {
          icon: 'megaphone',
          title: 'Marketing',
          automate: 'les campagnes',
          create: 'un assistant de création de contenu',
          deploy: 'un agent qui pilote contenus et veille'
        },
        {
          icon: 'handshake',
          title: 'Commerce',
          automate: 'la prospection et les relances',
          create: 'un assistant commercial',
          deploy: 'un agent de prospection connecté au CRM'
        },
        {
          icon: 'coins',
          title: 'Finance',
          automate: 'les reportings',
          create: "un assistant d'analyse financière",
          deploy: 'un agent de pilotage des indicateurs'
        },
        {
          icon: 'scale',
          title: 'Juridique',
          automate: 'la gestion documentaire',
          create: 'un assistant juridique',
          deploy: 'un agent de conformité réglementaire'
        },
        {
          icon: 'truck',
          title: 'Supply Chain',
          automate: 'les flux logistiques',
          create: 'un assistant supply chain',
          deploy: "un agent d'optimisation des approvisionnements"
        },
        {
          icon: 'factory',
          title: 'Production',
          automate: 'le suivi des opérations',
          create: 'un assistant qualité',
          deploy: "un agent d'amélioration continue"
        },
        {
          icon: 'headset',
          title: 'Service Client',
          automate: 'les demandes récurrentes',
          create: 'un assistant SAV',
          deploy: 'un agent conversationnel de support'
        },
        {
          icon: 'chart',
          title: 'Business Intelligence',
          automate: 'les tableaux de bord',
          create: 'un assistant data',
          deploy: "un agent d'analyse décisionnelle"
        },
        {
          icon: 'target',
          title: 'Direction',
          automate: 'le reporting exécutif',
          create: 'un assistant de direction',
          deploy: "un agent d'aide à la décision"
        }
      ],
      pedagogyTitle: 'Une pédagogie qui fait la différence',
      pedagogy: [
        { title: 'Learning by doing', body: '60 % de pratique, sur de vrais outils.' },
        { title: 'Ateliers interactifs', body: 'Manipulation immédiate, pas de démo passive.' },
        { title: 'Approche métier', body: 'Des cas adaptés à chaque fonction.' },
        { title: 'Parcours personnalisés', body: 'Adaptés à votre entreprise et vos outils.' },
        { title: 'Évaluation continue', body: 'Avant · pendant · après (jusqu’à 90 jours).' },
        { title: 'Livrables opérationnels', body: 'Prompts, assistants, workflows, plans d’action.' }
      ],
      benefitsTitle: 'Pourquoi former vos équipes ?',
      benefits: [
        'Plus de productivité',
        'Automatisation des processus',
        'Maîtrise de l’IA générative',
        'Meilleure prise de décision',
        'Culture de l’innovation',
        'Compétences d’avenir'
      ],
      audiencesTitle: 'À qui s’adressent nos parcours ?',
      audienceOrgs: ['PME', 'ETI', 'Grandes entreprises', 'Collectivités', 'Administrations', 'Écoles'],
      audiencePeople: [
        'Collaborateurs',
        'Managers',
        'Dirigeants',
        'Comités de direction',
        'Fonctions support',
        'Métiers opérationnels'
      ],
      engagementsTitle: 'Nos engagements',
      engagements: [
        'Formateurs experts',
        'Cas d’usage réels',
        'Ateliers pratiques',
        'Formations interactives',
        'Parcours personnalisés',
        'Certifié Qualiopi',
        'Livrables immédiatement exploitables',
        'Accompagnement orienté résultats'
      ]
    },
    about: {
      eyebrow: 'About us',
      title:
        'Des produits livrés, des clients qui restent. Voilà ce qu’on a construit jusqu’ici.',
      body:
        'Plus de 100 projets livrés, des MVP chaque semaine, et un réseau de partenaires qui ouvre des portes. C’est sur cette base qu’on travaille.',
      figures: [
        { value: '100+', label: 'projets livrés' },
        { value: '100%', label: 'clients satisfaits' },
        { value: '1M$+', label: 'de perks partenaires' },
        { value: 'Monde', label: 'présence internationale' },
        { value: 'Plusieurs / sem.', label: 'MVP construits' }
      ],
      recognition: [
        { value: '#1', label: 'App mobile sur Coder' },
        { value: 'Station F', label: 'Sélection startup' },
        { value: 'Microsoft & Google', label: 'Partenariats officiels' },
        { value: 'Sortlist', label: 'Agence référencée' },
        { value: 'Festival de Cannes', label: 'Programme sélectionné' },
        { value: 'Réseau global', label: 'Leaders et figures publiques' },
        { value: '1M$+ de valorisation', label: 'Étape de croissance' },
        { value: '6 continents', label: 'Présence internationale' },
        { value: 'VC & BA', label: 'Intérêt investisseurs' },
        { value: 'AI-Driven', label: 'Experts produit & croissance' }
      ]
    },
    promise: {
      eyebrow: 'Notre promesse',
      title: "Un seul partenaire pour passer de l'idée à la croissance.",
      body:
        "Un seul interlocuteur, du cadrage au lancement. Moins d'intermédiaires, moins de risques, et des décisions qui se prennent en jours plutôt qu'en semaines.",
      points: [
        {
          title: 'Comprendre avant de produire',
          description:
            "Rien n'est développé avant d'avoir vérifié que le besoin existe. Ça évite de construire dans le vide."
        },
        {
          title: 'Construire sans dette évitable',
          description:
            "Le design et la technique avancent ensemble dès le premier jour, pas l'un après l'autre."
        },
        {
          title: 'Accélérer avec de vrais leviers',
          description:
            "L'automatisation sert d'abord vos équipes : moins de tâches répétitives, plus de temps pour ce qui compte."
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
          description: 'Valider une idée, lancer un produit et accélérer sa croissance.'
        },
        {
          icon: 'factory',
          title: 'PME',
          description: 'Automatiser les opérations, gagner du temps et améliorer la productivité.'
        },
        {
          icon: 'building',
          title: 'Entreprises',
          description: 'Créer de nouveaux services, moderniser les processus et intégrer l’IA.'
        },
        {
          icon: 'landmark',
          title: 'Organisations',
          description: 'Accélérer l’innovation et développer de nouveaux projets.'
        }
      ]
    },
    framework: {
      eyebrow: 'Le framework MAPBRAIN',
      title: 'Trois séquences pour cadrer, construire et faire passer le produit à l’échelle.',
      body:
        "La méthode tient en une phrase : on analyse avant d'investir, on construit, puis on accélère. Dans cet ordre, jamais l'inverse.",
      whatWeDoLabel: 'Ce que nous faisons',
      gainsLabel: 'Ce que vous gagnez',
      steps: [
        {
          step: '01',
          label: 'Analyse',
          title: 'Comprendre avant d’investir.',
          description:
            'Nous analysons le marché, les utilisateurs et les opportunités afin de prendre les bonnes décisions avant de développer.',
          whatWeDo: [
            'Études de marché',
            'Validation business',
            'Validation produit',
            'Analyse concurrentielle',
            'Stratégie de croissance'
          ],
          gains: [
            'Moins de risques',
            'Plus de clarté',
            'Meilleures décisions',
            'Retour sur investissement optimisé'
          ],
          image: {
            src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80',
            alt: 'Session de cadrage stratégique autour de documents et indicateurs.'
          }
        },
        {
          step: '02',
          label: 'Build',
          title: 'Transformer une idée en produit.',
          description:
            'Nous concevons et développons des solutions digitales performantes et évolutives.',
          whatWeDo: [
            'UX/UI Design',
            'Product Design',
            'Applications Web',
            'Applications Mobile',
            'SaaS',
            'E-commerce',
            'Outils métiers',
            'Assistants IA',
            'Agents IA',
            'Automatisations',
            'Workflows intelligents'
          ],
          gains: [
            'Mise sur le marché plus rapide',
            'Meilleure expérience utilisateur',
            'Productivité accrue',
            'Réduction des coûts'
          ],
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
      title: 'Des assistants IA qui font gagner du temps. Pour de vrai.',
      body:
        'Moins de temps passé sur les tâches répétitives, plus de temps pour le travail qui compte. Le reste suit.',
      image: {
        src: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80',
        alt: "Poste de travail avancé avec écrans, données et environnement orienté automatisation."
      },
      rationale: {
        title: "Les entreprises n'adoptent pas l'IA pour remplacer leurs équipes.",
        body: [
          "Elles l'adoptent pour permettre à leurs équipes d'accomplir davantage avec les mêmes ressources."
        ],
        results: [
          'Gain de temps',
          'Réduction des tâches répétitives',
          'Productivité accrue',
          'Meilleure expérience client',
          'Croissance accélérée',
          'Plus de valeur créée par collaborateur'
        ]
      },
      useCases: [
        {
          benefits: [
            'Plus d’opportunités',
            'Plus de rendez-vous qualifiés',
            'Moins de tâches administratives',
            'Plus de temps pour vendre',
            'Cycles de vente plus rapides',
            'Augmentation du chiffre d’affaires'
          ],
          cases: [
            'Recherche de prospects',
            'Qualification',
            'Relances automatiques',
            'Préparation des rendez-vous',
            'Suivi commercial'
          ],
          icon: 'target',
          title: 'Assistant Vente',
          description: 'Automatisez la prospection, les relances et le suivi commercial.',
          examples: [
            'Génération automatique de leads',
            'Enrichissement des contacts',
            'Emails personnalisés',
            'Messages LinkedIn automatisés',
            'Priorisation des opportunités',
            'Mise à jour automatique du CRM'
          ]
        },
        {
          benefits: [
            'Plus de visibilité',
            'Plus de contenu',
            'Meilleur référencement',
            'Réduction des coûts de production'
          ],
          cases: ['LinkedIn', 'SEO', 'Blog', 'Newsletter', 'Réseaux sociaux', 'Communication'],
          icon: 'megaphone',
          title: 'Assistant Marketing & Contenu',
          description: 'Créez et distribuez du contenu à grande échelle.',
          examples: [
            'Création automatique de posts LinkedIn',
            'Génération d’articles SEO',
            'Création de scripts YouTube',
            'Création de contenus TikTok',
            'Instagram Reels',
            'YouTube Shorts'
          ]
        },
        {
          benefits: [
            'Production accélérée',
            'Diffusion multi-plateformes',
            'Audience élargie',
            'Présence continue'
          ],
          icon: 'video',
          title: 'Assistant Vidéo',
          description: 'Produisez du contenu vidéo automatiquement.',
          examples: [
            'Transformer un article en vidéo',
            'Transformer un podcast en Shorts',
            'Générer des vidéos YouTube',
            'Créer des TikTok automatiquement',
            'Générer des sous-titres',
            'Traduire les vidéos en plusieurs langues'
          ]
        },
        {
          benefits: [
            'Recrutement plus rapide',
            'Gain de temps administratif',
            'Processus fluidifiés',
            'Expérience collaborateur améliorée'
          ],
          cases: [
            'Tri des candidatures',
            'Préqualification',
            'Onboarding',
            'Documentation interne',
            'Support collaborateurs'
          ],
          icon: 'users',
          title: 'Assistant RH',
          description: 'Simplifiez le recrutement et l’intégration.',
          examples: [
            'Analyse automatique des CV',
            'Matching candidat/poste',
            'Planification des entretiens',
            'Assistant RH interne',
            'Base de connaissances entreprise'
          ]
        },
        {
          benefits: [
            'Productivité accrue',
            'Réduction des erreurs',
            'Gain de temps',
            'Meilleure organisation',
            'Réduction des coûts opérationnels'
          ],
          cases: [
            'Gestion documentaire',
            'Reporting',
            'Gestion de projets',
            'Workflows internes',
            'Validation de processus'
          ],
          icon: 'settings',
          title: 'Assistant Opérations',
          description: 'Optimisez les processus internes.',
          examples: [
            'Traitement automatique des documents',
            'Extraction de données PDF',
            'Génération de rapports',
            'Automatisation des validations',
            'Synchronisation des outils métiers'
          ]
        },
        {
          benefits: [
            'Réponses plus rapides',
            'Satisfaction client améliorée',
            'Réduction de la charge support',
            'Service client scalable'
          ],
          icon: 'message',
          title: 'Assistant Support',
          description: 'Assistance instantanée 24/7.',
          examples: [
            'Réponses automatiques',
            'FAQ intelligente',
            'Qualification des demandes',
            'Recherche dans la base documentaire',
            'Escalade automatique des demandes complexes'
          ]
        }
      ]
    },
    projects: {
      eyebrow: 'Projets',
      title: 'Des projets qui montrent le niveau d’exécution.',
      body:
        'Chaque projet est montré en vidéo, avec son prototype interactif quand il existe. Jugez sur pièces.',
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
    formations: {
      eyebrow: 'MapBrain Academy',
      title: 'Six parcours pour former vos équipes à l’IA.',
      body:
        "Du premier contact avec ChatGPT jusqu'à la feuille de route IA d'un comité de direction. Toujours sur vos cas réels, avec les outils que vos équipes utilisent déjà : Google, Microsoft, OpenAI, Claude.",
      programs: [
        {
          image: {
            src: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80',
            alt: 'Atelier de formation avec des participants sur ordinateurs portables.'
          },
          title: 'AI Essentials',
          level: 'Débutant',
          description:
            'L’intelligence artificielle pour tous : comprendre l’IA et l’utiliser efficacement au quotidien.',
          topics: [
            'Fondamentaux de l’IA et des LLM',
            'Panorama des outils : ChatGPT, Claude, Gemini, Copilot…',
            'Prompt engineering fondamental',
            'IA responsable, RGPD et cybersécurité',
            'Concevoir son assistant IA personnalisé'
          ],
          audience: 'Tous collaborateurs',
          duration: '1 à 2 jours'
        },
        {
          badge: 'Parcours phare',
          image: {
            src: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=80',
            alt: 'Équipe qui cartographie des processus sur un tableau blanc.'
          },
          title: 'IA, Automatisation & Agents',
          level: 'Intermédiaire à avancé',
          description:
            'Concevoir, automatiser et déployer des assistants et agents IA pour transformer les processus métier.',
          topics: [
            'Cartographier les processus métier',
            'Automatisation no-code : Make, n8n, Power Automate, Zapier',
            'API et webhooks sans coder',
            'Assistants et agents IA spécialisés par métier',
            'Hackathon IA en équipe (format 5 jours)'
          ],
          audience: 'Managers, chefs de projet, responsables métiers',
          duration: '3 à 5 jours'
        },
        {
          image: {
            src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
            alt: 'Espace de travail moderne avec plusieurs écrans et outils numériques.'
          },
          title: 'AI Productivity Suite',
          level: 'Débutant à intermédiaire',
          description:
            'Maîtriser Microsoft Copilot, Google Gemini et les meilleurs outils IA pour un poste de travail augmenté.',
          topics: [
            'Copilot dans Word, Excel, Outlook, Teams, PowerPoint',
            'Gemini dans Gmail, Docs, Sheets et Meet',
            'NotebookLM, Perplexity, Gamma, Canva AI',
            'Audio et vidéo : ElevenLabs, HeyGen, Runway',
            'Atelier : construire son poste de travail augmenté'
          ],
          audience: 'Tous métiers',
          duration: '2 jours'
        },
        {
          badge: 'Best-seller',
          image: {
            src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
            alt: 'Équipe en formation autour d’un ordinateur portable.'
          },
          title: 'IA & Productivité au quotidien',
          level: 'Débutant',
          description:
            'Gagner entre 1 et 2 heures par jour grâce à l’IA générative : la formation pour embarquer toute l’entreprise.',
          topics: [
            'Comprendre l’IA générative',
            'ChatGPT, Claude, Gemini, Copilot, Perplexity, NotebookLM',
            'Rédiger des prompts efficaces',
            'Sécurité, RGPD et IA responsable',
            'Plan de productivité IA sur 30 jours'
          ],
          audience: '100 % des collaborateurs',
          duration: '1 jour'
        },
        {
          badge: 'Très demandée',
          image: {
            src: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1200&q=80',
            alt: 'Écran de travail avec workflows et outils connectés.'
          },
          title: 'Automatiser son entreprise avec l’IA',
          level: 'Débutant à intermédiaire',
          description:
            'Automatiser les tâches répétitives sans écrire une ligne de code et connecter ses applications métier.',
          topics: [
            'Principes de l’automatisation des processus',
            'Make, n8n, Power Automate, Zapier',
            'Connecter ses applications : API et webhooks',
            'Intégrer l’IA dans les workflows',
            'Atelier : son premier workflow intelligent'
          ],
          audience: 'Dirigeants, managers, opérations',
          duration: '2 à 3 jours'
        },
        {
          badge: 'Dirigeants',
          image: {
            src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
            alt: 'Comité de direction en séance de travail stratégique.'
          },
          title: 'AI Business Transformation',
          level: 'Executive',
          description:
            'Définir sa stratégie IA, prioriser les projets à fort ROI et construire une feuille de route sur 12 mois.',
          topics: [
            'Vision stratégique et retour sur investissement',
            'Opportunités IA par fonction de l’entreprise',
            'Gouvernance, RGPD et AI Act',
            'Feuille de route de transformation sur 12 mois',
            'Conduite du changement'
          ],
          audience: 'Dirigeants, CODIR, COMEX',
          duration: '3 jours'
        }
      ],
      formatsTitle: 'Comment ça se passe',
      formats: [
        'Présentiel, distanciel ou hybride',
        'Ateliers 100 % pratiques sur vos cas réels',
        'Groupes de 4 à 12 participants',
        'Supports, prompts et modèles prêts à l’emploi inclus',
        'Évaluations avant, pendant et après — certifié Qualiopi, finançable OPCO',
        'Attestation de fin de formation'
      ],
      note:
        "Chaque parcours s'adapte à vos outils et au niveau de vos équipes. On peut aussi combiner plusieurs parcours ou construire du sur-mesure. Demandez le catalogue, on en parle.",
      cta: {
        href: 'mailto:contact@mapbrain-academy.fr?subject=Catalogue%20de%20formations%20MapBrain%20Academy',
        label: 'Demander le catalogue'
      }
    },
    partners: {
      eyebrow: 'Écosystème',
      title: 'Un écosystème global pensé pour la croissance.',
      body:
        "Construire le produit ne suffit pas. Un crédit cloud, un programme partenaire ou le bon contact au bon moment, ça change souvent la trajectoire d'un projet.",
      advantages: [
        'Accès plus rapide aux ressources',
        'Accès plus rapide aux opportunités de financement',
        'Réduction des coûts d’infrastructure',
        'Partenariats stratégiques',
        'Développement produit plus rapide',
        'Croissance plus rapide'
      ],
      detailGroups: [
        {
          title: 'Partenaires technologiques',
          items: [
            'Microsoft',
            'Google',
            'Amazon Web Services (AWS)',
            'NVIDIA',
            'OpenAI',
            'Anthropic',
            'Notion',
            'PostHog',
            'Vercel',
            'Scaleway',
            'GitHub',
            'Stripe',
            'HubSpot',
            'Airtable',
            'Cloudflare'
          ],
          note: 'et bien d’autres.'
        },
        {
          title: 'Accès à plus de 1M$ de perks startup',
          items: [
            'Cloud Credits',
            'AI Tools',
            'Software Licenses',
            'Hosting',
            'Infrastructure',
            'Technical Support',
            'Startup Programs'
          ],
          note:
            'Selon l’éligibilité, ces avantages peuvent représenter des centaines de milliers de dollars et parfois plus de 1M$ de valeur cumulée.'
        },
        {
          title: 'Accès direct aux écosystèmes d’innovation',
          items: [
            'Program Managers',
            'Startup Program Managers',
            'Ecosystem Leaders',
            'Innovation Managers',
            'AI Experts',
            'Product Experts'
          ],
          note:
            'Nous interagissons régulièrement avec ces profils pour aider nos clients à identifier et accéder aux opportunités pertinentes.'
        }
      ],
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
        'Accès à des licences logicielles et hébergements',
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
      title: 'Prêt à former vos équipes à l’IA ?',
      body:
        "Parlez-nous de vos objectifs : on vous recommande le parcours adapté, ou on le construit sur mesure. Certifié Qualiopi, finançable OPCO. Réponse sous 48 h.",
      primaryCta: {
        href: 'mailto:contact@mapbrain.ai?subject=Devis%20formation%20MAPBRAIN',
        label: 'Demander un devis par email'
      },
      channels: [
        { label: 'Email', value: 'contact@mapbrain.ai', href: 'mailto:contact@mapbrain.ai' },
        { label: 'Localisation', value: 'Interventions en France et à distance', href: '#contact' },
        { label: 'Format', value: 'Audit, sprint, build complet ou optimisation', href: '#framework' }
      ]
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Des questions avant de lancer le projet ?',
      body:
        'Voici les réponses les plus utiles pour comprendre comment MAPBRAIN cadre, exécute et accélère un projet.',
      contactPrompt: 'Vous avez encore une question ?',
      contactCta: {
        href: 'mailto:contact@mapbrain-academy.fr?subject=Question%20MapBrain%20Academy',
        label: 'Nous contacter'
      },
      visual: {
        src: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&w=1200&q=80',
        alt: 'Professionnel avec casque de realite virtuelle dans un univers technologique'
      },
      items: [
        {
          question: 'Quelles formations proposez-vous ?',
          answer:
            "Six parcours, du débutant au comité de direction : AI Essentials, IA & Productivité, AI Productivity Suite, Automatiser son entreprise, IA-Automatisation & Agents, et AI Business Transformation."
        },
        {
          question: 'Êtes-vous certifiés Qualiopi ?',
          answer:
            'Oui, MapBrain est un organisme de formation certifié Qualiopi.'
        },
        {
          question: 'Les formations sont-elles finançables par mon OPCO ?',
          answer:
            'Oui. Grâce à la certification Qualiopi, nos formations sont éligibles aux financements OPCO. On vous aide à monter le dossier.'
        },
        {
          question: 'En présentiel ou à distance ?',
          answer:
            'Les deux, et aussi en hybride. Sur site partout en France, ou en classe virtuelle.'
        },
        {
          question: 'Faut-il des prérequis techniques ?',
          answer:
            'Non pour les parcours débutants : savoir utiliser un ordinateur suffit. Les parcours avancés demandent d’être à l’aise avec les outils numériques, sans programmation.'
        },
        {
          question: 'Combien de participants par session ?',
          answer:
            'De 4 à 12 personnes, pour que chacun manipule vraiment les outils.'
        },
        {
          question: 'Peut-on personnaliser une formation ?',
          answer:
            'Oui, systématiquement : secteur, métiers, processus, outils. Aucune formation standardisée.'
        },
        {
          question: 'Quels outils apprend-on à utiliser ?',
          answer:
            'ChatGPT, Claude, Gemini, Microsoft Copilot, Perplexity, NotebookLM, Make, n8n, Zapier, Power Automate… selon le parcours.'
        },
        {
          question: 'Faites-vous aussi du développement et de l’automatisation ?',
          answer:
            'Oui. MAPBRAIN est aussi un studio produit : audit, design, développement web et SaaS, automatisation IA. Voir l’onglet Méthode.'
        },
        {
          question: 'Comment démarrer ?',
          answer:
            'Écrivez-nous via le formulaire ou à contact@mapbrain-academy.fr. Réponse sous 48 h avec une recommandation de parcours et un devis.'
        }
      ]
    },
    footer: {
      blurb: 'MAPBRAIN construit des produits, automatise des opérations et forme des équipes à l’IA. Basé à Marseille, actif partout.',
      copyright: 'MAPBRAIN — Analyse. Build. Scale.'
    }
  },
  en: {
    meta: {
      title: 'MapBrain Academy | Qualiopi-certified AI training',
      description:
        'MapBrain Academy trains your teams on AI: six Qualiopi-certified tracks, from employees to executive committees. On-site, remote or hybrid.'
    },
    navigation: {
      items: [
        { href: '#formations', label: 'The tracks' },
        { href: '#faq', label: 'FAQ' },
        { href: '#contact', label: 'Contact' }
      ],
      cta: { href: '#contact', label: 'Request a quote' }
    },
    agency: {
      meta: {
        title: 'MAPBRAIN | Product & AI studio',
        description:
          'MAPBRAIN builds digital products and automates operations: strategy, design, web and SaaS development, AI. Based in Marseille, working everywhere.'
      },
      navigation: {
        items: [
          { href: '#framework', label: 'Framework' },
          { href: '#automation', label: 'AI & automation' },
          { href: '#projects', label: 'Projects' },
          { href: '#about', label: 'About' },
          { href: '#partners', label: 'Ecosystem' }
        ],
        cta: { href: '#contact', label: 'Book an audit' }
      },
      hero: {
        title: 'Analyze. Build. Scale.',
        subtitle: 'Turn ideas into real products.',
        body:
          'We build digital products and automate the work that wastes your teams’ time. From idea to launch, with a single point of contact.',
        rotatingPhrases: [
          'Turn ideas into real products.',
          'Automate the work that wastes your time.',
          'Analyze. Build. Scale.'
        ],
        primaryCta: { href: '#contact', label: 'Book a Strategic Audit' },
        secondaryCta: { href: '#projects', label: 'See our projects' },
        badgeTitle: 'MAPBRAIN Team',
        badgeBody: 'Analyze, build and scale for teams that need speed and clarity.',
        serviceTags: [
          'Business validation',
          'Product design',
          'Web & mobile development',
          'AI & automation',
          'Growth'
        ]
      }
    },
    hero: {
      title: 'Analyze. Build. Scale.',
      subtitle: 'Train your teams on artificial intelligence.',
      body:
        'Hands-on AI training to boost productivity, automate your processes and transform your company. Qualiopi-certified training provider.',
      rotatingPhrases: [
        'Train your teams on artificial intelligence.',
        'Hands-on training, built on your real cases.',
        'Save up to 2 hours a day.'
      ],
      primaryCta: { href: '#formations', label: 'Explore the tracks' },
      secondaryCta: { href: '#contact', label: 'Request a quote' },
      badgeTitle: 'MapBrain Academy',
      badgeBody: 'AI & automation training center, Qualiopi certified.',
      serviceTags: [
        'Tailor-made training',
        'On-site · Remote · Hybrid',
        'Hands-on workshops',
        'Qualiopi certified',
        'OPCO fundable'
      ]
    },
    home: {
      statsTitle: 'MapBrain in numbers',
      stats: [
        { value: '6', label: 'training tracks' },
        { value: '100+', label: 'business use cases' },
        { value: '200+', label: 'hands-on workshops' },
        { value: '1-2 h', label: 'saved per day, per employee' },
        { value: '4-12', label: 'participants per group' },
        { value: '100%', label: 'business-oriented' }
      ],
      parcoursTitle: 'Our tracks',
      parcoursCta: { href: '#formations', label: 'See track details' },
      parcoursCards: [
        {
          color: 'blue',
          title: 'AI Essentials',
          description: 'Understand the fundamentals of AI.',
          tools: 'ChatGPT · Claude · Gemini · Copilot'
        },
        {
          color: 'green',
          title: 'AI & Productivity',
          description: 'Use AI every day. ⭐ Best seller',
          tools: 'ChatGPT · Claude · Perplexity · NotebookLM'
        },
        {
          color: 'purple',
          title: 'AI Productivity Suite',
          description: 'The best professional AI tools.',
          tools: 'Microsoft 365 · Google Workspace · Canva'
        },
        {
          color: 'orange',
          title: 'Automate your business',
          description: 'Build automations without coding.',
          tools: 'Make · n8n · Zapier · Power Automate'
        },
        {
          color: 'red',
          title: 'AI, Automation & Agents',
          description: 'Build AI assistants and agents. ⭐ Flagship track',
          tools: 'AI agents · APIs · Webhooks'
        },
        {
          color: 'dark',
          title: 'AI Business Transformation',
          description: 'Build your company’s AI strategy.',
          tools: 'Executives · Boards · Leadership'
        }
      ],
      customTitle: 'Fully personalized training',
      customChecks: [
        'Your industry',
        'Your roles',
        'Your processes',
        'Your goals',
        'Your AI maturity level'
      ],
      customNote: 'No standardized training. Ever.',
      useCasesTitle: 'Concrete use cases, role by role',
      useCaseLabels: { automate: 'Automate', create: 'Create', deploy: 'Deploy' },
      useCases: [
        {
          icon: 'users',
          title: 'Human Resources',
          automate: 'recruitment and onboarding',
          create: 'an HR assistant',
          deploy: 'a talent management agent'
        },
        {
          icon: 'megaphone',
          title: 'Marketing',
          automate: 'campaigns',
          create: 'a content creation assistant',
          deploy: 'an agent running content and monitoring'
        },
        {
          icon: 'handshake',
          title: 'Sales',
          automate: 'prospecting and follow-ups',
          create: 'a sales assistant',
          deploy: 'a prospecting agent connected to your CRM'
        },
        {
          icon: 'coins',
          title: 'Finance',
          automate: 'reporting',
          create: 'a financial analysis assistant',
          deploy: 'a KPI monitoring agent'
        },
        {
          icon: 'scale',
          title: 'Legal',
          automate: 'document management',
          create: 'a legal assistant',
          deploy: 'a regulatory compliance agent'
        },
        {
          icon: 'truck',
          title: 'Supply Chain',
          automate: 'logistics flows',
          create: 'a supply chain assistant',
          deploy: 'a procurement optimization agent'
        },
        {
          icon: 'factory',
          title: 'Operations',
          automate: 'operations tracking',
          create: 'a quality assistant',
          deploy: 'a continuous improvement agent'
        },
        {
          icon: 'headset',
          title: 'Customer Service',
          automate: 'recurring requests',
          create: 'a support assistant',
          deploy: 'a conversational support agent'
        },
        {
          icon: 'chart',
          title: 'Business Intelligence',
          automate: 'dashboards',
          create: 'a data assistant',
          deploy: 'a decision analysis agent'
        },
        {
          icon: 'target',
          title: 'Leadership',
          automate: 'executive reporting',
          create: 'an executive assistant',
          deploy: 'a decision support agent'
        }
      ],
      pedagogyTitle: 'A teaching approach that makes the difference',
      pedagogy: [
        { title: 'Learning by doing', body: '60% practice, on real tools.' },
        { title: 'Interactive workshops', body: 'Immediate hands-on, no passive demos.' },
        { title: 'Role-based approach', body: 'Cases adapted to every function.' },
        { title: 'Personalized tracks', body: 'Adapted to your company and your tools.' },
        { title: 'Continuous assessment', body: 'Before · during · after (up to 90 days).' },
        { title: 'Operational deliverables', body: 'Prompts, assistants, workflows, action plans.' }
      ],
      benefitsTitle: 'Why train your teams?',
      benefits: [
        'Higher productivity',
        'Process automation',
        'Generative AI mastery',
        'Better decision-making',
        'A culture of innovation',
        'Future-proof skills'
      ],
      audiencesTitle: 'Who are our tracks for?',
      audienceOrgs: ['SMEs', 'Mid-caps', 'Large companies', 'Public sector', 'Administrations', 'Schools'],
      audiencePeople: [
        'Employees',
        'Managers',
        'Executives',
        'Leadership teams',
        'Support functions',
        'Operational roles'
      ],
      engagementsTitle: 'Our commitments',
      engagements: [
        'Expert trainers',
        'Real use cases',
        'Hands-on workshops',
        'Interactive sessions',
        'Personalized tracks',
        'Qualiopi certified',
        'Immediately usable deliverables',
        'Results-driven support'
      ]
    },
    about: {
      eyebrow: 'About us',
      title:
        'Products shipped, clients who stay. Here is what we have built so far.',
      body:
        'Over 100 projects delivered, MVPs shipped every week, and a partner network that opens doors. That is the base we work from.',
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
      title: 'One Partner From Idea to Growth.',
      body:
        'A single point of contact from framing to launch. Fewer intermediaries, fewer risks, and decisions made in days rather than weeks.',
      points: [
        {
          title: 'Understand before building',
          description:
            'Nothing gets developed before we have checked the need is real. It keeps you from building into the void.'
        },
        {
          title: 'Build without avoidable debt',
          description: 'Design and engineering move together from day one, not one after the other.'
        },
        {
          title: 'Scale with real levers',
          description:
            'Automation serves your teams first: fewer repetitive tasks, more time for the work that matters.'
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
          description: 'Validate ideas, launch products and accelerate growth.'
        },
        {
          icon: 'factory',
          title: 'SMEs',
          description: 'Automate operations, save time and improve team productivity.'
        },
        {
          icon: 'building',
          title: 'Enterprises',
          description: 'Launch new services, modernize processes and integrate AI.'
        },
        {
          icon: 'landmark',
          title: 'Organizations',
          description: 'Accelerate innovation and develop new initiatives.'
        }
      ]
    },
    framework: {
      eyebrow: 'The MAPBRAIN framework',
      title: 'Three sequences to frame, build and scale the right product.',
      body:
        'The method fits in one sentence: analyze before investing, build, then scale. In that order, never the other way around.',
      whatWeDoLabel: 'What we do',
      gainsLabel: 'What you gain',
      steps: [
        {
          step: '01',
          label: 'Analyze',
          title: 'Understand Before Investing.',
          description:
            'We analyze markets, users and opportunities before development begins.',
          whatWeDo: [
            'Market Research',
            'Business Validation',
            'Product Validation',
            'Competitive Analysis',
            'Growth Strategy'
          ],
          gains: ['Reduced Risk', 'Clear Direction', 'Better Decisions', 'Improved ROI'],
          image: {
            src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80',
            alt: 'Strategic framing session around documents and indicators.'
          }
        },
        {
          step: '02',
          label: 'Build',
          title: 'Turn Ideas Into Products.',
          description:
            'We design and develop scalable digital products.',
          whatWeDo: [
            'UX/UI Design',
            'Product Design',
            'Web Applications',
            'Mobile Applications',
            'SaaS Platforms',
            'E-commerce',
            'Business Tools',
            'AI Assistants',
            'AI Agents',
            'Automation',
            'Intelligent Workflows'
          ],
          gains: [
            'Faster Execution',
            'Better User Experience',
            'Increased Productivity',
            'Lower Operating Costs'
          ],
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
      title: 'AI assistants that actually save time.',
      body:
        'Less time on repetitive tasks, more time for work that matters. Everything else follows.',
      image: {
        src: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80',
        alt: 'Advanced workstation with screens, data and an automation-oriented environment.'
      },
      rationale: {
        title: 'Companies do not adopt AI to replace their teams.',
        body: ['They adopt it to help teams accomplish more with the same resources.'],
        results: [
          'Time savings',
          'Reduced repetitive work',
          'Higher productivity',
          'Better customer experience',
          'Faster growth',
          'More value created per employee'
        ]
      },
      useCases: [
        {
          benefits: [
            'More opportunities',
            'More qualified meetings',
            'Less administrative work',
            'More time to sell',
            'Faster sales cycles',
            'Higher revenue'
          ],
          cases: [
            'Prospect research',
            'Qualification',
            'Automated follow-ups',
            'Meeting preparation',
            'Sales follow-up'
          ],
          icon: 'target',
          title: 'Sales Assistant',
          description: 'Automate prospecting, follow-ups and sales execution.',
          examples: [
            'Automatic lead generation',
            'Contact enrichment',
            'Personalized emails',
            'Automated LinkedIn outreach',
            'Opportunity prioritization',
            'Automatic CRM updates'
          ]
        },
        {
          benefits: [
            'More visibility',
            'More content',
            'Stronger SEO',
            'Lower production costs'
          ],
          cases: ['LinkedIn', 'SEO', 'Blog', 'Newsletter', 'Social media', 'Communication'],
          icon: 'megaphone',
          title: 'Marketing & Content Assistant',
          description: 'Create and distribute content at scale.',
          examples: [
            'Automatic LinkedIn posts',
            'SEO article generation',
            'YouTube script creation',
            'TikTok content creation',
            'Instagram Reels',
            'YouTube Shorts'
          ]
        },
        {
          benefits: [
            'Faster production',
            'Multi-platform distribution',
            'Wider audience reach',
            'Always-on presence'
          ],
          icon: 'video',
          title: 'Video Assistant',
          description: 'Produce video content automatically.',
          examples: [
            'Turn an article into a video',
            'Turn a podcast into Shorts',
            'Generate YouTube videos',
            'Create TikToks automatically',
            'Generate subtitles',
            'Translate videos into multiple languages'
          ]
        },
        {
          benefits: [
            'Faster hiring',
            'Administrative time saved',
            'Smoother processes',
            'Better employee experience'
          ],
          cases: [
            'Application triage',
            'Prequalification',
            'Onboarding',
            'Internal documentation',
            'Employee support'
          ],
          icon: 'users',
          title: 'HR Assistant',
          description: 'Simplify recruitment and onboarding.',
          examples: [
            'Automatic resume analysis',
            'Candidate-role matching',
            'Interview scheduling',
            'Internal HR assistant',
            'Company knowledge base'
          ]
        },
        {
          benefits: [
            'Higher productivity',
            'Fewer errors',
            'Time savings',
            'Better organization',
            'Lower operating costs'
          ],
          cases: [
            'Document management',
            'Reporting',
            'Project management',
            'Internal workflows',
            'Process validation'
          ],
          icon: 'settings',
          title: 'Operations Assistant',
          description: 'Optimize internal processes.',
          examples: [
            'Automatic document processing',
            'PDF data extraction',
            'Report generation',
            'Approval automation',
            'Business tool synchronization'
          ]
        },
        {
          benefits: [
            'Faster replies',
            'Improved customer satisfaction',
            'Reduced support workload',
            'Scalable customer service'
          ],
          icon: 'message',
          title: 'Customer Support Assistant',
          description: 'Instant support, 24/7.',
          examples: [
            'Automated replies',
            'Smart FAQ',
            'Request qualification',
            'Documentation search',
            'Automatic escalation of complex cases'
          ]
        }
      ]
    },
    projects: {
      eyebrow: 'Projects',
      title: 'Projects that show the level of execution.',
      body:
        'Each project is shown on video, with its interactive prototype when one exists. Judge for yourself.',
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
    formations: {
      eyebrow: 'MapBrain Academy',
      title: 'Six training tracks to upskill your teams on AI.',
      body:
        'From a first conversation with ChatGPT to the AI roadmap of an executive committee. Always on your real use cases, with the tools your teams already use: Google, Microsoft, OpenAI, Claude.',
      programs: [
        {
          image: {
            src: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80',
            alt: 'Training workshop with participants on laptops.'
          },
          title: 'AI Essentials',
          level: 'Beginner',
          description:
            'Artificial intelligence for everyone: understand AI and use it effectively every day.',
          topics: [
            'AI and LLM fundamentals',
            'Tool landscape: ChatGPT, Claude, Gemini, Copilot…',
            'Fundamental prompt engineering',
            'Responsible AI, GDPR and cybersecurity',
            'Design your own AI assistant'
          ],
          audience: 'All employees',
          duration: '1 to 2 days'
        },
        {
          badge: 'Flagship track',
          image: {
            src: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=80',
            alt: 'Team mapping processes on a whiteboard.'
          },
          title: 'AI, Automation & Agents',
          level: 'Intermediate to advanced',
          description:
            'Design, automate and deploy AI assistants and agents to transform business processes.',
          topics: [
            'Mapping business processes',
            'No-code automation: Make, n8n, Power Automate, Zapier',
            'APIs and webhooks without coding',
            'Role-specific AI assistants and agents',
            'Team AI hackathon (5-day format)'
          ],
          audience: 'Managers, project leads, business owners',
          duration: '3 to 5 days'
        },
        {
          image: {
            src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
            alt: 'Modern workspace with multiple screens and digital tools.'
          },
          title: 'AI Productivity Suite',
          level: 'Beginner to intermediate',
          description:
            'Master Microsoft Copilot, Google Gemini and the best AI tools for an augmented workspace.',
          topics: [
            'Copilot in Word, Excel, Outlook, Teams, PowerPoint',
            'Gemini in Gmail, Docs, Sheets and Meet',
            'NotebookLM, Perplexity, Gamma, Canva AI',
            'Audio and video: ElevenLabs, HeyGen, Runway',
            'Workshop: build your augmented workspace'
          ],
          audience: 'All roles',
          duration: '2 days'
        },
        {
          badge: 'Best seller',
          image: {
            src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
            alt: 'Team learning together around a laptop.'
          },
          title: 'AI & Everyday Productivity',
          level: 'Beginner',
          description:
            'Save 1 to 2 hours a day with generative AI: the training to onboard the whole company.',
          topics: [
            'Understanding generative AI',
            'ChatGPT, Claude, Gemini, Copilot, Perplexity, NotebookLM',
            'Writing effective prompts',
            'Security, GDPR and responsible AI',
            '30-day AI productivity plan'
          ],
          audience: '100% of employees',
          duration: '1 day'
        },
        {
          badge: 'In high demand',
          image: {
            src: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1200&q=80',
            alt: 'Work screen with workflows and connected tools.'
          },
          title: 'Automate your business with AI',
          level: 'Beginner to intermediate',
          description:
            'Automate repetitive tasks without writing a single line of code and connect your business apps.',
          topics: [
            'Process automation principles',
            'Make, n8n, Power Automate, Zapier',
            'Connecting your apps: APIs and webhooks',
            'Integrating AI into workflows',
            'Workshop: your first intelligent workflow'
          ],
          audience: 'Leaders, managers, operations',
          duration: '2 to 3 days'
        },
        {
          badge: 'Executives',
          image: {
            src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
            alt: 'Executive committee in a strategic working session.'
          },
          title: 'AI Business Transformation',
          level: 'Executive',
          description:
            'Define your AI strategy, prioritize high-ROI projects and build a 12-month roadmap.',
          topics: [
            'Strategic vision and return on investment',
            'AI opportunities across every function',
            'Governance, GDPR and the EU AI Act',
            '12-month transformation roadmap',
            'Change management'
          ],
          audience: 'Executives, boards, leadership teams',
          duration: '3 days'
        }
      ],
      formatsTitle: 'How it works',
      formats: [
        'On-site, remote or hybrid',
        '100% hands-on workshops on your real cases',
        'Groups of 4 to 12 participants',
        'Materials, prompts and ready-to-use templates included',
        'Assessment before, during and after — Qualiopi certified',
        'Certificate of completion'
      ],
      note:
        'Every track adapts to your tools and your teams’ level. Tracks can be combined or fully customized. Request the catalogue and let’s talk.',
      cta: {
        href: 'mailto:contact@mapbrain-academy.fr?subject=MapBrain%20Academy%20Training%20Catalogue',
        label: 'Request the catalogue'
      }
    },
    partners: {
      eyebrow: 'Ecosystem',
      title: 'A Global Ecosystem Built for Growth',
      body:
        'Building the product is not enough. A cloud credit, a partner program or the right contact at the right moment often changes a project’s trajectory.',
      advantages: [
        'Faster access to resources',
        'Faster access to funding opportunities',
        'Reduced infrastructure costs',
        'Strategic partnerships',
        'Faster product development',
        'Faster growth'
      ],
      detailGroups: [
        {
          title: 'Technology Partners',
          items: [
            'Microsoft',
            'Google',
            'Amazon Web Services (AWS)',
            'NVIDIA',
            'OpenAI',
            'Anthropic',
            'Notion',
            'PostHog',
            'Vercel',
            'Scaleway',
            'GitHub',
            'Stripe',
            'HubSpot',
            'Airtable',
            'Cloudflare'
          ],
          note: 'and many more.'
        },
        {
          title: 'Access to $1M+ in Startup Perks',
          items: [
            'Cloud Credits',
            'AI Tools',
            'Software Licenses',
            'Hosting',
            'Infrastructure',
            'Technical Support',
            'Startup Programs'
          ],
          note:
            'Depending on eligibility, these benefits can represent hundreds of thousands of dollars and, in some cases, more than $1M in combined value.'
        },
        {
          title: 'Direct Access to Innovation Ecosystems',
          items: [
            'Program Managers',
            'Startup Program Managers',
            'Ecosystem Leaders',
            'Innovation Managers',
            'AI Experts',
            'Product Experts'
          ],
          note:
            'We regularly interact with these profiles to help our clients identify and access relevant opportunities.'
        }
      ],
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
        'Access to licenses, hosting and infrastructure support',
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
      title: 'Ready to train your teams on AI?',
      body:
        'Tell us about your goals: we recommend the right track, or build one from scratch. Qualiopi certified, OPCO fundable. Answer within 48 h.',
      primaryCta: {
        href: 'mailto:contact@mapbrain.ai?subject=MAPBRAIN%20Training%20Quote',
        label: 'Request a quote by email'
      },
      channels: [
        { label: 'Email', value: 'contact@mapbrain.ai', href: 'mailto:contact@mapbrain.ai' },
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
        href: 'mailto:contact@mapbrain-academy.fr?subject=Question%20for%20MapBrain%20Academy',
        label: 'Contact us'
      },
      visual: {
        src: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&w=1200&q=80',
        alt: 'Professional wearing a virtual reality headset in a tech environment'
      },
      items: [
        {
          question: 'What training do you offer?',
          answer:
            'Six tracks, from beginner to executive: AI Essentials, AI & Productivity, AI Productivity Suite, Automate your business, AI-Automation & Agents, and AI Business Transformation.'
        },
        {
          question: 'Are you Qualiopi certified?',
          answer: 'Yes, MapBrain is a Qualiopi-certified training provider.'
        },
        {
          question: 'Can French OPCO funding cover the training?',
          answer:
            'Yes. Thanks to the Qualiopi certification, our courses are eligible for OPCO funding. We help you build the application.'
        },
        {
          question: 'On-site or remote?',
          answer: 'Both, plus hybrid. On-site anywhere in France, or in a virtual classroom.'
        },
        {
          question: 'Are there technical prerequisites?',
          answer:
            'Not for beginner tracks: basic computer skills are enough. Advanced tracks require comfort with digital tools, no programming needed.'
        },
        {
          question: 'How many participants per session?',
          answer: '4 to 12 people, so everyone actually gets hands-on.'
        },
        {
          question: 'Can a course be customized?',
          answer:
            'Yes, always: industry, roles, processes, tools. No standardized training.'
        },
        {
          question: 'Which tools will we learn?',
          answer:
            'ChatGPT, Claude, Gemini, Microsoft Copilot, Perplexity, NotebookLM, Make, n8n, Zapier, Power Automate… depending on the track.'
        },
        {
          question: 'Do you also build software and automations?',
          answer:
            'Yes. MAPBRAIN is also a product studio: audit, design, web and SaaS development, AI automation. See the Framework tab.'
        },
        {
          question: 'How do we get started?',
          answer:
            'Write to us through the form or at contact@mapbrain-academy.fr. Answer within 48 h with a track recommendation and a quote.'
        }
      ]
    },
    footer: {
      blurb: 'MAPBRAIN builds products, automates operations and trains teams on AI. Based in Marseille, working everywhere.',
      copyright: 'MAPBRAIN — Analyze. Build. Scale.'
    }
  }
}
