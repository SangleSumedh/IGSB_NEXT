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

const RecruitersSection = () => {
  const pathname = usePathname();
  const logos = generateLogos();

  const half = Math.ceil(logos.length / 2);
  const row1 = logos.slice(0, half);
  const row2 = logos.slice(half);

  const pageContent = {
    "/": {
      headline: "Trusted by Industry, Defined by Outcomes",
      body: "We foster long-term partnerships with prominent recruiters, built on a consistent track record of graduate performance and professional readiness.",
    },
    "/placement": {
      headline: "Trusted by Industry, Defined by Outcomes",
      body: "We foster long-term partnerships with prominent recruiters, built on a consistent track record of graduate performance and professional readiness.",
    },
    "/programs/mba": {
      headline: "Trusted by Industry, Defined by Outcomes",
      body: "We foster long-term partnerships with prominent recruiters, built on a consistent track record of graduate performance and professional readiness.",
    },
  };

  const { headline, body } = pageContent[pathname] || pageContent["/"];

  return (
    <section className="relative overflow-hidden bg-white py-12 group">
      {/* TEXT */}
      <div className="max-w-7xl mx-auto text-center px-6 mb-10">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
          {headline}
        </h2>
        <p className="text-gray-700 text-lg sm:text-xl max-w-4xl mx-auto leading-relaxed">
          {body}
        </p>
      </div>

      {/* MARQUEE */}
      <div className="relative w-full space-y-8 py-8">
        {/* ROW 1 */}
        <div className="overflow-hidden">
          <div className="marquee marquee-left gap-8">
            {[...row1, ...row1].map((logo, i) => (
              <LogoItem key={`row1-${i}`} src={logo} />
            ))}
          </div>
        </div>

        {/* ROW 2 */}
        <div className="overflow-hidden">
          <div className="marquee marquee-right gap-8">
            {[...row2, ...row2].map((logo, i) => (
              <LogoItem key={`row2-${i}`} src={logo} />
            ))}
          </div>
        </div>

        {/* CENTER BADGE */}
        {/* <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
          <div className="relative w-32 h-32 md:w-44 md:h-44 rounded-full bg-white/10 backdrop-blur-sm border border-white/40 shadow-[0_8px_32px_rgba(31,38,135,0.37)] flex items-center justify-center">
            <div className="absolute inset-1 rounded-full border-[3px] border-[#fb7035] opacity-80" />
            <div className="bg-white rounded-full w-24 h-24 md:w-32 md:h-32 flex flex-col items-center justify-center shadow-inner">
              <p className="text-2xl md:text-4xl font-black text-[#10404A]">
                650+
              </p>
              <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-slate-500">
                Corporates
              </p>
            </div>
          </div>
        </div> */}

        {/* EDGE FADES */}
        <div className="absolute inset-y-0 left-0 w-12 sm:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-12 sm:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
};

/* ---------------- LOGO ITEM ---------------- */

const LogoItem = ({ src }) => (
  <div className="flex items-center justify-center w-32 h-16 sm:w-40 sm:h-20 bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-md hover:border-[#fb7035]/30 transition-all duration-300 flex-shrink-0">
    <Image
      src={src}
      alt="Recruiter Logo"
      width={120}
      height={60}
      className="object-contain max-w-[80%] max-h-[70%]"
    />
  </div>
);

export default RecruitersSection;
