import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Stack } from "@/components/layout/stack";
import { StoryChapterAnchor } from "@/components/three/story-chapter-anchor";
import { EditorialSidecar } from "@/components/ui/editorial-sidecar";
import { ProcessBand } from "@/components/ui/process-band";
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
      <StoryChapterAnchor chapter="transformation" />
      <Container size="page">
        <Stack gap="xl">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <SectionHeader
              className="max-w-2xl lg:col-span-7"
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

            <EditorialSidecar
              className="lg:col-span-5"
              description={content.closingStatement}
            />
          </div>

          <ProcessBand
            items={content.pillars.map((pillar, index) => ({
              description: pillar.description,
              label: formatStep(index),
              title: pillar.title,
            }))}
          />
        </Stack>
      </Container>
    </Section>
  );
}
