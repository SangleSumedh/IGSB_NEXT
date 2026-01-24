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

  return (
    <section className="bg-white w-full min-h-screen overflow-hidden">
      <div className="max-w-full mx-auto px-4 sm:px-6 py-6">
        {/* ================== 3 FLEX SECTIONS ================== */}
        <div className="flex flex-col lg:flex-row gap-5  items-start">
          {/* ================= TEXT SECTION ================= */}
          <div className="flex-1 min-w-0 max-w-xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase mb-6 leading-tight">
              <span className="bg-clip-text text-transparent bg-secondary">
                Metamorphosis
              </span>
            </h1>

            <p className="text-secondary mb-4 text-lg sm:text-xl italic font-bold">
              Unfolding Wings of Knowledge
            </p>

            <div className="space-y-4">
              <p className="text-gray-700 text-sm leading-relaxed">
                The MBA Induction Programme 2025 at Chanakya Campus was a
                structured academic initiative designed in alignment with AICTE
                guidelines to ensure a smooth transition into postgraduate
                management education.
              </p>

              <p className="text-gray-700 text-sm leading-relaxed">
                It introduced students to the academic, cultural, and
                professional ecosystem of the institution through multiple
                modules and campus familiarization.
              </p>

              <p className="text-gray-700 text-sm leading-relaxed">
                The induction programme reflects the institution’s commitment to
                developing ethically grounded, industry-ready, and
                professionally competent management graduates.
              </p>
            </div>

            {/* QUOTE */}
            <div className="mt-8 max-w-md mx-auto lg:mx-0">
              <div className="flex items-center gap-3 mb-3">
                <FaQuoteLeft className="w-4 h-4 text-secondary" />
                <div className="h-px flex-grow bg-gradient-to-r from-secondary/50 to-transparent" />
              </div>

              <p className="text-secondary text-xl sm:text-2xl font-medium italic leading-tight text-center px-4">
                Where future leaders spread their wings of knowledge and
                ambition.
              </p>

              <div className="flex items-center gap-3 mt-3">
                <div className="h-px flex-grow bg-gradient-to-l from-secondary/50 to-transparent" />
                <FaQuoteRight className="w-4 h-4 text-secondary" />
              </div>
            </div>
          </div>

          {/* ================= IMAGE SECTION ================= */}
          <div className="hidden md:flex flex-shrink-0 pt-65">
            <img
              src="/chanu/chanuhand2.png"
              alt="Metamorphosis visual"
              className="w-48 lg:w-60 h-auto object-contain drop-shadow-xl"
            />
          </div>

          {/* ================= CAROUSEL SECTION ================= */}
          <div className="flex-1 min-w-50 md:min-w-150 w-full">
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
                        className="relative flex w-full bg-secondary border border-white/10 rounded-xl overflow-hidden shadow-sm min-h-[160px] sm:min-h-[180px]"
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
                  className={`h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "bg-secondary w-8"
                      : "bg-gray-300 w-3"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
