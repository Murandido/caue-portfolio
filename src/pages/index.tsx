import Head from "next/head";
import Carousel from "@/components/Carousel";
import Hero from "@/components/Hero";
import KnowMore from "@/components/KnowMore";
import WorksMenu from "@/components/WorksMenu";

export default function Home() {
  const slides = [
    "https://i.imgur.com/Cv60ADN.png",
    "https://i.imgur.com/uYzEXA0.png",
    "https://i.imgur.com/cGgN09M.png",
    "https://i.imgur.com/j2n0LfC.png",
  ];

  return (
    <main>
      <Head>
        <title>Cauê Henrique | Brand design studio</title>
        <meta
          name="description"
          content="If your design doesn't speak to the right audience, who is it telling its story to?"
        />
      </Head>
      <Carousel slides={slides} />
      <Hero />
      <WorksMenu />
      <KnowMore />
    </main>
  );
}
