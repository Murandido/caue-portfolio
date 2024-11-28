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
    <div className="flex h-[17.5rem] min-w-minimum items-center bg-gradient-to-b from-[#F1F1F1]">
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
    <div className="flex h-[25rem] min-w-minimum items-center justify-center bg-[url(https://i.imgur.com/5ugXZSq.png)] bg-center">
      <div className="mx-[5.5rem] flex max-w-[41rem] flex-col items-center justify-center gap-8 leading-[150%] max-xs:mx-8">
        <h1 className="text-[2.5rem] font-bold uppercase max-xs:text-xl">
          Budget
        </h1>
        <p className="text-center font-gelica text-xl max-xs:text-xs">
          Let&apos;s schedule a call meeting to discuss the project and improve
          your company visual communication! It&apos;s simple.
        </p>
      </div>
    </div>
  );
};

export const CommonQuestionsHero = () => {
  return (
    <div className="flex h-[25rem] min-w-minimum items-center justify-center bg-[url(https://i.imgur.com/QCxwANq.png)] bg-center">
      <div className="mx-[5.5rem] flex max-w-[41rem] flex-col items-center justify-center gap-8 leading-[150%] max-xs:mx-8">
        <h1 className="text-center text-[2.5rem] font-bold uppercase leading-[150%] max-xs:text-xl">
          Common Questions
        </h1>
        <p className="text-center font-gelica text-xl max-xs:text-xs">
          To simplify our work and enhance our clients&apos; understanding, this
          page has been created with the most common questions about our
          services.
        </p>
      </div>
    </div>
  );
};
