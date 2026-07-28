import type { ProjectSlug } from "@/lib/content/projects";
import { ButtonLink } from "@/components/ui/button-link";
import { Cluster } from "@/components/layout/cluster";
import { Container } from "@/components/layout/container";
import { ViewportReveal } from "@/components/motion/viewport-reveal";
import { Section } from "@/components/layout/section";
import { Stack } from "@/components/layout/stack";
import { MediaFrame } from "@/components/ui/media-frame";
import { ProjectMockVisual } from "@/components/ui/project-mock-visual";

type ProjectNextContent = {
  industry: string;
  slug: ProjectSlug;
  summary: string;
  title: string;
};

type ProjectNextLabels = {
  allProjectsCta: string;
  heading: string;
  nextProjectCta: string;
};

type ProjectNextSectionProps = {
  allProjectsHref: string;
  labels: ProjectNextLabels;
  nextProject: ProjectNextContent;
  nextProjectHref: string;
};

export function ProjectNextSection({
  allProjectsHref,
  labels,
  nextProject,
  nextProjectHref,
}: Readonly<ProjectNextSectionProps>) {
  return (
    <Section
      aria-labelledby="project-next-heading"
      className="relative border-t border-[var(--color-border-default)] bg-[var(--color-bg-page)]"
      spacing="chapter"
    >
      <Container size="page">
        <div className="border-y border-[var(--color-border-default)] py-10 sm:py-14 lg:py-16">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,1fr)] lg:items-center">
            <ViewportReveal>
              <Stack gap="md">
                <p className="text-sm font-medium text-[var(--color-brand-primary)]">
                  06
                </p>
                <h2
                  className="max-w-3xl text-3xl font-semibold tracking-normal text-[var(--color-text-primary)] sm:text-4xl"
                  id="project-next-heading"
                >
                  {labels.heading}
                </h2>
              </Stack>
            </ViewportReveal>
            <ViewportReveal delayMs={90}>
              <div className="grid gap-6 rounded-md border border-[var(--color-border-default)] bg-[var(--color-bg-page)] p-5 sm:p-6 lg:grid-cols-[minmax(0,0.85fr)_minmax(16rem,1fr)] lg:items-center">
                <MediaFrame
                  aria-hidden="true"
                  aspectRatio="landscape"
                  className="gap-0"
                >
                  <ProjectMockVisual
                    mode="gallery"
                    projectSlug={nextProject.slug}
                  />
                </MediaFrame>
                <Stack gap="md">
                  <div className="border-l border-[var(--color-border-default)] pl-5">
                    <p className="text-sm font-medium text-[var(--color-text-secondary)]">
                      {nextProject.industry}
                    </p>
                    <p className="mt-2 text-2xl font-semibold text-[var(--color-text-primary)]">
                      {nextProject.title}
                    </p>
                    <p className="mt-3 max-w-xl text-sm leading-6 text-[var(--color-text-secondary)]">
                      {nextProject.summary}
                    </p>
                  </div>
                  <Cluster align="center" gap="sm">
                    <ButtonLink
                      href={nextProjectHref}
                      size="large"
                    >
                      {labels.nextProjectCta}
                    </ButtonLink>
                    <ButtonLink
                      href={allProjectsHref}
                      size="large"
                      variant="secondary"
                    >
                      {labels.allProjectsCta}
                    </ButtonLink>
                  </Cluster>
                </Stack>
              </div>
            </ViewportReveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}
