import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Split } from "@/components/layout/split";
import { Stack } from "@/components/layout/stack";
import { SectionHeader } from "@/components/ui/section-header";
import { TestimonialCard } from "@/components/ui/testimonial-card";

type Locale = "en" | "vi";

type LocalizedTestimonial = {
  attribution: string;
  quote: string;
  role: string;
};

type PlaceholderTestimonial = {
  content: Record<Locale, LocalizedTestimonial>;
  id: string;
};

type TestimonialsCopy = {
  disclosure: string;
  eyebrow: string;
  headline: string;
  supportingCopy: string;
};

// Temporary localized section copy until the production content system is implemented.
const testimonialsCopy: Record<Locale, TestimonialsCopy> = {
  en: {
    eyebrow: "Client Perspective",
    headline: "Strong partnerships create stronger work.",
    supportingCopy:
      "The best outcomes come from shared clarity, honest collaboration, and teams that stay connected from the first question to the final delivery.",
    disclosure:
      "The statements below are temporary content examples and must be replaced with approved client testimonials before launch.",
  },
  vi: {
    eyebrow: "Góc nhìn khách hàng",
    headline: "Quan hệ hợp tác tốt tạo nên những dự án tốt hơn.",
    supportingCopy:
      "Kết quả tốt nhất đến từ định hướng chung, sự phối hợp thẳng thắn và các đội ngũ luôn kết nối từ câu hỏi đầu tiên đến giai đoạn hoàn thiện.",
    disclosure:
      "Các nhận xét bên dưới chỉ là nội dung minh họa và phải được thay thế bằng testimonial đã được khách hàng phê duyệt trước khi ra mắt.",
  },
};

// Non-verified placeholders only; these must never ship as real testimonials.
const placeholderTestimonials: Array<PlaceholderTestimonial> = [
  {
    id: "brand-direction",
    content: {
      en: {
        quote:
          "The team helped us move from scattered ideas to a clearer brand direction that everyone could understand and use.",
        attribution: "Example client perspective",
        role: "Brand leadership",
      },
      vi: {
        quote:
          "Đội ngũ đã giúp chúng tôi chuyển từ những ý tưởng rời rạc sang một định hướng thương hiệu rõ ràng mà mọi người đều có thể hiểu và áp dụng.",
        attribution: "Góc nhìn khách hàng minh họa",
        role: "Lãnh đạo thương hiệu",
      },
    },
  },
  {
    id: "collaboration",
    content: {
      en: {
        quote:
          "Strategy, creative, and digital execution felt connected instead of being handled as separate pieces of work.",
        attribution: "Example client perspective",
        role: "Marketing leadership",
      },
      vi: {
        quote:
          "Chiến lược, sáng tạo và triển khai số được kết nối như một thể thống nhất thay vì những phần việc riêng biệt.",
        attribution: "Góc nhìn khách hàng minh họa",
        role: "Lãnh đạo marketing",
      },
    },
  },
  {
    id: "delivery",
    content: {
      en: {
        quote:
          "The process gave our team enough structure to make decisions while still leaving room for better ideas to emerge.",
        attribution: "Example client perspective",
        role: "Project leadership",
      },
      vi: {
        quote:
          "Quy trình mang lại đủ cấu trúc để đội ngũ đưa ra quyết định, đồng thời vẫn tạo không gian cho những ý tưởng tốt hơn xuất hiện.",
        attribution: "Góc nhìn khách hàng minh họa",
        role: "Quản lý dự án",
      },
    },
  },
];

export function TestimonialsSection({
  locale,
}: Readonly<{ locale: Locale }>) {
  const copy = testimonialsCopy[locale];
  const [primaryTestimonial, ...supportingTestimonials] =
    placeholderTestimonials;

  return (
    <Section
      aria-labelledby="home-testimonials-heading"
      className="relative border-t border-[var(--color-border-default)] bg-[var(--color-bg-page)]"
      spacing="chapter"
    >
      <Container size="page">
        <Stack gap="xl">
          <Split gap="xl" variant="media-content">
            <SectionHeader
              className="max-w-3xl"
              description={copy.supportingCopy}
              eyebrow={
                <span className="border-l-2 border-[var(--color-brand-primary)] pl-3">
                  {copy.eyebrow}
                </span>
              }
              headingLevel="h2"
              id="home-testimonials-heading"
              title={copy.headline}
            />

            <p className="border-l border-[var(--color-border-default)] pl-5 text-sm leading-6 text-[var(--color-text-secondary)]">
              {copy.disclosure}
            </p>
          </Split>

          <div className="grid gap-6 lg:grid-cols-12 lg:items-stretch">
            <TestimonialCard
              attribution={primaryTestimonial.content[locale].attribution}
              className="lg:col-span-7"
              index={0}
              quote={primaryTestimonial.content[locale].quote}
              role={primaryTestimonial.content[locale].role}
              variant="primary"
            />

            <div className="grid gap-6 md:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
              {supportingTestimonials.map((testimonial, index) => {
                const content = testimonial.content[locale];

                return (
                  <TestimonialCard
                    attribution={content.attribution}
                    index={index + 1}
                    key={testimonial.id}
                    quote={content.quote}
                    role={content.role}
                    variant="supporting"
                  />
                );
              })}
            </div>
          </div>
        </Stack>
      </Container>
    </Section>
  );
}
