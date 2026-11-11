import { CalendarDays, CheckCircle2, Layers } from "lucide-react";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { useT } from "@/i18n";

/**
 * Practical experience: curricular workshop activities only, labelled as
 * such — no invented employers, dates or job responsibilities.
 */
export function Experience() {
  const t = useT();

  return (
    <Section id="experiencia">
      <SectionHeading index="05" label={t.experience.label} title={t.experience.title} intro={t.experience.intro} accent="brand" />

      <Reveal delay={0.08} className="mt-10">
        <span className="inline-flex items-center gap-2 rounded-full border border-signal/35 bg-signal/[0.08] px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-signal">
          <span className="size-1.5 rounded-full bg-signal" aria-hidden="true" />
          {t.experience.badge}
        </span>
      </Reveal>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
        {/* activity card */}
        <Reveal className="rounded-2xl border border-line bg-card p-6 sm:p-7">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            {t.experience.context}
          </p>
          <h3 className="font-display mt-2 text-xl font-medium tracking-tight text-foreground sm:text-2xl">
            {t.experience.itemTitle}
          </h3>

          {/* placement period — always visible so dates stay honest */}
          <span className="mt-4 inline-flex items-center gap-2 rounded-full border border-brand/35 bg-brand/[0.08] px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-brand">
            <CalendarDays className="size-3.5" aria-hidden="true" />
            {t.experience.period}
          </span>

          <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            {t.experience.tasksLabel}
          </p>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {t.experience.tasks.map((task) => (
              <li
                key={task}
                className="flex items-start gap-2.5 rounded-xl border border-line bg-tint px-3.5 py-3 text-sm leading-snug text-foreground/90 transition-colors hover:border-brand/30"
              >
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-brand/80" aria-hidden="true" />
                {task}
              </li>
            ))}
          </ul>
        </Reveal>

        {/* skills developed */}
        <Reveal delay={0.08} className="rounded-2xl border border-line bg-card p-6 sm:p-7">
          <span className="flex size-9 items-center justify-center rounded-lg border border-line bg-tint text-muted-foreground">
            <Layers className="size-4" aria-hidden="true" />
          </span>
          <h3 className="font-display mt-4 text-lg font-medium tracking-tight text-foreground">
            {t.experience.skillsTitle}
          </h3>
          <ul className="mt-4 space-y-3">
            {t.experience.skills.map((skill, i) => (
              <li key={skill} className="flex items-center gap-3 text-sm text-foreground/85">
                <span className="font-mono text-[10px] text-brand/70">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="h-px w-4 bg-line-strong" aria-hidden="true" />
                {skill}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
