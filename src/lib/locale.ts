/**
 * Locale paths.
 *
 * Every language of the site lives at its own URL prefix (`/es`, `/en`, `/fr`,
 * `/pt`, `/de`, `/ar`) so search engines can index six real pages instead of
 * one page that switches language in the browser. Spanish is the default and
 * the language `x-default` points to.
 */

export const LOCALES = ["es", "en", "fr", "pt", "de", "ar"] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "es";

/** Canonical origin, without trailing slash. */
export const SITE_ORIGIN = "https://yovenzor.freebuff.page";

export function isLocale(value: string | null | undefined): value is Locale {
  return typeof value === "string" && (LOCALES as readonly string[]).includes(value);
}

/** The locale of a pathname, or null when the first segment is not a locale. */
export function localeFromPath(pathname: string): Locale | null {
  const segment = pathname.split("/")[1] ?? "";
  return isLocale(segment) ? segment : null;
}

/**
 * A pathname without its locale prefix:
 * "/en/projects/rebt-pro" -> "/projects/rebt-pro", "/es" -> "/".
 */
export function stripLocale(pathname: string): string {
  const lang = localeFromPath(pathname);
  if (!lang) return pathname.startsWith("/") ? pathname || "/" : `/${pathname}`;
  const rest = pathname.slice(lang.length + 1);
  if (rest === "" || rest === "/") return "/";
  return rest.startsWith("/") ? rest : `/${rest}`;
}

/** Collapse duplicate slashes and trailing slashes, but keep a lone "/". */
function normalize(path: string): string {
  const withSlash = path.startsWith("/") ? path : `/${path}`;
  const trimmed = withSlash.replace(/\/{2,}/g, "/").replace(/\/+$/, "");
  return trimmed === "" ? "/" : trimmed;
}

/** The indexable path of a page in one language: "/en", "/en/projects/x". */
export function localePath(lang: Locale, path = "/"): string {
  const rest = normalize(path);
  return rest === "/" ? `/${lang}` : `/${lang}${rest}`;
}

/** Absolute URL used for canonical, hreflang and Open Graph tags. */
export function absoluteUrl(lang: Locale, path = "/"): string {
  return `${SITE_ORIGIN}${localePath(lang, path)}`;
}
