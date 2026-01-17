"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import { Store, FolderOpen, Gamepad2, Trophy, Calendar } from "lucide-react";
import ScrollCrushWrapper from "../ScrollCrushWrapper";
import ArambhaSection from "./ArambhaSection";
import { roadmapData } from "./roadmapdata";
import { arambhData } from "./arambhdata";
import ArambhaSectionMobile from "./ArambhSectionMobile";

gsap.registerPlugin(ScrollTrigger);

export default function RoadmapSection() {
  const containerRef = useRef(null);
  const rightSideRef = useRef(null);

  useEffect(() => {
    /* ---------------- LENIS SETUP ---------------- */
    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    /* 🔥 CONNECT LENIS TO SCROLLTRIGGER */
    ScrollTrigger.scrollerProxy(document.body, {
      scrollTop(value) {
        if (arguments.length) {
          lenis.scrollTo(value, { immediate: true });
        } else {
          return window.scrollY;
        }
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
    });

    lenis.on("scroll", ScrollTrigger.update);
    ScrollTrigger.refresh();

    /* ---------------- GSAP LOGIC ---------------- */
    const ctx = gsap.context(() => {
      const rightSide = rightSideRef.current;
      if (!rightSide) return;

      const scrollDistance = rightSide.scrollHeight - window.innerHeight;

      gsap.to(rightSide, {
        y: -scrollDistance,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,

          end: () => `+=${scrollDistance}`,
          pin: true,
          scrub: true,
          anticipatePin: 1,
        },
      });
    }, containerRef);

    return () => {
      ctx.revert();
      lenis.destroy();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div className="bg-[#050110] text-white">
      <div
        ref={containerRef}
        className="relative h-screen bg-gradient-to-r from-[#10404A] to-[#1F6D71]"
      >
        <div className="max-w-full mx-auto h-full flex px-10">
          {/* LEFT */}
          <div className="w-2/4 flex flex-col justify-center px-8">
            <h1 className="text-5xl lg:text-6xl font-black uppercase mb-6 tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-orange-400 to-orange-400">
                Metamorphosis
              </span>
            </h1>

            <p className="text-white mb-10 max-w-md text-2xl">
              Experience the journey through our planned phases.
            </p>

            {/* Image */}
            <div className="relative w-100 h-100">
              <img
                src="/chanu/chanucute.png"
                alt="Metamorphosis visual"
                className="w-full h-full object-cover rounded-2xl
                 "
              />

              {/* Subtle glow */}
              {/* <div
                className="absolute inset-0 rounded-2xl
                    bg-purple-500/20 blur-2xl -z-10"
              /> */}
            </div>
          </div>

          {/* RIGHT */}
          <div className="w-2/4 relative overflow-hidden">
            <div ref={rightSideRef} className="pt-[5vh] pb-[5vh]">
              {roadmapData.map((item, i) => (
                <div
                  key={i}
                  className={`mb-[5vh] last:mb-0 ${
                    i === 0 ? "-mt-[5vh] pt-5" : ""
                  }`}
                >
                  {/* CARD */}
<div
  className="ml-10 relative flex items-stretch
    /* GLASS EFFECT */
    bg-white/5 backdrop-blur-md
    /* BORDER: Very subtle, lights up slightly on hover */
    border border-white/10 hover:border-orange-400/30
    rounded-2xl overflow-hidden
    /* SHADOW: Soft dark shadow for depth */
    shadow-md
    transition-all duration-300 group"
>
  {/* LEFT: TEXT CONTENT (50% Width to keep text close to image) */}
  <div className="relative z-10 w-1/2 p-6 flex flex-col justify-center gap-3">
    
    {/* Topic: Modern "Pill" Badge Style */}
    <span className="w-fit text-xs font-bold uppercase tracking-widest text-orange-400 bg-orange-400/10 px-3 py-1 rounded-full border border-orange-400/20">
      {item.topic}
    </span>

    {/* Name: Turns Orange on Hover */}
    <h3 className="text-3xl font-bold text-white group-hover:text-orange-400 transition-colors duration-300">
      {item.name}
    </h3>

    {/* Designation: Clean Gray */}
    <p className="text-gray-300 font-medium text-sm border-l-2 border-orange-400/50 pl-3">
      {item.designation}
    </p>

    {/* Company Logo: Clean White Box for visibility */}
    <div
      className="w-28 h-12 bg-white rounded-lg mt-2
      flex items-center justify-center shadow-lg p-2 opacity-30 group-hover:opacity-100 transition-opacity"
    >
      <img
        src={item.companyLogo}
        alt="Company logo"
        className="w-full h-full object-contain"
      />
    </div>
  </div>

  {/* RIGHT: FULL-BLEED IMAGE (50% Width) */}
  <div className="absolute right-0 top-0 h-full w-1/2">
    {/* Image: Slight zoom on hover */}
    <img
      src={item.image}
      alt={item.name}
      className="w-full h-full object-cover group-hover:grayscale-0 "
    />

    {/* FADE OVERLAY: Matches your Dark Teal Background (#10404A) */}
    <div
      className="absolute inset-0
        bg-gradient-to-l
                 from-transparent
                 via-[#050110]/20
                 to-[#050110]/50"
      
    />
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

        {/* MOBILE  (fix this later while making it responsive)*/}
        <div className="block md:hidden">
          <ArambhaSectionMobile data={arambhData} />
        </div>
      </div>
    </div>
  );
}
