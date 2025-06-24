import Image from "next/image";
import Link from "next/link";

interface KnowMoreProps {
  translation: {
    title: string;
    text: string;
    button: string;
  }
}

export default function KnowMore({ translation }: KnowMoreProps) {
  return (
    <div className="flex min-w-minimum bg-linear-to-b from-tertiary-300">
      {/* div when the page is bigger than 1280px */}
      <div className="mx-45 my-28 flex items-center gap-45 max-xl:hidden">
        <div>
          <Image
            src="https://i.imgur.com/b6SXkyT.png"
            alt="A call Image"
            width={1056}
            height={720}
          />
        </div>
        <div className="flex max-w-[20rem] flex-col items-center gap-6">
          <h1 className="text-2xl font-bold uppercase leading-[150%]">
            {translation.title}
          </h1>
          <p className="font-gelica text-xl leading-[150%]">
            {translation.text}
          </p>
          <Link
            className="w-full rounded-full border border-tertiary-400 py-3 text-center font-gelica text-xl leading-[150%] transition hover:bg-tertiary-400"
            href={"/budget"}
          >
            {translation.button}
          </Link>
        </div>
      </div>

      {/* div when the page is smaller than 1280px */}
      <div className="mx-22 my-16 hidden flex-col items-center gap-8 max-xl:flex max-xs:mx-8 max-xs:my-10 max-xs:gap-5 ">
        <div className="flex flex-col items-center gap-6 text-center max-xs:gap-3">
          <h1 className="w-[50%] text-2xl font-bold uppercase leading-[150%] max-xs:w-[70%] max-xs:text-sm">
            {translation.title}
          </h1>
          <p className="font-gelica text-xl leading-[150%] max-xs:text-xs">
            {translation.text}
          </p>
        </div>
        <div>
          <Image
            src="https://i.imgur.com/b6SXkyT.png"
            alt="A call Image"
            width={1056}
            height={720}
          />
        </div>
        <Link
          className="w-full rounded-full border border-tertiary-400 py-3 text-center font-gelica text-xl leading-[150%] transition hover:bg-tertiary-400 max-xs:py-2 max-xs:text-xs"
          href={"/budget"}
        >
          {translation.button}
        </Link>
      </div>
    </div>
  );
}
