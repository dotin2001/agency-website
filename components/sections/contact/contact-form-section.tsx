import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Split } from "@/components/layout/split";
import { Stack } from "@/components/layout/stack";
import { ProjectInquiryForm } from "@/components/forms/project-inquiry-form";

type Locale = "en" | "vi";

type ContactFormCopy = {
  eyebrow: string;
  headline: string;
  supportingCopy: string;
};

// Temporary localized form section copy until the production content system is implemented.
const contactFormCopy: Record<Locale, ContactFormCopy> = {
  en: {
    eyebrow: "Project Inquiry",
    headline: "Start with the essentials.",
    supportingCopy:
      "This form is currently a front-end foundation and does not submit data. A secure delivery service will be connected before launch.",
  },
  vi: {
    eyebrow: "Thông tin dự án",
    headline: "Bắt đầu từ những thông tin cần thiết.",
    supportingCopy:
      "Biểu mẫu hiện chỉ là phần giao diện nền tảng và chưa gửi dữ liệu. Hệ thống tiếp nhận an toàn sẽ được kết nối trước khi ra mắt.",
  },
};

export function ContactFormSection({ locale }: Readonly<{ locale: Locale }>) {
  const copy = contactFormCopy[locale];

  return (
    <Section
      aria-labelledby="contact-form-heading"
      className="relative border-t border-[var(--color-border-default)] bg-[var(--color-bg-page)]"
      spacing="chapter"
    >
      <Container size="page">
        <Split gap="xl" variant="content-media">
          <Stack className="max-w-3xl" gap="md">
            <p className="w-fit border-l-2 border-[var(--color-brand-primary)] pl-3 text-sm font-medium tracking-normal text-[var(--color-text-secondary)]">
              {copy.eyebrow}
            </p>
            <h2
              className="max-w-3xl text-4xl font-semibold leading-tight tracking-normal text-[var(--color-text-primary)] sm:text-5xl"
              id="contact-form-heading"
            >
              {copy.headline}
            </h2>
            <p className="max-w-2xl text-base leading-7 text-[var(--color-text-secondary)] sm:text-lg sm:leading-8">
              {copy.supportingCopy}
            </p>
          </Stack>

          <ProjectInquiryForm locale={locale} />
        </Split>
      </Container>
    </Section>
  );
}
