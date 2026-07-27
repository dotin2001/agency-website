import { ContactExpectationsSection } from "@/components/sections/contact/contact-expectations-section";
import { ContactFormSection } from "@/components/sections/contact/contact-form-section";
import { ContactHeroSection } from "@/components/sections/contact/contact-hero-section";

type Locale = "en" | "vi";

export default async function ContactPage({
  params,
}: Readonly<{
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  return (
    <>
      <ContactHeroSection locale={locale as Locale} />
      <ContactFormSection locale={locale as Locale} />
      <ContactExpectationsSection locale={locale as Locale} />
    </>
  );
}
