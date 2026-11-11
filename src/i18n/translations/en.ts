import type { Dictionary } from "./es";

export const en: Dictionary = {
  meta: {
    title: "Yovenzor Singh — Electrical Installation & Automation Student",
    description:
      "Professional portfolio of Yovenzor Singh, second-year student of Intermediate Vocational Training in Electrical Installation and Automatic Systems. Electrical installations, automation and maintenance.",
    ogLocale: "en_GB",
  },

  nav: {
    home: "Home",
    about: "About",
    education: "Education",
    skills: "Skills",
    projects: "Projects",
    experience: "Experience",
    contact: "Contact",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    menuTitle: "Navigation",
    language: "Language",
    changeLanguage: "Change language",
    toggleTheme: "Toggle light and dark mode",
    lightMode: "Light mode",
    darkMode: "Dark mode",
    skipToContent: "Skip to content",
  },

  hero: {
    availability: "Open to professional opportunities",
    role: "Electrical Installation & Automation Student · Future electrician",
    headlineA: "Building my future in the world of",
    headlineB: "electricity and automation.",
    intro:
      "I am a second-year student of Intermediate Vocational Training in Electrical Installation and Automatic Systems, with a strong interest in electrical installations, automation and maintenance. I see myself as an active, flexible person who is eager to learn, sharpen my technical skills and gain real professional experience.",
    ctaProjects: "See my projects",
    ctaContact: "Get in touch",
    scroll: "Scroll",
    visualCaption: "Illustrative single-line diagram — distribution and control panel",
  },

  about: {
    label: "About me",
    title: "A technician in training, curious by nature",
    lead: "I am learning the trade through practice: how a safe electrical installation is designed, built and maintained.",
    paragraphs: [
      "I am in my second year of the Intermediate Vocational Training programme in Electrical Installation and Automatic Systems at Jesuïtes El Clot, Barcelona. Every week I combine classroom theory with hands-on work in the workshop.",
      "I am interested in electrical installations, electrical maintenance, industrial automation, control circuits and programmable logic controllers (PLCs). I enjoy understanding how systems work from the inside.",
      "I value discipline, adaptability, continuous learning and teamwork. My goal is to keep developing professionally and build a career in the electrical sector.",
    ],
    interestsTitle: "What interests me",
    interests: [
      "Electrical installations",
      "Electrical maintenance",
      "Industrial automation",
      "Control circuits",
      "Programmable logic controllers (PLC)",
    ],
    valuesTitle: "How I work",
    values: [
      { name: "Discipline", text: "Order and method in every exercise." },
      { name: "Adaptability", text: "Comfortable switching tasks and approaches." },
      { name: "Continuous learning", text: "I ask, I try, I correct." },
      { name: "Teamwork", text: "Coordinating so we all move forward." },
    ],
    portraitAlt: "Professional portrait of Yovenzor Singh",
    portraitPlaceholder: "Portrait placeholder",
    portraitHint: "Replace this placeholder with your professional photograph.",
  },

  education: {
    label: "Education",
    title: "Academic background",
    intro:
      "My current training focuses on electrical installations and automation, backed by strong hands-on workshop practice.",
    qualificationLabel: "Qualification",
    statusLabel: "Status",
    institutionLabel: "Institution",
    qualification: "Intermediate Vocational Training in Electrical Installation and Automatic Systems (CFGM IEA)",
    status: "Second year, in training",
    institution: "Jesuïtes El Clot, Barcelona",
    description:
      "I am building the technical knowledge needed to work safely on electrical installations: from wiring and protection devices to control circuits and reading electrical diagrams.",
    subjectsLabel: "Technical subjects",
    subjects: [
      "Electrical installations",
      "Electrical protection",
      "Wiring and connections",
      "Electrical diagrams",
      "Automation",
      "Maintenance",
    ],
  },

  skills: {
    label: "Skills",
    title: "Technical skills",
    intro:
      "These are the areas where I am developing my skills, with an honest and realistic level: in training, basic knowledge or steady practice.",
    levelLabels: {
      "En formación": "In training",
      "Conocimientos básicos": "Basic knowledge",
      Practicando: "Practising",
    },
    categories: [
      {
        title: "Electrical installations",
        description: "The everyday foundation of an electrician's work.",
        items: [
          { name: "Wiring and cable routing", level: "En formación" },
          { name: "Installation components", level: "En formación" },
          { name: "Protection devices and distribution", level: "Conocimientos básicos" },
          { name: "Reading electrical diagrams", level: "En formación" },
          { name: "Basic measurements and verification", level: "Conocimientos básicos" },
        ],
      },
      {
        title: "Automation and control",
        description: "Command, logic and operating sequences.",
        items: [
          { name: "Relay-based control circuits", level: "En formación" },
          { name: "Contactors, relays and control components", level: "En formación" },
          { name: "Timers and auxiliary contacts", level: "Practicando" },
          { name: "Basic PLC programming", level: "En formación" },
          { name: "Introduction to industrial automation", level: "En formación" },
        ],
      },
      {
        title: "Technical tools",
        description: "Software and documentation I use in class and in the workshop.",
        items: [
          { name: "CADe_SIMU", level: "En formación" },
          { name: "Siemens LOGO! Soft Comfort", level: "En formación" },
          { name: "Electrical diagrams and documentation", level: "En formación" },
          { name: "AutoCAD", level: "En formación" },
          { name: "EPLAN", level: "En formación" },
        ],
      },
    ],
  },

  projects: {
    label: "Projects",
    title: "Technical projects",
    intro:
      "Exercises and practical work completed as part of my training. Each case study explains the goal, the materials used and what I learned along the way.",
    illustrative: "Illustrative diagram",
    pendingDoc: "PDF documentation pending upload",
    viewDoc: "Open the technical report (PDF)",
    downloadDoc: "Download PDF",
    closeDoc: "Close the PDF viewer",
    downloadCad: "Download the AutoCAD file (.dwg)",
    openProject: "Open the project",
    viewProject: "View case study",
    comingSoonBadge: "Coming soon",
    comingSoonTitle: "More projects on the way",
    comingSoonText:
      "Three projects documented in detail so far. I am preparing the next sheets with their drawings, calculations and documentation.",
    comingSoonFoot: "New case studies · in preparation",
    backToProjects: "Back to projects",
    notFoundTitle: "Project not found",
    notFoundText: "The case study you are looking for does not exist or has been removed.",
    sectionTitles: {
      overview: "Overview",
      objective: "Objective",
      components: "Components and materials",
      tools: "Tools",
      role: "My role",
      process: "Technical process",
      lessons: "Problems and lessons learned",
      docs: "Documentation",
    },
    items: [
      {
        slug: "casa-autocad",
        category: "Electrical installations",
        title: "House electrical installation drawn in AutoCAD",
        summary:
          "A house measured at real scale and drawn in AutoCAD with all its circuits: C1 to C9 plus extras, with cable cross-sections and voltage drop calculated.",
        overview:
          "The complete electrical installation of a house built in AutoCAD: I measured the whole home at real scale, distributed every circuit — C1 to C9 and additional ones — and calculated each run with all the maths involved: cable cross-section and voltage drop. Everything is documented in the project's technical report.",
        objective:
          "Dimension the installation end to end with my own calculations: every circuit with the right cross-section and the home's voltage drop checked to stay within limits, proven rather than assumed.",
        components: [
          "Circuits C1 to C9 plus additional circuits",
          "Home measured at real scale",
          "Cable cross-section calculated for every run",
          "Installation voltage-drop calculation",
          "Full technical report (PDF)",
        ],
        tools: ["AutoCAD", "Real-scale measurement", "Cable cross-section calculation", "Voltage-drop calculation"],
        role: "Full solo work: measurement, AutoCAD drawing, calculations and technical report.",
        process: [
          "Measure the whole house room by room at real scale.",
          "Distribute the circuits: C1 to C9 and the additional ones according to each area's use.",
          "Calculate the cable cross-section and voltage drop of every run, with all the maths.",
          "Draw the installation in AutoCAD and write the technical report with every calculation.",
        ],
        lessons: [
          "A real-scale measuring error travels through every calculation: measuring well comes first.",
          "Calculating voltage drop by hand forces you to understand why each cross-section is chosen.",
          "Numbering circuits clearly makes the report readable by anyone.",
        ],
      },
      {
        slug: "panel-taller",
        category: "Panel wiring and assembly",
        title: "Wiring a large workshop panel that simulates a house",
        summary:
          "Team-drawn schematics and the full wiring of a workshop panel against the clock: the deadline was under 10 hours and we did it in 9.",
        overview:
          "Teamwork to wire a large panel in our workshop that replicated a house. We first prepared the required schematics and, using them as a guide, wired the whole panel within the deadline: under 10 hours, and we made it in 9.",
        objective:
          "Wire an entire panel simulating a house from our own schematics, inside the time limit of the task (under 10 hours).",
        components: [
          "Schematics produced by the team",
          "Large workshop panel",
          "Wiring of the simulated house per the schematics",
          "Wiring tools",
        ],
        tools: ["Our own schematics", "Panel wiring", "Working against the clock"],
        role: "Team work: drawing the schematics and wiring the panel, coordinated to meet the deadline.",
        process: [
          "Drawing the schematics for the panel that simulates a house.",
          "Splitting the work across the team to move forward without clashing.",
          "Wiring the large workshop panel following the schematics.",
          "Final check within the deadline: under 10 hours, achieved in 9.",
        ],
        lessons: [
          "With a 10-hour clock, splitting the work well matters more than wiring fast.",
          "A well-drawn schematic saves the time you later lose hesitating in front of the panel.",
          "Finishing in 9 hours proved the team's organisation worked.",
        ],
      },
      {
        slug: "automatizacion-plc",
        category: "Automation and control",
        title: "Automating systems with a PLC",
        summary:
          "Programming a programmable logic controller to run a process with inputs, outputs and sequences.",
        overview:
          "An introduction to PLC programming: I defined inputs and outputs, wrote the control logic and simulated the process behaviour before testing it.",
        objective:
          "Take my first serious steps in PLC programming: control logic, timing and signal handling.",
        components: [
          "Programmable logic controller",
          "Sensors and limit switches",
          "Switching contactors",
          "Status indicators",
        ],
        tools: ["PLC programming environment (classroom practice)", "Wiring diagram", "Technical documentation"],
        role: "Defining the I/O table, programming the logic and running the tests.",
        process: [
          "Describing the process and drawing the functional control scheme.",
          "Assigning inputs and outputs.",
          "Programming the logic step by step.",
          "Simulating and tuning the timings.",
        ],
        lessons: [
          "Starting from the I/O table saves rewriting the whole program.",
          "Poorly tuned timers were the most common fault in my first exercises.",
          "A well-commented program beats memory every time.",
        ],
      },
      {
        slug: "rebt-pro",
        category: "AI tool",
        title: "REBT Pro — REBT reports generated with AI",
        summary:
          "A web tool that writes the technical report Spanish REBT rules require: enter the installation data and get a PDF ready to hand to the inspector.",
        overview:
          "REBT Pro comes from a real problem in the trade: in Spain every low-voltage electrical installation needs its technical report — calculations and wording included — for the inspector to review, and writing it by hand takes hours on every job. The tool guides the user through a form, collects the installation data, drafts the document with AI assistance and exports it as a PDF to hand over to the next person in the process.",
        objective:
          "Turn a slow, repetitive piece of paperwork into a form that returns the finished document: same structure, same sections, ready for the inspector, without hours of writing.",
        components: [
          "Guided form for the installation data",
          "AI-assisted drafting of the document",
          "Technical data and calculations for the installation",
          "Final PDF export",
        ],
        tools: ["AI for drafting", "Web development (React)", "REBT — Spanish Low-Voltage Electrotechnical Regulation", "PDF generation"],
        role: "Complete personal project: the idea, the technical content, the form flow and the tool's development.",
        process: [
          "Spotting the problem: REBT reports are written by hand and repeated on every installation.",
          "Defining which data the inspector needs and ordering it into a clear form.",
          "Connecting the document drafting to AI from that data.",
          "Exporting the final PDF and reviewing it against real cases before publishing.",
        ],
        lessons: [
          "A well-designed form matters more than a clever prompt: ordered input produces good text.",
          "The AI drafts, but the regulation and the calculations still need technical judgement.",
          "Thinking about who reads the document — the inspector — changes how it is structured.",
        ],
      },
    ],
  },

  experience: {
    label: "Experience",
    title: "Practical experience",
    intro:
      "Ongoing training internship at Salesians de Sarria institute since September 28, as part of my training programme. I have not finished it yet, and I still have no paid professional experience — I say it with pride: I am here to start building it.",
    badge: "Training internship · ongoing",
    itemTitle: "Internship at Salesians de Sarria",
    context: "Salesians de Sarria institute — curricular internship",
    period: "Since September 28 · ongoing",
    tasksLabel: "Tasks performed",
    tasks: [
      "Helping to organise and classify electrical material",
      "Stripping down and identifying electrical components",
      "Sorting cables, timers and accessories",
      "Preparing and setting up the training benches",
      "Taking part in workshop maintenance activities",
    ],
    skillsTitle: "Skills developed",
    skills: [
      "Material organisation",
      "Component identification",
      "Careful handling of material",
      "Teamwork",
      "Knowledge of technical equipment",
    ],
  },

  softSkills: {
    label: "Profile",
    title: "Personal skills",
    intro: "What I bring to a team beyond the technical side.",
    items: [
      { name: "Eagerness to learn", text: "I arrive curious and stay to ask how it works." },
      { name: "Adaptability", text: "I switch task, bench or schedule without losing focus." },
      { name: "Problem solving", text: "When something fails, I look for the cause before the excuse." },
      { name: "Teamwork", text: "Sharing what I learn speeds up the whole group." },
      { name: "Organisation and responsibility", text: "I look after material, meet deadlines and leave the bench tidy." },
      { name: "Interest in technology", text: "I find it exciting to understand how a process is controlled and automated." },
      { name: "Continuous improvement", text: "Every exercise leaves me one thing to do better next time." },
    ],
  },

  objectives: {
    label: "Goals",
    title: "Career objectives",
    paragraphs: [
      "I want to keep gaining hands-on experience in electrical installations, deepen my knowledge of maintenance and learn more and more about industrial automation.",
      "My goal is to become part of a professional team where I can grow, contribute my energy and work ethic, and develop into a reliable electrician.",
    ],
    ctaTitle: "Looking for someone eager to learn and grow in the electrical sector?",
    ctaText: "I am available to meet companies in the sector and talk about training and professional opportunities.",
    ctaButton: "Get in touch",
  },

  contact: {
    label: "Contact",
    title: "Let's talk",
    intro:
      "I am open to training opportunities, internships and first professional steps in the electrical sector.",
    finalCta: "Looking for someone eager to learn and grow in the electrical sector? Let's talk.",
    channelsTitle: "You can also find me on",
    channels: {
      email: "Email",
      linkedin: "LinkedIn",
      cv: "CV (PDF)",
    },
    channelPending: "Not configured yet",
    channelPendingHint: "This link will be activated once the real details are added to the site configuration.",
    formTitle: "Send me a message",
    form: {
      name: "Name",
      namePlaceholder: "Your full name",
      email: "Email",
      emailPlaceholder: "you@email.com",
      subject: "Subject",
      subjectPlaceholder: "Reason for your message",
      message: "Message",
      messagePlaceholder: "Tell me about the kind of opportunity you have in mind…",
      submit: "Send message",
      sending: "Sending…",
      dataNote: "Your details are used only to reply to you.",
      successTitle: "Message sent",
      successBody: "Thank you for getting in touch. I will reply as soon as possible.",
      sendAnother: "Send another message",
      errorTitle: "The message could not be sent",
      errorBody: "Please try again in a few minutes, or write to me through another channel.",
      errors: {
        nameRequired: "Please tell me your name so I know who is writing.",
        emailRequired: "I need your email address to reply.",
        emailInvalid: "That email does not look valid. Please check it.",
        subjectRequired: "Please add a subject to your message.",
        messageRequired: "Please write a message so I can reply.",
        messageTooShort: "The message is a little short — tell me a bit more.",
        messageTooLong: "The message is too long (2000 characters maximum).",
      },
    },
  },

  footer: {
    tagline: "Professional portfolio · Barcelona, Spain",
    note: "A personal website, continuously evolving.",
    rights: "© 2026 Yovenzor Singh. All rights reserved.",
    backToTop: "Back to top",
  },

  common: {
    notFoundTitle: "Page not found",
    notFoundText: "The page you are looking for does not exist or has moved.",
    backHome: "Back to home",
  },
};
