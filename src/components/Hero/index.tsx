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
    <div className="flex h-[17.5rem] min-w-minimum items-center max-xs:h-[8.75rem]">
      <div className="mx-[11.25rem] flex w-full justify-between max-xl:mx-[5.5rem] max-xl:flex-col max-xl:gap-6 max-xs:mx-8">
        <h1 className="text-[2.5rem] font-bold uppercase leading-[150%] max-xs:text-xl">
          Articles
        </h1>
        <p className="max-w-[38.5rem] font-gelica text-xl leading-[150%] max-xs:text-[0.625rem]">
          Here, we have deposited some articles written by{" "}
          <span className="underline">Cauê Henrique</span>. We hope they can
          guide your perception of our work as a brand and interface design
          studio.
        </p>
      </div>
    </div>
  );
};

export const AboutHero = () => {
  return (
    <div className="flex h-[17.5rem] min-w-minimum items-center bg-gradient-to-b from-tertiary-300 max-xl:h-[10.5rem] max-xs:h-[4.5rem]">
      <div className="mx-[11.25rem] w-full max-xl:mx-[5.5rem] max-xs:mx-8">
        <h1 className="text-[2.5rem] font-bold uppercase leading-[150%] max-xs:text-xl">
          About
        </h1>
      </div>
    </div>
  );
};

export const BudgetHero = () => {
  return (
    <div className="flex h-[17.5rem] min-w-minimum items-center bg-gradient-to-b from-tertiary-300 max-xl:h-[10.5rem] max-xs:h-[4.5rem]">
      <div className="mx-[11.25rem] w-full max-xl:mx-[5.5rem] max-xs:mx-8">
        <h1 className="text-[2.5rem] font-bold uppercase leading-[150%] max-xs:text-xl">
          Budget
        </h1>
      </div>
    </div>
  );
};

export const CommonQuestionsHero = () => {
  return (
    <div className="min-w-minimum bg-gradient-to-b from-tertiary-300">
      <div className="mx-[11.25rem] flex items-center justify-between gap-6 py-24 max-xl:mx-[5.5rem] max-xl:flex-col max-xl:items-start max-xl:py-14 max-xs:mx-8 max-xs:py-6">
        <h1 className="text-[2.5rem] font-bold uppercase leading-[150%] max-xs:text-xl">
          Common Questions
        </h1>
        <p className="basis-2/5 font-gelica text-xl leading-[158%] max-xs:text-[0.625rem]">
          To simplify our work and enhance our clients&apos; understanding, this
          page has been created with the most common questions about our
          services.
        </p>
      </div>
    </div>
  );
};
