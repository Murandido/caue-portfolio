import { MethodologyStepsProps } from "@/components/MethodologySteps";
import { AnimationControls, useAnimation } from "framer-motion";

export default function useStepControls(
  steps: MethodologyStepsProps["steps"],
): Record<string, AnimationControls> {
  return steps.reduce((acc, item) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    acc[item.label] = useAnimation();
    return acc;
  }, {} as Record<string, AnimationControls>);
}
