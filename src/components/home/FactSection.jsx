"use client";

import React, { useState } from "react";

/* ===== Faculty Data ===== */
const teachingStaff = [
  { name: "Dr. Virendra Vasant Tatake", image: "/Faculty/Dr-Virendra-Tatake.jpg" },
  { name: "Dr. Pallavi Shrirang Sajanapwar", image: "/Faculty/Dr_Pallavi_Sajanapawar.png" },
  { name: "Dr. Aatish Dilip Zagade", image: "/Faculty/Dr-Aatish-Zagade.jpg" },
  { name: "Dr. Anuradha Samarth Phadnis", image: "/Faculty/Dr_Anuraddha_Phadnis_1.jpg" },
  { name: "Dr. Priyanka Rohan Darekar", image: "/Faculty/Dr_Priyanka_Darekar_New.png" },
  { name: "Dr. Aniruddha Vilas Thuse", image: "/Faculty/Dr_Anirudha_Thus_New.png" },
  { name: "Dr. Poonam Avinash Wani", image: "/Faculty/Dr_Poonam_Wani_New.png" },
  { name: "Dr. Prashant Dubey", image: "/Faculty/Dr-Prashan-Dubey.jpg" },
  { name: "Dr. Ashish Krishna Vyas", image: "/Faculty/Dr_Ashish-Vyas.png" },
  { name: "Dr. Neha Chaudhry", image: "/Faculty/Neha-Chaudhry-New-img.png" },
];

/* ===== Filter PhD Faculty ===== */
const phdFaculty = teachingStaff.filter(f =>
  f.name.toLowerCase().includes("dr.")
);

export default function FacultyStatSection() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const displayFaculty = showAll ? phdFaculty : phdFaculty.slice(0, 3);

  return (
    <section className="relative w-full bg-gradient-to-r from-[#10404A] to-[#1F6D71] py-8 overflow-hidden text-white">
      <div className="container mx-auto px-4 lg:px-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">

          {/* LEFT SIDE */}
          <div className="w-full lg:w-1/3 flex justify-center lg:justify-start">
            <div className="relative inline-block">
              <h2 className="text-[100px] md:text-[140px] xl:text-[160px] font-extrabold leading-none text-transparent bg-clip-text bg-gradient-to-br from-[#FF8B61] to-white">
                98%
              </h2>
              <div className="absolute -top-2 -right-2 md:top-2 md:-right-8 bg-[#FF8B61] text-[#10404A] font-bold py-1.5 px-3 md:py-2 md:px-4 rounded-full shadow-lg rotate-12 text-xs md:text-sm">
                Ph.D. Holders
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="w-full lg:w-2/3">
            <div className="bg-[#3aafa9] border border-white/10 rounded-2xl p-6 md:p-8 lg:p-10 shadow-2xl">
              <p className="text-base md:text-lg lg:text-xl leading-relaxed text-white font-semibold">
                Most of IGSB's faculty members are Ph.D. holders, ensuring that every
                learner is guided by scholars with deep subject expertise,
                strong research credentials, and a rigorous understanding of
                advanced management concepts.
              </p>

              <div className="w-16 h-1 bg-[#FF8B61] mt-6 rounded-full" />

              {/* AVATARS */}
              <div className="mt-6 flex items-center gap-4">
                <div className="flex -space-x-3">
                  {displayFaculty.map((faculty, index) => (
                    <div
                      key={index}
                      className="relative hover:z-20"
                      onMouseEnter={() => setActiveIndex(index)}
                      onMouseLeave={() => setActiveIndex(null)}
                      onClick={() =>
                        setActiveIndex(activeIndex === index ? null : index)
                      }
                    >
                      {/* Avatar */}
                      <img
                        src={faculty.image}
                        alt={faculty.name}
                        className="
                          w-8 h-8 md:w-10 md:h-10
                          rounded-full object-cover
                          border-2 border-[#10404A]
                          cursor-pointer
                        "
                      />

                      {/* Tooltip */}
                      {activeIndex === index && (
                        <div
                          className="
                            absolute bottom-full left-1/2 -translate-x-1/2 mb-3
                            bg-white text-black
                            px-3 py-2 rounded-lg
                            text-xs md:text-sm
                            shadow-xl
                            whitespace-nowrap
                            animate-[tooltip_0.25s_ease-out]
                            z-30
                          "
                        >
                          {faculty.name}

                          {/* Arrow */}
                          <div
                            className="
                              absolute left-1/2 -translate-x-1/2 top-full
                              w-0 h-0
                              border-l-[6px] border-r-[6px] border-t-[6px]
                              border-l-transparent border-r-transparent
                              border-t-white
                            "
                          />
                        </div>
                      )}
                    </div>
                  ))}

                  {/* Plus/X Button - Removed ml-3 to stack with images */}
                  <button
                    onClick={() => setShowAll(!showAll)}
                    className="
                      w-8 h-8 md:w-10 md:h-10
                      rounded-full
                      border-2 border-[#10404A]
                      bg-[#FF8B61] text-[#10404A]
                      flex items-center justify-center
                      font-bold text-lg md:text-xl
                      hover:bg-[#ff9c7c]
                      transition-colors duration-200
                      cursor-pointer
                      relative hover:z-20
                    "
                  >
                    {showAll ? "×" : "+"}
                  </button>
                </div>

                <span className="text-xs md:text-sm text-white/95 uppercase tracking-widest font-semibold">
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