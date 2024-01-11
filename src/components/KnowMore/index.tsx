export default function KnowMore() {
  return (
    <div className="mb-6 flex h-[45rem] w-full min-w-minimum items-center justify-center max-md:h-[19.25rem]">
      <div className="mx-7 flex h-full w-full items-center justify-center rounded-xl bg-[url(https://i.imgur.com/qlAo1yR.png)] bg-cover max-md:mx-5 max-xs:mx-4">
        <div className="m-2 flex w-[39.25rem] flex-col items-center justify-center gap-6 max-md:w-auto max-md:gap-4">
          <h1 className="text-center text-2xl font-bold leading-[150%] max-md:text-sm">
            Design is art, but is also human communication.
          </h1>
          <p className="text-center font-gelica text-xl leading-[150%] max-md:text-xs">
            Each human being communicates in their own way. So, how do you know
            your design was communicating with your target audience? That&apos;s
            why we are here, to improve your communication!
          </p>
          <a
            className="text-center font-gelica text-xl leading-[150%] underline hover:text-primary-400 max-md:text-xs"
            href="/"
          >
            +Know more about our methodology
          </a>
        </div>
      </div>
    </div>
  );
}
