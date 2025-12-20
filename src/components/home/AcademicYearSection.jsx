"use client";

import React, { useEffect, useRef } from "react";
import ProgramList from "./ProgramList";
import ApplyForm from "./ApplyForm";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AcademicYearSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const sec = sectionRef.current;
    if (!sec) return;

    // Fade-in blocks
    gsap.fromTo(
      sec.querySelectorAll(".fade-up"),
      { autoAlpha: 0, y: 40 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 1.1,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: sec,
          start: "top 85%",
          once: true,
        },
      }
    );

    // Left content
    gsap.fromTo(
      sec.querySelectorAll(".fade-left"),
      { autoAlpha: 0, x: -50 },
      {
        autoAlpha: 1,
        x: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sec.querySelector(".left-content"),
          start: "top 90%",
          once: true,
        },
      }
    );

    // Right content
    gsap.fromTo(
      sec.querySelectorAll(".fade-right"),
      { autoAlpha: 0, x: 50 },
      {
        autoAlpha: 1,
        x: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sec.querySelector(".right-content"),
          start: "top 90%",
          once: true,
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-gray-50 px-4 sm:px-6 py-8 sm:py-12"
    >
      <div
        className="
          max-w-7xl mx-auto
          grid grid-cols-1 lg:grid-cols-10
          gap-6 sm:gap-8 lg:gap-12
        "
      >
        {/* LEFT: Program List (70%) */}
        <div className="col-span-1 lg:col-span-7 w-full h-full left-content fade-left">
          <ProgramList />
        </div>

        {/* RIGHT: Apply Form (30%) - Stack on mobile */}
        <div className="col-span-1 lg:col-span-3 w-full h-full right-content fade-right">
          <ApplyForm />
        </div>
      </div>
    </section>
  );
};

export default AcademicYearSection;