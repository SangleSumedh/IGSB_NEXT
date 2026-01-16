"use client";

import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import SectorAnalyticsCard from "./SectoralDistribution";

/* ---------------- DATA ---------------- */

const LOGO_COUNT = 46;
const EXCLUDED_LOGOS = [4];

const generateLogos = () =>
  Array.from({ length: LOGO_COUNT }, (_, i) => {
    const index = i + 1;
    if (EXCLUDED_LOGOS.includes(index)) return null;
    return `/placementlogos/${index}.jpg`;
  }).filter(Boolean);

/* ---------------- COMPONENT ---------------- */

const RecruiterPlacement = () => {
  const pathname = usePathname();
  const logos = generateLogos();
  const visibleLogos = logos.slice(0, 40);

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
    <section className="relative w-full overflow-hidden bg-white">
      {/* ================= DESKTOP LAYOUT (LG+) ================= */}
      {/* 1. The Split Grid Background Logic */}
      <div className="hidden lg:grid grid-cols-[80%_20%] min-h-[600px]">
        {/* LEFT COL: Cyan Background + Content */}
        <div className="relative bg-secondary py-16 pl-4 pr-16 xl:pl-20 xl:pr-38 flex flex-col justify-center">
          {/* Header Text */}
          <div className="relative z-10 mb-10">
            <h2 className="text-2xl xl:text-4xl font-extrabold text-white mb-6">
              {headline}
            </h2>
            <p className="text-gray-100 text-lg max-w-2xl leading-relaxed">
              {body}
            </p>
          </div>

          {/* Logo Grid */}
          <div className="relative z-10 grid grid-cols-4 xl:grid-cols-10 gap-4">
            {visibleLogos.map((logo, i) => (
              <LogoItem key={i} src={logo} />
            ))}
          </div>

          {/* Optional decorative circle */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
        </div>

        {/* RIGHT COL: White Space (Empty placeholder) */}
        <div className="bg-white relative">
          {/* This space is intentionally empty to let the absolute card overlap it */}
        </div>
      </div>

      {/* ================= MOBILE LAYOUT (< LG) ================= */}
      <div className="block lg:hidden bg-[#3aafa9] py-12 px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-4">{headline}</h2>
          <p className="text-gray-100">{body}</p>
        </div>
        <div className="grid grid-cols-4 sm:grid-cols-4 gap-3 mb-12">
          {visibleLogos.slice(0, 40).map((logo, i) => (
            <LogoItem key={i} src={logo} />
          ))}
        </div>
        {/* On mobile, card is just stacked normally at the bottom */}
        <div className="relative">
          <OrangeCard />
        </div>
      </div>

      {/* ================= FLOATING CARD (DESKTOP ONLY) ================= */}
      {/* Positioned absolutely to 'straddle' the 78%/22% line */}
      <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 right-[2%] xl:right-[1%] w-[380px] xl:w-[400px] z-20">
        <OrangeCard />
      </div>
    </section>
  );
};

/* ---------------- SUB COMPONENTS ---------------- */

const OrangeCard = () => (
  <div className="bg-primary md:h-[520px] rounded-3xl p-8 shadow-2xl relative overflow-hidden text-white flex flex-col">
    
    {/* Ambient Glow */}
    <div className="absolute top-0 right-0 w-48 h-48 bg-white/20 rounded-full blur-[90px] -mr-20 -mt-20 pointer-events-none"></div>

    {/* Header */}
    <div className="mb-6">
      <p className="text-xs uppercase tracking-widest text-white/70 mb-2">
        Placement Insights
      </p>
      <h3 className="text-2xl font-bold leading-tight">
        Sector-wise Analytics
      </h3>
    </div>

    {/* Analytics Container */}
    <div className="bg-white/95 rounded-2xl  shadow-lg backdrop-blur-sm ">
      <SectorAnalyticsCard />
    </div>

    
  </div>
);


const LogoItem = ({ src }) => (
  <div className="bg-white rounded-lg p-2 h-16 xl:h-20 flex items-center justify-center shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
    <div className="relative w-full h-full">
      <Image
        src={src}
        alt="Recruiter Logo"
        fill
        className="object-contain p-1"
        sizes="(max-width: 768px) 33vw, 15vw"
      />
    </div>
  </div>
);

export default RecruiterPlacement;
