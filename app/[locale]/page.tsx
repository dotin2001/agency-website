import { ChallengeSection } from "@/components/sections/home/challenge-section";
import { FinalCtaSection } from "@/components/sections/home/final-cta-section";
import { HeroSection } from "@/components/sections/home/hero-section";
import { SelectedProjectsSection } from "@/components/sections/home/selected-projects-section";
import { TeamSection } from "@/components/sections/home/team-section";
import { TestimonialsSection } from "@/components/sections/home/testimonials-section";
import { TransformationSection } from "@/components/sections/home/transformation-section";

type Locale = "en" | "vi";

export default async function LocaleHomePage({
  params,
}: Readonly<{
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  return (
    <>
      <HeroSection locale={locale as Locale} />
      <ChallengeSection locale={locale as Locale} />
      <TransformationSection locale={locale as Locale} />
      <SelectedProjectsSection locale={locale as Locale} />
      <TeamSection locale={locale as Locale} />
      <TestimonialsSection locale={locale as Locale} />
      <FinalCtaSection locale={locale as Locale} />
    </>
  );
}
