"use client";

import React from "react";
import Image from "next/image";

const pillars = [
  { title: "Industry Readiness From Day One", image: "/Home/Pillar1.png" },
  { title: "Placement-Driven Curriculum Design", image: "/Home/Pillar4.png" },
  { title: "480+ Hours of Career Leadership Development Programme", image: "/Home/Pillar3.png" },
  { title: "300+ Hours of Industry Readiness Programme", image: "/Home/Pillar2.png" },
];

export default function PillarsSection() {
  return (
    <section className="w-full bg-gradient-to-r from-[#FF8B61] via-[#10404A] to-[#10404A] px-6 md:px-16 py-8 text-white">
      <div className="flex flex-col gap-10">

        {/* HEADING */}
        <h3 className="text-2xl md:text-4xl font-light text-white/90 text-center">
          Our Core Pillars:
        </h3>

        {/* PILLARS LIST */}
        <div
          className="
            grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-6
            xl:grid-cols-4 xl:gap-x-8
          "
        >
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="
                flex items-center gap-4
                xl:flex-col xl:items-center xl:text-center
              "
            >
              {/* ICON */}
              <div className="shrink-0 relative w-16 h-16">
                <div className="absolute inset-0 rounded-full flex items-center justify-center">
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
              <p className="text-xl md:text-2xl xl:text-xl font-bold leading-tight">
                {pillar.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
