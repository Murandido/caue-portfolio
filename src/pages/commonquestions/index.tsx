import Head from "next/head";
import Inner from "@/components/Inner";
import { CommonQuestionsHero } from "@/components/Hero";

export default function CommonQuestions() {
  return (
    <>
      <Head>
        <title>Common Questions | Cauê Henrique studio</title>
        <meta
          name="description"
          content="To simplify our work and enhance our clients' understanding, this page has been created with the most common questions about our services and visual identity."
        />
      </Head>
      <Inner>
        <CommonQuestionsHero />
      </Inner>
    </>
  );
}
