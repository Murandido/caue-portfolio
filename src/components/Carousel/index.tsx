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
      className="w-full max-xl:hidden"
      onMouseDown={handleClick}
      onContextMenu={(e) => e.preventDefault()}
    >
      <div className="relative overflow-hidden">
        {/* bg images */}
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

        {/* hero */}
        <div className="absolute top-1/2 ml-[11.25rem] flex w-[28rem] -translate-y-1/2 flex-col gap-6">
          <div className="text-2xl font-bold uppercase leading-[150%]">
            If your design doesn&apos;t speak to the right audience, who is it
            telling its story to?
          </div>
          <div className="font-gelica text-xl">
            A strong visual communication is essential, especially for
            businesses aiming to build lasting relationships with customers.
          </div>
        </div>
      </div>
    </div>
  );
}
