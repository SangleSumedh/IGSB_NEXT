"use client";

import React, { useState, useEffect, useRef } from "react";
import { roadmapData } from "./roadmapdata";
import { arambhData } from "./arambhdata";
import ArambhaSectionMobile from "./ArambhSectionMobile";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function RoadmapSectionMobile() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const autoPlayRef = useRef(null);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Auto-play functionality
  useEffect(() => {
    autoPlayRef.current = setInterval(() => {
      setCurrentSlide((s) => (s === roadmapData.length - 1 ? 0 : s + 1));
    }, 3000);

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, []);

  const next = () => {
    setCurrentSlide((s) => (s === roadmapData.length - 1 ? 0 : s + 1));
  };

  const prev = () => {
    setCurrentSlide((s) => (s === 0 ? roadmapData.length - 1 : s - 1));
  };

  // Touch swipe handlers
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      next();
    }
    if (isRightSwipe) {
      prev();
    }
    
    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <div className="bg-gradient-to-r from-[#10404A] to-[#1F6D71] text-white px-4 py-8">
      {/* HEADER */}
      <div className="mb-8">
        <h1 className="text-4xl font-black uppercase mb-3 text-[#082328]">
          Metamorphosis
        </h1>
        <p className="text-white/90 text-lg">
          Experience the journey through our planned phases.
        </p>
      </div>

      {/* IMAGE */}
      <div className="mb-8">
        <img
          src="/chanu/chanuhand2.png"
          alt="Metamorphosis visual"
          className="w-full h-auto object-contain max-h-64"
        />
      </div>

      {/* CAROUSEL */}
      <div className="relative">
        {/* CAROUSEL VIEWPORT */}
        <div 
          className="overflow-hidden rounded-2xl"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {roadmapData.map((item, i) => (
              <div key={i} className="min-w-full px-2">
                <div
                  className="relative bg-[#3aafa9] backdrop-blur-xl
                  border border-white/10 rounded-2xl overflow-hidden
                  shadow-lg"
                >
                  {/* IMAGE */}
                  <div className="relative h-56">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050110]/90 via-[#050110]/40 to-transparent" />
                    
                    {/* Date Badge */}
                    <span className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm
                      text-white text-xs px-3 py-1.5 rounded-full z-10">
                      {item.date}
                    </span>
                  </div>

                  {/* TEXT */}
                  <div className="p-5 space-y-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-white/90 bg-white/10 inline-block px-3 py-1 rounded-full">
                      {item.topic}
                    </span>

                    <h3 className="text-xl font-bold text-white">
                      {item.name}
                    </h3>

                    <p className="text-sm text-white/90 border-l-2 border-white/30 pl-3">
                      {item.designation}
                    </p>

                    <div className="w-24 h-10 bg-white/10 rounded-lg flex items-center justify-center p-2 mt-2">
                      <img
                        src={item.companyLogo}
                        alt="Company logo"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* NAVIGATION BUTTONS */}
        <div className="flex justify-between items-center mt-6">
          <button
            onClick={prev}
            className="p-3 rounded-full bg-white/20 hover:bg-white/30 
                     backdrop-blur-sm transition-all duration-300 active:scale-95"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* DOTS INDICATOR */}
          <div className="flex gap-2">
            {roadmapData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-white w-6' 
                    : 'bg-white/50 hover:bg-white/70'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="p-3 rounded-full bg-white/20 hover:bg-white/30 
                     backdrop-blur-sm transition-all duration-300 active:scale-95"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* SLIDE COUNTER */}
        <div className="text-center mt-3 text-sm text-white/70">
          {currentSlide + 1} / {roadmapData.length}
        </div>
      </div>

      {/* SWIPE HINT */}
      <div className="text-center mt-4 text-xs text-white/60 flex items-center justify-center gap-2">
        <span className="animate-pulse">←</span>
        <span>Swipe or use buttons to navigate</span>
        <span className="animate-pulse">→</span>
      </div>

    
     
    </div>
  );
}