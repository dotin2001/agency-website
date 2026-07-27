import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Split } from "@/components/layout/split";
import { Stack } from "@/components/layout/stack";

type Locale = "en" | "vi";

type ContactHeroCopy = {
  eyebrow: string;
  headline: string;
  secondaryStatement: string;
  supportingCopy: string;
};

// Temporary localized Contact copy until the production content system is implemented.
const contactHeroCopy: Record<Locale, ContactHeroCopy> = {
  en: {
    eyebrow: "Contact",
    headline: "Tell us what you are trying to change.",
    supportingCopy:
      "Share the challenge, the context, and where the project needs to go. We will use that information to understand whether we are the right team and how the conversation should begin.",
    secondaryStatement:
      "You do not need a finished brief. A clear problem, priority, or ambition is enough to start.",
  },
  vi: {
    eyebrow: "Liên hệ",
    headline: "Hãy chia sẻ điều bạn đang muốn thay đổi.",
    supportingCopy:
      "Hãy cho chúng tôi biết bài toán, bối cảnh và hướng mà dự án cần tiến tới. Những thông tin này giúp chúng tôi hiểu liệu mình có phải là đội ngũ phù hợp và cuộc trao đổi nên bắt đầu như thế nào.",
    secondaryStatement:
      "Bạn không cần chuẩn bị một bản brief hoàn chỉnh. Một vấn đề, ưu tiên hoặc tham vọng rõ ràng là đủ để bắt đầu.",
  },
};

export function ContactHeroSection({ locale }: Readonly<{ locale: Locale }>) {
  const copy = contactHeroCopy[locale];

  return (
    <Section
      aria-labelledby="contact-hero-heading"
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
              id="contact-hero-heading"
            >
              {copy.headline}
            </h1>
            <p className="max-w-2xl text-base leading-7 text-[var(--color-text-secondary)] sm:text-lg sm:leading-8">
              {copy.supportingCopy}
            </p>
          </Stack>

          <p className="border-l border-[var(--color-border-default)] bg-[var(--color-bg-page)]/90 pl-5 text-xl font-semibold leading-tight text-[var(--color-text-primary)]">
            {copy.secondaryStatement}
          </p>
        </Split>
      </Container>
    </Section>
  );
}
