import type { LocalizedContent } from "@/lib/content/types";
import type { Locale } from "@/lib/i18n/locales";

export const PROJECT_SLUGS = [
  "brand-transformation",
  "integrated-campaign",
  "digital-experience",
  "product-launch",
  "content-ecosystem",
  "performance-platform",
] as const;

export type ProjectSlug = (typeof PROJECT_SLUGS)[number];
export type GalleryVariant = "wide" | "landscape" | "portrait";

export type ProjectGalleryItem = Readonly<{
  caption: string;
  label: string;
  variant: GalleryVariant;
}>;

export type ProjectSummaryContent = Readonly<{
  caseStudyLabel: string;
  client: string;
  industry: string;
  services: string;
  slug: ProjectSlug;
  statement: string;
  title: string;
}>;

export type ProjectDetailContent = ProjectSummaryContent &
  Readonly<{
    approach: string;
    challenge: string;
    deliverables: readonly [string, string, string, string, string];
    galleryItems: readonly [
      ProjectGalleryItem,
      ProjectGalleryItem,
      ProjectGalleryItem,
      ProjectGalleryItem,
      ProjectGalleryItem,
    ];
    nextProjectSlug: ProjectSlug;
    outcomeDirection: string;
    summary: string;
  }>;

export type ProjectsHeroContent = Readonly<{
  disclosure: string;
  eyebrow: string;
  headline: string;
  supportingCopy: string;
}>;

export type ProjectsCollectionContent = Readonly<{
  headline: string;
  projects: ProjectContentRecords;
}>;

export type ProjectsCtaContent = Readonly<{
  eyebrow: string;
  headline: string;
  primaryCta: string;
  supportingCopy: string;
}>;

export type ProjectsPageContent = Readonly<{
  collection: ProjectsCollectionContent;
  cta: ProjectsCtaContent;
  hero: ProjectsHeroContent;
}>;

export type ProjectHeroLabelsContent = Readonly<{
  client: string;
  placeholderDisclosure: string;
  services: string;
}>;

export type ProjectOverviewLabelsContent = Readonly<{
  client: string;
  deliverables: string;
  heading: string;
  industry: string;
  services: string;
}>;

export type ProjectStoryLabelsContent = Readonly<{
  approachEyebrow: string;
  approachTitle: string;
  challengeEyebrow: string;
  challengeTitle: string;
}>;

export type ProjectGalleryLabelsContent = Readonly<{
  heading: string;
}>;

export type ProjectOutcomeLabelsContent = Readonly<{
  heading: string;
  verifiedResultsNote: string;
}>;

export type ProjectNextLabelsContent = Readonly<{
  allProjectsCta: string;
  heading: string;
  nextProjectCta: string;
}>;

export type ProjectDetailPageLabelsContent = Readonly<{
  gallery: ProjectGalleryLabelsContent;
  hero: ProjectHeroLabelsContent;
  next: ProjectNextLabelsContent;
  outcome: ProjectOutcomeLabelsContent;
  overview: ProjectOverviewLabelsContent;
  story: ProjectStoryLabelsContent;
}>;

export type ProjectsLocaleContent = Readonly<{
  projectDetail: ProjectDetailPageLabelsContent;
  projects: ProjectContentRecords;
  projectsPage: ProjectsPageContent;
}>;

type LocalizedProjectFields = Readonly<{
  approach: string;
  challenge: string;
  client: string;
  deliverables: readonly [string, string, string, string, string];
  galleryItems: readonly [
    ProjectGalleryItem,
    ProjectGalleryItem,
    ProjectGalleryItem,
    ProjectGalleryItem,
    ProjectGalleryItem,
  ];
  industry: string;
  outcomeDirection: string;
  services: string;
  summary: string;
  title: string;
}>;

type ProjectContentRecord = Readonly<{
  content: LocalizedContent<LocalizedProjectFields>;
  nextProjectSlug: ProjectSlug;
  slug: ProjectSlug;
}>;

export type ProjectContentRecords = readonly [
  ProjectDetailContent,
  ProjectDetailContent,
  ProjectDetailContent,
  ProjectDetailContent,
  ProjectDetailContent,
  ProjectDetailContent,
];

type ProjectContentBySlug = Readonly<Record<ProjectSlug, ProjectDetailContent>>;

