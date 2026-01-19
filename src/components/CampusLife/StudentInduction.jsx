"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { roadmapData } from "./roadmapdata";
import { arambhData } from "./arambhdata";
import ArambhaSection from "./ArambhaSection";
import ArambhaSectionMobile from "./ArambhSectionMobile";

gsap.registerPlugin(ScrollTrigger);

export default function RoadmapSection() {
  const containerRef = useRef(null);
  const rightSideRef = useRef(null);

  useEffect(() => {
    /* ---------------- GSAP CONTEXT ---------------- */
    const ctx = gsap.context(() => {
      const rightSide = rightSideRef.current;
      const container = containerRef.current;

      if (!rightSide || !container) return;

      // 1. Calculate dynamic distance
      // We wrap this in a function so ScrollTrigger can re-call it on resize
      const getScrollDistance = () =>
        rightSide.scrollHeight - window.innerHeight;

      // 2. THE FIX: Use fromTo() for absolute control
      gsap.fromTo(
        rightSide,
        {
          y: 0, // Force start position
        },
        {
          y: () => -getScrollDistance(), // Dynamic end position
          ease: "none",
          immediateRender: false, // Wait for trigger
          scrollTrigger: {
            trigger: container,
            start: "top top",
            end: () => `+=${getScrollDistance()}`,
            pin: true,
            scrub: 1, // 1s lag for smoothness
            anticipatePin: 1,

            // 3. Robustness Settings
            invalidateOnRefresh: true, // Recalculate values on resize
            fastScrollEnd: true, // Prevents glitching on super-fast scrolls
          },
        },
      );
    }, containerRef); // Scope selectors to this component

    return () => ctx.revert(); // Cleanup
  }, []);

  return (
    <div className="bg-[#050110] text-white">
      <div
        ref={containerRef}
        className="relative h-screen bg-gradient-to-r from-[#10404A] to-[#1F6D71]"
      >
        <div className="max-w-full mx-auto h-full flex px-10">
          {/* LEFT */}
          <div className="relative z-0 w-2/4 flex flex-col px-8 mt-20">
            <h1 className="text-5xl lg:text-6xl font-black uppercase mb-6 tracking-tight">
              <span className="bg-clip-text text-transparent bg-[#082328]">
                Metamorphosis
              </span>
            </h1>

            <p className="text-white mb-10 max-w-md text-2xl">
              Experience the journey through our planned phases.
            </p>
            {/* THE LIGHT SOURCE */}

            <div className="absolute top-0 -left-64 w-[800px] h-[800px] bg-[#3aafa9] rounded-full blur-[180px] z-[-1] pointer-events-none"></div>
            {/* Image */}
            <div className="relative w-150 h-120 max-w-md ">
              <img
                src="/chanu/chanuhand2.png"
                alt="Metamorphosis visual"
                className="w-full h-full object-contain "
              />
            </div>
          </div>

          {/* RIGHT */}
          <div className="w-2/4 relative overflow-hidden">
            <div
              ref={rightSideRef}
              className="pt-[5vh] pb-[5vh] will-change-transform"
            >
              {roadmapData.map((item, i) => (
                <div
                  key={i}
                  className={`mb-[5vh] last:mb-0 ${
                    i === 0 ? "-mt-[5vh] pt-5" : ""
                  }`}
                >
                  {/* CARD */}
                  <div className="ml-10 relative flex items-stretch bg-[#3aafa9] border border-white/10 hover:border-orange-400/30 rounded-2xl overflow-hidden shadow-md transition-all duration-300 group">
                    {/* TEXT CONTENT */}
                    <div className="relative z-10 w-1/2 p-6 flex flex-col justify-center gap-3">
                      <span className="w-fit text-xs font-bold uppercase tracking-widest text-secondary px-3 py-1 rounded-full border border-secondary">
                        {item.topic}
                      </span>
                      <h3 className="text-3xl font-bold text-secondary transition-colors duration-300">
                        {item.name}
                      </h3>
                      <p className="text-white font-medium text-sm border-l-2 border-white pl-3">
                        {item.designation}
                      </p>
                      <div className="w-28 h-12 bg-white rounded-lg mt-2 flex items-center justify-center shadow-lg p-2">
                        <img
                          src={item.companyLogo}
                          alt="Company logo"
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>

                    {/* IMAGE CONTENT */}
                    <div className="absolute right-0 top-0 h-full w-1/2">
                      <span className="absolute top-2 right-2 bg-white/40 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm z-20">
                        {item.date}
                      </span>
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#050110]/20 to-[#050110]/50" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <div className="hidden md:block">
          <ArambhaSection data={arambhData} />
        </div>
        <div className="block md:hidden">
          <ArambhaSectionMobile data={arambhData} />
        </div>
      </div>
    </div>
  );
}
