"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useLanguage } from "@/app/[locale]/language-provider";

type Locale = "en" | "vi";

const labels = {
  en: {
    language: "Language",
  },
  vi: {
    language: "Ngôn ngữ",
  },
} as const;

function isLocale(value: string): value is Locale {
  return value === "en" || value === "vi";
}

function replaceLocaleSegment(pathname: string, nextLocale: Locale) {
  const segments = pathname.split("/");

  if (!segments[1]) {
    return `/${nextLocale}`;
  }

  segments[1] = nextLocale;
  return segments.join("/") || `/${nextLocale}`;
}

export function LanguageSwitcher() {
  const { locale } = useLanguage();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const copy = labels[locale];

  return (
    <label className="flex min-h-11 items-center gap-2 text-sm text-[var(--color-text-secondary)]">
      <span>{copy.language}</span>
      <select
        className="min-h-10 rounded-md border border-[var(--color-border-default)] bg-[var(--color-bg-page)] px-3 text-sm text-[var(--color-text-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand-primary)]"
        value={locale}
        onChange={(event) => {
          const nextLocale = event.target.value;

          if (!isLocale(nextLocale) || nextLocale === locale) {
            return;
          }

          const nextPath = replaceLocaleSegment(pathname, nextLocale);
          const queryString = searchParams.toString();
          router.push(queryString ? `${nextPath}?${queryString}` : nextPath);
        }}
      >
        <option value="en">English</option>
        <option value="vi">Tiếng Việt</option>
      </select>
    </label>
  );
}
