import Image from "next/image";

import caueHenriqueLogoSVG from "../../assets/logos/caueHenriqueLogo.svg";

export default function Footer() {
  return (
    <footer className="min-w-minimum border-t font-gelica text-xl leading-[150%] max-md:text-xs max-xs:text-[10px]">
      <div className="mx-[11.25rem] my-11 max-xl:mx-[5.5rem] max-xl:my-12 max-xs:mx-8 max-xs:my-5">
        <div className="flex items-end justify-between">
          <a className="flex" href="/">
            <Image
              className="max-xs:h-6 max-xs:w-[4.25rem]"
              src={caueHenriqueLogoSVG}
              alt="caue henrique logo"
            />
          </a>
          <div className="flex-none lg:hidden">
            Language:{" "}
            <a className="hover:text-primary-400 hover:underline" href="/">
              EN
            </a>
          </div>
        </div>
        <div className="my-6 h-px w-full border-t" />
        <div className="flex">
          <div className="flex flex-1 flex-wrap gap-12 max-lg:justify-around max-lg:gap-0">
            <a
              className="mx-2 hover:text-primary-400 hover:underline"
              href="mailto:contact@cauehenrique.com"
              target="_blank"
              rel="noreferrer"
            >
              contact@cauehenrique.com
            </a>
            <a
              className="mx-2 hover:text-primary-400 hover:underline"
              href="/"
              target="_blank"
            >
              Instagram
            </a>
            <a
              className="hover:underlinemx-2 hover:text-primary-400"
              href="/"
              target="_blank"
            >
              Behance
            </a>
            <a
              className="mx-2 hover:text-primary-400 hover:underline"
              href="/"
              target="_blank"
            >
              Linkedin
            </a>
          </div>
          <div className="flex-none max-lg:hidden">
            Language:{" "}
            <a className="hover:text-primary-400 hover:underline" href="/">
              EN
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
