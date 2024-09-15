import { ReactElement } from "react";
import Head from "next/head";
import Carousel from "@/components/Carousel";
// import { IndexHero } from "@/components/Hero";
import KnowMore from "@/components/KnowMore";
import WorksMenu from "@/components/WorksMenu";
import Inner from "@/components/Inner";
import Layout from "@/components/Layout";

export default function Home() {
  const slides = [
    "https://i.imgur.com/nWBG2Ei.png",
    "https://i.imgur.com/pKE5ygY.png",
    "https://i.imgur.com/oXQoJ2M.png",
    "https://i.imgur.com/fEtbq3j.png",
  ];

  return (
    <>
      <Head>
        <title>Cauê Henrique | Brand design studio</title>
        <meta
          name="description"
          content="If your design doesn't speak to the right audience, who is it telling its story to?"
        />
      </Head>
      <Inner>
        <Carousel slides={slides} />
        {/* <IndexHero /> */}
        <WorksMenu />
        <KnowMore />
      </Inner>
    </>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
