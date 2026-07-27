import type { Locale } from "@/lib/i18n/locales";

export type LocalizedContent<T> = Readonly<Record<Locale, T>>;

export type SectionIntroContent = Readonly<{
  eyebrow: string;
  headline: string;
  supportingCopy: string;
  secondaryStatement?: string;
}>;

export type ContentItem = Readonly<{
  label?: string;
  title: string;
  description: string;
}>;

export type CallToActionContent = Readonly<{
  label: string;
  href: string;
}>;
