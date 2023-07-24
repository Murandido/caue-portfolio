import Link from "next/link";
import InfoTopic from "./InfoTopic";

export default function Info({
  dictionary,
}: {
  dictionary: {
    title: string;
    topics: {
      1: string;
      2: string;
      3: string;
      4: string;
      5: { text1: string; highlight: string; text2: string };
    };
  };
}) {
  return (
    <div className="m-5 mb-0 flex justify-center font-robotoSlab">
      <div className="flex max-w-[100rem] flex-col">
        <div className="flex justify-center border-b border-[#D9D9D9] font-righteous text-4xl leading-normal max-sm:text-base">
          <h1 className="mx-[9.25rem] my-24 max-w-[59.5rem] text-center max-lg:mx-7 max-sm:my-12 max-xs:mx-2">
            {dictionary.title}
          </h1>
        </div>
        <div>
          <InfoTopic>{dictionary.topics[1]}</InfoTopic>
          <InfoTopic>{dictionary.topics[2]}</InfoTopic>
          <InfoTopic>{dictionary.topics[3]}</InfoTopic>
          <InfoTopic>{dictionary.topics[4]}</InfoTopic>
          <InfoTopic>
            {dictionary.topics[5].text1}
            <Link className="text-primary-300 hover:underline" href="/">
              {dictionary.topics[5].highlight}
            </Link>
            {dictionary.topics[5].text2}
          </InfoTopic>
        </div>
      </div>
    </div>
  );
}
