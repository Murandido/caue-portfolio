import { ReactElement } from "react";
import Head from "next/head";
import Inner from "@/components/Inner";
import { AboutHero } from "@/components/Hero";
import MethodologySteps from "@/components/MethodologySteps";
import Layout from "@/components/Layout";

export default function About() {
  const steps = [
    {
      number: 1,
      ordinalSymbol: "st",
      label: "IMERSSION",
      text: 'An experience to "immerse" oneself in the process and comprehend how design will position your brand in the market. Analyses that will assist us in understanding the purpose, the process, and the "reason for being" of your brand. We will analyze who your target audience is, who the competitors are, and how your brand can stand out in the market.',
    },
    {
      number: 2,
      ordinalSymbol: "nd",
      label: "TUNE",
      text: "A collaboration to centralize, balance, and identify the exact path of our journey. A report will be presented summarizing all analyses and findings up to this point. We will engage in an activity to define the visual direction, align expectations, and strategically guide our efforts.",
    },
    {
      number: 3,
      ordinalSymbol: "rd",
      label: "REASON",
      text: "A flow of ideas materializing effective solutions in shapes, colors, typography, and supporting elements. It's time to bring to life the strategies outlined in previous stages. Through sketches, we will generate a set of ideas aligned with the brand guidelines. Subsequently, we will filter the best options and refine them until we achieve the ideal format.",
    },
    {
      number: 4,
      ordinalSymbol: "th",
      label: "MANIFEST",
      text: "The grand moment to present the results with brand applications and the creative process. With the participation of all partners, we will recap the project's development from the beginning to the central idea. This will enable an understanding of the functionalities and advantages of the new visual system.",
    },
    {
      number: 5,
      ordinalSymbol: "th",
      label: "EPILOGUE",
      text: "Conclusion and file delivery, including the logo and its versions, font, graphic elements, and a manual. We've prepared a package with all deliverables, accompanied by an essential guide for the internal design team and partners. This document provides crucial information for the accurate reproduction of the brand, safeguarding its fundamental characteristics.",
    },
  ];

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
        <div className="min-w-minimum">
          <div className="mx-[11.25rem] max-xl:mx-[5.5rem] max-xs:mx-8">
            <div className="rounded-lg bg-tertiary-300">
              <div className="p-20 max-xs:p-8">
                <div className="flex flex-col gap-4 border-b border-tertiary-400 pb-[4.5rem] max-xs:gap-2 max-xs:pb-6">
                  <h1 className="text-2xl font-bold uppercase leading-[150%] max-xs:text-xs">
                    We are a brand design studio that believes in human
                    connection
                  </h1>
                  <p className="font-gelica text-xl leading-[150%] max-xs:text-[0.625rem]">
                    We believe in human-centered design, which not only connects
                    with the audience&apos;s style but also creates lasting
                    connections with customers. We understand that each human
                    being communicates and lives in a unique way, and with this
                    perspective in mind, we create visual identities that appeal
                    to the right audience. Through extensive studies of your
                    brand, we craft designs that express themselves in an
                    appealing manner to the right people.
                  </p>
                </div>
                <div className="flex flex-col gap-4 pt-[4.5rem] max-xs:gap-2 max-xs:pt-6">
                  <h1 className="text-2xl font-bold uppercase leading-[150%] max-xs:text-xs">
                    about cauê henrique
                  </h1>
                  <p className="font-gelica text-xl leading-[150%] max-xs:text-[0.625rem]">
                    Passionate about art and his own studies, Cauê Henrique is a
                    brand and interface designer. He discovered this passion
                    after, influenced by his father, starting a graphic design
                    course at the young age of 14. This influence didn&apos;t
                    come out of nowhere; his father decided to guide him after
                    recognizing Cauê&apos;s potential when he independently
                    created a logo for his father&apos;s new venture. Now, as
                    the art director of this studio, he transforms studies into
                    memorable identities that effectively communicate with the
                    target audience. Come and discover how the 5 stages of his
                    methodology work.
                  </p>
                </div>
              </div>
            </div>
            <div className="mb-24 mt-12 flex flex-col gap-6">
              <div className="flex justify-center">
                <h1 className="text-2xl font-bold uppercase">
                  Get to know our five steps methodology
                </h1>
              </div>
              <MethodologySteps steps={steps} />
              <div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </Inner>
    </>
  );
}

About.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
