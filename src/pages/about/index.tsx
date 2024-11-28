import { ReactElement } from "react";
import Head from "next/head";
import Inner from "@/components/Inner";
import { AboutHero } from "@/components/Hero";
import MethodologyStep from "@/components/MethodologyStep";
import Layout from "@/components/Layout";

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
        <div></div>
      </Inner>
    </>
  );
}

About.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
