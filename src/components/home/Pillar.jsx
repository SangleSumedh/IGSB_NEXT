"use client";

import React from "react";
import Image from "next/image";

const pillars = [
  {
    title: "Industry Readiness from Day One",
    image: "/Home/Pillar1.png",
  },
  {
    title: "480+ Hours of Career Leadership Development Programme",
    image: "/Home/Pillar3.png",
  },
  {
    title: "300+ Hours of Industry Readiness Programme",
    image: "/Home/Pillar2.png",
  },
  {
    title: "Placement-Driven Curriculum Design",
    image: "/Home/Pillar4.png",
  },
];

export default function PillarsSection() {
  return (
    <section className="w-full bg-gradient-to-r from-[#FF8B61] via-[#10404A] to-[#10404A] px-6 md:px-16 py-8 text-white">
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-8">
        {/* LEFT SIDE: HEADING */}
        <div className="lg:w-[45%] text-left space-y-2">
          <h3 className="text-2xl md:text-4xl font-light text-white/90">
            Our Promise Pillars to
          </h3>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Every MBA Student
          </h2>
          <h3 className="text-2xl md:text-4xl font-light text-white/90">
            to Build their Foundation:
          </h3>
        </div>

        {/* RIGHT SIDE: PILLARS LIST */}
        <div className="lg:w-[55%] w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-6">
            {pillars.map((pillar, index) => (
              <div key={index} className="flex items-center gap-4">
                {/* ICON CIRCLE */}
                <div className="shrink-0 relative w-16 h-16">
                  <div className="absolute inset-0 rounded-full  flex items-center justify-center">
                    <Image
                      src={pillar.image}
                      alt={pillar.title}
                      width={56}
                      height={56}
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* TEXT */}
                <p className="text-lg font-bold leading-tight">
                  {pillar.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
