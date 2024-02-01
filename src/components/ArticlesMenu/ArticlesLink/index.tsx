import Image from "next/image";
import Link from "next/link";

interface ArticlesLinkProps {
  message: string;
  link: string;
  image: string;
}

export default function ArticlesLink({
  image,
  link,
  message,
}: ArticlesLinkProps) {
  return (
    <Link href={link} className="flex max-w-[31.5rem] flex-col gap-4">
      <div className="overflow-hidden rounded-xl">
        <Image
          className="transition duration-500 ease-in-out hover:scale-125"
          src={image}
          alt="link image"
          width={504}
          height={648}
        />
      </div>
      <div className="font-gelica text-xl leading-[150%] max-xs:text-sm">
        {message}
      </div>
    </Link>
  );
}
