import Image from "next/image";
import caueHenriqueLogoSVG from "../../assets/images/caueHenriqueLogo.svg";
import Link from "next/link";

export default function Header() {
  return (
    <header className="font-gelica">
      <div className="my-10 flex mx-[11.25rem] justify-between">
        <div>
          <Link href="/">
            <Image src={caueHenriqueLogoSVG} alt="caue henrique logo" />
          </Link>
        </div>
        <div className="flex items-center justify-center text-xl gap-12">
            <a className="hover:underline hover:text-primary-400" href="/">Home</a>
            <a className="hover:underline hover:text-primary-400" href="/">Articles</a>
            <a className="hover:underline hover:text-primary-400" href="/">About</a>
            <a className="hover:underline hover:text-primary-400" href="/">Budget</a>
            <a className="hover:underline hover:text-primary-400" href="/">Common questions</a>
        </div>
      </div>
    </header>
  );
}
