import Hero from "@/components/en/Hero";
import ProjectLink from "@/components/en/ProjectLink";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
};

export default function Home() {
  return (
    <>
      <Hero>
        <span className="text-primary-300">Your brand is unique</span> and
        deserves a visual identity that represents it in an authentic and{" "}
        <span className="text-primary-300">unforgettable</span> way.
      </Hero>
      <section className="min-w-[338.55px]">
        <div className="m-5 mb-0 flex flex-wrap items-center justify-center gap-5">
          <ProjectLink
            name="Real Limpeza"
            year={2023}
            imgUrl="https://i.imgur.com/1NWEqMj.png"
            imgAlt="Real Limpeza Banner"
            linkToPage="/en/works/reallimpeza/"
          />
          <ProjectLink
            name="Devine"
            year={2023}
            imgUrl="https://i.imgur.com/P7ufgd2.png"
            imgAlt="Devine Banner"
            linkToPage="/en/works/devine/"
          />
          <ProjectLink
            name="Xchango"
            year={2023}
            imgUrl="https://i.imgur.com/6Ketoe6.png"
            imgAlt="Xchango Banner"
            linkToPage="/en/works/xchango/"
          />
          <ProjectLink
            name="Cauehenrique"
            year={2022}
            imgUrl="https://i.imgur.com/16UtRjf.png"
            imgAlt="Cauehenrique Banner"
            linkToPage="/en/works/cauehenrique/"
          />
        </div>
      </section>
    </>
  );
}
