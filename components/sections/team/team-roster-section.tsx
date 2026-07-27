import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Stack } from "@/components/layout/stack";
import { TeamMemberCard } from "@/components/ui/team-member-card";
import { SectionHeader } from "@/components/ui/section-header";
import type { TeamRosterContent } from "@/lib/content/team";

const rosterLayoutClasses = [
  "md:col-span-2 lg:col-span-7",
  "lg:col-span-5 lg:mt-12",
  "lg:col-span-4",
  "lg:col-span-4 lg:mt-10",
  "md:col-span-2 lg:col-span-8",
  "lg:col-span-4 lg:mt-10",
  "lg:col-span-6",
  "lg:col-span-6 lg:mt-12",
] as const;

export function TeamRosterSection({
  content,
}: Readonly<{ content: TeamRosterContent }>) {
  return (
    <Section
      aria-labelledby="team-roster-heading"
      className="relative border-t border-[var(--color-border-default)] bg-[var(--color-bg-page)]"
      spacing="chapter"
    >
      <Container size="page">
        <Stack gap="xl">
          <SectionHeader
            className="max-w-3xl"
            headingLevel="h2"
            id="team-roster-heading"
            title={content.headline}
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-12 lg:items-start">
            {content.roles.map((role, index) => (
              <TeamMemberCard
                className={rosterLayoutClasses[index]}
                description={role.description}
                discipline={role.discipline}
                displayName={role.displayName}
                index={index}
                key={role.identifier}
                variant={role.variant}
              />
            ))}
          </div>
        </Stack>
      </Container>
    </Section>
  );
}
