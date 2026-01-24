"use client";

import React from "react";
import Image from "next/image";
import { Phone } from "lucide-react";
import ApplyForm from "./ApplyForm";
import { usePathname } from "next/navigation";

/* ---------------- RECRUITER DATA ---------------- */

const LOGO_COUNT = 46;
const EXCLUDED_INDICES = [35, 37];

const generateLogos = () =>
  Array.from({ length: LOGO_COUNT }, (_, i) => {
    const index = i + 1;
    if (EXCLUDED_INDICES.includes(index)) return null;
    return `/logos/${index}.jpg`;
  }).filter(Boolean);

export default function FormSection() {
  const pathname = usePathname();
  const logos = generateLogos();

  /* ---------------- FIXED MARQUEE SPLIT ---------------- */
  const row1 = logos.slice(0, 12); // 1–12
  const row2 = logos.slice(12, 23); // 13–23
  const row3 = logos.slice(23); // 24–46

  const pageContent = {
    "/": {
      headline: "Trusted by Industry, Defined by Outcomes",
      body: "We foster long-term partnerships with prominent recruiters, built on a consistent track record of student performance and professional readiness.",
    },
    "/placement": {
      headline: "Trusted by Industry, Defined by Outcomes",
      body: "We foster long-term partnerships with prominent recruiters, built on a consistent track record of student performance and professional readiness.",
    },
    "/programs/mba": {
      headline: "Trusted by Industry, Defined by Outcomes",
      body: "We foster long-term partnerships with prominent recruiters, built on a consistent track record of student performance and professional readiness.",
    },
  };

  const { headline, body } = pageContent[pathname] || pageContent["/"];

  return (
    <section
      id="form-section"
      className="relative w-full bg-gradient-to-r from-[#0f3d3e] via-[#1f6d71] to-[#2ea3a1] overflow-hidden md:scroll-mt-32"
    >
      {/* ================= XL AND ABOVE ================= */}
      <div className="hidden xl:grid grid-cols-[72%_28%] min-h-[650px]">
        {/* ================= LEFT ================= */}
        <div className="relative overflow-hidden">
          {/* TEXT */}
          <div className="relative z-10 pt-12 pb-6 px-20 text-center">
            <h2 className="text-3xl font-extrabold text-white mb-4">
              {headline}
            </h2>
            <p className="text-white/90 text-lg max-w-4xl mx-auto leading-relaxed">
              {body}
            </p>
          </div>

          {/* MARQUEES */}
          <div className="relative z-10 space-y-10 py-6">
            {/* ROW 1 → Right to Left */}
            <div className="overflow-hidden">
              <div className="marquee marquee-left gap-8">
                {[...row1, ...row1].map((logo, i) => (
                  <LogoItem key={`r1-${i}`} src={logo} />
                ))}
              </div>
            </div>

            {/* ROW 2 → Left to Right */}
            <div className="overflow-hidden">
              <div className="marquee marquee-right gap-8">
                {[...row2, ...row2].map((logo, i) => (
                  <LogoItem key={`r2-${i}`} src={logo} />
                ))}
              </div>
            </div>

            {/* ROW 3 → Right to Left */}
            <div className="overflow-hidden">
              <div className="marquee marquee-left gap-8">
                {[...row3, ...row3].map((logo, i) => (
                  <LogoItem key={`r3-${i}`} src={logo} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ================= RIGHT : FORM ================= */}
        <div className="relative z-20 flex items-center justify-end pr-12">
          <div className="w-[480px]">
            <div className="bg-[#ff885b]/95 backdrop-blur-sm text-white rounded-2xl shadow-2xl p-7">
              <h2 className="text-2xl text-center font-bold mb-5">
                Admission Form
              </h2>

              <ApplyForm variant="card" />

              <div className="text-center mt-5">
                <p className="font-semibold flex justify-center gap-2 text-sm">
                  Or Give us a call <Phone size={14} /> +91 9657856103
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- LOGO ITEM ---------------- */

const LogoItem = ({ src }) => (
  <div className="flex items-center justify-center w-32 h-16 sm:w-40 sm:h-20 bg-white border border-white/30 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex-shrink-0">
    <Image
      src={src}
      alt="Recruiter Logo"
      width={120}
      height={60}
      className="object-cover max-w-[80%] max-h-[70%]"
    />
  </div>
);
