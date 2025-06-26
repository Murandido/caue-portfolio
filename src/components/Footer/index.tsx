import Image from "next/image";

import caueHenriqueLogoSVG from "../../assets/logos/caueHenriqueLogo.svg";
import { RouteLocale, Router, schema } from "next-roots";

interface FooterProps {
  translation: {
    language: string;
  },
  locale: RouteLocale;
}

export default function Footer({ translation, locale }: FooterProps) {
  const router = new Router(schema);

  return (
    <footer className="min-w-minimum border-t font-gelica text-xl leading-[150%] max-md:text-xs max-xs:text-[10px]">
      <div className="mx-45 my-11 max-xl:mx-22 max-xl:my-12 max-xs:mx-8 max-xs:my-5">
        <div className="flex items-end justify-between">
          <a className="flex" href={router.getHref("/", { locale })}>
            <Image
              className="max-xs:h-6 max-xs:w-17"
              src={caueHenriqueLogoSVG}
              alt="caue henrique logo"
            />
          </a>
          <div className="flex-none lg:hidden">
            {translation.language}
            <a className="hover:text-primary-400 hover:underline" href={router.getHref("/language", { locale })}>
              {locale}
            </a>
          </div>
        </div>
        <div className="my-6 h-px w-full border-t" />
        <div className="flex">
          <div className="flex flex-1 flex-wrap gap-12 max-lg:justify-around max-lg:gap-0">
            <a
              className="mx-2 hover:text-primary-400 hover:underline"
              href="mailto:hello@cauhca.com"
              target="_blank"
              rel="noreferrer"
            >
              hello@cauehca.com
            </a>
            <a
              className="mx-2 hover:text-primary-400 hover:underline"
              href="https://www.instagram.com/vanguardastudios/"
              target="_blank"
            >
              Instagram
            </a>
            <a
              className="hover:underlinemx-2 hover:text-primary-400"
              href="http://www.behance.net/cauehca"
              target="_blank"
            >
              Behance
            </a>
            <a
              className="mx-2 hover:text-primary-400 hover:underline"
              href="http://www.linkedin.com/in/cauehca"
              target="_blank"
            >
              Linkedin
            </a>
          </div>
          <div className="flex-none max-lg:hidden">
            {translation.language}
            <a className="hover:text-primary-400 hover:underline uppercase" href={router.getHref("/language", { locale })}>
              {locale}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
