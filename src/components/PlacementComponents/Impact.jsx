"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function Impact() {
  const statsConfig = [
    { target: 21, label: "Highest Package", suffix: " LPA", decimal: 0 },
    { target: 8.16, label: "Average Package", suffix: " LPA", decimal: 2 },
    { target: 650, label: "Recruiting Companies", suffix: "+", decimal: 0 },
    { target: 100, label: "Placement Assistance", suffix: "%", decimal: 0 },
  ];

  const [counts, setCounts] = useState(statsConfig.map(() => 0));
  const sectionRef = useRef(null);
  const animatedCardsRef = useRef([]);
  const hasAnimatedRef = useRef(false);

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

  const animateCards = () => {
    gsap.fromTo(
      animatedCardsRef.current,
      { autoAlpha: 0, y: 40 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.15,
      },
    );
  };

  return (
    <section ref={sectionRef} className="relative w-full min-h-[400px] md:min-h-[800px]">
      {/* ➤ BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0 h-[400px] md:h-full">
        <Image
          src="/placement/impact3.webp"
          alt="Background"
          height={400}
          width={1920}
          className="w-full h-full object-cover pointer-none::select-none "
          unoptimized
          priority
        />
      </div>

      <div className="relative inset-0 z-10 w-full max-w-7xl mx-auto px-2 py-2 md:mx-auto md:pt-10">
        {/* Section Title */}
        <div className="text-center md:mt-5 md:mb-5">
          <h2 className="text-xl md:text-xl lg:text-3xl font-bold text-secondary uppercase tracking-wide">
            Career Outcomes That <span className="text-primary">Speak</span> for
            Themselves
          </h2>
        </div>

        {/* Stats Cards Grid */}
        {/* CHANGED: gap-4 to gap-3 for tighter mobile view, kept md:gap-6 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 ">
          {statsConfig.map((stat, index) => (
            <div
              key={index}
              ref={(el) => (animatedCardsRef.current[index] = el)}
              className="flex flex-col h-full rounded-xl overflow-hidden shadow-xl transform transition-transform hover:scale-105 opacity-0 group"
            >
              {/* CHANGES MADE HERE:
                  1. Padding: 'p-2' (mobile) -> 'md:px-6 md:py-6 lg:py-3' (desktop)
                  2. Height: 'h-14' (mobile compact) -> 'md:h-20' (desktop)
              */}
              <div className="bg-[#3aafa9] p-2 md:px-6 md:py-6 lg:py-3 lg:px-2 text-center h-10 md:h-20 flex items-center justify-center shrink-0">
                {/* Font size: text-lg (mobile) -> md:text-3xl (desktop) */}
                <h3 className="text-lg md:text-3xl xl:text-5xl font-extrabold text-white">
                  {counts[index].toFixed(stat.decimal)}
                  {stat.suffix}
                </h3>
              </div>

            
              <div className="flex-grow flex items-center justify-center bg-secondary py-2 px-1 md:py-3 md:px-2 text-center border-t-2 border-secondary group-hover:bg-[#3aafa9] transition-colors duration-300">
                {/* Font size: text-xs (mobile) -> text-md (desktop) */}
                <p className="text-white font-bold uppercase tracking-wider p-1 md:p-3 text-xs md:text-lg leading-tight">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
