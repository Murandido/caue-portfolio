import { ReactNode } from "react";
import Header from "@/components/Header";

export default function BudgetLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      {children}
    </div>
  );
}
