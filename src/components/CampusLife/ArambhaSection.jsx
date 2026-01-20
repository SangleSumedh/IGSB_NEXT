"use client";

import { useRef } from "react";
import Image from "next/image";

export default function ArambhaSection() {
  return (
    <div className="min-h-screen bg-[#3aafa9]">
      <div className="relative h-screen overflow-hidden bg-[#3aafa9]">
        <div className="max-w-full mx-auto h-full flex flex-col lg:flex-row">
          {/* LEFT — TIMELINE & GALLERY SECTION (swapped from right) */}
          <div className="w-full lg:w-2/4 flex flex-col justify-center px-6 lg:px-12 py-8 lg:py-0">
            {/* CARD 1: DESCRIPTION */}
            <div className="mb-8 lg:mb-12">
              <div className="relative bg-transparent border border-gray-100/40 rounded-2xl overflow-hidden hover:bg-white/5 transition-all duration-300">
                <div className="p-6 md:p-6">
                  <p className="text-white text-base md:text-lg leading-relaxed text-justify">
                    The induction programme introduced participants to the
                    institutional culture, SPPU curriculum, AICTE framework, and
                    industry expectations. It featured foundation sessions about
                    a variety of case study analysis across multiple domains.
                    Holistic development was addressed through wellness
                    sessions, universal human values discussions, and aptitude
                    training aligned with placement readiness. It further
                    enriched by industry expert interactions, alumni panel
                    discussions, and a full-day leadership workshop on emotional
                    intelligence, strategic thinking, and corporate readiness.
                  </p>
                </div>
              </div>
            </div>

            {/* CARD 2: GALLERY */}
            <div className="bg-gray-100/50 rounded-md">
              <div className="relative bg-transparent border border-gray-100/40 rounded-md overflow-hidden hover:bg-white/5 transition-all duration-300">
                <div className="p-4 md:p-6">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[120px] md:auto-rows-[150px]">
                    {/* Main Large Image */}
                    <div className="relative col-span-2 row-span-2 rounded-xl overflow-hidden border border-white/20 hover:border-white/40 transition-colors">
                      <Image
                        src="/IGSB/student-induction/induction25-15.png"
                        alt="Main induction event"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />
                    </div>

                    {/* Sidebar Image */}
                    <div className="relative col-span-2 md:col-span-1 row-span-2 rounded-xl overflow-hidden border border-white/20 hover:border-white/40 transition-colors">
                      <Image
                        src="/IGSB/student-induction/induction25-16.png"
                        alt="Sidebar induction"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />
                    </div>

                    {/* Twin Image 1 */}
                    <div className="relative col-span-2 md:col-span-1 row-span-1 rounded-xl overflow-hidden border border-white/20 hover:border-white/40 transition-colors">
                      <Image
                        src="/IGSB/student-induction/induction25-13.png"
                        alt="Induction activity 1"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />
                    </div>

                    {/* Twin Image 2 */}
                    <div className="relative col-span-2 md:col-span-1 row-span-1 rounded-xl overflow-hidden border border-white/20 hover:border-white/40 transition-colors">
                      <Image
                        src="/IGSB/student-induction/induction25-12.png"
                        alt="Induction activity 2"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — CONTENT SECTION (swapped from left) */}
          <div className="w-full lg:w-2/4 flex flex-col justify-center px-6 lg:px-12 py-8 lg:py-0">
            <div className="max-w-lg mx-auto lg:mx-0">
              <h1 className="text-4xl md:text-5xl font-extrabold text-secondary uppercase mb-6 pt-10">
                Arambha
              </h1>

              <p className="text-white mb-8 md:mb-10 text-md md:text-lg leading-relaxed">
                <span className="font-bold">Arambha 2024</span> effectively laid
                a strong academic, professional, and ethical foundation,
                preparing students for a successful MBA journey and future
                corporate roles.
              </p>

              <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px]">
                <Image
                  src="/chanu/chanuleft.png"
                  alt="Arambha visual"
                  fill
                  className="object-contain rounded-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
