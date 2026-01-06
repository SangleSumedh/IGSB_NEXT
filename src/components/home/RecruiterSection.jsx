"use client";

import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

const RecruitersSection = () => {
  const pathname = usePathname();

  const pageContent = {
    "/": {
      headline: "Trusted by Industry, Defined by Outcomes ",
      body: "We foster long-term partnerships with prominent recruiters, built on a consistent track record of graduate performance and professional readiness.",
    },
    "/placement": {
      headline: "Trusted by Industry, Defined by Outcomes ",
      body: "We foster long-term partnerships with prominent recruiters, built on a consistent track record of graduate performance and professional readiness. ",
    },
    "/programs/mba": {
      headline: "Trusted by Industry, Defined by Outcomes ",
      body: "We foster long-term partnerships with prominent recruiters, built on a consistent track record of graduate performance and professional readiness. ",
    },
  };

  const { headline, body } = pageContent[pathname] || pageContent["/"];

  const allLogos = Array.from(
    { length: 44 },
    (_, i) => `/IGSB/logos/logo${i + 1}.webp`
  ).filter((_, index) => ![35, 37].includes(index + 1));

  const mainLogos = allLogos.filter((_, index) => ![17, 24].includes(index));
  const reorderedLogos = [...mainLogos, allLogos[17], allLogos[24]];

  return (
    <div className="bg-white px-6 sm:px-8 py-6 sm:py-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="fade-up text-2xl sm:text-4xl font-extrabold text-slate-900 mb-4 sm:mb-6">
          {headline}
        </h2>

        <p className="fade-up fade-delay-1 text-gray-700 text-sm sm:text-xl max-w-5xl mx-auto leading-relaxed mb-4 sm:mb-8 px-2">
          {body}
        </p>

        <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-x-2 sm:gap-x-3 gap-y-5 sm:gap-y-7 place-items-center relative">
          {reorderedLogos.map((logo, index) => {
            const shouldHide = [17, 24].includes(index);
            const hideOnDesktopOnly = shouldHide ? "hidden sm:flex" : "flex";

            return (
              <div
                key={logo} // ✅ FIXED
                className={`logo-item fade-up fade-delay-2 ${hideOnDesktopOnly} items-center justify-center
                  w-20 sm:w-24 md:w-28 h-14 sm:h-16 bg-white rounded-md shadow-sm hover:shadow-md
                  transition-all duration-300
                  ${
                    shouldHide
                      ? "sm:opacity-0 sm:bg-transparent sm:shadow-none sm:pointer-events-none"
                      : ""
                  }`}
              >
                <Image
                  src={logo}
                  alt={`Recruiter Logo ${index + 1}`}
                  width={100}
                  height={60}
                  className="object-contain max-w-[75%] max-h-[50px] sm:max-w-[80%] sm:max-h-[60px]"
                />
              </div>
            );
          })}

          <div className="circle-badge hidden sm:block absolute top-[49%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 fade-up fade-delay-3">
            <div
              className="
    w-28 h-28 md:w-40 md:h-40 
    rounded-full 
    bg-gradient-to-r from-[#10404A] to-[#1F6D71] 
    text-white 
    flex flex-col items-center justify-center 
    shadow-2xl 
    border-[4px] border-[#fb7035]
    transition-transform duration-300 hover:scale-105
  "
            >
              <p className="text-xl md:text-3xl font-black tracking-tight">
                650+
              </p>
              <p className="text-[10px] md:text-sm font-bold uppercase tracking-widest opacity-90">
                Corporates
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecruitersSection;
