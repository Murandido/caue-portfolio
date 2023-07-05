import Image from "next/image";
import Hero from "@/components/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Xchango - Studio cauehenrique",
};

export default function RealLimpezaPage() {
  return (
    <main>
      <div className="flex min-w-[338.55px] flex-wrap-reverse items-center justify-center gap-5">
        <Hero
          title="Xchango"
          description="Xchango is a multi-currency exchange analysis site, where the site analyzes the exchange rate between two selected currencies and sends an email notifying you of the profit you made on that transaction."
          year={2023}
          nationality="International"
        />
        <div className="m-5">
          <Image
            src="https://i.imgur.com/6Ketoe6.png"
            alt="Xchango Banner"
            width="940"
            height="838"
          />
        </div>
      </div>
      <div className="min-w-[338.55px] bg-white">
        <div className="flex flex-wrap items-center justify-center gap-5 p-5">
          <Image
            className="w-[116rem]"
            src="https://i.imgur.com/wOiHco0.png"
            alt="Xchango 1"
            width="1872"
            height="1400"
          />
          <Image
            className="w-[116rem]"
            src="https://i.imgur.com/LwDkn9y.png"
            alt="Xchango 2"
            width="1872"
            height="1336"
          />
          <div className="flex flex-wrap items-center justify-center gap-5">
            <Image
              className="w-[57.5rem]"
              src="https://i.imgur.com/Fg8jMy4.png"
              alt="Xchango 3"
              width="928"
              height="696"
            />
            <Image
              className="w-[57.5rem]"
              src="https://i.imgur.com/RVQgcSW.png"
              alt="Xchango 4"
              width="928"
              height="696"
            />
          </div>
          <Image
            className="w-[116rem]"
            src="https://i.imgur.com/k0MahOv.png"
            alt="Xchango 5"
            width="1872"
            height="1416"
          />
          <div className="flex flex-wrap items-center justify-center gap-5">
            <Image
              className="w-[57.5rem]"
              src="https://i.imgur.com/MvQTD1W.png"
              alt="Xchango 6"
              width="928"
              height="696"
            />
            <Image
              className="w-[57.5rem]"
              src="https://i.imgur.com/UvUdPIK.png"
              alt="Xchango 7"
              width="928"
              height="696"
            />
          </div>
          <Image
            className="w-[116rem]"
            src="https://i.imgur.com/yZlB0dV.png"
            alt="Xchango 8"
            width="1872"
            height="1400"
          />
          <div className="flex flex-wrap items-center justify-center gap-5">
            <Image
              className="w-[69.5rem]"
              src="https://i.imgur.com/oe16E3u.png"
              alt="Xchango 9"
              width="1120"
              height="744"
            />
            <Image
              className="w-[46rem]"
              src="https://i.imgur.com/MTaps6Q.png"
              alt="Xchango 10"
              width="736"
              height="744"
            />
          </div>
          <Image
            className="w-[116rem]"
            src="https://i.imgur.com/P7aS1A0.png"
            alt="Xchango 11"
            width="1872"
            height="1400"
          />
          <Image
            className="w-[116rem]"
            src="https://i.imgur.com/JNgChP2.png"
            alt="Xchango 12"
            width="1872"
            height="1400"
          />
          <Image
            className="w-[116rem]"
            src="https://i.imgur.com/Ypfj1hk.png"
            alt="Xchango 13"
            width="1872"
            height="1400"
          />
          <Image
            className="w-[116rem]"
            src="https://i.imgur.com/rhKbcof.png"
            alt="Xchango 14"
            width="1872"
            height="1400"
          />
          <Image
            className="w-[116rem]"
            src="https://i.imgur.com/1Mmy6H1.png"
            alt="Xchango 15"
            width="1872"
            height="1400"
          />
        </div>
      </div>
    </main>
  );
}
