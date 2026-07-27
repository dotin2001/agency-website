import { Cluster } from "@/components/layout/cluster";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Stack } from "@/components/layout/stack";
import { ButtonLink } from "@/components/ui/button-link";

type Locale = "en" | "vi";

type HeroCopy = {
  eyebrow: string;
  headline: string;
  primaryCta: string;
  secondaryCta: string;
  supportingCopy: string;
};

// Temporary localized homepage copy until the production content system is implemented.
const heroCopy: Record<Locale, HeroCopy> = {
  en: {
    eyebrow: "Creative & Digital Agency",
    headline: "We build brand experiences people remember.",
    supportingCopy:
      "We combine strategy, creativity, technology, and performance to help ambitious brands grow with clarity and distinction.",
    primaryCta: "Start a Project",
    secondaryCta: "Explore Our Work",
  },
  vi: {
    eyebrow: "Creative & Digital Agency",
    headline: "Chúng tôi kiến tạo những trải nghiệm thương hiệu đáng nhớ.",
    supportingCopy:
      "Kết hợp chiến lược, sáng tạo, công nghệ và hiệu quả để giúp thương hiệu tăng trưởng với định hướng rõ ràng và dấu ấn khác biệt.",
    primaryCta: "Bắt đầu dự án",
    secondaryCta: "Khám phá dự án",
  },
};

export function HeroSection({ locale }: Readonly<{ locale: Locale }>) {
  const copy = heroCopy[locale];

  return (
    <Section
      aria-labelledby="home-hero-heading"
      className="relative overflow-hidden bg-transparent"
      spacing="chapter"
    >
      <Container size="page">
        <div className="grid gap-12 lg:min-h-[calc(100svh-12rem)] lg:grid-cols-[minmax(0,0.95fr)_minmax(18rem,1.05fr)] lg:items-center">
          <Stack className="max-w-3xl lg:max-w-2xl" gap="lg">
            <Stack gap="md">
              <p className="w-fit border-l-2 border-[var(--color-brand-primary)] pl-3 text-sm font-medium tracking-normal text-[var(--color-text-secondary)]">
                {copy.eyebrow}
              </p>
              <h1
                className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-normal text-[var(--color-text-primary)] sm:text-6xl lg:text-7xl"
                id="home-hero-heading"
              >
                {copy.headline}
              </h1>
              <p className="max-w-2xl text-base leading-7 text-[var(--color-text-secondary)] sm:text-lg sm:leading-8">
                {copy.supportingCopy}
              </p>
            </Stack>

            <Cluster align="center" gap="sm">
              <ButtonLink
                aria-label={copy.primaryCta}
                href={`/${locale}/contact`}
                size="large"
              >
                {copy.primaryCta}
              </ButtonLink>
              <ButtonLink
                aria-label={copy.secondaryCta}
                href={`/${locale}/projects`}
                size="large"
                variant="secondary"
              >
                {copy.secondaryCta}
              </ButtonLink>
            </Cluster>
          </Stack>

          <div
            aria-hidden="true"
            className="hidden min-h-72 lg:block"
          />
        </div>
      </Container>
    </Section>
  );
}
