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
    title: dictionary.titles.realLimpeza,
    description: dictionary.desc.realLimpeza,
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
      <div className="flex min-w-[338.55px] flex-wrap-reverse items-center justify-center gap-5">
        <Hero
          title="Real Limpeza"
          description={dictionary.portfolio.realLimpeza.text}
          year={2023}
          nationality={dictionary.portfolio.realLimpeza.country}
          dictionary={dictionary.components.HeroWorks}
        />
        <div className="m-5">
          <Image
            src="https://i.imgur.com/1NWEqMj.png"
            alt="Real Limpeza Banner"
            width="940"
            height="838"
          />
        </div>
      </div>
      <div className="min-w-[338.55px] bg-white">
        <div className="flex flex-wrap items-center justify-center gap-5 p-5">
          <Image
            className="w-[117.5rem]"
            src="https://i.imgur.com/J72tmGQ.png"
            alt="Real Limpeza 1"
            width="1880"
            height="968"
          />
          <Image
            className="w-[117.5rem]"
            src="https://i.imgur.com/c2a5Fc1.png"
            alt="Real Limpeza 2"
            width="1880"
            height="1224"
          />
          <Image
            className="w-[117.5rem]"
            src="https://i.imgur.com/vBIsy9o.png"
            alt="Real Limpeza 3"
            width="1880"
            height="1264"
          />
          <div className="flex flex-wrap items-center justify-center gap-5">
            <Image
              className="w-[58rem]"
              src="https://i.imgur.com/1NWEqMj.png"
              alt="Real Limpeza 4"
              width="924"
              height="792"
            />
            <Image
              className="w-[58rem]"
              src="https://i.imgur.com/eBr8BZQ.png"
              alt="Real Limpeza 5"
              width="924"
              height="792"
            />
          </div>
          <div className="flex flex-wrap items-center justify-center gap-5">
            <Image
              className="w-[38rem]"
              src="https://i.imgur.com/U3sdh9P.png"
              alt="Real Limpeza 6"
              width="608"
              height="464"
            />
            <Image
              className="w-[38rem]"
              src="https://i.imgur.com/nJORCcc.png"
              alt="Real Limpeza 7"
              width="608"
              height="464"
            />
            <Image
              className="w-[38rem]"
              src="https://i.imgur.com/2QBkVIX.png"
              alt="Real Limpeza 8"
              width="608"
              height="464"
            />
          </div>
          <div className="flex flex-wrap items-center justify-center gap-5">
            <Image
              className="w-[58rem]"
              src="https://i.imgur.com/Y0Co0tt.png"
              alt="Real Limpeza 9"
              width="924"
              height="696"
            />
            <Image
              className="w-[58rem]"
              src="https://i.imgur.com/L2t7OYa.png"
              alt="Real Limpeza 10"
              width="924"
              height="696"
            />
          </div>
          <Image
            className="w-[117.5rem]"
            src="https://i.imgur.com/DoWN4nf.png"
            alt="Real Limpeza 11"
            width="1880"
            height="1104"
          />
          <div className="flex flex-wrap items-center justify-center gap-5">
            <Image
              className="w-[58rem]"
              src="https://i.imgur.com/avlvbnX.png"
              alt="Real Limpeza 12"
              width="924"
              height="976"
            />
            <Image
              className="w-[58rem]"
              src="https://i.imgur.com/6wgzsfk.png"
              alt="Real Limpeza 13"
              width="924"
              height="976"
            />
          </div>
          <Image
            className="w-[117.5rem]"
            src="https://i.imgur.com/WlcQrHp.png"
            alt="Real Limpeza 14"
            width="1880"
            height="952"
          />
          <div className="flex flex-wrap items-center justify-center gap-5">
            <Image
              className="w-[52rem]"
              src="https://i.imgur.com/k3V35Wv.png"
              alt="Real Limpeza 15"
              width="828"
              height="1024"
            />
            <Image
              className="w-[64rem]"
              src="https://i.imgur.com/TmchTxU.png"
              alt="Real Limpeza 16"
              width="1020"
              height="1024"
            />
          </div>
          <Image
            className="w-[117.5rem]"
            src="https://i.imgur.com/YFiQjlF.png"
            alt="Real Limpeza 17"
            width="1880"
            height="1224"
          />
          <Image
            className="w-[117.5rem]"
            src="https://i.imgur.com/zofGZco.png"
            alt="Real Limpeza 18"
            width="1880"
            height="1224"
          />
        </div>
      </div>
    </main>
  );
}
