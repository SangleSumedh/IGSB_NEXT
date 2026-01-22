"use client";

import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import SectorAnalyticsCard from "./SectoralDistribution";
import ApplyForm from "../home/ApplyForm";
import { Phone } from "lucide-react";

/* ---------------- DATA ---------------- */

const LOGO_COUNT = 46;

const generateLogos = () =>
  Array.from({ length: LOGO_COUNT }, (_, i) => {
    const index = i + 1;

    const extension = index === 4 ? "png" : "webp";
    return `/placementlogos/${index}.${extension}`;
  });

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
    <section className="relative w-full overflow-hidden bg-secondary ">
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

        </div>

        {/* RIGHT COL: White Space (Empty placeholder) */}
        <div className="bg-secondary relative"></div>
      </div>

      {/* ================= MOBILE LAYOUT (< LG) ================= */}
      <div className="block lg:hidden bg-secondary py-12 px-4">
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
 
  <div className="w-full rounded-3xl relative overflow-hidden text-white flex flex-col shadow-2xl">
    
    <div className="bg-[#ff885b] text-white rounded-xl p-5 h-full w-full">
      <h2 className="text-xl text-center font-bold mb-4">
        Admission Form
      </h2>

      <ApplyForm variant="card" />

      <div className="text-center mt-4">
        <p className="font-semibold flex justify-center gap-2 text-sm">
          Or Give us a call <Phone size={14} /> +91 0000000000
        </p>
        <p className="text-xs opacity-90 mt-1">
          The Support Centre is Available 24/7
        </p>
      </div>
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
