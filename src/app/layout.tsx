import { ReactNode } from "react";
import "../styles/globals.css";
import "../styles/ProjectLink.css";
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

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${robotoSlab.variable} ${righteous.variable} scroll-smooth bg-secondary-300 font-righteous text-black-300 selection:bg-primary-300 selection:text-secondary-200`}
      >
        {children}
      </body>
    </html>
  );
}
