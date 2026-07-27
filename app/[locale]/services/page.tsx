import { EngagementSection } from "@/components/sections/services/engagement-section";
import { ServiceDisciplinesSection } from "@/components/sections/services/service-disciplines-section";
import { ServicesHeroSection } from "@/components/sections/services/services-hero-section";

type Locale = "en" | "vi";

export default async function ServicesPage({
  params,
}: Readonly<{
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  return (
    <>
      <ServicesHeroSection locale={locale as Locale} />
      <ServiceDisciplinesSection locale={locale as Locale} />
      <EngagementSection locale={locale as Locale} />
    </>
  );
}
