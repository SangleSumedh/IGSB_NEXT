"use client";

import React from "react";
import Image from "next/image";

export default function ProgrammesSection() {
  return (
    <section className="w-full h-screen bg-white overflow-hidden">
      <div className="w-full h-full">

        <div className="grid h-full lg:grid-cols-[50%_50%]">
          
          {/* LEFT — IMAGE + ARC */}
          <div className="relative w-full h-full flex items-center justify-start">

            {/* IMAGE CIRCLE */}
            <div className="relative w-[90vh] h-[90vh]">
              <Image
                src="/Home/MBASpec.png"
                alt="MBA Specializations"
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* ORANGE ARC — PERFECTLY WRAPPED */}
            <svg
              className="absolute top-1/2 left-[15%] -translate-y-1/2 pointer-events-none"
              width="120vh"
              height="120vh"
              viewBox="0 0 1000 1000"
              fill="none"
            >
              {/* RIGHT OUTER ARC */}
              <path
                d="
                  M 500 50
                  A 450 450 0 0 1 500 950
                "
                stroke="#F97316"
                strokeWidth="6"
                fill="none"
              />
            </svg>

          </div>

          {/* RIGHT — EMPTY FOR NEXT CONTENT */}
          <div className="w-full h-full flex items-center justify-center">
            {/* content next */}
          </div>

        </div>
      </div>
    </section>
  );
}
