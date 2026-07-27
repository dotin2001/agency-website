import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Split } from "@/components/layout/split";
import { Stack } from "@/components/layout/stack";

type Locale = "en" | "vi";

type ServicesHeroCopy = {
  eyebrow: string;
  headline: string;
  secondaryStatement: string;
  supportingCopy: string;
};

// Temporary localized Services copy until the production content system is implemented.
const servicesHeroCopy: Record<Locale, ServicesHeroCopy> = {
  en: {
    eyebrow: "Services",
    headline: "Connected capabilities for complex brand challenges.",
    supportingCopy:
      "We bring strategy, creativity, technology, content, and performance into one working system—so every discipline contributes to the same direction.",
    secondaryStatement:
      "Engage one capability or build an integrated team around the challenge.",
  },
  vi: {
    eyebrow: "Dịch vụ",
    headline:
      "Hệ năng lực kết nối cho những thách thức thương hiệu phức tạp.",
    supportingCopy:
      "Chúng tôi kết nối chiến lược, sáng tạo, công nghệ, nội dung và hiệu quả thành một hệ thống làm việc thống nhất để mọi chuyên môn cùng đóng góp cho một định hướng chung.",
    secondaryStatement:
      "Doanh nghiệp có thể lựa chọn một năng lực riêng hoặc xây dựng đội ngũ tích hợp quanh bài toán cần giải quyết.",
  },
};

export function ServicesHeroSection({ locale }: Readonly<{ locale: Locale }>) {
  const copy = servicesHeroCopy[locale];

  return (
    <Section
      aria-labelledby="services-hero-heading"
      className="relative overflow-hidden bg-transparent"
      spacing="chapter"
    >
      <Container size="page">
        <Split
          className="lg:grid-cols-[minmax(0,0.85fr)_minmax(14rem,0.65fr)] lg:items-end"
          gap="xl"
        >
          <Stack className="max-w-4xl" gap="md">
            <p className="w-fit border-l-2 border-[var(--color-brand-primary)] pl-3 text-sm font-medium tracking-normal text-[var(--color-text-secondary)]">
              {copy.eyebrow}
            </p>
            <h1
              className="max-w-5xl text-5xl font-semibold leading-[1.04] tracking-normal text-[var(--color-text-primary)] sm:text-6xl lg:text-7xl"
              id="services-hero-heading"
            >
              {copy.headline}
            </h1>
            <p className="max-w-2xl text-base leading-7 text-[var(--color-text-secondary)] sm:text-lg sm:leading-8">
              {copy.supportingCopy}
            </p>
          </Stack>

          <p className="border-l border-[var(--color-border-default)] bg-[var(--color-bg-page)]/90 pl-5 text-xl font-semibold leading-tight tracking-normal text-[var(--color-text-primary)]">
            {copy.secondaryStatement}
          </p>
        </Split>
      </Container>
    </Section>
  );
}
