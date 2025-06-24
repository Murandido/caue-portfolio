export const IndexHero = () => {
  return (
    <div className="xl:hidden">
      <div>
        <div className="flex h-180 w-full min-w-minimum items-center justify-center bg-[url('https://i.imgur.com/Hr4573F.png')] bg-cover max-xs:h-78">
          <div className="mx-22 flex flex-col items-center justify-center gap-4 max-xs:mx-8">
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

export const ArticlesHero = ({ translation }: { translation: any }) => {
  return (
    <div className="flex h-70 min-w-minimum items-center max-xs:h-35">
      <div className="mx-45 flex w-full justify-between max-xl:mx-22 max-xl:flex-col max-xl:gap-6 max-xs:mx-8">
        <h1 className="text-[2.5rem] font-bold uppercase leading-[150%] max-xs:text-xl">
          {translation.title}
        </h1>
        <p className="max-w-154 font-gelica text-xl leading-[150%] max-xs:text-[0.625rem]">
          {translation.text1}
          <span className="underline">{translation.underline}</span>
          {translation.text2}          
        </p>
      </div>
    </div>
  );
};

export const AboutHero = ({ translation }: { translation: any }) => {
  return (
    <div className="flex h-70 min-w-minimum items-center bg-linear-to-b from-tertiary-300 max-xl:h-42 max-xs:h-18">
      <div className="mx-45 w-full max-xl:mx-22 max-xs:mx-8">
        <h1 className="text-[2.5rem] font-bold uppercase leading-[150%] max-xs:text-xl">
          {translation.title}
        </h1>
      </div>
    </div>
  );
};

export const BudgetHero = ({ translation }: { translation: any }) => {
  return (
    <div className="flex h-70 min-w-minimum items-center bg-linear-to-b from-tertiary-300 max-xl:h-42 max-xs:h-18">
      <div className="mx-45 w-full max-xl:mx-22 max-xs:mx-8">
        <h1 className="text-[2.5rem] font-bold uppercase leading-[150%] max-xs:text-xl">
          {translation.title}
        </h1>
      </div>
    </div>
  );
};

export const CommonQuestionsHero = ({ translation }: { translation: any }) => {
  return (
    <div className="min-w-minimum bg-linear-to-b from-tertiary-300">
      <div className="mx-45 flex items-center justify-between gap-6 py-24 max-xl:mx-22 max-xl:flex-col max-xl:items-start max-xl:py-14 max-xs:mx-8 max-xs:py-6">
        <h1 className="text-[2.5rem] font-bold uppercase leading-[150%] max-xs:text-xl">
          {translation.title}
        </h1>
        <p className="basis-2/5 font-gelica text-xl leading-[158%] max-xs:text-[0.625rem]">
          {translation.text}
        </p>
      </div>
    </div>
  );
};
