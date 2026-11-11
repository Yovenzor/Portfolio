import { useT } from "@/i18n";
import { cn } from "@/lib/utils";

/**
 * Endless marquee band of the interests already listed in the About section —
 * same translated content, presented as a colorful kinetic strip. Pauses on
 * hover and is frozen (static wrap) for reduced-motion visitors.
 */
export function InterestsMarquee() {
  const t = useT();

  return (
    <div
      className="marquee relative overflow-hidden border-y border-line bg-surface/70 py-5 [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]"
      aria-label={t.about.interestsTitle}
    >
      {/* Two identical halves + translateX(-50%) = seamless loop. */}
      <div className="marquee-track flex w-max">
        <MarqueeHalf items={t.about.interests} />
        <MarqueeHalf items={t.about.interests} duplicate />
      </div>
    </div>
  );
}

function MarqueeHalf({
  items,
  duplicate,
}: {
  items: readonly string[];
  duplicate?: boolean;
}) {
  return (
    <ul
      aria-hidden={duplicate || undefined}
      className="flex shrink-0 items-center gap-8 pe-8 sm:gap-12 sm:pe-12"
    >
      {items.map((interest, i) => (
        <li key={interest} className="flex items-center gap-8 sm:gap-12">
          <span className="font-display text-lg font-medium tracking-tight text-foreground/80 sm:text-xl">
            {interest}
          </span>
          <span
            aria-hidden="true"
            className={cn("size-1.5 shrink-0 rounded-full", DOT_COLORS[i % DOT_COLORS.length])}
          />
        </li>
      ))}
    </ul>
  );
}

/* Static class list so Tailwind sees every color. */
const DOT_COLORS = ["bg-brand", "bg-signal", "bg-plum", "bg-teal"] as const;
