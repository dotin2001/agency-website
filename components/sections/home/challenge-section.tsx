import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
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
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <SectionHeader
            className="max-w-2xl lg:col-span-5"
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

          <ol className="grid gap-6 sm:grid-cols-2 lg:col-span-7 lg:gap-0 lg:border-y lg:border-[var(--color-border-default)]">
            {content.items.map((item, index) => (
              <li
                className="grid gap-4 rounded-md border border-[var(--color-border-default)] p-5 sm:p-6 lg:rounded-none lg:border-x-0 lg:border-t lg:first:border-t-0 lg:odd:border-r"
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
        </div>
      </Container>
    </Section>
  );
}
