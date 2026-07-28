import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Split } from "@/components/layout/split";
import { Stack } from "@/components/layout/stack";
import { StoryChapterAnchor } from "@/components/three/story-chapter-anchor";
import { SectionHeader } from "@/components/ui/section-header";
import type { HomeChallengeContent } from "@/lib/content/home";

function formatStep(index: number) {
  return String(index + 1).padStart(2, "0");
}

export function ChallengeSection({
  content,
}: Readonly<{ content: HomeChallengeContent }>) {
  return (
    <Section
      aria-labelledby="home-challenge-heading"
      className="relative border-t border-[var(--color-border-default)] bg-[var(--color-bg-page)]"
      spacing="chapter"
    >
      <StoryChapterAnchor chapter="challenge" />
      <Container size="page">
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
            id="home-challenge-heading"
            title={content.headline}
          />

          <ol className="grid gap-6">
            {content.items.map((item, index) => (
              <li
                className="grid grid-cols-[2.75rem_minmax(0,1fr)] gap-4 border-t border-[var(--color-border-default)] pt-5 sm:even:ml-8"
                key={item.title}
              >
                <span className="text-sm font-medium text-[var(--color-brand-primary)]">
                  {formatStep(index)}
                </span>
                <Stack gap="xs">
                  <h3 className="text-lg font-semibold tracking-normal text-[var(--color-text-primary)]">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-6 text-[var(--color-text-secondary)]">
                    {item.description}
                  </p>
                </Stack>
              </li>
            ))}
          </ol>
        </Split>
      </Container>
    </Section>
  );
}
