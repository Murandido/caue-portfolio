import { useRouter } from "next/router";
import { AppProps } from "next/app";
import { Syncopate } from "next/font/google";
import { AnimatePresence } from "framer-motion";
import "../styles/CompactNavbarStyle.css";
import "../styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const syncopate = Syncopate({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-syncopate",
});

export default function RootLayout({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <>
      <Header />
      <main
        className={`${syncopate.className} mt-[8.5rem] box-border max-xs:mt-14`}
      >
        <AnimatePresence mode="wait">
          <Component key={router.route} {...pageProps} />
        </AnimatePresence>
      </main>
      <Footer />
    </>
  );
}
