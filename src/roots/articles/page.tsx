import ArticlesMenu from "@/components/ArticlesMenu";
import { ArticlesHero } from "@/components/Hero";
import { getDictionary } from "@/utils/getDictionary";
import { Metadata } from "next";
import { GeneratePageMetadataProps, RouteLocale } from "next-roots";

async function getData(locale: RouteLocale) {
  const t = await getDictionary(locale);
  return {
    title: t('articles.title'),
    description: t('articles.description'),
    translation: t('articles.page'),
  }
}

export async function generateMetadata({
  locale
}: GeneratePageMetadataProps<void>): Promise<Metadata> {
  const { title, description } = await getData(locale);

  return { title, description };
}

export default async function Articles({ locale }: { locale: RouteLocale}) {
  const { translation } = await getData(locale);

  return (
    <>
      <div className="bg-linear-to-b from-tertiary-300">
        <ArticlesHero translation={translation} />
        <ArticlesMenu translation={translation} />
      </div>
    </>
  );
}
