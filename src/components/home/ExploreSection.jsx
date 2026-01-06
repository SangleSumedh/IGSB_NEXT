"use client";

import React from "react";
import Image from "next/image";

const ExploreSection = () => {
  const logos = [
    { title: "Approved by AICTE", img: "/AICTE.webp" },
    { title: "Affiliated to SPPU Pune", img: "/SPPU.webp" },
  ];

  return (
    <section className="w-full bg-white relative z-30 px-6 py-12">
      <div className="max-w-7xl mx-auto">

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-[65%_35%] gap-10">

          {/* LEFT SECTION */}
          <div className="space-y-5">
            {/* HEADING */}
            <div>
              <h2 className="text-2xl md:text-4xl font-semibold text-gray-800 leading-tight">
                Explore Your Potential At
              </h2>
              <h2 className="text-2xl md:text-4xl font-extrabold text-secondary mt-1 leading-tight">
                INDIRA GLOBAL SCHOOL OF BUSINESS
              </h2>
            </div>

            {/* TEXT */}
            <div>
              <p className="text-gray-700 text-md md:text-lg leading-relaxed text-justify">
                We develop globally competent, purpose-driven leaders equipped to excel in today’s fast-evolving business landscape. As a premier AICTE-approved MBA institute, our vision is to be a hub of academic excellence that nurtures strategic thinkers who lead with integrity, empathy, and a commitment to sustainable and socially responsible business practices.
              </p>

              <p className="text-gray-700 text-md md:text-lg leading-relaxed text-justify mt-2">
                IGSB is located along the Mumbai–Pune Expressway, our campus blends state-of-the-art infrastructure with a serene, natural setting, offering a fresh and inspiring environment that fosters innovation, focus, and holistic development.
              </p>

              <p className="text-gray-700 text-md md:text-lg leading-relaxed text-justify mt-2">
                Through industry-integrated MBA programmes and a rigorous experiential learning pedagogy, IGSB empowers future leaders with the strategic acumen, adaptive mindset, and ethical grounding needed to navigate complex markets and drive meaningful organizational impact. We don't just teach management, we cultivate leaders who create value, inspire change, and lead with vision.
              </p>
            </div>
          </div>

          {/* RIGHT SECTION */}
          <div className="grid grid-cols-2 gap-4 self-start">

            {/* LOGOS */}
            <div className="flex items-center justify-center border border-gray-200 rounded-xl p-4 hover:shadow-md transition">
              <Image
                src={logos[0].img}
                alt={logos[0].title}
                width={120}
                height={120}
                className="object-contain"
              />
            </div>

            <div className="flex items-center justify-center border border-gray-200 rounded-xl p-4 hover:shadow-md transition">
              <Image
                src={logos[1].img}
                alt={logos[1].title}
                width={120}
                height={120}
                className="object-contain"
              />
            </div>

            {/* VISION */}
            <div className="border border-gray-200 rounded-xl p-5 flex flex-col items-start justify-start hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-secondary mb-2">
                Vision
              </h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed text-left">
                Shaping Industry-Ready Leaders for a Real Business World.
              </p>
            </div>

            {/* MISSION */}
            <div className="border border-gray-200 rounded-xl p-5 flex flex-col items-start justify-start hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-secondary mb-2">
                Mission
              </h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed text-left">
                To deliver outcome-driven MBA education through industry integration,
                skill mastery, and leadership development.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;
