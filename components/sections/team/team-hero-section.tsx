import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Stack } from "@/components/layout/stack";
import { EditorialSidecar } from "@/components/ui/editorial-sidecar";
import type {
  TeamHeroContent,
  TeamRoleContent,
} from "@/lib/content/team";

type TeamHeroSectionProps = Readonly<{
  content: TeamHeroContent;
  rolePreview: readonly [
    Pick<TeamRoleContent, "discipline" | "displayName">,
    Pick<TeamRoleContent, "discipline" | "displayName">,
    Pick<TeamRoleContent, "discipline" | "displayName">,
  ];
}>;

export function TeamHeroSection({
  content,
  rolePreview,
}: TeamHeroSectionProps) {
  return (
    <Section
      aria-labelledby="team-hero-heading"
      className="relative overflow-hidden bg-transparent"
      spacing="chapter"
    >
      <Container size="page">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(18rem,0.8fr)] lg:items-end">
          <Stack className="max-w-4xl" gap="md">
            <p className="w-fit border-l-2 border-[var(--color-brand-primary)] pl-3 text-sm font-medium tracking-normal text-[var(--color-text-secondary)]">
              {content.eyebrow}
            </p>
            <h1
              className="max-w-5xl text-5xl font-semibold leading-[1.04] tracking-normal text-[var(--color-text-primary)] sm:text-6xl lg:text-7xl"
              id="team-hero-heading"
            >
              {content.headline}
            </h1>
            <p className="max-w-2xl text-base leading-7 text-[var(--color-text-secondary)] sm:text-lg sm:leading-8">
              {content.supportingCopy}
            </p>
          </Stack>

          <EditorialSidecar
            description={content.disclosure}
            items={rolePreview.map((role) => ({
              label: role.discipline,
              value: role.displayName,
            }))}
          />
        </div>
      </Container>
    </Section>
  );
}
