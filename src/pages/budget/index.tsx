import Head from "next/head";
import Inner from "@/components/Inner";
import { BudgetHero } from "@/components/Hero";

export default function Budget() {
  return (
    <>
      <Head>
        <title>Budget | Cauê Henrique studio</title>
        <meta
          name="description"
          content="Let's schedule a call meeting to discuss the project and improve your company visual communication"
        />
      </Head>
      <Inner>
        <BudgetHero />
        <div className="w-full min-w-minimum">
          <div className="m-[11.5rem] overflow-hidden rounded-lg bg-secondary-300 p-6 max-xl:mx-[5.5rem] max-xl:my-24 max-xs:mx-8">
            <ol className="lista list-inside font-gelica text-xl leading-[150%] max-xs:text-xs">
              <li>
                Send an e-mail to:{" "}
                <a
                  className="underline hover:text-primary-400"
                  href="mailto:contact@cauehenrique.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  contact@cauehenrique.com
                </a>{" "}
                | To facilitate the process, send us some information about your
                company that is important, like name and what problem you have
                faced on your brand.
              </li>
            </ol>
          </div>
        </div>
      </Inner>
    </>
  );
}
