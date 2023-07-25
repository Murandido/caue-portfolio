import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";
import Link from "next/link";

export default async function LanguagesPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);

  return (
    <main className="flex min-w-header flex-grow">
      <section className="mx-40 flex items-center font-robotoSlab text-2xl leading-normal max-lg:mx-10 max-sm:text-sm max-xs:mx-5">
        <div className="slideUp flex max-w-[40rem] flex-col gap-6 max-sm:gap-2">
          <div className="flex">
            <h1 className="font-righteous text-[4rem] max-sm:text-4xl">
              {dictionary.languages.title}
            </h1>
          </div>
          <div className="flex flex-col items-start text-primary-300">
            <Link className="hover:underline" href="/en/">
              {dictionary.languages.links[1]}
            </Link>
            <Link className="hover:underline" href="/pt/">
              {dictionary.languages.links[2]}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
