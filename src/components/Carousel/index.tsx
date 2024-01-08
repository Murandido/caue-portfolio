"use client";

import Image from "next/image";
import { MouseEvent, useEffect, useState } from "react";

interface CarouselProps {
  slides: string[];
}

export default function Carousel({ slides }: CarouselProps) {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentSlide === slides.length - 1) setCurrentSlide(0);
      else setCurrentSlide(currentSlide + 1);
    }, 6000);

    return () => clearInterval(interval);
  }, [currentSlide, slides]);

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    switch (e.button) {
      // left button (next slide)
      case 0:
        if (currentSlide === slides.length - 1) setCurrentSlide(0);
        else setCurrentSlide(currentSlide + 1);
        break;

      // right button (previous slide)
      case 2:
        if (currentSlide === 0) setCurrentSlide(slides.length - 1);
        else setCurrentSlide(currentSlide - 1);
        break;
    }
  };

  return (
    <div
      className="w-full"
      onMouseDown={handleClick}
      onContextMenu={(e) => e.preventDefault()}
    >
      <div className="relative overflow-hidden">
        <div
          className="flex transition duration-300 ease-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((s) => {
            return (
              <Image
                src={s}
                key={s}
                alt={`carousel ${s} image`}
                width={1920}
                height={720}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
