import { Cluster } from "@/components/layout/cluster";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Split } from "@/components/layout/split";
import { Stack } from "@/components/layout/stack";
import { SectionHeader } from "@/components/ui/section-header";
import type { HomeTransformationContent } from "@/lib/content/home";

function formatStep(index: number) {
  return String(index + 1).padStart(2, "0");
}

export function TransformationSection({
  content,
}: Readonly<{ content: HomeTransformationContent }>) {
  return (
    <Section
      aria-labelledby="home-transformation-heading"
      className="relative border-t border-[var(--color-border-default)] bg-[var(--color-bg-page)]"
      spacing="chapter"
    >
      <Container size="page">
        <Stack gap="xl">
          <Split gap="xl" variant="content-media">
            <SectionHeader
              className="max-w-2xl"
              description={content.supportingCopy}
              eyebrow={
                <span className="border-l-2 border-[var(--color-brand-primary)] pl-3">
                  {content.eyebrow}
                </span>
              }
              headingLevel="h2"
              id="home-transformation-heading"
              title={content.headline}
            />

            <div
              aria-hidden="true"
              className="hidden min-h-32 border-l border-[var(--color-border-default)] md:mt-10 md:block"
            />
          </Split>

          <ol className="grid border-y border-[var(--color-border-default)] md:grid-cols-2 lg:grid-cols-4">
            {content.pillars.map((pillar, index) => (
              <li
                className="border-t border-[var(--color-border-default)] py-6 first:border-t-0 md:border-l md:border-t-0 md:px-6 md:first:border-l-0 lg:min-h-64"
                key={pillar.label}
              >
                <Stack gap="lg">
                  <Cluster align="center" gap="sm">
                    <span className="text-sm font-medium text-[var(--color-brand-primary)]">
                      {formatStep(index)}
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-normal text-[var(--color-text-secondary)]">
                      {pillar.label}
                    </span>
                  </Cluster>
                  <Stack gap="xs">
                    <h3 className="text-xl font-semibold tracking-normal text-[var(--color-text-primary)]">
                      {pillar.title}
                    </h3>
                    <p className="text-sm leading-6 text-[var(--color-text-secondary)]">
                      {pillar.description}
                    </p>
                  </Stack>
                </Stack>
              </li>
            ))}
          </ol>

          <div className="border-l-2 border-[var(--color-brand-primary)] pl-5">
            <p className="max-w-3xl text-2xl font-semibold leading-tight tracking-normal text-[var(--color-text-primary)] sm:text-3xl">
              {content.closingStatement}
            </p>
          </div>
        </Stack>
      </Container>
    </Section>
  );
}