const projectRecords = [
  {
    slug: "brand-transformation",
    nextProjectSlug: "integrated-campaign",
    content: {
      en: {
        title: "Brand Transformation",
        client: "Premium Consumer Brand",
        industry: "Consumer",
        services: "Strategy, Branding, Digital Experience",
        summary:
          "A unified brand system designed to create clarity across every customer touchpoint.",
        challenge:
          "The brand had grown across multiple channels, but its positioning, visual expression, and digital experience no longer felt connected.",
        approach:
          "We created one strategic direction, translated it into a flexible visual system, and defined how the brand should behave across communication and digital touchpoints.",
        deliverables: [
          "Brand positioning",
          "Messaging framework",
          "Visual identity system",
          "Digital experience direction",
          "Launch toolkit",
        ],
        outcomeDirection:
          "The intended result is a clearer and more consistent brand experience that teams can apply across future communication.",
        galleryItems: [
          {
            label: "Strategic Direction",
            caption:
              "A placeholder frame for the strategic foundation and brand decision logic.",
            variant: "wide",
          },
          {
            label: "Messaging Framework",
            caption:
              "A structural placeholder for future approved messaging examples.",
            variant: "landscape",
          },
          {
            label: "Visual System",
            caption:
              "A placeholder showing where identity-system media will be presented.",
            variant: "portrait",
          },
          {
            label: "Digital Touchpoint",
            caption:
              "A reserved frame for future website or experience direction media.",
            variant: "landscape",
          },
          {
            label: "Launch Toolkit",
            caption:
              "A placeholder for approved rollout assets and delivery materials.",
            variant: "portrait",
          },
        ],
      },
      vi: {
        title: "Chuyển hóa thương hiệu",
        client: "Thương hiệu tiêu dùng cao cấp",
        industry: "Tiêu dùng",
        services: "Chiến lược, Thương hiệu, Trải nghiệm số",
        summary:
          "Một hệ thống thương hiệu thống nhất nhằm tạo sự rõ ràng trên mọi điểm chạm khách hàng.",
        challenge:
          "Thương hiệu đã phát triển trên nhiều kênh, nhưng định vị, biểu đạt hình ảnh và trải nghiệm số không còn được kết nối nhất quán.",
        approach:
          "Chúng tôi xây dựng một định hướng chiến lược chung, chuyển hóa thành hệ thống hình ảnh linh hoạt và xác định cách thương hiệu xuất hiện trên truyền thông cùng các điểm chạm số.",
        deliverables: [
          "Định vị thương hiệu",
          "Khung thông điệp",
          "Hệ thống nhận diện hình ảnh",
          "Định hướng trải nghiệm số",
          "Bộ công cụ ra mắt",
        ],
        outcomeDirection:
          "Kết quả kỳ vọng là một trải nghiệm thương hiệu rõ ràng và nhất quán hơn để đội ngũ có thể tiếp tục ứng dụng trong tương lai.",
        galleryItems: [
          {
            label: "Định hướng chiến lược",
            caption:
              "Khung giữ chỗ cho nền tảng chiến lược và logic ra quyết định thương hiệu.",
            variant: "wide",
          },
          {
            label: "Khung thông điệp",
            caption:
              "Khung cấu trúc cho các ví dụ thông điệp đã được phê duyệt trong tương lai.",
            variant: "landscape",
          },
          {
            label: "Hệ thống hình ảnh",
            caption:
              "Vị trí dự kiến cho media về hệ thống nhận diện khi đã được phê duyệt.",
            variant: "portrait",
          },
          {
            label: "Điểm chạm số",
            caption:
              "Khung dành cho media về website hoặc định hướng trải nghiệm số.",
            variant: "landscape",
          },
          {
            label: "Bộ công cụ ra mắt",
            caption:
              "Khung giữ chỗ cho tài sản triển khai và tài liệu bàn giao đã được duyệt.",
            variant: "portrait",
          },
        ],
      },
    },
  },
  {
    slug: "integrated-campaign",
    nextProjectSlug: "digital-experience",
    content: {
      en: {
        title: "Integrated Campaign",
        client: "Real Estate Brand",
        industry: "Real Estate",
        services: "Creative Campaign, Content, Media",
        summary:
          "One campaign direction translated consistently across content, digital, and media.",
        challenge:
          "The campaign needed to communicate one development story while different channels were creating separate messages and inconsistent audience expectations.",
        approach:
          "We shaped a central campaign idea, mapped content roles by channel, and created a delivery framework that kept creative, content, and media aligned.",
        deliverables: [
          "Campaign direction",
          "Message architecture",
          "Content framework",
          "Digital rollout plan",
          "Media coordination guide",
        ],
        outcomeDirection:
          "The intended direction is a more coherent campaign system that helps every channel reinforce the same positioning.",
        galleryItems: [
          {
            label: "Campaign Direction",
            caption:
              "A placeholder for the approved campaign idea and strategic framing.",
            variant: "wide",
          },
          {
            label: "Content System",
            caption:
              "A reserved frame for future channel content structures.",
            variant: "landscape",
          },
          {
            label: "Media Touchpoint",
            caption:
              "A placeholder for showing how media placements support one story.",
            variant: "portrait",
          },
          {
            label: "Digital Application",
            caption:
              "A structural frame for future campaign landing or digital examples.",
            variant: "landscape",
          },
          {
            label: "Delivery Framework",
            caption:
              "A placeholder for approved rollout and governance materials.",
            variant: "portrait",
          },
        ],
      },
      vi: {
        title: "Chiến dịch tích hợp",
        client: "Thương hiệu bất động sản",
        industry: "Bất động sản",
        services: "Chiến dịch sáng tạo, Nội dung, Media",
        summary:
          "Một định hướng chiến dịch được triển khai nhất quán trên nội dung, kỹ thuật số và media.",
        challenge:
          "Chiến dịch cần truyền tải một câu chuyện phát triển thống nhất trong khi các kênh đang tạo ra thông điệp riêng lẻ và kỳ vọng khách hàng thiếu nhất quán.",
        approach:
          "Chúng tôi định hình ý tưởng chiến dịch trung tâm, xác định vai trò nội dung theo từng kênh và xây dựng khung triển khai để sáng tạo, nội dung và media cùng đi một hướng.",
        deliverables: [
          "Định hướng chiến dịch",
          "Kiến trúc thông điệp",
          "Khung nội dung",
          "Kế hoạch triển khai số",
          "Hướng dẫn phối hợp media",
        ],
        outcomeDirection:
          "Định hướng kỳ vọng là một hệ thống chiến dịch nhất quán hơn, giúp mọi kênh cùng củng cố một định vị chung.",
        galleryItems: [
          {
            label: "Định hướng chiến dịch",
            caption:
              "Khung giữ chỗ cho ý tưởng chiến dịch và định hướng chiến lược đã được duyệt.",
            variant: "wide",
          },
          {
            label: "Hệ thống nội dung",
            caption:
              "Khung dành cho cấu trúc nội dung theo kênh trong tương lai.",
            variant: "landscape",
          },
          {
            label: "Điểm chạm media",
            caption:
              "Khung giữ chỗ cho cách media hỗ trợ một câu chuyện chung.",
            variant: "portrait",
          },
          {
            label: "Ứng dụng số",
            caption:
              "Khung cấu trúc cho landing page hoặc ví dụ kỹ thuật số của chiến dịch.",
            variant: "landscape",
          },
          {
            label: "Khung triển khai",
            caption:
              "Khung giữ chỗ cho tài liệu triển khai và quản trị đã được phê duyệt.",
            variant: "portrait",
          },
        ],
      },
    },
  },
  {
    slug: "digital-experience",
    nextProjectSlug: "product-launch",
    content: {
      en: {
        title: "Digital Experience",
        client: "Hospitality Brand",
        industry: "Hospitality",
        services: "Experience Strategy, UX/UI, Development",
        summary:
          "A responsive digital experience shaped around clear storytelling and user intent.",
        challenge:
          "The brand needed a digital touchpoint that could guide visitors through the experience instead of only presenting functional information.",
        approach:
          "We organized the user journey around intent, shaped a clearer content hierarchy, and translated the brand atmosphere into a responsive interface foundation.",
        deliverables: [
          "Experience strategy",
          "Information architecture",
          "UX/UI system",
          "Frontend foundation",
          "Content direction",
        ],
        outcomeDirection:
          "The intended direction is a digital experience that is easier to navigate, stronger in story, and more useful for future communication.",
        galleryItems: [
          {
            label: "Experience Strategy",
            caption:
              "A placeholder frame for journey decisions and content priorities.",
            variant: "wide",
          },
          {
            label: "Information Structure",
            caption:
              "A reserved frame for approved page architecture and content flow.",
            variant: "landscape",
          },
          {
            label: "Interface System",
            caption:
              "A placeholder for future responsive interface examples.",
            variant: "portrait",
          },
          {
            label: "Digital Touchpoint",
            caption:
              "A frame for approved website or landing page media when available.",
            variant: "landscape",
          },
          {
            label: "Delivery Notes",
            caption:
              "A placeholder for implementation guidance and handoff structure.",
            variant: "portrait",
          },
        ],
      },
      vi: {
        title: "Trải nghiệm số",
        client: "Thương hiệu dịch vụ lưu trú",
        industry: "Dịch vụ lưu trú",
        services: "Chiến lược trải nghiệm, UX/UI, Phát triển",
        summary:
          "Một trải nghiệm số linh hoạt được xây dựng quanh câu chuyện rõ ràng và mục tiêu người dùng.",
        challenge:
          "Thương hiệu cần một điểm chạm số có thể dẫn dắt người dùng qua trải nghiệm, thay vì chỉ trình bày thông tin chức năng.",
        approach:
          "Chúng tôi tổ chức hành trình người dùng quanh mục tiêu truy cập, xây dựng phân cấp nội dung rõ hơn và chuyển hóa tinh thần thương hiệu thành nền tảng giao diện linh hoạt.",
        deliverables: [
          "Chiến lược trải nghiệm",
          "Kiến trúc thông tin",
          "Hệ thống UX/UI",
          "Nền tảng frontend",
          "Định hướng nội dung",
        ],
        outcomeDirection:
          "Định hướng kỳ vọng là một trải nghiệm số dễ điều hướng hơn, có câu chuyện rõ hơn và hữu ích hơn cho truyền thông trong tương lai.",
        galleryItems: [
          {
            label: "Chiến lược trải nghiệm",
            caption:
              "Khung giữ chỗ cho quyết định hành trình và ưu tiên nội dung.",
            variant: "wide",
          },
          {
            label: "Cấu trúc thông tin",
            caption:
              "Khung dành cho kiến trúc trang và luồng nội dung đã được duyệt.",
            variant: "landscape",
          },
          {
            label: "Hệ thống giao diện",
            caption:
              "Khung giữ chỗ cho các ví dụ giao diện linh hoạt trong tương lai.",
            variant: "portrait",
          },
          {
            label: "Điểm chạm số",
            caption:
              "Khung dành cho media website hoặc landing page đã được phê duyệt.",
            variant: "landscape",
          },
          {
            label: "Ghi chú bàn giao",
            caption:
              "Khung giữ chỗ cho hướng dẫn triển khai và cấu trúc bàn giao.",
            variant: "portrait",
          },
        ],
      },
    },
  },
  {
    slug: "product-launch",
    nextProjectSlug: "content-ecosystem",
    content: {
      en: {
        title: "Product Launch",
        client: "Lifestyle Brand",
        industry: "Lifestyle",
        services: "Launch Strategy, Creative, Content",
        summary:
          "A launch system connecting positioning, campaign ideas, and digital communication.",
        challenge:
          "The product needed a clear market entry story that could introduce value quickly while giving content teams a consistent direction.",
        approach:
          "We clarified the launch proposition, built a campaign idea around product relevance, and organized launch content into a usable sequence.",
        deliverables: [
          "Launch positioning",
          "Creative concept",
          "Content pillars",
          "Digital launch assets",
          "Rollout sequence",
        ],
        outcomeDirection:
          "The intended direction is a launch foundation that helps the product enter the market with clearer meaning and coordinated communication.",
        galleryItems: [
          {
            label: "Launch Strategy",
            caption:
              "A placeholder for the product proposition and entry narrative.",
            variant: "wide",
          },
          {
            label: "Creative Concept",
            caption:
              "A reserved frame for future approved creative direction media.",
            variant: "landscape",
          },
          {
            label: "Content Pillars",
            caption:
              "A placeholder for launch content structure and messaging rhythm.",
            variant: "portrait",
          },
          {
            label: "Campaign Application",
            caption:
              "A frame for approved digital or social launch applications.",
            variant: "landscape",
          },
          {
            label: "Rollout Sequence",
            caption:
              "A placeholder for launch timing and delivery structure.",
            variant: "portrait",
          },
        ],
      },
      vi: {
        title: "Ra mắt sản phẩm",
        client: "Thương hiệu phong cách sống",
        industry: "Phong cách sống",
        services: "Chiến lược ra mắt, Sáng tạo, Nội dung",
        summary:
          "Một hệ thống ra mắt kết nối định vị, ý tưởng chiến dịch và truyền thông kỹ thuật số.",
        challenge:
          "Sản phẩm cần một câu chuyện ra mắt rõ ràng để giới thiệu giá trị nhanh chóng, đồng thời tạo định hướng nhất quán cho đội ngũ nội dung.",
        approach:
          "Chúng tôi làm rõ đề xuất giá trị khi ra mắt, xây dựng ý tưởng chiến dịch quanh tính phù hợp của sản phẩm và tổ chức nội dung thành một trình tự dễ triển khai.",
        deliverables: [
          "Định vị ra mắt",
          "Ý tưởng sáng tạo",
          "Trụ cột nội dung",
          "Tài sản ra mắt số",
          "Trình tự triển khai",
        ],
        outcomeDirection:
          "Định hướng kỳ vọng là một nền tảng ra mắt giúp sản phẩm tiếp cận thị trường với ý nghĩa rõ hơn và truyền thông phối hợp tốt hơn.",
        galleryItems: [
          {
            label: "Chiến lược ra mắt",
            caption:
              "Khung giữ chỗ cho đề xuất giá trị sản phẩm và câu chuyện tiếp cận thị trường.",
            variant: "wide",
          },
          {
            label: "Ý tưởng sáng tạo",
            caption:
              "Khung dành cho media định hướng sáng tạo đã được duyệt trong tương lai.",
            variant: "landscape",
          },
          {
            label: "Trụ cột nội dung",
            caption:
              "Khung giữ chỗ cho cấu trúc nội dung và nhịp thông điệp ra mắt.",
            variant: "portrait",
          },
          {
            label: "Ứng dụng chiến dịch",
            caption:
              "Khung dành cho ứng dụng ra mắt trên kênh số hoặc mạng xã hội.",
            variant: "landscape",
          },
          {
            label: "Trình tự triển khai",
            caption:
              "Khung giữ chỗ cho cấu trúc thời điểm và bàn giao khi ra mắt.",
            variant: "portrait",
          },
        ],
      },
    },
  },
  {
    slug: "content-ecosystem",
    nextProjectSlug: "performance-platform",
    content: {
      en: {
        title: "Content Ecosystem",
        client: "Service Brand",
        industry: "Services",
        services: "Content Strategy, Social, Production",
        summary:
          "A clearer content structure designed to improve consistency across channels and teams.",
        challenge:
          "The brand was producing frequent content, but topics, formats, and production decisions lacked a shared system.",
        approach:
          "We defined content roles, organized repeatable themes, and created production guidance that helped teams make consistent choices.",
        deliverables: [
          "Content strategy",
          "Channel role mapping",
          "Editorial pillars",
          "Production framework",
          "Governance notes",
        ],
        outcomeDirection:
          "The intended direction is a content ecosystem that makes communication easier to plan, produce, and improve over time.",
        galleryItems: [
          {
            label: "Content Strategy",
            caption:
              "A placeholder for the content direction and planning structure.",
            variant: "wide",
          },
          {
            label: "Channel Roles",
            caption:
              "A reserved frame for future channel-mapping materials.",
            variant: "landscape",
          },
          {
            label: "Editorial Pillars",
            caption:
              "A placeholder for organizing repeatable themes and message areas.",
            variant: "portrait",
          },
          {
            label: "Production Framework",
            caption:
              "A frame for approved production guidance and asset structures.",
            variant: "landscape",
          },
          {
            label: "Governance Notes",
            caption:
              "A placeholder for team workflow and content stewardship guidance.",
            variant: "portrait",
          },
        ],
      },
      vi: {
        title: "Hệ sinh thái nội dung",
        client: "Thương hiệu dịch vụ",
        industry: "Dịch vụ",
        services: "Chiến lược nội dung, Mạng xã hội, Sản xuất",
        summary:
          "Một cấu trúc nội dung rõ ràng hơn nhằm tăng tính nhất quán giữa các kênh và đội ngũ.",
        challenge:
          "Thương hiệu sản xuất nội dung thường xuyên, nhưng chủ đề, định dạng và quyết định sản xuất chưa có một hệ thống chung.",
        approach:
          "Chúng tôi xác định vai trò nội dung, tổ chức các chủ đề có thể lặp lại và xây dựng hướng dẫn sản xuất giúp đội ngũ ra quyết định nhất quán hơn.",
        deliverables: [
          "Chiến lược nội dung",
          "Bản đồ vai trò kênh",
          "Trụ cột biên tập",
          "Khung sản xuất",
          "Ghi chú quản trị",
        ],
        outcomeDirection:
          "Định hướng kỳ vọng là một hệ sinh thái nội dung giúp truyền thông dễ lập kế hoạch, sản xuất và cải thiện theo thời gian.",
        galleryItems: [
          {
            label: "Chiến lược nội dung",
            caption:
              "Khung giữ chỗ cho định hướng nội dung và cấu trúc lập kế hoạch.",
            variant: "wide",
          },
          {
            label: "Vai trò kênh",
            caption:
              "Khung dành cho tài liệu phân vai theo kênh trong tương lai.",
            variant: "landscape",
          },
          {
            label: "Trụ cột biên tập",
            caption:
              "Khung giữ chỗ cho cách tổ chức chủ đề lặp lại và nhóm thông điệp.",
            variant: "portrait",
          },
          {
            label: "Khung sản xuất",
            caption:
              "Khung dành cho hướng dẫn sản xuất và cấu trúc tài sản đã được duyệt.",
            variant: "landscape",
          },
          {
            label: "Ghi chú quản trị",
            caption:
              "Khung giữ chỗ cho quy trình phối hợp và quản trị nội dung.",
            variant: "portrait",
          },
        ],
      },
    },
  },
  {
    slug: "performance-platform",
    nextProjectSlug: "brand-transformation",
    content: {
      en: {
        title: "Performance Platform",
        client: "Digital Commerce Brand",
        industry: "Commerce",
        services: "Landing Pages, Measurement, Optimization",
        summary:
          "A modular digital platform connecting campaign execution with measurement and learning.",
        challenge:
          "Campaign activity needed a more reliable digital structure so landing experiences, measurement, and optimization could support one another.",
        approach:
          "We shaped a modular platform direction, clarified the measurement framework, and organized landing page patterns around campaign learning.",
        deliverables: [
          "Platform direction",
          "Landing page system",
          "Measurement framework",
          "Optimization plan",
          "Reporting structure",
        ],
        outcomeDirection:
          "The intended direction is a performance foundation that connects campaign delivery with clearer learning and future optimization.",
        galleryItems: [
          {
            label: "Platform Direction",
            caption:
              "A placeholder for the modular platform logic and experience priorities.",
            variant: "wide",
          },
          {
            label: "Landing Page System",
            caption:
              "A reserved frame for approved landing page structure and patterns.",
            variant: "landscape",
          },
          {
            label: "Measurement Framework",
            caption:
              "A placeholder for measurement planning without showing unsupported result claims.",
            variant: "portrait",
          },
          {
            label: "Optimization Plan",
            caption:
              "A frame for future testing and iteration workflow materials.",
            variant: "landscape",
          },
          {
            label: "Reporting Structure",
            caption:
              "A placeholder for approved reporting and learning materials.",
            variant: "portrait",
          },
        ],
      },
      vi: {
        title: "Nền tảng hiệu quả",
        client: "Thương hiệu thương mại số",
        industry: "Thương mại",
        services: "Landing page, Đo lường, Tối ưu",
        summary:
          "Một nền tảng số linh hoạt kết nối triển khai chiến dịch với đo lường và quá trình học hỏi.",
        challenge:
          "Hoạt động chiến dịch cần một cấu trúc số đáng tin cậy hơn để trải nghiệm landing page, đo lường và tối ưu có thể hỗ trợ lẫn nhau.",
        approach:
          "Chúng tôi định hình hướng nền tảng linh hoạt, làm rõ khung đo lường và tổ chức mẫu landing page quanh quá trình học hỏi từ chiến dịch.",
        deliverables: [
          "Định hướng nền tảng",
          "Hệ thống landing page",
          "Khung đo lường",
          "Kế hoạch tối ưu",
          "Cấu trúc báo cáo",
        ],
        outcomeDirection:
          "Định hướng kỳ vọng là một nền tảng hiệu quả kết nối triển khai chiến dịch với quá trình học hỏi rõ hơn và khả năng tối ưu trong tương lai.",
        galleryItems: [
          {
            label: "Định hướng nền tảng",
            caption:
              "Khung giữ chỗ cho logic nền tảng linh hoạt và ưu tiên trải nghiệm.",
            variant: "wide",
          },
          {
            label: "Hệ thống landing page",
            caption:
              "Khung dành cho cấu trúc và mẫu landing page đã được duyệt.",
            variant: "landscape",
          },
          {
            label: "Khung đo lường",
            caption:
              "Khung giữ chỗ cho kế hoạch đo lường mà không hiển thị tuyên bố kết quả chưa được xác minh.",
            variant: "portrait",
          },
          {
            label: "Kế hoạch tối ưu",
            caption:
              "Khung dành cho quy trình thử nghiệm và cải thiện trong tương lai.",
            variant: "landscape",
          },
          {
            label: "Cấu trúc báo cáo",
            caption:
              "Khung giữ chỗ cho tài liệu báo cáo và học hỏi đã được phê duyệt.",
            variant: "portrait",
          },
        ],
      },
    },
  },

] satisfies readonly [
  ProjectContentRecord,
  ProjectContentRecord,
  ProjectContentRecord,
  ProjectContentRecord,
  ProjectContentRecord,
  ProjectContentRecord,
];

