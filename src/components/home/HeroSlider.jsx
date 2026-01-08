"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const HeroSlider = () => {
  const desktopImages = ["/banners/IGSB_banner1.jpg", "/Home/BANNER2.jpg"];
  const mobileImages = [
    "/banners/IGSB_banner1.jpg",
    "/banners/IGSB_banner2.jpg",
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

          {/* Dots */}
          <div className="absolute bottom-6 right-6 flex gap-2 z-30">
            {desktopImages.map((_, i) => (
              <div
                key={i}
                onClick={() => handleDotClick(i)}
                className={`h-2 rounded-sm cursor-pointer transition-all ${
                  currentIndex === i ? "w-8 bg-[#10404A]" : "w-2 bg-[#10404A]"
                }`}
              />
            ))}
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
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
