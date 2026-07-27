import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Split } from "@/components/layout/split";
import { Stack } from "@/components/layout/stack";
import { ButtonLink } from "@/components/ui/button-link";

type Locale = "en" | "vi";

type ProjectsCtaCopy = {
  eyebrow: string;
  headline: string;
  primaryCta: string;
  supportingCopy: string;
};

// Temporary localized Projects copy until the production content system is implemented.
const projectsCtaCopy: Record<Locale, ProjectsCtaCopy> = {
  en: {
    eyebrow: "Start a Project",
    headline: "Looking for a partner to connect direction with delivery?",
    supportingCopy:
      "Tell us about the challenge, the team, and what needs to change. We will help define the right way forward.",
    primaryCta: "Discuss Your Project",
  },
  vi: {
    eyebrow: "Bắt đầu dự án",
    headline:
      "Bạn đang tìm một đối tác kết nối định hướng với triển khai?",
    supportingCopy:
      "Hãy chia sẻ bài toán, đội ngũ và điều cần thay đổi. Chúng tôi sẽ cùng xác định hướng đi phù hợp.",
    primaryCta: "Trao đổi về dự án",
  },
};

export function ProjectsCtaSection({ locale }: Readonly<{ locale: Locale }>) {
  const copy = projectsCtaCopy[locale];

  return (
    <Section
      aria-labelledby="projects-cta-heading"
      className="relative border-t border-[var(--color-border-default)] bg-[var(--color-bg-page)]"
      spacing="chapter"
    >
      <Container size="page">
        <div className="border-y border-[var(--color-border-default)] py-10 sm:py-14 lg:py-16">
          <Split gap="xl" variant="content-media">
            <Stack className="max-w-3xl" gap="md">
              <p className="w-fit border-l-2 border-[var(--color-brand-primary)] pl-3 text-sm font-medium tracking-normal text-[var(--color-text-secondary)]">
                {copy.eyebrow}
              </p>
              <h2
                className="max-w-4xl text-4xl font-semibold leading-tight tracking-normal text-[var(--color-text-primary)] sm:text-5xl"
                id="projects-cta-heading"
              >
                {copy.headline}
              </h2>
              <p className="max-w-2xl text-base leading-7 text-[var(--color-text-secondary)]">
                {copy.supportingCopy}
              </p>
            </Stack>

            <div className="border-l border-[var(--color-border-default)] pl-5 md:self-end">
              <ButtonLink
                aria-label={copy.primaryCta}
                href={`/${locale}/contact`}
                size="large"
              >
                {copy.primaryCta}
              </ButtonLink>
            </div>
          </Split>
        </div>
      </Container>
    </Section>
  );
}
