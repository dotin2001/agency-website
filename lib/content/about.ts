import type {
  CallToActionContent,
  ContentItem,
  LocalizedContent,
  SectionIntroContent,
} from "@/lib/content/types";
import type { Locale } from "@/lib/i18n/locales";

export type AboutHeroContent = SectionIntroContent &
  Readonly<{
    secondaryStatement: string;
  }>;

export type AboutValueContent = Readonly<{
  label: string;
  title: string;
  description: string;
}>;

export type AboutValuesContent = Readonly<{
  eyebrow: string;
  headline: string;
  items: readonly [
    AboutValueContent,
    AboutValueContent,
    AboutValueContent,
    AboutValueContent,
  ];
}>;

export type AboutPrinciplesContent = Readonly<{
  closingStatement: string;
  eyebrow: string;
  headline: string;
  items: readonly [ContentItem, ContentItem, ContentItem, ContentItem];
  primaryCta: CallToActionContent;
}>;

export type AboutPageContent = Readonly<{
  hero: AboutHeroContent;
  principles: AboutPrinciplesContent;
  values: AboutValuesContent;
}>;

// Temporary localized About content until the production content system is implemented.
export const ABOUT_CONTENT = {
  en: {
    hero: {
      eyebrow: "About Charm Media",
      headline: "We connect strategy, creativity, technology, and performance.",
      supportingCopy:
        "Charm Media is a multidisciplinary creative and digital agency helping brands turn complex challenges into clear, distinctive, and useful experiences.",
      secondaryStatement:
        "Our role is not simply to produce more communication. It is to create a stronger connection between business direction, brand expression, and the people a brand wants to reach.",
    },
    values: {
      eyebrow: "What Guides Us",
      headline: "Four principles shape every decision we make.",
      items: [
        {
          label: "Clarity",
          title: "Start with the right problem",
          description:
            "We create direction before execution so every decision has a clear purpose.",
        },
        {
          label: "Distinction",
          title: "Build a recognizable point of view",
          description:
            "We look for ideas and systems that make the brand meaningful and memorable.",
        },
        {
          label: "Craft",
          title: "Care about how the work is made",
          description:
            "Strategy only becomes valuable when it is translated into thoughtful and reliable execution.",
        },
        {
          label: "Impact",
          title: "Connect the work to outcomes",
          description:
            "We define success clearly and use learning to improve the work over time.",
        },
      ],
    },
    principles: {
      eyebrow: "How We Work",
      headline:
        "Collaboration stays connected from the first question to delivery.",
      items: [
        {
          title: "Work as one team",
          description:
            "Strategy, creative, technology, content, and performance contribute from the beginning.",
        },
        {
          title: "Make decisions visible",
          description:
            "Clear reasoning helps teams align, respond, and improve the work together.",
        },
        {
          title: "Build systems, not isolated outputs",
          description:
            "We create structures that remain useful beyond one campaign, page, or deliverable.",
        },
        {
          title: "Learn through execution",
          description:
            "Delivery generates insight, and insight informs the next decision.",
        },
      ],
      closingStatement:
        "Better work happens when disciplines share context, responsibility, and direction.",
      primaryCta: {
        label: "Start a Project",
        href: "/contact",
      },
    },
  },
  vi: {
    hero: {
      eyebrow: "Về Charm Media",
      headline:
        "Chúng tôi kết nối chiến lược, sáng tạo, công nghệ và hiệu quả.",
      supportingCopy:
        "Charm Media là agency sáng tạo và kỹ thuật số đa chuyên môn, giúp thương hiệu chuyển hóa những thách thức phức tạp thành các trải nghiệm rõ ràng, khác biệt và hữu ích.",
      secondaryStatement:
        "Vai trò của chúng tôi không chỉ là tạo thêm nội dung truyền thông, mà là xây dựng sự kết nối mạnh hơn giữa định hướng kinh doanh, biểu đạt thương hiệu và những người thương hiệu muốn tiếp cận.",
    },
    values: {
      eyebrow: "Điều định hướng chúng tôi",
      headline: "Bốn nguyên tắc định hình mọi quyết định trong dự án.",
      items: [
        {
          label: "Rõ ràng",
          title: "Bắt đầu từ đúng vấn đề",
          description:
            "Chúng tôi tạo định hướng trước khi triển khai để mọi quyết định đều có mục đích rõ ràng.",
        },
        {
          label: "Khác biệt",
          title: "Xây dựng một góc nhìn dễ nhận diện",
          description:
            "Chúng tôi tìm kiếm những ý tưởng và hệ thống giúp thương hiệu trở nên có ý nghĩa và đáng nhớ.",
        },
        {
          label: "Chỉn chu",
          title: "Quan tâm đến cách công việc được tạo ra",
          description:
            "Chiến lược chỉ tạo ra giá trị khi được chuyển hóa thành quá trình triển khai có chủ đích và đáng tin cậy.",
        },
        {
          label: "Tác động",
          title: "Kết nối công việc với kết quả",
          description:
            "Chúng tôi xác định rõ thành công và sử dụng quá trình học hỏi để liên tục cải thiện dự án.",
        },
      ],
    },
    principles: {
      eyebrow: "Cách chúng tôi làm việc",
      headline:
        "Sự phối hợp được duy trì từ câu hỏi đầu tiên đến giai đoạn hoàn thiện.",
      items: [
        {
          title: "Làm việc như một đội ngũ thống nhất",
          description:
            "Chiến lược, sáng tạo, công nghệ, nội dung và hiệu quả cùng tham gia ngay từ đầu.",
        },
        {
          title: "Làm rõ cơ sở của quyết định",
          description:
            "Lập luận rõ ràng giúp các đội ngũ đồng thuận, phản hồi và cùng nhau nâng cao chất lượng dự án.",
        },
        {
          title: "Xây dựng hệ thống thay vì đầu việc riêng lẻ",
          description:
            "Chúng tôi tạo ra những cấu trúc có thể tiếp tục phát huy giá trị sau một chiến dịch, trang web hoặc hạng mục bàn giao.",
        },
        {
          title: "Học hỏi trong quá trình triển khai",
          description:
            "Việc thực thi tạo ra hiểu biết mới và những hiểu biết đó định hướng cho quyết định tiếp theo.",
        },
      ],
      closingStatement:
        "Dự án tốt hơn được tạo ra khi các chuyên môn cùng chia sẻ bối cảnh, trách nhiệm và định hướng.",
      primaryCta: {
        label: "Bắt đầu dự án",
        href: "/contact",
      },
    },
  },
} as const satisfies LocalizedContent<AboutPageContent>;

export function getAboutContent(locale: Locale) {
  return ABOUT_CONTENT[locale];
}
