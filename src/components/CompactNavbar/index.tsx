import Image from "next/image";
import clsx from "clsx";
import NavbarLink from "./NavbarLink";

import HomeIconSVG from "@/assets/icons/homeIcon.svg";
import ArticlesIconSVG from "@/assets/icons/articlesIcon.svg";
import AboutIconSVG from "@/assets/icons/aboutIcon.svg";
import BudgetIconSVG from "@/assets/icons/budgetIcon.svg";
import CommonQuestionsIconSVG from "@/assets/icons/commonQuestionsIcon.svg";
import { Links } from "@/roots/layout";

interface CompactNavbarProps {
  isMenuClicked: boolean;
  links: Links;
}

export default function CompactNavbar({ isMenuClicked, links }: CompactNavbarProps) {
  const navClasses = clsx(
    `${
      isMenuClicked ? "active" : "inactive"
    } flex-start absolute left-0 top-34 flex h-[calc(100vh-8.5rem)] w-full items-center overflow-auto border-t bg-white text-xl leading-[150%] max-xs:top-14 max-xs:h-[calc(100vh-3.5rem)] xl:hidden`,
  );

  const navItemClasses = clsx(
    "mx-22 flex justify-between border-b py-5 max-xs:mx-8",
  );

  return (
    <nav className={navClasses}>
      <div className="my-6 flex w-full flex-col">
        <div className={navItemClasses}>
          <NavbarLink name={links.index.name} href={links.index.href} />
          <Image src={HomeIconSVG} alt="home icon" />
        </div>
        <div className={navItemClasses}>
          <NavbarLink name={links.about.name} href={links.about.href} />
          <Image src={AboutIconSVG} alt="about icon" />
        </div>
        <div className={navItemClasses}>
          <NavbarLink name={links.budget.name} href={links.budget.href} />
          <Image src={BudgetIconSVG} alt="budget icon" />
        </div>
        <div className={`${navItemClasses} border-b-0`}>
          <NavbarLink name={links.commonquestions.name} href={links.commonquestions.href} />
          <Image src={CommonQuestionsIconSVG} alt="common questions icon" />
        </div>
      </div>
    </nav>
  );
}
