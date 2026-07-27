import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Stack } from "@/components/layout/stack";
import { SectionHeader } from "@/components/ui/section-header";
import { ServiceDiscipline } from "@/components/ui/service-discipline";

type Locale = "en" | "vi";

type Discipline = {
  capabilities: readonly string[];
  label: string;
  summary: string;
  title: string;
};

type ServiceDisciplinesCopy = {
  disciplines: readonly Discipline[];
  eyebrow: string;
  headline: string;
};

// Temporary localized Services copy until the production content system is implemented.
const serviceDisciplinesCopy: Record<Locale, ServiceDisciplinesCopy> = {
  en: {
    eyebrow: "Core Disciplines",
    headline: "Four disciplines. Designed to work together.",
    disciplines: [
      {
        label: "01",
        title: "Strategy & Brand",
        summary:
          "Clarify the problem, define the direction, and build the strategic foundation for stronger decisions.",
        capabilities: [
          "Brand strategy",
          "Positioning",
          "Audience and market understanding",
          "Communication planning",
          "Experience strategy",
        ],
      },
      {
        label: "02",
        title: "Creative & Content",
        summary:
          "Turn direction into distinctive ideas, visual systems, and communication people can recognize.",
        capabilities: [
          "Creative concept",
          "Campaign development",
          "Art direction",
          "Content systems",
          "Social and digital content",
        ],
      },
      {
        label: "03",
        title: "Digital Experience & Technology",
        summary:
          "Translate brand and campaign ideas into useful, responsive, and memorable digital experiences.",
        capabilities: [
          "Website strategy",
          "UX/UI design",
          "Frontend development",
          "Landing pages",
          "Interactive experiences",
        ],
      },
      {
        label: "04",
        title: "Media & Performance",
        summary:
          "Connect communication with distribution, measurement, learning, and continuous improvement.",
        capabilities: [
          "Media planning",
          "Paid social and search",
          "Performance campaigns",
          "Measurement frameworks",
          "Optimization and reporting",
        ],
      },
    ],
  },
  vi: {
    eyebrow: "Năng lực cốt lõi",
    headline: "Bốn chuyên môn. Được thiết kế để phối hợp cùng nhau.",
    disciplines: [
      {
        label: "01",
        title: "Chiến lược & Thương hiệu",
        summary:
          "Làm rõ bài toán, xác định hướng đi và xây dựng nền tảng chiến lược cho những quyết định tốt hơn.",
        capabilities: [
          "Chiến lược thương hiệu",
          "Định vị",
          "Thấu hiểu khách hàng và thị trường",
          "Hoạch định truyền thông",
          "Chiến lược trải nghiệm",
        ],
      },
      {
        label: "02",
        title: "Sáng tạo & Nội dung",
        summary:
          "Chuyển định hướng thành ý tưởng khác biệt, hệ thống hình ảnh và nội dung dễ nhận diện.",
        capabilities: [
          "Ý tưởng sáng tạo",
          "Phát triển chiến dịch",
          "Định hướng nghệ thuật",
          "Hệ thống nội dung",
          "Nội dung mạng xã hội và kỹ thuật số",
        ],
      },
      {
        label: "03",
        title: "Trải nghiệm số & Công nghệ",
        summary:
          "Chuyển hóa ý tưởng thương hiệu và chiến dịch thành những trải nghiệm số hữu ích, linh hoạt và đáng nhớ.",
        capabilities: [
          "Chiến lược website",
          "Thiết kế UX/UI",
          "Phát triển frontend",
          "Landing page",
          "Trải nghiệm tương tác",
        ],
      },
      {
        label: "04",
        title: "Media & Hiệu quả",
        summary:
          "Kết nối truyền thông với phân phối, đo lường, học hỏi và quá trình tối ưu liên tục.",
        capabilities: [
          "Hoạch định media",
          "Quảng cáo mạng xã hội và tìm kiếm",
          "Chiến dịch hiệu quả",
          "Khung đo lường",
          "Tối ưu và báo cáo",
        ],
      },
    ],
  },
};

export function ServiceDisciplinesSection({
  locale,
}: Readonly<{ locale: Locale }>) {
  const copy = serviceDisciplinesCopy[locale];

  return (
    <Section
      aria-labelledby="services-disciplines-heading"
      className="relative border-t border-[var(--color-border-default)] bg-[var(--color-bg-page)]"
      spacing="chapter"
    >
      <Container size="page">
        <Stack gap="xl">
          <SectionHeader
            className="max-w-3xl"
            eyebrow={
              <span className="border-l-2 border-[var(--color-brand-primary)] pl-3">
                {copy.eyebrow}
              </span>
            }
            headingLevel="h2"
            id="services-disciplines-heading"
            title={copy.headline}
          />

          <div className="border-b border-[var(--color-border-default)]">
            {copy.disciplines.map((discipline, index) => (
              <ServiceDiscipline
                capabilities={discipline.capabilities}
                className={index % 2 === 1 ? "md:pl-10 lg:pl-16" : undefined}
                index={index}
                key={discipline.label}
                label={discipline.label}
                summary={discipline.summary}
                title={discipline.title}
              />
            ))}
          </div>
        </Stack>
      </Container>
    </Section>
  );
}
