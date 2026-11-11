/**
 * ─────────────────────────────────────────────────────────────────────────────
 * SITE CONTENT CONFIGURATION — edit here, no rebuild of the layout needed.
 * ─────────────────────────────────────────────────────────────────────────────
 *
 * Contact links: leave a value as `null` and the site shows an honest
 * "not configured yet" state instead of a fake link. Paste the real URL or
 * address when ready and the card becomes a live link automatically.
 *
 * Bio, skills, education and projects (with all six translations) live in
 * src/i18n/translations/*.ts — one folder, one dictionary per language.
 */

export const siteConfig = {
  name: "Yovenzor Singh",
  role: "Estudiante de Instalaciones Eléctricas y Automáticas",

  /** Set to false to hide the availability label in the hero. */
  showAvailability: true,

  /**
   * Contact channels — put the real values here.
   * e.g. email: "yovenzor@example.com"
   */
  links: {
    email: "yovenzor2009@gmail.com",
    linkedin: "https://www.linkedin.com/in/yovenzor-singh-71a7463a7",
    /** CV file served from public/ — real PDF, downloads on click. */
    cv: "/assets/Curriculum.pdf",
  },

  /** Section ids used by the navigation and the scroll-spy. */
  sections: [
    { id: "inicio", key: "home" },
    { id: "sobre-mi", key: "about" },
    { id: "formacion", key: "education" },
    { id: "competencias", key: "skills" },
    { id: "proyectos", key: "projects" },
    { id: "experiencia", key: "experience" },
    { id: "contacto", key: "contact" },
  ],
} as const;

export type SectionKey = (typeof siteConfig.sections)[number]["key"];

/**
 * Project documentation PDFs served from this site's own public/ folder,
 * keyed by project slug. They open in the in-page viewer on the ficha.
 */
export const projectDocs: Record<string, string | undefined> = {
  "casa-autocad": "/assets/memoria-tecnica-instalacion.pdf",
  "panel-taller": "/assets/panel-modelo-1.pdf",
};

/**
 * Live project URLs, keyed by project slug. A project with a URL but no PDF
 * offers the link on its ficha instead of the "documentation pending" state.
 */
export const projectLinks: Record<string, string | undefined> = {
  "rebt-pro": "https://rebtpro.freebuff.app/",
};

/**
 * AutoCAD source files (.dwg) offered as a download on the project ficha,
 * keyed by project slug.
 */
export const projectCad: Record<string, string | undefined> = {
  "casa-autocad": "/assets/dibujo1-esquemas-electricos.dwg",
  "panel-taller": "/assets/panel.dwg",
};
