import Hero from "@/components/Hero";
import ProjectLink from "@/components/ProjectLink";
import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cauê Henrique | Brand Design Studio",
};

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);

  return (
    <>
      <Hero>
        <span className="text-primary-300">
          {dictionary.components.Hero.index.highlight1}
        </span>
        {dictionary.components.Hero.index.text1}
        <span className="text-primary-300">
          {dictionary.components.Hero.index.highlight2}
        </span>
        {dictionary.components.Hero.index.text2}
      </Hero>
      <section className="min-w-[338.55px]">
        <div className="m-5 mb-0 flex flex-wrap items-center justify-center gap-5">
          <ProjectLink
            name="Real Limpeza"
            year={2023}
            imgUrl="https://i.imgur.com/1NWEqMj.png"
            imgAlt="Real Limpeza Banner"
            linkToPage={`${lang}/portfolio/reallimpeza/`}
          />
          <ProjectLink
            name="Devine"
            year={2023}
            imgUrl="https://i.imgur.com/P7ufgd2.png"
            imgAlt="Devine Banner"
            linkToPage={`${lang}/portfolio/devine/`}
          />
          <ProjectLink
            name="Xchango"
            year={2023}
            imgUrl="https://i.imgur.com/6Ketoe6.png"
            imgAlt="Xchango Banner"
            linkToPage={`${lang}/portfolio/xchango/`}
          />
          <ProjectLink
            name="Cauehenrique"
            year={2022}
            imgUrl="https://i.imgur.com/16UtRjf.png"
            imgAlt="Cauehenrique Banner"
            linkToPage={`${lang}/portfolio/cauehenrique/`}
          />
        </div>
      </section>
    </>
  );
}
