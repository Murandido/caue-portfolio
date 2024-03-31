import { ReactElement } from "react";
import Head from "next/head";
import ArticlesMenu from "@/components/ArticlesMenu";
import { ArticlesHero } from "@/components/Hero";
import Inner from "@/components/Inner";
import Layout from "@/components/Layout";

export default function Articles() {
  return (
    <>
      <Head>
        <title>Articles | Cauê Henrique studio</title>
        <meta
          name="description"
          content="There is no more effective way to showcase expertise than through articles. Come and discover our visual identity studies."
        />
      </Head>
      <Inner>
        <ArticlesHero />
        <ArticlesMenu />
      </Inner>
    </>
  );
}

Articles.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
