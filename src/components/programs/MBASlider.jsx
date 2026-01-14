"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

const MBASlider = ({ toggleModal, handleBrochureDownload }) => {
  // 1. Data Array: Add your different banners and text here
  const slides = [
    {
      id: 1,
      image: "/Programs/updatedmarketing.jpg", // Replace with your actual image paths
      title: "Specialization in Marketing Management",
      description:
        "Master the complexities of global finance. Our curriculum focuses on investment analysis, corporate finance, and risk management to prepare you for high-stakes financial roles.",
    },
    {
      id: 2,
      image: "/Programs/finance1.jpg", // Replace with your actual image paths
      title: "Specialization in Financial Management",
      description:
        "Master the complexities of global finance. Our curriculum focuses on investment analysis, corporate finance, and risk management to prepare you for high-stakes financial roles.",
    },
    {
      id: 3,
      image: "/Programs/Logistic.png", // Replace with your actual image paths
      title: "Specialization in Logistics Management",
      description:
        "Master the complexities of global finance. Our curriculum focuses on investment analysis, corporate finance, and risk management to prepare you for high-stakes financial roles.",
    },
    {
      id: 4,
      image: "/Programs/hr1.jpg", // Replace with your actual image paths
      title: "Specialization in Human Resource Management",
      description:
        "Master the complexities of global finance. Our curriculum focuses on investment analysis, corporate finance, and risk management to prepare you for high-stakes financial roles.",
    },
    {
      id: 5,
      image: "/Programs/ba1.jpg", // Replace with your actual image paths
      title: "Specialization in Business Analytics",
      description:
        "Master the complexities of global finance. Our curriculum focuses on investment analysis, corporate finance, and risk management to prepare you for high-stakes financial roles.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay || isHovered) return;

    const interval = setInterval(() => {
      handleNext();
    }, 6000);

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlay, isHovered]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  

  return (
    <div
      className="relative w-full overflow-hidden group "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* ==========================================================
          HEIGHT PROVIDER
          This invisible image forces the container to take the 
          height of the current image, making it responsive without vh.
      ========================================================== */}
      <div className="relative w-full opacity-0 pointer-events-none">
        <Image
          src={slides[currentIndex].image}
          alt="spacer"
          width={1200}
          height={300}
          className="w-full h-auto"
          priority
        />
      </div>

      {/* ==========================================================
          SLIDES (Absolute Positioning)
      ========================================================== */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Background Image */}
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-contain object-center"
            priority={index === 0}
          />

          {/* Multi-layer Gradient Overlay for Better Text Readability */}
          {/* <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40 z-10" /> */}

          {/* Content Overlay */}
          <div className="absolute inset-0 flex items-center justify-start z-20">
            <div className="w-full px-4 sm:px-6 md:px-8 lg:px-16 py-6 md:py-0">
              <div className="max-w-2xl">
                {/* Title */}
                <h2
                  className={`text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight transform transition-all duration-700 delay-100 ${
                    index === currentIndex
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }`}
                >
                  {slide.title}
                </h2>

                {/* Description */}
                <p
                  className={`mt-3 sm:mt-4 md:mt-6 text-white/85 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed max-w-xl transform transition-all duration-700 delay-200 ${
                    index === currentIndex
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }`}
                >
                  {slide.description}
                </p>

                {/* Action Buttons */}
                <div
                  className={`absolute bottom-6 right-6 flex gap-3 md:gap-4 transform transition-all duration-700 delay-300 z-40 ${
                    index === currentIndex
                      ? "opacity-100"
                      : "opacity-0 pointer-events-none"
                  }`}
                >
                  <button
                    onClick={handleBrochureDownload}
                    className="px-6 sm:px-7 py-2.5 sm:py-3 bg-primary hover:bg-white text-white hover:text-primary font-semibold text-sm sm:text-base rounded-lg transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95"
                  >
                    Download Brochure
                  </button>
                  <button
                    onClick={toggleModal}
                    className="px-6 sm:px-7 py-2.5 sm:py-3 bg-white hover:bg-white text-gray-700 hover:text-gray-900 font-semibold text-sm sm:text-base rounded-lg transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95"
                  >
                    Enquire Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Dots Indicator with Better Styling */}
      <div className="absolute bottom-6 left-6 z-30 flex gap-2 md:gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setCurrentIndex(i);
              setIsAutoPlay(false);
              setTimeout(() => setIsAutoPlay(true), 8000);
            }}
            className={`transition-all duration-300 rounded-full backdrop-blur-sm ${
              currentIndex === i
                ? "w-8 h-2 bg-secondary shadow-lg"
                : "w-2 h-2 bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default MBASlider;
