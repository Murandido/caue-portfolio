import Footer from "@/components/Footer";
import { ReactNode } from "react";
import Header from "@/components/Header";

export default function BudgetLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer page="budget" />
    </>
  );
}
