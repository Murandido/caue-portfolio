import Image from "next/image";
import Hero from "@/components/realLimpeza/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Real Limpeza - Studio cauehenrique",
};

export default function RealLimpezaPage() {
  return (
    <main>
      <div className="flex min-w-[338.55px] flex-wrap-reverse items-center justify-center gap-5">
        <Hero />
        <div className="m-5">
          <Image
            src="https://drive.google.com/uc?export=view&id=1t5Mi5DMHaigeuFZuYxMFn83PFeufNyMC"
            alt="Real Limpeza 4"
            width="940"
            height="838"
          />
        </div>
      </div>
    </main>
  );
}
