"use client";

import React from "react";
import Image from "next/image";
import { Phone } from "lucide-react";
import ApplyForm from "./ApplyForm";

/* ---------------- RECRUITER CONTENT ---------------- */

const pageContent = {
  headline: "Trusted by Industry, Defined by Outcomes",
  body: "We foster long-term partnerships with prominent recruiters, built on a consistent track record of graduate performance and professional readiness.",
};

/* ---------------- RECRUITER LOGOS ---------------- */

const LOGO_COUNT = 44;
const EXCLUDED_INDICES = [35, 37];

const generateLogos = () =>
  Array.from({ length: LOGO_COUNT }, (_, i) => {
    const index = i + 1;
    if (EXCLUDED_INDICES.includes(index)) return null;
    return `/IGSB/logos/logo${index}.webp`;
  }).filter(Boolean);

/* ================= COMPONENT ================= */

export default function SmallDesktopFormSection() {
  const logos = generateLogos();

  return (
    <section className="block xl:hidden w-full bg-gradient-to-r from-[#10404A] to-[#1F6D71]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-14 grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

        {/* ================= LEFT CONTENT ================= */}
        <div className="flex flex-col items-center text-center gap-10">

          {/* HEADLINE + BODY */}
          <div className="max-w-3xl space-y-4">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white">
              {pageContent.headline}
            </h2>
            <p className="text-white/90 text-base md:text-lg leading-relaxed">
              {pageContent.body}
            </p>
          </div>

          {/* RECRUITER MARQUEES */}
          <div className="w-full space-y-8">
            {/* ROW 1 */}
            <div className="overflow-hidden">
              <div className="marquee marquee-left gap-6">
                {[...logos, ...logos].map((logo, i) => (
                  <LogoItem key={`r1-${i}`} src={logo} />
                ))}
              </div>
            </div>

            {/* ROW 2 */}
            <div className="overflow-hidden">
              <div className="marquee marquee-right gap-6">
                {[...logos, ...logos].map((logo, i) => (
                  <LogoItem key={`r2-${i}`} src={logo} />
                ))}
              </div>
            </div>

            {/* ROW 3 — ONLY lg → xl */}
            <div className="overflow-hidden hidden lg:block xl:hidden">
              <div className="marquee marquee-left gap-6">
                {[...logos, ...logos].map((logo, i) => (
                  <LogoItem key={`r3-${i}`} src={logo} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ================= RIGHT FORM ================= */}
        <div className="flex justify-center lg:justify-center">
          <div className="w-full max-w-[420px] bg-[#ff885b] text-white rounded-xl shadow-2xl p-5">
            <h2 className="text-xl text-center font-bold mb-4">
              Admission Form
            </h2>

            <ApplyForm variant="modal" />

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

      </div>
    </section>
  );
}

/* ---------------- LOGO ITEM ---------------- */

const LogoItem = ({ src }) => (
  <div className="flex items-center justify-center w-28 h-14 bg-white border border-white/30 rounded-lg shadow-sm flex-shrink-0">
    <Image
      src={src}
      alt="Recruiter Logo"
      width={110}
      height={55}
      className="object-contain max-w-[80%] max-h-[70%]"
    />
  </div>
);
