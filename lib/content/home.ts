import type {
  CallToActionContent,
  ContentItem,
  LocalizedContent,
  SectionIntroContent,
} from "@/lib/content/types";
import type { Locale } from "@/lib/i18n/locales";

export type HomeHeroContent = SectionIntroContent &
  Readonly<{
    primaryCta: CallToActionContent;
    secondaryCta: CallToActionContent;
  }>;

export type HomeChallengeContent = SectionIntroContent &
  Readonly<{
    items: readonly [ContentItem, ContentItem, ContentItem, ContentItem];
  }>;

export type HomeTransformationPillarContent = Readonly<{
  label: string;
  title: string;
  description: string;
}>;

export type HomeTransformationContent = SectionIntroContent &
  Readonly<{
    closingStatement: string;
    pillars: readonly [
      HomeTransformationPillarContent,
      HomeTransformationPillarContent,
      HomeTransformationPillarContent,
      HomeTransformationPillarContent,
    ];
  }>;

export type HomeProjectContent = Readonly<{
  caseStudyLabel: string;
  client: string;
  industry: string;
  services: string;
  slug: string;
  statement: string;
  title: string;
}>;

export type HomeSelectedProjectsContent = SectionIntroContent &
  Readonly<{
    projects: readonly [
      HomeProjectContent,
      HomeProjectContent,
      HomeProjectContent,
    ];
    sectionCta: CallToActionContent;
  }>;

export type HomeTeamMemberContent = Readonly<{
  description: string;
  discipline: string;
  displayName: string;
  identifier: string;
}>;

export type HomeTeamContent = SectionIntroContent &
  Readonly<{
    collaborationStatement: string;
    roles: readonly [
      HomeTeamMemberContent,
      HomeTeamMemberContent,
      HomeTeamMemberContent,
      HomeTeamMemberContent,
    ];
    sectionCta: CallToActionContent;
  }>;

export type HomeTestimonialContent = Readonly<{
  attribution: string;
  identifier: string;
  quote: string;
  role: string;
}>;

export type HomeTestimonialsContent = SectionIntroContent &
  Readonly<{
    disclosure: string;
    testimonials: readonly [
      HomeTestimonialContent,
      HomeTestimonialContent,
      HomeTestimonialContent,
    ];
  }>;

export type HomeFinalCtaContent = SectionIntroContent &
  Readonly<{
    primaryCta: CallToActionContent;
    secondaryCta: CallToActionContent;
    supportingNote: string;
  }>;

export type HomePageContent = Readonly<{
  challenge: HomeChallengeContent;
  finalCta: HomeFinalCtaContent;
  hero: HomeHeroContent;
  selectedProjects: HomeSelectedProjectsContent;
  team: HomeTeamContent;
  testimonials: HomeTestimonialsContent;
  transformation: HomeTransformationContent;
}>;

