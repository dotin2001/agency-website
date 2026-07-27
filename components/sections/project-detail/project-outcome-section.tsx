import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Split } from "@/components/layout/split";
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
        <Split className="lg:items-center" gap="xl" variant="media-content">
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
          <div className="border-l border-[var(--color-border-default)] pl-5">
            <p className="text-lg leading-8 text-[var(--color-text-primary)]">
              {project.outcomeDirection}
            </p>
            <p className="mt-6 text-sm leading-6 text-[var(--color-text-secondary)]">
              {labels.verifiedResultsNote}
            </p>
          </div>
        </Split>
      </Container>
    </Section>
  );
}
