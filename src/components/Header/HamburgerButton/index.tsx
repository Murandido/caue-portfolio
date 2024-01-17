export default function HamburgerButton() {
  return (
    <div className="hidden items-center justify-center max-xl:flex">
      <div className="relative h-5 w-10 cursor-pointer max-xs:h-[0.625rem] max-xs:w-6">
        <div className="absolute top-0 h-1 w-full bg-black max-xs:h-[0.125rem]" />
        <div className="absolute top-2 h-1 w-full bg-black max-xs:top-1 max-xs:h-[0.125rem]" />
        <div className="absolute top-4 h-1 w-full bg-black max-xs:top-2 max-xs:h-[0.125rem]" />
      </div>
    </div>
  );
}
