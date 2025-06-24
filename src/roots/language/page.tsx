import { getDictionary } from "@/utils/getDictionary";
import { Metadata } from "next";
import { RouteLocale, GeneratePageMetadataProps } from "next-roots";
import PtIconSVG from "@/assets/icons/ptIcon.svg";
import EnIconSVG from "@/assets/icons/enIcon.svg";
import Image from "next/image";
import Link from "next/link";

async function getData(locale: RouteLocale) {
  const t = await getDictionary(locale);
  return {
    title: t('language.title'),
    description: t('language.description'),
  }
}

export async function generateMetadata({
  locale
}: GeneratePageMetadataProps<void>): Promise<Metadata> {
  const { title, description } = await getData(locale);

  return { title, description };
}

export default async function Language({ locale }: { locale: RouteLocale}) {
  return (
    <div className="flex-1 mx-45 max-xl:mx-22 max-xs:mx-8 flex items-center my-30 min-w-minimum">
      <div className="w-1/2 font-gelica leading-[150%] max-xl:w-full">
        <div className="flex justify-between py-3 border-b border-tertiary-400">
          <Link href="/pt" className="hover:underline">
            <p className="text-xl">Português</p>
            <p>[PT-BR]</p>
          </Link>
          <Image src={PtIconSVG} alt="pt icon"/>
        </div>
        <div className="flex justify-between py-3">
          <Link href="/en" className="hover:underline">
            <p className="text-xl">English</p>
            <p>[EN]</p>
          </Link>
          <Image src={EnIconSVG} alt="en icon"/>
        </div>
      </div>
    </div>
  )
}
