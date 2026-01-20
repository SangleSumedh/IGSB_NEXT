"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const MBASlider = ({ toggleModal, handleBrochureDownload }) => {
  const slides = [
    {
      id: 1,
      image: "/Programs/marketing3.jpg",
      title: "Where Numbers Shape Strategic Decisions.",
      description:
        "Build expertise in financial analysis, corporate finance, investment strategy, and risk management for leadership roles in global financial environments.",
    },
    {
      id: 2,
      image: "/Programs/finance3.jpg",
      title: "Marketing Skills Built on Insight and Impact.",
      description:
        "Develop data-driven, consumer-centric marketing leaders skilled in brand strategy, digital marketing, and growth across traditional and emerging business platforms.",
    },
    {
      id: 3,
      image: "/Programs/hr2.jpg",
      title: "Transforming Talent into Organizational Strength.",
      description:
        "Develop strategic HR leaders skilled in talent management, organizational development, and workforce analytics.",
    },
    {
      id: 4,
      image: "/Programs/Logistic.png",
      title: "Driving Efficiency Across Global Value Chains.",
      description:
        "Gain expertise in operations strategy, supply chain optimization, logistics, and process excellence across complex business ecosystems.",
    },
    {
      id: 5,
      image: "/Programs/ba2.jpg",
      title: "Transforming Data into Business Intelligence.",
      description:
        "Master analytical frameworks, predictive modeling, and data-driven decision-making to lead in analytics-driven organizations.",
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

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div
      className="relative w-full overflow-hidden group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* ==========================================================
          RESPONSIVE HEIGHT PROVIDER
          Different heights for different screen sizes
      ========================================================== */}
      <div className="relative w-full opacity-0 pointer-events-none">
        <Image
          src={slides[currentIndex].image}
          alt="spacer"
          width={1200}
          height={300}
          className="w-full h-auto"
          style={{
            height: "clamp(22rem, 50vw, 38rem)",
            minHeight: "22rem",
            maxHeight: "38rem"
          }}
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
            sizes="100vw"
            style={{
              objectFit: "cover",
              width: "100%",
              height: "100%"
            }}
          />

          {/* Gradient Overlay for Better Text Readability */}
          {/* <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent z-10" /> */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10" />

          {/* Content Overlay - Responsive Positioning & Sizing */}
          <div className="absolute inset-0 flex items-center justify-start z-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
            <div className="w-full max-w-[90rem] mx-auto py-4 md:py-8 lg:py-12 xl:py-0">
              <div className="max-w-full lg:max-w-3xl xl:max-w-2xl">
                {/* Title - Responsive Font Sizes */}
                <h2
                  className={`font-bold text-white leading-tight tracking-tight transform transition-all duration-700 delay-100 ${
                    index === currentIndex
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }`}
                  style={{
                    fontSize: "clamp(1.5rem, 4vw, 3.5rem)",
                    lineHeight: "clamp(1.8rem, 4.5vw, 4rem)"
                  }}
                >
                  {slide.title}
                </h2>

                {/* Description - Responsive Font Sizes & Spacing */}
                <div
                  className={`transform transition-all duration-700 delay-200 ${
                    index === currentIndex
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }`}
                  style={{
                    marginTop: "clamp(0.75rem, 2vw, 1.5rem)"
                  }}
                >
                  <p
                    className="text-white/90 leading-relaxed"
                    style={{
                      fontSize: "clamp(0.875rem, 1.8vw, 1.125rem)",
                      lineHeight: "clamp(1.25rem, 2vw, 1.75rem)",
                      maxWidth: "clamp(18rem, 40vw, 32rem)"
                    }}
                  >
                    {slide.description}
                  </p>
                </div>

                {/* Action Buttons - Responsive Sizing & Spacing */}
                <div
                  className={`flex flex-wrap gap-3 sm:gap-4 transform transition-all duration-700 delay-300 ${
                    index === currentIndex
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }`}
                  style={{
                    marginTop: "clamp(1.5rem, 3vw, 2.5rem)"
                  }}
                >
                  <button
                    onClick={handleBrochureDownload}
                    className="px-4 sm:px-5 md:px-6 lg:px-7 py-2 sm:py-2.5 md:py-3 bg-primary hover:bg-white text-white hover:text-primary font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95"
                    style={{
                      fontSize: "clamp(0.8125rem, 1.2vw, 1rem)"
                    }}
                  >
                    Download Brochure
                  </button>

                  <button
                    onClick={toggleModal}
                    className="px-4 sm:px-5 md:px-6 lg:px-7 py-2 sm:py-2.5 md:py-3 bg-white hover:bg-white text-gray-700 hover:text-gray-900 font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95"
                    style={{
                      fontSize: "clamp(0.8125rem, 1.2vw, 1rem)"
                    }}
                  >
                    Enquire Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* ==========================================================
          CONTROLS - Responsive Positioning & Sizing
      ========================================================== */}
      <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 lg:bottom-8 lg:right-8 xl:bottom-10 xl:right-12 flex items-center gap-3 sm:gap-4 z-30">
        {/* Dots Indicator */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => handleDotClick(i)}
              className={`rounded-full transition-all duration-300 ${
                currentIndex === i
                  ? "bg-primary"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              style={{
                width: currentIndex === i 
                  ? "clamp(1.5rem, 2vw, 2.5rem)" 
                  : "clamp(0.375rem, 0.5vw, 0.5rem)",
                height: currentIndex === i 
                  ? "clamp(0.25rem, 0.3vw, 0.375rem)" 
                  : "clamp(0.375rem, 0.5vw, 0.5rem)"
              }}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          <button
            onClick={handlePrev}
            className="rounded-full bg-primary hover:brightness-110 transition flex items-center justify-center"
            style={{
              width: "clamp(2.25rem, 3vw, 2.75rem)",
              height: "clamp(2.25rem, 3vw, 2.75rem)"
            }}
            aria-label="Previous slide"
          >
            <FaArrowLeft 
              className="text-white" 
              style={{
                width: "clamp(1rem, 1.2vw, 1.125rem)",
                height: "clamp(1rem, 1.2vw, 1.125rem)"
              }}
            />
          </button>

          <button
            onClick={handleNext}
            className="rounded-full bg-primary hover:brightness-110 transition flex items-center justify-center"
            style={{
              width: "clamp(2.25rem, 3vw, 2.75rem)",
              height: "clamp(2.25rem, 3vw, 2.75rem)"
            }}
            aria-label="Next slide"
          >
            <FaArrowRight 
              className="text-white" 
              style={{
                width: "clamp(1rem, 1.2vw, 1.125rem)",
                height: "clamp(1rem, 1.2vw, 1.125rem)"
              }}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MBASlider;