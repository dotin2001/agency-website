import { EngagementSection } from "@/components/sections/services/engagement-section";
import { ServiceDisciplinesSection } from "@/components/sections/services/service-disciplines-section";
import { ServicesHeroSection } from "@/components/sections/services/services-hero-section";
import { getServicesContent } from "@/lib/content/services";
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

export default async function ServicesPage({
  params,
}: Readonly<{
  params: Promise<{ locale: string }>;
}>) {
  const { locale: localeParam } = await params;
  const locale = localeParam as Locale;
  const content = getServicesContent(locale);

  const engagementContent = {
    ...content.engagement,
    primaryCta: localizeCta(locale, content.engagement.primaryCta),
    secondaryCta: localizeCta(locale, content.engagement.secondaryCta),
  };

  return (
    <>
      <ServicesHeroSection content={content.hero} />
      <ServiceDisciplinesSection content={content.disciplines} />
      <EngagementSection content={engagementContent} />
    </>
  );
}
