import type { Metadata } from "next";
import { PrivacyContentSection } from "@/components/sections/privacy/privacy-content-section";
import { PrivacyHeroSection } from "@/components/sections/privacy/privacy-hero-section";
import { getPrivacyContent } from "@/lib/content/privacy";
import type { Locale } from "@/lib/i18n/locales";
import {
  buildLocalizedMetadata,
  getPrimaryRouteMetadataTitle,
} from "@/lib/seo/metadata";

type PrivacyPageProps = Readonly<{
  params: Promise<{ locale: string }>;
}>;

export async function generateMetadata({
  params,
}: PrivacyPageProps): Promise<Metadata> {
  const { locale } = await params;
  const currentLocale = locale as Locale;
  const content = getPrivacyContent(currentLocale);

  return buildLocalizedMetadata({
    description: content.hero.supportingCopy,
    locale: currentLocale,
    routePath: "/privacy",
    title: getPrimaryRouteMetadataTitle(currentLocale, "privacy"),
  });
}

export default async function PrivacyPage({ params }: PrivacyPageProps) {
  const { locale } = await params;
  const content = getPrivacyContent(locale as Locale);

  return (
    <>
      <PrivacyHeroSection content={content.hero} />
      <PrivacyContentSection content={content.content} />
    </>
  );
}
