import { useEffect, useRef, useState, type CSSProperties, type Ref } from "react";
import { useLocation } from "react-router";
import { Check, Globe, MenuIcon, MoonStar, SunMedium, XIcon } from "lucide-react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { BrandLogo } from "@/components/BrandMark";
import { siteConfig, type SectionKey } from "@/content/site";
import { LANGUAGES, useLanguage, useT, type Locale } from "@/i18n";
import { useTheme } from "@/hooks/use-theme";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

/**
 * Sticky navigation: brand, section links with active-section indicator,
 * language selector, light/dark toggle and a mobile sheet. A thin scroll
 * progress line under the bar shows how far the visitor has travelled.
 */
export function Nav() {
  const t = useT();
  const { lang, setLang, isRTL } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const onHome = location.pathname === "/";

  const [active, setActive] = useState<string>("inicio");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  /* Reading progress across the page (only meaningful on the home page). */
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  /* Nav surface appears once the visitor leaves the top of the hero. */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Active-section indicator (only meaningful on the single-page home). */
  useEffect(() => {
    if (!onHome) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );
    for (const { id } of siteConfig.sections) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [onHome]);

  /* Close the language menu on outside click or Escape. */
  useEffect(() => {
    if (!langOpen) return;
    const onClick = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) setLangOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLangOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [langOpen]);

  const href = (id: string) => (onHome ? `#${id}` : `/#${id}`);

  /* Staggered entrance for the rows of the mobile bottom sheet. */
  const riseStyle = (i: number): CSSProperties => ({
    animationDelay: `${100 + i * 45}ms`,
  });

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          "transition-all duration-300",
          scrolled || menuOpen
            ? "border-b border-line bg-background/85 backdrop-blur-xl supports-[backdrop-filter]:bg-background/70"
            : "border-b border-transparent",
        )}
      >
        <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 md:h-[72px] lg:px-10">
          {/* Brand */}
          <a
            href={href("inicio")}
            className="group flex items-center rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-ring/60"
            aria-label={t.nav.home}
          >
            <BrandLogo height={40} />
          </a>

          {/* Section links */}
          <nav
            className="hidden items-center xl:flex"
            aria-label={t.nav.menuTitle}
          >
            {siteConfig.sections.map((section) => {
              const isActive = onHome && active === section.id;
              return (
                <a
                  key={section.id}
                  href={href(section.id)}
                  aria-current={isActive ? "true" : undefined}
                  className={cn(
                    "relative rounded-md px-3 py-2 text-[13px] tracking-tight outline-none transition-colors focus-visible:ring-2 focus-visible:ring-ring/60",
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {t.nav[section.key as SectionKey]}
                  <span
                    aria-hidden="true"
                    className={cn(
                      "absolute inset-x-3 -bottom-0.5 h-px origin-center bg-brand transition-transform duration-300",
                      isActive ? "scale-x-100" : "scale-x-0",
                    )}
                  />
                </a>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <LanguageSelector
              lang={lang}
              open={langOpen}
              setOpen={setLangOpen}
              ref={langRef}
            />

            <ThemeToggle theme={theme} onToggle={toggleTheme} label={t.nav.toggleTheme} />

            <Button
              asChild
              size="sm"
              className="hidden h-9 rounded-full bg-foreground text-background font-medium hover:bg-brand hover:text-brand-foreground md:inline-flex"
            >
              <a href={href("contacto")}>{t.nav.contact}</a>
            </Button>

            {/* Mobile trigger */}
            <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="xl:hidden"
                  aria-label={t.nav.openMenu}
                >
                  <MenuIcon className="size-5" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="bottom"
                className="gap-0 bg-surface p-0 shadow-[0_-30px_60px_-24px_rgba(0,0,0,0.45)] [&>button]:hidden"
              >
                <SheetTitle className="sr-only">{t.nav.menuTitle}</SheetTitle>
                <div className="flex min-h-0 flex-col">
                  {/* Grabber pill — the sheet affordance */}
                  <div className="flex justify-center pt-3 pb-1" aria-hidden="true">
                    <span className="h-1.5 w-10 rounded-full bg-line-strong" />
                  </div>

                  <div className="flex items-center justify-between border-b border-line px-5 py-3">
                    <BrandLogo height={34} />
                    <SheetClose asChild>
                      <button
                        type="button"
                        aria-label={t.nav.closeMenu}
                        className="flex size-9 items-center justify-center rounded-full border border-line bg-tint text-muted-foreground outline-none transition-colors hover:border-line-strong hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring/60"
                      >
                        <XIcon className="size-4" />
                      </button>
                    </SheetClose>
                  </div>

                  <nav
                    className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 pt-3 pb-[max(1.25rem,env(safe-area-inset-bottom))]"
                    aria-label={t.nav.menuTitle}
                  >
                    <ul className="space-y-1">
                      {siteConfig.sections.map((section, i) => {
                        const isActive = onHome && active === section.id;
                        return (
                          <li
                            key={section.id}
                            className="animate-[menu-rise_0.5s_ease-out_both]"
                            style={riseStyle(i)}
                          >
                            <a
                              href={href(section.id)}
                              onClick={() => setMenuOpen(false)}
                              className={cn(
                                "flex items-baseline gap-3 rounded-xl px-3 py-3 text-lg font-medium tracking-tight outline-none transition-colors focus-visible:ring-2 focus-visible:ring-ring/60",
                                isActive
                                  ? "bg-brand/10 text-brand"
                                  : "text-foreground/85 hover:bg-tint hover:text-foreground",
                              )}
                            >
                              <span className="font-mono text-[10px] text-muted-foreground">
                                {String(i + 1).padStart(2, "0")}
                              </span>
                              {t.nav[section.key as SectionKey]}
                            </a>
                          </li>
                        );
                      })}
                    </ul>

                    <div
                      className="mt-6 border-t border-line pt-5 animate-[menu-rise_0.5s_ease-out_both]"
                      style={riseStyle(siteConfig.sections.length)}
                    >
                      <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                        {t.nav.language}
                      </p>
                      <ul className="grid grid-cols-2 gap-2">
                        {LANGUAGES.map((language) => (
                          <li key={language.code}>
                            <button
                              type="button"
                              onClick={() => {
                                setLang(language.code);
                                setMenuOpen(false);
                              }}
                              aria-pressed={lang === language.code}
                              className={cn(
                                "flex w-full items-center justify-between rounded-lg border px-3 py-2.5 text-sm outline-none transition-colors focus-visible:ring-2 focus-visible:ring-ring/60",
                                lang === language.code
                                  ? "border-brand/50 bg-brand/10 text-foreground"
                                  : "border-line bg-tint text-muted-foreground hover:border-line-strong hover:text-foreground",
                              )}
                            >
                              {language.label}
                              {lang === language.code && (
                                <Check className="size-3.5 text-brand" aria-hidden="true" />
                              )}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div
                      className="mt-4 animate-[menu-rise_0.5s_ease-out_both]"
                      style={riseStyle(siteConfig.sections.length + 1)}
                    >
                      <button
                        type="button"
                        onClick={toggleTheme}
                        className="flex w-full items-center justify-between rounded-lg border border-line bg-tint px-3 py-2.5 text-sm text-muted-foreground outline-none transition-colors hover:border-line-strong hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring/60"
                      >
                        <span className="flex items-center gap-2.5">
                          {theme === "dark" ? (
                            <SunMedium className="size-4" aria-hidden="true" />
                          ) : (
                            <MoonStar className="size-4" aria-hidden="true" />
                          )}
                          {theme === "dark" ? t.nav.lightMode : t.nav.darkMode}
                        </span>
                        <span
                          aria-hidden="true"
                          className="relative inline-flex h-5 w-9 items-center rounded-full border border-line-strong bg-card"
                        >
                          <span
                            className={cn(
                              "size-3.5 rounded-full bg-brand transition-transform duration-300",
                              theme === "dark" ? "translate-x-[18px] rtl:-translate-x-[18px]" : "translate-x-[3px]",
                            )}
                          />
                        </span>
                      </button>
                    </div>

                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Reading progress line */}
        {onHome && (
          <motion.div
            aria-hidden="true"
            style={{ scaleX: progress, transformOrigin: isRTL ? "right" : "left" }}
            className="absolute inset-x-0 bottom-0 h-0.5 bg-linear-to-r from-brand via-signal to-plum"
          />
        )}
      </div>
    </header>
  );
}

/** Sun/moon toggle with a soft flip animation. */
function ThemeToggle({
  theme,
  onToggle,
  label,
}: {
  theme: "light" | "dark";
  onToggle: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={label}
      title={label}
      className="relative flex size-9 items-center justify-center rounded-full border border-line bg-tint text-muted-foreground outline-none transition-colors hover:border-line-strong hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring/60"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ y: 10, rotate: -60, opacity: 0 }}
          animate={{ y: 0, rotate: 0, opacity: 1 }}
          exit={{ y: -10, rotate: 60, opacity: 0 }}
          transition={{ duration: 0.18, ease: "easeOut" }}
          className="flex"
        >
          {theme === "dark" ? (
            <SunMedium className="size-4" aria-hidden="true" />
          ) : (
            <MoonStar className="size-4" aria-hidden="true" />
          )}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}

/** Desktop language dropdown — custom so RTL placement stays logical. */
function LanguageSelector({
  lang,
  open,
  setOpen,
  ref,
}: {
  lang: Locale;
  open: boolean;
  setOpen: (open: boolean) => void;
  ref: Ref<HTMLDivElement>;
}) {
  const t = useT();
  const { setLang } = useLanguage();
  const current = LANGUAGES.find((l) => l.code === lang);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-haspopup="true"
        aria-expanded={open}
        aria-label={`${t.nav.changeLanguage}: ${current?.label ?? lang}`}
        className="flex h-9 items-center gap-1.5 rounded-full border border-line bg-tint px-3 text-[13px] text-muted-foreground outline-none transition-colors hover:border-line-strong hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring/60"
      >
        <Globe className="size-4" aria-hidden="true" />
        <span className="hidden sm:inline">{current?.label}</span>
        <span className="font-mono text-[11px] uppercase sm:hidden">{lang}</span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: 0.16, ease: "easeOut" }}
            className="absolute end-0 top-[calc(100%+10px)] z-50 w-48 overflow-hidden rounded-xl border border-line bg-popover/95 p-1.5 shadow-xl backdrop-blur-xl"
            role="menu"
            aria-label={t.nav.language}
          >
            {LANGUAGES.map((language) => (
              <li key={language.code}>
                <button
                  type="button"
                  role="menuitemradio"
                  aria-checked={lang === language.code}
                  onClick={() => {
                    setLang(language.code);
                    setOpen(false);
                  }}
                  className={cn(
                    "flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm outline-none transition-colors focus-visible:ring-2 focus-visible:ring-ring/60",
                    lang === language.code
                      ? "bg-brand/12 text-foreground"
                      : "text-muted-foreground hover:bg-tint hover:text-foreground",
                  )}
                >
                  <span>{language.label}</span>
                  {lang === language.code && (
                    <Check className="size-3.5 text-brand" aria-hidden="true" />
                  )}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
