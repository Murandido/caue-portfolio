"use client";
import { Dispatch, SetStateAction } from "react";

interface HamburgerButtonProps {
  state: [
    isMenuClicked: boolean,
    setIsMenuClicked: Dispatch<SetStateAction<boolean>>,
  ];
}

export default function HamburgerButton({ state }: HamburgerButtonProps) {
  const [isMenuClicked, setIsMenuClicked] = state;

  return (
    <div
      className="hidden items-center justify-center max-xl:flex"
      onClick={() => setIsMenuClicked(!isMenuClicked)}
    >
      <div className="relative h-5 w-10 cursor-pointer max-xs:h-2.5 max-xs:w-6">
        <div
          className={`${
            isMenuClicked ? "clicked" : "unclicked"
          } absolute top-0 h-1 w-full bg-black max-xs:h-0.5`}
        />
        <div
          className={`${
            isMenuClicked ? "clicked" : "unclicked"
          } clicked absolute top-2 h-1 w-full bg-black max-xs:top-1 max-xs:h-0.5`}
        />
        <div
          className={`${
            isMenuClicked ? "clicked" : "unclicked"
          } clicked absolute top-4 h-1 w-full bg-black max-xs:top-2 max-xs:h-0.5`}
        />
      </div>
    </div>
  );
}
