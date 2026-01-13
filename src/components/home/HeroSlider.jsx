"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const HeroSlider = () => {
  const desktopImages = ["/Home/IGSBBannerH1.jpg", "/Home/IGSBBannerH2.jpg"];
  const mobileImages = [
    "/Home/IGSBBannerH1.jpg",
    "/Home/IGSBBannerH2.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState(0);

  const totalSlides = desktopImages.length;

  useEffect(() => {
    const interval = setInterval(() => handleNext(), 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    setPreviousIndex(currentIndex);
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const handlePrev = () => {
    setPreviousIndex(currentIndex);
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleDotClick = (index) => {
    setPreviousIndex(currentIndex);
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full">
      <div className="relative w-full overflow-hidden">
        {/* ---------------- DESKTOP ---------------- */}
        <div className="hidden md:block relative w-full">
          {/* height provider */}
          <Image
            src={desktopImages[currentIndex]}
            alt="banner"
            className="w-full h-auto opacity-0 pointer-events-none"
            width={1600}
            height={700}
            priority
          />

          {desktopImages.map((img, i) => (
            <div
              key={i}
              className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                currentIndex === i
                  ? "opacity-100 scale-100 z-20"
                  : previousIndex === i
                  ? "opacity-0 scale-100 z-10"
                  : "opacity-0 scale-105 z-0"
              }`}
            >
              <Image
                src={img}
                alt="banner"
                className="w-full h-auto object-contain"
                width={1600}
                height={700}
                unoptimized
              />
            </div>
          ))}

          {/* Navigation Controls - Centered at bottom */}
          <div className="absolute  bottom-[-8] left-40 transform -translate-x-1/2 flex items-center gap-4 z-30">
            {/* Previous Button */}
            <button
              onClick={handlePrev}
              className="w-10 h-10 flex items-center justify-center    text-secondary hover:text-primary transition-all duration-300  hover:shadow-xl"
              aria-label="Previous slide"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {desktopImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => handleDotClick(i)}
                  className={`rounded-full cursor-pointer transition-all duration-300 ${
                    currentIndex === i 
                      ? "w-8 h-2 bg-[#10404A]" 
                      : "w-2 h-2 bg-[#10404A]"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="w-10 h-10 flex items-center justify-center  text-secondary hover:text-primary transition-all duration-300  hover:shadow-xl"
              aria-label="Next slide"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* ---------------- MOBILE ---------------- */}
        <div className="block md:hidden relative w-full">
          <Image
            src={mobileImages[currentIndex]}
            alt="mobile banner"
            className="w-full h-auto opacity-0 pointer-events-none"
            width={600}
            height={400}
            priority
          />

          {mobileImages.map((img, i) => (
            <div
              key={i}
              className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                currentIndex === i
                  ? "opacity-100 scale-100 z-20"
                  : previousIndex === i
                  ? "opacity-0 scale-100 z-10"
                  : "opacity-0 scale-105 z-0"
              }`}
            >
              <Image
                src={img}
                alt="mobile banner"
                className="w-full h-auto object-contain"
                width={600}
                height={400}
                unoptimized
              />
            </div>
          ))}

          {/* Mobile Navigation Controls - Centered at bottom */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-3 z-30">
            {/* Previous Button */}
            <button
              onClick={handlePrev}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-white/80 hover:bg-white text-secondary hover:text-primary transition-all duration-300 shadow-md"
              aria-label="Previous slide"
            >
              <ChevronLeft size={18} />
            </button>

            {/* Dots */}
            <div className="flex gap-1.5">
              {mobileImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => handleDotClick(i)}
                  className={`rounded-full cursor-pointer transition-all duration-300 ${
                    currentIndex === i 
                      ? "w-6 h-1.5 bg-[#10404A]" 
                      : "w-1.5 h-1.5 bg-white/70 hover:bg-white"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-white/80 hover:bg-white text-secondary hover:text-primary transition-all duration-300 shadow-md"
              aria-label="Next slide"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;