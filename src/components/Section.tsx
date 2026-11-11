import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Every band on the page shares the same container, rhythm and anchor offset.
 */
export function Section({
  id,
  children,
  className,
  tone = "base",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  tone?: "base" | "raised";
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative scroll-mt-20 py-20 md:scroll-mt-24 md:py-28 lg:py-32",
        tone === "raised" && "border-y border-line bg-surface/60",
        className,
      )}
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10">
        {children}
      </div>
    </section>
  );
}
