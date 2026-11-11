import { ArrowUpRight, Target } from "lucide-react";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { useT } from "@/i18n";

/** Career objectives plus a clear invitation for junior opportunities. */
export function Objectives() {
  const t = useT();

  return (
    <Section id="objetivos">
      <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
        <div>
          <SectionHeading index="07" label={t.objectives.label} title={t.objectives.title} accent="teal" />
          <Reveal delay={0.05}>
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-muted-foreground md:text-base">
              {t.objectives.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
        </div>

        {/* invitation card */}
        <Reveal delay={0.1} className="lg:self-start">
          <div className="relative overflow-hidden rounded-2xl border border-brand/25 bg-brand/[0.05] p-6 sm:p-8">
            <div className="tech-grid-fine pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />
            <span className="relative flex size-10 items-center justify-center rounded-xl border border-brand/30 bg-brand/10 text-brand">
              <Target className="size-5" aria-hidden="true" />
            </span>
            <h3 className="font-display relative mt-5 text-xl font-medium leading-snug tracking-tight text-foreground sm:text-2xl text-balance">
              {t.objectives.ctaTitle}
            </h3>
            <p className="relative mt-3 text-[15px] leading-relaxed text-muted-foreground">
              {t.objectives.ctaText}
            </p>
            <a
              href="#contacto"
              className="group relative mt-6 inline-flex h-11 items-center gap-2 rounded-full bg-brand px-6 text-sm font-semibold text-brand-foreground outline-none transition-all hover:brightness-105 focus-visible:ring-2 focus-visible:ring-ring/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              {t.objectives.ctaButton}
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
