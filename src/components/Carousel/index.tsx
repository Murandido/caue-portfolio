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
  const [isTouch, setIsTouch] = useState<boolean>(false);

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
  useEffect(() => {
    setIsTouch("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);

  const mouseMove = (e: globalThis.MouseEvent) => {
    if (isTouch) {
      return;
    }

    setMousePosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

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
    <div className="w-full">
      <div className="relative overflow-hidden">
        {/* bg images */}
        <div
          className="flex transition duration-300 ease-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((_, i) => {
            return (
              <div
                key={i}
                className={`h-[48.25rem] min-w-[100vw] bg-cover bg-center max-xs:h-[28.75rem]`}
                style={{
                  backgroundImage: `url(${slides[i]})`,
                }}
              ></div>
            );
          })}
        </div>

        {/* hero */}
        <div className="min-sw-[33.5rem] absolute top-[4.75rem] flex w-full justify-center max-xs:top-12">
          <div className="mx-[11.25rem] w-[33.5rem] text-center text-2xl font-bold uppercase leading-[150%] max-xs:mx-8 max-xs:text-sm">
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
        <div className="absolute bottom-[4.75rem] left-1/2 flex -translate-x-1/2 flex-col items-center gap-11 max-xs:bottom-[3.25rem]">
          <div>
            <button className="rounded-full border border-black px-[3.25rem] py-3 font-gelica text-xl transition hover:bg-black hover:text-white max-xs:px-10 max-xs:py-2 max-xs:text-xs">
              Discover our method
            </button>
          </div>
        </div>

        {/* carousel  bullets */}
        <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-11">
          <div className="flex gap-2 transition max-xs:gap-1">
            {slides.map((_, index) => {
              return (
                <div
                  key={index}
                  onClick={() => {
                    setCurrentSlide(index);
                  }}
                  className={`h-3 w-3 rounded-full bg-black hover:cursor-pointer max-xs:h-1 max-xs:w-1 ${
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
