interface props {
  title: string;
  description: string;
  year: number;
  nationality: string;
  dictionary: {
    year: string;
    project: string;
  };
}

export default function Hero({
  title,
  description,
  year,
  nationality,
  dictionary,
}: props) {
  return (
    <div className="mb-10 ml-40 flex flex-grow items-center max-lg:mx-10 max-xs:mx-5">
      <div className="my-12 flex w-[39rem] flex-col gap-14 font-robotoSlab text-[2rem] max-lg:w-[29rem] max-lg:text-2xl max-sm:my-6 max-sm:w-auto max-sm:gap-4 max-sm:text-xs">
        <div className="font-righteous text-[4rem] uppercase max-lg:text-5xl max-sm:text-2xl">
          {title}
        </div>
        <div>{description}</div>
        <div className="flex gap-14">
          <div>
            {dictionary.year} - {year}
          </div>
          <div>
            {dictionary.project} - {nationality}
          </div>
        </div>
      </div>
    </div>
  );
}
