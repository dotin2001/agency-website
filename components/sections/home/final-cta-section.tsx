import { Cluster } from "@/components/layout/cluster";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Split } from "@/components/layout/split";
import { Stack } from "@/components/layout/stack";
import { ButtonLink } from "@/components/ui/button-link";

type Locale = "en" | "vi";

type FinalCtaCopy = {
  eyebrow: string;
  headline: string;
  primaryCta: string;
  secondaryCta: string;
  supportingCopy: string;
  supportingNote: string;
};

// Temporary localized homepage copy until the production content system is implemented.
const finalCtaCopy: Record<Locale, FinalCtaCopy> = {
  en: {
    eyebrow: "Start the Next Chapter",
    headline: "Have an ambitious idea? Let’s build what comes next.",
    supportingCopy:
      "Whether you are defining a new brand, launching a campaign, or creating a stronger digital experience, we can help turn the direction into meaningful work.",
    primaryCta: "Start a Project",
    secondaryCta: "Explore Our Work",
    supportingNote:
      "Strategy, creativity, technology, and performance—connected from the beginning.",
  },
  vi: {
    eyebrow: "Bắt đầu chương tiếp theo",
    headline: "Bạn có một ý tưởng lớn? Hãy cùng xây dựng bước tiếp theo.",
    supportingCopy:
      "Dù bạn đang định hình một thương hiệu mới, triển khai chiến dịch hay xây dựng trải nghiệm số khác biệt hơn, chúng tôi có thể giúp chuyển định hướng thành những giá trị thực tế.",
    primaryCta: "Bắt đầu dự án",
    secondaryCta: "Khám phá dự án",
    supportingNote:
      "Chiến lược, sáng tạo, công nghệ và hiệu quả—được kết nối ngay từ đầu.",
  },
};

export function FinalCtaSection({ locale }: Readonly<{ locale: Locale }>) {
  const copy = finalCtaCopy[locale];

  return (
    <Section
      aria-labelledby="home-final-cta-heading"
      className="relative border-t border-[var(--color-border-default)] bg-[var(--color-bg-page)]"
      spacing="chapter"
    >
      <Container size="page">
        <div className="border-y border-[var(--color-border-default)] py-10 sm:py-14 lg:py-16">
          <Split gap="xl" variant="media-content">
            <Stack className="max-w-4xl" gap="md">
              <p className="w-fit border-l-2 border-[var(--color-brand-primary)] pl-3 text-sm font-medium tracking-normal text-[var(--color-text-secondary)]">
                {copy.eyebrow}
              </p>
              <h2
                className="max-w-4xl text-4xl font-semibold leading-tight tracking-normal text-[var(--color-text-primary)] sm:text-5xl lg:text-6xl"
                id="home-final-cta-heading"
              >
                {copy.headline}
              </h2>
              <p className="max-w-2xl text-base leading-7 text-[var(--color-text-secondary)] sm:text-lg sm:leading-8">
                {copy.supportingCopy}
              </p>
            </Stack>

            <Stack
              className="border-l border-[var(--color-border-default)] pl-5 md:mt-2"
              gap="lg"
            >
              <Cluster align="center" gap="sm">
                <ButtonLink
                  aria-label={copy.primaryCta}
                  className="w-full sm:w-auto"
                  href={`/${locale}/contact`}
                  size="large"
                >
                  {copy.primaryCta}
                </ButtonLink>
                <ButtonLink
                  aria-label={copy.secondaryCta}
                  className="w-full sm:w-auto"
                  href={`/${locale}/projects`}
                  size="large"
                  variant="secondary"
                >
                  {copy.secondaryCta}
                </ButtonLink>
              </Cluster>

              <p className="max-w-md text-sm leading-6 text-[var(--color-text-secondary)]">
                {copy.supportingNote}
              </p>
            </Stack>
          </Split>
        </div>
      </Container>
    </Section>
  );
}
