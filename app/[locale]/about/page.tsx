import { AboutHeroSection } from "@/components/sections/about/about-hero-section";
import { PrinciplesSection } from "@/components/sections/about/principles-section";
import { ValuesSection } from "@/components/sections/about/values-section";

type Locale = "en" | "vi";

export default async function AboutPage({
  params,
}: Readonly<{
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  return (
    <>
      <AboutHeroSection locale={locale as Locale} />
      <ValuesSection locale={locale as Locale} />
      <PrinciplesSection locale={locale as Locale} />
    </>
  );
}
