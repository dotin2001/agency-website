import { Container } from "@/components/layout/container";
import { ProcessBand } from "@/components/ui/process-band";
import { Section } from "@/components/layout/section";
import { Stack } from "@/components/layout/stack";
import type {
  ServiceDisciplineContent,
  ServicesHeroContent,
} from "@/lib/content/services";

type ServicesHeroSectionProps = Readonly<{
  content: ServicesHeroContent;
  highlights: readonly [
    Pick<ServiceDisciplineContent, "label" | "title">,
    Pick<ServiceDisciplineContent, "label" | "title">,
    Pick<ServiceDisciplineContent, "label" | "title">,
    Pick<ServiceDisciplineContent, "label" | "title">,
  ];
}>;

export function ServicesHeroSection({
  content,
  highlights,
}: ServicesHeroSectionProps) {
  return (
    <Section
      aria-labelledby="services-hero-heading"
      className="relative overflow-hidden bg-transparent"
      spacing="chapter"
    >
      <Container size="page">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(20rem,1fr)] lg:items-end">
          <Stack className="max-w-4xl" gap="md">
            <p className="w-fit border-l-2 border-[var(--color-brand-primary)] pl-3 text-sm font-medium tracking-normal text-[var(--color-text-secondary)]">
              {content.eyebrow}
            </p>
            <h1
              className="max-w-5xl text-5xl font-semibold leading-[1.04] tracking-normal text-[var(--color-text-primary)] sm:text-6xl lg:text-7xl"
              id="services-hero-heading"
            >
              {content.headline}
            </h1>
            <p className="max-w-2xl text-base leading-7 text-[var(--color-text-secondary)] sm:text-lg sm:leading-8">
              {content.supportingCopy}
            </p>
          </Stack>

          <Stack className="max-w-2xl" gap="lg">
            <p className="border-l border-[var(--color-border-default)] pl-5 text-xl font-semibold leading-tight tracking-normal text-[var(--color-text-primary)]">
              {content.secondaryStatement}
            </p>
            <ProcessBand
              className="xl:grid-cols-2"
              items={highlights.map((item) => ({
                label: item.label,
                title: item.title,
              }))}
            />
          </Stack>
        </div>
      </Container>
    </Section>
  );
}
