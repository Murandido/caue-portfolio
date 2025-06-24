import { ReactElement } from "react";
import Head from "next/head";
import Inner from "@/components/Inner";
import { BudgetHero } from "@/components/Hero";
import Layout from "@/components/Layout";
import Form from "@/components/Form/Form";

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
        <div className="min-w-minimum">
          <div className="mx-45 mb-28 flex gap-6 max-xl:mx-22 max-xl:mb-24 max-xl:flex-col max-xs:mx-8 max-xs:mb-12">
            <div className="flex basis-1/4 rounded-lg bg-secondary-300">
              <div className="flex flex-col gap-4 px-20 py-40 max-xl:p-20 max-xs:gap-2 max-xs:p-8">
                <h1 className="text-2xl font-bold uppercase leading-[150%] max-xs:text-xs max-steps:text-[0.5rem]">
                  Transforming challenges into opportunities
                </h1>
                <p className="font-gelica text-xl leading-[150%] max-xs:text-xs">
                  Let&apos;s schedule a call meeting to discuss the project and
                  improve your company visual communication!
                </p>
              </div>
            </div>
            <div className="h-148 grow overflow-hidden rounded-lg max-xl:h-250 max-xs:h-112">
              <Form />
            </div>
          </div>
        </div>
      </Inner>
    </>
  );
}

Budget.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
