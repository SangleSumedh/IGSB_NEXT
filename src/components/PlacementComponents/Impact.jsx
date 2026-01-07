"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Impact() {
  // ➤ Updated Config with 4 items
  const statsConfig = [
    { target: 21, label: "Highest Package", suffix: " LPA", decimal: 0 },
    { target: 8.16, label: "Average Package", suffix: " LPA", decimal: 2 }, // Changed to 2 decimals for precision
    { target: 650, label: "Recruiting Companies", suffix: "+", decimal: 0 },
    { target: 100, label: "Placement Assistance", suffix: "%", decimal: 0 },
  ];

  const [counts, setCounts] = useState(statsConfig.map(() => 0));
  const sectionRef = useRef(null);
  const animatedCardsRef = useRef([]);
  const hasAnimatedRef = useRef(false);

  // ➤ Trigger animations
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    ScrollTrigger.create({
      trigger: section,
      start: "top 80%",
      onEnter: () => {
        if (!hasAnimatedRef.current) {
          animateNumbers();
          animateCards();
          hasAnimatedRef.current = true;
        }
      },
    });
  }, []);

  // ➤ Count animation logic
  const animateNumbers = () => {
    const duration = 2000;
    const frameRate = 30;

    statsConfig.forEach((stat, i) => {
      let value = 0;
      const increment = stat.target / (duration / frameRate);

      const interval = setInterval(() => {
        value += increment;
        if (value >= stat.target) {
          value = stat.target;
          clearInterval(interval);
        }
        setCounts((prev) => {
          const newCounts = [...prev];
          newCounts[i] = value;
          return newCounts;
        });
      }, 1000 / frameRate);
    });
  };

  // ➤ GSAP Card Reveal Animation
  const animateCards = () => {
    gsap.fromTo(
      animatedCardsRef.current,
      { autoAlpha: 0, y: 40 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.15, // Slightly faster stagger for 4 cards
      }
    );
  };

  return (
    <section
      ref={sectionRef}
      className="relative bg-gradient-to-r
      from-[#10404A]
      to-[#1F6D71] py-2 overflow-hidden" // Main Background: Dark Slate
    >
      <div className="max-w-9xl mx-auto px-6 flex flex-col xl:flex-row items-center justify-between gap-6">
        {/* LEFT SIDE: Text & Cards */}
        <div className="w-full xl:w-3/5 z-10">
          {/* Section Title */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-10 uppercase tracking-wide pl-4">
            Career Outcomes That Speak for Themselves
          </h2>

          {/* Stats Cards Grid - Updated for 4 items */}
          {/* Stats Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {statsConfig.map((stat, index) => (
              <div
                key={index}
                ref={(el) => (animatedCardsRef.current[index] = el)}
                // FIX 1: Add 'flex flex-col h-full'
                // 'h-full' makes it fill the grid cell height.
                // 'flex-col' lets us control the height of children.
                className="flex flex-col h-full rounded-xl overflow-hidden shadow-xl transform transition-transform hover:scale-105 opacity-0 group"
              >
                {/* Top Half: Fixed Height */}
                <div className="bg-white py-3 px-2 text-center h-22 flex items-center justify-center shrink-0">
                  <h3 className="text-3xl lg:text-4xl font-extrabold text-[#ff885b]">
                    {counts[index].toFixed(stat.decimal)}
                    {stat.suffix}
                  </h3>
                </div>

                {/* Bottom Half: Fills remaining space */}
                {/* FIX 2: Add 'flex-grow' and centering classes */}
                <div className="flex-grow flex items-center justify-center bg-[#3aafa9] py-3 px-2 text-center border-t-2 border-[#3aafa9] group-hover:bg-[#2b3740] transition-colors duration-300">
                  <p className="text-white font-bold text-base uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE: Graduate Image */}
        <div className="w-full xl:w-2/5 flex justify-center xl:justify-end relative z-0 mt-8 xl:mt-0 -mr-6 xl:-mr-12">
          <img
            src="/graduation.png"
            alt="Graduate Student"
            className="w-full max-w-[300px] xl:max-w-full object-contain drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
