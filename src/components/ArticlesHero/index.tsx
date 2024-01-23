import Link from "next/link";

export default function ArticlesHero() {
  return (
    <div className="flex h-[25rem] w-full min-w-minimum items-center justify-center bg-[url(https://i.imgur.com/noBYcSn.png)] bg-cover bg-center">
      <div className="mx-[5.5rem] flex max-w-[41rem] flex-col items-center justify-center gap-4 text-center leading-[150%] max-xs:mx-8">
        <h1 className="text-[2.5rem] font-bold uppercase max-xs:text-xl">
          Articles
        </h1>
        <p className="font-gelica text-xl max-xs:text-xs">
          Here, we have deposited some articles written by{" "}
          <Link className="underline" href="/about">
            Cauê Henrique
          </Link>
          . We hope they can guide your perception of our work as a brand and
          interface design studio.
        </p>
      </div>
    </div>
  );
}
