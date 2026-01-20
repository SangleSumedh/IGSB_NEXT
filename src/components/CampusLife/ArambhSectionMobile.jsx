"use client";

import { useRef } from "react";
import Image from "next/image";

export default function ArambhaSectionMobile() {
  return (
    <div className="min-h-screen bg-[#3aafa9] py-8">
      {/* Main container with similar structure to desktop */}
      <div className="max-w-full mx-auto px-4">
        {/* TITLE SECTION (matches website style) */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold text-white uppercase mb-4">
            Arambha
          </h1>
          <p className="text-white text-lg leading-relaxed">
            The beginning of momentum, where ideas take their first real form.
          </p>
        </div>

        {/* MAIN IMAGE (matches website positioning) */}
        <div className="relative w-full h-[250px] mb-8">
          <Image
            src="/chanu/chanuleft.png"
            alt="Arambha visual"
            fill
            className="object-contain rounded-2xl"
            priority
          />
        </div>

        {/* DESCRIPTION CARD (matches website card style) */}
        <div className="mb-8">
          <div className="relative bg-transparent border border-white/40 rounded-2xl overflow-hidden hover:bg-white/5 transition-all duration-300">
            <div className="p-6">
              <p className="text-white text-base leading-relaxed text-justify">
                <span className="font-semibold text-white/90">
                  Arambha: Induction Program 2024
                </span>{" "}
                at Indira Global School of Business marked the beginning
                of the MBA journey for the 2024–26 batch. Conducted from{" "}
                <span className="font-medium text-white/90">
                  10th to 21st September 2024
                </span>
                , the program was designed to ease students into academic
                and professional life while introducing them to IGSB&apos;s
                culture, curriculum, and industry expectations.
              </p>
            </div>
          </div>
        </div>

        {/* GALLERY SECTION (responsive grid like website) */}
        <div>
          <div className="bg-white/20 rounded-xl p-4">
            <div className="grid grid-cols-2 gap-3 auto-rows-[120px]">
              {/* Main Large Image */}
              <div className="relative col-span-2 row-span-2 rounded-xl overflow-hidden border border-white/40">
                <Image
                  src="/IGSB/student-induction/induction25-15.png"
                  alt="Main induction event"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="100vw"
                />
              </div>

              {/* Sidebar Image */}
              <div className="relative col-span-1 row-span-2 rounded-xl overflow-hidden border border-white/40">
                <Image
                  src="/IGSB/student-induction/induction25-16.png"
                  alt="Sidebar induction"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="50vw"
                />
              </div>

              {/* Twin Image 1 */}
              <div className="relative col-span-1 row-span-1 rounded-xl overflow-hidden border border-white/40">
                <Image
                  src="/IGSB/student-induction/induction25-13.png"
                  alt="Induction activity 1"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="50vw"
                />
              </div>

              {/* Twin Image 2 */}
              <div className="relative col-span-1 row-span-1 rounded-xl overflow-hidden border border-white/40">
                <Image
                  src="/IGSB/student-induction/induction25-12.png"
                  alt="Induction activity 2"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}