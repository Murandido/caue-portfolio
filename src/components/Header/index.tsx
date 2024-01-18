import Image from "next/image";
import caueHenriqueLogoSVG from "../../assets/logos/caueHenriqueLogo.svg";
import Link from "next/link";
import HamburgerButton from "./HamburgerButton";
import CompactNavbar from "../CompactNavbar";

export default function Header() {
  return (
    <header className="fixed top-0 z-[1] flex h-[8.5rem] w-full min-w-minimum items-center bg-white font-gelica max-xs:h-14">
      <div className="mx-[11.25rem] flex flex-grow justify-between max-xl:mx-[5.5rem] max-xs:mx-8">
        {/* logo */}
        <div>
          <Link href="/">
            <Image
              className="max-xs:h-6 max-xs:w-[4.25rem]"
              src={caueHenriqueLogoSVG}
              alt="caue henrique logo"
            />
          </Link>
        </div>
        {/* navbar */}
        <nav className="flex items-center justify-center gap-12 text-xl max-xl:hidden">
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
        </nav>
        <HamburgerButton />
        <CompactNavbar />
      </div>
    </header>
  );
}
