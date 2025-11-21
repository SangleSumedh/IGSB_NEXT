"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Circle, CircleDot } from "lucide-react";

export default function ImageSlider({ images }) {
  const [index, setIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const prev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setIndex((index - 1 + images.length) % images.length);
  };

  const next = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setIndex((index + 1) % images.length);
  };

  const goToSlide = (slideIndex) => {
    if (isTransitioning || slideIndex === index) return;
    setIsTransitioning(true);
    setIndex(slideIndex);
  };

  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  // Auto-play functionality (optional)
  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 5000);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <div className="relative w-full h-100 bg-gray-200 rounded-xl overflow-hidden group">
      {/* Main Image with Slide Animation */}
      <div className="relative w-full h-full">
        {images.map((image, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-500 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image}
              alt={`Event photo ${i + 1}`}
              fill
              className="object-cover"
              priority={i === 0}
            />
          </div>
        ))}
      </div>

      {/* Enhanced Navigation Buttons */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full text-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 opacity-0 group-hover:opacity-100 backdrop-blur-sm hover:scale-110"
        disabled={isTransitioning}
      >
        <ChevronLeft size={28} strokeWidth={2} />
      </button>

      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full text-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 opacity-0 group-hover:opacity-100 backdrop-blur-sm hover:scale-110"
        disabled={isTransitioning}
      >
        <ChevronRight size={28} strokeWidth={2} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className="transition-all duration-300 hover:scale-125"
            disabled={isTransitioning}
          >
            {i === index ? (
              <CircleDot size={16} className="text-white fill-current" />
            ) : (
              <Circle size={16} className="text-white/60 hover:text-white" />
            )}
          </button>
        ))}
      </div>

      {/* Slide Counter */}
      <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
        {index + 1} / {images.length}
      </div>

      {/* Loading Overlay */}
      {isTransitioning && (
        <div className="absolute inset-0 bg-black/10 backdrop-blur-[1px] transition-all duration-300" />
      )}
    </div>
  );
}