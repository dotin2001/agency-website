import { ButtonLink } from "@/components/ui/button-link";
import { Cluster } from "@/components/layout/cluster";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Split } from "@/components/layout/split";
import { Stack } from "@/components/layout/stack";
import type {
  Locale,
  LocalizedProjectDetail,
  ProjectSlug,
} from "@/lib/projects/project-placeholders";

type ProjectNextSectionProps = {
  locale: Locale;
  nextProject: LocalizedProjectDetail;
  nextProjectSlug: ProjectSlug;
};

const content: Record<
  Locale,
  {
    allProjectsCta: string;
    heading: string;
    nextProjectCta: string;
  }
> = {
  en: {
    heading: "Continue Exploring",
    nextProjectCta: "View Next Project",
    allProjectsCta: "View All Projects",
  },
  vi: {
    heading: "Tiếp tục khám phá",
    nextProjectCta: "Xem dự án tiếp theo",
    allProjectsCta: "Xem tất cả dự án",
  },
};

export function ProjectNextSection({
  locale,
  nextProject,
  nextProjectSlug,
}: Readonly<ProjectNextSectionProps>) {
  const copy = content[locale];

  return (
    <Section
      aria-labelledby="project-next-heading"
      className="relative border-t border-[var(--color-border-default)] bg-[var(--color-bg-page)]"
      spacing="chapter"
    >
      <Container size="page">
        <div className="border-y border-[var(--color-border-default)] py-10 sm:py-14 lg:py-16">
          <Split gap="xl" variant="content-media">
            <Stack gap="md">
              <p className="text-sm font-medium text-[var(--color-brand-primary)]">
                06
              </p>
              <h2
                className="max-w-3xl text-3xl font-semibold tracking-normal text-[var(--color-text-primary)] sm:text-4xl"
                id="project-next-heading"
              >
                {copy.heading}
              </h2>
            </Stack>
            <Stack gap="md">
              <div className="border-l border-[var(--color-border-default)] pl-5">
                <p className="text-sm font-medium text-[var(--color-text-secondary)]">
                  {nextProject.industry}
                </p>
                <p className="mt-2 text-2xl font-semibold text-[var(--color-text-primary)]">
                  {nextProject.title}
                </p>
              </div>
              <Cluster align="center" gap="sm">
                <ButtonLink
                  href={`/${locale}/projects/${nextProjectSlug}`}
                  size="large"
                >
                  {copy.nextProjectCta}
                </ButtonLink>
                <ButtonLink
                  href={`/${locale}/projects`}
                  size="large"
                  variant="secondary"
                >
                  {copy.allProjectsCta}
                </ButtonLink>
              </Cluster>
            </Stack>
          </Split>
        </div>
      </Container>
    </Section>
  );
}
