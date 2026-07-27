import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Split } from "@/components/layout/split";
import { Stack } from "@/components/layout/stack";

type Locale = "en" | "vi";

type ExpectationStep = {
  description: string;
  title: string;
};

type ContactExpectationsCopy = {
  alternativeCopy: string;
  alternativeHeading: string;
  eyebrow: string;
  headline: string;
  steps: readonly ExpectationStep[];
};

// Temporary localized expectations copy until approved contact information is available.
const contactExpectationsCopy: Record<Locale, ContactExpectationsCopy> = {
  en: {
    eyebrow: "What Happens Next",
    headline: "A clear first conversation before any proposal.",
    steps: [
      {
        title: "We review the context",
        description:
          "We look at the challenge, priorities, timeline, internal team, and the information already available.",
      },
      {
        title: "We clarify the right starting point",
        description:
          "A short conversation helps determine whether the need is strategic, creative, digital, performance-focused, or integrated.",
      },
      {
        title: "We define the next step",
        description:
          "When there is a suitable fit, the next step may be a focused workshop, discovery phase, or scoped proposal.",
      },
    ],
    alternativeHeading: "Prefer another way to begin?",
    alternativeCopy:
      "Approved email, phone, office, and booking information will be added before launch. Until then, this page intentionally avoids publishing placeholder contact details.",
  },
  vi: {
    eyebrow: "Bước tiếp theo",
    headline: "Một cuộc trao đổi rõ ràng trước khi xây dựng đề xuất.",
    steps: [
      {
        title: "Chúng tôi xem xét bối cảnh",
        description:
          "Chúng tôi tìm hiểu bài toán, ưu tiên, thời gian, đội ngũ nội bộ và những thông tin đã có.",
      },
      {
        title: "Chúng tôi làm rõ điểm bắt đầu phù hợp",
        description:
          "Một cuộc trao đổi ngắn giúp xác định nhu cầu thuộc chiến lược, sáng tạo, kỹ thuật số, hiệu quả hay cần mô hình tích hợp.",
      },
      {
        title: "Chúng tôi xác định bước tiếp theo",
        description:
          "Khi hai bên phù hợp, bước tiếp theo có thể là workshop tập trung, giai đoạn khám phá hoặc một đề xuất phạm vi công việc.",
      },
    ],
    alternativeHeading: "Bạn muốn bắt đầu theo cách khác?",
    alternativeCopy:
      "Email, số điện thoại, văn phòng và liên kết đặt lịch đã được phê duyệt sẽ được bổ sung trước khi ra mắt. Hiện tại trang này chủ động không hiển thị thông tin liên hệ tạm thời.",
  },
};

export function ContactExpectationsSection({
  locale,
}: Readonly<{ locale: Locale }>) {
  const copy = contactExpectationsCopy[locale];

  return (
    <Section
      aria-labelledby="contact-expectations-heading"
      className="relative border-t border-[var(--color-border-default)] bg-[var(--color-bg-section)]"
      spacing="chapter"
    >
      <Container size="page">
        <Stack gap="xl">
          <Split className="lg:items-end" gap="xl" variant="content-media">
            <Stack className="max-w-3xl" gap="md">
              <p className="w-fit border-l-2 border-[var(--color-brand-primary)] pl-3 text-sm font-medium tracking-normal text-[var(--color-text-secondary)]">
                {copy.eyebrow}
              </p>
              <h2
                className="max-w-3xl text-4xl font-semibold leading-tight tracking-normal text-[var(--color-text-primary)] sm:text-5xl"
                id="contact-expectations-heading"
              >
                {copy.headline}
              </h2>
            </Stack>

            <div className="border-l border-[var(--color-border-default)] pl-5">
              <h3 className="text-2xl font-semibold tracking-normal text-[var(--color-text-primary)]">
                {copy.alternativeHeading}
              </h3>
              <p className="mt-4 text-sm leading-6 text-[var(--color-text-secondary)]">
                {copy.alternativeCopy}
              </p>
            </div>
          </Split>

          <div className="grid gap-0 border-y border-[var(--color-border-default)] md:grid-cols-3">
            {copy.steps.map((step, index) => (
              <article
                className="border-b border-[var(--color-border-default)] py-6 md:border-b-0 md:border-r md:px-6 md:last:border-r-0"
                key={step.title}
              >
                <Stack gap="sm">
                  <p className="text-sm font-medium text-[var(--color-brand-primary)]">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="text-2xl font-semibold tracking-normal text-[var(--color-text-primary)]">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-6 text-[var(--color-text-secondary)]">
                    {step.description}
                  </p>
                </Stack>
              </article>
            ))}
          </div>
        </Stack>
      </Container>
    </Section>
  );
}
