"use client";

import Link from "next/link";
import { Suspense, useState } from "react";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { ThemeControl } from "@/components/ui/theme-control";
import type {
  SiteHeaderContent,
  SiteLanguageSwitcherContent,
  SiteThemeControlContent,
} from "@/lib/content/site";
import type { CallToActionContent } from "@/lib/content/types";
import type { Locale } from "@/lib/i18n/locales";

type NavigationItem = {
  href: string;
  label: string;
  emphasized?: boolean;
};

export function MobileMenu({
  content,
  currentLocale,
  homeLink,
  languageSwitcher,
  navigationItems,
  primaryCta,
  themeControl,
}: Readonly<{
  content: SiteHeaderContent;
  currentLocale: Locale;
  homeLink: CallToActionContent;
  languageSwitcher: SiteLanguageSwitcherContent;
  navigationItems: readonly NavigationItem[];
  primaryCta: CallToActionContent;
  themeControl: SiteThemeControlContent;
}>) {
  const [isOpen, setIsOpen] = useState(false);
  const menuId = "site-mobile-menu";
  const languageFallback = (
    <span className="min-h-11 text-sm text-[var(--color-text-secondary)]">
      {languageSwitcher.label}
    </span>
  );

  return (
    <div className="md:hidden">
      <button
        type="button"
        className="min-h-11 rounded-md border border-[var(--color-border-default)] px-3 text-sm font-medium text-[var(--color-text-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand-primary)]"
        aria-expanded={isOpen}
        aria-controls={menuId}
        onClick={() => setIsOpen((current) => !current)}
      >
        {isOpen ? content.closeMenuLabel : content.openMenuLabel}
      </button>

      {isOpen ? (
        <nav
          id={menuId}
          className="absolute left-4 right-4 top-full z-10 mt-3 rounded-md border border-[var(--color-border-default)] bg-[var(--color-bg-page)] p-4 shadow-sm"
          aria-label={content.mobileNavigationLabel}
        >
          <ul className="flex flex-col gap-2">
            <li>
              <Link
                className="block min-h-11 rounded-md px-3 py-2 text-[var(--color-text-secondary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand-primary)]"
                href={homeLink.href}
                onClick={() => setIsOpen(false)}
              >
                {homeLink.label}
              </Link>
            </li>
            {navigationItems.map((item) => (
              <li key={item.href}>
                <Link
                  className={
                    item.emphasized
                      ? "block min-h-11 rounded-md px-3 py-2 font-medium text-[var(--color-text-primary)] underline decoration-[var(--color-brand-primary)] decoration-2 underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand-primary)]"
                      : "block min-h-11 rounded-md px-3 py-2 text-[var(--color-text-secondary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand-primary)]"
                  }
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            className="mt-3 flex min-h-11 items-center justify-center rounded-md border border-[var(--color-brand-primary)] px-4 text-sm font-medium text-[var(--color-text-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand-primary)]"
            href={primaryCta.href}
            onClick={() => setIsOpen(false)}
          >
            {primaryCta.label}
          </Link>
          <div className="mt-4 grid gap-3 border-t border-[var(--color-border-default)] pt-4">
            <ThemeControl content={themeControl} />
            <Suspense fallback={languageFallback}>
              <LanguageSwitcher
                content={languageSwitcher}
                currentLocale={currentLocale}
              />
            </Suspense>
          </div>
        </nav>
      ) : null}
    </div>
  );
}
