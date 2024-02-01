import Head from "next/head";
import Inner from "@/components/Inner";
import { AboutHero } from "@/components/Hero";

export default function About() {
  return (
    <>
      <Head>
        <title>About | Cauê Henrique studio</title>
        <meta
          name="description"
          content="It's about creating creative solutions for brands that need to differentiate in the market scenario"
        />
      </Head>
      <Inner>
        <AboutHero />
      </Inner>
    </>
  );
}
