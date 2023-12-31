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

  return {
    title: dictionary.titles.xchango,
    description: dictionary.desc.xchango,
  };
};

export default async function RealLimpezaPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);

  return (
    <main className="slideUp">
      <div className="flex min-w-header flex-wrap-reverse items-center justify-center gap-5">
        <Hero
          title="Xchango"
          description={dictionary.portfolio.xchango.text}
          year={2023}
          nationality={dictionary.portfolio.xchango.country}
          dictionary={dictionary.components.HeroWorks}
        />
        <div className="m-5">
          <Image
            src="https://i.imgur.com/6Ketoe6.png"
            alt="Xchango Banner"
            width="940"
            height="838"
          />
        </div>
      </div>
      <div className="min-w-header bg-white">
        <div className="flex flex-wrap items-center justify-center gap-5 p-5">
          <Image
            className="w-[117.5rem]"
            src="https://i.imgur.com/wOiHco0.png"
            alt="Xchango 1"
            width="1880"
            height="1406"
          />
          <Image
            className="w-[117.5rem]"
            src="https://i.imgur.com/LwDkn9y.png"
            alt="Xchango 2"
            width="1880"
            height="1336"
          />
          <div className="flex flex-wrap items-center justify-center gap-5">
            <Image
              className="w-[58rem]"
              src="https://i.imgur.com/Fg8jMy4.png"
              alt="Xchango 3"
              width="924"
              height="696"
            />
            <Image
              className="w-[58rem]"
              src="https://i.imgur.com/RVQgcSW.png"
              alt="Xchango 4"
              width="924"
              height="696"
            />
          </div>
          <Image
            className="w-[117.5rem]"
            src="https://i.imgur.com/k0MahOv.png"
            alt="Xchango 5"
            width="1880"
            height="1416"
          />
          <div className="flex flex-wrap items-center justify-center gap-5">
            <Image
              className="w-[58rem]"
              src="https://i.imgur.com/MvQTD1W.png"
              alt="Xchango 6"
              width="924"
              height="696"
            />
            <Image
              className="w-[58rem]"
              src="https://i.imgur.com/UvUdPIK.png"
              alt="Xchango 7"
              width="924"
              height="696"
            />
          </div>
          <Image
            className="w-[117.rem]"
            src="https://i.imgur.com/yZlB0dV.png"
            alt="Xchango 8"
            width="1880"
            height="1400"
          />
          <div className="flex flex-wrap items-center justify-center gap-5">
            <Image
              className="w-[70rem]"
              src="https://i.imgur.com/oe16E3u.png"
              alt="Xchango 9"
              width="1112"
              height="744"
            />
            <Image
              className="w-[46rem]"
              src="https://i.imgur.com/MTaps6Q.png"
              alt="Xchango 10"
              width="736"
              height="744"
            />
          </div>
          <Image
            className="w-[117.5rem]"
            src="https://i.imgur.com/P7aS1A0.png"
            alt="Xchango 11"
            width="1880"
            height="1400"
          />
          <Image
            className="w-[117.5rem]"
            src="https://i.imgur.com/JNgChP2.png"
            alt="Xchango 12"
            width="1880"
            height="1400"
          />
          <Image
            className="w-[117.5rem]"
            src="https://i.imgur.com/Ypfj1hk.png"
            alt="Xchango 13"
            width="1880"
            height="1400"
          />
          <Image
            className="w-[117.5rem]"
            src="https://i.imgur.com/rhKbcof.png"
            alt="Xchango 14"
            width="1880"
            height="1400"
          />
          <Image
            className="w-[117.5rem]"
            src="https://i.imgur.com/1Mmy6H1.png"
            alt="Xchango 15"
            width="1880"
            height="1400"
          />
        </div>
      </div>
    </main>
  );
}
