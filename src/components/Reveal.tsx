import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Scroll reveal with a few moods: the default fade-and-lift, a softer blur-in
 * for cards and hero art, and a gentle scale for chips. All of them respect
 * `prefers-reduced-motion`.
 */
export function Reveal({
  children,
  delay = 0,
  y = 20,
  className,
  as = "div",
  variant = "rise",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "section" | "li" | "article" | "header" | "figure";
  variant?: "rise" | "blur" | "scale";
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as];

  const hidden = reduce
    ? { opacity: 1 }
    : variant === "blur"
      ? { opacity: 0, y: y * 0.6, filter: "blur(10px)" }
      : variant === "scale"
        ? { opacity: 0, scale: 0.92 }
        : { opacity: 0, y };

  const shown = reduce
    ? { opacity: 1 }
    : variant === "blur"
      ? { opacity: 1, y: 0, filter: "blur(0px)" }
      : variant === "scale"
        ? { opacity: 1, scale: 1 }
        : { opacity: 1, y: 0 };

  return (
    <MotionTag
      className={className}
      initial={hidden}
      whileInView={shown}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 0.61, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
}
