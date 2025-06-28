import Header from "@/components/Header";
import "../styles/CompactNavbarStyle.css";
import "../styles/budget.css";
import "../styles/globals.css";
import "overlayscrollbars/overlayscrollbars.css";
import Footer from "@/components/Footer";
import { Syncopate } from "next/font/google";
import localFont from 'next/font/local';
import OverlayScroll from "@/components/OverlayScroll";
import { RouteLocale, Router, schema } from "next-roots";
import { getDictionary } from "@/utils/getDictionary";
import { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";

export type Links = {
  index: {
    href: string,
    name: string
  },
  about: {
    href: string,
    name: string
  },
  budget: {
    href: string,
    name: string
  },
  commonquestions: {
    href: string,
    name: string
  };
}

const syncopate = Syncopate({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-syncopate",
});

const gelica = localFont({
  src: [
    {
      path: "../assets/fonts/Gelica-fontiko/Gelica-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/Gelica-fontiko/Gelica-Bold.otf",
      weight: "700",
      style: "normal",
    }
  ],
  variable: "--font-gelica",
});

async function getData(locale: string) {
  const t = await getDictionary(locale);
  return {
    headerT: t("components.header"),
    footerT: t('components.footer'),
  };
}

export const metadata: Metadata ={
  
}

export default async function RootLayout({
  children,
  locale,
}: {
  children: React.ReactNode,
  locale: RouteLocale
}) {
  const router = new Router(schema);

  const { headerT, footerT } = await getData(locale);

  const links: Links = {
    index: {
      href: router.getHref("/", { locale }),
      name: headerT.links.home
    },
    about: {
      href: router.getHref("/about", { locale }),
      name: headerT.links.about
    },
    budget: {
      href: router.getHref("/budget", { locale }),
      name: headerT.links.budget
    },
    commonquestions: {
      href: router.getHref("/commonquestions", { locale }),
      name: headerT.links.commonquestions
    },
  };

  return (
    <html lang={locale}>
      <head>
        <link rel="preload" href="https://use.typekit.net/mbo6ejv.css" as="style" />
        <link rel="stylesheet" href="https://use.typekit.net/mbo6ejv.css" />
      </head>
      <body className={`${gelica.variable} ${syncopate.variable} box-border flex-1 flex flex-col`}>
        <OverlayScroll />
        <Header links={links} />
        <main className="mt-34 max-xs:mt-14 flex-1 flex flex-col">
          {children}
        </main>
        <Footer locale={locale} translation={footerT} />
        <GoogleAnalytics gaId="AW-16777407510" />
      </body>
    </html>
  )
}