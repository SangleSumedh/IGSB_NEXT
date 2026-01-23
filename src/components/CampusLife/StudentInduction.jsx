"use client";

import React, { useState, useEffect, useRef } from "react";
import { roadmapData } from "./roadmapdata";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

export default function RoadmapSection() {
  const CARDS_PER_SLIDE = 3;

  // split roadmap data into slides of 3
  const slides = [];
  for (let i = 0; i < roadmapData.length; i += CARDS_PER_SLIDE) {
    slides.push(roadmapData.slice(i, i + CARDS_PER_SLIDE));
  }

  const [currentSlide, setCurrentSlide] = useState(0);
  const autoPlayRef = useRef(null);

  const prev = () => {
    setCurrentSlide((s) => (s === 0 ? slides.length - 1 : s - 1));
  };

  const next = () => {
    setCurrentSlide((s) => (s === slides.length - 1 ? 0 : s + 1));
  };

  // Auto-play functionality
  useEffect(() => {
    autoPlayRef.current = setInterval(() => {
      setCurrentSlide((s) => (s === slides.length - 1 ? 0 : s + 1));
    }, 3000); // Change slide every 3 seconds

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [slides.length]);

  return (
    <div className="text-white">
      {/* ================= METAMORPHOSIS ================= */}
      <section className="bg-white min-h-screen lg:min-h-screen">
        <div className="max-w-full mx-auto min-h-screen flex flex-col lg:flex-row px-4 lg:px-6 py-5">
          {/* LEFT */}
          <div className=" lg:w-2/4 flex flex-col mb-2 mt-10 lg:mt-0">
            <div className="flex flex-col lg:flex-row w-full gap-6 items-start">
              {/* TEXT */}
              <div className="flex-1 max-w-lg text-justify mx-auto lg:mx-0">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase mb-6 leading-tight">
                  <span className="bg-clip-text text-transparent bg-secondary">
                    Metamorphosis
                  </span>
                </h1>

                <p className="text-secondary mb-4 text-lg sm:text-xl italic font-bold">
                  Unfolding Wings of Knowledge
                </p>

                <div className="mb-8">
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    The MBA Induction Programme 2025 at Chanakya Campus was a
                    structured academic initiative designed in alignment with
                    AICTE guidelines to ensure a smooth transition into
                    postgraduate management education.
                  </p>

                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    It introduced students to the academic, cultural, and
                    professional ecosystem of the institution through multiple
                    modules and campus familiarization.
                  </p>

                  <p className="text-gray-700 text-sm leading-relaxed">
                    The induction programme reflects the institution’s
                    commitment to developing ethically grounded, industry-ready,
                    and professionally competent management graduates.
                  </p>

                  {/* QUOTE */}
                  <div className="mb-10 max-w-md mx-auto mt-6">
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
              </div>

              {/* IMAGE */}
              <div className="hidden md:flex flex-shrink-0 basis-[240px] pt-65">
                <img
                  src="/chanu/chanuhand2.png"
                  alt="Metamorphosis visual"
                  className="w-40 sm:w-48 lg:w-full h-auto object-contain drop-shadow-xl"
                />
              </div>
            </div>
          </div>

          {/* RIGHT – CAROUSEL */}
          <div className="w-full lg:w-2/4 flex flex-col mt-8 lg:mt-0">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {slides.map((slide, slideIndex) => (
                  <div
                    key={slideIndex}
                    className="min-w-full flex flex-col gap-4 px-2 sm:px-6"
                  >
                    {slide.map((item, i) => (
                      <div
                        key={i}
                        className="relative flex bg-secondary
                             border border-white/10 rounded-xl
                             overflow-hidden shadow-sm
                             min-h-[160px] sm:min-h-[180px]"
                      >
                        {/* TEXT */}
                        <div className="w-[55%] p-3 sm:p-4 flex flex-col justify-center gap-2">
                          <span className="text-[10px] font-bold uppercase tracking-widest text-white">
                            {item.topic}
                          </span>

                          <h3 className="text-lg sm:text-xl font-bold text-white leading-tight">
                            {item.name}
                          </h3>

                          <p className="text-xs text-white border-l-2 border-white pl-2">
                            {item.designation}
                          </p>

                          {item.companyLogo && (
                            <div className="w-25 h-15 bg-white rounded-md flex items-center justify-center">
                              <img
                                src={item.companyLogo}
                                alt="Company logo"
                                className="w-full h-full object-contain rounded-md"
                              />
                            </div>
                          )}
                        </div>

                        {/* IMAGE */}
                        <div className="absolute right-0 top-0 h-full w-[45%]">
                          <span
                            className="absolute top-1 right-1 bg-white/40 backdrop-blur-sm
                                     text-secondary text-[10px] px-2 py-0.5 rounded-full z-10"
                          >
                            {item.date}
                          </span>

                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />

                          <div
                            className="absolute inset-0 bg-gradient-to-l
                                    from-transparent via-[#050110]/20 to-[#050110]/50"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* DOTS */}
            <div className="flex justify-center align-top gap-2 mt-1">
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
      </section>
    </div>
  );
}
