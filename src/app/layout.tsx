import { ReactNode } from "react";
import "./globals.css";
import { Roboto_Slab as Roboto, Righteous } from "next/font/google";
import Header from "@/components/Header";

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
        className={`${robotoSlab.variable} ${righteous.variable} bg-secondary-300 font-righteous`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
