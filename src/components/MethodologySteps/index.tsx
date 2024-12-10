import useStepControls from "@/hooks/useStepControls";
import { motion } from "framer-motion";
import { useState } from "react";

export interface MethodologyStepsProps {
  steps: {
    number: number;
    ordinalSymbol: string;
    label: string;
    text: string;
  }[];
}

export default function MethodologyStep({ steps }: MethodologyStepsProps) {
  const [currentStep, setCurrentStep] = useState(steps[0]);

  const controls = useStepControls(steps);

  const handleNavClick = (nextStep: any) => {
    // se o nextStep for igual ao currentStep, não faça nada
    if (nextStep.number === currentStep.number) {
      return;
    }

    for (const forStep of steps) {
      // se o forStep for igual ao currentStep e o nextStep for maior que o currentStep, então apenas suma e fique em cima
      if (
        forStep.number === currentStep.number &&
        nextStep.number > currentStep.number
      ) {
        controls[forStep.label].start({ opacity: 0, y: 0 });
        continue;
      }

      // se o forStep for igual ao currentStep e o nextStep for menor que o currentStep, então desça pra baixo e deixe visível
      if (
        forStep.number === currentStep.number &&
        nextStep.number < currentStep.number
      ) {
        controls[forStep.label].start({ opacity: 1, y: "14.5rem" });
        continue;
      }

      // se o forStep for igual ao nextStep e o nextStep for maior que o currentStep, então suba e deixe visível
      if (
        forStep.number === nextStep.number &&
        nextStep.number > currentStep.number
      ) {
        controls[forStep.label].start({ opacity: 1, y: 0 });
        continue;
      }

      // se o forStep for igual ao nextStep e o nextStep for menor que o currentStep, então apareça e mantenha em cima
      if (
        forStep.number === nextStep.number &&
        nextStep.number < currentStep.number
      ) {
        controls[forStep.label].start({ opacity: 1, y: 0 });
        continue;
      }

      // aqui são casos onde o forStep não é igual ao nextStep nem ao currentStep

      // se o forStep for menor que o nextStep, então sete para invisível e suba
      if (forStep.number < nextStep.number) {
        controls[forStep.label].set({ opacity: 0, y: 0 });
        continue;
      }

      // se o forStep for maior que o nextStep, então sete para baixo e visível
      if (forStep.number > nextStep.number) {
        controls[forStep.label].set({ opacity: 1, y: "14.5rem" });
        continue;
      }
    }

    // atualiza o estado atual para o próximo passo
    setCurrentStep(nextStep);
  };

  return (
    <div className="overflow-hidden rounded-lg bg-primary-suporte">
      <nav>
        <ul className="flex border-b border-primary-400">
          {steps.map((item) => (
            <li
              key={item.label}
              className="relative flex h-24 w-full select-none items-center justify-center text-xl font-bold leading-[150%]"
              onClick={() => handleNavClick(item)}
            >
              {item === currentStep && (
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
      <div className="relative flex h-[22.125rem] items-center justify-center">
        {steps.map((item) => (
          <motion.div
            className="absolute mx-20 font-gelica text-xl"
            key={item.label}
            initial={item.number !== 1 ? { y: "14.5rem" } : { y: 0 }}
            animate={controls[item.label]}
            transition={{ ease: [0.21, 1.42, 0.85, 1.02], duration: 0.5 }}
          >
            {item.text}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
