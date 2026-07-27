import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Split } from "@/components/layout/split";
import { Stack } from "@/components/layout/stack";

type ProjectHeroContent = {
  client: string;
  industry: string;
  services: string;
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
        <Split
          className="lg:grid-cols-[minmax(0,0.95fr)_minmax(18rem,0.65fr)] lg:items-end"
          gap="xl"
        >
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

          <Stack
            className="border-l border-[var(--color-border-default)] bg-[var(--color-bg-page)]/90 pl-5"
            gap="md"
          >
            <dl className="grid gap-4 text-sm">
              <div>
                <dt className="font-medium text-[var(--color-text-primary)]">
                  {labels.client}
                </dt>
                <dd className="mt-1 text-[var(--color-text-secondary)]">
                  {project.client}
                </dd>
              </div>
              <div>
                <dt className="font-medium text-[var(--color-text-primary)]">
                  {labels.services}
                </dt>
                <dd className="mt-1 text-[var(--color-text-secondary)]">
                  {project.services}
                </dd>
              </div>
            </dl>
            <p className="text-sm leading-6 text-[var(--color-text-secondary)]">
              {labels.placeholderDisclosure}
            </p>
          </Stack>
        </Split>
      </Container>
    </Section>
  );
}
