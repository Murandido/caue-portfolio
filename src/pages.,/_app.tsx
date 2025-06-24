import { ReactElement, ReactNode, useEffect } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { AppProps } from "next/app";
import { Syncopate } from "next/font/google";
import { AnimatePresence } from "framer-motion";
import { OverlayScrollbars } from "overlayscrollbars";

// import "overlayscrollbars/overlayscrollbars.css";
import "../styles/CompactNavbarStyle.css";
import "../styles/budget.css";
import "../styles/globals.css";

const syncopate = Syncopate({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function RootLayout({
  Component,
  pageProps,
}: AppPropsWithLayout) {
  const router = useRouter();

  // custom scroll bar
  useEffect(() => {
    const osInstance = OverlayScrollbars(document.body, {
      scrollbars: { autoHide: "never", theme: "os-theme-custom" },
    });

    // cleanup function
    return () => {
      if (osInstance) {
        osInstance.destroy();
      }
    };
  }, []);

  const getLayout = Component.getLayout ?? ((page: ReactElement) => page);

  return getLayout(
    <div className={`${syncopate.className} box-border`}>
      <AnimatePresence mode="wait">
        <Component key={router.route} {...pageProps} />
      </AnimatePresence>
    </div>,
  );
}
