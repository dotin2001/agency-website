import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Stack } from "@/components/layout/stack";
import { MediaFrame } from "@/components/ui/media-frame";
import { ProjectCard } from "@/components/ui/project-card";
import { ProjectMockVisual } from "@/components/ui/project-mock-visual";
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
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(18rem,0.9fr)] lg:items-end">
            <SectionHeader
              className="max-w-3xl"
              headingLevel="h2"
              id="projects-list-heading"
              title={content.headline}
            />

            <div className="grid grid-cols-3 gap-4">
              {content.projects.slice(0, 3).map((project) => (
                <MediaFrame
                  aria-hidden="true"
                  aspectRatio="portrait"
                  className="gap-0"
                  key={`preview-${project.slug}`}
                >
                  <ProjectMockVisual
                    mode="card"
                    projectSlug={project.slug}
                  />
                </MediaFrame>
              ))}
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-12 lg:items-start">
            {content.projects.map((project, index) => (
              <ProjectCard
                className={projectLayoutClasses[index]}
                client={project.client}
                href={project.href}
                index={index}
                industry={project.industry}
                key={project.slug}
                projectSlug={project.slug}
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
