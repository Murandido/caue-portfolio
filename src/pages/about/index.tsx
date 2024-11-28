import { ReactElement } from "react";
import Head from "next/head";
import Inner from "@/components/Inner";
import { AboutHero } from "@/components/Hero";
import MethodologySteps from "@/components/MethodologySteps";
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
            <div>
              <div></div>
              <MethodologySteps />
              <div></div>
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
