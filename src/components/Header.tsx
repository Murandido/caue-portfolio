import caueLogoSVG from "@/assets/caueLogo.svg";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex h-28 justify-between border-b border-primary-300">
      {/* logo */}
      <Link className="ml-40 flex items-center gap-2" href="/">
        <Image className="h-12 w-12" src={caueLogoSVG} alt="logo" />
        <div className="flex items-center text-3xl uppercase">cauehenrique</div>
      </Link>

      {/* links */}
      <div className="mr-40 flex items-center gap-12 text-2xl text-primary-300">
        <a className="hover:underline" href="#">
          About
        </a>
        <a className="hover:underline" href="#">
          Budget
        </a>
      </div>
    </header>
  );
}
