import Link from "next/link";
import { Suspense } from "react";
import { MobileMenu } from "@/components/layout/mobile-menu";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { ThemeControl } from "@/components/ui/theme-control";
import type {
  SiteBrandContent,
  SiteHeaderContent,
  SiteLanguageSwitcherContent,
  SiteThemeControlContent,
} from "@/lib/content/site";
import type { CallToActionContent } from "@/lib/content/types";
import type { Locale } from "@/lib/i18n/locales";

type HeaderNavigationItem = Readonly<{
  emphasized?: boolean;
  href: string;
  label: string;
}>;

export function SiteHeader({
  brand,
  content,
  currentLocale,
  homeHref,
  homeLink,
  languageSwitcher,
  navigationItems,
  primaryCta,
  themeControl,
}: Readonly<{
  brand: SiteBrandContent;
  content: SiteHeaderContent;
  currentLocale: Locale;
  homeHref: string;
  homeLink: CallToActionContent;
  languageSwitcher: SiteLanguageSwitcherContent;
  navigationItems: readonly HeaderNavigationItem[];
  primaryCta: CallToActionContent;
  themeControl: SiteThemeControlContent;
}>) {
  const languageFallback = (
    <span className="min-h-11 text-sm text-[var(--color-text-secondary)]">
      {languageSwitcher.label}
    </span>
  );

  return (
    <header className="border-b border-[var(--color-border-default)] bg-[var(--color-bg-page)]">
      <div className="relative mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link
          className="motion-interactive text-sm font-semibold tracking-wide text-[var(--color-text-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand-primary)] hover:text-[var(--color-text-secondary)]"
          href={homeHref}
        >
          {brand.name}
        </Link>

        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label={content.navigationLabel}
        >
          <Link
            className="motion-interactive rounded-md px-3 py-2 text-sm text-[var(--color-text-secondary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand-primary)] hover:text-[var(--color-text-primary)]"
            href={homeLink.href}
          >
            {homeLink.label}
          </Link>
          {navigationItems.map((item) => (
            <Link
              className={
                item.emphasized
                  ? "motion-interactive rounded-md px-3 py-2 text-sm font-medium text-[var(--color-text-primary)] underline decoration-[var(--color-brand-primary)] decoration-2 underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand-primary)]"
                  : "motion-interactive rounded-md px-3 py-2 text-sm text-[var(--color-text-secondary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand-primary)] hover:text-[var(--color-text-primary)]"
              }
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeControl content={themeControl} />
          <Suspense fallback={languageFallback}>
            <LanguageSwitcher
              content={languageSwitcher}
              currentLocale={currentLocale}
            />
          </Suspense>
          <Link
            className="motion-interactive inline-flex min-h-11 items-center rounded-md border border-[var(--color-brand-primary)] px-4 text-sm font-medium text-[var(--color-text-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand-primary)] motion-safe:hover:-translate-y-px"
            href={primaryCta.href}
          >
            {primaryCta.label}
          </Link>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <div className="hidden items-center gap-3 sm:flex">
            <ThemeControl content={themeControl} />
            <Suspense fallback={languageFallback}>
              <LanguageSwitcher
                content={languageSwitcher}
                currentLocale={currentLocale}
              />
            </Suspense>
          </div>
          <MobileMenu
            content={content}
            currentLocale={currentLocale}
            homeLink={homeLink}
            languageSwitcher={languageSwitcher}
            navigationItems={navigationItems}
            primaryCta={primaryCta}
            themeControl={themeControl}
          />
        </div>
      </div>
    </header>
  );
}
