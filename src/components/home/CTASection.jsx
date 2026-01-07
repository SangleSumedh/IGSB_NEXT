"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowBigUp, ChevronLeft, ChevronRight, Quote } from "lucide-react";

// --- DATA ---
const commonText = `The MBA in Finance at IGSB prepares students for analytical,
decision-driven roles in the financial ecosystem. The curriculum
emphasizes financial management, corporate finance, financial
modelling, investment analysis, risk management, and strategic
financial decision-making. Students gain exposure to capital markets,
valuation, budgeting, compliance, fintech fundamentals.`;

const testimonials = [
  { name: "Amit Kulkarni", branch: "MBA – Finance", image: "/boy.png" },
  { name: "Sneha Patil", branch: "MBA – Marketing", image: "/boy.png" },
  {
    name: "Rahul Deshmukh",
    branch: "MBA – Business Analytics",
    image: "/boy.png",
  },
  { name: "Pooja Sharma", branch: "MBA – HR Management", image: "/boy.png" },
  { name: "Kunal Mehta", branch: "MBA – Operations", image: "/boy.png" },
];

export default function CTASection() {
  // --- STATE FOR CAROUSEL ---
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setActiveIndex((i) => (i + 1) % testimonials.length),
      5000
    );
    return () => clearInterval(t);
  }, []);

  const prev = () =>
    setActiveIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () => setActiveIndex((i) => (i + 1) % testimonials.length);

  const active = testimonials[activeIndex];

  // --- HANDLERS FOR CTA ---
  const handleDownload = () => {
    alert("Downloading brochure...");
  };

  const handleImageError = () => {
    e.currentTarget.style.display = "none";
  };

  return (
    <div className="relative w-full bg-gradient-to-r from-[#10404A] to-[#1F6D71] text-white shadow-xl overflow-hidden mt-5">
      {/* CONTAINER HEIGHT:
          - Mobile: h-auto (Stack content)
          - Desktop (md+): h-[35vh] (To accommodate full text)
      */}
      <div className="grid grid-cols-1 md:grid-cols-8 h-auto ">
        {/* --- COLUMN 1 (5/8): TESTIMONIAL CAROUSEL --- */}
        <div className="md:col-span-5 relative h-full w-full flex items-center justify-center p-6 md:p-8 bg-[#10404A]/50 md:bg-transparent">
          <div className="w-full max-w-4xl flex flex-col md:flex-row items-center gap-8">
            {/* Left: Avatar & Name */}
            <div className="flex-shrink-0 flex flex-col items-center md:items-start text-center md:text-left min-w-[140px]">
              <div className="relative w-16 h-16 rounded-full border-2 border-[#fb7035] overflow-hidden shadow-lg mb-3">
                <Image
                  src={active.image}
                  alt={active.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-bold text-lg leading-tight">{active.name}</h3>
              <p className="text-xs text-orange-200 opacity-90">
                {active.branch}
              </p>

              {/* Navigation Controls */}
              <div className="flex items-center gap-2 mt-3">
                <button
                  onClick={prev}
                  className="p-1 rounded-full hover:bg-white/10 transition"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  onClick={next}
                  className="p-1 rounded-full hover:bg-white/10 transition"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>

            {/* Right: Quote Text */}
            <div className="relative flex-1">
              {/* Left Quote Icon */}
              {/* <Quote className="absolute -top-3 -left-4 w-6 h-6 text-orange-400/30 rotate-180" /> */}

              {/* Main Text - Line clamp removed */}
              <p className="text-sm md:text-sm lg:text-base leading-relaxed text-white/95 pl-4 pr-4">
                {commonText}
              </p>

              {/* Right Quote Icon */}
              {/* <Quote className="absolute bottom-5 -right-2 w-6 h-6 text-orange-400/30" /> */}

              {/* Dots Indicator */}
              <div className="flex gap-1.5 mt-5 pl-4">
                {testimonials.map((_, i) => (
                  <span
                    key={i}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      activeIndex === i
                        ? "w-6 bg-[#fb7035]"
                        : "w-1.5 bg-white/30"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* --- COLUMN 2 (2/8): TEXT & CTA --- 
            Border removed. Text changed.
        */}
        <div className="flex flex-col justify-center items-center text-center px-4 pt-8 pb-4 md:py-0 md:col-span-2 z-10 relative bg-white/5 md:bg-transparent">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4 leading-tight">
            <span className="font-[baskerville-bt] italic text-orange-200">
              Ready to Lead?
            </span>
            <span className="block text-xl lg:text-2xl mt-1 text-white">
              Get the full details.
            </span>
          </h2>

          <button
            onClick={handleDownload}
            className="
              inline-flex items-center justify-center gap-2
              px-5 py-3 w-auto min-w-[150px]
              text-sm font-bold
              text-[#10404A] bg-white
              rounded-full shadow-lg
              hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] 
              hover:-translate-y-0.5
              transition-all duration-300
            "
          >
            <ArrowBigUp />
            Get in Touch
          </button>
        </div>

        {/* --- COLUMN 3 (1/8): PERSON IMAGE --- */}
        <div className="flex md:col-span-1 items-end justify-center relative h-40 md:h-full pb-0 bg-white/5 md:bg-transparent">
          <img
            src="/Home/suitman.png"
            alt="Confused person"
            onError={handleImageError}
            className="
              h-full w-auto rotate-0 
              object-contain object-bottom 
              opacity-90 hover:scale-105 transition-transform duration-500
            "
          />
        </div>
      </div>
    </div>
  );
}
