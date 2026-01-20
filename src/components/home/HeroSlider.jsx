"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const HeroSlider = () => {
  const desktopImages = [
    "/Home/IGSBBanner4.jpg",
    "/Home/IGSBBanner2.jpg",
    "/Home/IGSBBanner3.jpg",
  ];

  const mobileImages = [
    "/Home/IGSBBannerH4.jpg",
    "/Home/IGSBBannerH5.jpg",
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
      {/* ================= SPOTLIGHT BAR ================= */}
      <div className="w-full h-[4vh] bg-white border-b border-gray-200 flex items-center overflow-hidden relative z-40">
        {/* Ribbon */}
        <div className="relative font-semibold text-xs sm:text-sm px-4 sm:px-8 py-2 clip-ribbon-left z-10 bg-secondary text-white whitespace-nowrap">
          SPOTLIGHT
        </div>

        {/* Marquee */}
        <div className="flex-1 overflow-hidden whitespace-nowrap">
          <div className="flex animate-seamlessMarquee font-semibold text-xs sm:text-sm py-2 text-secondary">
            <span className="mr-12">
              <span className="text-red-600 font-bold">
                Important Notice:
              </span>{" "}
              Inter-Se-Merit List for ILS ACAP Admission for A.Y. 2025–26
            </span>

            <span className="mr-12">
              Admission Advertisement for ILS / ACAP MBA (MB06976) – IGSB 2025–26
            </span>

            <span className="mr-12">
              MBA Admission Alert: DTE Code for IGSB is *MB6976*
            </span>

            <span className="mr-12">
              AICTE Approved | Affiliated to SPPU
            </span>

            {/* duplicate for seamless loop */}
            <span className="mr-12">
              <span className="text-red-600 font-bold">
                Important Notice:
              </span>{" "}
              Inter-Se-Merit List for ILS ACAP Admission for A.Y. 2025–26
            </span>
          </div>
        </div>

        {/* Right fade */}
        <div className="absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-primary to-transparent pointer-events-none" />
      </div>

      {/* ================= SLIDER ================= */}
      <div className="relative w-full overflow-hidden">
        {/* ================= DESKTOP ================= */}
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

          {/* ===== RIGHT CORNER CONTROLS ===== */}
          <div className="absolute bottom-2 right-4 flex items-center gap-4 z-30">
            {/* Dots */}
            <div className="flex items-center gap-2">
              {desktopImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => handleDotClick(i)}
                  className={`rounded-full transition-all duration-300 ${
                    currentIndex === i
                      ? "w-7 h-1.5 bg-primary"
                      : "w-2 h-2 bg-gray-300"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="w-7 h-7 rounded-full bg-primary flex items-center justify-center hover:brightness-110 transition"
                aria-label="Previous slide"
              >
                <FaArrowLeft size={14} className="text-white" />
              </button>

              <button
                onClick={handleNext}
                className="w-7 h-7 rounded-full bg-primary flex items-center justify-center hover:brightness-110 transition"
                aria-label="Next slide"
              >
                <FaArrowRight size={14} className="text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* ================= MOBILE ================= */}
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

          {/* ===== MOBILE RIGHT CORNER CONTROLS ===== */}
          <div className="absolute bottom-4 right-4 flex items-center gap-3 z-30">
            {/* Dots */}
            <div className="flex items-center gap-1.5">
              {mobileImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => handleDotClick(i)}
                  className={`rounded-full transition-all duration-300 ${
                    currentIndex === i
                      ? "w-8 h-1.5 bg-secondary-600"
                      : "w-1.5 h-1.5 bg-gray-300"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="w-9 h-9 rounded-full bg-[#d6c2a8] flex items-center justify-center hover:brightness-110 transition"
                aria-label="Previous slide"
              >
                <FaArrowLeft size={14} className="text-black" />
              </button>

              <button
                onClick={handleNext}
                className="w-9 h-9 rounded-full bg-[#d6c2a8] flex items-center justify-center hover:brightness-110 transition"
                aria-label="Next slide"
              >
                <FaArrowRight size={14} className="text-black" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
