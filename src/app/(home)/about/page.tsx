import AboutCaue from "@/components/AboutCaue";
import Hero from "@/components/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - Studio cauehenrique",
};

export default function AboutPage() {
  return (
    <main>
      <Hero>
        <span className="text-primary-300">It&apos;s about</span> creating
        creative solutions for companies that need to{" "}
        <span className="text-primary-300">differentiate</span> themselves in
        the market scenario.
      </Hero>
      <AboutCaue />
    </main>
  );
}
