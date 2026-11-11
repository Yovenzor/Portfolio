/**
 * Per-language search-engine and social metadata.
 *
 * Updates <title>, description, canonical, hreflang alternates and Open Graph
 * tags in place — no page reload when the visitor changes language.
 */

export interface SeoInput {
  lang: string;
  dir: "ltr" | "rtl";
  ogLocale: string;
  title: string;
  description: string;
}

const SITE_URL = "https://yovenzor.freebuff.app/";
const LOCALES: Record<string, string> = {
  es: "es",
  en: "en",
  fr: "fr",
  pt: "pt_PT",
  de: "de_DE",
  ar: "ar",
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

export function applySeoMetadata({ lang, dir, ogLocale, title, description }: SeoInput) {
  if (typeof document === "undefined") return;

  document.documentElement.lang = lang;
  document.documentElement.dir = dir;

  document.title = title;

  setMeta('meta[name="description"]', "name", "description", description);
  setMeta('meta[property="og:title"]', "property", "og:title", title);
  setMeta('meta[property="og:description"]', "property", "og:description", description);
  setMeta('meta[property="og:locale"]', "property", "og:locale", LOCALES[lang] ?? ogLocale);
  setMeta('meta[property="og:url"]', "property", "og:url", SITE_URL);
  setMeta('meta[name="twitter:title"]', "name", "twitter:title", title);
  setMeta('meta[name="twitter:description"]', "name", "twitter:description", description);

  setLink("canonical", SITE_URL);
  for (const code of Object.keys(LOCALES)) {
    setLink("alternate", SITE_URL, code);
  }
  setLink("alternate", SITE_URL, "x-default");
}
