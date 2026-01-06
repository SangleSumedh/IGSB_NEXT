"use client";

import React from "react";
import Image from "next/image";
// import { ArrowDownTrayIcon } from "@heroicons/react/24/outline"; // Optional icon, remove if not needed
import { ArrowDownFromLine } from "lucide-react";

function NewCTA() {
  return (
    <section className="w-full bg-gradient-to-r from-[#10404A] via-[#10404A] to-[#10404A] px-6  text-white relative overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          {/* LEFT SIDE: IMAGE (The "Confused" visual) */}
          <div className="w-full md:w-1/2 relative flex justify-center md:justify-end">
            <div className="relative z-10 w-full max-w-sm">
              <Image
                src="/Home/confused.png"
                alt="Confused student"
                width={400}
                height={400}
                className="object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500 ease-out"
              />

              {/* Creative Touch: Floating Question Mark Badge */}
              {/* <div className="absolute top-5 right-10 bg-[#FF8B61] text-[#10404A] w-16 h-16 flex items-center justify-center rounded-full text-4xl font-bold shadow-lg animate-bounce">
                ?
              </div> */}
            </div>
          </div>

          {/* RIGHT SIDE: TEXT & CTA */}
          <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
            <div className="space-y-2">
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
                Still Confused?
              </h2>
              <p className="text-xl md:text-2xl font-light text-white/90">
                Discover more about{" "}
                <span className="font-semibold text-[#FFCCBC]">IGSB</span>.
              </p>
            </div>

            {/* <p className="text-white/80 max-w-md mx-auto md:mx-0 text-sm md:text-base leading-relaxed">
              Find clarity in your career path. Download our comprehensive
              brochure to explore the curriculum, faculty, and placement
              opportunities that await you.
            </p> */}

            <div className="pt-2">
              <button className="group relative inline-flex items-center gap-3 bg-white text-[#10404A] px-8 py-4 rounded-full font-bold text-lg shadow-[0_4px_14px_0_rgba(0,0,0,0.39)] hover:shadow-[0_6px_20px_rgba(255,255,255,0.23)] hover:bg-[#f0f0f0] transition-all duration-300 transform hover:-translate-y-1">
                <span>Download Brochure</span>
                {/* Simple SVG Icon for download action */}
                <ArrowDownFromLine className="w-5 h-5 stroke-2 group-hover:animate-bounce" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewCTA;
