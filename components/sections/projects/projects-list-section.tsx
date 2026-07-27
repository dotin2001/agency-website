import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Stack } from "@/components/layout/stack";
import { ProjectCard } from "@/components/ui/project-card";
import { SectionHeader } from "@/components/ui/section-header";
import type {
  ProjectSummaryContent,
  ProjectsCollectionContent,
} from "@/lib/content/projects";

type ProjectListItemContent = ProjectSummaryContent &
  Readonly<{
    href: string;
  }>;

type ProjectsListSectionProps = Readonly<{
  content: Omit<ProjectsCollectionContent, "projects"> & {
    projects: readonly [
      ProjectListItemContent,
      ProjectListItemContent,
      ProjectListItemContent,
      ProjectListItemContent,
      ProjectListItemContent,
      ProjectListItemContent,
    ];
  };
}>;

const projectLayoutClasses = [
  "lg:col-span-7",
  "lg:col-span-5 lg:mt-12",
  "lg:col-span-5",
  "lg:col-span-7 lg:mt-12",
  "lg:col-span-6",
  "lg:col-span-6 lg:mt-10",
] as const;

export function ProjectsListSection({ content }: ProjectsListSectionProps) {
  return (
    <Section
      aria-labelledby="projects-list-heading"
      className="relative border-t border-[var(--color-border-default)] bg-[var(--color-bg-page)]"
      spacing="chapter"
    >
      <Container size="page">
        <Stack gap="xl">
          <SectionHeader
            className="max-w-3xl"
            headingLevel="h2"
            id="projects-list-heading"
            title={content.headline}
          />

          <div className="grid gap-6 lg:grid-cols-12 lg:items-start">
            {content.projects.map((project, index) => (
              <ProjectCard
                className={projectLayoutClasses[index]}
                client={project.client}
                href={project.href}
                index={index}
                industry={project.industry}
                key={project.slug}
                services={project.services}
                statement={project.statement}
                title={project.title}
              />
            ))}
          </div>
        </Stack>
      </Container>
    </Section>
  );
}
