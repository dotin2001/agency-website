import { notFound } from "next/navigation";
import { ProjectGallerySection } from "@/components/sections/project-detail/project-gallery-section";
import { ProjectHeroSection } from "@/components/sections/project-detail/project-hero-section";
import { ProjectNextSection } from "@/components/sections/project-detail/project-next-section";
import { ProjectOutcomeSection } from "@/components/sections/project-detail/project-outcome-section";
import { ProjectOverviewSection } from "@/components/sections/project-detail/project-overview-section";
import { ProjectStorySection } from "@/components/sections/project-detail/project-story-section";
import {
  getNextProject,
  getProjectBySlug,
  supportedProjectSlugs,
  type Locale,
} from "@/lib/projects/project-placeholders";

type ProjectDetailPageProps = Readonly<{
  params: Promise<{
    locale: string;
    slug: string;
  }>;
}>;

const locales = ["en", "vi"] as const;

const storyCopy: Record<
  Locale,
  {
    approachEyebrow: string;
    approachTitle: string;
    challengeEyebrow: string;
    challengeTitle: string;
  }
> = {
  en: {
    challengeEyebrow: "The Challenge",
    challengeTitle: "Understanding the real problem",
    approachEyebrow: "The Approach",
    approachTitle: "Building one connected direction",
  },
  vi: {
    challengeEyebrow: "Thách thức",
    challengeTitle: "Hiểu đúng bài toán cốt lõi",
    approachEyebrow: "Cách tiếp cận",
    approachTitle: "Xây dựng một định hướng kết nối",
  },
};

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    supportedProjectSlugs.map((slug) => ({
      locale,
      slug,
    })),
  );
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { locale, slug } = await params;
  const currentLocale = locale as Locale;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const localizedProject = project.content[currentLocale];
  const nextProject = getNextProject(project);

  if (!nextProject) {
    notFound();
  }

  const localizedNextProject = nextProject.content[currentLocale];
  const copy = storyCopy[currentLocale];

  return (
    <>
      <ProjectHeroSection locale={currentLocale} project={localizedProject} />
      <ProjectOverviewSection
        locale={currentLocale}
        project={localizedProject}
      />
      <ProjectStorySection
        body={localizedProject.challenge}
        eyebrow={copy.challengeEyebrow}
        index={2}
        title={copy.challengeTitle}
      />
      <ProjectStorySection
        body={localizedProject.approach}
        eyebrow={copy.approachEyebrow}
        index={3}
        title={copy.approachTitle}
        tone="contrast"
      />
      <ProjectGallerySection
        locale={currentLocale}
        project={localizedProject}
      />
      <ProjectOutcomeSection
        locale={currentLocale}
        project={localizedProject}
      />
      <ProjectNextSection
        locale={currentLocale}
        nextProject={localizedNextProject}
        nextProjectSlug={nextProject.slug}
      />
    </>
  );
}
