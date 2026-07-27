import { Cluster } from "@/components/layout/cluster";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Split } from "@/components/layout/split";
import { Stack } from "@/components/layout/stack";
import { ButtonLink } from "@/components/ui/button-link";
import { SectionHeader } from "@/components/ui/section-header";
import type { ServicesEngagementContent } from "@/lib/content/services";

function formatModelNumber(index: number) {
  return String(index + 1).padStart(2, "0");
}

export function EngagementSection({
  content,
}: Readonly<{ content: ServicesEngagementContent }>) {
  return (
    <Section
      aria-labelledby="services-engagement-heading"
      className="relative border-t border-[var(--color-border-default)] bg-[var(--color-bg-page)]"
      spacing="chapter"
    >
      <Container size="page">
        <Stack gap="xl">
          <Split gap="xl" variant="media-content">
            <SectionHeader
              className="max-w-3xl"
              description={content.supportingCopy}
              eyebrow={
                <span className="border-l-2 border-[var(--color-brand-primary)] pl-3">
                  {content.eyebrow}
                </span>
              }
              headingLevel="h2"
              id="services-engagement-heading"
              title={content.headline}
            />

            <Stack
              className="border-l border-[var(--color-border-default)] pl-5"
              gap="lg"
            >
              <p className="max-w-md text-xl font-semibold leading-tight tracking-normal text-[var(--color-text-primary)]">
                {content.closingStatement}
              </p>
              <Cluster align="center" gap="sm">
                <ButtonLink
                  aria-label={content.primaryCta.label}
                  href={content.primaryCta.href}
                  size="large"
                >
                  {content.primaryCta.label}
                </ButtonLink>
                <ButtonLink
                  aria-label={content.secondaryCta.label}
                  href={content.secondaryCta.href}
                  size="large"
                  variant="secondary"
                >
                  {content.secondaryCta.label}
                </ButtonLink>
              </Cluster>
            </Stack>
          </Split>

          <ol className="grid gap-6 md:grid-cols-3">
            {content.models.map((model, index) => (
              <li
                className="border-t border-[var(--color-border-default)] pt-5 md:min-h-56"
                key={model.title}
              >
                <Stack gap="lg">
                  <span className="text-sm font-medium text-[var(--color-brand-primary)]">
                    {formatModelNumber(index)}
                  </span>
                  <Stack gap="xs">
                    <h3 className="text-xl font-semibold tracking-normal text-[var(--color-text-primary)]">
                      {model.title}
                    </h3>
                    <p className="text-sm leading-6 text-[var(--color-text-secondary)]">
                      {model.description}
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
