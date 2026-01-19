import React, { useState, useEffect } from "react";
import { testimonials } from "@/static/testimonials";

export default function AlumniSpotlight() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  // Reset the "Read More" state whenever the slide changes
  useEffect(() => {
    setIsExpanded(false);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  const current = testimonials[currentIndex];

  return (
    <section className="w-full py-12 px-6 md:px-12 grid grid-cols-1 md:grid-cols-5 gap-16 items-center bg-[#10404A]">
      {/* LEFT SIDE */}
      <div className="space-y-6 col-span-3 flex flex-col justify-evenly">
        <h2 className="text-4xl md:text-4xl font-bold text-white tracking-tight">
          SHAPING THE FUTURE{" "}
          <span className="text-[#FF8B61]">ONE LEADER AT A TIME</span>
        </h2>

        <p className="text-white/80 text-lg leading-relaxed max-w-5xl">
          Our alumni are our greatest ambassadors. From leading multinational
          corporations to driving innovation in startups, the graduates of
          Indira Global Business School carry the legacy of excellence and
          leadership across the globe.
        </p>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex flex-col items-end col-span-2">
        {/* CARD */}
        <div className="bg-[#3aafa9] shadow-2xl rounded-2xl w-full max-w-xl overflow-hidden relative min-h-[280px]">
          {/* NAME */}
          <div className="w-full text-center py-4">
            <h3 className="text-2xl font-black text-[#fff] tracking-widest uppercase">
              {current.name}
            </h3>
          </div>

          <div className="flex gap-4 justify-between items-center">
            {/* PHOTO */}
            <div className="relative">
              <div className="w-24 h-32 rounded-r-full overflow-hidden border-4 border-white shadow-lg">
                <img
                  src={current.img}
                  alt={current.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* INFO */}
            <div className="flex flex-col space-y-2 flex-1 px-2">
              <div>
                <span className="text-xs font-bold text-white/70 uppercase tracking-wider">
                  Designation
                </span>
                <p className="text-lg font-semibold text-white leading-tight">
                  {current.role}
                </p>
                <p className="text-sm text-white/90">{current.company}</p>
              </div>

              <div>
                <span className="text-xs font-bold text-white/70 uppercase tracking-wider">
                  Location
                </span>
                <p className="text-lg font-semibold text-white">
                  {current.location}
                </p>
              </div>
            </div>

            {/* COMPANY LOGO */}
            <div className="relative shrink-0 mr-6">
              <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg bg-white">
                <img
                  src={current.companyLogo}
                  alt={`${current.company} logo`}
                  className="w-full h-full object-contain p-2"
                />
              </div>
            </div>
          </div>

          {/* QUOTE / BIO SECTION */}
          <div className="bg-[#3aafa9] p-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex-1">
              <p
                className={`text-[white]/90 text-sm italic ${isExpanded ? "" : "line-clamp-3"}`}
              >
                "{current.bio}"
              </p>
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-white text-[10px] font-bold underline uppercase mt-1 opacity-80 hover:opacity-100 transition-opacity"
              >
                {isExpanded ? "Read Less" : "Read More"}
              </button>
            </div>

            {/* BUTTONS - Positioned exactly as before */}
            <div className="flex gap-3 shrink-0">
              {/* Prev */}
              <button
                onClick={prevSlide}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-[#10404A] shadow-md hover:bg-[#FF8B61] hover:text-white transition-all duration-300 transform hover:-translate-y-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </button>

              {/* Next */}
              <button
                onClick={nextSlide}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-[#10404A] shadow-md hover:bg-[#FF8B61] hover:text-white transition-all duration-300 transform hover:-translate-y-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
