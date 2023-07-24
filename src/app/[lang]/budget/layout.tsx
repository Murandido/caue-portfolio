import { ReactNode } from "react";
import Header from "@/components/Header";
import { Locale, i18n } from "@/i18n-config";
import { getDictionary } from "@/get-dictionary";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function BudgetLayout({
  children,
  params: { lang },
}: {
  children: ReactNode;
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);

  return (
    <div className="flex min-h-screen flex-col">
      <Header dictionary={dictionary.components.Header} />
      {children}
    </div>
  );
}
