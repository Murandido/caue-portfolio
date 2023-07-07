import Image from "next/image";
import Hero from "@/components/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "cauehenrique - Studio cauehenrique",
};

export default function RealLimpezaPage() {
  return (
    <main>
      <div className="flex min-w-[338.55px] flex-wrap-reverse items-center justify-center gap-5">
        <Hero
          title="cauehenrique"
          description="Cauê Henrique is a brand designer, user interface and experience designer. This brand identity was made for his studio, with the idea of be simple with patterns that doesn't attract too much attention but serves its purpose of being significant and memorable."
          year={2023}
          nationality="International"
        />
        <div className="m-5">
          <Image
            src="https://i.imgur.com/16UtRjf.png"
            alt="Xchango Banner"
            width="940"
            height="838"
          />
        </div>
      </div>
      <div className="min-w-[338.55px] bg-white">
        <div className="flex flex-wrap items-center justify-center gap-5 p-5">
          <Image
            src="https://i.imgur.com/mZapnpD.png"
            alt="cauehenrique 1"
            width="90"
            height="90"
          />
          <Image
            src="https://i.imgur.com/wpHZP8E.png"
            alt="cauehenrique 2"
            width="90"
            height="90"
          />
          <Image
            src="https://i.imgur.com/twUE7NM.png"
            alt="cauehenrique 3"
            width="90"
            height="90"
          />
          <Image
            src="https://i.imgur.com/ezhpW1O.png"
            alt="cauehenrique 4"
            width="90"
            height="90"
          />
          <Image
            src="https://i.imgur.com/f9A8RBz.png"
            alt="cauehenrique 5"
            width="90"
            height="90"
          />
          <div>
            <Image
              src="https://i.imgur.com/7KZARcL.png"
              alt="cauehenrique 6"
              width="90"
              height="90"
            />
            <Image
              src="https://i.imgur.com/3FA4WZC.png"
              alt="cauehenrique 7"
              width="90"
              height="90"
            />
          </div>
          <Image
            src="https://i.imgur.com/gDouBND.png"
            alt="cauehenrique 8"
            width="90"
            height="90"
          />
          <Image
            src="https://i.imgur.com/ENQovnz.png"
            alt="cauehenrique 9"
            width="90"
            height="90"
          />
          <Image
            src="https://i.imgur.com/GyTVYcv.png"
            alt="cauehenrique 10"
            width="90"
            height="90"
          />
          <div>
            <Image
              src="https://i.imgur.com/ACWWEG4.png"
              alt="cauehenrique 11"
              width="90"
              height="90"
            />
            <Image
              src="https://i.imgur.com/WmOaQRQ.png"
              alt="cauehenrique 12"
              width="90"
              height="90"
            />
          </div>
          <Image
            src="https://i.imgur.com/DVxA2g5.png"
            alt="cauehenrique 13"
            width="90"
            height="90"
          />
          <Image
            src="https://i.imgur.com/sP5wx7F.png"
            alt="cauehenrique 14"
            width="90"
            height="90"
          />
          <Image
            src="https://i.imgur.com/ZDaenNb.png"
            alt="cauehenrique 15"
            width="90"
            height="90"
          />
        </div>
      </div>
    </main>
  );
}
