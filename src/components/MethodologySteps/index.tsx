interface MethodologyStepProps {
  title: string;
  desc: string;
}

export default function MethodologyStep({ title, desc }: MethodologyStepProps) {
  return (
    <div className="w-full text-xl max-xs:text-xs">
      <div className="flex h-16 items-center justify-center rounded-t-xl bg-primary-400 font-bold uppercase max-xs:h-8">
        <h1>{title}</h1>
      </div>
      <div className="rounded-b-xl bg-secondary-300 font-gelica leading-[150%]">
        <p className="px-[8.25rem] py-20 max-xl:px-16 max-xs:p-4">{desc}</p>
      </div>
    </div>
  );
}
