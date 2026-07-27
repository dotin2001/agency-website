import { ProjectsCtaSection } from "@/components/sections/projects/projects-cta-section";
import { ProjectsHeroSection } from "@/components/sections/projects/projects-hero-section";
import { ProjectsListSection } from "@/components/sections/projects/projects-list-section";

type Locale = "en" | "vi";

export default async function ProjectsPage({
  params,
}: Readonly<{
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  return (
    <>
      <ProjectsHeroSection locale={locale as Locale} />
      <ProjectsListSection locale={locale as Locale} />
      <ProjectsCtaSection locale={locale as Locale} />
    </>
  );
}
