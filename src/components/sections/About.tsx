import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { useT } from "@/i18n";

/**
 * About: biography and interests beside the owner's real
 * portrait, framed with technical-drawing corner ticks.
 */
export function About() {
  const t = useT();

  return (
    <Section id="sobre-mi">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        {/* portrait placeholder */}
        <Reveal className="order-2 lg:order-1">
          <figure className="relative mx-auto max-w-sm lg:max-w-none">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-line bg-surface">
              <div className="tech-grid-fine absolute inset-0 opacity-80" aria-hidden="true" />
              <img
                src="/assets/portrait.jpg"
                alt={t.about.portraitAlt}
                width={900}
                height={1079}
                loading="lazy"
                className="absolute inset-0 size-full object-cover object-center"
              />
              {/* faint coral wash keeps the photo inside the page palette */}
              <div
                className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,oklch(0.61_0.17_35/0.07),transparent_65%)]"
                aria-hidden="true"
              />
              {/* corner ticks — technical drawing feel */}
              <span className="absolute left-3 top-3 size-3 border-l border-t border-brand/50" aria-hidden="true" />
              <span className="absolute right-3 top-3 size-3 border-r border-t border-brand/50" aria-hidden="true" />
              <span className="absolute bottom-3 left-3 size-3 border-b border-l border-brand/50" aria-hidden="true" />
              <span className="absolute bottom-3 right-3 size-3 border-b border-r border-brand/50" aria-hidden="true" />
            </div>
            <figcaption className="mt-3 text-center font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground/70">
              {t.about.portraitAlt}
            </figcaption>
          </figure>
        </Reveal>

        {/* text */}
        <div className="order-1 lg:order-2">
          <SectionHeading index="01" label={t.about.label} title={t.about.title} accent="brand" />

          <Reveal delay={0.05}>
            <p className="font-display mt-6 text-lg leading-snug tracking-tight text-foreground/90 md:text-xl">
              {t.about.lead}
            </p>

            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-muted-foreground md:text-base">
              {t.about.paragraphs.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-9">
              <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                {t.about.interestsTitle}
              </h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {t.about.interests.map((interest) => (
                  <li
                    key={interest}
                    className="rounded-full border border-line bg-tint px-3.5 py-1.5 text-[13px] text-foreground/85 transition-colors hover:border-brand/40 hover:text-foreground"
                  >
                    {interest}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

        </div>
      </div>
    </Section>
  );
}
