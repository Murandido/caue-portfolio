import { BudgetHero } from "@/components/Hero";
import Form from "@/components/Form/Form";
import { Metadata } from "next";
import { getDictionary } from "@/utils/getDictionary";
import { RouteLocale, GeneratePageMetadataProps } from "next-roots";

async function getData(locale: RouteLocale) {
  const t = await getDictionary(locale);
  return {
    title: t('budget.title'),
    description: t('budget.description'),
    translation: t('budget.page'),
  }
}

export async function generateMetadata({
  locale
}: GeneratePageMetadataProps<void>): Promise<Metadata> {
  const { title, description } = await getData(locale);

  return { title, description };
}

export default async function Budget({ locale }: { locale: RouteLocale}) {
  const { translation } = await getData(locale);

  return (
    <>
      <BudgetHero translation={translation} />
      <div className="min-w-minimum">
        <div className="mx-45 mb-28 flex gap-6 max-xl:mx-22 max-xl:mb-24 max-xl:flex-col max-xs:mx-8 max-xs:mb-12">
          <div className="flex basis-1/4 rounded-lg bg-secondary-300">
            <div className="flex flex-col gap-4 px-20 py-40 max-xl:p-20 max-xs:gap-2 max-xs:p-8">
              <h1 className="text-2xl font-bold uppercase leading-[150%] max-xs:text-xs max-steps:text-[0.5rem]">
                {translation.subtitle}
              </h1>
              <p className="font-gelica text-xl leading-[150%] max-xs:text-xs">
                {translation.text}
              </p>
            </div>
          </div>
          <div className="h-148 grow overflow-hidden rounded-lg max-xl:h-250 max-xs:h-112">
            <Form translation={translation} />
          </div>
        </div>
      </div>
    </>
  );
}
