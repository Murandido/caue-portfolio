import { AboutHero } from "@/components/Hero";
import MethodologySteps from "@/components/MethodologySteps";
import { Metadata } from "next";
import { GeneratePageMetadataProps, RouteLocale } from "next-roots";
import { getDictionary } from "@/utils/getDictionary";

async function getData(locale: RouteLocale) {
  const t = await getDictionary(locale);
  return {
    title: t('about.title'),
    description: t('about.description'),
    translation: t('about.page'),
  }
}

export async function generateMetadata({
  locale
}: GeneratePageMetadataProps<void>): Promise<Metadata> {
  const { title, description } = await getData(locale);

  return { title, description };
}

export default async function About({ locale }: { locale: RouteLocale}) {
  const { translation } = await getData(locale);

  const steps = [
    {
      number: translation.stepNumber1,
      ordinalSymbol: translation.stepOrdinalSymbol1,
      label: translation.stepTitle1,
      text: translation.stepText1,
    },
    {
      number: translation.stepNumber2,
      ordinalSymbol: translation.stepOrdinalSymbol2,
      label: translation.stepTitle2,
      text: translation.stepText2,
    },
    {
      number: translation.stepNumber3,
      ordinalSymbol: translation.stepOrdinalSymbol3,
      label: translation.stepTitle3,
      text: translation.stepText3,
    },
    {
      number: translation.stepNumber4,
      ordinalSymbol: translation.stepOrdinalSymbol4,
      label: translation.stepTitle4,
      text: translation.stepText4,
    },
    {
      number: translation.stepNumber5,
      ordinalSymbol: translation.stepOrdinalSymbol4,
      label: translation.stepTitle5,
      text: translation.stepText5,
    },
  ];

  return (
    <>
      <AboutHero translation={translation} />
      <div className="min-w-minimum">
        <div className="mx-45 max-xl:mx-22 max-xs:mx-8">
          <div className="min-w-minimum rounded-lg bg-tertiary-300">
            <div className="p-20 max-xs:p-8">
              <div className="flex flex-col gap-4 border-b border-tertiary-400 pb-18 max-xs:gap-2 max-xs:pb-6">
                <h1 className="text-2xl font-bold uppercase leading-[150%] max-xs:text-xs">
                  {translation.subtitle1}
                </h1>
                <p className="font-gelica text-xl leading-[150%] max-xs:text-[0.625rem]">
                  {translation.text1}
                </p>
              </div>
              <div className="flex flex-col gap-4 pt-18 max-xs:gap-2 max-xs:pt-6">
                <h1 className="text-2xl font-bold uppercase leading-[150%] max-xs:text-xs">
                  {translation.subtitle2}
                </h1>
                <p className="font-gelica text-xl leading-[150%] max-xs:text-[0.625rem]">
                  {translation.text2}
                </p>
              </div>
            </div>
          </div>
          <div className="mb-24 mt-12 flex flex-col gap-6 max-xs:mb-12 max-xs:mt-6 max-xs:gap-3">
            <div className="flex min-w-minimum justify-center">
              <h1 className="text-center text-2xl font-bold uppercase max-xs:text-xs">
                {translation.subtitle3}
              </h1>
            </div>
            <MethodologySteps steps={steps} />
            <div className="flex min-w-minimum gap-6 max-xl:flex-wrap max-xs:gap-3">
              <div className="flex flex-col gap-4 rounded-lg bg-tertiary-300 p-20 max-xs:gap-2 max-xs:p-8">
                <h1 className="text-2xl font-bold uppercase leading-[150%] max-xs:text-xs">
                  {translation.subtitle4}
                </h1>
                <p className="font-gelica text-xl leading-[150%] max-xs:text-[0.625rem]">
                  {translation.text3}
                </p>
              </div>
              <div className="flex flex-col gap-4 rounded-lg bg-tertiary-300 p-20 max-xs:gap-2 max-xs:p-8">
                <h1 className="text-2xl font-bold uppercase leading-[150%] max-xs:text-xs">
                  {translation.subtitle5}
                </h1>
                <p className="font-gelica text-xl leading-[150%] max-xs:text-[0.625rem]">
                  {translation.text4}
                  <span className="underline">{translation.underline}</span>
                  {translation.text5}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
