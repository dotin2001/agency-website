import { ButtonLink } from "@/components/ui/button-link";
import { Cluster } from "@/components/layout/cluster";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Split } from "@/components/layout/split";
import { Stack } from "@/components/layout/stack";

type ProjectNextContent = {
  industry: string;
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
          <Split gap="xl" variant="content-media">
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
            <Stack gap="md">
              <div className="border-l border-[var(--color-border-default)] pl-5">
                <p className="text-sm font-medium text-[var(--color-text-secondary)]">
                  {nextProject.industry}
                </p>
                <p className="mt-2 text-2xl font-semibold text-[var(--color-text-primary)]">
                  {nextProject.title}
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
          </Split>
        </div>
      </Container>
    </Section>
  );
}
