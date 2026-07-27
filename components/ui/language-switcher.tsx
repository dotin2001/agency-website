"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import type { SiteLanguageSwitcherContent } from "@/lib/content/site";
import { SUPPORTED_LOCALES, type Locale } from "@/lib/i18n/locales";

function isLocale(value: string): value is Locale {
  return SUPPORTED_LOCALES.includes(value as Locale);
}

function replaceLocaleSegment(pathname: string, nextLocale: Locale) {
  const segments = pathname.split("/");

  if (!segments[1]) {
    return `/${nextLocale}`;
  }

  segments[1] = nextLocale;
  return segments.join("/") || `/${nextLocale}`;
}

export function LanguageSwitcher({
  content,
  currentLocale,
}: Readonly<{
  content: SiteLanguageSwitcherContent;
  currentLocale: Locale;
}>) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  return (
    <label className="flex min-h-11 items-center gap-2 text-sm text-[var(--color-text-secondary)]">
      <span>{content.label}</span>
      <select
        className="min-h-10 rounded-md border border-[var(--color-border-default)] bg-[var(--color-bg-page)] px-3 text-sm text-[var(--color-text-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand-primary)]"
        value={currentLocale}
        onChange={(event) => {
          const nextLocale = event.target.value;

          if (!isLocale(nextLocale) || nextLocale === currentLocale) {
            return;
          }

          const nextPath = replaceLocaleSegment(pathname, nextLocale);
          const queryString = searchParams.toString();
          router.push(queryString ? `${nextPath}?${queryString}` : nextPath);
        }}
      >
        <option value="en">{content.englishLabel}</option>
        <option value="vi">{content.vietnameseLabel}</option>
      </select>
    </label>
  );
}
