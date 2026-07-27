import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Split } from "@/components/layout/split";
import { Stack } from "@/components/layout/stack";

type Locale = "en" | "vi";

type AboutHeroCopy = {
  eyebrow: string;
  headline: string;
  secondaryStatement: string;
  supportingCopy: string;
};

// Temporary localized About copy until the production content system is implemented.
const aboutHeroCopy: Record<Locale, AboutHeroCopy> = {
  en: {
    eyebrow: "About Charm Media",
    headline: "We connect strategy, creativity, technology, and performance.",
    supportingCopy:
      "Charm Media is a multidisciplinary creative and digital agency helping brands turn complex challenges into clear, distinctive, and useful experiences.",
    secondaryStatement:
      "Our role is not simply to produce more communication. It is to create a stronger connection between business direction, brand expression, and the people a brand wants to reach.",
  },
  vi: {
    eyebrow: "Về Charm Media",
    headline:
      "Chúng tôi kết nối chiến lược, sáng tạo, công nghệ và hiệu quả.",
    supportingCopy:
      "Charm Media là agency sáng tạo và kỹ thuật số đa chuyên môn, giúp thương hiệu chuyển hóa những thách thức phức tạp thành các trải nghiệm rõ ràng, khác biệt và hữu ích.",
    secondaryStatement:
      "Vai trò của chúng tôi không chỉ là tạo thêm nội dung truyền thông, mà là xây dựng sự kết nối mạnh hơn giữa định hướng kinh doanh, biểu đạt thương hiệu và những người thương hiệu muốn tiếp cận.",
  },
};

export function AboutHeroSection({ locale }: Readonly<{ locale: Locale }>) {
  const copy = aboutHeroCopy[locale];

  return (
    <Section
      aria-labelledby="about-hero-heading"
      className="relative overflow-hidden bg-transparent"
      spacing="chapter"
    >
      <Container size="page">
        <Split
          className="lg:grid-cols-[minmax(0,0.95fr)_minmax(16rem,0.75fr)] lg:items-end"
          gap="xl"
        >
          <Stack className="max-w-4xl" gap="md">
            <p className="w-fit border-l-2 border-[var(--color-brand-primary)] pl-3 text-sm font-medium tracking-normal text-[var(--color-text-secondary)]">
              {copy.eyebrow}
            </p>
            <h1
              className="max-w-5xl text-5xl font-semibold leading-[1.04] tracking-normal text-[var(--color-text-primary)] sm:text-6xl lg:text-7xl"
              id="about-hero-heading"
            >
              {copy.headline}
            </h1>
            <p className="max-w-2xl text-base leading-7 text-[var(--color-text-secondary)] sm:text-lg sm:leading-8">
              {copy.supportingCopy}
            </p>
          </Stack>

          <p className="border-l border-[var(--color-border-default)] bg-[var(--color-bg-page)]/90 pl-5 text-lg font-medium leading-8 text-[var(--color-text-primary)]">
            {copy.secondaryStatement}
          </p>
        </Split>
      </Container>
    </Section>
  );
}
