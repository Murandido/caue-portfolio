import Image from "next/image";

export default function AboutCaue({
  dictionary,
}: {
  dictionary: { imgAlt: string; title: string; p1: string; p2: string };
}) {
  return (
    <div className="m-5 flex flex-wrap justify-center gap-5">
      <div className="slideUp">
        <Image
          className="w-[58rem]"
          src="https://i.imgur.com/85lzxfe.png"
          width={930}
          height={1050}
          alt={dictionary.imgAlt}
        />
      </div>
      <div className="slideUp flex max-w-[58rem] flex-grow items-center justify-center bg-white">
        <div className="mx-5 my-40 flex max-w-[28rem] flex-col gap-10 font-robotoSlab text-xl max-sm:my-20 max-sm:gap-5 max-sm:text-xs">
          <p className="font-righteous">{dictionary.title}</p>
          <p>{dictionary.p1}</p>
          <p>{dictionary.p2}</p>
        </div>
      </div>
    </div>
  );
}
