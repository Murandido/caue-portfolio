import Head from "next/head";
import Inner from "@/components/Inner";
import { AboutHero } from "@/components/Hero";
import MethodologyStep from "@/components/MethodologyStep";

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
        <div className="flex min-w-minimum flex-col items-center justify-center font-gelica text-xl leading-[150%] max-xs:text-xs">
          <div className="flex w-full flex-wrap gap-12 p-[11.25rem] pb-[5.5rem] max-xl:p-[5.5rem] max-xl:pb-12 max-xs:px-8 max-xs:pb-6 max-xs:pt-12">
            <h1 className="flex-[0_1_27.625rem] font-syncopate font-bold uppercase">
              We are a brand design studio that believes in human connection.
            </h1>
            <div className="flex flex-[1_1_66rem] flex-wrap gap-12">
              <p className="flex-[1_1_30rem]">
                We believe in human-centered design, which not only connects
                with the audience&apos;s style but also creates lasting
                connections with customers. We understand that each human being
                communicates and lives in a unique way, and with this
                perspective in mind, we create visual identities that appeal to
                the right audience. Through extensive studies of your brand, we
                craft designs that express themselves in an appealing manner to
                the right people.
              </p>
              <p className="flex-[1_1_30rem]">
                If your project extends into the digital web sphere, we are
                ready to bring your online vision to life. In partnership with
                Studio Murandido, a full-stack programming team, we offer
                website solutions capable of enhancing your online presence
                effectively. Count on us to transform your identity not only in
                design but also into a distinctive digital presence.
              </p>
            </div>
          </div>
          <div className="flex w-full flex-wrap gap-12 px-[11.25rem] pb-[9.75rem] pt-[5.5rem] max-xl:p-[5.5rem] max-xl:pt-12 max-xs:px-8 max-xs:py-6">
            <h1 className="flex-[0_1_27.625rem] font-syncopate font-bold uppercase">
              What about cauê henrique?
            </h1>
            <div className="flex-[1_1_41rem]">
              <p>
                Passionate about art and his own studies, Cauê Henrique is a
                brand and interface designer. He discovered this passion after,
                influenced by his father, starting a graphic design course at
                the young age of 14. This influence didn&apos;t come out of
                nowhere; his father decided to guide him after recognizing
                Cauê&apos;s potential when he independently created a logo for
                his father&apos;s new venture. Now, as the art director of this
                studio, he transforms studies into memorable identities that
                effectively communicate with the target audience. Come and
                discover how the 5 stages of his methodology work.
              </p>
              <div className="mt-8 text-sm font-light">
                <div>Design Gráfico - Ferramentas Digitais [Senac]</div>
                <div>Curso online de identidade visual [ID Class]</div>
              </div>
            </div>
          </div>
        </div>
        <div className="min-w-minimum">
          <div className="mx-[11.25rem] my-6 flex flex-col gap-6 max-xl:mx-[5.5rem] max-xs:mx-8">
            <MethodologyStep
              title="Imerssion"
              desc='An experience to "immerse" oneself in the process and comprehend how design will position your brand in the market. Analyses that will assist us in understanding the purpose, the process, and the "reason for being" of your brand. We will analyze who your target audience is, who the competitors are, and how your brand can stand out in the market.'
            />
            <MethodologyStep
              title="Tune"
              desc="A collaboration to centralize, balance, and identify the exact path of our journey. A report will be presented summarizing all analyses and findings up to this point. We will engage in an activity to define the visual direction, align expectations, and strategically guide our efforts."
            />
            <MethodologyStep
              title="Reason"
              desc="A flow of ideas materializing effective solutions in shapes, colors, typography, and supporting elements. It's time to bring to life the strategies outlined in previous stages. Through sketches, we will generate a set of ideas aligned with the brand guidelines. Subsequently, we will filter the best options and refine them until we achieve the ideal format."
            />
            <MethodologyStep
              title="Manifest"
              desc="The grand moment to present the results with brand applications and the creative process. With the participation of all partners, we will recap the project's development from the beginning to the central idea. This will enable an understanding of the functionalities and advantages of the new visual system."
            />
            <MethodologyStep
              title="Epilogue"
              desc="Conclusion and file delivery, including the logo and its versions, font, graphic elements, and a manual. We've prepared a package with all deliverables, accompanied by an essential guide for the internal design team and partners. This document provides crucial information for the accurate reproduction of the brand, safeguarding its fundamental characteristics."
            />
          </div>
        </div>
      </Inner>
    </>
  );
}
