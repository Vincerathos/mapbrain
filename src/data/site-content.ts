import type { Locale, SiteContent } from '../types/site'

export const siteContent: Record<Locale, SiteContent> = {
  fr: {
    meta: {
      title: 'MAPBRAIN | Studio produit, IA & formations',
      description:
        "MAPBRAIN aide les startups, PME et organisations à valider, construire et faire croître leurs produits — stratégie, design, développement, automatisation IA et formations."
    },
    navigation: {
      items: [
        { href: '#framework', label: 'Méthode' },
        { href: '#automation', label: 'IA & automatisation' },
        { href: '#formations', label: 'Formations' },
        { href: '#projects', label: 'Projets' },
        { href: '#about', label: 'À propos' },
        { href: '#partners', label: 'Écosystème' }
      ],
      cta: { href: '#contact', label: 'Réserver un audit' }
    },
    hero: {
      title: 'Analyse. Build. Scale.',
      subtitle: 'Transformez vos idées en produits performants.',
      body:
        "Studio produit & IA : nous validons vos opportunités, construisons les bons produits, automatisons vos opérations et formons vos équipes à l'IA.",
      rotatingPhrases: [
        'Transformez vos idées en produits performants.',
        "Automatisez vos opérations avec l'IA.",
        'Formez vos équipes aux bons outils.'
      ],
      primaryCta: { href: '#contact', label: 'Réserver un audit stratégique' },
      secondaryCta: { href: '#formations', label: 'Voir les formations' },
      badgeTitle: 'MAPBRAIN Team',
      badgeBody: 'Analyse, build et scale pour les équipes qui veulent aller vite.',
      serviceTags: [
        'Validation business',
        'Design produit',
        'Développement web & mobile',
        'IA & automatisation',
        'Formations IA'
      ]
    },
    about: {
      eyebrow: 'About us',
      title:
        'Nous structurons des produits, des opérations et de la croissance avec une exécution pensée pour durer.',
      body:
        'MAPBRAIN combine stratégie, design, développement, IA et réseau pour transformer une ambition en système concret, crédible et scalable.',
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
        'Nous combinons stratégie, intelligence artificielle, design, développement et accompagnement afin de réduire les risques et accélérer l’exécution.',
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
        'Une méthode simple : analyser avant d’investir, construire avec précision, puis accélérer avec les bons leviers.',
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
      title: 'Des assistants conçus pour produire un impact métier réel.',
      body:
        "L'objectif est d'aider vos équipes à travailler plus vite, plus efficacement et avec moins de tâches répétitives.",
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
        'Chaque projet est présenté en vidéo et, quand disponible, relié à son prototype interactif. Design, clarté, exécution : jugez sur pièces.',
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
      eyebrow: 'Formations',
      title: 'Formez vos équipes à l’IA et à l’automatisation.',
      body:
        'Des formations pratiques, construites sur vos cas réels, pour rendre vos équipes autonomes sur les outils qui comptent vraiment.',
      programs: [
        {
          image: {
            src: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80',
            alt: 'Atelier de formation avec des participants sur ordinateurs portables.'
          },
          title: 'IA générative au quotidien',
          description:
            'Prendre en main les outils d’IA générative et les intégrer dans le travail de tous les jours.',
          topics: [
            'Panorama des outils (ChatGPT, Claude, Gemini…)',
            'Écrire des prompts efficaces',
            'Cas d’usage par métier',
            'Bonnes pratiques et limites'
          ],
          audience: 'Tous collaborateurs',
          duration: '1 jour'
        },
        {
          image: {
            src: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=80',
            alt: 'Équipe qui cartographie des processus sur un tableau blanc.'
          },
          title: 'Automatiser ses processus',
          description:
            'Connecter ses outils et automatiser les tâches répétitives avec n8n, Make ou Zapier.',
          topics: [
            'Cartographier les processus à automatiser',
            'Construire ses premiers workflows',
            'Connecter CRM, emails et outils métier',
            'Fiabiliser et maintenir ses automatisations'
          ],
          audience: 'Ops, marketing, RH, ventes',
          duration: '2 jours'
        },
        {
          image: {
            src: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1200&q=80',
            alt: 'Développeur travaillant sur un assistant logiciel, code à l’écran.'
          },
          title: 'Agents IA & assistants métier',
          description:
            'Concevoir des assistants IA branchés sur vos données pour la vente, le support ou les opérations.',
          topics: [
            'Comprendre les agents IA et leurs usages',
            'Concevoir un assistant sur vos données',
            'Intégrer l’assistant dans les outils existants',
            'Mesurer l’impact et itérer'
          ],
          audience: 'Équipes produit & direction',
          duration: '2 jours'
        }
      ],
      formatsTitle: 'Comment ça se passe',
      formats: [
        'Intra-entreprise, sur site ou à distance',
        'Ateliers 100 % pratiques sur vos cas réels',
        'Groupes de 4 à 12 personnes',
        'Supports, templates et suivi inclus'
      ],
      note:
        'Chaque programme est adapté à votre contexte : outils, niveau des équipes et objectifs. Des parcours sur mesure sont possibles.',
      cta: {
        href: 'mailto:contact@mapbrain.ai?subject=Programme%20de%20formation%20MAPBRAIN',
        label: 'Demander le programme'
      }
    },
    partners: {
      eyebrow: 'Écosystème',
      title: 'Un écosystème global pensé pour la croissance.',
      body:
        'Construire un produit n’est qu’une partie du chemin. Accéder aux bonnes ressources, aux bonnes personnes et aux bonnes opportunités fait souvent la différence.',
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
      title: 'Vous avez une opportunité, une idée ou un produit à faire accélérer.',
      body:
        'Le point de départ recommandé est un audit stratégique court pour clarifier le potentiel, les priorités et le bon plan d’exécution.',
      primaryCta: {
        href: 'mailto:contact@mapbrain.ai?subject=Audit%20strategique%20MAPBRAIN',
        label: 'Réserver un audit par email'
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
        href: 'mailto:contact@mapbrain.ai?subject=Question%20MAPBRAIN',
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
          question: 'Proposez-vous des formations ?',
          answer:
            'Oui. Nous formons les équipes à l’IA générative, à l’automatisation des processus et à la conception d’assistants métier — en intra-entreprise ou à distance, toujours sur vos cas réels.'
        },
        {
          question: 'Comment savoir si un audit est la bonne première étape ?',
          answer:
            'Quand il faut clarifier une opportunité, arbitrer des priorités ou éviter de lancer trop tôt, l’audit permet de réduire le risque avant d’investir davantage.'
        }
      ]
    },
    footer: {
      blurb: 'MAPBRAIN aide les équipes à transformer leurs opportunités en produits, à automatiser leurs opérations et à monter en compétence sur l’IA.',
      copyright: 'MAPBRAIN — Analyse. Build. Scale.'
    }
  },
  en: {
    meta: {
      title: 'MAPBRAIN | Product studio, AI & training',
      description:
        'MAPBRAIN helps startups, SMEs and organizations validate, build and grow their products — strategy, design, engineering, AI automation and team training.'
    },
    navigation: {
      items: [
        { href: '#framework', label: 'Framework' },
        { href: '#automation', label: 'AI & automation' },
        { href: '#formations', label: 'Training' },
        { href: '#projects', label: 'Projects' },
        { href: '#about', label: 'About' },
        { href: '#partners', label: 'Ecosystem' }
      ],
      cta: { href: '#contact', label: 'Book an audit' }
    },
    hero: {
      title: 'Analyze. Build. Scale.',
      subtitle: 'Turn ideas into scalable products.',
      body:
        'Product & AI studio: we validate your opportunities, build the right products, automate your operations and train your teams on AI.',
      rotatingPhrases: [
        'Turn ideas into scalable products.',
        'Automate your operations with AI.',
        'Train your teams on the right tools.'
      ],
      primaryCta: { href: '#contact', label: 'Book a Strategic Audit' },
      secondaryCta: { href: '#formations', label: 'Explore Training' },
      badgeTitle: 'MAPBRAIN Team',
      badgeBody: 'Analyze, build and scale for teams that need speed and clarity.',
      serviceTags: [
        'Business validation',
        'Product design',
        'Web & mobile development',
        'AI & automation',
        'AI training'
      ]
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
      title: 'One Partner From Idea to Growth.',
      body:
        'We combine strategy, artificial intelligence, design, engineering and growth support to reduce risk and accelerate execution.',
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
        'A simple method: analyze before investing, build with precision, then scale with the right systems.',
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
      title: 'Assistants designed to create real business impact.',
      body:
        'The goal is to help teams work faster, more efficiently and with fewer repetitive tasks.',
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
        'Each project is presented on video and, when available, connected to its interactive prototype. Design, clarity, execution: judge for yourself.',
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
      eyebrow: 'Training',
      title: 'Train your teams on AI and automation.',
      body:
        'Hands-on training programs, built on your real use cases, so your teams become autonomous on the tools that actually matter.',
      programs: [
        {
          image: {
            src: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80',
            alt: 'Training workshop with participants on laptops.'
          },
          title: 'Generative AI at work',
          description:
            'Master generative AI tools and integrate them into everyday work.',
          topics: [
            'Tool landscape (ChatGPT, Claude, Gemini…)',
            'Writing effective prompts',
            'Use cases by role',
            'Best practices and limits'
          ],
          audience: 'All employees',
          duration: '1 day'
        },
        {
          image: {
            src: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=80',
            alt: 'Team mapping processes on a whiteboard.'
          },
          title: 'Automate your processes',
          description:
            'Connect your tools and automate repetitive tasks with n8n, Make or Zapier.',
          topics: [
            'Mapping processes worth automating',
            'Building your first workflows',
            'Connecting CRM, email and business tools',
            'Making automations reliable and maintainable'
          ],
          audience: 'Ops, marketing, HR, sales',
          duration: '2 days'
        },
        {
          image: {
            src: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1200&q=80',
            alt: 'Developer building a software assistant, code on screen.'
          },
          title: 'AI agents & business assistants',
          description:
            'Design AI assistants connected to your data for sales, support or operations.',
          topics: [
            'Understanding AI agents and their uses',
            'Designing an assistant on your data',
            'Integrating it into existing tools',
            'Measuring impact and iterating'
          ],
          audience: 'Product teams & leadership',
          duration: '2 days'
        }
      ],
      formatsTitle: 'How it works',
      formats: [
        'On-site or remote, in-company',
        '100% hands-on workshops on your real cases',
        'Groups of 4 to 12 people',
        'Materials, templates and follow-up included'
      ],
      note:
        'Every program is adapted to your context: tools, team level and goals. Custom tracks are available.',
      cta: {
        href: 'mailto:contact@mapbrain.ai?subject=MAPBRAIN%20Training%20Program',
        label: 'Request the program'
      }
    },
    partners: {
      eyebrow: 'Ecosystem',
      title: 'A Global Ecosystem Built for Growth',
      body:
        'Building a product is only one part of the journey. Accessing the right resources, people and opportunities is often what makes the difference.',
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
      title: 'You already have an opportunity, an idea or a product that needs acceleration.',
      body:
        'The recommended starting point is a short strategic audit to clarify potential, priorities and the right execution plan.',
      primaryCta: {
        href: 'mailto:contact@mapbrain.ai?subject=MAPBRAIN%20Strategic%20Audit',
        label: 'Book an audit by email'
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
        href: 'mailto:contact@mapbrain.ai?subject=Question%20for%20MAPBRAIN',
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
          question: 'Do you offer training?',
          answer:
            'Yes. We train teams on generative AI, process automation and business assistant design — on-site or remote, always on your real use cases.'
        },
        {
          question: 'How do we know a strategic audit is the right first step?',
          answer:
            'When an opportunity needs clarification, priorities are unclear or the risk of building too early is high, the audit is usually the best starting point.'
        }
      ]
    },
    footer: {
      blurb: 'MAPBRAIN helps teams turn opportunities into products, automate their operations and level up on AI.',
      copyright: 'MAPBRAIN — Analyze. Build. Scale.'
    }
  }
}
