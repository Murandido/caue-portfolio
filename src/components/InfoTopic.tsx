import { ReactNode } from "react";

export default function InfoTopic({ children }: { children: ReactNode }) {
  return (
    <div className="flex justify-center border-b border-[#D9D9D9] text-2xl max-sm:text-xs">
      <p className="mx-[8.75rem] my-24 max-w-[79.5rem] max-lg:mx-5 max-sm:my-12 max-xs:mx-0">
        {children}
      </p>
    </div>
  );
}
