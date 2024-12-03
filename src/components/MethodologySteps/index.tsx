import { motion } from "framer-motion";
import { useState } from "react";

interface MethodologyStepsProps {
  steps: {
    number: number;
    ordinalSymbol: string;
    label: string;
    text: string;
  }[];
}

export default function MethodologyStep({ steps }: MethodologyStepsProps) {
  const [selectedStep, setSelectedSetp] = useState(steps[0]);

  return (
    <div className="overflow-hidden rounded-lg bg-primary-suporte">
      <nav>
        <ul className="flex border-b border-primary-400">
          {steps.map((item) => (
            <li
              key={item.label}
              className="relative flex h-24 w-full select-none items-center justify-center text-xl font-bold leading-[150%]"
              onClick={() => setSelectedSetp(item)}
            >
              {item === selectedStep && (
                <motion.div
                  className="absolute h-full w-full bg-primary-400"
                  layoutId="bg"
                  transition={{ ease: [0.21, 1.42, 0.85, 1.02], duration: 0.5 }}
                />
              )}
              <span className="z-10">
                {item.number}
                <sup className="underline">{item.ordinalSymbol}</sup>{" "}
                {item.label}
              </span>
            </li>
          ))}
        </ul>
      </nav>
      <div></div>
    </div>
  );
}
