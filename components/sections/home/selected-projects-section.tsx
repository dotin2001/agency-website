import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Stack } from "@/components/layout/stack";
import { ButtonLink } from "@/components/ui/button-link";
import { ProjectCard } from "@/components/ui/project-card";
import { SectionHeader } from "@/components/ui/section-header";
import type {
  HomeProjectContent,
  HomeSelectedProjectsContent,
} from "@/lib/content/home";

type HomeProjectWithHref = HomeProjectContent &
  Readonly<{
    href: string;
  }>;

type SelectedProjectsSectionContent = Omit<
  HomeSelectedProjectsContent,
  "projects"
> &
  Readonly<{
    projects: readonly HomeProjectWithHref[];
  }>;

export function SelectedProjectsSection({
  content,
}: Readonly<{ content: SelectedProjectsSectionContent }>) {
  return (
    <Section
      aria-labelledby="home-selected-projects-heading"
      className="relative border-t border-[var(--color-border-default)] bg-[var(--color-bg-page)]"
      spacing="chapter"
    >
      <Container size="page">
        <Stack gap="xl">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
            <SectionHeader
              className="max-w-3xl"
              description={content.supportingCopy}
              eyebrow={
                <span className="border-l-2 border-[var(--color-brand-primary)] pl-3">
                  {content.eyebrow}
                </span>
              }
              headingLevel="h2"
              id="home-selected-projects-heading"
              title={content.headline}
            />
            <ButtonLink
              href={content.sectionCta.href}
              size="large"
              variant="secondary"
            >
              {content.sectionCta.label}
            </ButtonLink>
          </div>

          <div className="grid gap-6 lg:grid-cols-12 lg:items-start">
            {content.projects.map((project, index) => {
              const isFeatured = index === 0;

              return (
                <ProjectCard
                  className={
                    isFeatured
                      ? "lg:col-span-7"
                      : "lg:col-span-5 lg:mt-12"
                  }
                  client={project.client}
                  href={project.href}
                  index={index}
                  industry={project.industry}
                  key={project.slug}
                  services={project.services}
                  statement={project.statement}
                  title={project.title}
                />
              );
            })}
          </div>
        </Stack>
      </Container>
    </Section>
  );
}
