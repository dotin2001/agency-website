import { notFound } from "next/navigation";
import { LanguageProvider } from "./language-provider";

const supportedLocales = ["en", "vi"] as const;

type Locale = (typeof supportedLocales)[number];

function isSupportedLocale(locale: string): locale is Locale {
  return supportedLocales.includes(locale as Locale);
}

export function generateStaticParams() {
  return supportedLocales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    notFound();
  }

  return <LanguageProvider locale={locale}>{children}</LanguageProvider>;
}
