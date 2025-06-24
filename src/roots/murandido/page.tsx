import WorkHero from "@/components/WorkHero";
import { getDictionary } from "@/utils/getDictionary";
import { Metadata } from "next";
import { GeneratePageMetadataProps, RouteLocale } from "next-roots";
import Image from "next/image";
import { ReactElement } from "react";

async function getData(locale: RouteLocale) {
  const t = await getDictionary(locale);
  return {
    title: t('xchango.title'),
    description: t('xchango.description'),
    translation: t('xchango.page'),
  }
}

export async function generateMetadata({
  locale
}: GeneratePageMetadataProps<void>): Promise<Metadata> {
  const { title, description } = await getData(locale);

  return { title, description };
}

export default async function Murandido({ locale }: { locale: RouteLocale}) {
  const { translation } = await getData(locale);

  return (
    <div className="min-w-minimum">
      <div className="mx-45 flex flex-col gap-24 max-xl:mx-22 max-xs:mx-8 max-xs:gap-12">
        <WorkHero
          capeLink="https://i.imgur.com/MBuX06s.png"
          alt="Murandido Cape"
          width={1560}
          height={880}
          title="Murandido"
          span={translation.subtitle}
          description={translation.text1}
        />
        <div className="flex flex-col gap-6 font-gelica text-xl leading-[150%] max-xs:gap-3 max-xs:text-xs">
          <div className="flex gap-6 max-xl:flex-col max-xs:gap-3">
            <div className="w-full">
              <Image
                className="w-full rounded-lg"
                src="https://i.imgur.com/8JMuApW.png"
                alt="Murandido Image 1"
                width={768}
                height={432}
              />
            </div>
            <div className="w-full">
              <Image
                className="w-full rounded-lg"
                src="https://i.imgur.com/DEoG5D4.png"
                alt="Murandido Image 2"
                width={768}
                height={432}
              />
            </div>
          </div>
          <div>
            <Image
              className="rounded-lg"
              src="https://i.imgur.com/zBQF4Br.png"
              alt="Murandido Image 3"
              width={1560}
              height={880}
            />
          </div>
          <div>
            <Image
              className="rounded-lg"
              src="https://i.imgur.com/w2EtXT2.png"
              alt="Murandido Image 4"
              width={1560}
              height={880}
            />
          </div>
          <div>
            <Image
              className="rounded-lg"
              src="https://i.imgur.com/F8El4b7.png"
              alt="Murandido Image 5"
              width={1560}
              height={880}
            />
          </div>
          <div className="flex justify-center">
            <p className="mx-8 my-18 max-w-195 text-center max-xs:my-5">
              {translation.text2}
            </p>
          </div>
          <div>
            <Image
              className="rounded-lg"
              src="https://i.imgur.com/ghN6sDL.png"
              alt="Murandido Image 6"
              width={1560}
              height={880}
            />
          </div>
          <div>
            <Image
              className="rounded-lg"
              src="https://i.imgur.com/3IjuNMH.png"
              alt="Murandido Image 7"
              width={1560}
              height={880}
            />
          </div>
          <div>
            <Image
              className="rounded-lg"
              src="https://i.imgur.com/pe3Uyeh.png"
              alt="Murandido Image 8"
              width={1560}
              height={880}
            />
          </div>
          <div>
            <Image
              className="rounded-lg"
              src="https://i.imgur.com/o6wkOhf.png"
              alt="Murandido Image 9"
              width={1560}
              height={880}
            />
          </div>
          <div className="flex gap-6 max-xl:flex-col max-xs:gap-3">
            <div className="w-full">
              <Image
                className="w-full rounded-lg"
                src="https://i.imgur.com/9TYjBY1.png"
                alt="Murandido Image 10"
                width={768}
                height={432}
              />
            </div>
            <div className="w-full">
              <Image
                className="w-full rounded-lg"
                src="https://i.imgur.com/S1Mzzyu.png"
                alt="Murandido Image 11"
                width={768}
                height={432}
              />
            </div>
          </div>
          <div className="flex justify-center">
            <div className="my-18 flex flex-col gap-6 max-xs:my-5">
              <p className="mx-8 max-w-195 text-center">
                {translation.text3}
              </p>
              <p className="mx-8 max-w-195 text-center">
                {translation.text4}
              </p>
            </div>
          </div>
          <div>
            <Image
              className="rounded-lg"
              src="https://i.imgur.com/VXsA9UW.png"
              alt="Murandido Image 12"
              width={1560}
              height={880}
            />
          </div>
          <div>
            <Image
              className="rounded-lg"
              src="https://i.imgur.com/fDFTXvN.png"
              alt="Murandido Image 13"
              width={1560}
              height={880}
            />
          </div>
          <div>
            <Image
              className="rounded-lg"
              src="https://i.imgur.com/Ei3SoPa.png"
              alt="Murandido Image 14"
              width={1560}
              height={880}
            />
          </div>
          <div className="mb-24 max-xl:mb-22 max-xs:mb-8">
            <Image
              className="rounded-lg"
              src="https://i.imgur.com/y5DssJF.gif"
              alt="Murandido Gif 15"
              width={1560}
              height={880}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
