import { ChallengeSection } from "@/components/sections/home/challenge-section";
import { FinalCtaSection } from "@/components/sections/home/final-cta-section";
import { HeroSection } from "@/components/sections/home/hero-section";
import { SelectedProjectsSection } from "@/components/sections/home/selected-projects-section";
import { TeamSection } from "@/components/sections/home/team-section";
import { TestimonialsSection } from "@/components/sections/home/testimonials-section";
import { TransformationSection } from "@/components/sections/home/transformation-section";
import { getHomeContent } from "@/lib/content/home";
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

export default async function LocaleHomePage({
  params,
}: Readonly<{
  params: Promise<{ locale: string }>;
}>) {
  const { locale: localeParam } = await params;
  const locale = localeParam as Locale;
  const content = getHomeContent(locale);

  const heroContent = {
    ...content.hero,
    primaryCta: localizeCta(locale, content.hero.primaryCta),
    secondaryCta: localizeCta(locale, content.hero.secondaryCta),
  };

  const selectedProjectsContent = {
    ...content.selectedProjects,
    sectionCta: localizeCta(locale, content.selectedProjects.sectionCta),
    projects: content.selectedProjects.projects.map((project) => ({
      ...project,
      href: withLocale(locale, `/projects/${project.slug}`),
    })),
  };

  const teamContent = {
    ...content.team,
    sectionCta: localizeCta(locale, content.team.sectionCta),
  };

  const finalCtaContent = {
    ...content.finalCta,
    primaryCta: localizeCta(locale, content.finalCta.primaryCta),
    secondaryCta: localizeCta(locale, content.finalCta.secondaryCta),
  };

  return (
    <>
      <HeroSection content={heroContent} />
      <ChallengeSection content={content.challenge} />
      <TransformationSection content={content.transformation} />
      <SelectedProjectsSection content={selectedProjectsContent} />
      <TeamSection content={teamContent} />
      <TestimonialsSection content={content.testimonials} />
      <FinalCtaSection content={finalCtaContent} />
    </>
  );
}
