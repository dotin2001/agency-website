import { Cluster } from "@/components/layout/cluster";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Stack } from "@/components/layout/stack";
import { ButtonLink } from "@/components/ui/button-link";
import type { HomeHeroContent } from "@/lib/content/home";

export function HeroSection({
  content,
}: Readonly<{ content: HomeHeroContent }>) {
  return (
    <Section
      aria-labelledby="home-hero-heading"
      className="relative overflow-hidden bg-transparent"
      spacing="chapter"
    >
      <Container size="page">
        <div className="grid gap-12 lg:min-h-[calc(100svh-12rem)] lg:grid-cols-[minmax(0,0.95fr)_minmax(18rem,1.05fr)] lg:items-center">
          <Stack className="max-w-3xl lg:max-w-2xl" gap="lg">
            <Stack gap="md">
              <p className="w-fit border-l-2 border-[var(--color-brand-primary)] pl-3 text-sm font-medium tracking-normal text-[var(--color-text-secondary)]">
                {content.eyebrow}
              </p>
              <h1
                className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-normal text-[var(--color-text-primary)] sm:text-6xl lg:text-7xl"
                id="home-hero-heading"
              >
                {content.headline}
              </h1>
              <p className="max-w-2xl text-base leading-7 text-[var(--color-text-secondary)] sm:text-lg sm:leading-8">
                {content.supportingCopy}
              </p>
            </Stack>

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

          <div
            aria-hidden="true"
            className="hidden min-h-72 lg:block"
          />
        </div>
      </Container>
    </Section>
  );
}
