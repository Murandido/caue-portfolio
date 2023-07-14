import InfoTopic from "./InfoTopic";

export default function Info() {
  return (
    <div className="m-5 flex justify-center font-robotoSlab">
      <div className="flex w-[100rem] flex-col">
        <div className="flex justify-center border-b border-[#D9D9D9] font-righteous text-4xl leading-normal">
          <h1 className="my-24 w-[46rem]">
            Design that communicates with the right audience, stands out, and
            attracts.
          </h1>
        </div>
        <div>
          <InfoTopic text="We are a design studio specializing in creating strategic visual identities for unique companies, as well as website development. With a passion for art and a deep understanding of the power of design, we are here to help your brand stand out in a competitive market." />
          <InfoTopic text="With extensive experience., we combine creativity and strategy to develop memorable visual identities. We believe that every company has a unique story to tell, and our mission is to translate that story into an authentic visual identity." />
          <InfoTopic text="Our client-centric approach allows us to understand your needs and business objectives, ensuring that each project is carefully tailored to reflect the personality of your brand. We utilize a combination of strategic colors, carefully selected typography, and intelligent design to create a visual identity that effectively communicates your message." />
          <InfoTopic text="At Studio Cauehenrique, we value long-lasting relationships and work closely with our clients from conception to implementation. Our goal is not only to deliver stunning design but also to provide strategic design solutions that propel your business and set you apart in the market." />
          <InfoTopic text="Explore our portfolio to see some of the projects we have completed and be inspired by our unique approach. We are eager to collaborate with you, create your visual identity, and develop a website that leaves a lasting impression." />
        </div>
      </div>
    </div>
  );
}
