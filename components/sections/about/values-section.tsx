import { Cluster } from "@/components/layout/cluster";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Stack } from "@/components/layout/stack";
import { SectionHeader } from "@/components/ui/section-header";
import type { AboutValuesContent } from "@/lib/content/about";

function formatValueNumber(index: number) {
  return String(index + 1).padStart(2, "0");
}

function cn(...classes: Array<string | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function ValuesSection({
  content,
}: Readonly<{ content: AboutValuesContent }>) {
  return (
    <Section
      aria-labelledby="about-values-heading"
      className="relative border-t border-[var(--color-border-default)] bg-[var(--color-bg-page)]"
      spacing="chapter"
    >
      <Container size="page">
        <Stack gap="xl">
          <SectionHeader
            className="max-w-3xl"
            eyebrow={
              <span className="border-l-2 border-[var(--color-brand-primary)] pl-3">
                {content.eyebrow}
              </span>
            }
            headingLevel="h2"
            id="about-values-heading"
            title={content.headline}
          />

          <ol className="grid border-y border-[var(--color-border-default)] md:grid-cols-2">
            {content.items.map((value, index) => (
              <li
                className={cn(
                  "border-t border-[var(--color-border-default)] py-6 first:border-t-0 md:border-l md:px-6 md:odd:border-l-0 lg:min-h-64",
                  index === 1 ? "md:border-t-0" : undefined,
                )}
                key={value.label}
              >
                <Stack gap="lg">
                  <Cluster align="center" gap="sm">
                    <span className="text-sm font-medium text-[var(--color-brand-primary)]">
                      {formatValueNumber(index)}
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-normal text-[var(--color-text-secondary)]">
                      {value.label}
                    </span>
                  </Cluster>

                  <Stack gap="xs">
                    <h3 className="max-w-md text-2xl font-semibold leading-tight tracking-normal text-[var(--color-text-primary)]">
                      {value.title}
                    </h3>
                    <p className="max-w-md text-sm leading-6 text-[var(--color-text-secondary)]">
                      {value.description}
                    </p>
                  </Stack>
                </Stack>
              </li>
            ))}
          </ol>
        </Stack>
      </Container>
    </Section>
  );
}
