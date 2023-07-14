import HeroIndex from "@/components/HeroIndex";
import ProjectLink from "@/components/ProjectLink";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
};

export default function Home() {
  return (
    <>
      <HeroIndex />
      <section className="min-w-[338.55px]">
        <div className="m-5 mb-0 flex flex-wrap items-center justify-center gap-5">
          <ProjectLink
            name="Real Limpeza"
            year={2023}
            imgUrl="https://i.imgur.com/1NWEqMj.png"
            imgAlt="Real Limpeza Banner"
            linkToPage="/works/reallimpeza/"
          />
          <ProjectLink
            name="Devine"
            year={2023}
            imgUrl="https://i.imgur.com/P7ufgd2.png"
            imgAlt="Devine Banner"
            linkToPage="/works/devine/"
          />
          <ProjectLink
            name="Xchango"
            year={2023}
            imgUrl="https://i.imgur.com/6Ketoe6.png"
            imgAlt="Xchango Banner"
            linkToPage="/works/xchango/"
          />
          <ProjectLink
            name="Cauehenrique"
            year={2022}
            imgUrl="https://i.imgur.com/16UtRjf.png"
            imgAlt="Cauehenrique Banner"
            linkToPage="/works/cauehenrique/"
          />
        </div>
      </section>
    </>
  );
}
