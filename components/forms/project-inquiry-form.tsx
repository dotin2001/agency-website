"use client";

import { type FormEvent, useRef, useState } from "react";

type Locale = "en" | "vi";

type SelectOption = {
  label: string;
  value: string;
};

type ProjectInquiryFormCopy = {
  budgetOptions: readonly SelectOption[];
  consentLabel: string;
  detailsHelper: string;
  fieldRequired: string;
  fields: {
    budget: string;
    company: string;
    consent: string;
    details: string;
    email: string;
    name: string;
    projectType: string;
    timeline: string;
  };
  optional: string;
  projectTypeOptions: readonly SelectOption[];
  submitLabel: string;
  successPreview: string;
  timelineOptions: readonly SelectOption[];
};

const projectInquiryFormCopy: Record<Locale, ProjectInquiryFormCopy> = {
  en: {
    fields: {
      name: "Your name",
      email: "Work email",
      company: "Company or organization",
      projectType: "What do you need help with?",
      budget: "Estimated budget",
      timeline: "Target timeline",
      details: "Tell us about the project",
      consent: "Consent",
    },
    detailsHelper:
      "Include the challenge, priorities, audience, existing materials, and what success should look like.",
    fieldRequired: "Required",
    optional: "Optional",
    projectTypeOptions: [
      { label: "Brand strategy and identity", value: "brand" },
      { label: "Creative campaign", value: "campaign" },
      { label: "Website or digital experience", value: "digital" },
      { label: "Content and social", value: "content" },
      { label: "Media and performance", value: "performance" },
      { label: "Integrated project", value: "integrated" },
      { label: "Something else", value: "other" },
    ],
    budgetOptions: [
      { label: "Under $10,000", value: "under-10k" },
      { label: "$10,000–$25,000", value: "10k-25k" },
      { label: "$25,000–$50,000", value: "25k-50k" },
      { label: "$50,000–$100,000", value: "50k-100k" },
      { label: "Over $100,000", value: "over-100k" },
      { label: "Not defined yet", value: "undefined" },
    ],
    timelineOptions: [
      { label: "As soon as possible", value: "asap" },
      { label: "Within 1–2 months", value: "1-2-months" },
      { label: "Within 3–6 months", value: "3-6-months" },
      { label: "More than 6 months", value: "over-6-months" },
      { label: "Still exploring", value: "exploring" },
    ],
    consentLabel:
      "I understand that this form is currently a non-submitting interface preview.",
    submitLabel: "Prepare Inquiry",
    successPreview:
      "Your inquiry is ready for review. Submission delivery will be enabled before launch.",
  },
  vi: {
    fields: {
      name: "Tên của bạn",
      email: "Email công việc",
      company: "Công ty hoặc tổ chức",
      projectType: "Bạn cần hỗ trợ về lĩnh vực nào?",
      budget: "Ngân sách dự kiến",
      timeline: "Thời gian dự kiến",
      details: "Chia sẻ về dự án",
      consent: "Xác nhận",
    },
    detailsHelper:
      "Hãy chia sẻ bài toán, ưu tiên, đối tượng, tài liệu hiện có và hình dung về kết quả mong muốn.",
    fieldRequired: "Bắt buộc",
    optional: "Không bắt buộc",
    projectTypeOptions: [
      { label: "Chiến lược và nhận diện thương hiệu", value: "brand" },
      { label: "Chiến dịch sáng tạo", value: "campaign" },
      { label: "Website hoặc trải nghiệm số", value: "digital" },
      { label: "Nội dung và mạng xã hội", value: "content" },
      { label: "Media và hiệu quả", value: "performance" },
      { label: "Dự án tích hợp", value: "integrated" },
      { label: "Nhu cầu khác", value: "other" },
    ],
    budgetOptions: [
      { label: "Dưới $10,000", value: "under-10k" },
      { label: "$10,000–$25,000", value: "10k-25k" },
      { label: "$25,000–$50,000", value: "25k-50k" },
      { label: "$50,000–$100,000", value: "50k-100k" },
      { label: "Trên $100,000", value: "over-100k" },
      { label: "Chưa xác định", value: "undefined" },
    ],
    timelineOptions: [
      { label: "Sớm nhất có thể", value: "asap" },
      { label: "Trong 1–2 tháng", value: "1-2-months" },
      { label: "Trong 3–6 tháng", value: "3-6-months" },
      { label: "Trên 6 tháng", value: "over-6-months" },
      { label: "Đang tìm hiểu", value: "exploring" },
    ],
    consentLabel:
      "Tôi hiểu rằng biểu mẫu hiện chỉ là bản xem trước giao diện và chưa gửi dữ liệu.",
    submitLabel: "Chuẩn bị nội dung",
    successPreview:
      "Nội dung của bạn đã sẵn sàng để kiểm tra. Chức năng gửi sẽ được kích hoạt trước khi ra mắt.",
  },
};

const baseFieldClasses =
  "min-h-12 w-full rounded-md border border-[var(--color-border-default)] bg-[var(--color-bg-page)] px-3 py-2 text-base text-[var(--color-text-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand-primary)]";

const labelClasses =
  "text-sm font-medium leading-6 text-[var(--color-text-primary)]";

function RequiredLabel({ children }: Readonly<{ children: string }>) {
  return (
    <span className="text-xs font-medium text-[var(--color-text-secondary)]">
      {children}
    </span>
  );
}

