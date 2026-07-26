import Link from "next/link";
import { Suspense } from "react";
import { MobileMenu } from "@/components/layout/mobile-menu";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { ThemeControl } from "@/components/ui/theme-control";

type Locale = "en" | "vi";

const labels = {
  en: {
    home: "Home",
    about: "About",
    services: "Services",
    projects: "Projects",
    team: "Team",
    contact: "Contact",
    startProject: "Start a Project",
    navigation: "Primary navigation",
    language: "Language",
  },
  vi: {
    home: "Trang chủ",
    about: "Giới thiệu",
    services: "Dịch vụ",
    projects: "Dự án",
    team: "Đội ngũ",
    contact: "Liên hệ",
    startProject: "Bắt đầu dự án",
    navigation: "Điều hướng chính",
    language: "Ngôn ngữ",
  },
} as const;

function getNavigationItems(locale: Locale) {
  const copy = labels[locale];

  return [
    { href: `/${locale}`, label: copy.home },
    { href: `/${locale}/about`, label: copy.about },
    { href: `/${locale}/services`, label: copy.services },
    { href: `/${locale}/projects`, label: copy.projects, emphasized: true },
    { href: `/${locale}/team`, label: copy.team },
    { href: `/${locale}/contact`, label: copy.contact },
  ];
}

export function SiteHeader({ locale }: Readonly<{ locale: Locale }>) {
  const copy = labels[locale];
  const navigationItems = getNavigationItems(locale);
  const languageFallback = (
    <span className="min-h-11 text-sm text-[var(--color-text-secondary)]">
      {copy.language}
    </span>
  );

  return (
    <header className="border-b border-[var(--color-border-default)] bg-[var(--color-bg-page)]">
      <div className="relative mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link
          className="text-sm font-semibold tracking-wide text-[var(--color-text-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand-primary)]"
          href={`/${locale}`}
        >
          CHARM MEDIA
        </Link>

        <nav
          className="hidden items-center gap-1 md:flex"
          aria-label={copy.navigation}
        >
          {navigationItems.map((item) => (
            <Link
              className={
                item.emphasized
                  ? "rounded-md px-3 py-2 text-sm font-medium text-[var(--color-text-primary)] underline decoration-[var(--color-brand-primary)] decoration-2 underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand-primary)]"
                  : "rounded-md px-3 py-2 text-sm text-[var(--color-text-secondary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand-primary)]"
              }
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeControl locale={locale} />
          <Suspense fallback={languageFallback}>
            <LanguageSwitcher />
          </Suspense>
          <Link
            className="inline-flex min-h-11 items-center rounded-md border border-[var(--color-brand-primary)] px-4 text-sm font-medium text-[var(--color-text-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand-primary)]"
            href={`/${locale}/contact`}
          >
            {copy.startProject}
          </Link>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <div className="hidden items-center gap-3 sm:flex">
            <ThemeControl locale={locale} />
            <Suspense fallback={languageFallback}>
              <LanguageSwitcher />
            </Suspense>
          </div>
          <MobileMenu locale={locale} navigationItems={navigationItems} />
        </div>
      </div>
    </header>
  );
}
