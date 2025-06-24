import WorkHero from "@/components/WorkHero";
import { getDictionary } from "@/utils/getDictionary";
import { Metadata } from "next";
import { GeneratePageMetadataProps, RouteLocale } from "next-roots";
import Image from "next/image";
import { ReactElement } from "react";

async function getData(locale: RouteLocale) {
  const t = await getDictionary(locale);
  return {
    title: t('devine.title'),
    description: t('devine.description'),
    translation: t('devine.page'),
  }
}

export async function generateMetadata({
  locale
}: GeneratePageMetadataProps<void>): Promise<Metadata> {
  const { title, description } = await getData(locale);

  return { title, description };
}

export default async function Devine({ locale }: { locale: RouteLocale}) {
  const { translation } = await getData(locale);

  return (
    <div className="min-w-minimum">
      <div className="mx-45 flex flex-col gap-24 max-xl:mx-22 max-xs:mx-8 max-xs:gap-12">
        <WorkHero
          capeLink="https://i.imgur.com/bIG0pWt.png"
          alt="Devine Cape"
          width={1560}
          height={880}
          title="Devine"
          span={translation.subtitle}
          description={translation.text1}
        />
        <div className="flex flex-col gap-6 font-gelica text-xl leading-[150%] max-xs:gap-3 max-xs:text-xs">
          <div className="flex gap-6 max-xl:flex-col max-xs:gap-3">
            <div className="w-full">
              <Image
                className="w-full rounded-lg"
                src="https://i.imgur.com/PTeVEtt.png"
                alt="Devine Image 1"
                width={768}
                height={432}
              />
            </div>
            <div className="w-full">
              <Image
                className="w-full rounded-lg"
                src="https://i.imgur.com/AWHpPLp.png"
                alt="Devine Image 2"
                width={768}
                height={432}
              />
            </div>
          </div>
          <div>
            <Image
              className="rounded-lg"
              src="https://i.imgur.com/b4ZScnX.png"
              alt="Devine Image 3"
              width={1560}
              height={880}
            />
          </div>
          <div>
            <Image
              className="rounded-lg"
              src="https://i.imgur.com/0FRHHQV.png"
              alt="Devine Image 4"
              width={1560}
              height={880}
            />
          </div>
          <div>
            <Image
              className="rounded-lg"
              src="https://i.imgur.com/IZ80nRn.png"
              alt="Devine Image 5"
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
              src="https://i.imgur.com/MKItXO2.png"
              alt="Devine Image 6"
              width={1560}
              height={880}
            />
          </div>
          <div>
            <Image
              className="rounded-lg"
              src="https://i.imgur.com/2vyUtE7.png"
              alt="Devine Image 7"
              width={1560}
              height={880}
            />
          </div>
          <div>
            <Image
              className="rounded-lg"
              src="https://i.imgur.com/4wLg3Nn.png"
              alt="Devine Image 8"
              width={1560}
              height={880}
            />
          </div>
          <div>
            <Image
              className="rounded-lg"
              src="https://i.imgur.com/zqlXfBb.png"
              alt="Devine Image 9"
              width={1560}
              height={880}
            />
          </div>
          <div>
            <Image
              className="rounded-lg"
              src="https://i.imgur.com/jdJyrsp.png"
              alt="Devine Image 10"
              width={1560}
              height={880}
            />
          </div>
          <div className="flex gap-6 max-xl:flex-col max-xs:gap-3">
            <div>
              <Image
                className="rounded-lg max-xl:w-full"
                src="https://i.imgur.com/kYsyz0V.png"
                alt="Devine Image 11"
                width={768}
                height={768}
              />
            </div>
            <div>
              <Image
                className="w-full rounded-lg"
                src="https://i.imgur.com/ONuUyJ0.png"
                alt="Devine Image 12"
                width={768}
                height={768}
              />
            </div>
          </div>
          <div>
            <Image
              className="rounded-lg"
              src="https://i.imgur.com/rRjAQSj.png"
              alt="Devine Image 13"
              width={1560}
              height={880}
            />
          </div>
          <div>
            <Image
              className="rounded-lg"
              src="https://i.imgur.com/uJPdeFG.gif"
              alt="Devine Gif 14"
              width={1560}
              height={880}
              unoptimized
            />
          </div>
          <div className="flex justify-center">
            <p className="mx-8 my-18 max-w-195 text-center max-xs:my-5">
              {translation.text3}
            </p>
          </div>
          <div>
            <Image
              className="rounded-lg"
              src="https://i.imgur.com/nbwPlr0.png"
              alt="Devine Image 15"
              width={1560}
              height={880}
            />
          </div>
          <div className="flex gap-6 max-xl:flex-col max-xs:gap-3">
            <div className="w-full">
              <Image
                className="w-full rounded-lg"
                src="https://i.imgur.com/aNnEBXf.png"
                alt="Devine Image 16"
                width={768}
                height={768}
              />
            </div>
            <div className="w-full">
              <Image
                className="w-full rounded-lg"
                src="https://i.imgur.com/OKzrjfo.png"
                alt="Devine Image 17"
                width={768}
                height={768}
              />
            </div>
          </div>
          <div>
            <Image
              className="rounded-lg"
              src="https://i.imgur.com/XYAX3xt.png"
              alt="Devine Image 18"
              width={1560}
              height={880}
            />
          </div>
          <div>
            <Image
              className="rounded-lg"
              src="https://i.imgur.com/ql9IF9o.png"
              alt="Devine Image 19"
              width={1560}
              height={880}
            />
          </div>
          <div className="mb-24 max-xl:mb-22 max-xs:mb-8">
            <Image
              className="rounded-lg"
              src="https://i.imgur.com/hJOlwpI.png"
              alt="Devine Image 20"
              width={1560}
              height={880}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
