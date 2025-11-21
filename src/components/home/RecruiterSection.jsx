"use client";

import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

const RecruitersSection = () => {
  const pathname = usePathname();

  // ✅ Define text content for each route
  const pageContent = {
    "/": {
      headline: "INDIRA DEGREE OPENS DOORS. WIDE.",
      body: "At Indira College of Engineering & Management, there is a strong focus on preparing every student to be industry ready. With numerous recruiters visiting our campus each year, our graduates gain access to a network of opportunities, resources, and the support needed to excel in a rapidly evolving job market.",
    },
    "/programs/computer-engineering": {
      headline: "Campus Recruitment",
      body: "Our Computer Engineering graduates are highly sought after for their strong foundational knowledge and problem-solving abilities. They secure prestigious roles in top IT product firms, multinational corporations, financial institutions, and dynamic startups.",
    },
    "/programs/mechanical-engineering": {
      headline: "Meet Your Future Employers",
      body: "At Indira College of Engineering & Management, we ensure our Mechanical Engineering graduates are industry ready. Our strong corporate relationships provide students with access to premier opportunities with leading national and multinational companies in the core engineering sector.",
    },
    "/programs/entc": {
      headline: "Recruited by Industry Pioneers",
      body: "Our ENTC graduates are highly sought after for their strong analytical and design skills. They secure pivotal roles in top telecommunications service providers, electronics manufacturing companies, and R&D centers driving innovation in connectivity.",
    },
    "/programs/it": {
      headline: "Leading the IT Talent Pipeline",
      body: "Our IT graduates are highly valued for their strong technical and problem-solving skills. They are recruited by top IT service providers, consulting giants, and the IT divisions of leading corporations across the globe.",
    },
    "/programs/mca": {
      headline: "Recruited by Technology Innovators",
      body: "Our MCA graduates are valued for their strong analytical abilities and software development expertise. They are consistently recruited by leading technology firms for core development and specialist roles.",
    },
    "/programs/mtech-mech": {
      headline: "Recruited for Innovation and R&D",
      body: "Our M.Tech (Mechanical) graduates are recruited by leading organizations for their specialized analytical and research capabilities.",
    },
    "/programs/mtech-comp": {
      headline: "Leading the Way in Tech Innovation",
      body: "Our M.Tech (CS) graduates are highly sought after for their deep technical knowledge and research acumen by the world's most innovative tech companies.",
    },
    "/programs/imca": {
      headline: "Forge a Career with Technology Leaders",
      body: "Our Integrated MCA graduates are valued for their extensive training and readiness to handle complex development tasks. They are consistently recruited by leading technology companies for core software and application development roles.",
    },
    "/programs/imba": {
      headline: "Launch Your Management Career",
      body: "Graduates of our Integrated MBA programme are highly valued for their mature perspective and comprehensive training. They are recruited by leading companies for roles that require a blend of foundational knowledge and strategic understanding.",
    },
    "/programs/mba": {
      headline: "INDIRA DEGREE OPENS DOORS. WIDE.",
      body: "At Indira College of Engineering & Management, there is a strong focus on preparing every student to be industry ready. With numerous recruiters visiting our campus each year, our graduates gain access to a network of opportunities, resources, and the support needed to excel in a rapidly evolving job market.",
    },
  };

  // ✅ Determine what to render (fallback to home content if path not matched)
  const { headline, body } = pageContent[pathname] || pageContent["/"];

  // ✅ Logos (unchanged)
  const allLogos = Array.from({ length: 44 }, (_, i) => `/logos/logo${i + 1}.png`).filter(
    (_, index) => ![35, 37].includes(index + 1)
  );
  const mainLogos = allLogos.filter((_, index) => ![17, 24].includes(index));
  const reorderedLogos = [...mainLogos, allLogos[17], allLogos[24]];

  return (
    <div className="bg-gray-50 py-12 sm:py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        {/* ✅ Dynamic Section Heading */}
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
          {headline}
        </h2>

        {/* ✅ Dynamic Description */}
        <p className="text-gray-700 text-xs sm:text-sm max-w-5xl mx-auto leading-relaxed mb-10 sm:mb-12 px-2">
          {body}
        </p>

        {/* ✅ Recruiter Logos Grid */}
        <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-x-2 sm:gap-x-3 gap-y-5 sm:gap-y-7 place-items-center relative">
          {reorderedLogos.map((logo, index) => (
            <div
              key={index}
              className={`flex items-center justify-center w-20 sm:w-24 md:w-28 h-14 sm:h-16 bg-white rounded-md shadow-sm hover:shadow-md transition-all duration-300 ${
                [17, 24].includes(index) ? "sm:invisible" : ""
              }`}
            >
              <Image
                src={logo}
                alt={`Recruiter Logo ${index + 1}`}
                width={100}
                height={60}
                className="object-contain max-w-[75%] max-h-[50px] sm:max-w-[80%] sm:max-h-[60px] hover:grayscale-0 transition duration-300"
                loading={index < 7 ? "eager" : "lazy"}
                priority={index < 7}
              />
            </div>
          ))}

          {/* ✅ Center Circle Badge (hidden on mobile) */}
          <div className="hidden sm:block absolute top-[49%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="w-28 h-28 md:w-40 md:h-40 rounded-full bg-[linear-gradient(145deg,_#278da4_0%,_#003c84_90%)] text-white flex flex-col items-center justify-center shadow-xl border-[4px] border-[#D4AF37]">
              <p className="text-lg md:text-2xl font-bold">350+</p>
              <p className="text-xs md:text-base font-medium">Corporates</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecruitersSection;
