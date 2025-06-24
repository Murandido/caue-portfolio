import { MethodologyStepsProps } from "@/components/MethodologySteps";
import { LegacyAnimationControls, useAnimation } from "framer-motion";


export default function useStepControls(
  steps: MethodologyStepsProps["steps"],
): Record<string, LegacyAnimationControls> {
  return steps.reduce((acc, item) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    acc[item.label] = useAnimation();
    return acc;
  }, {} as Record<string, LegacyAnimationControls>);
}
