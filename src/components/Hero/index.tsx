export default function Hero() {
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
}