function FieldLabel({
  children,
  htmlFor,
  meta,
}: Readonly<{
  children: string;
  htmlFor: string;
  meta: string;
}>) {
  return (
    <label className={labelClasses} htmlFor={htmlFor}>
      <span className="flex items-baseline justify-between gap-4">
        <span>{children}</span>
        <RequiredLabel>{meta}</RequiredLabel>
      </span>
    </label>
  );
}

export function ProjectInquiryForm({ locale }: Readonly<{ locale: Locale }>) {
  const formRef = useRef<HTMLFormElement>(null);
  const [previewCount, setPreviewCount] = useState(0);
  const copy = projectInquiryFormCopy[locale];
  const projectTypeDefault =
    locale === "vi" ? "Chọn loại dự án" : "Select a project type";
  const budgetDefault = locale === "vi" ? "Chọn khoảng ngân sách" : "Select a range";
  const timelineDefault = locale === "vi" ? "Chọn thời gian" : "Select a timeline";

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = formRef.current;

    if (!form) {
      return;
    }

    if (!form.checkValidity()) {
      setPreviewCount(0);
      form.reportValidity();
      return;
    }

    setPreviewCount((currentCount) => currentCount + 1);
  }

  return (
    <form
      className="grid gap-6 rounded-md border border-[var(--color-border-default)] bg-[var(--color-bg-section)] p-4 sm:p-6"
      onInvalid={() => setPreviewCount(0)}
      onSubmit={handleSubmit}
      ref={formRef}
    >
      <div className="grid gap-5 md:grid-cols-2">
        <div className="grid gap-2">
          <FieldLabel
            htmlFor="contact-name"
            meta={copy.fieldRequired}
          >
            {copy.fields.name}
          </FieldLabel>
          <input
            autoComplete="name"
            className={baseFieldClasses}
            id="contact-name"
            maxLength={100}
            name="name"
            required
            type="text"
          />
        </div>

        <div className="grid gap-2">
          <FieldLabel
            htmlFor="contact-email"
            meta={copy.fieldRequired}
          >
            {copy.fields.email}
          </FieldLabel>
          <input
            autoComplete="email"
            className={baseFieldClasses}
            id="contact-email"
            maxLength={254}
            name="email"
            required
            type="email"
          />
        </div>

        <div className="grid gap-2">
          <FieldLabel htmlFor="contact-company" meta={copy.optional}>
            {copy.fields.company}
          </FieldLabel>
          <input
            autoComplete="organization"
            className={baseFieldClasses}
            id="contact-company"
            maxLength={150}
            name="company"
            type="text"
          />
        </div>

        <div className="grid gap-2">
          <FieldLabel
            htmlFor="contact-project-type"
            meta={copy.fieldRequired}
          >
            {copy.fields.projectType}
          </FieldLabel>
          <select
            className={baseFieldClasses}
            defaultValue=""
            id="contact-project-type"
            name="projectType"
            required
          >
            <option disabled value="">
              {projectTypeDefault}
            </option>
            {copy.projectTypeOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className="grid gap-2">
          <FieldLabel htmlFor="contact-budget" meta={copy.optional}>
            {copy.fields.budget}
          </FieldLabel>
          <select
            className={baseFieldClasses}
            defaultValue=""
            id="contact-budget"
            name="budget"
          >
            <option disabled value="">
              {budgetDefault}
            </option>
            {copy.budgetOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className="grid gap-2">
          <FieldLabel htmlFor="contact-timeline" meta={copy.optional}>
            {copy.fields.timeline}
          </FieldLabel>
          <select
            className={baseFieldClasses}
            defaultValue=""
            id="contact-timeline"
            name="timeline"
          >
            <option disabled value="">
              {timelineDefault}
            </option>
            {copy.timelineOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid gap-2">
        <FieldLabel
          htmlFor="contact-details"
          meta={copy.fieldRequired}
        >
          {copy.fields.details}
        </FieldLabel>
        <textarea
          aria-describedby="contact-details-helper"
          className={`${baseFieldClasses} min-h-48 resize-y leading-7`}
          id="contact-details"
          maxLength={2000}
          minLength={20}
          name="details"
          required
          rows={8}
        />
        <p
          className="text-sm leading-6 text-[var(--color-text-secondary)]"
          id="contact-details-helper"
        >
          {copy.detailsHelper}
        </p>
      </div>

      <div className="flex gap-3 border-t border-[var(--color-border-default)] pt-5">
        <input
          className="mt-1 h-5 w-5 shrink-0 accent-[var(--color-brand-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand-primary)]"
          id="contact-consent"
          name="consent"
          required
          type="checkbox"
        />
        <label
          className="text-sm leading-6 text-[var(--color-text-primary)]"
          htmlFor="contact-consent"
        >
          {copy.consentLabel}{" "}
          <span className="text-[var(--color-text-secondary)]">
            {copy.fieldRequired}
          </span>
        </label>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <button
          className="inline-flex min-h-11 items-center justify-center rounded-md border border-[var(--color-button-primary-bg,var(--color-brand-primary))] bg-[var(--color-button-primary-bg,var(--color-brand-primary))] px-5 py-3 text-base font-medium tracking-normal text-[var(--color-button-primary-text,rgb(10,16,26))] hover:border-[var(--color-text-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand-primary)]"
          type="submit"
        >
          {copy.submitLabel}
        </button>

        {previewCount > 0 ? (
          <p
            className="max-w-md text-sm leading-6 text-[var(--color-text-secondary)]"
            key={previewCount}
            role="status"
          >
            {copy.successPreview}
          </p>
        ) : null}
      </div>
    </form>
  );
}
