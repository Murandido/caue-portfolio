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
        <div className="flex flex-wrap items-center justify-center gap-5 p-5"></div>
      </div>
    </main>
  );
}
