import {
  BookOpen,
  ClipboardCheck,
  Cpu,
  Puzzle,
  Shuffle,
  TrendingUp,
  Users,
  type LucideIcon,
} from "lucide-react";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { useT } from "@/i18n";

/** Personal competences: one simple icon per strength, credible copy. */
const ICONS: LucideIcon[] = [
  BookOpen, // ganas de aprender
  Shuffle, // adaptabilidad
  Puzzle, // resolución de problemas
  Users, // trabajo en equipo
  ClipboardCheck, // organización y responsabilidad
  Cpu, // interés por la tecnología
  TrendingUp, // mejora continua
];

export function SoftSkills() {
  const t = useT();

  return (
    <Section id="competencias-personales" tone="raised">
      <SectionHeading index="06" label={t.softSkills.label} title={t.softSkills.title} intro={t.softSkills.intro} accent="signal" />

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {t.softSkills.items.map((item, index) => {
          const Icon = ICONS[index] ?? BookOpen;
          const featured = index === 0;
          return (
            <Reveal
              key={item.name}
              delay={(index % 4) * 0.05}
              className={featured ? "sm:col-span-2" : ""}
            >
              <div className="group flex h-full flex-col rounded-2xl border border-line bg-card p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/35">
                <span
                  className={`flex size-9 items-center justify-center rounded-lg border transition-colors ${
                    featured
                      ? "border-brand/30 bg-brand/10 text-brand"
                      : "border-line bg-tint text-muted-foreground group-hover:border-brand/30 group-hover:text-brand"
                  }`}
                >
                  <Icon className="size-4" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-[15px] font-medium tracking-tight text-foreground">
                  {item.name}
                </h3>
                <p className="mt-1.5 text-[13.5px] leading-relaxed text-muted-foreground">
                  {item.text}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
