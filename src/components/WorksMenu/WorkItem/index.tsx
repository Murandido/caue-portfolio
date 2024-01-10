import Image from "next/image";

interface WorkItemProps {
  name: string;
  image: string;
  link: string;
}

export default function WorkItem({ name, image, link }: WorkItemProps) {
  return (
    <a href={link}>
      <div>
        <Image
          src={image}
          alt={`${name.toLowerCase()} page`}
          width={920}
          height={800}
        />
      </div>
      <div className="hidden">{name.toUpperCase()}</div>
    </a>
  );
}
