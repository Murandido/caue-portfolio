import Footer from "@/components/Footer";
import { ReactNode } from "react";

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <Footer page="home" />
    </>
  );
}
