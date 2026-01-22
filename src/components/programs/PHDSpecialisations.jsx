"use client";

import React from "react";
import Image from "next/image";

const pillars = [
  { title: "Marketing Management", image: "/Home/Pillar1.png" },
  { title: "Finance Managementt", image: "/Home/Pillar4.png" },
  { title: "Human Resource", image: "/Home/Pillar3.png" },
  { title: "Business Analytics", image: "/Home/Pillar2.png" },
];

export default function PHDSpecs() {
  return (
    <section className="w-full bg-gradient-to-r from-[#FF8B61] via-[#10404A] to-[#10404A] px-4 sm:px-6 md:px-16 py-10 text-white">
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-8">
        {/* LEFT SIDE */}
        <div className="lg:w-[50%] w-full text-center lg:text-left space-y-3">
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-light text-white/90">
            Ph.D Specialization offered in:
          </h3>

          <h2 className="text-3xl sm:text-4xl md:text-4xl xl:text-5xl font-extrabold tracking-tight">
            <span>IGSB</span> Research Centre
          </h2>

          <h3 className="text-base sm:text-lg md:text-xl font-light text-white/90 italic">
            We strongly encourage multidisciplinary research.
          </h3>
        </div>

        {/* RIGHT SIDE */}
        <div className="lg:w-[50%] w-full">
          <div className=" grid grid-cols-2 gap-y-6 gap-x-6">
            {pillars.map((pillar, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-col lg:flex-row items-center gap-3 lg:gap-4 text-center lg:text-left"
              >
                {/* ICON */}
                <div className="relative w-14 h-14 sm:w-16 sm:h-16 shrink-0">
                  <Image
                    src={pillar.image}
                    alt={pillar.title}
                    fill
                    className="object-contain"
                  />
                </div>

                {/* TEXT */}
                <p className="text-sm sm:text-base lg:text-lg font-bold leading-tight">
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
