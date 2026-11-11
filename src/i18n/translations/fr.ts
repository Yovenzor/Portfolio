import type { Dictionary } from "./es";

export const fr: Dictionary = {
  meta: {
    title: "Yovenzor Singh — Étudiant en Installations Électriques et Automatiques",
    description:
      "Portfolio professionnel de Yovenzor Singh, étudiant en deuxième année de formation professionnelle intermédiaire en installations électriques et automatismes. installations, automatisation et maintenance.",
    ogLocale: "fr_FR",
  },

  nav: {
    home: "Accueil",
    about: "À propos",
    education: "Formation",
    skills: "Compétences",
    projects: "Projets",
    experience: "Expérience",
    contact: "Contact",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    menuTitle: "Navigation",
    language: "Langue",
    changeLanguage: "Changer de langue",
    toggleTheme: "Basculer entre modes clair et sombre",
    lightMode: "Mode clair",
    darkMode: "Mode sombre",
    skipToContent: "Aller au contenu",
  },

  hero: {
    availability: "Ouvert aux opportunités professionnelles",
    role: "Étudiant en Installations Électriques et Automatiques · Futur électricien",
    headlineA: "Je construis mon avenir dans le monde de",
    headlineB: "l'électricité et de l'automatisme.",
    intro:
      "Étudiant en deuxième année de formation professionnelle intermédiaire en installations électriques et automatismes, je m'intéresse particulièrement aux installations, à l'automatisation et à la maintenance. Je me considère comme une personne active, flexible et avide d'apprendre, de progresser techniquement et d'acquérir une première expérience professionnelle.",
    ctaProjects: "Voir mes projets",
    ctaContact: "Me contacter",
    scroll: "Défiler",
    visualCaption: "Schéma unifilaire illustratif — tableau de distribution et de commande",
  },

  about: {
    label: "À propos",
    title: "Un technicien en formation, curieux de nature",
    lead: "J'apprends le métier par la pratique : concevoir, monter et entretenir une installation électrique sûre.",
    paragraphs: [
      "Je suis en deuxième année de formation professionnelle intermédiaire en installations électriques et automatismes au Jesuïtes El Clot, à Barcelone. Chaque semaine, je combine théorie en classe et travaux pratiques à l'atelier.",
      "Je m'intéresse aux installations électriques, à la maintenance électrique, à l'automatisation industrielle, aux circuits de commande et aux automates programmables (APC). J'aime comprendre le fonctionnement interne des systèmes.",
      "Je valorise la discipline, l'adaptabilité, l'apprentissage continu et le travail en équipe. Mon objectif est de continuer à me former et de bâtir une carrière dans le secteur électrique.",
    ],
    interestsTitle: "Ce qui m'intéresse",
    interests: [
      "Installations électriques",
      "Maintenance électrique",
      "Automatisation industrielle",
      "Circuits de commande",
      "Automates programmables (APC)",
    ],
    valuesTitle: "Ma façon de travailler",
    values: [
      { name: "Discipline", text: "De l'ordre et une méthode dans chaque exercice." },
      { name: "Adaptabilité", text: "À l'aise avec le changement de tâche et d'approche." },
      { name: "Apprentissage continu", text: "Je demande, j'essaye, je corrige." },
      { name: "Travail en équipe", text: "Se coordonner pour avancer ensemble." },
    ],
    portraitAlt: "Portrait professionnel de Yovenzor Singh",
    portraitPlaceholder: "Emplacement du portrait",
    portraitHint: "Remplacez ce repère par votre photographie professionnelle.",
  },

  education: {
    label: "Formation",
    title: "Parcours académique",
    intro:
      "Ma formation actuelle porte sur les installations électriques et les automatismes, avec une solide base de pratique en atelier.",
    qualificationLabel: "Diplôme",
    statusLabel: "Statut",
    institutionLabel: "Établissement",
    qualification:
      "Formation professionnelle intermédiaire en installations électriques et systèmes automatiques (CFGM IEA)",
    status: "Deuxième année, en formation",
    institution: "Jesuïtes El Clot, Barcelone",
    description:
      "J'acquiers les connaissances techniques nécessaires pour travailler en sécurité sur des installations électriques : du câblage et des protections aux circuits de lecture des schémas électriques.",
    subjectsLabel: "Contenus techniques",
    subjects: [
      "Installations électriques",
      "Protections électriques",
      "Câblage et raccordements",
      "Schémas électriques",
      "Automatisme",
      "Maintenance",
    ],
  },

  skills: {
    label: "Compétences",
    title: "Compétences techniques",
    intro:
      "Voici les domaines dans lesquels je développe mes compétences, avec un niveau réaliste et honnête : en formation, connaissances de base ou pratique régulière.",
    levelLabels: {
      "En formación": "En formation",
      "Conocimientos básicos": "Connaissances de base",
      Practicando: "En pratique",
    },
    categories: [
      {
        title: "Installations électriques",
        description: "La base du quotidien d'un électricien.",
        items: [
          { name: "Câblage et cheminement des conducteurs", level: "En formación" },
          { name: "Composants d'installation", level: "En formación" },
          { name: "Protections et distribution", level: "Conocimientos básicos" },
          { name: "Lecture de schémas électriques", level: "En formación" },
          { name: "Mesures et vérifications de base", level: "Conocimientos básicos" },
        ],
      },
      {
        title: "Automatisme et commande",
        description: "Commande, logique et séquences de fonctionnement.",
        items: [
          { name: "Circuits de commande à relais", level: "En formación" },
          { name: "Contacteurs, relais et composants de commande", level: "En formación" },
          { name: "Minuteries et contacts auxiliaires", level: "Practicando" },
          { name: "Programmation de base des APC", level: "En formación" },
          { name: "Introduction à l'automatisation industrielle", level: "En formación" },
        ],
      },
      {
        title: "Outils techniques",
        description: "Logiciels et documentation utilisés en classe et à l'atelier.",
        items: [
          { name: "CADe_SIMU", level: "En formación" },
          { name: "Siemens LOGO! Soft Comfort", level: "En formación" },
          { name: "Schémas et documentation électrique", level: "En formación" },
          { name: "AutoCAD", level: "En formación" },
          { name: "EPLAN", level: "En formación" },
        ],
      },
    ],
  },

  projects: {
    label: "Projets",
    title: "Projets techniques",
    intro:
      "Exercices et travaux pratiques réalisés dans le cadre de ma formation. Chaque fiche présente l'objectif, le matériel utilisé et ce que j'en ai appris.",
    illustrative: "Schéma illustratif",
    pendingDoc: "Documentation PDF à ajouter",
    viewDoc: "Ouvrir la note technique (PDF)",
    downloadDoc: "Télécharger le PDF",
    closeDoc: "Fermer la visionneuse du PDF",
    downloadCad: "Télécharger le fichier AutoCAD (.dwg)",
    viewProject: "Voir la fiche technique",
    comingSoonBadge: "Bientôt disponible",
    comingSoonTitle: "D'autres projets arrivent",
    comingSoonText:
      "Déjà deux installations documentées en détail. Je prépare les prochaines fiches avec leurs plans, calculs et documentation.",
    comingSoonFoot: "Nouveaux dossiers techniques · en préparation",
    backToProjects: "Retour aux projets",
    notFoundTitle: "Projet introuvable",
    notFoundText: "La fiche que vous cherchez n'existe pas ou a été retirée.",
    sectionTitles: {
      overview: "Présentation",
      objective: "Objectif",
      components: "Composants et matériel",
      tools: "Outils",
      role: "Mon rôle",
      process: "Processus technique",
      lessons: "Problèmes et apprentissages",
      docs: "Documentation",
    },
    items: [
      {
        slug: "casa-autocad",
        category: "Installations électriques",
        title: "Installation électrique d'une maison dessinée en AutoCAD",
        summary:
          "Maison mesurée à l'échelle réelle et dessinée en AutoCAD avec tous ses circuits : de C1 à C9 et complémentaires, sections de câble et chute de tension calculées.",
        overview:
          "Installation électrique complète d'une maison réalisée en AutoCAD : j'ai mesuré tout le logement à l'échelle réelle, réparti tous les circuits — C1 à C9 et complémentaires — et calculé chaque tronçon avec tous les calculs nécessaires : section de câble et chute de tension. Tout est consigné dans la note technique du projet.",
        objective:
          "Dimensionner l'installation de bout en bout avec mes propres calculs : chaque circuit avec la bonne section et la chute de tension du logement vérifiée pour rester dans les limites, prouvée plutôt que supposée.",
        components: [
          "Circuits de C1 à C9 et circuits complémentaires",
          "Logement mesuré à l'échelle réelle",
          "Section de câble calculée pour chaque tronçon",
          "Calcul de la chute de tension de l'installation",
          "Note technique complète (PDF)",
        ],
        tools: ["AutoCAD", "Mesure à l'échelle réelle", "Calcul des sections de câble", "Calcul de la chute de tension"],
        role: "Travail complet en solo : mesure, dessin sous AutoCAD, calculs et note technique.",
        process: [
          "Mesurer toute la maison pièce par pièce à l'échelle réelle.",
          "Répartir les circuits : de C1 à C9 et les complémentaires selon l'usage de chaque zone.",
          "Calculer la section de câble et la chute de tension de chaque tronçon, avec tous les calculs.",
          "Dessiner l'installation en AutoCAD et rédiger la note technique avec tous les calculs.",
        ],
        lessons: [
          "Une erreur de mesure à l'échelle réelle se propage dans tous les calculs : bien mesurer est la base.",
          "Calculer la chute de tension à la main oblige à comprendre pourquoi on choisit chaque section.",
          "Numéroter correctement les circuits rend la note lisible par n'importe qui.",
        ],
      },
      {
        slug: "panel-taller",
        category: "Montage et câblage de tableau",
        title: "Câblage d'un grand tableau d'atelier simulant une maison",
        summary:
          "Schémas réalisés par l'équipe et câblage complet d'un tableau d'atelier contre la montre : le délai était de moins de 10 heures et nous l'avons réussi en 9.",
        overview:
          "Travail d'équipe pour câbler un grand tableau de notre atelier qui reproduisait une maison. Nous avons d'abord préparé les schémas nécessaires puis, en nous en guidant, câblé l'ensemble du tableau dans les délais : moins de 10 heures, et nous y sommes parvenus en 9.",
        objective:
          "Câbler entièrement un tableau simulant une maison à partir de nos propres schémas, dans le temps imparti (moins de 10 heures).",
        components: [
          "Schémas électriques réalisés par l'équipe",
          "Grand tableau d'atelier",
          "Câblage de la maison simulée selon les schémas",
          "Outils de câblage",
        ],
        tools: ["Nos propres schémas", "Câblage de tableau", "Gestion du temps contre la montre"],
        role: "Travail d'équipe : réalisation des schémas et câblage du tableau, coordonnés pour tenir le délai.",
        process: [
          "Réalisation des schémas du tableau qui simule une maison.",
          "Répartition du travail en équipe pour avancer sans se gêner.",
          "Câblage du grand tableau de l'atelier en suivant les schémas.",
          "Vérification finale dans le délai : moins de 10 heures, réussi en 9.",
        ],
        lessons: [
          "Avec une horloge de 10 heures, bien répartir le travail pèse plus que câbler vite.",
          "Un schéma bien fait fait gagner le temps perdu ensuite à hésiter devant le tableau.",
          "Terminer en 9 heures a prouvé que l'organisation de l'équipe fonctionnait.",
        ],
      },
      {
        slug: "automatizacion-plc",
        category: "Automatisme et commande",
        title: "Automatisation de systèmes avec un APC",
        summary:
          "Programmation d'un automate programmable pour commander un processus avec entrées, sorties et séquences.",
        overview:
          "Projet d'introduction à la programmation d'automates : j'ai défini les entrées et sorties, écrit la logique de commande et simulé le comportement du processus avant les essais.",
        objective:
          "Faire mes premiers pas sérieux en programmation d'APC : logique de commande, temporisations et traitement des signaux.",
        components: [
          "Automate programmable",
          "Capteurs et butées de fin de course",
          "Contacteurs de manœuvre",
          "Signalisation d'état",
        ],
        tools: ["Environnement de programmation d'APC (pratique de classe)", "Schéma de câblage", "Documentation technique"],
        role: "Définition de la table entrées-sorties, programmation de la logique et essais.",
        process: [
          "Description du processus et schéma fonctionnel de commande.",
          "Affectation des entrées et des sorties.",
          "Programmation de la logique étape par étape.",
          "Simulation et réglage des temporisations.",
        ],
        lessons: [
          "Partir de la table entrées-sorties évite de réécrire tout le programme.",
          "Les temporisations mal réglées étaient l'erreur la plus fréquente de mes premiers essais.",
          "Un programme bien commenté vaut mieux que la mémoire.",
        ],
      },
    ],
  },

  experience: {
    label: "Expérience",
    title: "Expérience pratique",
    intro:
      "Stage de formation en cours à l'institut Salesians de Sarria depuis le 28 septembre, dans le cadre de mon programme de formation. Je ne l'ai pas encore terminé et je n'ai toujours pas d'expérience professionnelle rémunérée — je le dis fièrement : je suis là pour commencer à en acquérir.",
    badge: "Stage de formation · en cours",
    itemTitle: "Stage à Salesians de Sarria",
    context: "Institut Salesians de Sarria — stage scolaire",
    period: "Depuis le 28 septembre · en cours",
    tasksLabel: "Tâches réalisées",
    tasks: [
      "Aider à organiser et classer le matériel électrique",
      "Démonter et identifier des composants électriques",
      "Trier les câbles, minuteries et accessoires",
      "Prêter et préparer les bancs de pratique",
      "Participer aux activités de maintenance de l'atelier",
    ],
    skillsTitle: "Compétences développées",
    skills: [
      "Organisation du matériel",
      "Identification des composants",
      "Manipulation soigneuse du matériel",
      "Travail en équipe",
      "Connaissance de l'équipement technique",
    ],
  },

  softSkills: {
    label: "Profil",
    title: "Compétences personnelles",
    intro: "Ce que j'apporte à une équipe au-delà du technique.",
    items: [
      { name: "Envie d'apprendre", text: "J'arrive curieux et je reste pour demander comment ça marche." },
      { name: "Adaptabilité", text: "Je change de tâche, de banc ou d'horaire sans perdre le fil." },
      { name: "Résolution de problèmes", text: "Quand ça ne marche pas, je cherche la cause avant l'excuse." },
      { name: "Travail en équipe", text: "Partager ce que j'apprends fait gagner du temps à tout le groupe." },
      { name: "Organisation et responsabilité", text: "Je prends soin du matériel, je tiens mes délais et je laisse le banc rangé." },
      { name: "Intérêt pour la technologie", text: "Comprendre comment un processus se commande et s'automatise me passionne." },
      { name: "Amélioration continue", text: "Chaque exercice me laisse une chose à mieux faire la suivante." },
    ],
  },

  objectives: {
    label: "Objectifs",
    title: "Objectifs professionnels",
    paragraphs: [
      "Je souhaite continuer à acquérir de l'expérience pratique en installations électriques, approfondir la maintenance et en apprendre de plus en plus sur l'automatisation industrielle.",
      "Mon objectif est de rejoindre une équipe professionnelle où je pourrai grandir, apporter mon énergie et mon sérieux, et devenir un électricien fiable.",
    ],
    ctaTitle: "Vous cherchez quelqu'un de motivé à faire grandir dans le secteur électrique ?",
    ctaText: "Je suis disponible pour rencontrer des entreprises du secteur et parler d'opportunités de formation et professionnelles.",
    ctaButton: "Me contacter",
  },

  contact: {
    label: "Contact",
    title: "Discutons",
    intro:
      "Je suis ouvert aux opportunités de formation, aux stages et aux premiers pas professionnels dans le secteur électrique.",
    finalCta: "Vous cherchez quelqu'un de motivé à faire grandir dans le secteur électrique ? Discutons.",
    channelsTitle: "Vous pouvez aussi me trouver sur",
    channels: {
      email: "E-mail",
      linkedin: "LinkedIn",
      cv: "CV (PDF)",
    },
    channelPending: "À configurer",
    channelPendingHint: "Ce lien sera activé dès que les coordonnées réelles seront ajoutées à la configuration du site.",
    formTitle: "Envoyez-moi un message",
    form: {
      name: "Nom",
      namePlaceholder: "Votre nom complet",
      email: "E-mail",
      emailPlaceholder: "vous@email.com",
      subject: "Objet",
      subjectPlaceholder: "Motif de votre message",
      message: "Message",
      messagePlaceholder: "Parlez-moi du type d'opportunité que vous imaginez…",
      submit: "Envoyer le message",
      sending: "Envoi en cours…",
      dataNote: "Vos données servent uniquement à vous répondre.",
      successTitle: "Message envoyé",
      successBody: "Merci pour votre message. Je vous répondrai dans les meilleurs délais.",
      sendAnother: "Envoyer un autre message",
      errorTitle: "Le message n'a pas pu être envoyé",
      errorBody: "Réessayez dans quelques minutes, ou écrivez-moi par un autre canal.",
      errors: {
        nameRequired: "Indiquez votre nom pour que je sache qui m'écrit.",
        emailRequired: "J'ai besoin de votre adresse e-mail pour vous répondre.",
        emailInvalid: "Cette adresse e-mail ne semble pas valide. Veuillez la vérifier.",
        subjectRequired: "Ajoutez un objet à votre message.",
        messageRequired: "Écrivez un message pour que je puisse vous répondre.",
        messageTooShort: "Le message est un peu court — dites-en un peu plus.",
        messageTooLong: "Le message est trop long (2000 caractères maximum).",
      },
    },
  },

  footer: {
    tagline: "Portfolio professionnel · Barcelone, Espagne",
    note: "Un site personnel en construction permanente.",
    rights: "© 2026 Yovenzor Singh. Tous droits réservés.",
    backToTop: "Retour en haut",
  },

  common: {
    notFoundTitle: "Page introuvable",
    notFoundText: "La page que vous cherchez n'existe pas ou a été déplacée.",
    backHome: "Retour à l'accueil",
  },
};
