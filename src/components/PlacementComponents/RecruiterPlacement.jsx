"use client";

import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

/* ---------------- DATA ---------------- */

const LOGO_COUNT = 44;
const EXCLUDED_INDICES = [35, 37];

const generateLogos = () =>
  Array.from({ length: LOGO_COUNT }, (_, i) => {
    const index = i + 1;
    if (EXCLUDED_INDICES.includes(index)) return null;
    return `/IGSB/logos/logo${index}.webp`;
  }).filter(Boolean);

/* ---------------- COMPONENT ---------------- */

const RecruiterPlacement = () => {
  const pathname = usePathname();
  const logos = generateLogos();
  // Display first 40 logos
  const visibleLogos = logos.slice(0, 36);

  const pageContent = {
    "/": {
      headline: "Trusted by Industry, Defined by Outcomes",
      body: "We foster long-term partnerships with prominent recruiters, built on a consistent track record of graduate performance and professional readiness.",
    },
    "/placement": {
      headline: "Recruiters Who Value Industry-Ready Talent",
      body: "Leading organizations that recognize, recruit, and trust IGSB graduates for their domain expertise and professional readiness.",
    },
    "/programs/mba": {
      headline: "Trusted by Industry, Defined by Outcomes",
      body: "We foster long-term partnerships with prominent recruiters, built on a consistent track record of graduate performance and professional readiness.",
    },
  };

  const { headline, body } = pageContent[pathname] || pageContent["/"];

  return (
    <section className="bg-[#3aafa9] py-16 lg:py-24 relative overflow-hidden">
      <div className="max-w-9xl mx-auto px-4 sm:px-6">
        
        {/* SECTION HEADER */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6">
            {headline}
          </h2>
          <p className="text-gray-100 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            {body}
          </p>
        </div>

        {/* MAIN CONTENT SPLIT */}
        {/* Restored to flex-row for side-by-side layout matching the screenshot */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          
          {/* LEFT: LOGO GRID */}
          <div className="w-full lg:w-2/3">
             <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-6 gap-4">
                {visibleLogos.map((logo, i) => (
                  <LogoItem key={i} src={logo} />
                ))}
             </div>
          </div>

          {/* RIGHT: ORANGE CARD (Info / Lorem Ipsum) */}
          <div className="w-full lg:w-1/3 sticky top-8">
            <div className="bg-[#ff712d] rounded-2xl p-8 shadow-2xl relative overflow-hidden text-white">
               
               {/* Background Glow Effect */}
               <div className="absolute top-0 right-0 w-40 h-40 bg-white/20 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>

               <h3 className="text-2xl font-bold mb-4 border-b-2 border-white/30 pb-4">
                 Why Recruiters Choose Us
               </h3>
               
               <div className="space-y-4 text-white/90 leading-relaxed text-sm md:text-base">
                 <p>
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                   Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                   Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                 </p>
                 <ul className="list-disc list-inside space-y-2 mt-4 font-medium">
                   <li>Industry-aligned curriculum</li>
                   <li>Rigorous soft-skills training</li>
                   <li>Consistent top-tier placement records</li>
                 </ul>
               </div>

               <button className="mt-8 w-full bg-white text-[#ff712d] font-bold py-3 px-6 rounded-lg shadow-md hover:bg-gray-100 hover:scale-[1.02] transition-all">
                  Contact Placement Cell
               </button>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

/* ---------------- SUB COMPONENTS ---------------- */

const LogoItem = ({ src }) => (
  <div className="bg-white rounded-xl p-4 h-24 flex items-center justify-center shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
    <div className="relative w-full h-full">
      <Image
        src={src}
        alt="Recruiter Logo"
        fill
        className="object-contain p-2"
        sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 20vw"
      />
    </div>
  </div>
);

export default RecruiterPlacement;