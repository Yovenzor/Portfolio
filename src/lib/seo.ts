/**
 * Per-language search-engine and social metadata.
 *
 * Each language has its own URL (`/es`, `/en`, …), so the canonical link, the
 * `hreflang` alternates and `og:url` all point at language- and page-specific
 * URLs instead of the bare origin. Everything is updated in place when the
 * visitor switches language or opens a project — no page reload.
 */

import { DEFAULT_LOCALE, LOCALES, absoluteUrl, type Locale } from "@/lib/locale";

export interface SeoInput {
  lang: Locale;
  dir: "ltr" | "rtl";
  ogLocale: string;
  title: string;
  description: string;
  /** Locale-independent path: "/" or "/projects/rebt-pro". */
  path: string;
}

/** Open Graph locales, used when a dictionary does not provide its own. */
const OG_LOCALES: Record<Locale, string> = {
  es: "es_ES",
  en: "en_GB",
  fr: "fr_FR",
  pt: "pt_PT",
  de: "de_DE",
  ar: "ar_AR",
};

function setMeta(selector: string, attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setLink(rel: string, href: string, hreflang?: string) {
  const selector = hreflang
    ? `link[rel="${rel}"][hreflang="${hreflang}"]`
    : `link[rel="${rel}"]:not([hreflang])`;
  let el = document.head.querySelector<HTMLLinkElement>(selector);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    if (hreflang) el.setAttribute("hreflang", hreflang);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export function applySeoMetadata({
  lang,
  dir,
  ogLocale,
  title,
  description,
  path,
}: SeoInput) {
  if (typeof document === "undefined") return;

  document.documentElement.lang = lang;
  document.documentElement.dir = dir;

  document.title = title;

  const canonical = absoluteUrl(lang, path);

  setMeta('meta[name="description"]', "name", "description", description);
  setMeta('meta[property="og:title"]', "property", "og:title", title);
  setMeta('meta[property="og:description"]', "property", "og:description", description);
  setMeta('meta[property="og:locale"]', "property", "og:locale", OG_LOCALES[lang] ?? ogLocale);
  setMeta('meta[property="og:url"]', "property", "og:url", canonical);
  setMeta('meta[name="twitter:title"]', "name", "twitter:title", title);
  setMeta('meta[name="twitter:description"]', "name", "twitter:description", description);

  setLink("canonical", canonical);
  for (const code of LOCALES) {
    setLink("alternate", absoluteUrl(code, path), code);
  }
  setLink("alternate", absoluteUrl(DEFAULT_LOCALE, path), "x-default");
}
