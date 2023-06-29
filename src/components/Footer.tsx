import Image from "next/image";
import instagramLogoSVG from "@/assets/instagramLogo.svg";
import behanceLogoSVG from "@/assets/behanceLogo.svg";

export default function Footer() {
  return (
    <footer className="flex min-w-[338.55px] justify-center">
      <div className="flex flex-col justify-center gap-6 p-16 max-sm:gap-3 max-sm:p-8">
        <div className="text-[2.5rem] max-sm:text-lg">
          Have a project?{" "}
          <a className="text-primary-300 hover:underline" href="#">
            contact
          </a>
        </div>
        <div className="flex items-center justify-center text-base">
          <div className="h-[1px] w-full bg-black-300"></div>
          <div className="absolute bg-secondary-300 p-1 max-sm:p-[0.3rem] max-sm:text-[0.5rem] max-sm:leading-3">
            and follow us
          </div>
        </div>
        <div className="flex justify-center gap-4">
          <a
            href="https://www.instagram.com/studiocauehenrique/"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              className="w-12 transition-transform hover:scale-105 max-sm:w-5"
              src={instagramLogoSVG}
              alt="Instagram logo"
              width={48}
              height={48}
            />
          </a>
          <a
            href="https://www.behance.net/cauehenryque"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              className="w-12 transition-transform hover:scale-105 max-sm:w-5"
              src={behanceLogoSVG}
              alt="Behance logo"
              width={48}
              height={48}
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
