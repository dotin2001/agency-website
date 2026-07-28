import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Split } from "@/components/layout/split";
import { Stack } from "@/components/layout/stack";
import { ButtonLink } from "@/components/ui/button-link";
import { EditorialSidecar } from "@/components/ui/editorial-sidecar";
import { SectionHeader } from "@/components/ui/section-header";
import { TeamMemberCard } from "@/components/ui/team-member-card";
import type { HomeTeamContent } from "@/lib/content/home";

export function TeamSection({
  content,
}: Readonly<{ content: HomeTeamContent }>) {
  const [featuredMember, ...supportingMembers] = content.roles;

  return (
    <Section
      aria-labelledby="home-team-heading"
      className="relative border-t border-[var(--color-border-default)] bg-[var(--color-bg-page)]"
      spacing="chapter"
    >
      <Container size="page">
        <Stack gap="xl">
          <Split gap="xl" variant="content-media">
            <SectionHeader
              className="max-w-3xl"
              description={content.supportingCopy}
              eyebrow={
                <span className="border-l-2 border-[var(--color-brand-primary)] pl-3">
                  {content.eyebrow}
                </span>
              }
              headingLevel="h2"
              id="home-team-heading"
              title={content.headline}
            />

            <EditorialSidecar
              description={content.collaborationStatement}
              footer={
                <ButtonLink
                  href={content.sectionCta.href}
                  size="large"
                  variant="secondary"
                >
                  {content.sectionCta.label}
                </ButtonLink>
              }
            />
          </Split>

          <div className="grid gap-6 lg:grid-cols-12 lg:items-start">
            <TeamMemberCard
              className="lg:col-span-6"
              description={featuredMember.description}
              discipline={featuredMember.discipline}
              displayName={featuredMember.displayName}
              index={0}
              variant="featured"
            />

            <div className="grid gap-6 md:grid-cols-3 lg:col-span-6">
              {supportingMembers.map((member, index) => (
                <TeamMemberCard
                  description={member.description}
                  discipline={member.discipline}
                  displayName={member.displayName}
                  index={index + 1}
                  key={member.identifier}
                  variant="standard"
                />
              ))}
            </div>
          </div>
        </Stack>
      </Container>
    </Section>
  );
}
