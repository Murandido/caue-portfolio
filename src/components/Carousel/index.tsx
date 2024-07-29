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

  // next slide
  const handleClickRight = (e: MouseEvent<HTMLDivElement>) => {
    switch (e.button) {
      case 0:
        if (currentSlide === slides.length - 1) setCurrentSlide(0);
        else setCurrentSlide(currentSlide + 1);
        break;
    }
  };

  // previous slide
  const handleClickLeft = (e: MouseEvent<HTMLDivElement>) => {
    switch (e.button) {
      case 0:
        if (currentSlide === 0) setCurrentSlide(slides.length - 1);
        else setCurrentSlide(currentSlide - 1);
        break;
    }
  };

  return (
    <div className="w-full max-xl:hidden">
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
        <div className="absolute left-1/2 top-[4.75rem] w-[33.5rem] -translate-x-1/2">
          <div className="text-center text-2xl font-bold uppercase leading-[150%]">
            Design that communicates attracts and creates bonds.
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-11">
          <div>
            <button className="rounded-full border border-black px-[3.25rem] py-3 font-gelica text-xl transition hover:bg-black hover:text-white">
              Discover our method
            </button>
          </div>
          <div className="flex gap-2 transition">
            {slides.map((_, index) => {
              return (
                <div
                  key={index}
                  className={`h-3 w-3 rounded-full bg-black ${
                    index !== currentSlide && "opacity-50"
                  }`}
                />
              );
            })}
          </div>
        </div>

        {/* arrows */}
        <div
          onMouseDown={handleClickLeft}
          className="absolute left-0 top-0 h-full w-1/2 cursor-[url('../assets/icons/leftArrowIcon.svg'),pointer]"
        />
        <div
          onMouseDown={handleClickRight}
          className="absolute right-0 top-0 h-full w-1/2 cursor-[url('../assets/icons/rightArrowIcon.svg'),pointer] "
        />
      </div>
    </div>
  );
}
