"use client";

import React, { useState, useEffect, useRef } from "react";
import { roadmapData } from "./roadmapdata";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

export default function RoadmapSection() {
  const CARDS_PER_SLIDE = 3;

  const slides = [];
  for (let i = 0; i < roadmapData.length; i += CARDS_PER_SLIDE) {
    slides.push(roadmapData.slice(i, i + CARDS_PER_SLIDE));
  }

  const [currentSlide, setCurrentSlide] = useState(0);
  const autoPlayRef = useRef(null);

  const next = () => {
    setCurrentSlide((s) => (s === slides.length - 1 ? 0 : s + 1));
  };

  useEffect(() => {
    autoPlayRef.current = setInterval(next, 3000);
    return () => clearInterval(autoPlayRef.current);
  }, [slides.length]);

  const QuoteBlock = () => (
    <div className="w-full flex justify-center">
      <div className="flex items-center gap-4 max-w-2xl">
        {/* IMAGE */}
        <div className="flex-shrink-0">
          <img
            src="/chanu/chanuhand2new.png"
            alt="Metamorphosis visual"
            className="w-20 sm:w-24 md:w-28 h-auto object-contain drop-shadow-lg"
          />
        </div>

        {/* QUOTE CONTENT */}
        <div className="relative flex-1">
          {/* Opening quote */}
          <FaQuoteLeft className="absolute -left-4 -top-2 w-4 h-4 text-secondary" />

          <p className="text-secondary text-base sm:text-lg md:text-xl font-medium italic leading-snug text-center px-4">
            Where future leaders spread their wings of knowledge and ambition.
          </p>

          {/* Closing quote */}
          <FaQuoteRight className="absolute -right-4 -bottom-2 w-4 h-4 text-secondary" />
        </div>
      </div>
    </div>
  );

  return (
    <section className="bg-white w-full overflow-hidden">
      <div className="max-w-full mx-auto px-6 py-12 xl:px-16 xl:py-8">
        <div className="flex flex-col xl:flex-row gap-10 items-start">
          {/* ================= LEFT SECTION ================= */}
          <div className="w-full xl:w-[45%] flex flex-col items-center xl:items-start">
            {/* HEADING */}
            <div className="mb-6 text-center xl:text-left w-full">
              <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold text-secondary leading-tight">
                Metamorphosis
              </h1>

              <div className="mt-2 mb-2 w-16 h-[3px] rounded-full bg-secondary mx-auto xl:mx-0" />

              <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-snug">
                Unfolding Wings of Knowledge
              </p>
            </div>

            {/* TEXT */}
            <div className="space-y-4 text-left">
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                The MBA Induction Programme 2025 at Chanakya Campus was a
                structured academic initiative designed in alignment with AICTE
                guidelines to ensure a smooth transition into postgraduate
                management education.
              </p>

              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                It introduced students to the academic, cultural, and
                professional ecosystem of the institution through multiple
                modules and campus familiarization.
              </p>

              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                The induction programme reflects the institution’s commitment to
                developing ethically grounded, industry-ready, and
                professionally competent management graduates.
              </p>
            </div>

            {/* QUOTE + IMAGE (XL ONLY) */}
            <div className="hidden xl:block mt-8 w-full">
              <QuoteBlock />
            </div>
          </div>

          {/* ================= RIGHT SECTION ================= */}
          <div className="w-full xl:w-[55%] flex flex-col">
            {/* CAROUSEL */}
            <div className="relative w-full overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {slides.map((slide, slideIndex) => (
                  <div
                    key={slideIndex}
                    className="min-w-full w-full flex flex-col gap-4 px-1 sm:px-4 box-border"
                  >
                    {slide.map((item, i) => (
                      <div
                        key={i}
                        className="relative flex w-full bg-gradient-to-r from-[#10404A] to-[#1F6D71] border border-white/10 rounded-xl overflow-hidden shadow-sm min-h-[160px] sm:min-h-[180px]"
                      >
                        {/* TEXT */}
                        <div className="w-[55%] p-3 sm:p-4 flex flex-col justify-center gap-2 min-w-0">
                          <span className="text-[10px] font-bold uppercase tracking-widest text-white">
                            {item.topic}
                          </span>

                          <h3 className="text-lg sm:text-xl font-bold text-white leading-tight truncate">
                            {item.name}
                          </h3>

                          <p className="text-xs text-white border-l-2 border-white pl-2 line-clamp-2">
                            {item.designation}
                          </p>

                          {item.companyLogo && (
                            <div className="w-30 h-15 bg-white rounded-md flex items-center justify-center">
                              <img
                                src={item.companyLogo}
                                alt="Company logo"
                                className="w-full h-full object-contain rounded-md"
                              />
                            </div>
                          )}
                        </div>

                        {/* IMAGE */}
                        <div className="absolute right-0 top-0 h-full w-[45%] overflow-hidden">
                          <span className="absolute top-1 right-1 bg-white/40 backdrop-blur-sm text-secondary text-[10px] px-2 py-0.5 rounded-full z-10">
                            {item.date}
                          </span>

                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />

                          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#050110]/20 to-[#050110]/50" />
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* DOTS */}
            <div className="flex justify-center gap-2 mt-4">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "bg-secondary w-8"
                      : "bg-gray-300 w-2.5"
                  }`}
                />
              ))}
            </div>

            {/* QUOTE BELOW CAROUSEL (< XL ONLY) */}
            <div className="xl:hidden mt-10 w-full">
              <QuoteBlock />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
