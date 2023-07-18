import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface props {
  name: string;
  year: number;
  imgUrl: StaticImageData | string;
  imgAlt: string;
  linkToPage: string;
}

export default function ProjectLink({
  name,
  year,
  imgUrl,
  imgAlt,
  linkToPage,
}: props) {
  return (
    <Link className="slideUp relative w-[58rem]" href={linkToPage}>
      <Image
        className="block w-full"
        src={imgUrl}
        alt={imgAlt}
        width={896}
        height={800}
      />
      <div className="animation absolute left-0 top-0 flex h-full w-full items-end justify-start bg-[rgba(0,0,0,0.6)] uppercase text-white opacity-0 transition-opacity hover:opacity-100">
        <div className="m-10 flex items-end gap-2 max-sm:m-3 max-sm:gap-1">
          <div className="text-5xl max-sm:text-2xl">{name}</div>
          <p className="font-robotoSlab text-xl max-sm:text-[0.5rem]">{year}</p>
        </div>
      </div>
    </Link>
  );
}
