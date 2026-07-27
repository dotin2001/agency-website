import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Split } from "@/components/layout/split";
import { Stack } from "@/components/layout/stack";
import { ButtonLink } from "@/components/ui/button-link";
import { SectionHeader } from "@/components/ui/section-header";
import type { AboutPrinciplesContent } from "@/lib/content/about";

function formatPrincipleNumber(index: number) {
  return String(index + 1).padStart(2, "0");
}

export function PrinciplesSection({
  content,
}: Readonly<{ content: AboutPrinciplesContent }>) {
  return (
    <Section
      aria-labelledby="about-principles-heading"
      className="relative border-t border-[var(--color-border-default)] bg-[var(--color-bg-page)]"
      spacing="chapter"
    >
      <Container size="page">
        <Stack gap="xl">
          <Split gap="xl" variant="content-media">
            <SectionHeader
              className="max-w-3xl"
              eyebrow={
                <span className="border-l-2 border-[var(--color-brand-primary)] pl-3">
                  {content.eyebrow}
                </span>
              }
              headingLevel="h2"
              id="about-principles-heading"
              title={content.headline}
            />

            <Stack
              className="border-l border-[var(--color-border-default)] pl-5"
              gap="lg"
            >
              <p className="max-w-md text-xl font-semibold leading-tight tracking-normal text-[var(--color-text-primary)]">
                {content.closingStatement}
              </p>
              <ButtonLink
                aria-label={content.primaryCta.label}
                href={content.primaryCta.href}
                size="large"
              >
                {content.primaryCta.label}
              </ButtonLink>
            </Stack>
          </Split>

          <ol className="grid gap-0 border-y border-[var(--color-border-default)]">
            {content.items.map((principle, index) => (
              <li
                className="grid gap-4 border-t border-[var(--color-border-default)] py-6 first:border-t-0 md:grid-cols-[4rem_minmax(0,0.55fr)_minmax(0,0.45fr)] md:items-start md:gap-8"
                key={principle.title}
              >
                <span className="text-sm font-medium text-[var(--color-brand-primary)]">
                  {formatPrincipleNumber(index)}
                </span>
                <h3 className="max-w-xl text-2xl font-semibold leading-tight tracking-normal text-[var(--color-text-primary)]">
                  {principle.title}
                </h3>
                <p className="max-w-xl text-sm leading-6 text-[var(--color-text-secondary)]">
                  {principle.description}
                </p>
              </li>
            ))}
          </ol>
        </Stack>
      </Container>
    </Section>
  );
}
