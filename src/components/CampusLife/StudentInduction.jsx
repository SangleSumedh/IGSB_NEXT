"use client";

import React, { useState } from "react";
import { roadmapData } from "./roadmapdata";
import { arambhData } from "./arambhdata";
import ArambhaSection from "./ArambhaSection";
import ArambhaSectionMobile from "./ArambhSectionMobile";

export default function RoadmapSection() {
  const CARDS_PER_SLIDE = 3;

  // split roadmap data into slides of 3
  const slides = [];
  for (let i = 0; i < roadmapData.length; i += CARDS_PER_SLIDE) {
    slides.push(roadmapData.slice(i, i + CARDS_PER_SLIDE));
  }

  const [currentSlide, setCurrentSlide] = useState(0);

  const prev = () => setCurrentSlide((s) => Math.max(s - 1, 0));
  const next = () => setCurrentSlide((s) => Math.min(s + 1, slides.length - 1));

  return (
    <div className="text-white">
      {/* ================= METAMORPHOSIS ================= */}
      <section className="min-h-screen bg-white">
        <div className="max-w-full mx-auto min-h-screen flex px-6 py-12">
          {/* LEFT */}
          <div className="relative w-2/4 flex flex-col">
            <h1 className="text-5xl lg:text-5xl font-black uppercase mb-6">
              <span className="bg-clip-text text-transparent bg-[#082328]">
                Metamorphosis
              </span>
            </h1>

            <p className="text-secondary mb-10 max-w-md text-xl">
              Experience the journey through our planned phases.
            </p>

            {/* Glow */}
            <div className="absolute top-0 -left-64 w-[700px] h-[700px]  rounded-full blur-[160px] -z-10" />

            {/* Image */}
            <div className="relative w-[300px] max-w-full">
              <img
                src="/chanu/chanuhand2.png"
                alt="Metamorphosis visual"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* RIGHT – CAROUSEL */}
          <div className="w-2/4 flex flex-col mb-10">
            {/* Viewport */}
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {slides.map((slide, slideIndex) => (
                  <div
                    key={slideIndex}
                    className="min-w-full flex flex-col gap-4 px-6"
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

                          <div className="w-24 h-9 bg-white rounded-md flex items-center justify-center p-1">
                            <img
                              src={item.companyLogo}
                              alt="Company logo"
                              className="w-full h-full object-contain"
                            />
                          </div>
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

            {/* Controls */}
            <div className="flex justify-center gap-4 mt-6">
              <button
                onClick={prev}
                disabled={currentSlide === 0}
                className="px-4 py-2 rounded-full bg-secondary disabled:opacity-30"
              >
                ← Prev
              </button>

              <button
                onClick={next}
                disabled={currentSlide === slides.length - 1}
                className="px-4 py-2 rounded-full bg-secondary disabled:opacity-30"
              >
                Next →
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
