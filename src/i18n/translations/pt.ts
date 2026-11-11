import type { Dictionary } from "./es";

export const pt: Dictionary = {
  meta: {
    title: "Yovenzor Singh — Estudante de Instalações Elétricas e Automáticas",
    description:
      "Portfólio profissional de Yovenzor Singh, estudante do segundo ano de Formação Profissional Intermédia em Instalações Elétricas e Sistemas Automáticos. Instalações elétricas, automação e manutenção.",
    ogLocale: "pt_PT",
  },

  nav: {
    home: "Início",
    about: "Sobre mim",
    education: "Formação",
    skills: "Competências",
    projects: "Projetos",
    experience: "Experiência",
    contact: "Contacto",
    openMenu: "Abrir menu",
    closeMenu: "Fechar menu",
    menuTitle: "Navegação",
    language: "Idioma",
    changeLanguage: "Mudar idioma",
    toggleTheme: "Alternar entre modos claro e escuro",
    lightMode: "Modo claro",
    darkMode: "Modo escuro",
    skipToContent: "Saltar para o conteúdo",
  },

  hero: {
    availability: "Aberto a oportunidades profissionais",
    role: "Estudante de Instalações Elétricas e Automáticas · Futuro eletricista",
    headlineA: "A construir o meu futuro no mundo da",
    headlineB: "eletricidade e da automação.",
    intro:
      "Sou estudante do segundo ano de Formação Profissional Intermédia em Instalações Elétricas e Sistemas Automáticos, com interesse em instalações elétricas, automação e manutenção. Considero-me uma pessoa ativa, flexível e com vontade de aprender, melhorar as minhas competências técnicas e adquirir experiência profissional.",
    ctaProjects: "Ver os meus projetos",
    ctaContact: "Contactar-me",
    scroll: "Deslizar",
    visualCaption: "Esquema unifilar ilustrativo — quadro de distribuição e comando",
  },

  about: {
    label: "Sobre mim",
    title: "Técnico em formação, curioso por natureza",
    lead: "Estou a aprender o ofício na prática: como se projeta, monta e mantém uma instalação elétrica segura.",
    paragraphs: [
      "Frequento o segundo ano de Formação Profissional Intermédia em Instalações Elétricas e Sistemas Automáticos no Jesuïtes El Clot, Barcelona. Todas as semanas combino teoria na sala de aula com trabalho prático na oficina.",
      "Interesso-me por instalações elétricas, manutenção elétrica, automação industrial, circuitos de comando e controladores lógicos programáveis (PLC). Gosto de perceber como os sistemas funcionam por dentro.",
      "Valorizo a disciplina, a adaptabilidade, a aprendizagem contínua e o trabalho em equipa. O meu objetivo é continuar a desenvolver-me profissionalmente e construir uma carreira no setor elétrico.",
    ],
    interestsTitle: "O que me interessa",
    interests: [
      "Instalações elétricas",
      "Manutenção elétrica",
      "Automação industrial",
      "Circuitos de comando",
      "Controladores lógicos programáveis (PLC)",
    ],
    valuesTitle: "Como trabalho",
    values: [
      { name: "Disciplina", text: "Ordem e método em cada exercício." },
      { name: "Adaptabilidade", text: "À vontade para mudar de tarefa e de abordagem." },
      { name: "Aprendizagem contínua", text: "Pergunto, experimento, corrijo." },
      { name: "Trabalho em equipa", text: "Coordinar-nos para avançar melhor." },
    ],
    portraitAlt: "Retrato profissional de Yovenzor Singh",
    portraitPlaceholder: "Espaço reservado ao retrato",
    portraitHint: "Substitua este marcador pela sua fotografia profissional.",
  },

  education: {
    label: "Formação",
    title: "Percurso académico",
    intro:
      "A minha formação atual centra-se nas instalações elétricas e nos automatismos, com uma base sólida de prática em oficina.",
    qualificationLabel: "Habilitação",
    statusLabel: "Estado",
    institutionLabel: "Instituição",
    qualification: "Formação Profissional Intermédia em Instalações Elétricas e Sistemas Automáticos (CFGM IEA)",
    status: "Segundo ano, em formação",
    institution: "Jesuïtes El Clot, Barcelona",
    description:
      "Estou a adquirir os conhecimentos técnicos necessários para trabalhar com segurança em instalações elétricas: desde o cabeamento e as proteções até aos circuitos de comando e à leitura de esquemas elétricos.",
    subjectsLabel: "Conteúdos técnicos",
    subjects: [
      "Instalações elétricas",
      "Proteções elétricas",
      "Cabeamento e ligações",
      "Esquemas elétricos",
      "Automatismo",
      "Manutenção",
    ],
  },

  skills: {
    label: "Competências",
    title: "Competências técnicas",
    intro:
      "Estas são as áreas onde estou a desenvolver as minhas competências, com um nível real e honesto: em formação, conhecimentos básicos ou prática constante.",
    levelLabels: {
      "En formación": "Em formação",
      "Conocimientos básicos": "Conhecimentos básicos",
      Practicando: "Em prática",
    },
    categories: [
      {
        title: "Instalações elétricas",
        description: "A base do trabalho diário de um eletricista.",
        items: [
          { name: "Cabeamento e passagem de condutores", level: "En formación" },
          { name: "Componentes de instalação", level: "En formación" },
          { name: "Proteções e distribuição", level: "Conocimientos básicos" },
          { name: "Leitura de esquemas elétricos", level: "En formación" },
          { name: "Medições e verificações básicas", level: "Conocimientos básicos" },
        ],
      },
      {
        title: "Automação e comando",
        description: "Comando, lógica e sequências de funcionamento.",
        items: [
          { name: "Circuitos de comando com relés", level: "En formación" },
          { name: "Contatores, relés e componentes de comando", level: "En formación" },
          { name: "Temporizadores e contactos auxiliares", level: "Practicando" },
          { name: "Programação básica de PLC", level: "En formación" },
          { name: "Introdução à automação industrial", level: "En formación" },
        ],
      },
      {
        title: "Ferramentas técnicas",
        description: "Software e documentação que utilizo na aula e na oficina.",
        items: [
          { name: "CADe_SIMU", level: "En formación" },
          { name: "Siemens LOGO! Soft Comfort", level: "En formación" },
          { name: "Esquemas e documentação elétrica", level: "En formación" },
          { name: "AutoCAD", level: "En formación" },
          { name: "EPLAN", level: "En formación" },
        ],
      },
    ],
  },

  projects: {
    label: "Projetos",
    title: "Projetos técnicos",
    intro:
      "Exercícios e trabalhos práticos realizados no âmbito da minha formação. Cada ficha explica o objetivo, o material utilizado e o que aprendi no processo.",
    illustrative: "Esquema ilustrativo",
    pendingDoc: "Documentação PDF por adicionar",
    viewDoc: "Abrir a memória técnica (PDF)",
    downloadDoc: "Descarregar PDF",
    closeDoc: "Fechar o visualizador do PDF",
    downloadCad: "Descarregar o ficheiro AutoCAD (.dwg)",
    openProject: "Abrir o projeto",
    viewProject: "Ver ficha técnica",
    comingSoonBadge: "Em breve",
    comingSoonTitle: "Mais projetos a caminho",
    comingSoonText:
      "Já são três projetos documentados em detalhe. Estou preparando as próximas fichas com seus planos, cálculos e documentação.",
    comingSoonFoot: "Novos casos técnicos · em preparação",
    backToProjects: "Voltar aos projetos",
    notFoundTitle: "Projeto não encontrado",
    notFoundText: "A ficha que procura não existe ou foi removida.",
    sectionTitles: {
      overview: "Resumo",
      objective: "Objetivo",
      components: "Componentes e material",
      tools: "Ferramentas",
      role: "O meu papel",
      process: "Processo técnico",
      lessons: "Problemas e aprendizagens",
      docs: "Documentação",
    },
    items: [
      {
        slug: "casa-autocad",
        category: "Instalações elétricas",
        title: "Instalação elétrica de uma moradia desenhada em AutoCAD",
        summary:
          "Casa medida à escala real e desenhada em AutoCAD com todos os circuitos: de C1 a C9 e adicionais, com secções de cabo e queda de tensão calculadas.",
        overview:
          "Instalação elétrica completa de uma casa feita em AutoCAD: medi toda a habitação à escala real, distribuí todos os circuitos — C1 a C9 e adicionais — e calculei cada troço com toda a matemática necessária: secção de cabo e queda de tensão. Tudo fica registado na memória técnica do projeto.",
        objective:
          "Dimensionar a instalação de princípio a fim com cálculos próprios: cada circuito com a secção certa e a queda de tensão da habitação verificada para ficar dentro do limite, comprovada e não pressuposta.",
        components: [
          "Circuitos de C1 a C9 e circuitos adicionais",
          "Habitação medida à escala real",
          "Secção de cabo calculada para cada troço",
          "Cálculo da queda de tensão da instalação",
          "Memória técnica completa (PDF)",
        ],
        tools: ["AutoCAD", "Medição à escala real", "Cálculo de secções de cabo", "Cálculo de queda de tensão"],
        role: "Trabalho completo a solo: medição, desenho em AutoCAD, cálculos e memória técnica.",
        process: [
          "Medir toda a casa cômodo por cômodo à escala real.",
          "Distribuir os circuitos: de C1 a C9 e os adicionais conforme o uso de cada zona.",
          "Calcular a secção de cabo e a queda de tensão de cada troço, com toda a matemática.",
          "Desenhar a instalação em AutoCAD e redigir a memória técnica com todos os cálculos.",
        ],
        lessons: [
          "Um erro de medição à escala real propaga-se por todos os cálculos: medir bem é a base.",
          "Calcular a queda de tensão à mão obriga a perceber porque se escolhe cada secção.",
          "Numerar bem os circuitos torna a memória legível para qualquer pessoa.",
        ],
      },
      {
        slug: "panel-taller",
        category: "Montagem e cablagem de painel",
        title: "Cablagem de um grande painel de oficina que simula uma habitação",
        summary:
          "Esquemas feitos pela equipa e cablagem completa de um painel da oficina contra o relógio: o prazo era de menos de 10 horas e conseguimos em 9.",
        overview:
          "Trabalho de equipa para cablar um grande painel da nossa oficina que reproduzia uma habitação. Preparámos primeiro os esquemas necessários e, guiando-nos por eles, cablámos todo o painel dentro do prazo: menos de 10 horas, e conseguimos em 9.",
        objective:
          "Cablar por inteiro um painel que simula uma habitação a partir dos nossos próprios esquemas, dentro do limite de tempo da tarefa (menos de 10 horas).",
        components: [
          "Esquemas elétricos elaborados pela equipa",
          "Grande painel de oficina",
          "Cablagem da habitação simulada conforme os esquemas",
          "Ferramenta de ligação",
        ],
        tools: ["Esquemas próprios", "Cablagem de painel", "Gestão do tempo contra o relógio"],
        role: "Trabalho de equipa: elaboração dos esquemas e cablagem do painel, coordenados para cumprir o prazo.",
        process: [
          "Elaboração dos esquemas do painel que simula uma habitação.",
          "Repartição do trabalho em equipa para avançar sem nos atrapalharmos.",
          "Cablagem do grande painel da oficina seguindo os esquemas.",
          "Verificação final dentro do prazo: menos de 10 horas, conseguidas em 9.",
        ],
        lessons: [
          "Com um relógio de 10 horas, repartir bem o trabalho pesa mais do que cablar depressa.",
          "Um esquema bem feito poupa o tempo que depois se perde a hesitar diante do painel.",
          "Terminar em 9 horas provou que a organização da equipa funcionou.",
        ],
      },
      {
        slug: "automatizacion-plc",
        category: "Automação e comando",
        title: "Automação de sistemas com PLC",
        summary:
          "Programação de um controlador lógico programável para comandar um processo com entradas, saídas e sequências.",
        overview:
          "Projeto de iniciação à programação de controladores: defini entradas e saídas, escrevi a lógica de comando e simulei o comportamento do processo antes de o testar.",
        objective:
          "Dar os primeiros passos sérios em programação de PLC: lógica de comando, temporizações e tratamento de sinais.",
        components: [
          "Controlador lógico programável",
          "Sensores e fim de curso",
          "Contatores de manobra",
          "Sinalização de estado",
        ],
        tools: ["Ambiente de programação de PLC (prática de aula)", "Esquema de ligações", "Documentação técnica"],
        role: "Definição da tabela de entradas e saídas, programação da lógica e testes.",
        process: [
          "Descrição do processo e esquema funcional de comando.",
          "Atribuição de entradas e saídas.",
          "Programação da lógica passo a passo.",
          "Simulação e ajuste dos tempos.",
        ],
        lessons: [
          "Começar pela tabela de entradas e saídas evita reescrever o programa inteiro.",
          "Os temporizadores mal ajustados foram a falha mais comum nos meus primeiros ensaios.",
          "Um bom comentário dentro do programa vale mais do que memória.",
        ],
      },
      {
        slug: "rebt-pro",
        category: "Ferramenta com IA",
        title: "REBT Pro — Memórias REBT geradas com IA",
        summary:
          "Ferramenta web que redige a memória técnica exigida pelo REBT: preenche os dados da instalação e obtém um PDF pronto para entregar ao inspetor.",
        overview:
          "O REBT Pro nasce de um problema real do setor: em Espanha, cada instalação elétrica de baixa tensão precisa da sua memória técnica — com os cálculos e a redação que o inspetor revê — e escrevê-la à mão consome horas em cada obra. A ferramenta guia o utilizador com um formulário, recolhe os dados da instalação, redige o documento com apoio de IA e exporta-o em PDF para entregar à pessoa seguinte do processo.",
        objective:
          "Transformar um processo lento e repetitivo num formulário que devolve o documento completo: mesma estrutura, mesmas secções e pronto para o inspetor, sem horas de redação.",
        components: [
          "Formulário guiado com os dados da instalação",
          "Redação do documento assistida por IA",
          "Dados e cálculos técnicos da instalação",
          "Exportação final para PDF",
        ],
        tools: ["IA para a redação", "Desenvolvimento web (React)", "REBT — regulamento eletrotécnico de baixa tensão espanhol", "Geração de PDF"],
        role: "Projeto pessoal completo: a ideia, o conteúdo técnico, o fluxo do formulário e o desenvolvimento da ferramenta.",
        process: [
          "Identificar o problema: a memória REBT é escrita à mão e repete-se em cada instalação.",
          "Definir que dados o inspetor precisa e organizá-los num formulário claro.",
          "Ligar a redação do documento à IA a partir desses dados.",
          "Exportar o PDF final e revê-lo com casos reais antes de publicar.",
        ],
        lessons: [
          "Um formulário bem pensado vale mais do que um bom prompt: com dados ordenados, o texto sai bem.",
          "A IA redige, mas a norma e os cálculos continuam a exigir critério técnico.",
          "Pensar em quem lê o documento — o inspetor — muda a forma de o estruturar.",
        ],
      },
    ],
  },

  experience: {
    label: "Experiência",
    title: "Experiência prática",
    intro:
      "Estágio de formação em curso no instituto Salesians de Sarria desde 28 de setembro, no âmbito do meu programa de formação. Ainda não o terminei e continuo sem experiência profissional remunerada — digo-o com orgulho: estou aqui para começar a adquiri-la.",
    badge: "Estágio de formação · em curso",
    itemTitle: "Estágio em Salesians de Sarria",
    context: "Instituto Salesians de Sarria — estágio curricular",
    period: "Desde 28 de setembro · em curso",
    tasksLabel: "Tarefas realizadas",
    tasks: [
      "Ajudar a organizar e classificar o material elétrico",
      "Desmontar e identificar componentes elétricos",
      "Ordenar cabos, temporizadores e acessórios",
      "Preparar e deixar prontos os bancos de práticas",
      "Participar em atividades de manutenção da oficina",
    ],
    skillsTitle: "Competências desenvolvidas",
    skills: [
      "Organização do material",
      "Identificação de componentes",
      "Cuidado na manipulação do material",
      "Trabalho em equipa",
      "Conhecimento do equipamento técnico",
    ],
  },

  softSkills: {
    label: "Perfil",
    title: "Competências pessoais",
    intro: "O que trago para uma equipa para além do técnico.",
    items: [
      { name: "Vontade de aprender", text: "Chego com curiosidade e fico para perguntar como funciona." },
      { name: "Adaptabilidade", text: "Mudo de tarefa, de banco ou de horário sem perder o foco." },
      { name: "Resolução de problemas", text: "Quando algo falha, procuro a causa antes da desculpa." },
      { name: "Trabalho em equipa", text: "Partilhar o que aprendo acelera todo o grupo." },
      { name: "Organização e responsabilidade", text: "Cuido do material, cumpro prazos e deixo o banco limpo." },
      { name: "Interesse pela tecnologia", text: "Entusiasma-me perceber como um processo se controla e automatiza." },
      { name: "Mentalidade de melhoria contínua", text: "Cada prática deixa-me uma coisa para fazer melhor na seguinte." },
    ],
  },

  objectives: {
    label: "Objetivos",
    title: "Objetivos profissionais",
    paragraphs: [
      "Quero continuar a ganhar experiência prática em instalações elétricas, aprofundar o conhecimento em manutenção e aprender cada vez mais sobre automação industrial.",
      "O meu objetivo é fazer parte de uma equipa profissional onde possa crescer, contribuir com a minha energia e capacidade de trabalho, e tornar-me num eletricista fiável.",
    ],
    ctaTitle: "Procura alguém com vontade de aprender e crescer no setor elétrico?",
    ctaText: "Estou disponível para conhecer empresas do sector e falar de oportunidades formativas e profissionais.",
    ctaButton: "Contactar-me",
  },

  contact: {
    label: "Contacto",
    title: "Vamos falar",
    intro:
      "Estou aberto a oportunidades de formação, estágios e primeiros passos profissionais no setor elétrico.",
    finalCta: "Procura alguém com vontade de aprender e crescer no setor elétrico? Vamos falar.",
    channelsTitle: "Também pode encontrar-me em",
    channels: {
      email: "Correio eletrónico",
      linkedin: "LinkedIn",
      cv: "CV em PDF",
    },
    channelPending: "Por configurar",
    channelPendingHint: "Esta ligação será ativada quando os dados reais forem adicionados à configuração do site.",
    formTitle: "Envie-me uma mensagem",
    form: {
      name: "Nome",
      namePlaceholder: "O seu nome completo",
      email: "Correio eletrónico",
      emailPlaceholder: "voce@email.com",
      subject: "Assunto",
      subjectPlaceholder: "Motivo da sua mensagem",
      message: "Mensagem",
      messagePlaceholder: "Conte-me que tipo de oportunidade tem em mente…",
      submit: "Enviar mensagem",
      sending: "A enviar…",
      dataNote: "Os seus dados são usados apenas para lhe responder.",
      successTitle: "Mensagem enviada",
      successBody: "Obrigado por contactar. Responderei o mais rapidamente possível.",
      sendAnother: "Enviar outra mensagem",
      errorTitle: "Não foi possível enviar a mensagem",
      errorBody: "Tente novamente dentro de alguns minutos ou contacte-me por outro canal.",
      errors: {
        nameRequired: "Indique o seu nome para eu saber quem me escreve.",
        emailRequired: "Preciso do seu correio eletrónico para responder.",
        emailInvalid: "Esse endereço não parece válido. Verifique-o, por favor.",
        subjectRequired: "Adicione um assunto à mensagem.",
        messageRequired: "Escreva uma mensagem para eu poder responder.",
        messageTooShort: "A mensagem é um pouco curta — conte-me um pouco mais.",
        messageTooLong: "A mensagem é demasiado longa (máximo de 2000 caracteres).",
      },
    },
  },

  footer: {
    tagline: "Portfólio profissional · Barcelona, Espanha",
    note: "Um site pessoal em construção contínua.",
    rights: "© 2026 Yovenzor Singh. Todos os direitos reservados.",
    backToTop: "Voltar ao topo",
  },

  common: {
    notFoundTitle: "Página não encontrada",
    notFoundText: "A página que procura não existe ou mudou de endereço.",
    backHome: "Voltar ao início",
  },
};
