import { PrivacyContentSection } from "@/components/sections/privacy/privacy-content-section";
import { PrivacyHeroSection } from "@/components/sections/privacy/privacy-hero-section";
import { getPrivacyContent } from "@/lib/content/privacy";
import type { Locale } from "@/lib/i18n/locales";

export default async function PrivacyPage({
  params,
}: Readonly<{
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  const content = getPrivacyContent(locale as Locale);

  return (
    <>
      <PrivacyHeroSection content={content.hero} />
      <PrivacyContentSection content={content.content} />
    </>
  );
}
