"use client";

import { type FormEvent, useRef, useState } from "react";
import type {
  ContactFormSectionContent,
  ContactPageContent,
} from "@/lib/content/contact";

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

type ProjectInquiryFormProps = Readonly<{
  content: ContactFormSectionContent;
  fields: ContactPageContent["fields"];
}>;

function getFieldMeta(
  field: ContactPageContent["fields"][number],
  content: ContactFormSectionContent,
) {
  return field.required
    ? content.requiredIndicatorText
    : content.optionalIndicatorText;
}

export function ProjectInquiryForm({
  content,
  fields,
}: ProjectInquiryFormProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const [previewCount, setPreviewCount] = useState(0);
  const [
    nameField,
    emailField,
    companyField,
    projectTypeField,
    budgetField,
    timelineField,
    detailsField,
    consentField,
  ] = fields;

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
            htmlFor={nameField.id}
            meta={getFieldMeta(nameField, content)}
          >
            {nameField.label}
          </FieldLabel>
          <input
            autoComplete={nameField.autoComplete}
            className={baseFieldClasses}
            id={nameField.id}
            maxLength={nameField.maxLength}
            name={nameField.name}
            required={nameField.required}
            type={nameField.inputType}
          />
        </div>

        <div className="grid gap-2">
          <FieldLabel
            htmlFor={emailField.id}
            meta={getFieldMeta(emailField, content)}
          >
            {emailField.label}
          </FieldLabel>
          <input
            autoComplete={emailField.autoComplete}
            className={baseFieldClasses}
            id={emailField.id}
            maxLength={emailField.maxLength}
            name={emailField.name}
            required={emailField.required}
            type={emailField.inputType}
          />
        </div>

        <div className="grid gap-2">
          <FieldLabel
            htmlFor={companyField.id}
            meta={getFieldMeta(companyField, content)}
          >
            {companyField.label}
          </FieldLabel>
          <input
            autoComplete={companyField.autoComplete}
            className={baseFieldClasses}
            id={companyField.id}
            maxLength={companyField.maxLength}
            name={companyField.name}
            required={companyField.required}
            type={companyField.inputType}
          />
        </div>

        <div className="grid gap-2">
          <FieldLabel
            htmlFor={projectTypeField.id}
            meta={getFieldMeta(projectTypeField, content)}
          >
            {projectTypeField.label}
          </FieldLabel>
          <select
            className={baseFieldClasses}
            defaultValue=""
            id={projectTypeField.id}
            name={projectTypeField.name}
            required={projectTypeField.required}
          >
            <option
              disabled={projectTypeField.defaultOption.disabled}
              value={projectTypeField.defaultOption.value}
            >
              {projectTypeField.defaultOption.label}
            </option>
            {projectTypeField.options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className="grid gap-2">
          <FieldLabel
            htmlFor={budgetField.id}
            meta={getFieldMeta(budgetField, content)}
          >
            {budgetField.label}
          </FieldLabel>
          <select
            className={baseFieldClasses}
            defaultValue=""
            id={budgetField.id}
            name={budgetField.name}
            required={budgetField.required}
          >
            <option
              disabled={budgetField.defaultOption.disabled}
              value={budgetField.defaultOption.value}
            >
              {budgetField.defaultOption.label}
            </option>
            {budgetField.options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className="grid gap-2">
          <FieldLabel
            htmlFor={timelineField.id}
            meta={getFieldMeta(timelineField, content)}
          >
            {timelineField.label}
          </FieldLabel>
          <select
            className={baseFieldClasses}
            defaultValue=""
            id={timelineField.id}
            name={timelineField.name}
            required={timelineField.required}
          >
            <option
              disabled={timelineField.defaultOption.disabled}
              value={timelineField.defaultOption.value}
            >
              {timelineField.defaultOption.label}
            </option>
            {timelineField.options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid gap-2">
        <FieldLabel
          htmlFor={detailsField.id}
          meta={getFieldMeta(detailsField, content)}
        >
          {detailsField.label}
        </FieldLabel>
        <textarea
          aria-describedby={`${detailsField.id}-helper`}
          className={`${baseFieldClasses} min-h-48 resize-y leading-7`}
          id={detailsField.id}
          maxLength={detailsField.maxLength}
          minLength={detailsField.minLength}
          name={detailsField.name}
          required={detailsField.required}
          rows={detailsField.rows}
        />
        <p
          className="text-sm leading-6 text-[var(--color-text-secondary)]"
          id={`${detailsField.id}-helper`}
        >
          {detailsField.helperText}
        </p>
      </div>

      <div className="flex gap-3 border-t border-[var(--color-border-default)] pt-5">
        <input
          className="mt-1 h-5 w-5 shrink-0 accent-[var(--color-brand-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand-primary)]"
          id={consentField.id}
          name={consentField.name}
          required={consentField.required}
          type={consentField.type}
        />
        <label
          className="text-sm leading-6 text-[var(--color-text-primary)]"
          htmlFor={consentField.id}
        >
          {consentField.label}{" "}
          <span className="text-[var(--color-text-secondary)]">
            {content.requiredIndicatorText}
          </span>
        </label>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <button
          className="motion-interactive inline-flex min-h-11 items-center justify-center rounded-md border border-[var(--color-button-primary-bg,var(--color-brand-primary))] bg-[var(--color-button-primary-bg,var(--color-brand-primary))] px-5 py-3 text-base font-medium tracking-normal text-[var(--color-button-primary-text,rgb(10,16,26))] hover:border-[var(--color-text-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand-primary)] motion-safe:hover:-translate-y-px"
          type="submit"
        >
          {content.submitLabel}
        </button>

        {previewCount > 0 ? (
          <p
            className="max-w-md text-sm leading-6 text-[var(--color-text-secondary)]"
            key={previewCount}
            role="status"
          >
            {content.previewMessage}
          </p>
        ) : null}
      </div>
    </form>
  );
}
