import Hero from "@/components/Hero";
import ProjectLink from "@/components/ProjectLink";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
};

export default function Home() {
  return (
    <>
      <Hero />
      <section className="min-w-[338.55px]">
        <div className="m-5 flex flex-wrap items-center justify-center gap-5">
          <ProjectLink
            name="Real Limpeza"
            year={2023}
            imgUrl="https://drive.google.com/uc?export=view&id=1t5Mi5DMHaigeuFZuYxMFn83PFeufNyMC"
            imgAlt="Real Limpeza Banner"
            linkToPage="works/reallimpeza/"
          />
          <ProjectLink
            name="Devine"
            year={2023}
            imgUrl="https://drive.google.com/uc?export=view&id=1fDdpumcYfEDfPh3uH-lbMTORJI8DumJE"
            imgAlt="Devine Banner"
            linkToPage="#"
          />
          <ProjectLink
            name="Xchango"
            year={2023}
            imgUrl="https://drive.google.com/uc?export=view&id=1KSerdNu0BprG1w1XFAAI-dpcjwgAkiqq"
            imgAlt="Xchango Banner"
            linkToPage="#"
          />
          <ProjectLink
            name="Cauehenrique"
            year={2023}
            imgUrl="https://drive.google.com/uc?export=view&id=1AleIZxRcjOhmpYK_NYps6sb3ksOCLSGD"
            imgAlt="Cauehenrique Banner"
            linkToPage="#"
          />
        </div>
      </section>
    </>
  );
}
