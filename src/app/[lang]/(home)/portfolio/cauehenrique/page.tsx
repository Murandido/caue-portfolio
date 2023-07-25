import Image from "next/image";
import Hero from "@/components/HeroWorks";
import { Locale } from "@/i18n-config";
import { getDictionary } from "@/get-dictionary";
import { Metadata } from "next";

export const generateMetadata = async ({
  params: { lang },
}: {
  params: { lang: Locale };
}): Promise<Metadata> => {
  const dictionary = await getDictionary(lang);

  return { title: dictionary.titles.cauehenrique };
};

export default async function RealLimpezaPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);

  return (
    <main className="slideUp">
      <div className="flex min-w-[338.55px] flex-wrap-reverse items-center justify-center gap-5">
        <Hero
          title="cauehenrique"
          description={dictionary.portfolio.caueHenrique.text}
          year={2022}
          nationality={dictionary.portfolio.caueHenrique.country}
          dictionary={dictionary.components.HeroWorks}
        />
        <div className="m-5">
          <Image
            src="https://i.imgur.com/16UtRjf.png"
            alt="Xchango Banner"
            width="940"
            height="838"
          />
        </div>
      </div>
      <div className="min-w-[338.55px] bg-white">
        <div className="flex flex-wrap items-center justify-center gap-5 p-5">
          <Image
            className="w-[117.5rem]"
            src="https://i.imgur.com/mZapnpD.png"
            alt="cauehenrique 1"
            width="1880"
            height="1112"
          />
          <Image
            className="w-[117.5rem]"
            src="https://i.imgur.com/wpHZP8E.png"
            alt="cauehenrique 2"
            width="1880"
            height="1072"
          />
          <Image
            className="w-[117.5rem]"
            src="https://i.imgur.com/twUE7NM.png"
            alt="cauehenrique 3"
            width="1880"
            height="1424"
          />
          <Image
            className="w-[117.5rem]"
            src="https://i.imgur.com/ezhpW1O.png"
            alt="cauehenrique 4"
            width="1880"
            height="1072"
          />
          <Image
            className="w-[117.5rem]"
            src="https://i.imgur.com/f9A8RBz.png"
            alt="cauehenrique 5"
            width="1880"
            height="1408"
          />
          <div className="flex flex-wrap items-center justify-center gap-5">
            <Image
              className="w-[58rem]"
              src="https://i.imgur.com/7KZARcL.png"
              alt="cauehenrique 6"
              width="928"
              height="696"
            />
            <Image
              className="w-[58rem]"
              src="https://i.imgur.com/3FA4WZC.png"
              alt="cauehenrique 7"
              width="928"
              height="969"
            />
          </div>
          <Image
            className="w-[117.5rem]"
            src="https://i.imgur.com/gDouBND.png"
            alt="cauehenrique 8"
            width="1880"
            height="1408"
          />
          <Image
            className="w-[117.5rem]"
            src="https://i.imgur.com/ENQovnz.png"
            alt="cauehenrique 9"
            width="1880"
            height="1408"
          />
          <Image
            className="w-[117.5rem]"
            src="https://i.imgur.com/GyTVYcv.png"
            alt="cauehenrique 10"
            width="1880"
            height="1408"
          />
          <div className="flex flex-wrap items-center justify-center gap-5">
            <Image
              className="w-[58rem]"
              src="https://i.imgur.com/ACWWEG4.png"
              alt="cauehenrique 11"
              width="928"
              height="696"
            />
            <Image
              className="w-[58rem]"
              src="https://i.imgur.com/WmOaQRQ.png"
              alt="cauehenrique 12"
              width="928"
              height="696"
            />
          </div>
          <Image
            className="w-[117.5rem]"
            src="https://i.imgur.com/DVxA2g5.png"
            alt="cauehenrique 13"
            width="1880"
            height="1256"
          />
          <Image
            className="w-[117.5rem]"
            src="https://i.imgur.com/sP5wx7F.png"
            alt="cauehenrique 14"
            width="1880"
            height="1132"
          />
          <Image
            className="w-[117.5rem]"
            src="https://i.imgur.com/ZDaenNb.png"
            alt="cauehenrique 15"
            width="1880"
            height="1024"
          />
        </div>
      </div>
    </main>
  );
}
