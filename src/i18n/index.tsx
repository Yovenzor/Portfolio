import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { useLocation, useNavigate } from "react-router";
import { es, type Dictionary } from "./translations/es";
import { en } from "./translations/en";
import { fr } from "./translations/fr";
import { pt } from "./translations/pt";
import { de } from "./translations/de";
import { ar } from "./translations/ar";
import { applySeoMetadata } from "@/lib/seo";
import {
  DEFAULT_LOCALE,
  localeFromPath,
  localePath,
  stripLocale,
  type Locale,
} from "@/lib/locale";

export type { Locale };

export const LANGUAGES: { code: Locale; label: string; dir: "ltr" | "rtl" }[] = [
  { code: "es", label: "Español", dir: "ltr" },
  { code: "en", label: "English", dir: "ltr" },
  { code: "fr", label: "Français", dir: "ltr" },
  { code: "pt", label: "Português", dir: "ltr" },
  { code: "de", label: "Deutsch", dir: "ltr" },
  { code: "ar", label: "العربية", dir: "rtl" },
];

const DICTIONARIES: Record<Locale, Dictionary> = { es, en, fr, pt, de, ar };

/** Deep-merge the active dictionary over Spanish so any missing key falls back. */
function mergeWithFallback(base: unknown, override: unknown): unknown {
  if (Array.isArray(base) || Array.isArray(override)) return override ?? base;
  if (typeof base !== "object" || base === null) return override ?? base;
  if (typeof override !== "object" || override === null) return base;

  const result: Record<string, unknown> = { ...(base as Record<string, unknown>) };
  for (const [key, value] of Object.entries(override as Record<string, unknown>)) {
    result[key] = mergeWithFallback(result[key], value);
  }
  return result;
}

interface LanguageContextValue {
  lang: Locale;
  dir: "ltr" | "rtl";
  isRTL: boolean;
  setLang: (lang: Locale) => void;
  t: Dictionary;
  /** Override the browser tab title for the current page (project detail). */
  setPageTitle: (title: string | null) => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [pageTitle, setPageTitle] = useState<string | null>(null);

  /* The URL is the single source of truth for the language, so each of the six
     languages is a real, indexable page. */
  const lang = localeFromPath(location.pathname) ?? DEFAULT_LOCALE;
  const path = stripLocale(location.pathname);
  const dir = LANGUAGES.find((l) => l.code === lang)?.dir ?? "ltr";

  const setLang = useCallback(
    (next: Locale) => {
      if (next === lang) return;
      navigate(`${localePath(next, path)}${location.search}${location.hash}`);
    },
    [lang, path, location.search, location.hash, navigate],
  );

  const t = useMemo(
    () => (lang === "es" ? es : mergeWithFallback(es, DICTIONARIES[lang]) as Dictionary),
    [lang],
  );

  useEffect(() => {
    applySeoMetadata({
      lang,
      dir,
      ogLocale: t.meta.ogLocale,
      title: pageTitle ? `${pageTitle} · Yovenzor Singh` : t.meta.title,
      description: t.meta.description,
      path,
    });
  }, [lang, dir, pageTitle, path, t.meta.ogLocale, t.meta.title, t.meta.description]);

  const value = useMemo(
    () => ({ lang, dir, isRTL: dir === "rtl", setLang, t, setPageTitle }),
    [lang, dir, setLang, t],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside <LanguageProvider>");
  return ctx;
}

/** Shorthand for the common case of reading translated content. */
export function useT(): Dictionary {
  return useLanguage().t;
}
