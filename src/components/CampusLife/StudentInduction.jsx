"use client";

import React, { useState, useEffect, useRef } from "react";
import { roadmapData } from "./roadmapdata";
import { arambhData } from "./arambhdata";
import ArambhaSection from "./ArambhaSection";
import ArambhaSectionMobile from "./ArambhSectionMobile";
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
      <section className="min-h-screen bg-white">
        <div className="max-w-full mx-auto min-h-screen flex px-6 py-5">
          {/* LEFT */}
          <div className="relative w-2/4 flex items-start">
            <div className="flex w-full gap-1 items-start">
              {/* LEFT — TEXT */}
              <div className="flex-1 max-w-lg text-justify">
                <h1 className="text-5xl lg:text-6xl font-black uppercase mb-6 leading-tight">
                  <span className="bg-clip-text text-transparent bg-secondary">
                    Metamorphosis
                  </span>
                </h1>

                <p className="text-secondary mb-4 text-xl font-medium">
                  Experience the journey through our planned phases.
                </p>

                <div className="mb-8">
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    The MBA Induction Programme 2025 at Chanakya Campus is a
                    thoughtfully designed initiative aimed at providing a
                    vibrant and meaningful welcome for the new batch. Rooted in
                    the theme{" "}
                    <span className="font-semibold text-gray-800">
                      “Metamorphosis – Unfolding Wings of Knowledge,”
                    </span>{" "}
                    the program marks the beginning of a transformative journey
                    from student life to professional excellence.
                  </p>

                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    The induction schedule is meticulously structured to align
                    with the guidelines of AICTE, ensuring holistic development
                    and seamless integration into the academic and cultural
                    fabric of the institution.
                  </p>

                  <p className="text-gray-700 text-sm leading-relaxed">
                    A key highlight of the programme is its comprehensive
                    coverage of essential modules prescribed by AICTE.
                  </p>

                  <div className="mb-10 max-w-md mx-auto mt-5 ">
                    {/* Top line with opening quote */}
                    <div className="flex items-center gap-3 mb-3">
                      <FaQuoteLeft className="w-5 h-5 text-secondary" />
                      <div className="h-px flex-grow bg-gradient-to-r from-secondary/50 to-transparent" />
                    </div>

                    {/* Quote text */}
                    <p className="text-secondary text-2xl font-medium italic leading-tight text-center px-4">
                      Where future leaders spread their wings
                      
                      of knowledge and ambition.
                    </p>

                    {/* Bottom line with closing quote */}
                    <div className="flex items-center gap-3 mt-3">
                      <div className="h-px flex-grow bg-gradient-to-l from-secondary/50 to-transparent" />
                      <FaQuoteRight className="w-5 h-5 text-secondary" />
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT — IMAGE */}
              <div className="flex-shrink-0 basis-[240px] pt-65">
                <img
                  src="/chanu/chanuhand2.png"
                  alt="Metamorphosis visual"
                  className="w-full h-auto object-contain drop-shadow-xl"
                />
              </div>
            </div>

            {/* GLOW */}
            <div className="absolute top-0 -left-64 w-[700px] h-[700px] bg-secondary/30 rounded-full blur-[160px] -z-10" />
          </div>

          {/* RIGHT – CAROUSEL */}
          <div className="w-2/4 flex flex-col mb-2">
            {/* Viewport */}
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {slides.map((slide, slideIndex) => (
                  <div
                    key={slideIndex}
                    className="min-w-full flex flex-col gap-2 px-6"
                  >
                    {slide.map((item, i) => (
                      <div
                        key={i}
                        className="relative ml-6 flex bg-secondary
                                   border border-white/10 rounded-xl
                                   overflow-hidden shadow-sm
                                   min-h-[180px]"
                      >
                        {/* TEXT */}
                        <div className="w-[55%] p-4 flex flex-col justify-center gap-2">
                          <span className="text-[10px] font-bold uppercase tracking-widest text-white">
                            {item.topic}
                          </span>

                          <h3 className="text-xl font-bold text-white leading-tight">
                            {item.name}
                          </h3>

                          <p className="text-xs text-white border-l-2 border-white pl-2">
                            {item.designation}
                          </p>

                          {item.companyLogo &&
                            item.companyLogo.trim() !== "" && (
                              <div className="w-24 h-9 bg-white rounded-md flex items-center justify-center ">
                                <img
                                  src={item.companyLogo}
                                  alt="Company logo"
                                  className="w-full h-full rounded-md object-contain"
                                />
                              </div>
                            )}
                        </div>

                        {/* IMAGE */}
                        <div className="absolute right-0 top-0 h-full w-[45%]">
                          <span
                            className="absolute top-1 right-1 bg-white/40 backdrop-blur-sm
                                           text-white text-[10px] px-2 py-0.5 rounded-full z-10"
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

            {/* Dots Only */}
            <div className="flex justify-center gap-2 mt-6">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "bg-secondary w-8"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
