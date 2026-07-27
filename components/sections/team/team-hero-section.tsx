import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Split } from "@/components/layout/split";
import { Stack } from "@/components/layout/stack";

type Locale = "en" | "vi";

type TeamHeroCopy = {
  disclosure: string;
  eyebrow: string;
  headline: string;
  supportingCopy: string;
};

// Temporary localized Team copy until the production content system is implemented.
const teamHeroCopy: Record<Locale, TeamHeroCopy> = {
  en: {
    eyebrow: "Our Team",
    headline: "A multidisciplinary team connected by one shared direction.",
    supportingCopy:
      "Strategy, creativity, technology, content, and performance work together from the beginning—so ideas remain coherent from the first decision through delivery.",
    disclosure:
      "The profiles below are fictional role placeholders and must be replaced with approved team information before launch.",
  },
  vi: {
    eyebrow: "Đội ngũ",
    headline:
      "Một đội ngũ đa chuyên môn cùng kết nối bởi một định hướng chung.",
    supportingCopy:
      "Chiến lược, sáng tạo, công nghệ, nội dung và hiệu quả cùng phối hợp ngay từ đầu để ý tưởng luôn nhất quán từ quyết định đầu tiên đến khi hoàn thiện.",
    disclosure:
      "Các hồ sơ bên dưới chỉ là vị trí minh họa và phải được thay thế bằng thông tin đội ngũ đã được phê duyệt trước khi ra mắt.",
  },
};

export function TeamHeroSection({ locale }: Readonly<{ locale: Locale }>) {
  const copy = teamHeroCopy[locale];

  return (
    <Section
      aria-labelledby="team-hero-heading"
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
              {copy.eyebrow}
            </p>
            <h1
              className="max-w-5xl text-5xl font-semibold leading-[1.04] tracking-normal text-[var(--color-text-primary)] sm:text-6xl lg:text-7xl"
              id="team-hero-heading"
            >
              {copy.headline}
            </h1>
            <p className="max-w-2xl text-base leading-7 text-[var(--color-text-secondary)] sm:text-lg sm:leading-8">
              {copy.supportingCopy}
            </p>
          </Stack>

          <p className="border-l border-[var(--color-border-default)] bg-[var(--color-bg-page)]/90 pl-5 text-sm leading-6 text-[var(--color-text-secondary)]">
            {copy.disclosure}
          </p>
        </Split>
      </Container>
    </Section>
  );
}
