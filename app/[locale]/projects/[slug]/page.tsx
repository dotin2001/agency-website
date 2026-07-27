import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectGallerySection } from "@/components/sections/project-detail/project-gallery-section";
import { ProjectHeroSection } from "@/components/sections/project-detail/project-hero-section";
import { ProjectNextSection } from "@/components/sections/project-detail/project-next-section";
import { ProjectOutcomeSection } from "@/components/sections/project-detail/project-outcome-section";
import { ProjectOverviewSection } from "@/components/sections/project-detail/project-overview-section";
import { ProjectStorySection } from "@/components/sections/project-detail/project-story-section";
import {
  PROJECTS_CONTENT,
  PROJECT_SLUGS,
  getNextProject,
  getProjectDetail,
} from "@/lib/content/projects";
import type { Locale } from "@/lib/i18n/locales";
import { buildLocalizedMetadata } from "@/lib/seo/metadata";

type ProjectDetailPageProps = Readonly<{
  params: Promise<{
    locale: string;
    slug: string;
  }>;
}>;

const locales = ["en", "vi"] as const;

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    PROJECT_SLUGS.map((slug) => ({
      locale,
      slug,
    })),
  );
}

export async function generateMetadata({
  params,
}: ProjectDetailPageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const currentLocale = locale as Locale;
  const project = getProjectDetail(currentLocale, slug);

  if (!project) {
    notFound();
  }

  return buildLocalizedMetadata({
    description: project.summary,
    locale: currentLocale,
    routePath: `/projects/${project.slug}`,
    title: `${project.title} — Charm Media`,
  });
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { locale, slug } = await params;
  const currentLocale = locale as Locale;
  const project = getProjectDetail(currentLocale, slug);

  if (!project) {
    notFound();
  }

  const nextProject = getNextProject(currentLocale, project.slug);
  const labels = PROJECTS_CONTENT[currentLocale].projectDetail;
  const allProjectsHref = `/${currentLocale}/projects`;
  const nextProjectHref = `/${currentLocale}/projects/${nextProject.slug}`;

  return (
    <>
      <ProjectHeroSection labels={labels.hero} project={project} />
      <ProjectOverviewSection
        labels={labels.overview}
        project={project}
      />
      <ProjectStorySection
        body={project.challenge}
        eyebrow={labels.story.challengeEyebrow}
        index={2}
        title={labels.story.challengeTitle}
      />
      <ProjectStorySection
        body={project.approach}
        eyebrow={labels.story.approachEyebrow}
        index={3}
        title={labels.story.approachTitle}
        tone="contrast"
      />
      <ProjectGallerySection
        labels={labels.gallery}
        project={project}
      />
      <ProjectOutcomeSection
        labels={labels.outcome}
        project={project}
      />
      <ProjectNextSection
        allProjectsHref={allProjectsHref}
        labels={labels.next}
        nextProject={nextProject}
        nextProjectHref={nextProjectHref}
      />
    </>
  );
}
