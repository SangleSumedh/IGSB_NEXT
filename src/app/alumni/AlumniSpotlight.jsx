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
    <section className="w-full py-12 px-6 md:px-12 grid grid-cols-1 md:grid-cols-6 gap-16 items-center bg-[#10404A]">
      {/* LEFT SIDE */}
      <div className="space-y-6 col-span-3 flex flex-col justify-evenly">
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
          Memories That Became{" "}
          <span className="text-[#FF8B61]"> Milestones</span>
        </h2>

        <p className="text-white/80 text-xl leading-relaxed max-w-5xl">
          A future-focused learning ecosystem that combines academic excellence,
          holistic development, and a nurturing campus environment to support
          lifelong growth.
        </p>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex flex-col items-center md:items-end col-span-1 md:col-span-3">
        {/* CARD CONTAINER */}
        {/* CHANGE: max-w-xl -> max-w-2xl (Wider card) */}
        <div className="bg-[#3aafa9] shadow-2xl rounded-3xl w-full max-w-2xl overflow-hidden relative min-h-[300px] flex flex-col">
          {/* TOP SECTION: Photo, Info, Logo */}
          <div className="p-8 pb-4">
            <div className="flex flex-col md:flex-row gap-6 items-center md:items-start justify-between">
              {/* PHOTO & INFO GROUP */}
              <div className="flex flex-col md:flex-row gap-6 items-center md:items-center flex-1">
                {/* PHOTO */}
                <div className="relative shrink-0">
                  <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-lg">
                    <img
                      src={current.img}
                      alt={current.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>

                {/* INFO */}
                <div className="text-center md:text-left space-y-1">
                  <h3 className="text-2xl font-black text-white tracking-wide uppercase">
                    {current.name}
                  </h3>
                  <div>
                    <p className="text-lg font-semibold text-white/90 text-center leading-tight">
                      {current.role}
                    </p>
                    <p className="text-lg font-bold text-white text-center">
                      {current.company}
                    </p>
                  </div>
                </div>
              </div>

              {/* COMPANY LOGO (Moved to top right for better layout balance) */}
              <div className="hidden md:block shrink-0">
                <div className="w-20 h-20 rounded-xl overflow-hidden bg-white shadow-md flex items-center justify-center p-2">
                  <img
                    src={current.companyLogo}
                    alt={`${current.company} logo`}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* DIVIDER */}
          <div className="w-full h-px bg-white/20 mx-auto w-[90%]" />

          {/* BOTTOM SECTION: Bio & Buttons */}
          <div className="p-8 pt-6 flex flex-col md:flex-row justify-between items-end gap-6 mt-auto">
            {/* BIO */}
            <div className="flex-1">
              <div className="relative">
                <span className="absolute -top-4 -left-2 text-6xl text-white/20 font-serif leading-none">
                  “
                </span>
                <p
                  className={`text-white text-[15px] leading-relaxed relative z-10 ${
                    isExpanded ? "" : "line-clamp-3"
                  }`}
                >
                  {current.bio}
                </p>
              </div>
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-white text-xs font-bold underline uppercase mt-3 opacity-80 hover:opacity-100 transition-opacity"
              >
                {isExpanded ? "Read Less" : "Read More"}
              </button>
            </div>

            {/* CONTROLS */}
            <div className="flex gap-3 shrink-0">
              <button
                onClick={prevSlide}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 text-white border border-white/30 hover:bg-white hover:text-[#3aafa9] transition-all duration-300"
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

              <button
                onClick={nextSlide}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-[#3aafa9] shadow-lg hover:bg-[#FF8B61] hover:text-white transition-all duration-300"
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
