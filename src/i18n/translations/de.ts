import type { Dictionary } from "./es";

export const de: Dictionary = {
  meta: {
    title: "Yovenzor Singh — Student der Elektroinstallationen und Automatisierung",
    description:
      "Berufliches Portfolio von Yovenzor Singh, zweites Jahr der mittleren beruflichen Ausbildung in Elektroinstallationen und automatischen Systemen. Elektroinstallationen, Automatisierung und Instandhaltung.",
    ogLocale: "de_DE",
  },

  nav: {
    home: "Start",
    about: "Über mich",
    education: "Ausbildung",
    skills: "Kompetenzen",
    projects: "Projekte",
    experience: "Erfahrung",
    contact: "Kontakt",
    openMenu: "Menü öffnen",
    closeMenu: "Menü schließen",
    menuTitle: "Navigation",
    language: "Sprache",
    changeLanguage: "Sprache wechseln",
    toggleTheme: "Zwischen hellem und dunklem Modus wechseln",
    lightMode: "Heller Modus",
    darkMode: "Dunkler Modus",
    skipToContent: "Zum Inhalt springen",
  },

  hero: {
    availability: "Offen für berufliche Möglichkeiten",
    role: "Student der Elektroinstallationen und Automatisierung · Zukünftiger Elektriker",
    headlineA: "Ich baue meine Zukunft in der Welt der",
    headlineB: "Elektrik und Automatisierung.",
    intro:
      "Ich bin Student im zweiten Jahr der mittleren beruflichen Ausbildung in Elektroinstallationen und automatischen Systemen und interessiere mich für Elektroinstallationen, Automatisierung und Instandhaltung. Ich sehe mich als aktive, flexible Person mit großem Lernwillen, die ihre technischen Fähigkeiten ausbauen und berufliche Erfahrung sammeln möchte.",
    ctaProjects: "Meine Projekte ansehen",
    ctaContact: "Kontakt aufnehmen",
    scroll: "Weiter scrollen",
    visualCaption: "Schematische Einliniendarstellung — Verteil- und Steuerungsboard",
  },

  about: {
    label: "Über mich",
    title: "Azubi mit Technikinteresse und Neugier",
    lead: "Ich lerne das Handwerk in der Praxis: Wie eine sichere Elektroinstallation geplant, gebaut und gewartet wird.",
    paragraphs: [
      "Ich besuche das zweite Jahr der mittleren beruflichen Ausbildung in Elektroinstallationen und automatischen Systemen am Jesuïtes El Clot in Barcelona. Jede Woche kombiniere ich Theorie im Klassenraum mit Praxisarbeit in der Werkstatt.",
      "Mich interessieren Elektroinstallationen, elektrotechnische Instandhaltung, industrielle Automatisierung, Steuerschaltungen und speicherprogrammierbare Steuerungen (SPS). Ich verstehe gern, wie Systeme von innen funktionieren.",
      "Ich schätze Disziplin, Anpassungsfähigkeit, kontinuierliches Lernen und Teamarbeit. Mein Ziel ist es, mich weiterzuentwickeln und eine Karriere im Elektrohandwerk aufzubauen.",
    ],
    interestsTitle: "Was mich interessiert",
    interests: [
      "Elektroinstallationen",
      "Elektrotechnische Instandhaltung",
      "Industrielle Automatisierung",
      "Steuerschaltungen",
      "Speicherprogrammierbare Steuerungen (SPS)",
    ],
    valuesTitle: "Wie ich arbeite",
    values: [
      { name: "Disziplin", text: "Ordnung und Methode in jeder Übung." },
      { name: "Anpassungsfähigkeit", text: "Flexibel bei Aufgaben und Vorgehensweisen." },
      { name: "Kontinuierliches Lernen", text: "Ich frage, teste und korrigiere." },
      { name: "Teamarbeit", text: "Abstimmen, damit wir gemeinsam weiterkommen." },
    ],
    portraitAlt: "Berufliches Porträtfoto von Yovenzor Singh",
    portraitPlaceholder: "Porträt-Platzhalter",
    portraitHint: "Ersetzen Sie diesen Platzhalter durch Ihr professionelles Foto.",
  },

  education: {
    label: "Ausbildung",
    title: "Schulischer Werdegang",
    intro:
      "Meine aktuelle Ausbildung konzentriert sich auf Elektroinstallationen und Automatisierungstechnik, unterlegt durch praktische Werkstattarbeit.",
    qualificationLabel: "Abschluss",
    statusLabel: "Status",
    institutionLabel: "Einrichtung",
    qualification: "Mittlere berufliche Ausbildung in Elektroinstallationen und automatischen Systemen (CFGM IEA)",
    status: "Zweites Jahr, in Ausbildung",
    institution: "Jesuïtes El Clot, Barcelona",
    description:
      "Ich erwerbe das technische Wissen, das für sicheres Arbeiten an Elektroinstallationen nötig ist: von Verkabelung und Schutzvorrichtungen über Steuerschaltungen bis hin zum Lesen elektrischer Schaltpläne.",
    subjectsLabel: "Technische Inhalte",
    subjects: [
      "Elektroinstallationen",
      "Elektrische Schutzvorrichtungen",
      "Verkabelung und Anschlüsse",
      "Elektrische Schaltpläne",
      "Automatisierungstechnik",
      "Instandhaltung",
    ],
  },

  skills: {
    label: "Kompetenzen",
    title: "Technische Kompetenzen",
    intro:
      "Das sind die Bereiche, in denen ich meine Fähigkeiten entwickle — mit einem realen, ehrlichen Niveau: in Ausbildung, Grundkenntnissen oder regelmäßiger Praxis.",
    levelLabels: {
      "En formación": "In Ausbildung",
      "Conocimientos básicos": "Grundkenntnisse",
      Practicando: "In Übung",
    },
    categories: [
      {
        title: "Elektroinstallationen",
        description: "Die tägliche Grundlage der Elektrikerarbeit.",
        items: [
          { name: "Verkabelung und Leitungsführung", level: "En formación" },
          { name: "Installationskomponenten", level: "En formación" },
          { name: "Schutzvorrichtungen und Verteilung", level: "Conocimientos básicos" },
          { name: "Lesen elektrischer Schaltpläne", level: "En formación" },
          { name: "Grundlegende Messungen und Prüfungen", level: "Conocimientos básicos" },
        ],
      },
      {
        title: "Automatisierung und Steuerung",
        description: "Steuerung, Logik und Abläufe.",
        items: [
          { name: "Relaisgestützte Steuerschaltungen", level: "En formación" },
          { name: "Schütze, Relais und Steuerkomponenten", level: "En formación" },
          { name: "Zeitrelais und Hilfskontakte", level: "Practicando" },
          { name: "Grundlagen der SPS-Programmierung", level: "En formación" },
          { name: "Einführung in die industrielle Automatisierung", level: "En formación" },
        ],
      },
      {
        title: "Technische Werkzeuge",
        description: "Software und Dokumentation, die ich im Unterricht und in der Werkstatt nutze.",
        items: [
          { name: "CADe_SIMU", level: "En formación" },
          { name: "Siemens LOGO! Soft Comfort", level: "En formación" },
          { name: "Schaltpläne und elektrische Dokumentation", level: "En formación" },
          { name: "AutoCAD", level: "En formación" },
          { name: "EPLAN", level: "En formación" },
        ],
      },
    ],
  },

  projects: {
    label: "Projekte",
    title: "Technische Projekte",
    intro:
      "Übungen und Praxisarbeiten aus meiner Ausbildung. Jede Fallstudie erklärt das Ziel, die eingesetzten Materialien und was ich dabei gelernt habe.",
    illustrative: "Schematische Darstellung",
    pendingDoc: "PDF-Dokumentation noch nicht hinterlegt",
    viewDoc: "Technischen Bericht öffnen (PDF)",
    downloadDoc: "PDF herunterladen",
    closeDoc: "PDF-Ansicht schließen",
    downloadCad: "AutoCAD-Datei herunterladen (.dwg)",
    viewProject: "Fallstudie ansehen",
    comingSoonBadge: "Demnächst",
    comingSoonTitle: "Weitere Projekte folgen",
    comingSoonText:
      "Bisher zwei Installationen im Detail dokumentiert. Ich bereite die nächsten Blätter mit Plänen, Berechnungen und Dokumentation vor.",
    comingSoonFoot: "Neue Fallstudien · in Vorbereitung",
    backToProjects: "Zurück zu den Projekten",
    notFoundTitle: "Projekt nicht gefunden",
    notFoundText: "Die gesuchte Fallstudie existiert nicht oder wurde entfernt.",
    sectionTitles: {
      overview: "Überblick",
      objective: "Ziel",
      components: "Komponenten und Material",
      tools: "Werkzeuge",
      role: "Meine Rolle",
      process: "Technischer Ablauf",
      lessons: "Probleme und Erkenntnisse",
      docs: "Dokumentation",
    },
    items: [
      {
        slug: "casa-autocad",
        category: "Elektroinstallationen",
        title: "Elektroinstallation eines Hauses in AutoCAD gezeichnet",
        summary:
          "Haus in realem Maßstab vermessen und in AutoCAD mit allen Stromkreisen gezeichnet: von C1 bis C9 und zusätzliche, mit berechneten Kabelquerschnitten und Spannungsfall.",
        overview:
          "Komplette Elektroinstallation eines Hauses in AutoCAD: Ich habe das gesamte Gebäude in realem Maßstab vermessen, alle Stromkreise verteilt — C1 bis C9 und zusätzliche — und jeden Abschnitt mit der gesamten Mathematik berechnet: Kabelquerschnitt und Spannungsfall. Alles ist im Technischen Bericht des Projekts dokumentiert.",
        objective:
          "Die Installation von Anfang bis Ende mit eigenen Berechnungen dimensionieren: jeder Stromkreis mit dem richtigen Querschnitt und der Spannungsfall des Hauses nachgewiesen innerhalb der Grenzen — belegt statt vorausgesetzt.",
        components: [
          "Stromkreise C1 bis C9 und zusätzliche Stromkreise",
          "Haus in realem Maßstab vermessen",
          "Kabelquerschnitt für jeden Abschnitt berechnet",
          "Berechnung des Spannungsfalls der Installation",
          "Vollständiger Technischer Bericht (PDF)",
        ],
        tools: ["AutoCAD", "Vermessung im realen Maßstab", "Berechnung von Kabelquerschnitten", "Berechnung des Spannungsfalls"],
        role: "Komplette Eigenleistung: Vermessung, AutoCAD-Zeichnung, Berechnungen und Technischer Bericht.",
        process: [
          "Das gesamte Haus Raum für Raum in realem Maßstab vermessen.",
          "Die Stromkreise verteilen: C1 bis C9 und die zusätzlichen je nach Nutzung der Zone.",
          "Kabelquerschnitt und Spannungsfall jedes Abschnitts mit der gesamten Mathematik berechnen.",
          "Die Installation in AutoCAD zeichnen und den Technischen Bericht mit allen Berechnungen erstellen.",
        ],
        lessons: [
          "Ein Messfehler im realen Maßstab zieht sich durch alle Berechnungen: richtig messen ist die Grundlage.",
          "Den Spannungsfall von Hand zu berechnen zwingt zu verstehen, warum jeder Querschnitt gewählt wird.",
          "Sauber nummerierte Stromkreise machen den Bericht für jeden lesbar.",
        ],
      },      {
        slug: "panel-taller",
        category: "Montage und Verdrahtung von Panels",
        title: "Verdrahtung eines großen Werkstatt-Panels, das ein Haus simuliert",
        summary:
          "Vom Team erstellte Schaltpläne und die vollständige Verdrahtung eines Werkstatt-Panels gegen die Uhr: das Limit waren unter 10 Stunden, wir schafften es in 9.",
        overview:
          "Teamarbeit, um ein großes Panel in unserer Werkstatt zu verdrahten, das ein Haus nachbildete. Zuerst erstellten wir die nötigen Schaltpläne und verdrahteten danach nach diesen Plänen das komplette Panel im Zeitlimit: unter 10 Stunden — und wir schafften es in 9.",
        objective:
          "Ein gesamtes Panel, das ein Haus simuliert, ausgehend von eigenen Schaltplänen vollständig verdrahten — innerhalb der Zeitvorgabe (unter 10 Stunden).",
        components: [
          "Vom Team erstellte Schaltpläne",
          "Großes Werkstatt-Panel",
          "Verdrahtung des simulierten Hauses gemäß den Plänen",
          "Verdrahtungswerkzeug",
        ],
        tools: ["Eigene Schaltpläne", "Panel-Verdrahtung", "Zeitmanagement gegen die Uhr"],
        role: "Teamarbeit: Erstellen der Schaltpläne und Verdrahten des Panels, abgestimmt, um das Zeitlimit zu halten.",
        process: [
          "Erstellen der Schaltpläne für das Panel, das ein Haus simuliert.",
          "Arbeit im Team aufteilen, um ohne Behinderung voranzukommen.",
          "Verdrahten des großen Werkstatt-Panels nach den Schaltplänen.",
          "Abschließende Prüfung im Zeitlimit: unter 10 Stunden, geschafft in 9.",
        ],
        lessons: [
          "Bei einer 10-Stunden-Uhr zählt gute Arbeitsaufteilung mehr als schnelle Verdrahtung.",
          "Ein guter Schaltplan spart die Zeit, die man später zögernd vor dem Panel verliert.",
          "Die Fertigstellung in 9 Stunden zeigte, dass die Teamorganisation funktionierte.",
        ],
      },
      {
        slug: "automatizacion-plc",
        category: "Automatisierung und Steuerung",
        title: "Systeme mit einer SPS automatisieren",
        summary:
          "Programmierung einer speicherprogrammierbaren Steuerung zur Ablaufsteuerung mit Ein- und Ausgängen.",
        overview:
          "Einstiegsprojekt in die SPS-Programmierung: Ich habe Ein- und Ausgänge definiert, die Steuerlogik geschrieben und das Verhalten vor dem Test simuliert.",
        objective:
          "Erste ernsthafte Schritte in der SPS-Programmierung: Steuerlogik, Zeitsteuerung und Signalverarbeitung.",
        components: [
          "Speicherprogrammierbare Steuerung",
          "Sensoren und Endschalter",
          "Schütze der Manövrierschaltung",
          "Zustandsanzeige",
        ],
        tools: ["SPS-Programmierumgebung (Übung im Unterricht)", "Verdrahtungsplan", "Technische Dokumentation"],
        role: "Festlegung der Ein-/Ausgangstabelle, Programmierung der Logik und Tests.",
        process: [
          "Beschreibung des Prozesses und Funktionsplan der Steuerung.",
          "Zuordnung der Ein- und Ausgänge.",
          "Schrittweises Programmieren der Logik.",
          "Simulation und Einstellen der Zeitsteuerungen.",
        ],
        lessons: [
          "Die Ein-/Ausgangstabelle zuerst spart das Neuschreiben des gesamten Programms.",
          "Falsch eingestellte Zeitrelais waren der häufigste Fehler in meinen ersten Übungen.",
          "Ein gut kommentiertes Programm ist mehr wert als Gedächtnis.",
        ],
      },
    ],
  },

  experience: {
    label: "Erfahrung",
    title: "Praktische Erfahrung",
    intro:
      "Laufendes Ausbildungspraktikum im Institut Salesians de Sarria seit dem 28. September, im Rahmen meines Ausbildungsprogramms. Ich habe es noch nicht abgeschlossen und habe weiterhin keine bezahlte Berufserfahrung — ich sage das mit Stolz: Ich bin hier, um welche zu sammeln.",
    badge: "Ausbildungspraktikum · läuft",
    itemTitle: "Praktikum in Salesians de Sarria",
    context: "Institut Salesians de Sarria — schulisches Praktikum",
    period: "Seit dem 28. September · läuft",
    tasksLabel: "Ausgeführte Tätigkeiten",
    tasks: [
      "Mithilfe beim Sortieren und Organisieren von Elektromaterial",
      "Demontage und Identifikation elektrischer Komponenten",
      "Sortieren von Kabeln, Zeitrelais und Zubehör",
      "Vorbereiten der Übungsaufbauten für die nächsten Einheiten",
      "Mitarbeit bei Instandhaltungsarbeiten in der Werkstatt",
    ],
    skillsTitle: "Entwickelte Kompetenzen",
    skills: [
      "Organisation des Materials",
      "Komponentenidentifikation",
      "Sorgfältiger Umgang mit Material",
      "Teamarbeit",
      "Kenntnis der technischen Ausstattung",
    ],
  },

  softSkills: {
    label: "Profil",
    title: "Persönliche Stärken",
    intro: "Was ich einem Team neben der Technik mitbringe.",
    items: [
      { name: "Lernbereitschaft", text: "Ich komme neugierig und bleibe, um zu fragen, wie es funktioniert." },
      { name: "Anpassungsfähigkeit", text: "Wechsel bei Aufgabe, Platz oder Zeitplan ohne Fokusverlust." },
      { name: "Problemlösung", text: "Wenn etwas nicht funktioniert, suche ich die Ursache statt der Ausrede." },
      { name: "Teamarbeit", text: "Gehltes Wissen beschleunigt die ganze Gruppe." },
      { name: "Organisation und Verantwortung", text: "Ich pflege das Material, halte Termine und hinterlasse den Platz sauber." },
      { name: "Interesse an Technik", text: "Mich begeistert zu verstehen, wie ein Prozess gesteuert und automatisiert wird." },
      { name: "Weiterentwicklungsmentalität", text: "Jede Übung lässt eine Sache zurück, die ich beim nächsten Mal besser mache." },
    ],
  },

  objectives: {
    label: "Ziele",
    title: "Berufliche Ziele",
    paragraphs: [
      "Ich möchte weiter praktische Erfahrung in Elektroinstallationen sammeln, mein Wissen über Instandhaltung vertiefen und immer mehr über industrielle Automatisierung lernen.",
      "Mein Ziel ist es, Teil eines professionellen Teams zu werden, in dem ich wachsen kann, meine Energie und Arbeitsweise einbringen und mich zuverlässiger Elektriker entwickeln.",
    ],
    ctaTitle: "Sie suchen jemanden mit Lernwillen im Elektrohandwerk?",
    ctaText: "Ich bin offen für Gespräche mit Unternehmen des Branchen über Ausbildungs- und Berufsmöglichkeiten.",
    ctaButton: "Kontakt aufnehmen",
  },

  contact: {
    label: "Kontakt",
    title: "Lassen Sie uns sprechen",
    intro:
      "Ich bin offen für Ausbildungsmöglichkeiten, Praktika und erste berufliche Schritte im Elektrohandwerk.",
    finalCta: "Sie suchen jemanden mit Lernwillen, der im Elektrohandwerk wachsen möchte? Lassen Sie uns sprechen.",
    channelsTitle: "Hier finden Sie mich auch",
    channels: {
      email: "E-Mail",
      linkedin: "LinkedIn",
      cv: "Lebenslauf (PDF)",
    },
    channelPending: "Noch nicht eingerichtet",
    channelPendingHint: "Dieser Link wird aktiviert, sobald die echten Daten in die Website-Konfiguration eingetragen sind.",
    formTitle: "Schreiben Sie mir eine Nachricht",
    form: {
      name: "Name",
      namePlaceholder: "Ihr vollständiger Name",
      email: "E-Mail",
      emailPlaceholder: "sie@email.com",
      subject: "Betreff",
      subjectPlaceholder: "Anlass Ihrer Nachricht",
      message: "Nachricht",
      messagePlaceholder: "Erzählen Sie mir, welche Art von Möglichkeit Sie im Sinn haben…",
      submit: "Nachricht senden",
      sending: "Wird gesendet…",
      dataNote: "Ihre Daten werden ausschließlich zur Beantwortung verwendet.",
      successTitle: "Nachricht gesendet",
      successBody: "Danke für Ihre Nachricht. Ich antworte so schnell wie möglich.",
      sendAnother: "Weitere Nachricht senden",
      errorTitle: "Die Nachricht konnte nicht gesendet werden",
      errorBody: "Bitte versuchen Sie es in einigen Minuten erneut oder schreiben Sie mir über einen anderen Kanal.",
      errors: {
        nameRequired: "Bitte nennen Sie Ihren Namen, damit ich weiß, wer schreibt.",
        emailRequired: "Ich brauche Ihre E-Mail-Adresse, um antworten zu können.",
        emailInvalid: "Diese E-Mail-Adresse scheint ungültig zu sein. Bitte prüfen Sie sie.",
        subjectRequired: "Bitte geben Sie Ihrer Nachricht einen Betreff.",
        messageRequired: "Bitte schreiben Sie eine Nachricht, damit ich antworten kann.",
        messageTooShort: "Die Nachricht ist etwas kurz — erzählen Sie mir etwas mehr.",
        messageTooLong: "Die Nachricht ist zu lang (maximal 2000 Zeichen).",
      },
    },
  },

  footer: {
    tagline: "Berufliches Portfolio · Barcelona, Spanien",
    note: "Eine persönliche Website in ständigem Ausbau.",
    rights: "© 2026 Yovenzor Singh. Alle Rechte vorbehalten.",
    backToTop: "Nach oben",
  },

  common: {
    notFoundTitle: "Seite nicht gefunden",
    notFoundText: "Die gesuchte Seite existiert nicht oder wurde verschoben.",
    backHome: "Zurück zur Startseite",
  },
};
