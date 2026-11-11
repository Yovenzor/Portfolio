import { motion, useReducedMotion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useT } from "@/i18n";

/**
 * Closing slot of the gallery: instead of an invented project, an honest
 * "coming soon" card. Same shell and cell sizes as the real cards so the row
 * keeps its rhythm, but the visual area is a colourful animated gradient
 * field — a slow conic sweep plus drifting coral/honey/teal orbs over the
 * blueprint grid.
 */
export function ProjectSoon() {
  const t = useT();
  const reduce = useReducedMotion();

  const orb = (delay: number) =>
    reduce
      ? {}
      : {
          animate: { x: [0, 14, -10, 0], y: [0, -10, 8, 0] },
          transition: {
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut" as const,
            delay,
          },
        };

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-dashed border-brand/40 bg-card transition-all duration-300 hover:-translate-y-1 hover:border-brand/60">
      {/* ── gradient field ──────────────────────────────────── */}
      <div className="relative m-2 mb-0 overflow-hidden rounded-lg bg-surface p-4">
        <div className="relative aspect-[400/232] w-full overflow-hidden rounded-md">
          {/* slow conic colour sweep — violet → cyan → gold → coral */}
          <div
            className={`absolute left-1/2 top-1/2 size-[170%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[conic-gradient(from_90deg,var(--plum),var(--teal),var(--signal),var(--brand),var(--plum))] opacity-45 blur-2xl ${
              reduce ? "" : "animate-spin [animation-duration:14s]"
            }`}
            aria-hidden="true"
          />
          {/* drifting orbs */}
          <motion.div
            className="orb orb-plum -left-8 -top-10 size-36 opacity-70"
            aria-hidden="true"
            {...orb(0)}
          />
          <motion.div
            className="orb orb-teal -right-6 top-6 size-28 opacity-70"
            aria-hidden="true"
            {...orb(2.5)}
          />
          <motion.div
            className="orb orb-honey -bottom-5 left-10 size-32 opacity-60"
            aria-hidden="true"
            {...orb(4.5)}
          />
          <div className="tech-grid-fine absolute inset-0 opacity-40" aria-hidden="true" />

          {/* centred badge */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-5 text-center">
            <span className="flex size-12 items-center justify-center rounded-full border border-dashed border-white/70 bg-background/40 backdrop-blur-sm">
              <Sparkles className="size-5 text-white" aria-hidden="true" />
            </span>
            <span className="bg-linear-to-r from-plum via-teal to-signal bg-clip-text font-display text-xl font-semibold tracking-tight text-transparent sm:text-2xl">
              {t.projects.comingSoonBadge}
            </span>
          </div>

          {/* corner ticks — same drawing feel as the real cards */}
          <span className="absolute left-3 top-3 size-3 border-l border-t border-white/60" aria-hidden="true" />
          <span className="absolute right-3 top-3 size-3 border-r border-t border-white/60" aria-hidden="true" />
          <span className="absolute bottom-3 left-3 size-3 border-b border-l border-white/60" aria-hidden="true" />
          <span className="absolute bottom-3 right-3 size-3 border-b border-r border-white/60" aria-hidden="true" />
        </div>
      </div>

      {/* ── text block, same rhythm as the project cards ────── */}
      <div className="flex flex-1 flex-col p-5">
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-brand">
          {t.projects.label}
        </p>
        <h3 className="font-display mt-2 text-[17px] font-medium leading-snug tracking-tight text-foreground transition-colors group-hover:text-brand">
          {t.projects.comingSoonTitle}
        </h3>
        <p className="mt-2.5 flex-1 text-[13.5px] leading-relaxed text-muted-foreground">
          {t.projects.comingSoonText}
        </p>
        <span className="mt-5 flex items-center gap-2 border-t border-line pt-4 text-[13px] font-medium text-muted-foreground">
          <span className="relative flex size-1.5" aria-hidden="true">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand opacity-70" />
            <span className="relative inline-flex size-1.5 rounded-full bg-brand" />
          </span>
          {t.projects.comingSoonFoot}
        </span>
      </div>
    </article>
  );
}
