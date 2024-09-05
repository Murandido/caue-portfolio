import Image from "next/image";
import { MouseEvent, useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";

interface CarouselProps {
  slides: string[];
}

export default function Carousel({ slides }: CarouselProps) {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [cursorURL, setCursorURL] = useState<
    "/leftArrowIcon.svg" | "/rightArrowIcon.svg"
  >("/leftArrowIcon.svg");
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [mouseAnimation, setMouseAnimation] = useState<"default" | "moving">(
    "default",
  );

  // carousel logic
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

  // custom cursor logic
  const mouseMove = (e: globalThis.MouseEvent) => {
    setMousePosition({
      x: e.clientX,
      y: e.clientY,
    });
  };
  // useEffect(() => {

  //

  //   return () => {
  //
  //   };
  // }, []);

  const variants: Variants = {
    default: {
      opacity: 0,
      transition: { duration: 0 },
    },
    moving: {
      x: mousePosition.x - 40,
      y: mousePosition.y - 40,
      transition: { duration: 0 },
    },
  };

  const handleMouseEnterLeftInvisibleArrow = () => {
    window.addEventListener("mousemove", mouseMove);
    setCursorURL("/leftArrowIcon.svg");
    setMouseAnimation("moving");
  };

  const handleMouseLeaveLeftInvisibleArrow = () => {
    setMouseAnimation("default");
    window.removeEventListener("mousemove", mouseMove);
  };

  const handleMouseEnterRightInvisibleArrow = () => {
    window.addEventListener("mousemove", mouseMove);
    setCursorURL("/rightArrowIcon.svg");
    setMouseAnimation("moving");
  };

  const handleMouseLeaveRightInvisibleArrow = () => {
    setMouseAnimation("default");
    window.removeEventListener("mousemove", mouseMove);
  };
  return (
    <div className="w-full max-xl:hidden">
      <div className="relative overflow-hidden">
        {/* bg images */}
        <div
          className="flex transition duration-300 ease-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((s, i) => {
            return (
              <Image
                src={s}
                key={s}
                alt={`carousel ${i + 1} image`}
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

        {/* cursor */}
        <motion.div
          className="fixed left-0 top-0"
          variants={variants}
          animate={mouseAnimation}
        >
          <Image
            className="h-20 w-20"
            alt="mouse cursor"
            src={cursorURL}
            width={32}
            height={32}
          />
        </motion.div>

        {/* invisible arrows */}
        <div
          onMouseDown={handleClickLeft}
          onMouseEnter={handleMouseEnterLeftInvisibleArrow}
          onMouseLeave={handleMouseLeaveLeftInvisibleArrow}
          className="absolute left-0 top-0 h-full w-1/2 cursor-none"
        />
        <div
          onMouseDown={handleClickRight}
          onMouseEnter={handleMouseEnterRightInvisibleArrow}
          onMouseLeave={handleMouseLeaveRightInvisibleArrow}
          className="absolute right-0 top-0 h-full w-1/2 cursor-none"
        />

        {/* button */}
        <div className="absolute bottom-[4.75rem] left-1/2 flex -translate-x-1/2 flex-col items-center gap-11">
          <div>
            <button className="rounded-full border border-black px-[3.25rem] py-3 font-gelica text-xl transition hover:bg-black hover:text-white">
              Discover our method
            </button>
          </div>
        </div>

        {/* carousel  bullets */}
        <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-11">
          <div className="flex gap-2 transition">
            {slides.map((_, index) => {
              return (
                <div
                  key={index}
                  onClick={() => {
                    setCurrentSlide(index);
                  }}
                  className={`h-3 w-3 rounded-full bg-black hover:cursor-pointer ${
                    index !== currentSlide && "opacity-50"
                  }`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
