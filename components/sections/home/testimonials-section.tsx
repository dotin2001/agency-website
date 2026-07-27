import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Split } from "@/components/layout/split";
import { Stack } from "@/components/layout/stack";
import { SectionHeader } from "@/components/ui/section-header";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import type { HomeTestimonialsContent } from "@/lib/content/home";

export function TestimonialsSection({
  content,
}: Readonly<{ content: HomeTestimonialsContent }>) {
  const [primaryTestimonial, ...supportingTestimonials] =
    content.testimonials;

  return (
    <Section
      aria-labelledby="home-testimonials-heading"
      className="relative border-t border-[var(--color-border-default)] bg-[var(--color-bg-page)]"
      spacing="chapter"
    >
      <Container size="page">
        <Stack gap="xl">
          <Split gap="xl" variant="media-content">
            <SectionHeader
              className="max-w-3xl"
              description={content.supportingCopy}
              eyebrow={
                <span className="border-l-2 border-[var(--color-brand-primary)] pl-3">
                  {content.eyebrow}
                </span>
              }
              headingLevel="h2"
              id="home-testimonials-heading"
              title={content.headline}
            />

            <p className="border-l border-[var(--color-border-default)] pl-5 text-sm leading-6 text-[var(--color-text-secondary)]">
              {content.disclosure}
            </p>
          </Split>

          <div className="grid gap-6 lg:grid-cols-12 lg:items-stretch">
            <TestimonialCard
              attribution={primaryTestimonial.attribution}
              className="lg:col-span-7"
              index={0}
              quote={primaryTestimonial.quote}
              role={primaryTestimonial.role}
              variant="primary"
            />

            <div className="grid gap-6 md:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
              {supportingTestimonials.map((testimonial, index) => (
                <TestimonialCard
                  attribution={testimonial.attribution}
                  index={index + 1}
                  key={testimonial.identifier}
                  quote={testimonial.quote}
                  role={testimonial.role}
                  variant="supporting"
                />
              ))}
            </div>
          </div>
        </Stack>
      </Container>
    </Section>
  );
}