const projectCaseStudyLabels: LocalizedContent<string> = {
  en: "View Case Study",
  vi: "Xem case study",
};

function localizeProjectRecord(
  project: ProjectContentRecord,
  locale: Locale,
): ProjectDetailContent {
  const content = project.content[locale];

  return {
    ...content,
    caseStudyLabel: projectCaseStudyLabels[locale],
    nextProjectSlug: project.nextProjectSlug,
    slug: project.slug,
    statement: content.summary,
  };
}

function localizeProjectRecords(locale: Locale): ProjectContentRecords {
  return [
    localizeProjectRecord(projectRecords[0], locale),
    localizeProjectRecord(projectRecords[1], locale),
    localizeProjectRecord(projectRecords[2], locale),
    localizeProjectRecord(projectRecords[3], locale),
    localizeProjectRecord(projectRecords[4], locale),
    localizeProjectRecord(projectRecords[5], locale),
  ];
}

function createProjectContentBySlug(
  projects: ProjectContentRecords,
): ProjectContentBySlug {
  return Object.fromEntries(
    projects.map((project) => [project.slug, project]),
  ) as ProjectContentBySlug;
}

const localizedProjectRecords: LocalizedContent<ProjectContentRecords> = {
  en: localizeProjectRecords("en"),
  vi: localizeProjectRecords("vi"),
};

