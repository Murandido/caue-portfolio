import Image from "next/image";
import caueHenriqueLogoSVG from "../../assets/logos/caueHenriqueLogo.svg";
import Link from "next/link";

export default function Header() {
  return (
    <header className="min-w-minimum font-gelica">
      <div className="mx-[11.25rem] my-10 flex justify-between max-xl:mx-[5.5rem] max-xs:mx-8 max-xs:my-4">
        <div>
          <Link href="/">
            <Image
              className="max-xs:h-6 max-xs:w-[4.25rem]"
              src={caueHenriqueLogoSVG}
              alt="caue henrique logo"
            />
          </Link>
        </div>
        <div className="flex items-center justify-center gap-12 text-xl max-xl:hidden">
          <a className="hover:text-primary-400 hover:underline" href="/">
            Home
          </a>
          <a className="hover:text-primary-400 hover:underline" href="/">
            Articles
          </a>
          <a className="hover:text-primary-400 hover:underline" href="/">
            About
          </a>
          <a className="hover:text-primary-400 hover:underline" href="/">
            Budget
          </a>
          <a className="hover:text-primary-400 hover:underline" href="/">
            Common questions
          </a>
        </div>
        <div className="hidden items-center justify-center max-xl:flex">
          <div className="relative h-5 w-10 max-xs:h-[0.625rem] max-xs:w-6">
            <div className="absolute top-0 h-1 w-full bg-black max-xs:h-[0.125rem]" />
            <div className="absolute top-2 h-1 w-full bg-black max-xs:top-1 max-xs:h-[0.125rem]" />
            <div className="absolute top-4 h-1 w-full bg-black max-xs:top-2 max-xs:h-[0.125rem]" />
          </div>
        </div>
      </div>
    </header>
  );
}
