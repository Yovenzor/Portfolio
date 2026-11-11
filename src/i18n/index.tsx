import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { es, type Dictionary } from "./translations/es";
import { en } from "./translations/en";
import { fr } from "./translations/fr";
import { pt } from "./translations/pt";
import { de } from "./translations/de";
import { ar } from "./translations/ar";
import { applySeoMetadata } from "@/lib/seo";

export type Locale = "es" | "en" | "fr" | "pt" | "de" | "ar";

export const LANGUAGES: { code: Locale; label: string; dir: "ltr" | "rtl" }[] = [
  { code: "es", label: "Español", dir: "ltr" },
  { code: "en", label: "English", dir: "ltr" },
  { code: "fr", label: "Français", dir: "ltr" },
  { code: "pt", label: "Português", dir: "ltr" },
  { code: "de", label: "Deutsch", dir: "ltr" },
  { code: "ar", label: "العربية", dir: "rtl" },
];

const DICTIONARIES: Record<Locale, Dictionary> = { es, en, fr, pt, de, ar };
const STORAGE_KEY = "ys-portfolio-lang";

function isLocale(value: string | null): value is Locale {
  return value !== null && value in DICTIONARIES;
}

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
  const [lang, setLangState] = useState<Locale>(() => {
    if (typeof window === "undefined") return "es";
    const saved = window.localStorage.getItem(STORAGE_KEY);
    return isLocale(saved) ? saved : "es";
  });
  const [pageTitle, setPageTitle] = useState<string | null>(null);

  const dir = LANGUAGES.find((l) => l.code === lang)?.dir ?? "ltr";

  const setLang = useCallback((next: Locale) => {
    setLangState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* storage unavailable — language still applies for this visit */
    }
  }, []);

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
    });
  }, [lang, dir, pageTitle, t.meta.ogLocale, t.meta.title, t.meta.description]);

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
