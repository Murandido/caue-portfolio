"use client"
import { ReactNode, useState } from "react";
// import clsx from "clsx";

interface QuestionItemProps {
  title: ReactNode;
  text: ReactNode;
  last?: boolean;
}

export default function QuestionItem({
  title,
  text,
  last = false,
}: QuestionItemProps) {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <li
      className={`flex flex-col p-20 font-gelica text-xl leading-[150%] max-xs:p-8 max-xs:text-[0.625rem] ${
        !last && "border-b border-primary-400"
      }`}
    >
      <div className="flex justify-between font-bold">
        <span>{title}</span>
        <button onClick={() => setAccordionOpen(!accordionOpen)}>
          <svg
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`h-4 w-4 transition-all duration-300 ease-in-out max-xs:h-2 max-xs:w-2 ${
              accordionOpen && "rotate-180"
            }`}
          >
            <g clipPath="url(#a)">
              <path
                d="M11.296 5.646 7.978 2.33 4.663 5.646 0 10.309l3.317 3.315 2.316-2.315 2.345-2.346 2.342 2.344 2.365 2.363L16 10.354z"
                fill="#FDC52E"
              />
            </g>
            <defs>
              <clipPath id="a">
                <path fill="#fff" d="M16 16H0V0h16z" />
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
          accordionOpen
            ? "mt-6 grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        {text}
      </div>
    </li>
  );
}
