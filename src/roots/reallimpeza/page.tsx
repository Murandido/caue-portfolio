import WorkHero from "@/components/WorkHero";
import { getDictionary } from "@/utils/getDictionary";
import { Metadata } from "next";
import { GeneratePageMetadataProps, RouteLocale } from "next-roots";
import Image from "next/image";
import { ReactElement } from "react";

async function getData(locale: RouteLocale) {
  const t = await getDictionary(locale);
  return {
    title: t('reallimpeza.title'),
    description: t('reallimpeza.description'),
    translation: t('reallimpeza.page'),
  }
}

export async function generateMetadata({
  locale
}: GeneratePageMetadataProps<void>): Promise<Metadata> {
  const { title, description } = await getData(locale);

  return { title, description };
}

export default async function RealLimpeza({ locale }: { locale: RouteLocale}) {
  const { translation } = await getData(locale);

  return (
    <div className="min-w-minimum">
      <div className="mx-45 flex flex-col gap-24 max-xl:mx-22 max-xs:mx-8 max-xs:gap-12">
        <WorkHero
          capeLink="https://i.imgur.com/XnGQarO.png"
          alt="Real Limpeza Cape"
          width={1560}
          height={880}
          title="Real Limpeza"
          span={translation.subtitle}
          description={translation.text1}
        />
        <div className="flex flex-col gap-6 font-gelica text-xl leading-[150%] max-xs:gap-3 max-xs:text-xs">
          <div className="flex gap-6 max-xl:flex-col max-xs:gap-3">
            <div className="w-full">
              <Image
                className="w-full rounded-lg"
                src="https://i.imgur.com/GIDGxR5.gif"
                alt="Real Limpeza Gif 1"
                width={768}
                height={432}
                unoptimized
              />
            </div>
            <div className="w-full">
              <Image
                className="w-full rounded-lg"
                src="https://i.imgur.com/MD62Im5.png"
                alt="Real Limpeza Image 2"
                width={768}
                height={432}
              />
            </div>
          </div>
          <div>
            <Image
              className="rounded-lg"
              src="https://i.imgur.com/5M5akGs.png"
              alt="Real Limpeza Image 3"
              width={1560}
              height={880}
            />
          </div>
          <div className="flex gap-6 max-xl:flex-col max-xs:gap-3">
            <div>
              <Image
                className="w-full rounded-lg"
                src="https://i.imgur.com/cnbvAok.png"
                alt="Real Limpeza Image 4"
                width={768}
                height={768}
              />
            </div>
            <div>
              <Image
                className="w-full rounded-lg"
                src="https://i.imgur.com/35rUdED.png"
                alt="Real Limpeza Image 5"
                width={768}
                height={768}
              />
            </div>
          </div>
          <div>
            <Image
              className="rounded-lg"
              src="https://i.imgur.com/eqfIbHG.gif"
              alt="Real Limpeza Gif 6"
              width={1560}
              height={880}
              unoptimized
            />
          </div>
          <div className="flex justify-center">
            <p className="mx-8 my-18 max-w-187 text-center max-xs:my-5">
              {translation.text2}
            </p>
          </div>
          <div>
            <Image
              className="rounded-lg"
              src="https://i.imgur.com/sOamGWx.png"
              alt="Real Limpeza Image 7"
              width={1560}
              height={880}
            />
          </div>
          <div>
            <Image
              className="rounded-lg"
              src="https://i.imgur.com/jK6IJlk.png"
              alt="Real Limpeza Image 8"
              width={1560}
              height={880}
            />
          </div>
          <div>
            <Image
              className="rounded-lg"
              src="https://i.imgur.com/gPu363T.png"
              alt="Real Limpeza Image 9"
              width={1560}
              height={880}
            />
          </div>
          <div>
            <Image
              className="rounded-lg"
              src="https://i.imgur.com/G8xh0QH.png"
              alt="Real Limpeza Image 10"
              width={1560}
              height={880}
            />
          </div>
          <div className="flex gap-6 max-xl:flex-col max-xs:gap-3">
            <div className="w-full">
              <Image
                className="w-full rounded-lg"
                src="https://i.imgur.com/XdIQDKr.png"
                alt="Real Limpeza Image 11"
                width={768}
                height={768}
              />
            </div>
            <div className="w-full">
              <Image
                className="w-full rounded-lg"
                src="https://i.imgur.com/q7NmhY2.png"
                alt="Real Limpeza Image 12"
                width={768}
                height={768}
              />
            </div>
          </div>
          <div>
            <Image
              className="rounded-lg"
              src="https://i.imgur.com/qLDMqQG.png"
              alt="Real Limpeza Image 13"
              width={1560}
              height={880}
            />
          </div>
          <div>
            <Image
              className="rounded-lg"
              src="https://i.imgur.com/GXwysPn.png"
              alt="Real Limpeza Image 14"
              width={1560}
              height={880}
            />
          </div>
          <div className="flex justify-center">
            <div className="my-18 flex flex-col gap-6 max-xs:my-5">
              <p className="mx-8 max-w-187 text-center">
                {translation.text3}
              </p>
              <p className="mx-8 max-w-187 text-center">
                {translation.text4}
              </p>
            </div>
          </div>
          <div>
            <Image
              className="rounded-lg"
              src="https://i.imgur.com/UrtsfW3.png"
              alt="Real Limpeza Image 15"
              width={1560}
              height={880}
            />
          </div>
          <div className="flex gap-6 max-xl:flex-col max-xs:gap-3">
            <div className="w-full">
              <Image
                className="w-full rounded-lg"
                src="https://i.imgur.com/CZy9L7W.png"
                alt="Real Limpeza Image 16"
                width={768}
                height={768}
              />
            </div>
            <div className="w-full">
              <Image
                className="w-full rounded-lg"
                src="https://i.imgur.com/0dXnlNx.png"
                alt="Real Limpeza Image 17"
                width={768}
                height={768}
              />
            </div>
          </div>
          <div>
            <Image
              className="rounded-lg"
              src="https://i.imgur.com/VE80c2W.png"
              alt="Real Limpeza Image 18"
              width={1560}
              height={880}
            />
          </div>
          <div>
            <Image
              className="rounded-lg"
              src="https://i.imgur.com/Bsr0p7g.gif"
              alt="Real Limpeza Gif 19"
              width={1560}
              height={880}
            />
          </div>
          <div>
            <div className="my-24 flex flex-col items-center gap-30 max-xs:my-12 max-xs:gap-15">
              <div>
                <p className="mx-8 max-w-187 text-center">
                  {translation.text5}
                </p>
              </div>
              <div className="flex w-full gap-6 max-xl:flex-col max-xs:gap-3">
                <div className="w-full">
                  <Image
                    className="w-full rounded-lg"
                    src="https://i.imgur.com/z8mKxjs.png"
                    alt="Real Limpeza Image 20"
                    width={768}
                    height={432}
                  />
                </div>
                <div className="w-full">
                  <Image
                    className="w-full rounded-lg"
                    src="https://i.imgur.com/n9sQ5MY.png"
                    alt="Real Limpeza Image 21"
                    width={768}
                    height={432}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
