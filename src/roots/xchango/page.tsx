import Layout from "@/components/Layout";
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

export default async function Xchango({ locale }: { locale: RouteLocale}) {
  const { translation } = await getData(locale);

  return (
    <div className="min-w-minimum">
      <div className="mx-45 flex flex-col gap-24 max-xl:mx-22 max-xs:mx-8 max-xs:gap-12">
        <WorkHero
          capeLink="https://i.imgur.com/cndmB1v.png"
          alt="Xchango Cape"
          width={1560}
          height={880}
          title="Xchango"
          span={translation.subtitle}
          description={translation.text1}
        />
        <div className="flex flex-col gap-6 font-gelica text-xl leading-[150%] max-xs:gap-3 max-xs:text-xs">
          <div className="flex gap-6 max-xl:flex-col max-xs:gap-3">
            <div className="w-full">
              <Image
                className="w-full rounded-lg"
                src="https://i.imgur.com/R5TbbsR.png"
                alt="Xchango Image 1"
                width={768}
                height={432}
              />
            </div>
            <div className="w-full">
              <Image
                className="w-full rounded-lg"
                src="https://i.imgur.com/kXRp6Os.png"
                alt="Xchango Image 2"
                width={768}
                height={432}
              />
            </div>
          </div>
          <div>
            <Image
              className="rounded-lg"
              src="https://i.imgur.com/LeQcU3E.png"
              alt="Xchango Image 3"
              width={1560}
              height={880}
            />
          </div>
          <div>
            <Image
              className="rounded-lg"
              src="https://i.imgur.com/8dOERvW.png"
              alt="Xchango Image 4"
              width={1560}
              height={880}
            />
          </div>
          <div>
            <Image
              className="rounded-lg"
              src="https://i.imgur.com/YNO05zs.png"
              alt="Xchango Image 5"
              width={1560}
              height={880}
            />
          </div>
          <div>
            <Image
              className="rounded-lg"
              src="https://i.imgur.com/ZMT5E8k.png"
              alt="Xchango Image 6"
              width={1560}
              height={880}
            />
          </div>
          <div>
            <Image
              className="rounded-lg"
              src="https://i.imgur.com/ahEBsKA.png"
              alt="Xchango Image 7"
              width={1560}
              height={880}
            />
          </div>
          <div>
            <Image
              className="rounded-lg"
              src="https://i.imgur.com/b8IyUTv.png"
              alt="Xchango Image 8"
              width={1560}
              height={880}
            />
          </div>
          <div>
            <Image
              className="rounded-lg"
              src="https://i.imgur.com/PGJiH7V.gif"
              alt="Xchango Gif 9"
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
              src="https://i.imgur.com/bENXu8A.png"
              alt="Xchango Image 10"
              width={1560}
              height={880}
            />
          </div>
          <div>
            <Image
              className="rounded-lg"
              src="https://i.imgur.com/qNZvdQI.png"
              alt="Xchango Image 11"
              width={1560}
              height={880}
            />
          </div>
          <div>
            <Image
              className="rounded-lg"
              src="https://i.imgur.com/YuIFOWk.png"
              alt="Xchango Image 12"
              width={1560}
              height={880}
            />
          </div>
          <div>
            <Image
              className="rounded-lg"
              src="https://i.imgur.com/IbAM3M2.png"
              alt="Xchango Image 13"
              width={1560}
              height={880}
            />
          </div>
          <div>
            <Image
              className="rounded-lg"
              src="https://i.imgur.com/4BmGBtn.jpg"
              alt="Xchango Image 14"
              width={1560}
              height={880}
            />
          </div>
          <div>
            <Image
              className="rounded-lg"
              src="https://i.imgur.com/1MUJ5NY.png"
              alt="Xchango Image 15"
              width={1560}
              height={880}
            />
          </div>
          <div>
            <Image
              className="rounded-lg"
              src="https://i.imgur.com/GOi06OO.png"
              alt="Xchango Image 16"
              width={1560}
              height={880}
            />
          </div>
          <div>
            <Image
              className="rounded-lg"
              src="https://i.imgur.com/LIJNbKW.png"
              alt="Xchango Image 17"
              width={1560}
              height={880}
            />
          </div>
          <div className="flex justify-center">
            <p className="mx-8 my-18 max-w-187 text-center max-xs:my-5">
              {translation.text3}
            </p>
          </div>
          <div>
            <Image
              className="rounded-lg"
              src="https://i.imgur.com/hmSF5Mg.png"
              alt="Xchango Image 18"
              width={1560}
              height={880}
            />
          </div>
          <div className="flex gap-6 max-xl:flex-col max-xs:gap-3">
            <div className="w-full">
              <Image
                className="w-full rounded-lg"
                src="https://i.imgur.com/ePn3oLK.png"
                alt="Xchango Image 19"
                width={768}
                height={432}
              />
            </div>
            <div className="w-full">
              <Image
                className="w-full rounded-lg"
                src="https://i.imgur.com/YaQcJVf.png"
                alt="Xchango Image 20"
                width={768}
                height={432}
              />
            </div>
          </div>
          <div className="mb-6 flex justify-center max-xs:mb-3">
            <p className="mx-8 my-18 max-w-187 text-center max-xs:my-5">
              {translation.text4}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

Xchango.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
