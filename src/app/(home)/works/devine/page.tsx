import Image from "next/image";
import Hero from "@/components/HeroWorks";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Devine - Studio cauehenrique",
};

export default function RealLimpezaPage() {
  return (
    <main>
      <div className="flex min-w-[338.55px] flex-wrap-reverse items-center justify-center gap-5">
        <Hero
          title="Devine"
          description="Devine is a company that wants to innovate in the Alfajores (caramel cookie) segment making various flavors different to catch the public's attention, a company like this needs an identity unique, striking and differentiated."
          year={2023}
          nationality="Brazil"
        />
        <div className="m-5">
          <Image
            src="https://i.imgur.com/P7ufgd2.png"
            alt="Devine Banner"
            width="940"
            height="838"
          />
        </div>
      </div>
      <div className="min-w-[338.55px] bg-white">
        <div className="flex flex-wrap items-center justify-center gap-5 p-5">
          <Image
            className="w-[117.5rem]"
            src="https://i.imgur.com/KfwsSGG.png"
            alt="Devine 1"
            width="1880"
            height="1408"
          />
          <div className="flex flex-wrap items-center justify-center gap-5">
            <Image
              className="w-[58rem]"
              src="https://i.imgur.com/i16u24R.png"
              alt="Devine 2"
              width="924"
              height="696"
            />
            <Image
              className="w-[58rem]"
              src="https://i.imgur.com/AmAhmym.png"
              alt="Devine 3"
              width="924"
              height="696"
            />
          </div>
          <Image
            className="w-[117.5rem]"
            src="https://i.imgur.com/XXM5dC0.png"
            alt="Devine 4"
            width="1880"
            height="1336"
          />
          <div className="flex flex-wrap items-center justify-center gap-5">
            <Image
              className="w-[58rem]"
              src="https://i.imgur.com/VYamHjm.png"
              alt="Devine 5"
              width="924"
              height="696"
            />
            <Image
              className="w-[58rem]"
              src="https://i.imgur.com/qCzilHN.png"
              alt="Devine 6"
              width="924"
              height="696"
            />
          </div>
          <Image
            className="w-[117.5rem]"
            src="https://i.imgur.com/E8I2kQ7.png"
            alt="Devine 7"
            width="1880"
            height="1336"
          />
          <Image
            className="w-[117.5rem]"
            src="https://i.imgur.com/B4ovbDl.png"
            alt="Devine 11"
            width="1880"
            height="1568"
          />
          <div className="flex flex-wrap items-center justify-center gap-5">
            <Image
              className="w-[38rem]"
              src="https://i.imgur.com/7JwbVaw.png"
              alt="Devine 13"
              width="608"
              height="864"
            />
            <Image
              className="w-[38rem]"
              src="https://i.imgur.com/kreehX9.png"
              alt="Devine 14"
              width="608"
              height="864"
            />
            <Image
              className="w-[38rem]"
              src="https://i.imgur.com/jwYipWM.png"
              alt="Devine 15"
              width="608"
              height="864"
            />
          </div>
          <Image
            className="w-[117.5rem]"
            src="https://i.imgur.com/jufV27M.png"
            alt="Devine 16"
            width="1880"
            height="1408"
          />
          <Image
            className="w-[117.5rem]"
            src="https://i.imgur.com/Jn9V7nQ.png"
            alt="Devine 24"
            width="1880"
            height="1408"
          />
          <Image
            className="w-[117.5rem]"
            src="https://i.imgur.com/Jzj8oXi.png"
            alt="Devine 25"
            width="1880"
            height="1080"
          />
          <div className="flex flex-wrap items-center justify-center gap-5">
            <Image
              className="w-[58rem]"
              src="https://i.imgur.com/vc3VbMK.png"
              alt="Devine 26"
              width="924"
              height="696"
            />
            <Image
              className="w-[58rem]"
              src="https://i.imgur.com/noB6QJc.png"
              alt="Devine 27"
              width="924"
              height="696"
            />
          </div>
          <Image
            className="w-[117.5rem]"
            src="https://i.imgur.com/c5oHPrA.png"
            alt="Devine 28"
            width="1880"
            height="1400"
          />
        </div>
      </div>
    </main>
  );
}
