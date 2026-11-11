/**
 * Spanish — source of truth for the translation dictionary.
 *
 * Every other language file is typed as `Dictionary`, so TypeScript fails the
 * build if any key or project slug is missing. Edit content here first, then
 * mirror the change in en/fr/pt/de/ar.
 */

export const es = {
  meta: {
    title: "Yovenzor Singh — Estudiante de Instalaciones Eléctricas y Automáticas",
    description:
      "Portfolio profesional de Yovenzor Singh, estudiante de segundo curso de Grado Medio de Instalaciones Eléctricas y Automáticas. Instalaciones eléctricas, automatismo y mantenimiento.",
    ogLocale: "es_ES",
  },

  nav: {
    home: "Inicio",
    about: "Sobre mí",
    education: "Formación",
    skills: "Competencias",
    projects: "Proyectos",
    experience: "Experiencia",
    contact: "Contacto",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    menuTitle: "Navegación",
    language: "Idioma",
    changeLanguage: "Cambiar idioma",
    toggleTheme: "Cambiar entre modo claro y oscuro",
    lightMode: "Modo claro",
    darkMode: "Modo oscuro",
    skipToContent: "Saltar al contenido",
  },

  hero: {
    availability: "Abierto a oportunidades profesionales",
    role: "Estudiante de Instalaciones Eléctricas y Automáticas · Futuro electricista",
    headlineA: "Construyendo mi futuro en el mundo de",
    headlineB: "la electricidad y la automatización.",
    intro:
      "Soy estudiante de segundo curso de Grado Medio de Instalaciones Eléctricas y Automáticas, con interés en las instalaciones eléctricas, la automatización y el mantenimiento. Me considero una persona activa, flexible y con ganas de aprender, mejorar mis habilidades técnicas y adquirir experiencia profesional.",
    ctaProjects: "Ver mis proyectos",
    ctaContact: "Contactar conmigo",
    scroll: "Desplázate",
    visualCaption: "Esquema unifilar ilustrativo — cuadro de distribución y control",
  },

  about: {
    label: "Sobre mí",
    title: "Técnico en formación, curioso por naturaleza",
    lead: "Estoy aprendiendo el oficio desde la práctica: cómo se diseña, se monta y se mantiene una instalación eléctrica segura.",
    paragraphs: [
      "Curso segundo grado medio de Grado Medio de Instalaciones Eléctricas y Automáticas en Jesuïtes El Clot, Barcelona. Cada semana combino teoría en el aula y trabajo práctico en el taller.",
      "Me interesan las instalaciones eléctricas, el mantenimiento eléctrico, la automatización industrial, los circuitos de mando y control y los autómatas programables (PLC). Disfruto entendiendo cómo funcionan los sistemas por dentro.",
      "Valoro la disciplina, la adaptabilidad, el aprendizaje continuo y el trabajo en equipo. Mi objetivo es seguir formándome y construir una carrera profesional en el sector eléctrico.",
    ],
    interestsTitle: "Me interesa",
    interests: [
      "Instalaciones eléctricas",
      "Mantenimiento eléctrico",
      "Automatización industrial",
      "Circuitos de mando y control",
      "Autómatas programables (PLC)",
    ],
    valuesTitle: "Cómo trabajo",
    values: [
      { name: "Disciplina", text: "Orden y método en cada ejercicio." },
      { name: "Adaptabilidad", text: "Comodo cambiando de tarea y de enfoque." },
      { name: "Aprendizaje continuo", text: "Pregunto, pruebo y corrijo." },
      { name: "Trabajo en equipo", text: "Coordinarme para avanzar mejor." },
    ],
    portraitAlt: "Retrato profesional de Yovenzor Singh",
    portraitPlaceholder: "Marcador de retrato",
    portraitHint: "Sustituye este marcador por tu fotografía profesional.",
  },

  education: {
    label: "Formación",
    title: "Formación académica",
    intro:
      "Mi formación actual se centra en las instalaciones eléctricas y los automatismos, con una base fuerte de práctica de taller.",
    qualificationLabel: "Título",
    statusLabel: "Estado",
    institutionLabel: "Centro",
    qualification: "Grado Medio de Instalaciones Eléctricas y Automáticas (CFGM IEA)",
    status: "Segundo curso, en formación",
    institution: "Jesuïtes El Clot, Barcelona",
    description:
      "Estoy desarrollando los conocimientos técnicos necesarios para trabajar con seguridad en instalaciones eléctricas: desde el cableado y las protecciones hasta los circuitos de control y la lectura de esquemas.",
    subjectsLabel: "Contenidos técnicos",
    subjects: [
      "Instalaciones eléctricas",
      "Protecciones eléctricas",
      "Cableado y conexionado",
      "Esquemas eléctricos",
      "Automatismo",
      "Mantenimiento",
    ],
  },

  skills: {
    label: "Competencias",
    title: "Competencias técnicas",
    intro:
      "Estos son los ámbitos en los que estoy desarrollando habilidades, con un nivel real y honesto: en formación, conocimientos básicos o en práctica constante.",
    levelLabels: {
      "En formación": "En formación",
      "Conocimientos básicos": "Conocimientos básicos",
      Practicando: "Practicando",
    },
    categories: [
      {
        title: "Instalaciones eléctricas",
        description: "Base del trabajo diario de un electricista.",
        items: [
          { name: "Cableado y paso de conductores", level: "En formación" },
          { name: "Componentes de instalación", level: "En formación" },
          { name: "Protecciones y distribución", level: "Conocimientos básicos" },
          { name: "Lectura de esquemas eléctricos", level: "En formación" },
          { name: "Mediciones y verificaciones básicas", level: "Conocimientos básicos" },
        ],
      },
      {
        title: "Automatismo y control",
        description: "Mando, lógica y secuencias de funcionamiento.",
        items: [
          { name: "Circuitos de mando con relés", level: "En formación" },
          { name: "Contactores, relés y componentes de control", level: "En formación" },
          { name: "Temporizadores y contactos auxiliares", level: "Practicando" },
          { name: "Programación básica de PLC", level: "En formación" },
          { name: "Introducción a la automatización industrial", level: "En formación" },
        ],
      },
      {
        title: "Herramientas técnicas",
        description: "Software y documentación que utilizo en el aula y en taller.",
        items: [
          { name: "CADe_SIMU", level: "En formación" },
          { name: "Siemens LOGO! Soft Comfort", level: "En formación" },
          { name: "Esquemas y documentación eléctrica", level: "En formación" },
          { name: "AutoCAD", level: "En formación" },
          { name: "EPLAN", level: "En formación" },
        ],
      },
    ],
  },

  projects: {
    label: "Proyectos",
    title: "Proyectos técnicos",
    intro:
      "Ejercicios y prácticas realizados dentro de mi formación. Cada ficha explica el objetivo, el material empleado y lo que aprendí en el proceso.",
    illustrative: "Esquema ilustrativo",
    pendingDoc: "Documentación PDF pendiente de añadir",
    viewDoc: "Abrir memoria técnica (PDF)",
    downloadDoc: "Descargar PDF",
    closeDoc: "Cerrar visor del PDF",
    downloadCad: "Descargar archivo de AutoCAD (.dwg)",
    viewProject: "Ver ficha técnica",
    comingSoonBadge: "Próximamente",
    comingSoonTitle: "Más proyectos en camino",
    comingSoonText:
      "Ya van dos instalaciones documentadas al detalle. Estoy preparando las siguientes fichas con sus planos, cálculos y documentación.",
    comingSoonFoot: "Nuevos casos técnicos · en preparación",
    backToProjects: "Volver a proyectos",
    notFoundTitle: "Proyecto no encontrado",
    notFoundText: "La ficha que buscas no existe o ha sido retirada.",
    sectionTitles: {
      overview: "Resumen",
      objective: "Objetivo",
      components: "Componentes y material",
      tools: "Herramientas",
      role: "Mi rol",
      process: "Proceso técnico",
      lessons: "Problemas y aprendizajes",
      docs: "Documentación",
    },
    items: [
      {
        slug: "casa-autocad",
        category: "Instalaciones eléctricas",
        title: "Instalación eléctrica de una vivienda en AutoCAD",
        summary:
          "Casa medida a escala real y dibujada en AutoCAD con todos sus circuitos: de C1 a C9 y adicionales, con secciones de cable y caída de tensión calculadas.",
        overview:
          "Instalación eléctrica completa de una casa realizada en AutoCAD: medí toda la vivienda a escala real, repartí todos los circuitos —C1 a C9 y otros adicionales— y calculé cada tramo con todas las matemáticas que hacían falta: sección de cable y caída de tensión. Todo queda recogido en la memoria técnica del proyecto.",
        objective:
          "Dimensionar la instalación de principio a fin con cálculos propios: que cada circuito lleve la sección correcta y que la caída de tensión de la vivienda quede dentro del límite, comprobado en lugar de supuesto.",
        components: [
          "Circuitos C1 a C9 y circuitos adicionales",
          "Vivienda medida a escala real",
          "Sección de cable calculada para cada tramo",
          "Cálculo de caída de tensión de la instalación",
          "Memoria técnica completa (PDF)",
        ],
        tools: ["AutoCAD", "Medición a escala real", "Cálculo de secciones de cable", "Cálculo de caída de tensión"],
        role: "Trabajo completo en solitario: medición, plano en AutoCAD, cálculos y memoria técnica.",
        process: [
          "Medir toda la casa estancia por estancia a escala real.",
          "Repartir los circuitos: C1 a C9 y los adicionales según el uso de cada zona.",
          "Calcular la sección de cable y la caída de tensión de cada tramo, con todas las matemáticas.",
          "Dibujar la instalación en AutoCAD y redactar la memoria técnica con todos los cálculos.",
        ],
        lessons: [
          "Un error de medida a escala real se arrastra por todo el cálculo: medir bien es la base.",
          "Calcular la caída de tensión a mano obliga a entender por qué se elige cada sección.",
          "Numerar bien los circuitos hace que la memoria sea legible para cualquiera.",
        ],
      },
      {
        slug: "panel-taller",
        category: "Montaje y cableado de panel",
        title: "Cableado de un panel grande que simula una vivienda",
        summary:
          "Esquemas hechos por el equipo y cableado completo de un panel del taller a contrarreloj: el plazo era de menos de 10 horas y lo logramos en 9.",
        overview:
          "Trabajo en equipo para cablear un panel grande de nuestro taller que reproducía una vivienda. Primero preparamos los esquemas necesarios y, con ellos como guía, cableamos el panel completo respetando el plazo: menos de 10 horas, y lo logramos en 9.",
        objective:
          "Cablear entero un panel que simula una vivienda partiendo de nuestros propios esquemas, dentro del tiempo límite de la prueba (menos de 10 horas).",
        components: [
          "Esquemas eléctricos elaborados por el equipo",
          "Panel grande de taller",
          "Cableado de la vivienda simulada según esquema",
          "Herramienta de conexionado",
        ],
        tools: ["Esquemas propios", "Cableado en panel", "Gestión del tiempo a contrarreloj"],
        role: "Trabajo en equipo: elaboración de los esquemas y cableado del panel, coordinados para cumplir el plazo.",
        process: [
          "Elaboración de los esquemas del panel que simula una vivienda.",
          "Reparto del trabajo en equipo para avanzar sin interferirnos.",
          "Cableado del panel grande del taller siguiendo los esquemas.",
          "Verificación final dentro del plazo: menos de 10 horas, logradas en 9.",
        ],
        lessons: [
          "Con un reloj de 10 horas, repartir bien el trabajo pesa más que cablear rápido.",
          "Un esquema bien hecho ahorra el tiempo que después se pierde dudando frente al panel.",
          "Terminar en 9 horas demostró que la organización del equipo funcionó.",
        ],
      },
      {
        slug: "automatizacion-plc",
        category: "Automatismo y control",
        title: "Automatización de sistemas con PLC",
        summary:
          "Programación de un autómata programable para controlar un proceso con entradas, salidas y secuencias.",
        overview:
          "Proyecto de iniciación a la programación de autómatas: definí entradas y salidas, escribí la lógica de control y simulé el comportamiento del proceso antes de probarlo.",
        objective:
          "Dar mis primeros pasos serios en programación de PLC: lógica de mando, temporizaciones y tratamiento de señales.",
        components: [
          "Autómata programable",
          "Sensores y finales de carrera",
          "Contactores de maniobra",
          "Señalización de estado",
        ],
        tools: ["Entorno de programación de PLC (práctica de aula)", "Esquema de conexiones", "Documentación técnica"],
        role: "Definición de la tabla de entradas y salidas, programación de la lógica y pruebas.",
        process: [
          "Descripción del proceso y esquema funcional de control.",
          "Asignación de entradas y salidas.",
          "Programación de la lógica paso a paso.",
          "Simulación y ajuste de tiempos.",
        ],
        lessons: [
          "Empezar por el esquema de entradas y salidas ahorra reescribir el programa entero.",
          "Los temporizadores mal ajustados son la falla más común en mis primeras prácticas.",
          "Un buen comentario dentro del programa vale más que memoria.",
        ],
      },
    ],
  },

  experience: {
    label: "Experiencia",
    title: "Experiencia práctica",
    intro:
      "Prácticas formativas en curso en el instituto Salesians de Sarria desde el 28 de septiembre, dentro de mi programa formativo. Todavía no las he terminado, y sigo sin tener experiencia laboral remunerada — lo digo con orgullo: estoy aquí para empezar a generarla.",
    badge: "Prácticas formativas · en curso",
    itemTitle: "Prácticas en Salesians de Sarria",
    context: "Instituto Salesians de Sarria — prácticas curriculares",
    period: "Desde el 28 de septiembre · en curso",
    tasksLabel: "Tareas realizadas",
    tasks: [
      "Ayudar a organizar y clasificar el material eléctrico",
      "Desmontar e identificar componentes eléctricos",
      "Ordenar cables, temporizadores y accesorios",
      "Preparar y dejar listos los bancos de prácticas",
      "Participar en actividades de mantenimiento del taller",
    ],
    skillsTitle: "Competencias desarrolladas",
    skills: [
      "Organización del material",
      "Identificación de componentes",
      "Cuidado en el manejo de material",
      "Trabajo en equipo",
      "Conocimiento del equipamiento técnico",
    ],
  },

  softSkills: {
    label: "Perfil",
    title: "Competencias personales",
    intro: "Lo que aporto a un equipo más allá de lo técnico.",
    items: [
      { name: "Ganas de aprender", text: "Llego con curiosidad y me quedo a preguntar cómo funciona." },
      { name: "Adaptabilidad", text: "Cambio de tarea, de banco o de horario sin perder el enfoque." },
      { name: "Resolución de problemas", text: "Cuando algo no funciona, busco la causa antes que la excusa." },
      { name: "Trabajo en equipo", text: "Compartir lo aprendido acelera a todo el grupo." },
      { name: "Organización y responsabilidad", text: "Cuido el material, cumplo los plazos y dejo el banco recogido." },
      { name: "Interés por la tecnología", text: "Me entusiasma entender cómo se controla y se automatiza un proceso." },
      { name: "Mentalidad de mejora continua", text: "Cada práctica me deja una cosa que hacer mejor la siguiente." },
    ],
  },

  objectives: {
    label: "Objetivos",
    title: "Objetivos profesionales",
    paragraphs: [
      "Quiero seguir ganando experiencia práctica en instalaciones eléctricas, profundizar en el mantenimiento y aprender cada vez más sobre automatización industrial.",
      "Mi objetivo es formar parte de un equipo profesional donde poder crecer, aportar mi energía y mi capacidad de trabajo, y convertirme en un electricista fiable.",
    ],
    ctaTitle: "¿Buscas a alguien con ganas de aprender y crecer en el sector eléctrico?",
    ctaText: "Estoy disponible para conocer empresas del sector y hablar de oportunidades formativas y profesionales.",
    ctaButton: "Contactar conmigo",
  },

  contact: {
    label: "Contacto",
    title: "Hablemos",
    intro:
      "Estoy abierto a oportunidades de formación, prácticas y primeros pasos profesionales en el sector eléctrico.",
    finalCta: "¿Buscas a alguien con ganas de aprender y crecer en el sector eléctrico? Hablemos.",
    channelsTitle: "También puedes encontrarme en",
    channels: {
      email: "Correo electrónico",
      linkedin: "LinkedIn",
      cv: "Curriculum",
    },
    channelPending: "Pendiente de configurar",
    channelPendingHint: "Este enlace se activará cuando se añadan los datos reales en la configuración del sitio.",
    formTitle: "Envíame un mensaje",
    form: {
      name: "Nombre",
      namePlaceholder: "Tu nombre y apellidos",
      email: "Correo electrónico",
      emailPlaceholder: "tu@email.com",
      subject: "Asunto",
      subjectPlaceholder: "Motivo de tu mensaje",
      message: "Mensaje",
      messagePlaceholder: "Cuéntame qué tipo de oportunidad tienes en mente…",
      submit: "Enviar mensaje",
      sending: "Enviando…",
      dataNote: "Tus datos se usan únicamente para responderte.",
      successTitle: "Mensaje enviado",
      successBody: "Gracias por escribir. Te responderé lo antes posible.",
      sendAnother: "Enviar otro mensaje",
      errorTitle: "No se pudo enviar el mensaje",
      errorBody: "Vuelve a intentarlo en unos minutos o escríbeme por otro canal.",
      errors: {
        nameRequired: "Indica tu nombre para saber quién me escribe.",
        emailRequired: "Necesito tu correo para poder responderte.",
        emailInvalid: "Ese correo no parece válido. Revísalo, por favor.",
        subjectRequired: "Añade un asunto al mensaje.",
        messageRequired: "Escribe un mensaje para poder responderte.",
        messageTooShort: "El mensaje es un poco corto: cuéntame algo más.",
        messageTooLong: "El mensaje es demasiado largo (máximo 2000 caracteres).",
      },
    },
  },

  footer: {
    tagline: "Portfolio profesional · Barcelona, España",
    note: "Sitio web personal en construcción continua.",
    rights: "© 2026 Yovenzor Singh. Todos los derechos reservados.",
    backToTop: "Volver arriba",
  },

  common: {
    notFoundTitle: "Página no encontrada",
    notFoundText: "La página que buscas no existe o ha cambiado de dirección.",
    backHome: "Volver al inicio",
  },
}

export type Dictionary = typeof es;
export type Project = Dictionary["projects"]["items"][number];
export type SkillLevel = keyof Dictionary["skills"]["levelLabels"];
