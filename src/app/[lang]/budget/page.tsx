import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Budget - Studio cauehenrique",
};

export default async function Budget({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);

  return (
    <main className="flex min-w-[338.55px] flex-grow">
      <section className="mx-40 flex items-center font-robotoSlab text-2xl leading-normal max-lg:mx-10 max-sm:text-sm max-xs:mx-5">
        <div className="slideUp flex max-w-[40rem] flex-col gap-6 max-sm:gap-2">
          <div className="flex">
            <h1 className="font-righteous text-[4rem] max-sm:text-4xl">
              {dictionary.budget.title}
            </h1>
          </div>
          <p>{dictionary.budget.text}</p>
          <div className="flex">
            <a
              className="text-primary-300 hover:underline"
              target="_blank"
              href="mailto:contact@cauehenrique.com"
              rel="noreferrer"
            >
              contact@cauehenrique.com
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
