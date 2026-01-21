"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const ExploreSection = () => {
  const [isSafari, setIsSafari] = useState(false);

  useEffect(() => {
    const isSafariBrowser = /^((?!chrome|android).)*safari/i.test(
      navigator.userAgent
    );
    setIsSafari(isSafariBrowser);
  }, []);

  return (
    <section className="w-full bg-white px-6 lg:px-16 py-8 pb-10 relative z-30 overflow-x-hidden">
      <div className="w-full mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,60%)_minmax(0,40%)] gap-12 items-stretch">

          {/* LEFT CONTENT */}
        <div className="space-y-6 relative pb-4 md:pb-1 lg:pb-16 xl:pb-6">



            {/* md → <lg : heading + small logos inline */}
            <div className="hidden md:flex lg:hidden justify-between items-start gap-6 mt-12">
              <h2 className="text-3xl font-extrabold text-gray-800 tracking-tight max-w-[70%]">
                Explore your Potential at <br />
                <span className="text-[#FF8B61]">
                  Indira Global School of Business
                </span>
              </h2>

              <div className="flex gap-4">
                <div className="w-20 h-20 flex items-center justify-center bg-white rounded-full shadow-md">
                  <Image
                    src="/Home/AICTE1.png"
                    alt="AICTE Approved"
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                </div>

                <div className="w-20 h-20 flex items-center justify-center bg-white rounded-full shadow-md">
                  <Image
                    src="/Home/SPPU1.png"
                    alt="Affiliated to SPPU"
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Mobile & lg+ heading (original behaviour) */}
            <h2 className="md:hidden lg:block   text-xl sm:text-2xl lg:text-3xl font-extrabold text-gray-800 tracking-tight mb-12 mt-12">
              Explore your Potential at <br />
              <span className="text-[#FF8B61] text-2xl lg:text-4xl">
                Indira Global School of Business
              </span>
            </h2>

            <p className="text-gray-700 text-base sm:text-lg leading-relaxed text-justify">
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

            <p className="text-gray-700 text-base sm:text-lg leading-relaxed text-justify">
              <span className="font-semibold">IGSB</span> is located along the
              Mumbai–Pune Expressway, where our campus blends state-of-the-art
              infrastructure with a serene, natural setting, offering a fresh
              and inspiring environment that fosters innovation, focus, and
              holistic development.
            </p>

            <p className="text-gray-700 text-base sm:text-lg leading-relaxed text-justify">
              Through industry-integrated MBA programmes and rigorous
              experiential learning pedagogy, IGSB empowers future leaders with
              strategic acumen, adaptive mindset, and ethical grounding. We
              don’t just teach management—we cultivate leaders who create value,
              inspire change, and lead with vision.
            </p>
          </div>

          {/* RIGHT CONTENT */}
          <div className="w-full flex flex-col h-full gap-6">

            {/* Logos — mobile & lg+ only (unchanged) */}
            <div className="flex justify-center gap-6 md:hidden lg:flex">
              <div className="w-36 h-36 flex items-center justify-center bg-white rounded-full shadow-md">
                <Image
                  src="/Home/AICTE1.png"
                  alt="AICTE Approved"
                  width={150}
                  height={150}
                  className="object-contain"
                />
              </div>

              <div className="w-36 h-36 flex items-center justify-center bg-white rounded-full shadow-md">
                <Image
                  src="/Home/SPPU1.png"
                  alt="Affiliated to SPPU"
                  width={150}
                  height={150}
                  className="object-contain"
                />
              </div>
            </div>

            {/* VISION & MISSION CARD (icons restored) */}
            <div className="flex-1 bg-gradient-to-r from-[#10404A] to-[#1F6D71] text-white rounded-2xl p-8 text-center flex flex-col justify-center space-y-12">

              {/* Vision */}
              <div className="space-y-2">
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
                <p className="text-lg font-bold italic">
                  Shaping Industry-Ready Leaders for a Real Business World.
                </p>
              </div>

              {/* Mission */}
              <div className="space-y-2">
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
                <p className="text-lg font-bold italic">
                  To deliver outcome-driven MBA education through industry
                  integration, skill mastery, and leadership development.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>

      {!isSafari && (
        <div className="hidden lg:block absolute bottom-0 left-0 w-3/5 h-16 pointer-events-none z-40">
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

      {/* CHANAKYA — md → lg ONLY (above Vision/Mission) */}
{!isSafari && (
  <div className="hidden md:block lg:hidden w-full relative h-20 pointer-events-none">
    <div className="absolute animate-pace w-24 h-24 left-0">
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
