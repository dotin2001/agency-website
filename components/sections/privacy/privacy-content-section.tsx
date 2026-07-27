import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Stack } from "@/components/layout/stack";

type Locale = "en" | "vi";

type PolicySection = {
  body: string;
  heading: string;
};

type PrivacyContentCopy = {
  finalDisclosure: string;
  heading: string;
  sections: readonly [
    PolicySection,
    PolicySection,
    PolicySection,
    PolicySection,
    PolicySection,
    PolicySection,
    PolicySection,
  ];
};

// Temporary localized Privacy content until reviewed, replaced, or approved by qualified legal counsel.
const privacyContentCopy: Record<Locale, PrivacyContentCopy> = {
  en: {
    heading: "Privacy Information",
    sections: [
      {
        heading: "Current Development Status",
        body: "This website is still under development. Some interfaces demonstrate intended future functionality but are not connected to production services.",
      },
      {
        heading: "Project Inquiry Form",
        body: "The project inquiry form is currently a non-submitting interface preview. Information entered into the form is validated in the browser but is not transmitted, stored, emailed, or sent to a customer relationship management system.",
      },
      {
        heading: "Theme Preference",
        body: "The website may store the selected appearance preference in the browser using local storage under the key charm-media-theme. This preference is used only to restore the selected light, dark, or system appearance.",
      },
      {
        heading: "Analytics and Advertising",
        body: "This project does not currently include a project-configured analytics platform, advertising pixel, behavioral profiling system, or remarketing integration. These disclosures must be updated before any such service is enabled.",
      },
      {
        heading: "Third-Party Services",
        body: "No production email delivery, CRM, booking, payment, file-upload, CAPTCHA, or content-management service is currently connected. Future integrations may process information under their own terms and privacy practices.",
      },
      {
        heading: "Data Retention and Security",
        body: "Because the current inquiry form does not submit information, this project does not currently define a production retention period for inquiry data. Retention, access control, deletion, and security procedures must be established before data collection begins.",
      },
      {
        heading: "Policy Updates and Contact Information",
        body: "This draft must be updated when the website’s services, data flows, vendors, or legal requirements change. Approved privacy contact information will be added before launch.",
      },
    ],
    finalDisclosure:
      "Draft policy foundation — not legal advice. Legal review is required before production launch.",
  },
  vi: {
    heading: "Thông tin quyền riêng tư",
    sections: [
      {
        heading: "Trạng thái phát triển hiện tại",
        body: "Website vẫn đang trong quá trình phát triển. Một số giao diện minh họa chức năng dự kiến trong tương lai nhưng chưa được kết nối với dịch vụ production.",
      },
      {
        heading: "Biểu mẫu thông tin dự án",
        body: "Biểu mẫu thông tin dự án hiện chỉ là bản xem trước giao diện và chưa gửi dữ liệu. Thông tin nhập vào được kiểm tra ngay trên trình duyệt nhưng không được truyền đi, lưu trữ, gửi email hoặc chuyển đến hệ thống quản lý quan hệ khách hàng.",
      },
      {
        heading: "Tùy chọn giao diện",
        body: "Website có thể lưu lựa chọn giao diện trong bộ nhớ cục bộ của trình duyệt với khóa charm-media-theme. Tùy chọn này chỉ được sử dụng để khôi phục chế độ sáng, tối hoặc theo hệ thống đã chọn.",
      },
      {
        heading: "Phân tích và quảng cáo",
        body: "Dự án hiện chưa tích hợp nền tảng phân tích, pixel quảng cáo, hệ thống lập hồ sơ hành vi hoặc công cụ remarketing do dự án cấu hình. Nội dung công bố phải được cập nhật trước khi bất kỳ dịch vụ nào như vậy được kích hoạt.",
      },
      {
        heading: "Dịch vụ bên thứ ba",
        body: "Hiện chưa có dịch vụ production nào về gửi email, CRM, đặt lịch, thanh toán, tải tệp, CAPTCHA hoặc quản lý nội dung được kết nối. Các tích hợp trong tương lai có thể xử lý thông tin theo điều khoản và chính sách quyền riêng tư riêng.",
      },
      {
        heading: "Lưu trữ và bảo mật dữ liệu",
        body: "Vì biểu mẫu hiện chưa gửi thông tin, dự án chưa xác định thời hạn lưu trữ production cho dữ liệu liên hệ. Quy trình lưu trữ, kiểm soát truy cập, xóa dữ liệu và bảo mật phải được thiết lập trước khi bắt đầu thu thập dữ liệu.",
      },
      {
        heading: "Cập nhật chính sách và thông tin liên hệ",
        body: "Bản dự thảo này phải được cập nhật khi dịch vụ, luồng dữ liệu, nhà cung cấp hoặc yêu cầu pháp lý của website thay đổi. Thông tin liên hệ về quyền riêng tư đã được phê duyệt sẽ được bổ sung trước khi ra mắt.",
      },
    ],
    finalDisclosure:
      "Nền tảng chính sách dự thảo — không phải tư vấn pháp lý. Cần được xem xét pháp lý trước khi ra mắt production.",
  },
};

export function PrivacyContentSection({
  locale,
}: Readonly<{ locale: Locale }>) {
  const copy = privacyContentCopy[locale];

  return (
    <Section
      aria-labelledby="privacy-content-heading"
      className="relative border-t border-[var(--color-border-default)] bg-[var(--color-bg-page)]"
      spacing="chapter"
    >
      <Container size="reading">
        <Stack gap="xl">
          <h2
            className="text-3xl font-semibold tracking-normal text-[var(--color-text-primary)] sm:text-4xl"
            id="privacy-content-heading"
          >
            {copy.heading}
          </h2>

          <ol className="grid gap-8">
            {copy.sections.map((section, index) => (
              <li
                className="border-t border-[var(--color-border-default)] pt-6"
                key={section.heading}
              >
                <article className="grid gap-3">
                  <p className="text-sm font-medium text-[var(--color-brand-primary)]">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="text-2xl font-semibold tracking-normal text-[var(--color-text-primary)]">
                    {section.heading}
                  </h3>
                  <p className="break-words text-base leading-7 text-[var(--color-text-secondary)]">
                    {section.body}
                  </p>
                </article>
              </li>
            ))}
          </ol>

          <p className="border-y border-[var(--color-border-default)] py-5 text-base font-semibold leading-7 text-[var(--color-text-primary)]">
            {copy.finalDisclosure}
          </p>
        </Stack>
      </Container>
    </Section>
  );
}
