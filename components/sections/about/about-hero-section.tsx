import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Stack } from "@/components/layout/stack";
import { EditorialSidecar } from "@/components/ui/editorial-sidecar";
import type { AboutHeroContent } from "@/lib/content/about";

export function AboutHeroSection({
  content,
}: Readonly<{ content: AboutHeroContent }>) {
  return (
    <Section
      aria-labelledby="about-hero-heading"
      className="relative overflow-hidden bg-transparent"
      spacing="chapter"
    >
      <Container size="page">
        <Stack className="max-w-5xl" gap="xl">
          <Stack className="max-w-4xl" gap="md">
            <p className="w-fit border-l-2 border-[var(--color-brand-primary)] pl-3 text-sm font-medium tracking-normal text-[var(--color-text-secondary)]">
              {content.eyebrow}
            </p>
            <h1
              className="max-w-5xl text-5xl font-semibold leading-[1.04] tracking-normal text-[var(--color-text-primary)] sm:text-6xl lg:text-7xl"
              id="about-hero-heading"
            >
              {content.headline}
            </h1>
            <p className="max-w-2xl text-base leading-7 text-[var(--color-text-secondary)] sm:text-lg sm:leading-8">
              {content.supportingCopy}
            </p>
          </Stack>

          <EditorialSidecar
            className="max-w-3xl lg:ml-auto"
            description={content.secondaryStatement}
          />
        </Stack>
      </Container>
    </Section>
  );
}
