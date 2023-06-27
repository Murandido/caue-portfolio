import Hero from "@/components/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
};

export default function Home() {
  return (
    <>
      <Hero />
    </>
  );
}
