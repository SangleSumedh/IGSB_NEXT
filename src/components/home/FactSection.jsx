"use client";

import React from "react";

export default function FacultyStatSection() {
  return (
    <section className="relative w-full bg-gradient-to-r from-[#10404A] to-[#1F6D71] py-8  overflow-hidden text-white">
      {/* BACKGROUND DECORATION */}
      {/* <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#FF8B61] opacity-10 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" /> */}

      {/* CONTAINER: px-4 on mobile, px-16 on lg screens */}
      <div className="container mx-auto px-4 lg:px-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* LEFT SIDE: 1/3 Width */}
          <div className="w-full lg:w-1/3 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="relative inline-block">
              {/* The Big Number */}
              {/* <p className="text-sm leading-none md:text-lg text-left  font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-[#FF8B61] to-white tracking-tighter">
                Our Faculties are
              </p> */}
              <h2 className="text-[100px] leading-none md:text-[140px] xl:text-[160px] font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-[#FF8B61] to-white tracking-tighter">
                98%
              </h2>
              {/* The Badge */}
              <div className="absolute -top-2 -right-2 md:top-2 md:-right-8 bg-[#FF8B61] text-[#10404A] font-bold py-1.5 px-3 md:py-2 md:px-4 rounded-full shadow-lg transform rotate-12 text-xs md:text-sm whitespace-nowrap">
                Ph.D. Holders
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: 2/3 Width */}
          <div className="w-full lg:w-2/3">
            <div className="bg-[#3aafa9] backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 lg:p-10 shadow-2xl relative">
              <p className="relative z-10 text-base md:text-lg lg:text-xl leading-relaxed text-white/95 font-light">
                Most of IGSB’s faculty members are Ph.D. holders, ensuring that every
                learner is guided by scholars with deep subject expertise,
                strong research credentials, and a rigorous understanding of
                advanced management concepts.
              </p>
              {/* Bottom decorative line */}
              <div className="w-16 h-1 bg-[#FF8B61] mt-6 lg:mt-8 rounded-full" />

              <div className="mt-5 lg:mt-6 flex items-center gap-4">
                {/* Faculty Avatars Placeholder */}
                <div className="flex -space-x-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-300 border-2 border-[#10404A] flex items-center justify-center text-[#10404A] text-[10px] md:text-xs font-bold">
                    Dr.
                  </div>
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-200 border-2 border-[#10404A] flex items-center justify-center text-[#10404A] text-[10px] md:text-xs font-bold">
                    PhD
                  </div>
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white border-2 border-[#10404A] flex items-center justify-center text-[#10404A] text-[10px] md:text-xs font-bold">
                    +
                  </div>
                </div>
                <span className="text-xs md:text-sm text-white/60 uppercase tracking-widest font-semibold">
                  Academic Excellence
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
