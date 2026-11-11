import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { ProjectVisual } from "@/components/ProjectVisual";
import { ProjectSoon } from "@/components/ProjectSoon";
import { useT } from "@/i18n";

/**
 * Project gallery: case-study cards linking to dedicated detail pages.
 * Visuals are labelled illustrative schematics — never photos of real work.
 */
export function Projects() {
  const t = useT();

  return (
    <Section id="proyectos" tone="raised">
      <SectionHeading
        index="04"
        label={t.projects.label}
        title={t.projects.title}
        intro={t.projects.intro}
        accent="plum"
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {/* The PLC ficha is kept out of the gallery for now: its slot shows
            an honest coming-soon card instead (the data still exists — drop
            this filter to bring the card back). */}
        {t.projects.items
          .filter((project) => project.slug !== "automatizacion-plc")
          .map((project, index) => (
          <Reveal
            key={project.slug}
            delay={(index % 3) * 0.06}
            as="article"
            className="h-full"
          >
            <Link
              to={`/projects/${project.slug}`}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-card outline-none transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 focus-visible:ring-2 focus-visible:ring-ring/60"
            >
              <ProjectVisual
                slug={project.slug}
                caption={t.projects.illustrative}
                className="m-2 mb-0 rounded-lg border-0 [&>div]:opacity-100"
              />
              <div className="flex flex-1 flex-col p-5">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-brand">
                  {project.category}
                </p>
                <h3 className="font-display mt-2 text-[17px] font-medium leading-snug tracking-tight text-foreground transition-colors group-hover:text-brand">
                  {project.title}
                </h3>
                <p className="mt-2.5 flex-1 text-[13.5px] leading-relaxed text-muted-foreground">
                  {project.summary}
                </p>
                <span className="mt-5 flex items-center gap-2 border-t border-line pt-4 text-[13px] font-medium text-foreground/80 transition-colors group-hover:text-brand">
                  {t.projects.viewProject}
                  <ArrowRight
                    className="size-3.5 transition-transform group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5"
                    aria-hidden="true"
                  />
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
        <Reveal delay={0.12} as="article" className="h-full">
          <ProjectSoon />
        </Reveal>
      </div>
    </Section>
  );
}
