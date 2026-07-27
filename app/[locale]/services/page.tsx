import type { Metadata } from "next";
import { EngagementSection } from "@/components/sections/services/engagement-section";
import { ServiceDisciplinesSection } from "@/components/sections/services/service-disciplines-section";
import { ServicesHeroSection } from "@/components/sections/services/services-hero-section";
import { getServicesContent } from "@/lib/content/services";
import type { CallToActionContent } from "@/lib/content/types";
import type { Locale } from "@/lib/i18n/locales";
import {
  buildLocalizedMetadata,
  getPrimaryRouteMetadataTitle,
} from "@/lib/seo/metadata";

type ServicesPageProps = Readonly<{
  params: Promise<{ locale: string }>;
}>;

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

export async function generateMetadata({
  params,
}: ServicesPageProps): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale = localeParam as Locale;
  const content = getServicesContent(locale);

  return buildLocalizedMetadata({
    description: content.hero.supportingCopy,
    locale,
    routePath: "/services",
    title: getPrimaryRouteMetadataTitle(locale, "services"),
  });
}

export default async function ServicesPage({ params }: ServicesPageProps) {
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
