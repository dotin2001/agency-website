import { PrivacyContentSection } from "@/components/sections/privacy/privacy-content-section";
import { PrivacyHeroSection } from "@/components/sections/privacy/privacy-hero-section";

type Locale = "en" | "vi";

export default async function PrivacyPage({
  params,
}: Readonly<{
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  return (
    <>
      <PrivacyHeroSection locale={locale as Locale} />
      <PrivacyContentSection locale={locale as Locale} />
    </>
  );
}
