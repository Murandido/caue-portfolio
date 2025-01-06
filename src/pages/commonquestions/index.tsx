import { ReactElement } from "react";
import Head from "next/head";
import Inner from "@/components/Inner";
import { CommonQuestionsHero } from "@/components/Hero";
import Layout from "@/components/Layout";
import QuestionItem from "@/components/QuestionItem";

export default function CommonQuestions() {
  const questions = [
    {
      title: <div>What is Visual Identity?</div>,
      text: (
        <div className="overflow-hidden">
          Visual Identity is a set of elements that visually express the essence
          of a company, person, service, or event. Comprising colors,
          typography, and specific shapes, it centers around the logo as its
          central element, serving as the foundation for all related materials.
        </div>
      ),
    },
    {
      title: <div>Why Invest in Visual Identity?</div>,
      text: (
        <div className="flex flex-col gap-6 overflow-hidden">
          <p>
            Similar to an individual, a company needs its own identity that sets
            it apart and makes it unique. This not only instills confidence in
            the customer but also aids in memorability and identification across
            various brand touchpoints such as business cards, bags, packaging,
            letterheads, envelopes, among others. Below, we highlight eight
            reasons why investing in design is crucial for the success of your
            company:
          </p>
          <ul className="flex list-disc flex-col gap-6 pl-8">
            <li>
              <strong>Adds Value:</strong> Brands with interesting design stand
              out from the competition, allowing for pricing with higher profit
              margins.
            </li>
            <li>
              <strong>Increases Visibility:</strong> Brands without design or
              with inappropriate design risk being overlooked, necessitating
              additional investments in marketing and advertising.
            </li>
            <li>
              <strong>Facilitates Purchase:</strong> Good design acts as a
              facilitator, assisting the consumer in the purchasing decision.
            </li>
            <li>
              <strong>Optimizes Usability:</strong> Effective design
              significantly reduces the learning curve, making interaction more
              intuitive.
            </li>
            <li>
              <strong>Builds Identity:</strong> Like individuals, brands need a
              solid identity. Design contributes to the distinctiveness and
              personality construction of the brand.
            </li>
            <li>
              <strong>Retains the Target Audience:</strong> Attractive design
              creates identification, encouraging customer loyalty to your
              brand.
            </li>
            <li>
              <strong>Credibility:</strong> Trust is fundamental, and
              well-crafted visual communication is the first step in building
              that trust.
            </li>
            <li>
              <strong>Facilitates Communication:</strong> Well-designed visual
              identity effectively directs the conversation with the audience,
              making the implementation of strategies easier and more efficient.
            </li>
          </ul>
          <p>
            Investing in Visual Identity is not just an option but an essential
            strategy to stand out in the market, build lasting relationships
            with customers, and strengthen your brand presence.
          </p>
        </div>
      ),
    },
    {
      title: (
        <div>What is The Distinction between Logo and Visual Identity?</div>
      ),
      text: (
        <div className="overflow-hidden">
          While the logo is simply a graphic element that symbolizes your
          company, the Visual Identity design is notably more comprehensive. It
          goes beyond the logo, incorporating a variety of elements that give
          personality to the brand, such as colors, typography, icons, textures,
          patterns, and various other possibilities. Visual Identity is not
          limited to the graphic aspect alone; it embraces the brand&apos;s
          touchpoints and its entire visual universe. Additionally, it takes
          into account the current context of the company and its future goals,
          considering variables and scopes to ensure a coherent and evolving
          representation of the brand&apos;s identity.
        </div>
      ),
    },
    {
      title: <div>How Does the Service Hiring Process Unfold?</div>,
      text: (
        <div className="overflow-hidden">
          The process to hire the service begins with the initial contact, where
          you share details about your business. Following a feasibility
          analysis, we schedule a meeting to delve into the necessary
          information. Next, I present a proposal that includes detailed costs
          and timelines, automatically transforming into a contract to ensure
          both parties. Upon accepting the terms, simply sign and return the
          contract, with a 50% upfront payment of the total project cost serving
          as a signal to reserve the agreed-upon date.
        </div>
      ),
    },
    {
      title: <div>How to Make the Payment?</div>,
      text: (
        <div className="overflow-hidden">
          To facilitate the payment process, we offer the convenience of bank
          transfer, Pix, or boleto (bank slip). The standard payment method
          requires a 50% upfront payment, with the remaining amount due upon
          project presentation. If you prefer to explore installment options via
          credit card, specific details can be discussed to meet your needs.
        </div>
      ),
    },
    {
      title: (
        <div>What&apos;s the Next Step After Making the 50% Down Payment?</div>
      ),
      text: (
        <div className="overflow-hidden">
          After the 50% down payment is made, we will consider the agreement
          closed, and the date specified in the contract will be reserved.
          Following this, I will send a second form to gather crucial
          information for the project, serving as a detailed briefing. This step
          ensures that the project&apos;s specifics are understood and
          incorporated efficiently, contributing to a development process
          aligned with your expectations.
        </div>
      ),
    },
    {
      title: (
        <div>
          What is the Average Timeline for Project Presentation Delivery?
        </div>
      ),
      text: (
        <div className="overflow-hidden">
          The average timeline for delivering a Visual Identity project
          presentation is approximately 30 days, with potential variations
          depending on the specific complexity of the project. It&apos;s crucial
          to note that if there are ongoing projects, yours will be queued, as
          outlined in the proposal. This process is in place to ensure careful
          and dedicated attention, necessary to provide high-quality results.
        </div>
      ),
    },
    {
      title: <div>Do you create only the logo?</div>,
      text: (
        <div className="overflow-hidden">
          No, our service encompasses the creation of the complete Visual
          Identity project, not limited to just the logo. This includes elements
          such as colors, typography, icons, textures, patterns, and other
          visual components that, when combined, build a consistent and
          distinctive visual representation for your brand.
        </div>
      ),
    },
    {
      title: (
        <div>
          If I already have the logo ready, do you only create the materials?
        </div>
      ),
      text: (
        <div className="overflow-hidden">
          No, our focus is on developing materials for Visual Identity projects
          from the beginning. If you&apos;re looking for a new project or a
          complete redesign, we aim to be available to create all visual
          elements and materials that constitute your brand&apos;s identity,
          such as colors, typography, icons, textures, patterns, and more.
        </div>
      ),
    },
    {
      title: <div>Do you develop websites?</div>,
      text: (
        <div className="overflow-hidden">
          Yes, we do develop websites. We create the prototype for the website
          design, following the visual identity that has been designed.
          Registration, hosting, programming, and implementation are carried out
          in partnership with{" "}
          <span className="underline">Studio Murandido</span>. We are committed
          to providing an online presence that not only reflects your visual
          identity but also delivers an efficient and engaging experience for
          users.
        </div>
      ),
    },
  ];

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
        <div className="min-w-minimum">
          <div className="mx-[11.25rem] mb-24 max-xl:mx-[5.5rem] max-xl:my-6 max-xs:mx-8 max-xs:my-4">
            <ul className="rounded-lg bg-secondary-300">
              {questions.map((question, i) => (
                <QuestionItem
                  title={question.title}
                  text={question.text}
                  last={questions.length === i + 1}
                  key={i}
                />
              ))}
            </ul>
          </div>
        </div>
      </Inner>
    </>
  );
}

CommonQuestions.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
