"use client";

import React from "react";
import { Briefcase, Clock, TrendingUp, Target, Award } from "lucide-react";

const pillars = [
  {
    title: "Industry Readiness from Day One",
    icon: <Briefcase />,
  },

  {
    title: "480+ Hours of Career Leadership Development Programme",
    icon: <TrendingUp />,
  },
  {
    title: "200+ Hours of Industry Readiness Programme",
    icon: <Clock />,
  },
  {
    title: "Placement-Driven Curriculum Design",
    icon: <Award />,
  },
];

export default function PillarsSection() {
  return (
    // Background Gradient: Approximating the Brown/Orange to Dark Teal fade
    <section className="w-full bg-gradient-to-r from-[#FF8B61] via-[#10404A]  to-[#10404A] px-16 py-8  text-white">
      <div className="">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-8">
          {/* --- LEFT SIDE: HEADING --- */}
          <div className="lg:w-[45%] text-left space-y-2">
            <h3 className="text-2xl md:text-4xl font-light text-white/90">
              Our Promise Pillars to
            </h3>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
              Every MBA Student
            </h2>
            <h3 className="text-2xl md:text-4xl font-light text-white/90">
              to Build their Foundation:
            </h3>
          </div>

          {/* --- RIGHT SIDE: PILLARS LIST --- */}
          <div className="lg:w-[55%] w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-6">
              {pillars.map((pillar, index) => (
                <div key={index} className="flex items-center gap-4 group">
                  {/* ICON PLACEHOLDER (Circle with Orange Border) */}
                  <div className="shrink-0 relative w-16 h-16">
                    {/* The orange ring border */}
                    <div className="absolute inset-0 rounded-full border-[3px] border-orange-500 bg-white flex items-center justify-center">
                      {/* Placeholder Icon inside */}
                      {React.cloneElement(pillar.icon, {
                        className: "w-8 h-8 text-slate-800", // Dark icon inside white circle
                      })}
                    </div>
                  </div>

                  {/* TEXT */}
                  <p className="text-lg font-bold leading-tight text-white">
                    {pillar.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
