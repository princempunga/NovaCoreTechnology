import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      navbar: {
        home: "Home",
        about: "About",
        services: "Services",
        portfolio: "Portfolio",
        demo: "Demo",
        contact: "Contact",
        cta: "Start a Project"
      },
      footer: {
        desc: "Building scalable, secure, and modern digital solutions for institutions and businesses across Africa and beyond.",
        quickLinks: "Quick Links",
        services: "Services",
        contact: "Contact",
        rights: "All rights reserved.",
        tagline: "Built with precision · Powered by innovation",
        servicesList: {
          app: "Custom Web Applications",
          school: "School Management Systems",
          dash: "Admin Dashboards",
          db: "Database Design",
          api: "API Development",
          maint: "System Maintenance"
        }
      },
      home: {
        heroLabel: "Digital Excellence Architecture",
        heroTitle1: "Engineering the",
        heroTitleHighlight: "Future",
        heroTitle2: "of Enterprise Systems",
        heroDesc: "Novacoretechnology designs, builds, and scales elite digital infrastructure. From bespoke mobile solutions to massive-scale school management networks, we deliver flawless ecosystems that accelerate your growth limitlessly.",
        btnDeploy: "Deploy Your Vision",
        btnCase: "View Case Studies",
        stat1: "Projects Deployed",
        stat2: "System Uptime",
        stat3: "Dedicated Support",
        techBanner: "Powered by Elite Technologies",
        capLabel: "Capabilities Platform",
        capTitle: "Dominating the Digital Landscape",
        capDesc: "We transcend generic templates and off-the-shelf plugins. Each Novacore product is a meticulously engineered masterpiece, rigorously tested for load, security, and exceptional user experience.",
        card1Title: "Bespoke Enterprise Software",
        card1Desc: "Off-the-shelf solutions force you to adapt your business to software. We build software that adapts to your business. Our custom codebases are aggressively optimized, cleanly factored, and highly scalable.",
        card2Title: "Immersive UI/UX Physics",
        card2Desc: "A good backend means nothing if the interface is frustrating. We implement fluid state transitions, cognitive easing layouts, and sub-100ms interaction feedback loops that keep your users engaged.",
        card3Title: "Hyper-Scale Data Architecture",
        card3Desc: "From 100 users to 10 million. We construct polyglot persistence layers utilizing distributed PostgreSQL clusters, Redis caching, and intelligent sharding to ensure data retrieval feels instantaneous.",
        card4Title: "Military-Grade Security",
        card4Desc: "Data breaches destroy companies. We integrate end-to-end encryption, automated penetration testing pipelines, and zero-trust architectures by default—not as an afterthought.",
        methLabel: "Our Process",
        methTitle: "From Blueprint to Global Deployment",
        methDesc: "We utilize a highly systematic engineering pipeline that guarantees precision, reduces critical bugs, and accelerates your time-to-market. Transparency is our baseline.",
        meth1Title: "1. Discovery & Architecture",
        meth1Desc: "Deep mapping of your business logic and structuring polyglot microservice blueprints.",
        meth2Title: "2. Agile Sprints & CI/CD",
        meth2Desc: "Two-week iterative sprints pushing to staging via automated integration pipelines.",
        meth3Title: "3. Stress-Test & Launch",
        meth3Desc: "Synthetic load generation and strict QA before opening the traffic gates. Zero downtime deployments.",
        ctaTitle: "Stop Scaling Painfully. Start Engineering Smart.",
        ctaDesc: "Partner with Novacoretechnology today. We are ready to architect the platform your organization deserves. Reach out for a technical consultation.",
        ctaBtn: "Initialize Project sequence"
      },
      about: {
        headerLabel: "The Genesis",
        headerTitle1: "Architecting the Digital",
        headerTitleHighlight: "Frontier",
        headerDesc: "Novacoretechnology was born out of a critical observation: the tools running our most vital institutions—schools, hospitals, enterprises—were brittle, outdated, and fundamentally limiting. We set out to build an engineering collective that brings Silicon Valley-grade architecture to the organizations that need it most.",
        philTitle: "Our Engineering Philosophy",
        philDesc1_1: "We reject the \"move fast and break things\" paradigm when building critical operational systems. Instead, our methodology is built on ",
        philDesc1_bold: "Resilient Forging",
        philDesc1_2: ". Every component we deploy, from the UI framework to the database shards, undergoes brutal stress testing.",
        philDesc2: "We believe that enterprise software should not look or feel like a spreadsheet from 1999. It should be fluid, intuitive, and aggressive in its pursuit of efficiency.",
        missionTitle: "The Novacore Mission",
        missionDesc1: "Our absolute objective is to democratize elite digital infrastructure. What previously required a hundred-million-dollar budget and a dedicated IT basement, we deliver as scalable, hyper-secure SaaS platforms to businesses globally.",
        missionDesc2: "By providing stable, uncompromising digital foundations, we empower organizations to stop worrying about their servers and start focusing on their vision.",
        statsLabel: "Impact Metrics",
        statsTitle: "By The Numbers",
        stat1Num: "8+",
        stat1Label: "Years Operating",
        stat2Num: "1M+",
        stat2Label: "Daily Active Users",
        stat3Num: "50m",
        stat3Label: "Queries Handled/Sec",
        stat4Num: "0",
        stat4Label: "Security Breaches",
        teamLabel: "The Pioneers",
        teamTitle: "Meet The Founders",
        teamDesc: "The architects behind Novacoretechnology's vision. A strictly currated team of specialists who dictate the standards of our codebases and design systems.",
        roles: {
          ceo: "Chief Executive Officer & Founder",
          cto: "Chief Technology Officer",
          design: "Head of Product Design"
        },
        bios: {
          ceo: "Former enterprise systems architect with over a decade of experience scaling digital infrastructure across emerging markets.",
          cto: "Lead engineer specialized in distributed databases and high-availability cloud architecture. Ex-AWS Senior Developer.",
          design: "Award-winning creative director obsessed with micro-interactions, cognitive load reduction, and human-computer interfaces."
        }
      },
      services: {
        headerLabel: "Engineering Domains",
        headerTitle: "Our Capabilities",
        headerDesc: "We don't just write code; we solve complex operational bottlenecks. Explore our specialized engineering divisions designed to modernize and scale your digital footprint.",
        items: {
          web: {
            title: "Enterprise Web Applications",
            tagline: "High-availability bespoke web architectures.",
            challengeLabel: "The Challenge",
            challengeDesc: "Off-the-shelf software often forces organizations into restrictive workflows. When user concurrency spikes or data models become complex, generic CMS platforms crash.",
            archLabel: "Our Architecture",
            archDesc: "We engineer custom single-page applications (SPAs) and dynamic server-side rendered (SSR) web apps from scratch. Utilizing React, Next.js, and Node.js, we decouple the frontend from the backend (headless architecture) for extreme scalability.",
            outcomeLabel: "The Outcome",
            outcomeDesc: "A lightning-fast, tailored interface that perfectly mirrors your business processes with guaranteed 99.9% uptime under high traffic loads."
          },
          school: {
            title: "School Management Ecosystems",
            tagline: "Unified digital platforms for progressive institutions.",
            challengeLabel: "The Challenge",
            challengeDesc: "Schools typically juggle disjointed systems: one for grades, another for finance, another for SMS. This creates massive data silos and administrative friction.",
            archLabel: "Our Architecture",
            archDesc: "We deploy unified centralized portals. Our systems integrate strict role-based access control, real-time fee payment gateways (including Mobile Money), automated report generation, and bulk SMS pipelines.",
            outcomeLabel: "The Outcome",
            outcomeDesc: "An institution running at peak efficiency, reducing administrative burden by up to 60% and providing radical transparency to parents and leadership."
          },
          mobile: {
            title: "Native & Hybrid Mobile Apps",
            tagline: "Your enterprise in the palm of their hands.",
            challengeLabel: "The Challenge",
            challengeDesc: "Mobile users demand sub-second load times and native feel. Poorly ported web-to-mobile apps destroy brand credibility and suffer high uninstall rates.",
            archLabel: "Our Architecture",
            archDesc: "We build rigorous cross-platform (React Native/Flutter) and pure Native (Swift/Kotlin) applications. We implement offline-first data caching and strict state management to handle poor network conditions common in emerging markets.",
            outcomeLabel: "The Outcome",
            outcomeDesc: "Fluid, engaging mobile experiences that achieve 5-star ratings and operate flawlessly across the fragmented device landscape."
          },
          cyber: {
            title: "Cybersecurity & Auditing",
            tagline: "Impenetrable defense lines for sensitive data.",
            challengeLabel: "The Challenge",
            challengeDesc: "As operations digitize, attack surfaces expand. A single vulnerability can lead to catastrophic financial and reputational ruin.",
            archLabel: "Our Architecture",
            archDesc: "Security is not a plugin—it’s an architectural pattern. We conduct aggressive penetration testing, implement zero-trust network boundaries, OAuth2/OIDC SSO integrations, and AES-256 database encryption.",
            outcomeLabel: "The Outcome",
            outcomeDesc: "Absolute peace of mind. Your data lakes and user credentials remain protected against modern attack vectors and ransomware."
          }
        },
        ctaTitle: "Don't See Your Specific Needs?",
        ctaDesc: "Our engineering team excels in tackling undocumented, complex problems. We build APIs, cloud architectures, and IoT integrations.",
        ctaBtn: "Request Custom Analysis"
      }
    }
  },
  fr: {
    translation: {
      navbar: {
        home: "Accueil",
        about: "À Propos",
        services: "Services",
        portfolio: "Portfolio",
        demo: "Démo",
        contact: "Contact",
        cta: "Démarrer un Projet"
      },
      footer: {
        desc: "Construire des solutions numériques évolutives, sécurisées et modernes pour les institutions et les entreprises en Afrique et au-delà.",
        quickLinks: "Liens Rapides",
        services: "Services",
        contact: "Contact",
        rights: "Tous droits réservés.",
        tagline: "Construit avec précision · Propulsé par l'innovation",
        servicesList: {
          app: "Applications Web sur mesure",
          school: "Systèmes de Gestion Scolaire",
          dash: "Tableaux de Bord d'Administration",
          db: "Conception de Bases de Données",
          api: "Développement d'API",
          maint: "Maintenance de Systèmes"
        }
      },
      home: {
        heroLabel: "Architecture d'Excellence Numérique",
        heroTitle1: "Concevoir",
        heroTitleHighlight: "l'Avenir",
        heroTitle2: "des Systèmes d'Entreprise",
        heroDesc: "Novacoretechnology conçoit, développe et met à l'échelle une infrastructure numérique d'élite. Des solutions mobiles sur mesure aux réseaux de gestion scolaire à grande échelle, nous livrons des écosystèmes parfaits qui accélèrent votre croissance sans limite.",
        btnDeploy: "Déployer Votre Vision",
        btnCase: "Voir nos Études de Cas",
        stat1: "Projets Déployés",
        stat2: "Disponibilité du Système",
        stat3: "Support Dédié",
        techBanner: "Propulsé par des Technologies d'Élite",
        capLabel: "Plateforme de Capacités",
        capTitle: "Dominer le Paysage Numérique",
        capDesc: "Nous dépassons les modèles génériques et les plugins prêts à l'emploi. Chaque produit Novacore est un chef-d'œuvre méticuleusement conçu, rigoureusement testé pour la charge, la sécurité et une expérience utilisateur exceptionnelle.",
        card1Title: "Logiciels d'Entreprise Sur Mesure",
        card1Desc: "Les solutions prêtes à l'emploi vous obligent à adapter votre entreprise aux logiciels. Nous créons des logiciels qui s'adaptent à votre entreprise. Nos bases de code sont agressivement optimisées et hautement évolutives.",
        card2Title: "Physique Immersive UI/UX",
        card2Desc: "Un bon backend ne signifie rien si l'interface est frustrante. Nous mettons en œuvre des transitions d'état fluides et des boucles de rétroaction d'interaction ultra-rapides qui maintiennent l'engagement de vos utilisateurs.",
        card3Title: "Architecture de Données Hyper-Scalable",
        card3Desc: "De 100 utilisateurs à 10 millions. Nous construisons des couches de persistance utilisant des clusters PostgreSQL distribués, une mise en cache Redis et un sharding intelligent pour garantir une récupération instantanée.",
        card4Title: "Sécurité de Niveau Militaire",
        card4Desc: "Les violations de données détruisent les entreprises. Nous intégrons le chiffrement de bout en bout, des pipelines de tests d'intrusion automatisés et des architectures zero-trust par défaut—pas après coup.",
        methLabel: "Notre Processus",
        methTitle: "Du Plan de Base au Déploiement Mondial",
        methDesc: "Nous utilisons un pipeline d'ingénierie hautement systématique qui garantit la précision, réduit les bogues critiques et accélère votre temps de mise sur le marché. La transparence est notre ligne de base.",
        meth1Title: "1. Découverte et Architecture",
        meth1Desc: "Cartographie approfondie de votre logique métier et structuration de plans de microservices polyglottes.",
        meth2Title: "2. Sprints Agiles & CI/CD",
        meth2Desc: "Sprints itératifs de deux semaines poussant vers le staging via des pipelines d'intégration automatisés.",
        meth3Title: "3. Tests de Résistance & Lancement",
        meth3Desc: "Génération de charge synthétique et QA stricte avant d'ouvrir les vannes du trafic. Déploiements sans temps d'arrêt.",
        ctaTitle: "Arrêtez d'évoluer dans la douleur. Commencez à concevoir intelligemment.",
        ctaDesc: "Associez-vous à Novacoretechnology dès aujourd'hui. Nous sommes prêts à concevoir la plateforme que votre organisation mérite. Contactez-nous pour une consultation technique.",
        ctaBtn: "Initialiser la séquence du projet"
      },
      about: {
        headerLabel: "La Genèse",
        headerTitle1: "Concevoir la Nouvelle",
        headerTitleHighlight: "Frontière",
        headerDesc: "Novacoretechnology est née d'une observation critique : les outils gérant nos institutions les plus vitales - écoles, hôpitaux, entreprises - étaient fragiles, obsolètes et fondamentalement limitants. Nous avons entrepris de construire un collectif d'ingénierie qui apporte l'architecture de la Silicon Valley aux organisations qui en ont le plus besoin.",
        philTitle: "Notre Philosophie d'Ingénierie",
        philDesc1_1: "Nous rejetons le paradigme « aller vite et tout casser » lors de la construction de systèmes opérationnels critiques. Au lieu de cela, notre méthodologie repose sur le ",
        philDesc1_bold: "Forgeage Résilient",
        philDesc1_2: ". Chaque composant que nous déployons, de l'interface utilisateur aux shards de base de données, subit des tests de résistance brutaux.",
        philDesc2: "Nous pensons que les logiciels d'entreprise ne devraient pas ressembler à un tableur de 1999. Ils doivent être fluides, intuitifs et agressifs dans leur quête d'efficacité.",
        missionTitle: "La Mission Novacore",
        missionDesc1: "Notre objectif absolu est de démocratiser l'infrastructure numérique d'élite. Ce qui nécessitait auparavant un budget de cent millions de dollars et un sous-sol informatique dédié, nous le livrons sous forme de plateformes SaaS évolutives et hyper-sécurisées aux entreprises du monde entier.",
        missionDesc2: "En fournissant des fondations numériques stables et sans compromis, nous permettons aux organisations d'arrêter de s'inquiéter de leurs serveurs et de commencer à se concentrer sur leur vision.",
        statsLabel: "Indicateurs d'Impact",
        statsTitle: "En Quelques Chiffres",
        stat1Num: "8+",
        stat1Label: "Années d'Opération",
        stat2Num: "1M+",
        stat2Label: "Utilisateurs Actifs Quotidiens",
        stat3Num: "50m",
        stat3Label: "Requêtes Traitées/Sec",
        stat4Num: "0",
        stat4Label: "Failles de Sécurité",
        teamLabel: "Les Pionniers",
        teamTitle: "Rencontrez les Fondateurs",
        teamDesc: "Les architectes de la vision de Novacoretechnology. Une équipe de spécialistes strictement sélectionnée qui dicte les normes de nos bases de code et de nos systèmes de conception.",
        roles: {
          ceo: "Directeur Général & Fondateur",
          cto: "Directeur Technique",
          design: "Chef du Design Produit"
        },
        bios: {
          ceo: "Ancien architecte de systèmes d'entreprise avec plus d'une décennie d'expérience dans la mise à l'échelle d'infrastructures numériques sur les marchés émergents.",
          cto: "Ingénieur principal spécialisé dans les bases de données distribuées et les architectures cloud haute disponibilité. Ancien développeur senior chez AWS.",
          design: "Directeur créatif primé, obsédé par les micro-interactions, la réduction de la charge cognitive et les interfaces homme-machine."
        }
      },
      services: {
        headerLabel: "Domaines d'Ingénierie",
        headerTitle: "Nos Capacités",
        headerDesc: "Nous ne nous contentons pas d'écrire du code ; nous résolvons des goulots d'étranglement opérationnels complexes. Explorez nos divisions d'ingénierie spécialisées conçues pour moderniser et mettre à l'échelle votre empreinte numérique.",
        items: {
          web: {
            title: "Applications Web d'Entreprise",
            tagline: "Architectures web sur mesure à haute disponibilité.",
            challengeLabel: "Le Défi",
            challengeDesc: "Les logiciels prêts à l'emploi contraignent souvent les organisations à des flux de travail restrictifs. Lorsque la concurrence des utilisateurs augmente ou que les modèles de données deviennent complexes, les plateformes CMS génériques plantent.",
            archLabel: "Notre Architecture",
            archDesc: "Nous concevons des applications web monopage (SPA) personnalisées et des applications web à rendu côté serveur (SSR) dynamique à partir de zéro. En utilisant React, Next.js et Node.js, nous séparons le frontend du backend (architecture headless) pour une évolutivité extrême.",
            outcomeLabel: "Le Résultat",
            outcomeDesc: "Une interface ultra-rapide et sur mesure qui reflète parfaitement vos processus métiers avec un temps de disponibilité garanti de 99,9 % sous des charges de trafic élevées."
          },
          school: {
            title: "Écosystèmes de Gestion Scolaire",
            tagline: "Plateformes numériques unifiées pour des institutions progressistes.",
            challengeLabel: "Le Défi",
            challengeDesc: "Les écoles jonglent souvent avec des systèmes disjoints : un pour les notes, un pour les finances, un autre pour les SMS. Cela crée des silos de données massifs et des frictions administratives.",
            archLabel: "Notre Architecture",
            archDesc: "Nous déployons des portails centralisés unifiés. Nos systèmes intègrent un contrôle d'accès strict basé sur les rôles, des passerelles de paiement des frais en temps réel (y compris Mobile Money), la génération automatisée de rapports et des pipelines de SMS en masse.",
            outcomeLabel: "Le Résultat",
            outcomeDesc: "Une institution fonctionnant à une efficacité maximale, réduisant la charge administrative jusqu'à 60 % et offrant une transparence radicale aux parents et à la direction."
          },
          mobile: {
            title: "Applications Mobiles Natives et Hybrides",
            tagline: "Votre entreprise au creux de leurs mains.",
            challengeLabel: "Le Défi",
            challengeDesc: "Les utilisateurs mobiles exigent des temps de chargement inférieurs à la seconde et une sensation native. Les applications web mal portées sur mobile détruisent la crédibilité de la marque et subissent des taux de désinstallation élevés.",
            archLabel: "Notre Architecture",
            archDesc: "Nous créons des applications multiplateformes (React Native/Flutter) et purement natives (Swift/Kotlin) rigoureuses. Nous mettons en œuvre la mise en cache de données offline-first et une gestion d'état stricte pour gérer les mauvaises conditions de réseau courantes sur les marchés émergents.",
            outcomeLabel: "Le Résultat",
            outcomeDesc: "Des expériences mobiles fluides et engageantes qui obtiennent 5 étoiles et fonctionnent parfaitement dans un paysage d'appareils fragmenté."
          },
          cyber: {
            title: "Cybersécurité et Audit",
            tagline: "Lignes de défense impénétrables pour les données sensibles.",
            challengeLabel: "Le Défi",
            challengeDesc: "À mesure que les opérations se numérisent, les surfaces d'attaque s'élargissent. Une seule vulnérabilité peut entraîner une ruine financière et réputationnelle catastrophique.",
            archLabel: "Notre Architecture",
            archDesc: "La sécurité n'est pas un plugin — c'est un modèle architectural. Nous effectuons des tests d'intrusion agressifs, mettons en œuvre des limites de réseau zero-trust, des intégrations SSO OAuth2/OIDC et un chiffrement de base de données AES-256.",
            outcomeLabel: "Le Résultat",
            outcomeDesc: "Tranquillité d'esprit absolue. Vos lacs de données et identifiants d'utilisateurs restent protégés contre les vecteurs d'attaque modernes et les ransomwares."
          }
        },
        ctaTitle: "Vous ne voyez pas vos besoins spécifiques ?",
        ctaDesc: "Notre équipe d'ingénieurs excelle dans la résolution de problèmes complexes et non documentés. Nous construisons des API, des architectures cloud et des intégrations IoT.",
        ctaBtn: "Demander une Analyse Personnalisée"
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // default language
    fallbackLng: "en",
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
