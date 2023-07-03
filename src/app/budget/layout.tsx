import Footer from "@/components/Footer";
import { ReactNode } from "react";

export default function BudgetLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <Footer page="budget" />
    </>
  );
}
