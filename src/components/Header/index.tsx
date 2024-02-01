"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import HamburgerButton from "./HamburgerButton";
import CompactNavbar from "../CompactNavbar";

import caueHenriqueLogoSVG from "../../assets/logos/caueHenriqueLogo.svg";

export default function Header() {
  const [isMenuClicked, setIsMenuClicked] = useState<boolean>(false);

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
          <Link className="hover:text-primary-400 hover:underline" href="/">
            Home
          </Link>
          <Link
            className="hover:text-primary-400 hover:underline"
            href="/articles"
          >
            Articles
          </Link>
          <Link className="hover:text-primary-400 hover:underline" href="/">
            About
          </Link>
          <Link className="hover:text-primary-400 hover:underline" href="/">
            Budget
          </Link>
          <Link className="hover:text-primary-400 hover:underline" href="/">
            Common questions
          </Link>
        </nav>
        <HamburgerButton state={[isMenuClicked, setIsMenuClicked]} />
        <CompactNavbar isMenuClicked={isMenuClicked} />
      </div>
    </header>
  );
}
