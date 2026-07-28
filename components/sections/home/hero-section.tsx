import type { CSSProperties } from "react";
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
              <p
                className="motion-enter w-fit border-l-2 border-[var(--color-brand-primary)] pl-3 text-sm font-medium tracking-normal text-[var(--color-text-secondary)]"
                style={
                  {
                    "--motion-enter-delay": "40ms",
                    "--motion-enter-distance": "12px",
                    "--motion-enter-duration": "320ms",
                  } as CSSProperties
                }
              >
                {content.eyebrow}
              </p>
              <h1
                className="motion-enter max-w-4xl text-5xl font-semibold leading-[1.02] tracking-normal text-[var(--color-text-primary)] sm:text-6xl lg:text-7xl"
                id="home-hero-heading"
                style={
                  {
                    "--motion-enter-delay": "90ms",
                    "--motion-enter-distance": "18px",
                  } as CSSProperties
                }
              >
                {content.headline}
              </h1>
              <p
                className="motion-enter max-w-2xl text-base leading-7 text-[var(--color-text-secondary)] sm:text-lg sm:leading-8"
                style={
                  {
                    "--motion-enter-delay": "160ms",
                    "--motion-enter-distance": "18px",
                    "--motion-enter-duration": "360ms",
                  } as CSSProperties
                }
              >
                {content.supportingCopy}
              </p>
            </Stack>

            <Cluster
              align="center"
              className="motion-enter"
              gap="sm"
              style={
                {
                  "--motion-enter-delay": "230ms",
                  "--motion-enter-distance": "14px",
                  "--motion-enter-duration": "320ms",
                } as CSSProperties
              }
            >
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
