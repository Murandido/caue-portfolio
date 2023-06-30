export default function Hero() {
  return (
    <div className="ml-40 flex flex-grow items-center max-lg:mx-10 max-xs:mx-5">
      <div className="my-12 flex w-[39rem] flex-col gap-14 font-robotoSlab text-[2rem] max-lg:w-[29rem] max-lg:text-2xl max-sm:my-6 max-sm:w-auto max-sm:gap-4 max-sm:text-xs">
        <div className="font-righteous text-[4rem] uppercase max-lg:text-5xl max-sm:text-2xl">
          Real Limpeza
        </div>
        <div>
          Real Limpeza is a company specialized in residential, commercial and
          industrial cleaning services, including glass, facade and
          post-construction cleaning. With extensive experience in the sector.
        </div>
        <div className="flex gap-14">
          <div>Year - 2023</div>
          <div>Project - Brazil</div>
        </div>
      </div>
    </div>
  );
}
