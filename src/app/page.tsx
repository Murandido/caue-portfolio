import Header from "@/components/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
};

export default function Home() {
  return (
    <>
      <Header />
    </>
  );
}
