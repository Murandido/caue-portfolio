import Image from "next/image";
import Link from "next/link";

export default function KnowMore() {
  return (
    <div className="flex min-w-minimum bg-gradient-to-b from-[#F1F1F1]">
      {/* div when the page is bigger than 1280px */}
      <div className="mx-[11.25rem] my-28 flex items-center gap-[11.25rem] max-xl:hidden">
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
            Need a project? Schedule a call!
          </h1>
          <p className="font-gelica text-xl leading-[150%]">
            Each person communicates uniquely. So, how can you be sure your
            design is connecting with your ideal audience? Let&apos;s discuss
            this in a call to ensure your brand communicates in the right way.
          </p>
          <Link
            className="w-full rounded-full border border-[#D9D9D9] py-3 text-center font-gelica text-xl leading-[150%] transition hover:bg-[#D9D9D9]"
            href={"/budget"}
          >
            Schedule a call
          </Link>
        </div>
      </div>

      {/* div when the page is smaller than 1280px */}
      <div className="mx-[5.5rem] my-16 hidden flex-col items-center gap-8 max-xl:flex max-xs:mx-8 max-xs:my-10 max-xs:gap-5 ">
        <div className="flex flex-col items-center gap-6 text-center max-xs:gap-3">
          <h1 className="w-[50%] text-2xl font-bold uppercase leading-[150%] max-xs:w-[70%] max-xs:text-sm">
            Need a project? Schedule a call!
          </h1>
          <p className="font-gelica text-xl leading-[150%] max-xs:text-xs">
            Each person communicates uniquely. So, how can you be sure your
            design is connecting with your ideal audience? Let&apos;s discuss
            this in a call to ensure your brand communicates in the right way.
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
          className="w-full rounded-full border border-[#D9D9D9] py-3 text-center font-gelica text-xl leading-[150%] transition hover:bg-[#D9D9D9] max-xs:py-2 max-xs:text-xs"
          href={"/budget"}
        >
          Schedule a call
        </Link>
      </div>
    </div>
  );
}
