"use client";

import React from "react";
import Image from "next/image";

export default function ProgrammesSection() {
  return (
    <section className="w-full h-screen bg-white">
      <div className="w-full h-full">

        {/* MAIN GRID */}
        <div
          className="
            grid
            h-full
            grid-cols-1
            lg:grid-cols-[50%_50%]
            items-center
          "
        >
          {/* LEFT — IMAGE (STICK TO LEFT) */}
          <div className="w-full h-full flex items-center justify-start">
            <Image
              src="/IGSB/static/mba_idea.png"
              alt="MBA Specializations"
              fill
              className="object-contain object-left"
              priority
            />
          </div>

          {/* RIGHT — EMPTY (CONTENT COMING NEXT) */}
          <div className="w-full h-full flex items-center justify-center">
            {/* Content will be added here */}
          </div>
        </div>

      </div>
    </section>
  );
}
