import { ButtonLink } from "@/components/ui/button-link";
import { Cluster } from "@/components/layout/cluster";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Split } from "@/components/layout/split";
import { Stack } from "@/components/layout/stack";
import type { TeamCollaborationContent } from "@/lib/content/team";

type TeamCollaborationSectionProps = Readonly<{
  content: TeamCollaborationContent;
  primaryCtaHref: string;
  secondaryCtaHref: string;
}>;

export function TeamCollaborationSection({
  content,
  primaryCtaHref,
  secondaryCtaHref,
}: TeamCollaborationSectionProps) {
  return (
    <Section
      aria-labelledby="team-collaboration-heading"
      className="relative border-t border-[var(--color-border-default)] bg-[var(--color-bg-section)]"
      spacing="chapter"
    >
      <Container size="page">
        <Stack gap="xl">
          <Split className="lg:items-end" gap="xl" variant="content-media">
            <Stack className="max-w-3xl" gap="md">
              <p className="w-fit border-l-2 border-[var(--color-brand-primary)] pl-3 text-sm font-medium tracking-normal text-[var(--color-text-secondary)]">
                {content.eyebrow}
              </p>
              <h2
                className="max-w-4xl text-4xl font-semibold leading-tight tracking-normal text-[var(--color-text-primary)] sm:text-5xl"
                id="team-collaboration-heading"
              >
                {content.headline}
              </h2>
              <p className="max-w-2xl text-base leading-7 text-[var(--color-text-secondary)] sm:text-lg sm:leading-8">
                {content.supportingCopy}
              </p>
            </Stack>

            <p className="border-l border-[var(--color-border-default)] pl-5 text-xl font-semibold leading-tight text-[var(--color-text-primary)]">
              {content.closingStatement}
            </p>
          </Split>

          <div className="grid gap-0 border-y border-[var(--color-border-default)] md:grid-cols-2">
            {content.principles.map((principle, index) => (
              <article
                className="border-b border-[var(--color-border-default)] py-6 md:px-6 md:odd:border-r md:[&:nth-last-child(-n+2)]:border-b-0"
                key={principle.title}
              >
                <Stack gap="sm">
                  <p className="text-sm font-medium text-[var(--color-brand-primary)]">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="text-2xl font-semibold tracking-normal text-[var(--color-text-primary)]">
                    {principle.title}
                  </h3>
                  <p className="text-sm leading-6 text-[var(--color-text-secondary)]">
                    {principle.description}
                  </p>
                </Stack>
              </article>
            ))}
          </div>

          <Cluster align="center" gap="sm">
            <ButtonLink href={primaryCtaHref} size="large">
              {content.primaryCta.label}
            </ButtonLink>
            <ButtonLink
              href={secondaryCtaHref}
              size="large"
              variant="secondary"
            >
              {content.secondaryCta.label}
            </ButtonLink>
          </Cluster>
        </Stack>
      </Container>
    </Section>
  );
}
