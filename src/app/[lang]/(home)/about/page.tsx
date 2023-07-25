import AboutCaue from "@/components/AboutCaue";
import Hero from "@/components/Hero";
import Info from "@/components/Info";
import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";
import { Metadata } from "next";

export const generateMetadata = async ({
  params: { lang },
}: {
  params: { lang: Locale };
}): Promise<Metadata> => {
  const dictionary = await getDictionary(lang);

  return { title: dictionary.titles.about, description: dictionary.desc.about };
};

export default async function AboutPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);

  return (
    <main className="min-w-header">
      <Hero>
        <span className="text-primary-300">
          {dictionary.components.Hero.about.highlight1}
        </span>
        {dictionary.components.Hero.about.text1}
        <span className="text-primary-300">
          {dictionary.components.Hero.about.highlight2}
        </span>
        {dictionary.components.Hero.about.text2}
      </Hero>
      <AboutCaue dictionary={dictionary.components.AboutCaue} />
      <Info dictionary={dictionary.components.Info} />
    </main>
  );
}
