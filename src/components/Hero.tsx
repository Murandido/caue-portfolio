import { ReactNode } from "react";

export default function Hero({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-w-[338.55px]">
      <div className="mx-40 my-60 w-[80rem] text-[4rem] max-lg:mx-10 max-sm:text-xl max-xs:mx-5">
        {children}
      </div>
    </div>
  );
}
