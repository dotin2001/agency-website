import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { PersistentCanvas } from "@/components/three/persistent-canvas";
import { getSiteContent } from "@/lib/content/site";
import type { SiteNavigationItem } from "@/lib/content/site";
import type { Locale } from "@/lib/i18n/locales";
import { isSupportedLocale, SUPPORTED_LOCALES } from "@/lib/i18n/locales";
import { LanguageProvider } from "./language-provider";

export const dynamicParams = false;

export function generateStaticParams() {
  return SUPPORTED_LOCALES.map((locale) => ({ locale }));
}

function prefixLocale(locale: Locale, href: string) {
  return href === "/" ? `/${locale}` : `/${locale}${href}`;
}

function prefixNavigationItems(
  locale: Locale,
  navigationItems: readonly SiteNavigationItem[],
) {
  return navigationItems.map((item) => ({
    ...item,
    emphasized: item.href === "/projects",
    href: prefixLocale(locale, item.href),
  }));
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    notFound();
  }

  const content = getSiteContent(locale);
  const navigationItems = prefixNavigationItems(locale, content.navigation);
  const homeLink = {
    ...content.brand.homeLink,
    href: prefixLocale(locale, content.brand.homeLink.href),
  };
  const headerPrimaryCta = {
    ...content.header.primaryCta,
    href: prefixLocale(locale, content.header.primaryCta.href),
  };
  const footerLegalLinks = content.footer.legalLinks.map((item) => ({
    ...item,
    href: prefixLocale(locale, item.href),
  }));

  return (
    <LanguageProvider locale={locale}>
      <PersistentCanvas />
      <a
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-[var(--color-bg-page)] focus:px-4 focus:py-3 focus:text-[var(--color-text-primary)] focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-[var(--color-brand-primary)]"
        href="#main-content"
      >
        {content.header.skipToContentLabel}
      </a>
      <div className="relative z-10">
        <SiteHeader
          brand={content.brand}
          content={content.header}
          currentLocale={locale}
          homeHref={homeLink.href}
          homeLink={homeLink}
          languageSwitcher={content.languageSwitcher}
          navigationItems={navigationItems}
          primaryCta={headerPrimaryCta}
          themeControl={content.themeControl}
        />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <SiteFooter
          brand={content.brand}
          content={content.footer}
          homeLink={homeLink}
          legalLinks={footerLegalLinks}
          navigationItems={navigationItems}
        />
      </div>
    </LanguageProvider>
  );
}
