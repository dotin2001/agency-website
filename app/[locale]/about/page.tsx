import { AboutHeroSection } from "@/components/sections/about/about-hero-section";
import { PrinciplesSection } from "@/components/sections/about/principles-section";
import { ValuesSection } from "@/components/sections/about/values-section";
import { getAboutContent } from "@/lib/content/about";
import type { CallToActionContent } from "@/lib/content/types";
import type { Locale } from "@/lib/i18n/locales";

function withLocale(locale: Locale, href: string) {
  const path = href.startsWith("/") ? href : `/${href}`;

  return `/${locale}${path}`;
}

function localizeCta(
  locale: Locale,
  cta: CallToActionContent,
): CallToActionContent {
  return {
    ...cta,
    href: withLocale(locale, cta.href),
  };
}

export default async function AboutPage({
  params,
}: Readonly<{
  params: Promise<{ locale: string }>;
}>) {
  const { locale: localeParam } = await params;
  const locale = localeParam as Locale;
  const content = getAboutContent(locale);

  const principlesContent = {
    ...content.principles,
    primaryCta: localizeCta(locale, content.principles.primaryCta),
  };

  return (
    <>
      <AboutHeroSection content={content.hero} />
      <ValuesSection content={content.values} />
      <PrinciplesSection content={principlesContent} />
    </>
  );
}
