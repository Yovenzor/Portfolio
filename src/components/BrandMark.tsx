import logoDark from "@/assets/logo-dark.png";
import logoLight from "@/assets/logo-light.png";
import { cn } from "@/lib/utils";

/**
 * Personal brand mark, drawn the way you would sketch it on a drawing board:
 * a hand-inked revision circle whose seam never quite closes, with a "Y"
 * junction inside — the right feed overshoots and crosses the trunk the way a
 * pen does, an ink blob pools at the junction and the trunk drops to a
 * terminal node. Every stroke is deliberately imperfect: bowed lines, uneven
 * weight, an overshooting loop. It reads at 30px in the nav.
 */
export function BrandMark({
  className,
  size = 36,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-xl border border-line bg-surface",
        className,
      )}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 64 64"
        width={size * 0.78}
        height={size * 0.78}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Pen loop drawn in one pass — it overshoots the touch-down and slips inward */}
        <path
          d="M34.4 7.6C46.4 7 57 17.7 57.1 31.8C57.3 46.3 46.2 57.4 31.9 57.1C17.4 56.8 6.7 45.7 7.3 31.3C7.9 18.4 19.2 7.3 36.6 9.9"
          stroke="var(--brand)"
          strokeWidth="2.6"
          strokeLinecap="round"
        />
        {/* Trunk down to the terminal node — heaviest stroke, pen pressed down */}
        <path
          d="M32.6 31.9C32.4 36.2 32.8 39.6 33.1 42.9"
          stroke="var(--brand)"
          strokeWidth="4.5"
          strokeLinecap="round"
        />
        {/* Left feed into the junction */}
        <path
          d="M22.4 16.1C25.7 21.1 29.4 26.4 32.6 31.9"
          stroke="var(--brand)"
          strokeWidth="4.3"
          strokeLinecap="round"
        />
        {/* Right feed: overshoots the junction and crosses the trunk, as a hand would */}
        <path
          d="M43.7 15.6C40.4 20.4 36.4 26.2 32.6 31.9C31.8 33.2 31.1 34.1 30.5 34.9"
          stroke="var(--signal)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Ink pooled at the junction */}
        <circle cx="32.6" cy="31.9" r="3.2" fill="var(--brand)" />
        {/* Terminal node */}
        <circle cx="33.3" cy="47.1" r="3" fill="var(--brand)" />
      </svg>
    </span>
  );
}

/**
 * The brand lockup as supplied ("YOVENZOR / singh"): near-black ink for the
 * light theme, cream ink for the dark theme. Both PNGs are cropped to the
 * artwork with the same aspect ratio, so switching themes does not shift the
 * layout — the `.dark` class on <html> picks which one shows.
 */
export function BrandLogo({
  className,
  height = 40,
  alt = "Yovenzor Singh",
}: {
  className?: string;
  height?: number;
  alt?: string;
}) {
  return (
    <span
      className={cn("inline-flex shrink-0 items-center", className)}
      style={{ height }}
    >
      <img
        src={logoLight}
        alt={alt}
        className="block h-full w-auto dark:hidden"
      />
      <img
        src={logoDark}
        alt={alt}
        className="hidden h-full w-auto dark:block"
      />
    </span>
  );
}

export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={cn("flex items-baseline gap-2", className)}>
      <span className="font-display text-[15px] font-semibold tracking-tight text-foreground">
        Yovenzor Singh
      </span>
    </span>
  );
}
