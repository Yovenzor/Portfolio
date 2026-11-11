import { motion } from "framer-motion";
import { Link } from "react-router";
import { useT } from "@/i18n";

export default function NotFound() {
  const t = useT();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex min-h-screen flex-col items-center justify-center bg-background px-6 text-center"
    >
      <div className="tech-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="relative">
        <p className="font-mono text-sm uppercase tracking-[0.3em] text-brand">404</p>
        <h1 className="font-display mt-4 text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
          {t.common.notFoundTitle}
        </h1>
        <p className="mt-3 max-w-md text-muted-foreground">{t.common.notFoundText}</p>
        <Link
          to="/"
          className="mt-8 inline-flex h-11 items-center gap-2 rounded-full bg-brand px-6 text-sm font-semibold text-brand-foreground outline-none transition-all hover:brightness-105 focus-visible:ring-2 focus-visible:ring-ring/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          {t.common.backHome}
        </Link>
      </div>
    </motion.div>
  );
}
