import { ReactNode } from "react";
import { i18n } from "@/i18n-config";
import "../../styles/globals.css";
import "../../styles/animations.css";
import { Roboto_Slab as Roboto, Righteous } from "next/font/google";

const robotoSlab = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto-slab",
});

const righteous = Righteous({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-righteous",
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
        className={`${robotoSlab.variable} ${righteous.variable} scroll-smooth bg-secondary-300 font-righteous text-black-300 selection:bg-primary-300 selection:text-secondary-200`}
      >
        {children}
      </body>
    </html>
  );
}
