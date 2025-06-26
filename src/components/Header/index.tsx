"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import HamburgerButton from "./HamburgerButton";
import CompactNavbar from "../CompactNavbar";

import caueHenriqueLogoSVG from "../../assets/logos/caueHenriqueLogo.svg";
import { usePathname } from "next/navigation";
import { Links } from "@/roots/layout";

interface HeaderProps {
  links: Links,
}

export default function Header({ links }: HeaderProps) {
  const [isMenuClicked, setIsMenuClicked] = useState<boolean>(false);
  const dynamicRoute = usePathname();

  useEffect(() => {
    setIsMenuClicked(false);
  }, [setIsMenuClicked, dynamicRoute]);

  return (
    <header className="fixed top-0 z-20 flex h-34 w-full min-w-minimum items-center bg-white font-gelica max-xs:h-14">
      <div className="mx-45 flex grow justify-between max-xl:mx-22 max-xs:mx-8">
        {/* logo */}
        <div>
          <Link href={links.index.href}>
            <Image
              className="max-xs:h-6 max-xs:w-17"
              src={caueHenriqueLogoSVG}
              alt="caue henrique logo"
            />
          </Link>
        </div>
        {/* navbar */}
        <nav className="flex items-center justify-center gap-12 text-xl max-xl:hidden">
          <Link className="hover:text-primary-400 hover:underline" href={links.index.href}>
            {links.index.name}
          </Link>
          <Link
            className="hover:text-primary-400 hover:underline"
            href={links.about.href}
          >
            {links.about.name}
          </Link>
          <Link
            className="hover:text-primary-400 hover:underline"
            href={links.budget.href}
          >
            {links.budget.name}
          </Link>
          <Link
            className="hover:text-primary-400 hover:underline"
            href={links.commonquestions.href}
          >
            {links.commonquestions.name}
          </Link>
        </nav>
        <HamburgerButton state={[isMenuClicked, setIsMenuClicked]} />
        <CompactNavbar links={links} isMenuClicked={isMenuClicked} />
      </div>
    </header>
  );
}
