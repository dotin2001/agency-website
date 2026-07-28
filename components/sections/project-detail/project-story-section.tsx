import type { ProjectSlug } from "@/lib/content/projects";
import { Container } from "@/components/layout/container";
import { ViewportReveal } from "@/components/motion/viewport-reveal";
import { Section } from "@/components/layout/section";
import { Stack } from "@/components/layout/stack";
import { MediaFrame } from "@/components/ui/media-frame";
import { ProjectMockVisual } from "@/components/ui/project-mock-visual";

type ProjectStoryTone = "default" | "contrast";

type ProjectStorySectionProps = {
  body: string;
  eyebrow: string;
  index: number;
  projectSlug?: ProjectSlug;
  showVisual?: boolean;
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
  projectSlug,
  showVisual = false,
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
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <ViewportReveal className="lg:col-span-4">
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
          </ViewportReveal>
          <ViewportReveal
            className="grid gap-6 lg:col-span-8"
            delayMs={90}
          >
            <div className="border-l border-[var(--color-border-default)] pl-5 sm:pl-6">
              <p className="max-w-2xl text-base leading-8 text-[var(--color-text-secondary)] sm:text-lg">
                {body}
              </p>
            </div>
            {showVisual && projectSlug ? (
              <MediaFrame
                aria-hidden="true"
                aspectRatio="widescreen"
                className="gap-0"
              >
                <ProjectMockVisual
                  aspect="widescreen"
                  mode="gallery"
                  projectSlug={projectSlug}
                />
              </MediaFrame>
            ) : null}
          </ViewportReveal>
        </div>
      </Container>
    </Section>
  );
}
