import { Container } from "@/components/layout/container";
import { ViewportReveal } from "@/components/motion/viewport-reveal";
import { Section } from "@/components/layout/section";
import { Stack } from "@/components/layout/stack";

type ProjectOutcomeContent = {
  outcomeDirection: string;
};

type ProjectOutcomeLabels = {
  heading: string;
  verifiedResultsNote: string;
};

type ProjectOutcomeSectionProps = {
  labels: ProjectOutcomeLabels;
  project: ProjectOutcomeContent;
};

export function ProjectOutcomeSection({
  labels,
  project,
}: Readonly<ProjectOutcomeSectionProps>) {
  return (
    <Section
      aria-labelledby="project-outcome-heading"
      className="relative border-t border-[var(--color-border-default)] bg-[var(--color-bg-section)]"
      spacing="spacious"
    >
      <Container size="page">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.45fr)_minmax(0,1fr)] lg:items-center">
          <ViewportReveal>
            <Stack gap="sm">
              <p className="text-sm font-medium text-[var(--color-brand-primary)]">
                05
              </p>
              <h2
                className="max-w-3xl text-3xl font-semibold tracking-normal text-[var(--color-text-primary)] sm:text-4xl"
                id="project-outcome-heading"
              >
                {labels.heading}
              </h2>
            </Stack>
          </ViewportReveal>
          <ViewportReveal delayMs={80}>
            <div className="grid gap-px overflow-hidden rounded-md border border-[var(--color-border-default)] bg-[var(--color-border-default)] lg:grid-cols-[minmax(0,1fr)_18rem]">
              <div className="border-l-2 border-[var(--color-brand-primary)] bg-[var(--color-bg-page)] px-5 py-6 sm:px-6 sm:py-8">
                <p className="text-lg leading-8 text-[var(--color-text-primary)]">
                  {project.outcomeDirection}
                </p>
              </div>
              <div className="bg-[var(--color-bg-page)] px-5 py-6 sm:px-6 sm:py-8">
                <p className="text-sm leading-6 text-[var(--color-text-secondary)]">
                  {labels.verifiedResultsNote}
                </p>
              </div>
            </div>
          </ViewportReveal>
        </div>
      </Container>
    </Section>
  );
}
