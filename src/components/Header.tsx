import caueLogoSVG from "@/assets/caueLogo.svg";
import Image from "next/image";
import Link from "next/link";

export default function Header({
  dictionary,
}: {
  dictionary: { links: { about: string; budget: string }; lang: string };
}) {
  return (
    <header className="flex h-28 min-w-max border-b border-primary-300 max-sm:h-12">
      {/* container */}
      <div className="mx-40 flex w-full justify-between gap-8 max-lg:mx-10 max-xs:mx-5">
        {/* logo and name */}
        <Link
          className="flex items-center gap-2 max-sm:gap-1"
          href={`/${dictionary.lang}/`}
        >
          <Image
            className="h-12 w-12 max-sm:h-5 max-sm:w-5"
            src={caueLogoSVG}
            alt="logo"
          />
          <div className="flex items-center text-3xl uppercase max-sm:text-base">
            cauehenrique
          </div>
        </Link>

        {/* links */}
        <div className="flex items-center gap-12 text-2xl text-primary-300 max-sm:text-xs">
          <Link className="hover:underline" href={`/${dictionary.lang}/about/`}>
            {dictionary.links.about}
          </Link>
          <Link
            className="hover:underline"
            href={`/${dictionary.lang}/budget/`}
          >
            {dictionary.links.budget}
          </Link>
        </div>
      </div>
    </header>
  );
}
