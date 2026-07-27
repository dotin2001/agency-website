import { ChallengeSection } from "@/components/sections/home/challenge-section";
import { HeroSection } from "@/components/sections/home/hero-section";

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
    </>
  );
}
