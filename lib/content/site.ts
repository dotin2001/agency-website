import type { CallToActionContent, LocalizedContent } from "@/lib/content/types";
import type { Locale } from "@/lib/i18n/locales";

type SiteRouteFragment =
  | "/about"
  | "/contact"
  | "/privacy"
  | "/projects"
  | "/services"
  | "/team";

export type SiteBrandContent = Readonly<{
  homeLink: CallToActionContent;
  name: string;
}>;

export type SiteNavigationItem = Readonly<{
  href: Exclude<SiteRouteFragment, "/privacy">;
  label: string;
}>;

export type SiteHeaderContent = Readonly<{
  closeMenuLabel: string;
  mobileNavigationLabel: string;
  navigationLabel: string;
  openMenuLabel: string;
  primaryCta: CallToActionContent;
  skipToContentLabel: string;
}>;

export type SiteLanguageSwitcherContent = Readonly<{
  englishLabel: string;
  label: string;
  vietnameseLabel: string;
}>;

export type SiteThemeControlContent = Readonly<{
  darkLabel: string;
  label: string;
  lightLabel: string;
  systemLabel: string;
}>;

export type SiteFooterContent = Readonly<{
  copyrightText: string;
  legalLinks: readonly [CallToActionContent];
  mainNavigationLabel: string;
  placeholderContact: string;
  socialLabels: readonly [string, string, string];
  socialLinksLabel: string;
  statement: string;
}>;

export type SiteNotFoundContent = Readonly<{
  headline: string;
  primaryCta: CallToActionContent;
  supportingCopy: string;
}>;

export type SiteContent = Readonly<{
  brand: SiteBrandContent;
  footer: SiteFooterContent;
  header: SiteHeaderContent;
  languageSwitcher: SiteLanguageSwitcherContent;
  navigation: readonly [
    SiteNavigationItem,
    SiteNavigationItem,
    SiteNavigationItem,
    SiteNavigationItem,
    SiteNavigationItem,
  ];
  notFound: SiteNotFoundContent;
  themeControl: SiteThemeControlContent;
}>;

export const SITE_CONTENT = {
  en: {
    brand: {
      name: "CHARM MEDIA",
      homeLink: {
        label: "Home",
        href: "/",
      },
    },
    navigation: [
      { label: "About", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Projects", href: "/projects" },
      { label: "Team", href: "/team" },
      { label: "Contact", href: "/contact" },
    ],
    header: {
      navigationLabel: "Primary navigation",
      mobileNavigationLabel: "Mobile navigation",
      openMenuLabel: "Open menu",
      closeMenuLabel: "Close menu",
      skipToContentLabel: "Skip to main content",
      primaryCta: {
        label: "Start a Project",
        href: "/contact",
      },
    },
    languageSwitcher: {
      label: "Language",
      englishLabel: "English",
      vietnameseLabel: "Tiếng Việt",
    },
    themeControl: {
      label: "Theme",
      systemLabel: "System",
      lightLabel: "Light",
      darkLabel: "Dark",
    },
    footer: {
      statement: "A temporary creative and digital agency site shell.",
      mainNavigationLabel: "Footer main navigation",
      socialLinksLabel: "Social links",
      legalLinks: [
        {
          label: "Privacy",
          href: "/privacy",
        },
      ],
      placeholderContact: "hello@example.com",
      socialLabels: ["Facebook", "Instagram", "LinkedIn"],
      copyrightText: "All rights reserved.",
    },
    notFound: {
      headline: "Page not found",
      supportingCopy: "This temporary locale page is not available yet.",
      primaryCta: {
        label: "Home",
        href: "/",
      },
    },
  },
  vi: {
    brand: {
      name: "CHARM MEDIA",
      homeLink: {
        label: "Trang chủ",
        href: "/",
      },
    },
    navigation: [
      { label: "Giới thiệu", href: "/about" },
      { label: "Dịch vụ", href: "/services" },
      { label: "Dự án", href: "/projects" },
      { label: "Đội ngũ", href: "/team" },
      { label: "Liên hệ", href: "/contact" },
    ],
    header: {
      navigationLabel: "Điều hướng chính",
      mobileNavigationLabel: "Điều hướng di động",
      openMenuLabel: "Mở menu",
      closeMenuLabel: "Đóng menu",
      skipToContentLabel: "Skip to main content",
      primaryCta: {
        label: "Bắt đầu dự án",
        href: "/contact",
      },
    },
    languageSwitcher: {
      label: "Ngôn ngữ",
      englishLabel: "English",
      vietnameseLabel: "Tiếng Việt",
    },
    themeControl: {
      label: "Giao diện",
      systemLabel: "Hệ thống",
      lightLabel: "Sáng",
      darkLabel: "Tối",
    },
    footer: {
      statement: "Khung website tạm thời cho agency sáng tạo và kỹ thuật số.",
      mainNavigationLabel: "Điều hướng chính ở chân trang",
      socialLinksLabel: "Liên kết mạng xã hội",
      legalLinks: [
        {
          label: "Quyền riêng tư",
          href: "/privacy",
        },
      ],
      placeholderContact: "hello@example.com",
      socialLabels: ["Facebook", "Instagram", "LinkedIn"],
      copyrightText: "Đã đăng ký bản quyền.",
    },
    notFound: {
      headline: "Page not found",
      supportingCopy: "This temporary locale page is not available yet.",
      primaryCta: {
        label: "Trang chủ",
        href: "/",
      },
    },
  },
} as const satisfies LocalizedContent<SiteContent>;

export function getSiteContent(locale: Locale) {
  return SITE_CONTENT[locale];
}
