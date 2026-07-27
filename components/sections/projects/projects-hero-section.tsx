import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Split } from "@/components/layout/split";
import { Stack } from "@/components/layout/stack";
import type { ProjectsHeroContent } from "@/lib/content/projects";

export function ProjectsHeroSection({
  content,
}: Readonly<{ content: ProjectsHeroContent }>) {
  return (
    <Section
      aria-labelledby="projects-hero-heading"
      className="relative overflow-hidden bg-transparent"
      spacing="chapter"
    >
      <Container size="page">
        <Split
          className="lg:grid-cols-[minmax(0,0.9fr)_minmax(16rem,0.7fr)] lg:items-end"
          gap="xl"
        >
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

          <p className="border-l border-[var(--color-border-default)] bg-[var(--color-bg-page)]/90 pl-5 text-sm leading-6 text-[var(--color-text-secondary)]">
            {content.disclosure}
          </p>
        </Split>
      </Container>
    </Section>
  );
}
