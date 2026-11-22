import { ArrowUp, FileText, Linkedin, Mail } from "lucide-react";
import handsArt from "@/assets/hands-dark.webp";
import logoInk from "@/assets/logo-dark.png";
import logoLight from "@/assets/logo-light.png";
import { siteConfig } from "@/content/site";
import { useLanguage, useT } from "@/i18n";
import { localePath } from "@/lib/locale";

/**
 * Site footer: brand, section links and the two hands reaching toward each
 * other over the name. Colours come from the theme tokens, so the band turns
 * to warm paper in light mode and ink in dark mode; the hands drawing is the
 * same file, inverted in dark mode.
 */
export function Footer() {
  const t = useT();
  const { lang } = useLanguage();
  const sectionHref = (id: string) => `${localePath(lang)}#${id}`;
  const explore = siteConfig.sections.slice(0, 4);
  const more = siteConfig.sections.slice(4);

  const socials = [
    { href: siteConfig.links.linkedin, label: t.contact.channels.linkedin, Icon: Linkedin },
    { href: `mailto:${siteConfig.links.email}`, label: t.contact.channels.email, Icon: Mail },
    { href: siteConfig.links.cv, label: t.contact.channels.cv, Icon: FileText },
  ];

  return (
    <footer className="relative isolate overflow-hidden border-t border-line bg-surface text-foreground">
      <div className="mx-auto w-full max-w-7xl px-4 pt-14 sm:px-6 md:pt-16 lg:px-10">
        <div className="grid grid-cols-2 gap-10 lg:grid-cols-[1.6fr_1fr_1fr] lg:gap-10">
          {/* brand */}
          <div className="col-span-2 max-w-sm lg:col-span-1">
            <a
              href={sectionHref("inicio")}
              className="inline-flex rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-ring/60"
            >
              <img src={logoLight} alt={siteConfig.name} className="h-11 w-auto dark:hidden" />
              <img src={logoInk} alt={siteConfig.name} className="hidden h-11 w-auto dark:block" />
            </a>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{t.footer.tagline}</p>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground/70">
              {t.footer.note}
            </p>

            <ul className="mt-6 flex items-center gap-2">
              {socials.map(({ href, label, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    aria-label={label}
                    {...(href.startsWith("http")
                      ? { target: "_blank", rel: "noreferrer noopener" }
                      : {})}
                    className="group relative grid size-9 place-items-center rounded-lg border border-line-strong text-muted-foreground outline-none transition-colors hover:border-line-strong hover:bg-tint-strong hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring/60"
                  >
                    <Icon className="size-4" aria-hidden="true" />
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute left-1/2 top-full z-20 mt-2 -translate-x-1/2 translate-y-1 whitespace-nowrap rounded-md border border-line-strong bg-card px-2 py-1 text-[10px] leading-none font-medium tracking-wide text-foreground opacity-0 shadow-sm transition duration-150 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100"
                    >
                      {label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* explore */}
          <nav aria-label={t.footer.explore}>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground/70">
              {t.footer.explore}
            </p>
            <ul className="mt-4 space-y-2.5">
              {explore.map((section) => (
                <li key={section.id}>
                  <a
                    href={sectionHref(section.id)}
                    className="text-sm text-muted-foreground outline-none transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring/60"
                  >
                    {t.nav[section.key]}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* more */}
          <nav aria-label={t.footer.more}>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground/70">
              {t.footer.more}
            </p>
            <ul className="mt-4 space-y-2.5">
              {more.map((section) => (
                <li key={section.id}>
                  <a
                    href={sectionHref(section.id)}
                    className="text-sm text-muted-foreground outline-none transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring/60"
                  >
                    {t.nav[section.key]}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* legal */}
        <div className="mt-12 flex flex-col items-center gap-1.5 text-center sm:mt-14">
          <p className="text-xs text-muted-foreground/80">{t.footer.rights}</p>
          <p className="text-xs text-muted-foreground/50">{t.footer.tagline}</p>
          <a
            href={sectionHref("inicio")}
            className="group mt-2 inline-flex items-center gap-1.5 rounded-full border border-line-strong px-3 py-1 text-[10px] uppercase tracking-[0.14em] text-muted-foreground outline-none transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring/60"
          >
            {t.footer.backToTop}
            <ArrowUp
              className="size-3 transition-transform group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>

      {/*
        Hands + name. The same redrawn artwork is used in both themes, with
        black linework that stays readable on the paper surface and on the ink
        one. No filters, shadow or overlay.
      */}
      <div className="relative mt-8 overflow-hidden sm:mt-10">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-[0.3em] select-none whitespace-nowrap text-center font-display text-[clamp(34px,10.5vw,180px)] font-medium leading-[0.78] tracking-[-0.05em] text-foreground opacity-[0.07]"
        >
          Yovenzor Singh
        </div>
        <img
          src={handsArt}
          alt=""
          aria-hidden="true"
          className="relative block -ml-[8%] w-[116%] max-w-none select-none sm:-ml-[2%] sm:w-[104%]"
        />
      </div>
    </footer>
  );
}
