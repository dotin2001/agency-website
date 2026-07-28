import type { ProjectSlug } from "@/lib/content/projects";
import { Container } from "@/components/layout/container";
import { ViewportReveal } from "@/components/motion/viewport-reveal";
import { Section } from "@/components/layout/section";
import { Stack } from "@/components/layout/stack";
import { EditorialSidecar } from "@/components/ui/editorial-sidecar";
import { MediaFrame } from "@/components/ui/media-frame";
import { ProjectMockVisual } from "@/components/ui/project-mock-visual";

type ProjectHeroContent = {
  client: string;
  industry: string;
  services: string;
  slug: ProjectSlug;
  summary: string;
  title: string;
};

type ProjectHeroLabels = {
  client: string;
  placeholderDisclosure: string;
  services: string;
};

type ProjectHeroSectionProps = {
  labels: ProjectHeroLabels;
  project: ProjectHeroContent;
};

export function ProjectHeroSection({
  labels,
  project,
}: Readonly<ProjectHeroSectionProps>) {
  return (
    <Section
      aria-labelledby="project-hero-heading"
      className="relative overflow-hidden bg-transparent"
      spacing="chapter"
    >
      <Container size="page">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(20rem,1fr)] lg:items-end">
          <Stack className="max-w-4xl" gap="md">
            <p className="w-fit border-l-2 border-[var(--color-brand-primary)] pl-3 text-sm font-medium tracking-normal text-[var(--color-text-secondary)]">
              {project.industry}
            </p>
            <h1
              className="max-w-5xl text-5xl font-semibold leading-[1.04] tracking-normal text-[var(--color-text-primary)] sm:text-6xl lg:text-7xl"
              id="project-hero-heading"
            >
              {project.title}
            </h1>
            <p className="max-w-2xl text-base leading-7 text-[var(--color-text-secondary)] sm:text-lg sm:leading-8">
              {project.summary}
            </p>
          </Stack>

          <ViewportReveal
            className="grid gap-5"
            delayMs={90}
          >
            <MediaFrame
              aria-hidden="true"
              aspectRatio="widescreen"
              className="gap-0"
            >
              <ProjectMockVisual
                aspect="widescreen"
                mode="gallery"
                projectSlug={project.slug}
              />
            </MediaFrame>

            <EditorialSidecar
              description={labels.placeholderDisclosure}
              items={[
                {
                  label: labels.client,
                  value: project.client,
                },
                {
                  label: labels.services,
                  value: project.services,
                },
              ]}
            />
          </ViewportReveal>
        </div>
      </Container>
    </Section>
  );
}
