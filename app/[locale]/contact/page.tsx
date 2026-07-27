import { ContactExpectationsSection } from "@/components/sections/contact/contact-expectations-section";
import { ContactFormSection } from "@/components/sections/contact/contact-form-section";
import { ContactHeroSection } from "@/components/sections/contact/contact-hero-section";
import { getContactContent } from "@/lib/content/contact";
import type { Locale } from "@/lib/i18n/locales";

export default async function ContactPage({
  params,
}: Readonly<{
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  const content = getContactContent(locale as Locale);

  return (
    <>
      <ContactHeroSection content={content.hero} />
      <ContactFormSection
        content={content.formSection}
        fields={content.fields}
      />
      <ContactExpectationsSection content={content.expectations} />
    </>
  );
}
