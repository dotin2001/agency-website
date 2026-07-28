import { Container } from "@/components/layout/container";
import { ViewportReveal } from "@/components/motion/viewport-reveal";
import { Section } from "@/components/layout/section";
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
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,1fr)]">
          <ViewportReveal>
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
          </ViewportReveal>

          <ViewportReveal
            className="grid gap-8"
            delayMs={80}
          >
            <dl className="grid gap-px overflow-hidden rounded-md border border-[var(--color-border-default)] bg-[var(--color-border-default)] sm:grid-cols-3">
              <div>
                <dt className="bg-[var(--color-bg-page)] px-5 pt-5 text-sm font-medium text-[var(--color-text-primary)] sm:px-6">
                  {labels.client}
                </dt>
                <dd className="bg-[var(--color-bg-page)] px-5 pb-5 pt-2 text-sm leading-6 text-[var(--color-text-secondary)] sm:px-6">
                  {project.client}
                </dd>
              </div>
              <div>
                <dt className="bg-[var(--color-bg-page)] px-5 pt-5 text-sm font-medium text-[var(--color-text-primary)] sm:px-6">
                  {labels.industry}
                </dt>
                <dd className="bg-[var(--color-bg-page)] px-5 pb-5 pt-2 text-sm leading-6 text-[var(--color-text-secondary)] sm:px-6">
                  {project.industry}
                </dd>
              </div>
              <div>
                <dt className="bg-[var(--color-bg-page)] px-5 pt-5 text-sm font-medium text-[var(--color-text-primary)] sm:px-6">
                  {labels.services}
                </dt>
                <dd className="bg-[var(--color-bg-page)] px-5 pb-5 pt-2 text-sm leading-6 text-[var(--color-text-secondary)] sm:px-6">
                  {project.services}
                </dd>
              </div>
            </dl>

            <div className="border-t border-[var(--color-border-default)] pt-6">
              <h3 className="text-sm font-medium text-[var(--color-text-primary)]">
                {labels.deliverables}
              </h3>
              <ul className="mt-4 grid gap-px overflow-hidden rounded-md border border-[var(--color-border-default)] bg-[var(--color-border-default)] sm:grid-cols-2">
                {project.deliverables.map((deliverable, index) => (
                  <li
                    className="flex gap-4 bg-[var(--color-bg-page)] px-5 py-4 text-sm leading-6 text-[var(--color-text-secondary)] sm:px-6"
                    key={deliverable}
                  >
                    <span className="text-sm font-medium text-[var(--color-brand-primary)]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span>{deliverable}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ViewportReveal>
        </div>
      </Container>
    </Section>
  );
}
