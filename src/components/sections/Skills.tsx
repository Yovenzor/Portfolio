import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { useT } from "@/i18n";
import { cn } from "@/lib/utils";
import type { SkillLevel } from "@/i18n/translations/es";

/**
 * Technical skills as developing competences: categorical cards with honest
 * proficiency labels instead of misleading percentages.
 */
export function Skills() {
  const t = useT();

  const levelStyles: Record<SkillLevel, string> = {
    "En formación": "border-brand/40 bg-brand/10 text-brand",
    "Conocimientos básicos": "border-line-strong bg-tint-strong text-foreground/75",
    Practicando: "border-signal/40 bg-signal/10 text-signal",
  };

  return (
    <Section id="competencias">
      <SectionHeading index="03" label={t.skills.label} title={t.skills.title} intro={t.skills.intro} accent="teal" />

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {t.skills.categories.map((category, categoryIndex) => (
          <Reveal
            key={category.title}
            delay={categoryIndex * 0.07}
            as="article"
            className="group flex flex-col rounded-2xl border border-line bg-card p-6 transition-all duration-300 hover:border-line-strong hover:bg-card/80"
          >
            <header className="flex items-baseline justify-between gap-3">
              <h3 className="font-display text-lg font-medium tracking-tight text-foreground">
                {category.title}
              </h3>
              <span className="font-mono text-[11px] text-brand/70">
                {String(categoryIndex + 1).padStart(2, "0")}
              </span>
            </header>
            <p className="mt-1.5 text-[13px] leading-relaxed text-muted-foreground">
              {category.description}
            </p>

            <ul className="mt-5 flex-1 space-y-3 border-t border-line pt-5">
              {category.items.map((item) => (
                <li key={item.name} className="flex items-start justify-between gap-3">
                  <span className="flex items-start gap-2.5 text-sm leading-snug text-foreground/90">
                    <span
                      className="mt-[7px] size-1.5 shrink-0 rounded-full bg-brand/70"
                      aria-hidden="true"
                    />
                    {item.name}
                  </span>
                  <span
                    className={cn(
                      "shrink-0 rounded-full border px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.08em]",
                      levelStyles[item.level as SkillLevel],
                    )}
                  >
                    {t.skills.levelLabels[item.level as SkillLevel]}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
