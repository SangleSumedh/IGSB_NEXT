"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
      }
    );
  };

  return (
    <section
      ref={sectionRef}
      className="relative pt-4 overflow-hidden min-h-[500px]"
    >
      {/* ➤ BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0">
        <img
          src="/placementbanner233.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0" />
      </div>

      {/* ➤ CONTENT CONTAINER */}
      {/* 👇 KEY CHANGES HERE:
         1. Removed 'mr-10' from default -> Added 'md:mr-10' (Restores your desktop margin)
         2. Added 'mx-4' for mobile (gives side breathing room on phone)
         3. Changed 'mb-30 pb-30' -> 'mb-10 pb-10' for mobile -> 'md:mb-30 md:pb-30' for desktop
      */}
      <div className="relative z-10 w-full max-w-3xl mx-auto px-2 py-2  md:mx-auto md:mr-10 mb-10 pb-10 md:mb-30 md:pb-30">
        
        {/* Section Title */}
        <div className="text-center mb-5">
          <h2 className="text-xl md:text-xl lg:text-2xl font-bold text-secondary uppercase tracking-wide">
            Career Outcomes That <span className="text-primary">Speak</span> for
            Themselves
          </h2>
        </div>

        {/* Stats Cards Grid */}
        <div className="grid grid-cols-4 sm:grid-cols-4 lg:grid-cols-4 gap-2">
          {statsConfig.map((stat, index) => (
            <div
              key={index}
              ref={(el) => (animatedCardsRef.current[index] = el)}
              className="flex flex-col h-full rounded-lg overflow-hidden shadow-md transform transition-transform hover:scale-102 opacity-0 group"
            >
              {/* Top Half */}
              <div className="bg-[#3aafa9] md:py-3 md:px-3 text-center h-10 flex items-center justify-center shrink-0">
                <h3 className="text-xl lg:text-2xl font-bold text-white">
                  {counts[index].toFixed(stat.decimal)}
                  {stat.suffix}
                </h3>
              </div>

              {/* Bottom Half */}
              <div className="flex-grow flex items-center justify-center bg-secondary py-2 px-3 text-center border-t-2 border-secondary group-hover:bg-[#3aafa9] transition-colors duration-300">
                <p className="text-white font-bold text-xs uppercase tracking-wider">
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