// Temporary localized homepage content and placeholders until the production content system is implemented.
export const HOME_CONTENT = {
  en: {
    hero: {
      eyebrow: "Creative & Digital Agency",
      headline: "We build brand experiences people remember.",
      supportingCopy:
        "We combine strategy, creativity, technology, and performance to help ambitious brands grow with clarity and distinction.",
      primaryCta: {
        label: "Start a Project",
        href: "/contact",
      },
      secondaryCta: {
        label: "Explore Our Work",
        href: "/projects",
      },
    },
    challenge: {
      eyebrow: "The Challenge",
      headline:
        "Brands do not need more noise. They need clearer meaning.",
      supportingCopy:
        "Communication often becomes fragmented across campaigns, channels, and digital touchpoints. The result is more output, but less distinction, consistency, and measurable purpose.",
      items: [
        {
          title: "Generic communication",
          description:
            "Brand messages become interchangeable and difficult to remember.",
        },
        {
          title: "Disconnected campaigns",
          description:
            "Creative, media, content, and digital execution move in different directions.",
        },
        {
          title: "Weak digital experiences",
          description:
            "Websites and digital touchpoints feel functional, but not distinctive.",
        },
        {
          title: "Activity without impact",
          description:
            "Teams produce more assets without a clear connection to business outcomes.",
        },
      ],
    },
    transformation: {
      eyebrow: "The Transformation",
      headline: "From fragmented activity to one connected brand system.",
      supportingCopy:
        "We align strategic direction, creative expression, digital execution, and measurable performance so every touchpoint contributes to the same business story.",
      pillars: [
        {
          label: "Strategy",
          title: "Strategic clarity",
          description:
            "Define the problem, audience, priorities, and direction before execution begins.",
        },
        {
          label: "Creativity",
          title: "Creative distinction",
          description:
            "Build ideas and visual systems that give the brand a recognizable point of view.",
        },
        {
          label: "Technology",
          title: "Digital craftsmanship",
          description:
            "Turn concepts into responsive, useful, and memorable digital experiences.",
        },
        {
          label: "Performance",
          title: "Measurable impact",
          description:
            "Connect creative decisions to clear objectives, learning, and business outcomes.",
        },
      ],
      closingStatement:
        "One direction. Multiple disciplines. A more coherent brand experience.",
    },
    selectedProjects: {
      eyebrow: "Selected Projects",
      headline:
        "Work built to create distinction and move the business forward.",
      supportingCopy:
        "A selection of projects where strategy, creativity, technology, and performance were brought together into one coherent experience.",
      sectionCta: {
        label: "View All Projects",
        href: "/projects",
      },
      projects: [
        {
          slug: "brand-transformation",
          title: "Brand Transformation",
          client: "Premium Consumer Brand",
          industry: "Consumer",
          services: "Strategy, Branding, Digital Experience",
          statement:
            "A unified brand system designed to create clarity across every customer touchpoint.",
          caseStudyLabel: "View Case Study",
        },
        {
          slug: "integrated-campaign",
          title: "Integrated Campaign",
          client: "Real Estate Brand",
          industry: "Real Estate",
          services: "Creative Campaign, Content, Media",
          statement:
            "One campaign direction translated consistently across content, digital, and media.",
          caseStudyLabel: "View Case Study",
        },
        {
          slug: "digital-experience",
          title: "Digital Experience",
          client: "Hospitality Brand",
          industry: "Hospitality",
          services: "Experience Strategy, UX/UI, Development",
          statement:
            "A responsive digital experience shaped around clear storytelling and user intent.",
          caseStudyLabel: "View Case Study",
        },
      ],
    },
    team: {
      eyebrow: "The People Behind the Work",
      headline: "Different disciplines. One shared direction.",
      supportingCopy:
        "Strategists, creatives, developers, content specialists, and performance teams work together from the beginning—so ideas remain coherent from direction to delivery.",
      collaborationStatement:
        "We do not hand work from one department to another. We build the solution together.",
      sectionCta: {
        label: "Meet the Team",
        href: "/team",
      },
      roles: [
        {
          identifier: "strategy",
          displayName: "Strategy Lead",
          discipline: "Strategy & Brand",
          description:
            "Connects business priorities, audience understanding, and brand direction.",
        },
        {
          identifier: "creative",
          displayName: "Creative Lead",
          discipline: "Creative & Design",
          description:
            "Shapes the ideas and visual systems that give the work distinction.",
        },
        {
          identifier: "technology",
          displayName: "Technology Lead",
          discipline: "Digital & Development",
          description:
            "Turns creative direction into responsive and reliable digital experiences.",
        },
        {
          identifier: "growth",
          displayName: "Growth Lead",
          discipline: "Content & Performance",
          description:
            "Connects communication, distribution, learning, and measurable outcomes.",
        },
      ],
    },
    testimonials: {
      eyebrow: "Client Perspective",
      headline: "Strong partnerships create stronger work.",
      supportingCopy:
        "The best outcomes come from shared clarity, honest collaboration, and teams that stay connected from the first question to the final delivery.",
      disclosure:
        "The statements below are temporary content examples and must be replaced with approved client testimonials before launch.",
      testimonials: [
        {
          identifier: "brand-direction",
          quote:
            "The team helped us move from scattered ideas to a clearer brand direction that everyone could understand and use.",
          attribution: "Example client perspective",
          role: "Brand leadership",
        },
        {
          identifier: "collaboration",
          quote:
            "Strategy, creative, and digital execution felt connected instead of being handled as separate pieces of work.",
          attribution: "Example client perspective",
          role: "Marketing leadership",
        },
        {
          identifier: "delivery",
          quote:
            "The process gave our team enough structure to make decisions while still leaving room for better ideas to emerge.",
          attribution: "Example client perspective",
          role: "Project leadership",
        },
      ],
    },
    finalCta: {
      eyebrow: "Start the Next Chapter",
      headline: "Have an ambitious idea? Let’s build what comes next.",
      supportingCopy:
        "Whether you are defining a new brand, launching a campaign, or creating a stronger digital experience, we can help turn the direction into meaningful work.",
      primaryCta: {
        label: "Start a Project",
        href: "/contact",
      },
      secondaryCta: {
        label: "Explore Our Work",
        href: "/projects",
      },
      supportingNote:
        "Strategy, creativity, technology, and performance—connected from the beginning.",
    },
  },
  vi: {
    hero: {
      eyebrow: "Creative & Digital Agency",
      headline: "Chúng tôi kiến tạo những trải nghiệm thương hiệu đáng nhớ.",
      supportingCopy:
        "Kết hợp chiến lược, sáng tạo, công nghệ và hiệu quả để giúp thương hiệu tăng trưởng với định hướng rõ ràng và dấu ấn khác biệt.",
      primaryCta: {
        label: "Bắt đầu dự án",
        href: "/contact",
      },
      secondaryCta: {
        label: "Khám phá dự án",
        href: "/projects",
      },
    },
    challenge: {
      eyebrow: "Thách thức",
      headline:
        "Thương hiệu không cần thêm nhiễu. Thương hiệu cần ý nghĩa rõ ràng hơn.",
      supportingCopy:
        "Truyền thông thường bị phân mảnh giữa chiến dịch, kênh và các điểm chạm số. Kết quả là nhiều đầu việc hơn nhưng ít khác biệt, thiếu nhất quán và khó chứng minh hiệu quả.",
      items: [
        {
          title: "Thông điệp đại trà",
          description:
            "Nội dung thương hiệu dễ trở nên giống nhau và khó tạo dấu ấn.",
        },
        {
          title: "Chiến dịch rời rạc",
          description:
            "Sáng tạo, media, nội dung và triển khai số đi theo những hướng khác nhau.",
        },
        {
          title: "Trải nghiệm số thiếu khác biệt",
          description:
            "Website và các điểm chạm số vẫn hoạt động, nhưng chưa đủ sức ghi nhớ.",
        },
        {
          title: "Nhiều hoạt động, ít tác động",
          description:
            "Đội ngũ tạo ra nhiều tài sản truyền thông nhưng thiếu liên kết rõ ràng với mục tiêu kinh doanh.",
        },
      ],
    },
    transformation: {
      eyebrow: "Chuyển hóa",
      headline:
        "Từ những hoạt động rời rạc thành một hệ thống thương hiệu thống nhất.",
      supportingCopy:
        "Chúng tôi đồng bộ định hướng chiến lược, biểu đạt sáng tạo, triển khai số và hiệu quả đo lường để mọi điểm chạm cùng đóng góp cho một câu chuyện kinh doanh nhất quán.",
      pillars: [
        {
          label: "Chiến lược",
          title: "Định hướng rõ ràng",
          description:
            "Xác định đúng vấn đề, đối tượng, ưu tiên và hướng đi trước khi bắt đầu triển khai.",
        },
        {
          label: "Sáng tạo",
          title: "Dấu ấn khác biệt",
          description:
            "Xây dựng ý tưởng và hệ thống hình ảnh giúp thương hiệu có góc nhìn dễ nhận diện.",
        },
        {
          label: "Công nghệ",
          title: "Năng lực triển khai số",
          description:
            "Chuyển hóa ý tưởng thành những trải nghiệm số hữu ích, linh hoạt và đáng nhớ.",
        },
        {
          label: "Hiệu quả",
          title: "Tác động đo lường được",
          description:
            "Kết nối quyết định sáng tạo với mục tiêu, quá trình học hỏi và kết quả kinh doanh.",
        },
      ],
      closingStatement:
        "Một định hướng. Nhiều năng lực. Một trải nghiệm thương hiệu nhất quán hơn.",
    },
    selectedProjects: {
      eyebrow: "Dự án nổi bật",
      headline:
        "Những dự án tạo dấu ấn và thúc đẩy thương hiệu tiến về phía trước.",
      supportingCopy:
        "Một số dự án tiêu biểu nơi chiến lược, sáng tạo, công nghệ và hiệu quả được kết nối thành một trải nghiệm nhất quán.",
      sectionCta: {
        label: "Xem tất cả dự án",
        href: "/projects",
      },
      projects: [
        {
          slug: "brand-transformation",
          title: "Chuyển hóa thương hiệu",
          client: "Thương hiệu tiêu dùng cao cấp",
          industry: "Tiêu dùng",
          services: "Chiến lược, Thương hiệu, Trải nghiệm số",
          statement:
            "Một hệ thống thương hiệu thống nhất nhằm tạo sự rõ ràng trên mọi điểm chạm khách hàng.",
          caseStudyLabel: "Xem case study",
        },
        {
          slug: "integrated-campaign",
          title: "Chiến dịch tích hợp",
          client: "Thương hiệu bất động sản",
          industry: "Bất động sản",
          services: "Chiến dịch sáng tạo, Nội dung, Media",
          statement:
            "Một định hướng chiến dịch được triển khai nhất quán trên nội dung, kỹ thuật số và media.",
          caseStudyLabel: "Xem case study",
        },
        {
          slug: "digital-experience",
          title: "Trải nghiệm số",
          client: "Thương hiệu dịch vụ lưu trú",
          industry: "Dịch vụ lưu trú",
          services: "Chiến lược trải nghiệm, UX/UI, Phát triển",
          statement:
            "Một trải nghiệm số linh hoạt được xây dựng quanh câu chuyện rõ ràng và mục tiêu người dùng.",
          caseStudyLabel: "Xem case study",
        },
      ],
    },
    team: {
      eyebrow: "Đội ngũ phía sau dự án",
      headline: "Nhiều chuyên môn. Một định hướng chung.",
      supportingCopy:
        "Chiến lược, sáng tạo, phát triển, nội dung và hiệu quả cùng phối hợp ngay từ đầu để ý tưởng luôn nhất quán từ định hướng đến triển khai.",
      collaborationStatement:
        "Chúng tôi không chuyển giao công việc tuần tự giữa các phòng ban. Chúng tôi cùng xây dựng giải pháp.",
      sectionCta: {
        label: "Gặp gỡ đội ngũ",
        href: "/team",
      },
      roles: [
        {
          identifier: "strategy",
          displayName: "Phụ trách chiến lược",
          discipline: "Chiến lược & Thương hiệu",
          description:
            "Kết nối ưu tiên kinh doanh, sự thấu hiểu khách hàng và định hướng thương hiệu.",
        },
        {
          identifier: "creative",
          displayName: "Phụ trách sáng tạo",
          discipline: "Sáng tạo & Thiết kế",
          description:
            "Định hình ý tưởng và hệ thống hình ảnh giúp dự án tạo dấu ấn khác biệt.",
        },
        {
          identifier: "technology",
          displayName: "Phụ trách công nghệ",
          discipline: "Kỹ thuật số & Phát triển",
          description:
            "Chuyển định hướng sáng tạo thành những trải nghiệm số linh hoạt và đáng tin cậy.",
        },
        {
          identifier: "growth",
          displayName: "Phụ trách tăng trưởng",
          discipline: "Nội dung & Hiệu quả",
          description:
            "Kết nối truyền thông, phân phối, quá trình học hỏi và kết quả đo lường.",
        },
      ],
    },
    testimonials: {
      eyebrow: "Góc nhìn khách hàng",
      headline: "Quan hệ hợp tác tốt tạo nên những dự án tốt hơn.",
      supportingCopy:
        "Kết quả tốt nhất đến từ định hướng chung, sự phối hợp thẳng thắn và các đội ngũ luôn kết nối từ câu hỏi đầu tiên đến giai đoạn hoàn thiện.",
      disclosure:
        "Các nhận xét bên dưới chỉ là nội dung minh họa và phải được thay thế bằng testimonial đã được khách hàng phê duyệt trước khi ra mắt.",
      testimonials: [
        {
          identifier: "brand-direction",
          quote:
            "Đội ngũ đã giúp chúng tôi chuyển từ những ý tưởng rời rạc sang một định hướng thương hiệu rõ ràng mà mọi người đều có thể hiểu và áp dụng.",
          attribution: "Góc nhìn khách hàng minh họa",
          role: "Lãnh đạo thương hiệu",
        },
        {
          identifier: "collaboration",
          quote:
            "Chiến lược, sáng tạo và triển khai số được kết nối như một thể thống nhất thay vì những phần việc riêng biệt.",
          attribution: "Góc nhìn khách hàng minh họa",
          role: "Lãnh đạo marketing",
        },
        {
          identifier: "delivery",
          quote:
            "Quy trình mang lại đủ cấu trúc để đội ngũ đưa ra quyết định, đồng thời vẫn tạo không gian cho những ý tưởng tốt hơn xuất hiện.",
          attribution: "Góc nhìn khách hàng minh họa",
          role: "Quản lý dự án",
        },
      ],
    },
    finalCta: {
      eyebrow: "Bắt đầu chương tiếp theo",
      headline: "Bạn có một ý tưởng lớn? Hãy cùng xây dựng bước tiếp theo.",
      supportingCopy:
        "Dù bạn đang định hình một thương hiệu mới, triển khai chiến dịch hay xây dựng trải nghiệm số khác biệt hơn, chúng tôi có thể giúp chuyển định hướng thành những giá trị thực tế.",
      primaryCta: {
        label: "Bắt đầu dự án",
        href: "/contact",
      },
      secondaryCta: {
        label: "Khám phá dự án",
        href: "/projects",
      },
      supportingNote:
        "Chiến lược, sáng tạo, công nghệ và hiệu quả—được kết nối ngay từ đầu.",
    },
  },
} as const satisfies LocalizedContent<HomePageContent>;

export function getHomeContent(locale: Locale) {
  return HOME_CONTENT[locale];
}
