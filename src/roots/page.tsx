import Carousel from "@/components/Carousel";
import KnowMore from "@/components/KnowMore";
import WorksMenu from "@/components/WorksMenu";
import { getDictionary } from "@/utils/getDictionary";
import { Metadata } from "next";
import { GeneratePageMetadataProps, RouteLocale, Router, schema } from "next-roots";

async function getData(locale: string) {
  const t = await getDictionary(locale)
  return {
    title: t('index.title'),
    description: t('index.description'),
    carouselT: t('index.carousel'),
    knowMoreT: t('index.knowMore'),
  }
}

export async function generateMetadata({
  locale,
}: GeneratePageMetadataProps<void>): Promise<Metadata> {
  const { title, description } = await getData(locale)

  return { title, description }
}

export default async function Home({ locale }: { locale: RouteLocale;}) {
  const router = new Router(schema);

  const { carouselT, knowMoreT } = await getData(locale);

  const slides = [
    "https://i.imgur.com/nWBG2Ei.png",
    "https://i.imgur.com/pKE5ygY.png",
    "https://i.imgur.com/oXQoJ2M.png",
    "https://i.imgur.com/fEtbq3j.png",
  ];

  const linkCarousel = router.getHref("/about", { locale });
  const linkKnowMore = router.getHref("/budget", { locale })

  return (
    <>
      <Carousel link={linkCarousel} slides={slides} translation={carouselT} />
      <WorksMenu locale={locale} />
      <KnowMore link={linkKnowMore} translation={knowMoreT} />
    </>
  );
}
