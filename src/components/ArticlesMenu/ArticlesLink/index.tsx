import Image from "next/image";

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
    <div className="flex max-w-[31.5rem] flex-col gap-4">
      <Image
        className="rounded-xl"
        src={image}
        alt="link image"
        width={504}
        height={648}
      />
      <a
        className="font-gelica text-xl leading-[150%] hover:text-primary-400 hover:underline max-xs:text-sm"
        href={link}
      >
        {message}
      </a>
    </div>
  );
}
