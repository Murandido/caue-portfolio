import Image from "next/image";

interface WorkHeroProps {
  capeLink: string;
  title: string;
  alt: string;
  width: number;
  height: number;
  span: string;
  description: string;
}

export default function WorkHero({
  capeLink,
  alt,
  width,
  height,
  title,
  span,
  description,
}: WorkHeroProps) {
  return (
    <div className="flex flex-col gap-24 font-gelica text-xl leading-[150%] max-xs:gap-12 max-xs:text-xs">
      <div>
        <Image
          className="rounded-lg"
          src={capeLink}
          alt={alt}
          width={width}
          height={height}
        />
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex gap-2">
          <h1 className="font-bold">{title}</h1>
          <span className="italic">{span}</span>
        </div>
        <div>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}
