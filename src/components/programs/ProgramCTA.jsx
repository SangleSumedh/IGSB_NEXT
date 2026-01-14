"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowBigUp } from "lucide-react";

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
  { name: "Rahul Deshmukh", branch: "MBA – Business Analytics", image: "/boy.png" },
  { name: "Pooja Sharma", branch: "MBA – HR Management", image: "/boy.png" },
  { name: "Kunal Mehta", branch: "MBA – Operations", image: "/boy.png" },
];

export default function CTASection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setActiveIndex((i) => (i + 1) % testimonials.length),
      5000
    );
    return () => clearInterval(t);
  }, []);

  const active = testimonials[activeIndex];

  const handleDownload = () => {
    alert("Downloading brochure...");
  };

  return (
    <div className="relative  w-full bg-white text-slate-800 shadow-xl overflow-hidden  pt-2 md:pt-0">
      <div className="grid grid-cols-1 md:grid-cols-8">
        {/* --- TESTIMONIALS (SHORTER CARD) --- */}
        <div className="md:col-span-4 flex items-center justify-center p-2 md:p-4 bg-[#1F6D71]/50 md:bg-transparent">
          <div className="p-4 md:p-3 rounded-xl border-2 border-[#3aafa9] max-w-xl w-full">
            <div className="flex flex-col md:flex-col lg:flex-row items-center gap-5">
              {/* PROFILE (TOP on md–lg) */}
              <div className="flex flex-col items-center text-center min-w-[120px]">
                <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-[#fb7035] overflow-hidden shadow mb-2">
                  <Image
                    src={active.image}
                    alt={active.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-semibold text-base leading-tight">
                  {active.name}
                </h3>
                <p className="text-[0.8rem] text-slate-800/80">
                  {active.branch}
                </p>
              </div>

              {/* TEXT BELOW PROFILE (md–lg) */}
              <div className="flex-1 text-center lg:text-left">
                <p className="text-[0.8rem] lg:text-sm leading-relaxed text-slate-800/95 px-2">
                  {commonText}
                </p>

                {/* DOTS */}
                <div className="flex justify-center lg:justify-start gap-1.5 mt-4">
                  {testimonials.map((_, i) => (
                    <span
                      key={i}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        activeIndex === i
                          ? "w-6 bg-[#fb7035]"
                          : "w-1.5 bg-slate-800/30"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- CTA --- */}
        <div className="md:col-span-2 flex flex-col justify-center items-center text-center px-4 pt-8 pb-4 md:py-0  md:bg-secondary">
          <h2 className="text-xl lg:text-3xl font-bold mb-4 leading-tight">
            <span className="font-[baskerville-bt] italic">Ready to Lead?</span>
            <span className="block text-lg lg:text-2xl mt-1">
              Get the full details.
            </span>
          </h2>

          <button
            onClick={handleDownload}
            className="
              inline-flex items-center gap-2
              px-5 py-3
              text-sm font-bold
              text-white bg-secondary
              rounded-full shadow-lg
              hover:-translate-y-0.5
              transition-all
            "
          >
            <ArrowBigUp />
            Get in Touch
          </button>
        </div>

        {/* --- GENTLEMAN (MORE SPACE) --- */}
        <div className="md:col-span-2 flex items-end justify-center relative h-44 md:h-full bg-white/5 md:bg-transparent">
          <img
            src="/Home/suitman.png"
            alt="Gentleman"
            className="
              h-[115%] md:h-[125%]
              xl:w-[80%]
              object-contain object-bottom
              translate-y-2
              opacity-95
            "
          />
        </div>
      </div>
    </div>
  );
}
