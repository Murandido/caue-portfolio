import Head from "next/head";
import ArticlesHero from "@/components/ArticlesHero";
import ArticlesMenu from "@/components/ArticlesMenu";
import Inner from "@/components/Inner";

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
