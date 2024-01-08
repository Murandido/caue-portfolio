import Carousel from "@/components/Carousel";
import React from "react";

export default function Home() {
  const slides = [
    "https://i.imgur.com/Cv60ADN.png",
    "https://i.imgur.com/uYzEXA0.png",
    "https://i.imgur.com/cGgN09M.png",
    "https://i.imgur.com/j2n0LfC.png",
  ];

  return (
    <main>
      <Carousel slides={slides} />
    </main>
  );
}
