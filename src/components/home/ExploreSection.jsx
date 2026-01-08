"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const ExploreSection = () => {
  const [isSafari, setIsSafari] = useState(false);

  useEffect(() => {
    // Robust regex to detect Safari (desktop or mobile)
    const isSafariBrowser = /^((?!chrome|android).)*safari/i.test(
      navigator.userAgent
    );
    setIsSafari(isSafariBrowser);
  }, []);

  return (
    // Added 'pb-10' to section to ensure text doesn't overlap the walker at the bottom
    <section className="w-full bg-white px-6 md:px-16 py-8 pb-10 relative z-30 overflow-x-hidden">
      {/* FULL-WIDTH SAFE CONTAINER */}
      <div className="w-full mb-8">
        {" "}
        {/* Added margin-bottom to clear space for him */}
        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,60%)_minmax(0,40%)] gap-12 items-stretch">
          {/* LEFT CONTENT */}
          <div className="space-y-6 relative">
            <h2 className="text-4xl sm:text-2xl xl:text-4xl font-extrabold text-gray-800 tracking-tight mb-12 mt-12">
              Explore your Potential at <br />{" "}
              <span className="text-[#FF8B61]">
                Indira Global School of Business
              </span>
            </h2>

            <p className="text-gray-700 text-base sm:text-lg md:text-lg leading-relaxed text-justify">
              We develop globally competent, purpose-driven leaders equipped to
              excel in today’s fast-evolving business landscape. As a premier
              <span className="font-semibold">
                {" "}
                AICTE-approved MBA institute
              </span>
              , our vision is to be a hub of academic excellence that nurtures
              strategic thinkers who lead with integrity, empathy, and a
              commitment to sustainable and socially responsible business
              practices.
            </p>

            <p className="text-gray-700 text-base sm:text-lg md:text-lg leading-relaxed text-justify">
              <span className="font-semibold">IGSB</span> is located along the
              Mumbai–Pune Expressway, where our campus blends state-of-the-art
              infrastructure with a serene, natural setting, offering a fresh
              and inspiring environment that fosters innovation, focus, and
              holistic development.
            </p>

            <p className="text-gray-700 text-base sm:text-lg md:text-lg leading-relaxed text-justify">
              Through industry-integrated MBA programmes and rigorous
              experiential learning pedagogy, IGSB empowers future leaders with
              strategic acumen, adaptive mindset, and ethical grounding. We
              don’t just teach management—we cultivate leaders who create value,
              inspire change, and lead with vision.
            </p>
          </div>

          {/* RIGHT CONTENT */}
          <div className="w-full flex flex-col h-full gap-6">
            {/* LOGOS ROW — CENTERED */}
            <div className="flex justify-center gap-6">
              <div className="rounded-full shadow-[0_12px_30px_rgba(0,0,0,0.20)]">
                <div className="w-36 h-36 flex items-center justify-center bg-white rounded-full shadow-md">
                  <Image
                    src="/Home/AICTE1.png"
                    alt="AICTE Approved"
                    width={150}
                    height={150}
                    className="object-cover rounded-full"
                  />
                </div>
              </div>

              <div className="rounded-full shadow-[0_12px_30px_rgba(0,0,0,0.20)]">
                <div className="w-36 h-36 flex items-center justify-center bg-white rounded-full shadow-md">
                  <Image
                    src="/Home/SPPU1.png"
                    alt="Affiliated to SPPU"
                    width={150}
                    height={150}
                    className="object-cover rounded-full"
                  />
                </div>
              </div>
            </div>

            {/* VISION & MISSION CARD */}
            <div className="flex-1 bg-gradient-to-r from-[#10404A] to-[#1F6D71] text-white rounded-2xl p-8 text-center flex flex-col justify-center space-y-12">
              {/* VISION */}
              <div className="space-y-1">
                <Image
                  src="/Home/visionsymbol1.png"
                  alt="Vision"
                  width={44}
                  height={44}
                  className="mx-auto"
                />
                <h3 className="text-lg font-semibold tracking-widest text-[#fc7116]">
                  VISION
                </h3>
                <p className="text-base sm:text-lg font-bold leading-relaxed font-['baskerville-bt-bold'] italic">
                  Shaping Industry-Ready Leaders for a Real Business World.
                </p>
              </div>

              {/* MISSION */}
              <div className="space-y-1">
                <Image
                  src="/Home/Missionsymbol1.png"
                  alt="Mission"
                  width={44}
                  height={44}
                  className="mx-auto"
                />
                <h3 className="text-lg font-semibold tracking-widest text-[#fc7116]">
                  MISSION
                </h3>
                <p className="text-base sm:text-lg font-bold leading-relaxed font-['baskerville-bt-bold'] italic">
                  To deliver outcome-driven MBA education through industry
                  integration, skill mastery, and leadership development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- CHANAKYA ANIMATION (Absolute Bottom of ExploreSection) --- */}
      {/* 1. Positioned absolute bottom-0 to sit on the "border" 
          2. Width is full (w-full) relative to the section
          3. z-index ensures he walks In FRONT of everything in this section
      */}
      {!isSafari && (
        <div className="hidden md:block absolute bottom-0 left-0 w-3/5 h-16 pointer-events-none z-40">
          <div className="absolute bottom-0 animate-pace w-24 h-24">
            <video
              src="/chanakya.webm"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default ExploreSection;
