"use client";

import React from "react";
// High-quality icons make the section look more professional
import { Briefcase, Clock, TrendingUp, Target, Award } from "lucide-react";

const pillars = [
  {
    title: "Industry Readiness from Day One",
    icon: <Briefcase className="w-6 h-6 text-blue-600" />,
  },
  {
    title: "200+ Hours of Industry Readiness Programme",
    icon: <Clock className="w-6 h-6 text-blue-600" />,
  },
  {
    title: "480+ Hours of Career Leadership Development Programme",
    icon: <TrendingUp className="w-6 h-6 text-blue-600" />,
  },
  {
    title: "Niche-Based Specialization Tracks",
    icon: <Target className="w-6 h-6 text-blue-600" />,
  },
  {
    title: "Placement-Driven Curriculum Design",
    icon: <Award className="w-6 h-6 text-blue-600" />,
  },
];

export default function PillarsSection() {
  return (
    <section className="w-full bg-slate-50 px-6 py-20">
      <div className="max-w-7xl mx-auto">
        {/* HEADING SECTION */}
        <div className="mb-12 text-center ">
          <h2 className="text-2xl md:text-3xl font-extrabold text-secondary mb-4 tracking-tight">
            Our Promise Pillars to Every MBA Student to Build their Foundation:
          </h2>
        </div>

        {/* CARDS GRID */}
        {/* Switched from overflow-x-auto to a responsive grid for a more stable professional layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="group relative bg-white border border-slate-200 rounded-xl p-8
              transition-all duration-300 hover:shadow-xl hover:border-secondary
              flex flex-col items-center text-center"
            >
              {/* ICON CIRCLE */}
              <div
                className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center mb-6
                transition-colors duration-300 group-hover:bg-secondary"
              >
                {/* Clone the icon to change its color on hover */}
                {React.cloneElement(pillar.icon, {
                  className:
                    "w-7 h-7 transition-colors duration-300 group-hover:text-white text-secondary",
                })}
              </div>

              {/* TEXT */}
              <p className="text-sm md:text-base font-semibold leading-relaxed text-slate-800">
                {pillar.title}
              </p>

              {/* SUBTLE ACCENT LINE */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-secondary transition-all duration-300 group-hover:w-full rounded-b-xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
