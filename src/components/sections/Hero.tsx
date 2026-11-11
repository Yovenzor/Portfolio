import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { HeroDiagram } from "@/components/HeroDiagram";
import { useT } from "@/i18n";
import { siteConfig } from "@/content/site";

/**
 * Hero: name, title, statement, intro, two actions and the single-line
 * diagram visual, floating on soft coral/honey color orbs. Spacious rather
 * than forced full-screen, so it never clips on short viewports or with
 * Arabic text.
 */
export function Hero() {
  const t = useT();
  const reduce = useReducedMotion();
  const artRef = useRef<HTMLDivElement>(null);

  /* Gentle parallax: the diagram drifts slower than the page. */
  const { scrollYProgress } = useScroll({
    target: artRef,
    offset: ["start end", "end start"],
  });
  const artY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  const rise = (delay: number) => ({
    initial: reduce ? { opacity: 1 } : { opacity: 0, y: 24, filter: "blur(8px)" },
    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
    transition: { duration: 0.75, delay, ease: [0.22, 0.61, 0.36, 1] as const },
  });

  return (
    <section
      id="inicio"
      className="relative scroll-mt-20 overflow-hidden pt-28 pb-16 md:scroll-mt-24 md:pt-36 md:pb-24"
      aria-label={t.nav.home}
    >
      {/* warm backdrop: grid + floating color orbs */}
      <div className="tech-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="orb orb-coral -top-24 -start-32 size-[26rem] opacity-70" aria-hidden="true" />
      <div className="orb orb-honey top-40 end-[-10rem] size-[22rem] opacity-60" aria-hidden="true" />
      <div className="orb orb-teal bottom-[-12rem] start-1/3 size-[20rem] opacity-40" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-brand/50 to-transparent"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="grid items-start gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
          {/* ── copy column ─────────────────────────────────── */}
          <div>
            {siteConfig.showAvailability && (
              <motion.p
                {...rise(0)}
                className="inline-flex items-center gap-2.5 rounded-full border border-brand/25 bg-brand/[0.07] px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-brand"
              >
                <span className="relative flex size-1.5" aria-hidden="true">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand opacity-70" />
                  <span className="relative inline-flex size-1.5 rounded-full bg-brand" />
                </span>
                {t.hero.availability}
              </motion.p>
            )}

            <motion.h1
              {...rise(0.08)}
              className="font-display mt-6 text-[2.75rem] font-medium leading-[1.04] tracking-tight text-foreground sm:text-6xl xl:text-[4.5rem]"
            >
              Yovenzor Singh
            </motion.h1>

            <motion.p
              {...rise(0.16)}
              className="mt-4 font-mono text-[11px] uppercase leading-relaxed tracking-[0.16em] text-muted-foreground sm:text-xs"
            >
              {t.hero.role.split("·")[0]?.trim()}
              <span className="mx-2 text-brand" aria-hidden="true">
                |
              </span>
              {t.hero.role.split("·")[1]?.trim()}
            </motion.p>

            <motion.p
              {...rise(0.24)}
              className="font-display mt-7 max-w-2xl text-balance text-xl font-medium leading-snug tracking-tight sm:text-2xl md:text-[1.75rem] md:leading-[1.3]"
            >
              {t.hero.headlineA}{" "}
              <span className="text-gradient-warm">{t.hero.headlineB}</span>
            </motion.p>

            <motion.p
              {...rise(0.32)}
              className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted-foreground md:text-base"
            >
              {t.hero.intro}
            </motion.p>

            <motion.div {...rise(0.4)} className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#proyectos"
                className="group inline-flex h-11 items-center gap-2 rounded-full bg-brand px-6 text-sm font-semibold text-brand-foreground shadow-lg shadow-brand/15 outline-none transition-all hover:brightness-105 focus-visible:ring-2 focus-visible:ring-ring/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                {t.hero.ctaProjects}
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="#contacto"
                className="group inline-flex h-11 items-center gap-2 rounded-full border border-line-strong bg-tint px-6 text-sm font-medium text-foreground outline-none transition-all hover:border-line-strong hover:bg-tint-strong focus-visible:ring-2 focus-visible:ring-ring/60"
              >
                {t.hero.ctaContact}
                <ArrowDownRight className="size-4 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:translate-y-0.5 group-hover:text-brand" />
              </a>
            </motion.div>

            {/* factual meta row */}
            <motion.dl
              {...rise(0.48)}
              className="mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-line pt-6"
            >
              {[
                { dt: t.education.statusLabel, dd: t.education.status.split(",")[0] },
                { dt: t.education.qualificationLabel, dd: "CFGM IEA" },
                { dt: t.education.institutionLabel, dd: t.education.institution.split(",")[0] },
              ].map((item) => (
                <div key={item.dt}>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground/70">
                    {item.dt}
                  </dt>
                  <dd className="mt-1 truncate text-sm text-foreground/90">{item.dd}</dd>
                </div>
              ))}
            </motion.dl>
          </div>

          {/* ── visual column ───────────────────────────────── */}
          {/* Top-aligned with the copy column, then nudged so the card's top
              edge lands exactly on the H1 (availability pill ≈ 30px + mt-6). */}
          <motion.div
            ref={artRef}
            className="lg:mt-[54px]"
            style={reduce ? undefined : { y: artY }}
            initial={reduce ? { opacity: 1 } : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 0.61, 0.36, 1] }}
          >
            <HeroDiagram caption={t.hero.visualCaption} />
          </motion.div>
        </div>

        {/* scroll indicator */}
        <motion.a
          {...rise(0.7)}
          href="#sobre-mi"
          className="mt-14 flex items-center gap-3 text-muted-foreground outline-none transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring/60 md:mt-16"
          aria-label={t.hero.scroll}
        >
          <span className="flex size-8 items-center justify-center rounded-full border border-line-strong">
            <motion.span
              animate={reduce ? {} : { y: [0, 4, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="block size-1 rounded-full bg-brand"
            />
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em]">
            {t.hero.scroll}
          </span>
        </motion.a>
      </div>
    </section>
  );
}
