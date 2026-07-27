import type { Metadata } from "next";
import { ProjectsCtaSection } from "@/components/sections/projects/projects-cta-section";
import { ProjectsHeroSection } from "@/components/sections/projects/projects-hero-section";
import { ProjectsListSection } from "@/components/sections/projects/projects-list-section";
import { getProjectsPageContent } from "@/lib/content/projects";
import type { Locale } from "@/lib/i18n/locales";
import {
  buildLocalizedMetadata,
  getPrimaryRouteMetadataTitle,
} from "@/lib/seo/metadata";

type ProjectsPageProps = Readonly<{
  params: Promise<{ locale: string }>;
}>;

export async function generateMetadata({
  params,
}: ProjectsPageProps): Promise<Metadata> {
  const { locale } = await params;
  const currentLocale = locale as Locale;
  const content = getProjectsPageContent(currentLocale);

  return buildLocalizedMetadata({
    description: content.hero.supportingCopy,
    locale: currentLocale,
    routePath: "/projects",
    title: getPrimaryRouteMetadataTitle(currentLocale, "projects"),
  });
}

export default async function ProjectsPage({ params }: ProjectsPageProps) {
  const { locale } = await params;
  const currentLocale = locale as Locale;
  const content = getProjectsPageContent(currentLocale);
  const projects = [
    content.collection.projects[0],
    content.collection.projects[1],
    content.collection.projects[2],
    content.collection.projects[3],
    content.collection.projects[4],
    content.collection.projects[5],
  ].map((project) => ({
    ...project,
    href: `/${currentLocale}/projects/${project.slug}`,
  })) as [
    (typeof content.collection.projects)[0] & { href: string },
    (typeof content.collection.projects)[1] & { href: string },
    (typeof content.collection.projects)[2] & { href: string },
    (typeof content.collection.projects)[3] & { href: string },
    (typeof content.collection.projects)[4] & { href: string },
    (typeof content.collection.projects)[5] & { href: string },
  ];

  return (
    <>
      <ProjectsHeroSection content={content.hero} />
      <ProjectsListSection
        content={{
          ...content.collection,
          projects,
        }}
      />
      <ProjectsCtaSection
        content={content.cta}
        primaryCtaHref={`/${currentLocale}/contact`}
      />
    </>
  );
}
