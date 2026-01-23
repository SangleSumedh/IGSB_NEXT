import React, { useState, useEffect } from "react";
// Ensure you have this path correct or replace with dummy data for testing
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
    <section className="w-full py-12 px-6 md:px-12 grid grid-cols-1 md:grid-cols-6 gap-8 md:gap-16 items-center bg-[#10404A]">
      {/* LEFT SIDE: Heading & Description */}
      <div className="space-y-6 col-span-1 md:col-span-3 flex flex-col justify-center md:justify-evenly">
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight text-center md:text-left">
          Memories That Became{" "}
          <span className="text-[#FF8B61]"> Milestones</span>
        </h2>

        <p className="text-white/80 text-center md:text-left text-lg md:text-lg leading-relaxed max-w-5xl">
          We are proud to have a future-focused learning ecosystem that combines
          academic excellence, holistic development, and a nurturing campus
          environment to support lifelong growth.
        </p>
      </div>

      {/* RIGHT SIDE: Card */}
      <div className="flex flex-col items-center md:items-end col-span-1 md:col-span-3 w-full">
        {/* CARD CONTAINER */}
        <div className="bg-[#3aafa9] shadow-2xl rounded-3xl w-full max-w-2xl overflow-hidden relative min-h-[280px] flex flex-col transition-all duration-300">
          {/* TOP SECTION: Grid Layout (Photo - Info - Logo) */}
          {/* Using grid-cols-[auto_1fr_auto] to keep structure rigid on all devices */}
          <div className="p-5 border-b border-white/10 grid grid-cols-[auto_1fr_auto] gap-4 items-center">
            {/* COL 1: PHOTO */}
            <div className="relative shrink-0">
              <div className="w-16 h-16 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-white/50 shadow-md">
                <img
                  src={current.img}
                  alt={current.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            {/* COL 2: CENTER INFO */}
            <div className="flex flex-col justify-center min-w-0">
              <h3 className="text-lg md:text-xl font-black text-white tracking-wide uppercase truncate">
                {current.name}
              </h3>
              <p className="text-sm font-semibold text-white/90 leading-tight truncate">
                {current.role}
              </p>
              <p className="text-sm font-bold text-white/70 uppercase tracking-wider truncate mt-0.5">
                {current.company}
              </p>
            </div>

            {/* COL 3: COMPANY LOGO */}
            <div className="shrink-0 flex items-center justify-center">
              <div className="w-24 h-18 md:w-32 md:h-24 bg-white rounded-lg p-1.5 backdrop-blur-sm flex items-center justify-center shadow-sm">
                <img
                  src={current.companyLogo}
                  alt={`${current.company} logo`}
                  className="w-full h-full object-contain opacity-100"
                />
              </div>
            </div>
          </div>

          {/* MIDDLE SECTION: Bio */}
          <div className="p-6 md:p-8 flex flex-col flex-1 justify-between">
            <div className="relative mb-6">
              <span className="absolute -top-3 -left-1 text-5xl text-white/10 font-serif leading-none select-none">
                “
              </span>
              <p
                className={`text-white text-md text-justify leading-relaxed relative z-10 ${isExpanded ? "" : "line-clamp-3"}`}
              >
                {current.bio}
              </p>
            </div>

            {/* BOTTOM FOOTER: Read More & Controls */}
            <div className="flex items-center justify-between mt-auto pt-2">
              {/* READ MORE */}
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="group flex items-center gap-1 text-xs font-bold text-white/80 hover:text-white uppercase tracking-wider transition-colors"
              >
                {isExpanded ? "Read Less" : "Read More"}
                <span
                  className={`block h-[1px] bg-white transition-all duration-300 ${isExpanded ? "w-4" : "w-0 group-hover:w-4"}`}
                ></span>
              </button>

              {/* CONTROLS (Moved to bottom) */}
              <div className="flex gap-2">
                <button
                  onClick={prevSlide}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-black/10 text-white border border-white/10 hover:bg-white hover:text-[#3aafa9] transition-all duration-200 active:scale-95"
                  aria-label="Previous Testimonial"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="currentColor"
                    className="w-3.5 h-3.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 19.5L8.25 12l7.5-7.5"
                    />
                  </svg>
                </button>

                <button
                  onClick={nextSlide}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-[#3aafa9] shadow-sm hover:bg-[#FF8B61] hover:text-white transition-all duration-200 active:scale-95"
                  aria-label="Next Testimonial"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="currentColor"
                    className="w-3.5 h-3.5"
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
      </div>
    </section>
  );
}
