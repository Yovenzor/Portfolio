import { Reveal } from "@/components/Reveal";
import type { ReactNode } from "react";

/* Static maps so Tailwind sees every class name. */
const ACCENT_TEXT = {
  brand: "text-brand",
  signal: "text-signal",
  plum: "text-plum",
  teal: "text-teal",
} as const;
const ACCENT_RULE = {
  brand: "bg-brand/40",
  signal: "bg-signal/40",
  plum: "bg-plum/40",
  teal: "bg-teal/40",
} as const;

/**
 * Shared section heading: mono index label + display title + optional intro.
 * Every band on the page uses this so hierarchy stays identical throughout.
 */
export function SectionHeading({
  index,
  label,
  title,
  intro,
  align = "start",
  accent = "brand",
  children,
}: {
  index: string;
  label: string;
  title: string;
  intro?: string;
  align?: "start" | "center";
  /** Accent hue for the index tick — rotates through the palette per section. */
  accent?: "brand" | "signal" | "plum" | "teal";
  children?: ReactNode;
}) {
  return (
    <Reveal
      as="header"
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
        <span className={ACCENT_TEXT[accent]}>{index}</span>
        <span aria-hidden="true" className={`h-px w-8 ${ACCENT_RULE[accent]}`} />
        <span>{label}</span>
      </p>
      <h2 className="font-display mt-4 text-3xl font-medium tracking-tight text-foreground text-balance sm:text-4xl md:text-[2.75rem] md:leading-[1.1]">
        {title}
      </h2>
      {intro && (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground text-balance md:text-lg">
          {intro}
        </p>
      )}
      {children}
    </Reveal>
  );
}
