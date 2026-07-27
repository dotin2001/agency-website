import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Split } from "@/components/layout/split";
import { Stack } from "@/components/layout/stack";
import type {
  Locale,
  LocalizedProjectDetail,
} from "@/lib/projects/project-placeholders";

type ProjectHeroSectionProps = {
  locale: Locale;
  project: LocalizedProjectDetail;
};

const disclosureCopy: Record<Locale, string> = {
  en: "This case study is temporary structural content and must be replaced with approved project information before launch.",
  vi: "Case study này là nội dung cấu trúc tạm thời và phải được thay thế bằng thông tin dự án đã được phê duyệt trước khi ra mắt.",
};

const labels: Record<
  Locale,
  {
    client: string;
    services: string;
  }
> = {
  en: {
    client: "Client",
    services: "Services",
  },
  vi: {
    client: "Khách hàng",
    services: "Dịch vụ",
  },
};

export function ProjectHeroSection({
  locale,
  project,
}: Readonly<ProjectHeroSectionProps>) {
  const copy = labels[locale];

  return (
    <Section
      aria-labelledby="project-hero-heading"
      className="relative overflow-hidden bg-transparent"
      spacing="chapter"
    >
      <Container size="page">
        <Split
          className="lg:grid-cols-[minmax(0,0.95fr)_minmax(18rem,0.65fr)] lg:items-end"
          gap="xl"
        >
          <Stack className="max-w-4xl" gap="md">
            <p className="w-fit border-l-2 border-[var(--color-brand-primary)] pl-3 text-sm font-medium tracking-normal text-[var(--color-text-secondary)]">
              {project.industry}
            </p>
            <h1
              className="max-w-5xl text-5xl font-semibold leading-[1.04] tracking-normal text-[var(--color-text-primary)] sm:text-6xl lg:text-7xl"
              id="project-hero-heading"
            >
              {project.title}
            </h1>
            <p className="max-w-2xl text-base leading-7 text-[var(--color-text-secondary)] sm:text-lg sm:leading-8">
              {project.summary}
            </p>
          </Stack>

          <Stack
            className="border-l border-[var(--color-border-default)] bg-[var(--color-bg-page)]/90 pl-5"
            gap="md"
          >
            <dl className="grid gap-4 text-sm">
              <div>
                <dt className="font-medium text-[var(--color-text-primary)]">
                  {copy.client}
                </dt>
                <dd className="mt-1 text-[var(--color-text-secondary)]">
                  {project.client}
                </dd>
              </div>
              <div>
                <dt className="font-medium text-[var(--color-text-primary)]">
                  {copy.services}
                </dt>
                <dd className="mt-1 text-[var(--color-text-secondary)]">
                  {project.services}
                </dd>
              </div>
            </dl>
            <p className="text-sm leading-6 text-[var(--color-text-secondary)]">
              {disclosureCopy[locale]}
            </p>
          </Stack>
        </Split>
      </Container>
    </Section>
  );
}
