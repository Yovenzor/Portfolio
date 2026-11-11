import { ArrowUp } from "lucide-react";
import { BrandLogo } from "@/components/BrandMark";
import { siteConfig } from "@/content/site";
import { useT } from "@/i18n";

/** Site footer: brand block, section links and legal line. */
export function Footer() {
  const t = useT();

  return (
    <footer className="border-t border-line bg-surface/60">
      <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-10">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          {/* brand */}
          <div className="max-w-sm">
            <a
              href="#inicio"
              className="inline-flex items-center rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-ring/60"
            >
              <BrandLogo height={38} />
            </a>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t.footer.tagline}</p>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground/70">{t.footer.note}</p>
          </div>

          {/* links */}
          <nav aria-label={t.nav.menuTitle}>
            <ul className="grid grid-cols-2 gap-x-10 gap-y-2.5 sm:grid-cols-3">
              {siteConfig.sections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="text-sm text-muted-foreground outline-none transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring/60"
                  >
                    {t.nav[section.key]}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-line pt-6 sm:flex-row sm:items-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground/70">
            {t.footer.rights}
          </p>
          <a
            href="#inicio"
            className="group inline-flex items-center gap-2 rounded-full border border-line px-3.5 py-1.5 text-xs text-muted-foreground outline-none transition-colors hover:border-line-strong hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring/60"
          >
            {t.footer.backToTop}
            <ArrowUp
              className="size-3.5 transition-transform group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
