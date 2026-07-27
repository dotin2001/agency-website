import type { Metadata } from "next";
import { ContactExpectationsSection } from "@/components/sections/contact/contact-expectations-section";
import { ContactFormSection } from "@/components/sections/contact/contact-form-section";
import { ContactHeroSection } from "@/components/sections/contact/contact-hero-section";
import { getContactContent } from "@/lib/content/contact";
import type { Locale } from "@/lib/i18n/locales";
import {
  buildLocalizedMetadata,
  getPrimaryRouteMetadataTitle,
} from "@/lib/seo/metadata";

type ContactPageProps = Readonly<{
  params: Promise<{ locale: string }>;
}>;

export async function generateMetadata({
  params,
}: ContactPageProps): Promise<Metadata> {
  const { locale } = await params;
  const currentLocale = locale as Locale;
  const content = getContactContent(currentLocale);

  return buildLocalizedMetadata({
    description: content.hero.supportingCopy,
    locale: currentLocale,
    routePath: "/contact",
    title: getPrimaryRouteMetadataTitle(currentLocale, "contact"),
  });
}

export default async function ContactPage({ params }: ContactPageProps) {
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
