import Link from "next/link";
import InfoTopic from "./InfoTopic";

export default function Info() {
  return (
    <div className="m-5 mb-0 flex justify-center font-robotoSlab">
      <div className="flex max-w-[100rem] flex-col">
        <div className="flex justify-center border-b border-[#D9D9D9] font-righteous text-4xl leading-normal max-sm:text-base">
          <h1 className="mx-[9.25rem] my-24 max-w-[59.5rem] text-center max-lg:mx-7 max-sm:my-12 max-xs:mx-2">
            Design that communicates with the right audience, stands out, and
            attracts.
          </h1>
        </div>
        <div>
          <InfoTopic>
            We are a design studio specializing in creating strategic visual
            identities for unique companies, as well as website development.
            With a passion for art and a deep understanding of the power of
            design, we are here to help your brand stand out in a competitive
            market.
          </InfoTopic>
          <InfoTopic>
            With extensive experience., we combine creativity and strategy to
            develop memorable visual identities. We believe that every company
            has a unique story to tell, and our mission is to translate that
            story into an authentic visual identity.
          </InfoTopic>
          <InfoTopic>
            Our client-centric approach allows us to understand your needs and
            business objectives, ensuring that each project is carefully
            tailored to reflect the personality of your brand. We utilize a
            combination of strategic colors, carefully selected typography, and
            intelligent design to create a visual identity that effectively
            communicates your message.
          </InfoTopic>
          <InfoTopic>
            At Studio Cauehenrique, we value long-lasting relationships and work
            closely with our clients from conception to implementation. Our goal
            is not only to deliver stunning design but also to provide strategic
            design solutions that propel your business and set you apart in the
            market.
          </InfoTopic>
          <InfoTopic>
            Explore our{" "}
            <Link className="text-primary-300 hover:underline" href="/">
              portfolio
            </Link>{" "}
            to see some of the projects we have completed and be inspired by our
            unique approach. We are eager to collaborate with you, create your
            visual identity, and develop a website that leaves a lasting
            impression.
          </InfoTopic>
        </div>
      </div>
    </div>
  );
}
