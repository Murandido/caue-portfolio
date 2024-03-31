import { ReactNode } from "react";
import Header from "../Header";
import Footer from "../Footer";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main className="mt-[8.5rem] max-xs:mt-14">{children}</main>
      <Footer />
    </>
  );
}