const localizedProjectsBySlug: LocalizedContent<ProjectContentBySlug> = {
  en: createProjectContentBySlug(localizedProjectRecords.en),
  vi: createProjectContentBySlug(localizedProjectRecords.vi),
};

export const PROJECTS_CONTENT = {
  en: {
    projects: localizedProjectRecords.en,
    projectsPage: {
      hero: {
        eyebrow: "Projects",
        headline:
          "Selected work across brand, campaign, and digital experience.",
        supportingCopy:
          "Each project begins with a different challenge, but the objective remains consistent: create clearer direction, stronger distinction, and work that contributes to meaningful outcomes.",
        disclosure:
          "The projects below are temporary structural examples and must be replaced with approved case-study content before launch.",
      },
      collection: {
        headline: "Project Collection",
        projects: localizedProjectRecords.en,
      },
      cta: {
        eyebrow: "Start a Project",
        headline: "Looking for a partner to connect direction with delivery?",
        supportingCopy:
          "Tell us about the challenge, the team, and what needs to change. We will help define the right way forward.",
        primaryCta: "Discuss Your Project",
      },
    },
    projectDetail: {
      hero: {
        client: "Client",
        services: "Services",
        placeholderDisclosure:
          "This case study is temporary structural content and must be replaced with approved project information before launch.",
      },
      overview: {
        heading: "Project Overview",
        client: "Client",
        industry: "Industry",
        services: "Services",
        deliverables: "Deliverables",
      },
      story: {
        challengeEyebrow: "The Challenge",
        challengeTitle: "Understanding the real problem",
        approachEyebrow: "The Approach",
        approachTitle: "Building one connected direction",
      },
      gallery: {
        heading: "Project Gallery",
      },
      outcome: {
        heading: "Outcome Direction",
        verifiedResultsNote:
          "Verified project results will be added only after client approval.",
      },
      next: {
        heading: "Continue Exploring",
        nextProjectCta: "View Next Project",
        allProjectsCta: "View All Projects",
      },
    },
  },
  vi: {
    projects: localizedProjectRecords.vi,
    projectsPage: {
      hero: {
        eyebrow: "Dự án",
        headline:
          "Những dự án tiêu biểu về thương hiệu, chiến dịch và trải nghiệm số.",
        supportingCopy:
          "Mỗi dự án bắt đầu từ một thách thức khác nhau, nhưng mục tiêu luôn nhất quán: tạo định hướng rõ ràng hơn, dấu ấn khác biệt hơn và những giá trị có ý nghĩa.",
        disclosure:
          "Các dự án bên dưới chỉ là nội dung cấu trúc tạm thời và phải được thay thế bằng case study đã được phê duyệt trước khi ra mắt.",
      },
      collection: {
        headline: "Danh sách dự án",
        projects: localizedProjectRecords.vi,
      },
      cta: {
        eyebrow: "Bắt đầu dự án",
        headline:
          "Bạn đang tìm một đối tác kết nối định hướng với triển khai?",
        supportingCopy:
          "Hãy chia sẻ bài toán, đội ngũ và điều cần thay đổi. Chúng tôi sẽ cùng xác định hướng đi phù hợp.",
        primaryCta: "Trao đổi về dự án",
      },
    },
    projectDetail: {
      hero: {
        client: "Khách hàng",
        services: "Dịch vụ",
        placeholderDisclosure:
          "Case study này là nội dung cấu trúc tạm thời và phải được thay thế bằng thông tin dự án đã được phê duyệt trước khi ra mắt.",
      },
      overview: {
        heading: "Tổng quan dự án",
        client: "Khách hàng",
        industry: "Lĩnh vực",
        services: "Dịch vụ",
        deliverables: "Hạng mục bàn giao",
      },
      story: {
        challengeEyebrow: "Thách thức",
        challengeTitle: "Hiểu đúng bài toán cốt lõi",
        approachEyebrow: "Cách tiếp cận",
        approachTitle: "Xây dựng một định hướng kết nối",
      },
      gallery: {
        heading: "Không gian dự án",
      },
      outcome: {
        heading: "Định hướng kết quả",
        verifiedResultsNote:
          "Kết quả dự án đã được xác minh chỉ được bổ sung sau khi có sự phê duyệt của khách hàng.",
      },
      next: {
        heading: "Tiếp tục khám phá",
        nextProjectCta: "Xem dự án tiếp theo",
        allProjectsCta: "Xem tất cả dự án",
      },
    },
  },
} satisfies LocalizedContent<ProjectsLocaleContent>;

export function isProjectSlug(slug: string): slug is ProjectSlug {
  return PROJECT_SLUGS.includes(slug as ProjectSlug);
}

export function getProjectsPageContent(locale: Locale): ProjectsPageContent {
  return PROJECTS_CONTENT[locale].projectsPage;
}

export function getProjectDetail(
  locale: Locale,
  slug: string,
): ProjectDetailContent | undefined {
  if (!isProjectSlug(slug)) {
    return undefined;
  }

  return localizedProjectsBySlug[locale][slug];
}

export function getNextProject(
  locale: Locale,
  slug: ProjectSlug,
): ProjectDetailContent {
  return localizedProjectsBySlug[locale][
    localizedProjectsBySlug[locale][slug].nextProjectSlug
  ];
}
