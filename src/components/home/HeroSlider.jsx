"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";

const HeroSlider = () => {
  const desktopImages = [
    "/banners/NewBanner.jpg",
  ];

  const mobileImages = [
    "/banners/IGSB_banner1.jpg",
    "/banners/IGSB_banner2.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [previousIndex, setPreviousIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => handleNext(), 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    const totalSlides = desktopImages.length;

    if (currentIndex === totalSlides - 1) {
      setPreviousIndex(currentIndex);
      setIsTransitioning(true);
      setCurrentIndex(totalSlides);

      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
      }, 700);
    } else {
      setPreviousIndex(currentIndex);
      setIsTransitioning(true);
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handleDotClick = (index) => {
    setPreviousIndex(currentIndex);
    setIsTransitioning(true);
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full ">
      {/* ---------------- SPOTLIGHT ---------------- */}
      <div className="w-full h-[4vh] bg-white border-b border-gray-200 flex items-center overflow-hidden relative">
        <div className="relative flex items-center justify-center font-semibold text-xs sm:text-sm px-4 sm:px-8 py-2 clip-ribbon-left z-10 bg-secondary text-white">
          SPOTLIGHT
        </div>

        <div className="flex-1 overflow-hidden whitespace-nowrap bg-white">
          <div className="flex animate-seamlessMarquee font-semibold text-sm py-2 text-secondary">
            <span className="mr-12">
              Important Notice: Inter-Se-Merit List for ILS ACAP Admission for
              A.Y. 2025–26
            </span>

            <span className="mr-12">
              Admission Advertisement for ILS / ACAP MBA (MB06976) – IGSB
              2025–26
            </span>

            <span className="mr-12">
              MBA Admission Alert: DTE Code for Indira Global School of
              Business, Pune is *MB6976*
            </span>

            <span className="mr-12">
              AICTE Approved M.B.A. / M.M.S. Affiliated to Savitribai Phule Pune
              University
            </span>

            {/* duplicate for seamless loop */}
            <span className="mr-12">
              Important Notice: Inter-Se-Merit List for ILS ACAP Admission for
              A.Y. 2025–26
            </span>

            <span className="mr-12">
              Admission Advertisement for ILS / ACAP MBA (MB06976) – IGSB
              2025–26
            </span>

            <span className="mr-12">
              MBA Admission Alert: DTE Code for Indira Global School of
              Business, Pune is *MB6976*
            </span>

            <span className="mr-12">
              AICTE Approved M.B.A. / M.M.S. Affiliated to Savitribai Phule Pune
              University
            </span>
          </div>
        </div>

        <div className="absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-primary to-transparent"></div>
      </div>

      {/* ---------------- SLIDER WRAPPER (HEIGHT REDUCED BY 4vh) ---------------- */}
      <div className="relative w-full h-[84vh] overflow-hidden">
        {/* ---------------- DESKTOP SLIDER ---------------- */}
        <div className="hidden md:block relative w-full h-full">
          {[...desktopImages, desktopImages[0]].map((img, i) => (
            <div
              key={i}
              className={`absolute inset-0 w-full h-full transition-all duration-700 ease-in-out ${
                currentIndex === i
                  ? "opacity-100 scale-100"
                  : previousIndex === i
                  ? "opacity-0 scale-100"
                  : "opacity-0 scale-102"
              }`}
              style={{
                transform: `scale(${
                  currentIndex === i ? 1 : previousIndex === i ? 1 : 1.02
                })`,
                zIndex: currentIndex === i ? 20 : previousIndex === i ? 10 : 0,
              }}
            >
              <Image
                src={img}
                alt="banner"
                className="w-full h-full object-cover"
                width={1600}
                height={700}
                unoptimized
                priority={i === 0}
              />
            </div>
          ))}

          {/* Dots */}
          <div className="absolute bottom-6 right-6 flex gap-2 z-30">
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
        <div className="block md:hidden relative w-full h-full">
          {[...mobileImages, mobileImages[0]].map((img, i) => (
            <div
              key={i}
              className={`absolute inset-0 w-full h-full transition-all duration-700 ease-in-out ${
                currentIndex === i
                  ? "opacity-100 scale-100"
                  : previousIndex === i
                  ? "opacity-0 scale-100"
                  : "opacity-0 scale-102"
              }`}
              style={{
                transform: `scale(${
                  currentIndex === i ? 1 : previousIndex === i ? 1 : 1.02
                })`,
                zIndex: currentIndex === i ? 20 : previousIndex === i ? 10 : 0,
              }}
            >
              <Image
                src={img}
                alt="mobile banner"
                className="w-full h-full object-cover"
                width={600}
                height={400}
                unoptimized
                priority={i === 0}
              />
            </div>
          ))}
        </div>
      </div>

      {/* ---------------- CSS ---------------- */}
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
          animation: progressFill 5s linear forwards;
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

        .scale-102 {
          transform: scale(1.02);
        }

        .clip-ribbon-left {
          clip-path: polygon(0 0, 100% 0, 96% 50%, 100% 100%, 0 100%);
        }
      `}</style>
    </div>
  );
};

export default HeroSlider;
