"use client";

import React from "react";
import Image from "next/image";

const ExploreSection = () => {
  const logos = [
    { title: "NAAC Accredited", img: "/NAAC.webp" },
    { title: "Approved by AICTE", img: "/AICTE.webp" },
    { title: "Affiliated to SPPU Pune", img: "/SPPU.webp" },
    { title: "Coming Soon", img: "/coming-soon.webp" }, // Placeholder
  ];

  return (
    <div className="max-w-7xl mx-auto  pt-25 pb-5 grid grid-cols-1 lg:grid-cols-[65%_35%] gap-12 ">
      {/* LEFT SIDE: TEXT */}
      <div>
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-snug">
          Explore Your Potential with
        </h2>

        {/* ✅ Split heading into two clear lines */}
        <h2 className="text-2xl lg:text-3xl font-extrabold text-[#003366] mb-6 leading-snug">
          INDIRA COLLEGE OF ENGINEERING <br />
          & MANAGEMENT
        </h2>

        {/* ✅ Paragraph text justified */}
        <p className="text-gray-700 text-lg lg:text-xl leading-relaxed text-justify">
          Located near Pune, Indira College of Engineering & Management, one of
          the leading NAAC accredited engineering institutions, offers a world
          of learning to help you achieve your goals. Choose from
          industry-led programs, learn from outstanding faculty in
          state-of-the-art facilities, and access limitless placement
          opportunities with top campus recruiters. Join a vibrant community
          of students with ambitions as big as yours.
        </p>
      </div>

      {/* RIGHT SIDE: LOGOS GRID */}
      <div className="grid grid-cols-2 gap-6">
        {logos.map((logo, index) => (
          <div
            key={index} 
            className="flex flex-col  h-48 transition-transform duration-300 hover:scale-105"
          >
            <Image
              src={logo.img}
              alt={logo.title}
              width={180}
              height={180}
              className="object-contain mb-2"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreSection;
