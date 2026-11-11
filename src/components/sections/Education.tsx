import { MapPin, GraduationCap, Activity } from "lucide-react";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { useT } from "@/i18n";

/**
 * Education: one premium card holding the current qualification, status and
 * institution — no invented dates, marks or credentials.
 */
export function Education() {
  const t = useT();

  const rows = [
    { icon: GraduationCap, label: t.education.qualificationLabel, value: t.education.qualification },
    { icon: Activity, label: t.education.statusLabel, value: t.education.status, accent: true },
    { icon: MapPin, label: t.education.institutionLabel, value: t.education.institution },
  ];

  return (
    <Section id="formacion" tone="raised">
      <SectionHeading index="02" label={t.education.label} title={t.education.title} intro={t.education.intro} accent="signal" />

      <div className="mt-12 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        {/* main card */}
        <Reveal className="rounded-2xl border border-line bg-card">
          <div className="divide-y divide-line">
            {rows.map((row) => (
              <div key={row.label} className="flex items-start gap-4 p-5 sm:p-6">
                <span
                  className={`mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg border ${
                    row.accent
                      ? "border-brand/30 bg-brand/10 text-brand"
                      : "border-line bg-tint text-muted-foreground"
                  }`}
                >
                  <row.icon className="size-4" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    {row.label}
                  </p>
                  <p
                    className={`mt-1 text-[15px] font-medium leading-snug tracking-tight sm:text-base ${
                      row.accent ? "text-brand" : "text-foreground"
                    }`}
                  >
                    {row.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* subjects */}
        <Reveal delay={0.08} className="rounded-2xl border border-line bg-card p-5 sm:p-6">
          <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            {t.education.subjectsLabel}
          </h3>
          <ul className="mt-4 space-y-2.5">
            {t.education.subjects.map((subject, i) => (
              <li key={subject} className="flex items-center gap-3 text-[15px] text-foreground/90">
                <span className="font-mono text-[10px] text-brand/70">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="h-px flex-1 bg-line" aria-hidden="true" />
                <span className="tracking-tight">{subject}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 border-t border-line pt-4 text-sm leading-relaxed text-muted-foreground">
            {t.education.description}
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
