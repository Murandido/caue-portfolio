import Image from "next/image";
import caueHenriqueLogoSVG from "../../assets/images/caueHenriqueLogo.svg";
import Link from "next/link";

export default function Header() {
  return (
    <header className="font-gelica">
      <div className="mx-[11.25rem] my-10 flex justify-between">
        <div>
          <Link href="/">
            <Image src={caueHenriqueLogoSVG} alt="caue henrique logo" />
          </Link>
        </div>
        <div className="flex items-center justify-center gap-12 text-xl">
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
      </div>
    </header>
  );
}
