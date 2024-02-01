import Link from "next/link";

export const IndexHero = () => {
  return (
    <div className="xl:hidden">
      <div>
        <div className="flex h-[45rem] w-full min-w-minimum items-center justify-center bg-[url('https://i.imgur.com/Hr4573F.png')] bg-cover max-xs:h-[19.5rem]">
          <div className="mx-[5.5rem] flex flex-col items-center justify-center gap-4 max-xs:mx-8">
            <h1 className="text-2xl font-bold uppercase leading-[150%] max-xs:text-sm">
              If your design doesn&apos;t speak to the right audience, who is it
              telling its story to?
            </h1>
            <p className="font-gelica text-xl leading-[150%] max-xs:text-xs">
              A strong visual communication is essential, especially for
              businesses aiming to build lasting relationships with customers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ArticlesHero = () => {
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
};
