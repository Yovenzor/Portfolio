import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Download, FileText, XIcon, Ruler, Wrench, Package, UserRound, Target, ListChecks, BookOpen } from "lucide-react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { ProjectVisual } from "@/components/ProjectVisual";
import { useLanguage, useT } from "@/i18n";
import { projectCad, projectDocs } from "@/content/site";
import { cn } from "@/lib/utils";

/**
 * Case-study page for one project: `/projects/:slug`. All copy comes from the
 * active dictionary, so the page is fully translated and sets the page title
 * for search engines and browser tabs.
 */
export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const t = useT();
  const { setPageTitle } = useLanguage();
  const project = t.projects.items.find((item) => item.slug === slug);
  const [docOpen, setDocOpen] = useState(false);

  /* Browser tab / search title follows the project (and the language). */
  useEffect(() => {
    setPageTitle(project ? project.title : t.projects.notFoundTitle);
    return () => setPageTitle(null);
  }, [project, project?.title, t.projects.notFoundTitle, setPageTitle]);

  /* Always open case studies at the top, regardless of scroll position. */
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [slug]);

  /* In-page PDF viewer: Escape closes it and the page behind can't scroll. */
  useEffect(() => {
    if (!docOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setDocOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [docOpen]);

  const backLink = (
    <Link
      to="/#proyectos"
      className="group inline-flex items-center gap-2 rounded-full border border-line bg-tint px-4 py-2 text-sm text-muted-foreground outline-none transition-colors hover:border-line-strong hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring/60"
    >
      <ArrowLeft
        className="size-4 transition-transform group-hover:-translate-x-1 rtl:rotate-180 rtl:group-hover:translate-x-1"
        aria-hidden="true"
      />
      {t.projects.backToProjects}
    </Link>
  );

  if (!project) {
    return (
      <div className="min-h-screen bg-background">
        <Nav />
        <main className="mx-auto flex min-h-[70vh] w-full max-w-3xl flex-col items-center justify-center px-6 pt-24 text-center">
          <p className="font-mono text-sm uppercase tracking-[0.2em] text-brand">404</p>
          <h1 className="font-display mt-4 text-3xl font-medium tracking-tight text-foreground">
            {t.projects.notFoundTitle}
          </h1>
          <p className="mt-3 text-muted-foreground">{t.projects.notFoundText}</p>
          <div className="mt-8">{backLink}</div>
        </main>
        <Footer />
      </div>
    );
  }

  const st = t.projects.sectionTitles;
  const docUrl = projectDocs[project.slug];
  const cadUrl = projectCad[project.slug];
  const meta = [
    { icon: Package, label: st.components, items: project.components },
    { icon: Wrench, label: st.tools, items: project.tools },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Nav />

      <main className="pt-24 md:pt-32">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="flex flex-wrap items-center justify-between gap-4">
            {backLink}
            <span className="inline-flex items-center gap-2 rounded-full border border-signal/30 bg-signal/[0.07] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-signal">
              <span className="size-1.5 rounded-full bg-signal" aria-hidden="true" />
              {t.projects.illustrative}
            </span>
          </div>

          {/* header */}
          <Reveal as="header" className="mt-8 max-w-4xl border-b border-line pb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-brand">
              {project.category}
            </p>
            <h1 className="font-display mt-4 text-3xl font-medium leading-[1.1] tracking-tight text-foreground text-balance sm:text-4xl md:text-5xl">
              {project.title}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {project.summary}
            </p>
          </Reveal>

          {/* body */}
          <div className="grid gap-10 py-12 lg:grid-cols-[1.35fr_0.65fr] lg:gap-14">
            {/* main column */}
            <div className="space-y-10">
              <Reveal>
                <div className="flex items-center gap-3">
                  <span className="flex size-8 items-center justify-center rounded-lg border border-brand/30 bg-brand/10 text-brand">
                    <Target className="size-4" aria-hidden="true" />
                  </span>
                  <h2 className="font-display text-xl font-medium tracking-tight text-foreground">
                    {st.overview}
                  </h2>
                </div>
                <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground md:text-base">
                  {project.overview}
                </p>
                <p className="mt-4 border-s-2 border-brand/50 ps-4 text-[15px] leading-relaxed text-foreground/85">
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-brand">
                    {st.objective}
                  </span>
                  <br />
                  {project.objective}
                </p>
              </Reveal>

              <Reveal>
                <div className="flex items-center gap-3">
                  <span className="flex size-8 items-center justify-center rounded-lg border border-brand/30 bg-brand/10 text-brand">
                    <ListChecks className="size-4" aria-hidden="true" />
                  </span>
                  <h2 className="font-display text-xl font-medium tracking-tight text-foreground">
                    {st.process}
                  </h2>
                </div>
                <ol className="mt-5 space-y-3">
                  {project.process.map((step, i) => (
                    <li
                      key={i}
                      className="flex gap-4 rounded-xl border border-line bg-card px-4 py-3.5 transition-colors hover:border-line-strong"
                    >
                      <span className="font-mono text-xs text-brand/80">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-sm leading-relaxed text-foreground/85">{step}</span>
                    </li>
                  ))}
                </ol>
              </Reveal>

              <Reveal>
                <div className="flex items-center gap-3">
                  <span className="flex size-8 items-center justify-center rounded-lg border border-brand/30 bg-brand/10 text-brand">
                    <BookOpen className="size-4" aria-hidden="true" />
                  </span>
                  <h2 className="font-display text-xl font-medium tracking-tight text-foreground">
                    {st.lessons}
                  </h2>
                </div>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {project.lessons.map((lesson) => (
                    <li
                      key={lesson}
                      className="rounded-xl border border-dashed border-line-strong bg-tint px-4 py-4 text-sm leading-relaxed text-muted-foreground"
                    >
                      {lesson}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>

            {/* sidebar */}
            <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
              <Reveal>
                <ProjectVisual slug={project.slug} caption={t.projects.illustrative} />
              </Reveal>

              {meta.map((block) => (
                <Reveal key={block.label}>
                  <div className="rounded-xl border border-line bg-card p-5">
                    <h2 className="flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                      <block.icon className="size-3.5 text-brand" aria-hidden="true" />
                      {block.label}
                    </h2>
                    <ul className="mt-3.5 space-y-2">
                      {block.items.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-sm text-foreground/85">
                          <span className="mt-[7px] size-1 shrink-0 rounded-full bg-brand/70" aria-hidden="true" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}

              <Reveal>
                <div className="rounded-xl border border-line bg-card p-5">
                  <h2 className="flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                    <UserRound className="size-3.5 text-brand" aria-hidden="true" />
                    {st.role}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/85">{project.role}</p>
                </div>
              </Reveal>

              <Reveal>
                <div
                  className={cn(
                    "overflow-hidden rounded-2xl border border-dashed border-line-strong bg-tint",
                  )}
                >
                  {/* piece 1 — documentation (PDF) */}
                  <div className="flex items-start gap-3 p-5">
                    <FileText className="mt-0.5 size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
                    <div>
                        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                          {st.docs}
                        </p>
                        {docUrl ? (
                          <button
                            type="button"
                            onClick={() => setDocOpen(true)}
                            className="group/doc mt-1.5 inline-flex items-center gap-1.5 text-sm font-medium text-brand outline-none hover:underline focus-visible:ring-2 focus-visible:ring-ring/60"
                          >
                            {t.projects.viewDoc}
                            <ArrowUpRight
                              className="size-3.5 transition-transform group-hover/doc:-translate-y-0.5 group-hover/doc:translate-x-0.5"
                              aria-hidden="true"
                            />
                          </button>
                        ) : (
                          <p className="mt-1.5 text-sm text-muted-foreground/75">{t.projects.pendingDoc}</p>
                        )}
                    </div>
                  </div>
                  {/* piece 2 — the AutoCAD source, docked onto piece 1 like a puzzle piece */}
                  {cadUrl && (
                    <a
                      href={cadUrl}
                      download
                      className="group/cad flex items-center gap-3 border-t border-line bg-card px-5 py-4 outline-none transition-colors hover:bg-brand/10 focus-visible:ring-2 focus-visible:ring-ring/60"
                    >
                      <span className="flex size-8 shrink-0 items-center justify-center rounded-lg border border-brand/30 bg-brand/10 text-brand">
                        <Ruler className="size-4" aria-hidden="true" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                          AutoCAD (.dwg)
                        </span>
                        <span className="mt-1 block text-sm font-medium text-foreground/85 transition-colors group-hover/cad:text-brand">
                          {t.projects.downloadCad}
                        </span>
                      </span>
                      <Download
                        className="size-4 shrink-0 text-muted-foreground transition-all group-hover/cad:translate-y-0.5 group-hover/cad:text-brand"
                        aria-hidden="true"
                      />
                    </a>
                  )}
                </div>
              </Reveal>
            </aside>
          </div>

          {/* footer nav */}
          <div className="border-t border-line py-10">{backLink}</div>
        </div>
      </main>

      <Footer />

      {/* In-page PDF viewer — documentation reads as part of the site itself. */}
      <AnimatePresence>
        {docOpen && docUrl && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            role="dialog"
            aria-modal="true"
            aria-label={t.projects.viewDoc}
            className="fixed inset-0 z-[100] flex flex-col bg-background"
          >
            <div className="flex items-center justify-between gap-3 border-b border-line bg-surface px-4 py-3 sm:px-6">
              <span className="flex min-w-0 items-center gap-2.5">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-lg border border-brand/30 bg-brand/10 text-brand">
                  <FileText className="size-4" aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="block truncate text-sm font-medium text-foreground">
                    {project.title}
                  </span>
                  <span className="block font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                    {st.docs}
                  </span>
                </span>
              </span>
              <span className="flex shrink-0 items-center gap-2">
                <a
                  href={docUrl}
                  download
                  className="inline-flex h-9 items-center gap-2 rounded-full border border-line bg-tint px-3.5 text-[13px] font-medium text-muted-foreground outline-none transition-colors hover:border-line-strong hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring/60"
                >
                  <Download className="size-4" aria-hidden="true" />
                  <span className="hidden sm:inline">{t.projects.downloadDoc}</span>
                </a>
                <button
                  type="button"
                  autoFocus
                  onClick={() => setDocOpen(false)}
                  aria-label={t.projects.closeDoc}
                  className="flex size-9 items-center justify-center rounded-full border border-line bg-tint text-muted-foreground outline-none transition-colors hover:border-line-strong hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring/60"
                >
                  <XIcon className="size-4" />
                </button>
              </span>
            </div>
            <iframe
              src={`${docUrl}#toolbar=0&navpanes=0`}
              title={t.projects.viewDoc}
              className="min-h-0 w-full flex-1 border-0"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
