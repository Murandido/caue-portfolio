import { ReactNode } from "react";
import clsx from "clsx";

interface QuestionItemProps {
  children: ReactNode;
  className?: string;
}

export default function QuestionItem({
  children,
  className,
}: QuestionItemProps) {
  const QuestionItemClasses = clsx(
    `bg-secondary-300 p-[8.25rem] max-xl:p-16 max-xs:p-4 ${className}`,
  );
  return <div className={QuestionItemClasses}>{children}</div>;
}
