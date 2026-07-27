import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Split } from "@/components/layout/split";
import { Stack } from "@/components/layout/stack";

type ProjectOverviewContent = {
  client: string;
  deliverables: readonly [string, string, string, string, string];
  industry: string;
  services: string;
};

type ProjectOverviewLabels = {
  client: string;
  deliverables: string;
  heading: string;
  industry: string;
  services: string;
};

type ProjectOverviewSectionProps = {
  labels: ProjectOverviewLabels;
  project: ProjectOverviewContent;
};

export function ProjectOverviewSection({
  labels,
  project,
}: Readonly<ProjectOverviewSectionProps>) {
  return (
    <Section
      aria-labelledby="project-overview-heading"
      className="relative border-t border-[var(--color-border-default)] bg-[var(--color-bg-page)]"
      spacing="spacious"
    >
      <Container size="page">
        <Split gap="xl" variant="content-media">
          <Stack gap="sm">
            <p className="text-sm font-medium text-[var(--color-brand-primary)]">
              01
            </p>
            <h2
              className="max-w-3xl text-3xl font-semibold tracking-normal text-[var(--color-text-primary)] sm:text-4xl"
              id="project-overview-heading"
            >
              {labels.heading}
            </h2>
          </Stack>

          <div className="grid gap-8">
            <dl className="grid gap-5 border-l border-[var(--color-border-default)] pl-5 sm:grid-cols-3">
              <div>
                <dt className="text-sm font-medium text-[var(--color-text-primary)]">
                  {labels.client}
                </dt>
                <dd className="mt-2 text-sm leading-6 text-[var(--color-text-secondary)]">
                  {project.client}
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-[var(--color-text-primary)]">
                  {labels.industry}
                </dt>
                <dd className="mt-2 text-sm leading-6 text-[var(--color-text-secondary)]">
                  {project.industry}
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-[var(--color-text-primary)]">
                  {labels.services}
                </dt>
                <dd className="mt-2 text-sm leading-6 text-[var(--color-text-secondary)]">
                  {project.services}
                </dd>
              </div>
            </dl>

            <div className="border-t border-[var(--color-border-default)] pt-6">
              <h3 className="text-sm font-medium text-[var(--color-text-primary)]">
                {labels.deliverables}
              </h3>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {project.deliverables.map((deliverable) => (
                  <li
                    className="border-l border-[var(--color-brand-primary)] pl-4 text-sm leading-6 text-[var(--color-text-secondary)]"
                    key={deliverable}
                  >
                    {deliverable}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Split>
      </Container>
    </Section>
  );
}
