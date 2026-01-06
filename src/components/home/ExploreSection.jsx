"use client";

import React from "react";
import Image from "next/image";
import { Eye, Target } from "lucide-react";

const ExploreSection = () => {
  return (
    <section className="w-full bg-white px-16 py-8 relative z-30 overflow-x-hidden">
      
      {/* FULL-WIDTH SAFE CONTAINER */}
      <div className="w-full">

        {/* MAIN GRID */}
        <div className="
          grid
          grid-cols-1
          lg:grid-cols-[minmax(0,70%)_minmax(0,30%)]
          gap-12
          items-stretch
        ">

          {/* LEFT CONTENT */}
          <div className="space-y-6">
            <h2 className="text-4xl sm:text-2xl xl:text-4xl font-extrabold text-gray-800 tracking-wide mb-10">
              ABOUT
            </h2>

            <p className="text-gray-700 text-base sm:text-lg md:text-lg  leading-relaxed text-justify">
              We develop globally competent, purpose-driven leaders equipped to
              excel in today’s fast-evolving business landscape. As a premier
              <span className="font-semibold"> AICTE-approved MBA institute</span>,
              our vision is to be a hub of academic excellence that nurtures
              strategic thinkers who lead with integrity, empathy, and a
              commitment to sustainable and socially responsible business
              practices.
            </p>

            <p className="text-gray-700 text-base sm:text-lg md:text-lg  leading-relaxed text-justify">
              <span className="font-semibold">IGSB</span> is located along the
              Mumbai–Pune Expressway, where our campus blends state-of-the-art
              infrastructure with a serene, natural setting, offering a fresh
              and inspiring environment that fosters innovation, focus, and
              holistic development.
            </p>

            <p className="text-gray-700 text-base sm:text-lg md:text-lg leading-relaxed text-justify">
              Through industry-integrated MBA programmes and rigorous experiential
              learning pedagogy, IGSB empowers future leaders with strategic
              acumen, adaptive mindset, and ethical grounding. We don’t just teach
              management we cultivate leaders who create value, inspire change,
              and lead with vision.
            </p>
          </div>

          {/* RIGHT CONTENT */}
          <div className="w-full flex flex-col h-full gap-6">

            {/* LOGOS ROW */}
            <div className="flex gap-4">
              <div className="flex-1 h-24 rounded-full border border-gray-200 flex items-center justify-center bg-white">
                <Image
                  src="/AICTE.webp"
                  alt="AICTE Approved"
                  width={70}
                  height={70}
                  className="object-contain"
                />
              </div>

              <div className="flex-1 h-24 rounded-full border border-gray-200 flex items-center justify-center bg-white">
                <Image
                  src="/SPPU.webp"
                  alt="Affiliated to SPPU"
                  width={70}
                  height={70}
                  className="object-contain"
                />
              </div>
            </div>

            {/* VISION & MISSION CARD */}
            <div className="
              flex-1
              bg-[#0E4B57]
              text-white
              rounded-2xl
              p-8
              text-center
              flex
              flex-col
              justify-center
              space-y-12
            ">

              {/* VISION */}
              <div className="space-y-3">
                <Eye size={44} className="mx-auto text-orange-400" />
                <h3 className="text-lg font-semibold tracking-widest text-orange-400">
                  VISION
                </h3>
                <p className="text-base sm:text-md leading-relaxed font-light">
                  Shaping Industry-Ready Leaders for a Real Business World.
                </p>
              </div>

              {/* MISSION */}
              <div className="space-y-3">
                <Target size={44} className="mx-auto text-orange-400" />
                <h3 className="text-lg font-semibold tracking-widest text-orange-400">
                  MISSION
                </h3>
                <p className="text-base sm:text-md leading-relaxed font-light">
                  To deliver outcome-driven MBA education through industry
                  integration, skill mastery, and leadership development.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ExploreSection;
