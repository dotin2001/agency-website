import { Cluster } from "@/components/layout/cluster";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Split } from "@/components/layout/split";
import { Stack } from "@/components/layout/stack";
import { ButtonLink } from "@/components/ui/button-link";
import type { HomeFinalCtaContent } from "@/lib/content/home";

export function FinalCtaSection({
  content,
}: Readonly<{ content: HomeFinalCtaContent }>) {
  return (
    <Section
      aria-labelledby="home-final-cta-heading"
      className="relative border-t border-[var(--color-border-default)] bg-[var(--color-bg-page)]"
      spacing="chapter"
    >
      <Container size="page">
        <div className="border-y border-[var(--color-border-default)] py-10 sm:py-14 lg:py-16">
          <Split gap="xl" variant="media-content">
            <Stack className="max-w-4xl" gap="md">
              <p className="w-fit border-l-2 border-[var(--color-brand-primary)] pl-3 text-sm font-medium tracking-normal text-[var(--color-text-secondary)]">
                {content.eyebrow}
              </p>
              <h2
                className="max-w-4xl text-4xl font-semibold leading-tight tracking-normal text-[var(--color-text-primary)] sm:text-5xl lg:text-6xl"
                id="home-final-cta-heading"
              >
                {content.headline}
              </h2>
              <p className="max-w-2xl text-base leading-7 text-[var(--color-text-secondary)] sm:text-lg sm:leading-8">
                {content.supportingCopy}
              </p>
            </Stack>

            <Stack
              className="border-l border-[var(--color-border-default)] pl-5 md:mt-2"
              gap="lg"
            >
              <Cluster align="center" gap="sm">
                <ButtonLink
                  aria-label={content.primaryCta.label}
                  className="w-full sm:w-auto"
                  href={content.primaryCta.href}
                  size="large"
                >
                  {content.primaryCta.label}
                </ButtonLink>
                <ButtonLink
                  aria-label={content.secondaryCta.label}
                  className="w-full sm:w-auto"
                  href={content.secondaryCta.href}
                  size="large"
                  variant="secondary"
                >
                  {content.secondaryCta.label}
                </ButtonLink>
              </Cluster>

              <p className="max-w-md text-sm leading-6 text-[var(--color-text-secondary)]">
                {content.supportingNote}
              </p>
            </Stack>
          </Split>
        </div>
      </Container>
    </Section>
  );
}
