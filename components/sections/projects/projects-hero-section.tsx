import { Container } from "@/components/layout/container";
import { Stack } from "@/components/layout/stack";
import { MediaFrame } from "@/components/ui/media-frame";
import { ProjectMockVisual } from "@/components/ui/project-mock-visual";
import { Section } from "@/components/layout/section";
import type {
  ProjectSlug,
  ProjectsHeroContent,
} from "@/lib/content/projects";

type ProjectsHeroSectionProps = Readonly<{
  content: ProjectsHeroContent;
  previewProjects: readonly [ProjectSlug, ProjectSlug, ProjectSlug];
}>;

export function ProjectsHeroSection({
  content,
  previewProjects,
}: ProjectsHeroSectionProps) {
  return (
    <Section
      aria-labelledby="projects-hero-heading"
      className="relative overflow-hidden bg-transparent"
      spacing="chapter"
    >
      <Container size="page">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.82fr)_minmax(18rem,1fr)] lg:items-end">
          <Stack className="max-w-4xl" gap="md">
            <p className="w-fit border-l-2 border-[var(--color-brand-primary)] pl-3 text-sm font-medium tracking-normal text-[var(--color-text-secondary)]">
              {content.eyebrow}
            </p>
            <h1
              className="max-w-5xl text-5xl font-semibold leading-[1.04] tracking-normal text-[var(--color-text-primary)] sm:text-6xl lg:text-7xl"
              id="projects-hero-heading"
            >
              {content.headline}
            </h1>
            <p className="max-w-2xl text-base leading-7 text-[var(--color-text-secondary)] sm:text-lg sm:leading-8">
              {content.supportingCopy}
            </p>
          </Stack>

          <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(10rem,0.7fr)]">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <MediaFrame
                aria-hidden="true"
                aspectRatio="landscape"
                className="gap-0"
              >
                <ProjectMockVisual mode="card" projectSlug={previewProjects[0]} />
              </MediaFrame>
              <div className="grid gap-4 lg:grid-cols-2">
                <MediaFrame
                  aria-hidden="true"
                  aspectRatio="portrait"
                  className="gap-0"
                >
                  <ProjectMockVisual mode="card" projectSlug={previewProjects[1]} />
                </MediaFrame>
                <MediaFrame
                  aria-hidden="true"
                  aspectRatio="portrait"
                  className="gap-0"
                >
                  <ProjectMockVisual mode="card" projectSlug={previewProjects[2]} />
                </MediaFrame>
              </div>
            </div>

            <p className="border-l border-[var(--color-border-default)] pl-5 text-sm leading-6 text-[var(--color-text-secondary)]">
              {content.disclosure}
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
