import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n/locales";

// Temporary metadata base URL. Replace with the production origin before launch.
const TEMPORARY_METADATA_BASE_URL = "https://charm-media.example";

type PrimaryRouteKey =
  | "about"
  | "contact"
  | "home"
  | "privacy"
  | "projects"
  | "services"
  | "team";

const primaryRouteTitles = {
  en: {
    home: "Charm Media — Creative & Digital Agency",
    about: "About Charm Media",
    services: "Services",
    projects: "Projects",
    team: "Our Team",
    contact: "Contact",
    privacy: "Privacy",
  },
  vi: {
    home: "Charm Media — Agency Sáng tạo & Kỹ thuật số",
    about: "Về Charm Media",
    services: "Dịch vụ",
    projects: "Dự án",
    team: "Đội ngũ",
    contact: "Liên hệ",
    privacy: "Quyền riêng tư",
  },
} as const satisfies Readonly<Record<Locale, Record<PrimaryRouteKey, string>>>;

function localePath(locale: Locale, routePath: string) {
  return routePath === "/" ? `/${locale}` : `/${locale}${routePath}`;
}

function absoluteUrl(locale: Locale, routePath: string) {
  return new URL(
    localePath(locale, routePath),
    TEMPORARY_METADATA_BASE_URL,
  ).toString();
}

export function getPrimaryRouteMetadataTitle(
  locale: Locale,
  route: PrimaryRouteKey,
) {
  return primaryRouteTitles[locale][route];
}

export function buildLocalizedMetadata({
  description,
  locale,
  routePath,
  title,
}: Readonly<{
  description: string;
  locale: Locale;
  routePath: string;
  title: string;
}>): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: absoluteUrl(locale, routePath),
      languages: {
        en: absoluteUrl("en", routePath),
        vi: absoluteUrl("vi", routePath),
      },
    },
  };
}
