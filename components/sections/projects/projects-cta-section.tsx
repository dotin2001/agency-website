import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Split } from "@/components/layout/split";
import { Stack } from "@/components/layout/stack";
import { ButtonLink } from "@/components/ui/button-link";
import type { ProjectsCtaContent } from "@/lib/content/projects";

type ProjectsCtaSectionProps = Readonly<{
  content: ProjectsCtaContent;
  primaryCtaHref: string;
}>;

export function ProjectsCtaSection({
  content,
  primaryCtaHref,
}: ProjectsCtaSectionProps) {
  return (
    <Section
      aria-labelledby="projects-cta-heading"
      className="relative border-t border-[var(--color-border-default)] bg-[var(--color-bg-page)]"
      spacing="chapter"
    >
      <Container size="page">
        <div className="border-y border-[var(--color-border-default)] py-10 sm:py-14 lg:py-16">
          <Split gap="xl" variant="content-media">
            <Stack className="max-w-3xl" gap="md">
              <p className="w-fit border-l-2 border-[var(--color-brand-primary)] pl-3 text-sm font-medium tracking-normal text-[var(--color-text-secondary)]">
                {content.eyebrow}
              </p>
              <h2
                className="max-w-4xl text-4xl font-semibold leading-tight tracking-normal text-[var(--color-text-primary)] sm:text-5xl"
                id="projects-cta-heading"
              >
                {content.headline}
              </h2>
              <p className="max-w-2xl text-base leading-7 text-[var(--color-text-secondary)]">
                {content.supportingCopy}
              </p>
            </Stack>

            <div className="border-l border-[var(--color-border-default)] pl-5 md:self-end">
              <ButtonLink
                aria-label={content.primaryCta}
                href={primaryCtaHref}
                size="large"
              >
                {content.primaryCta}
              </ButtonLink>
            </div>
          </Split>
        </div>
      </Container>
    </Section>
  );
}
