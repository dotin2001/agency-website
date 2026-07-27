export const SUPPORTED_LOCALES = ["en", "vi"] as const;

export type Locale = (typeof SUPPORTED_LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";

const supportedLocaleSet: ReadonlySet<string> = new Set(SUPPORTED_LOCALES);

export function isSupportedLocale(value: unknown): value is Locale {
  return typeof value === "string" && supportedLocaleSet.has(value);
}
