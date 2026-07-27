import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Stack } from "@/components/layout/stack";
import { SectionHeader } from "@/components/ui/section-header";
import { ServiceDiscipline } from "@/components/ui/service-discipline";
import type { ServiceDisciplinesContent } from "@/lib/content/services";

export function ServiceDisciplinesSection({
  content,
}: Readonly<{ content: ServiceDisciplinesContent }>) {
  return (
    <Section
      aria-labelledby="services-disciplines-heading"
      className="relative border-t border-[var(--color-border-default)] bg-[var(--color-bg-page)]"
      spacing="chapter"
    >
      <Container size="page">
        <Stack gap="xl">
          <SectionHeader
            className="max-w-3xl"
            eyebrow={
              <span className="border-l-2 border-[var(--color-brand-primary)] pl-3">
                {content.eyebrow}
              </span>
            }
            headingLevel="h2"
            id="services-disciplines-heading"
            title={content.headline}
          />

          <div className="border-b border-[var(--color-border-default)]">
            {content.disciplines.map((discipline, index) => (
              <ServiceDiscipline
                capabilities={discipline.capabilities}
                className={index % 2 === 1 ? "md:pl-10 lg:pl-16" : undefined}
                index={index}
                key={discipline.label}
                label={discipline.label}
                summary={discipline.summary}
                title={discipline.title}
              />
            ))}
          </div>
        </Stack>
      </Container>
    </Section>
  );
}
