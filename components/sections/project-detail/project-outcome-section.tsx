import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Split } from "@/components/layout/split";
import { Stack } from "@/components/layout/stack";
import type {
  Locale,
  LocalizedProjectDetail,
} from "@/lib/projects/project-placeholders";

type ProjectOutcomeSectionProps = {
  locale: Locale;
  project: LocalizedProjectDetail;
};

const content: Record<
  Locale,
  {
    heading: string;
    note: string;
  }
> = {
  en: {
    heading: "Outcome Direction",
    note: "Verified project results will be added only after client approval.",
  },
  vi: {
    heading: "Định hướng kết quả",
    note: "Kết quả dự án đã được xác minh chỉ được bổ sung sau khi có sự phê duyệt của khách hàng.",
  },
};

export function ProjectOutcomeSection({
  locale,
  project,
}: Readonly<ProjectOutcomeSectionProps>) {
  const copy = content[locale];

  return (
    <Section
      aria-labelledby="project-outcome-heading"
      className="relative border-t border-[var(--color-border-default)] bg-[var(--color-bg-section)]"
      spacing="spacious"
    >
      <Container size="page">
        <Split className="lg:items-center" gap="xl" variant="media-content">
          <Stack gap="sm">
            <p className="text-sm font-medium text-[var(--color-brand-primary)]">
              05
            </p>
            <h2
              className="max-w-3xl text-3xl font-semibold tracking-normal text-[var(--color-text-primary)] sm:text-4xl"
              id="project-outcome-heading"
            >
              {copy.heading}
            </h2>
          </Stack>
          <div className="border-l border-[var(--color-border-default)] pl-5">
            <p className="text-lg leading-8 text-[var(--color-text-primary)]">
              {project.outcomeDirection}
            </p>
            <p className="mt-6 text-sm leading-6 text-[var(--color-text-secondary)]">
              {copy.note}
            </p>
          </div>
        </Split>
      </Container>
    </Section>
  );
}
