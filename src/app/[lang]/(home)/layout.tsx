import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { getDictionary } from "@/get-dictionary";
import { Locale, i18n } from "@/i18n-config";
import { ReactNode } from "react";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function HomeLayout({
  children,
  params: { lang },
}: {
  children: ReactNode;
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);

  return (
    <>
      <Header dictionary={dictionary.components.Header} />
      {children}
      <Footer dictionary={dictionary.components.Footer} />
    </>
  );
}
