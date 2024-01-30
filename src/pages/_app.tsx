import { Syncopate } from "next/font/google";
import "../styles/CompactNavbarStyle.css";
import "../styles/globals.css";
import { AppProps } from "next/app";

const syncopate = Syncopate({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-syncopate",
});

export default function RootLayout({ Component, pageProps }: AppProps) {
  return (
    <main
      className={`${syncopate.className} mt-[8.5rem] box-border max-xs:mt-14`}
    >
      <Component {...pageProps} />
    </main>
  );
}
