import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Split } from "@/components/layout/split";
import { Stack } from "@/components/layout/stack";

type Locale = "en" | "vi";

type PrivacyHeroCopy = {
  eyebrow: string;
  headline: string;
  supportingCopy: string;
};

// Temporary localized Privacy copy until qualified legal review is complete.
const privacyHeroCopy: Record<Locale, PrivacyHeroCopy> = {
  en: {
    eyebrow: "Privacy",
    headline:
      "A transparent foundation for how this website handles information.",
    supportingCopy:
      "This page describes the current behavior of the website during development. It is a temporary policy foundation, not legal advice, and must be reviewed by qualified legal counsel before launch.",
  },
  vi: {
    eyebrow: "Quyền riêng tư",
    headline: "Nền tảng minh bạch về cách website xử lý thông tin.",
    supportingCopy:
      "Trang này mô tả cách website đang hoạt động trong giai đoạn phát triển. Đây chỉ là nội dung chính sách nền tảng tạm thời, không phải tư vấn pháp lý và phải được chuyên gia pháp lý xem xét trước khi ra mắt.",
  },
};

const statusCopy: Record<Locale, string> = {
  en: "Draft foundation. Not legal advice. Must be reviewed and replaced or approved by qualified legal counsel before production launch.",
  vi: "Nền tảng dự thảo. Không phải tư vấn pháp lý. Phải được chuyên gia pháp lý xem xét và thay thế hoặc phê duyệt trước khi ra mắt production.",
};

export function PrivacyHeroSection({ locale }: Readonly<{ locale: Locale }>) {
  const copy = privacyHeroCopy[locale];

  return (
    <Section
      aria-labelledby="privacy-hero-heading"
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
              id="privacy-hero-heading"
            >
              {copy.headline}
            </h1>
            <p className="max-w-2xl text-base leading-7 text-[var(--color-text-secondary)] sm:text-lg sm:leading-8">
              {copy.supportingCopy}
            </p>
          </Stack>

          <p className="border-l border-[var(--color-border-default)] bg-[var(--color-bg-page)]/90 pl-5 text-xl font-semibold leading-tight text-[var(--color-text-primary)]">
            {statusCopy[locale]}
          </p>
        </Split>
      </Container>
    </Section>
  );
}
