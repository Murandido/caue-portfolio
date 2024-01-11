import Image from "next/image";

interface WorkItemProps {
  name: string;
  image: string;
  link: string;
}

export default function WorkItem({ name, image, link }: WorkItemProps) {
  return (
    <a href={link} className="relative flex">
      <div>
        <Image
          className="rounded-xl"
          src={image}
          alt={`${name.toLowerCase()} page`}
          width={920}
          height={800}
        />
      </div>
      <div className="absolute h-full w-full rounded-xl bg-[rgba(32,32,32,0.5)] opacity-0 transition duration-500 ease-out hover:opacity-100">
        <div className="absolute bottom-0 mx-10 my-8 text-[2.5rem] font-bold leading-[150%] text-white max-lg:text-3xl max-md:mx-6 max-md:my-4 max-md:text-xl max-xs:text-base">
          {name.toUpperCase()}
        </div>
      </div>
    </a>
  );
}
