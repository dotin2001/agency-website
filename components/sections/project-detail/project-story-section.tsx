import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Split } from "@/components/layout/split";
import { Stack } from "@/components/layout/stack";

type ProjectStoryTone = "default" | "contrast";

type ProjectStorySectionProps = {
  body: string;
  eyebrow: string;
  index: number;
  title: string;
  tone?: ProjectStoryTone;
};

const toneClasses: Record<ProjectStoryTone, string> = {
  default: "bg-[var(--color-bg-page)]",
  contrast: "bg-[var(--color-bg-section)]",
};

export function ProjectStorySection({
  body,
  eyebrow,
  index,
  title,
  tone = "default",
}: Readonly<ProjectStorySectionProps>) {
  return (
    <Section
      aria-labelledby={`project-story-${index}-heading`}
      className={`relative border-t border-[var(--color-border-default)] ${toneClasses[tone]}`}
      spacing="spacious"
    >
      <Container size="page">
        <Split
          className={
            index % 2 === 0
              ? "md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]"
              : "md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]"
          }
          gap="xl"
        >
          <Stack gap="sm">
            <p className="text-sm font-medium text-[var(--color-brand-primary)]">
              {String(index).padStart(2, "0")} / {eyebrow}
            </p>
            <h2
              className="max-w-3xl text-3xl font-semibold tracking-normal text-[var(--color-text-primary)] sm:text-4xl"
              id={`project-story-${index}-heading`}
            >
              {title}
            </h2>
          </Stack>
          <p className="max-w-2xl text-base leading-8 text-[var(--color-text-secondary)] sm:text-lg">
            {body}
          </p>
        </Split>
      </Container>
    </Section>
  );
}
