import type {
  CallToActionContent,
  ContentItem,
  LocalizedContent,
  SectionIntroContent,
} from "@/lib/content/types";
import type { Locale } from "@/lib/i18n/locales";

type CapabilityList = readonly [string, string, string, string, string];

export type ServiceDisciplineContent = Readonly<{
  capabilities: CapabilityList;
  label: string;
  summary: string;
  title: string;
}>;

export type ServicesHeroContent = SectionIntroContent &
  Readonly<{
    secondaryStatement: string;
  }>;

export type ServiceDisciplinesContent = Readonly<{
  disciplines: readonly [
    ServiceDisciplineContent,
    ServiceDisciplineContent,
    ServiceDisciplineContent,
    ServiceDisciplineContent,
  ];
  eyebrow: string;
  headline: string;
}>;

export type ServicesEngagementContent = SectionIntroContent &
  Readonly<{
    closingStatement: string;
    models: readonly [ContentItem, ContentItem, ContentItem];
    primaryCta: CallToActionContent;
    secondaryCta: CallToActionContent;
  }>;

export type ServicesPageContent = Readonly<{
  disciplines: ServiceDisciplinesContent;
  engagement: ServicesEngagementContent;
  hero: ServicesHeroContent;
}>;

// Temporary localized Services content until the production content system is implemented.
export const SERVICES_CONTENT = {
  en: {
    hero: {
      eyebrow: "Services",
      headline: "Connected capabilities for complex brand challenges.",
      supportingCopy:
        "We bring strategy, creativity, technology, content, and performance into one working system—so every discipline contributes to the same direction.",
      secondaryStatement:
        "Engage one capability or build an integrated team around the challenge.",
    },
    disciplines: {
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
    engagement: {
      eyebrow: "How We Engage",
      headline: "Start with the challenge, not the service menu.",
      supportingCopy:
        "Some challenges require one focused capability. Others need an integrated team working across strategy, creative, technology, content, and performance.",
      models: [
        {
          title: "Focused Engagement",
          description:
            "A defined team and scope for one clear strategic, creative, digital, or performance need.",
        },
        {
          title: "Integrated Project",
          description:
            "Multiple disciplines working together from discovery through delivery.",
        },
        {
          title: "Ongoing Partnership",
          description:
            "A connected team supporting continuous campaigns, content, digital evolution, and learning.",
        },
      ],
      closingStatement:
        "The right model depends on the challenge, timeline, internal team, and level of integration required.",
      primaryCta: {
        label: "Discuss Your Project",
        href: "/contact",
      },
      secondaryCta: {
        label: "View Selected Work",
        href: "/projects",
      },
    },
  },
  vi: {
    hero: {
      eyebrow: "Dịch vụ",
      headline:
        "Hệ năng lực kết nối cho những thách thức thương hiệu phức tạp.",
      supportingCopy:
        "Chúng tôi kết nối chiến lược, sáng tạo, công nghệ, nội dung và hiệu quả thành một hệ thống làm việc thống nhất để mọi chuyên môn cùng đóng góp cho một định hướng chung.",
      secondaryStatement:
        "Doanh nghiệp có thể lựa chọn một năng lực riêng hoặc xây dựng đội ngũ tích hợp quanh bài toán cần giải quyết.",
    },
    disciplines: {
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
    engagement: {
      eyebrow: "Cách chúng tôi hợp tác",
      headline: "Bắt đầu từ bài toán, không phải danh sách dịch vụ.",
      supportingCopy:
        "Một số thách thức chỉ cần một năng lực tập trung. Những bài toán khác cần đội ngũ tích hợp phối hợp giữa chiến lược, sáng tạo, công nghệ, nội dung và hiệu quả.",
      models: [
        {
          title: "Hợp tác tập trung",
          description:
            "Một đội ngũ và phạm vi rõ ràng cho nhu cầu cụ thể về chiến lược, sáng tạo, kỹ thuật số hoặc hiệu quả.",
        },
        {
          title: "Dự án tích hợp",
          description:
            "Nhiều chuyên môn cùng phối hợp từ giai đoạn khám phá đến khi hoàn thiện.",
        },
        {
          title: "Đồng hành dài hạn",
          description:
            "Một đội ngũ kết nối hỗ trợ chiến dịch, nội dung, phát triển trải nghiệm số và quá trình học hỏi liên tục.",
        },
      ],
      closingStatement:
        "Mô hình phù hợp phụ thuộc vào bài toán, thời gian, đội ngũ nội bộ và mức độ tích hợp cần thiết.",
      primaryCta: {
        label: "Trao đổi về dự án",
        href: "/contact",
      },
      secondaryCta: {
        label: "Xem dự án nổi bật",
        href: "/projects",
      },
    },
  },
} as const satisfies LocalizedContent<ServicesPageContent>;

export function getServicesContent(locale: Locale) {
  return SERVICES_CONTENT[locale];
}
