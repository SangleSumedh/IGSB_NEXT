"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import toast from "react-hot-toast";

const HeroSlider = () => {
  // 👉 Load banners directly from /public/banners
  const desktopImages = [
    "/banners/ICEMBANNER27.jpg",
    "/banners/ICEMBANNER6.jpg",
    "/banners/ICEMBANNERCOMP.jpg",
    "/banners/ICEMBANNERCLASS.jpg",
    "/banners/ICEMBANNERMECH.jpg",
  ];

  const mobileImages = [
    "/banners/placement-banner1.jpg",
    "/banners/placement-banner2.jpg",
    "/banners/ICEMBANNER6.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => handleNext(), 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    const totalSlides = desktopImages.length;

    if (currentIndex === totalSlides - 1) {
      setIsTransitioning(true);
      setCurrentIndex(totalSlides);

      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
      }, 700);
    } else {
      setIsTransitioning(true);
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handleDotClick = (index) => {
    setIsTransitioning(true);
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full overflow-hidden">

      {/* ---------------- TOP SPOTLIGHT SECTION ---------------- */}
      <div className="w-full bg-white border-b border-gray-200 flex items-center overflow-hidden relative">
        <div className="relative flex items-center justify-center font-semibold text-sm px-8 py-2 clip-ribbon-left z-10 bg-secondary text-white">
          SPOTLIGHT
        </div>

        <div className="flex-1 overflow-hidden whitespace-nowrap bg-white">
          <div className="flex animate-seamlessMarquee font-semibold text-sm py-2 text-secondary">
            <span className="mr-12">Public Advisory Notice</span>
            <span className="mr-12">All 4 PG Programs Computer Engineering</span>
            <span className="mr-12">Admission Open 2025–26</span>
            <span className="mr-12">Placement Record 2025 Announced</span>

            {/* Duplicate for seamless loop */}
            <span className="mr-12">Public Advisory Notice</span>
            <span className="mr-12">All 4 PG Programs Computer Engineering</span>
            <span className="mr-12">Admission Open 2025–26</span>
            <span className="mr-12">Placement Record 2025 Announced</span>
          </div>
        </div>

        <div className="absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-primary to-transparent"></div>
      </div>

      {/* ---------------- DESKTOP SLIDER ---------------- */}
      <div className="hidden md:block">
        <div
          className={`flex ${
            isTransitioning ? "transition-transform duration-700 ease-in-out" : ""
          }`}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {[...desktopImages, desktopImages[0]].map((img, i) => (
            <Image
              key={i}
              src={img}
              alt="banner"
              className="w-full object-cover flex-shrink-0"
              width={1600}
              height={700}
              quality={100}
              unoptimized
              priority
            />
          ))}
        </div>

        {/* Dots */}
        <div className="absolute bottom-6 right-6 flex gap-2">
          {desktopImages.map((_, i) => (
            <div
              key={i}
              onClick={() => handleDotClick(i)}
              className={`relative h-2 rounded-full cursor-pointer overflow-hidden transition-all ${
                currentIndex % desktopImages.length === i
                  ? "w-8 bg-gray-300"
                  : "w-2 bg-gray-500/60"
              }`}
            >
              {currentIndex % desktopImages.length === i && (
                <span className="absolute top-0 left-0 h-full w-0 bg-secondary animate-progressFill"></span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ---------------- MOBILE SLIDER ---------------- */}
      <div className="block md:hidden">
        <div
          className={`flex ${
            isTransitioning ? "transition-transform duration-700 ease-in-out" : ""
          }`}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {[...mobileImages, mobileImages[0]].map((img, i) => (
            <Image
              key={i}
              src={img}
              alt="mobile banner"
              className="w-full object-cover flex-shrink-0"
              width={600}
              height={400}
              quality={100}
              unoptimized
            />
          ))}
        </div>
      </div>

      {/* ---------------- CSS ANIMATIONS ---------------- */}
      <style jsx>{`
        @keyframes progressFill {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }
        .animate-progressFill {
          animation: progressFill 3s linear forwards;
        }

        @keyframes seamlessMarquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-seamlessMarquee {
          animation: seamlessMarquee 25s linear infinite;
        }

        .clip-ribbon-left {
          clip-path: polygon(0 0, 100% 0, 96% 50%, 100% 100%, 0 100%);
        }
      `}</style>
    </div>
  );
};

export default HeroSlider;
