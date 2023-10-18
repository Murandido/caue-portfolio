import { ReactNode } from "react";
import { i18n } from "@/i18n-config";
import "../../styles/globals.css";
import "../../styles/animations.css";
import { Syncopate } from "next/font/google";

const syncopate = Syncopate({
  weight: "700",
  subsets: ["latin"],
  variable: "--font-syncopate",
});

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default function RootLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { lang: string };
}) {
  return (
    <html lang={params.lang}>
      <body
        className={`${syncopate.variable} scroll-smooth bg-secondary-300 font-righteous text-black-300 selection:bg-primary-300 selection:text-secondary-200`}
      >
        {children}
      </body>
    </html>
  );
}
