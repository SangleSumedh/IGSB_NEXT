"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Megaphone,
  CircleDollarSign,
  Users,
  Settings,
  LineChart,
  ArrowRight,
} from "lucide-react";

const specializations = [
  {
    title: "Marketing Management",
    icon: <Megaphone size={20} />,
    angle: 55,
    description:
      "Master the art of consumer behavior, digital marketing strategies, and brand management. Learn to drive growth and create value in competitive markets.",
  },
  {
    title: "Finance Management",
    icon: <CircleDollarSign size={20} />,
    angle: 33,
    description:
      "Gain expertise in financial analysis, investment banking, and corporate finance. Develop the skills to manage assets and make data-driven financial decisions.",
  },
  {
    title: "HR Management",
    icon: <Users size={20} />,
    angle: 12,
    description:
      "Focus on talent acquisition, organizational behavior, and employee development. Learn to build and manage high-performing teams in diverse workplaces.",
  },
  {
    title: "OPS Management",
    icon: <Settings size={20} />,
    angle: -9,
    description:
      "Streamline business operations with supply chain management, logistics, and quality control. Optimize processes to improve efficiency and reduce costs.",
  },
  {
    title: "BA Management",
    icon: <LineChart size={20} />,
    angle: -30,
    description:
      "Leverage data analytics and business intelligence to solve complex problems. Bridge the gap between IT and business to drive strategic innovation.",
  },
];

export default function ProgrammesSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeSpec = specializations[activeIndex];

  return (
    <section className="relative w-full h-screen overflow-hidden bg-white font-sans flex items-center">
      {/* IMAGE AT BOTTOM LEFT */}
      <div className="absolute bottom-0 left-0 w-[50vw] h-[80vh] z-20 pointer-events-none">
        <Image
          src="/Home/MBASpec.png"
          alt="MBA Specializations"
          fill
          className="object-contain object-bottom left-0"
          priority
        />
      </div>

      {/* LEFT SIDE: CIRCLE INTERFACE */}
      <div className="absolute -bottom-10 left-20 w-[45vw] h-[45vw] z-10">
        <div className="relative w-full h-full rounded-full border-[3px] border-orange-500">
          {specializations.map((spec, index) => {
            const radian = (spec.angle * Math.PI) / 180;
            const left = 65 + 50 * Math.cos(radian);
            const top = 50 - 50 * Math.sin(radian);
            const isActive = index === activeIndex;

            return (
              <div
                key={index}
                className="absolute flex items-center group cursor-pointer"
                style={{
                  left: `${left}%`,
                  top: `${top}%`,
                  transform: "translate(-50%, -50%)",
                }}
                onClick={() => setActiveIndex(index)}
              >
                {/* ICON BUBBLE */}
                <div
                  className={`
                    w-12 h-12 md:w-16 md:h-16 rounded-full
                    flex items-center justify-center
                    shadow-lg z-30 transition-all duration-300
                    ${
                      isActive
                        ? "bg-orange-600 text-white scale-125 border-4 border-orange-200"
                        : "bg-white border-2 border-orange-500 text-black group-hover:scale-110"
                    }
                  `}
                >
                  {spec.icon}
                </div>

                {/* LABEL */}
                <span
                  className={`
                    ml-4 whitespace-nowrap text-sm md:text-lg font-bold
                    px-3 py-1 rounded backdrop-blur-md transition-all duration-300
                    ${
                      isActive
                        ? "text-orange-600 bg-white shadow-sm"
                        : "text-slate-800 bg-white/60 group-hover:text-orange-600"
                    }
                  `}
                >
                  {spec.title}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* RIGHT SIDE: INFO CARD */}
      <div className="absolute right-0 top-0 w-full md:w-1/3 h-full flex items-center justify-center p-8 z-40 pointer-events-none">
        <div className="pointer-events-auto max-w-lg w-full">
          <div className="bg-white/90 backdrop-blur-xl border border-white/20 shadow-2xl rounded-3xl p-8 md:p-12 relative overflow-hidden transition-all duration-500">
            {/* Decorative Background Icon */}
            <div className="absolute -right-6 -top-6 text-orange-100 opacity-50 rotate-12 scale-150">
              {React.cloneElement(activeSpec.icon, { size: 180 })}
            </div>

            {/* Animated Content */}
            <div
              key={activeIndex}
              className="relative z-10 animate-in fade-in slide-in-from-bottom-4 duration-500"
            >
              <div className="flex items-center gap-3 mb-4 text-orange-600">
                {activeSpec.icon}
                <span className="text-sm font-bold tracking-wider uppercase">
                  Specialization
                </span>
              </div>

              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                {activeSpec.title}
              </h2>

              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                {activeSpec.description}
              </p>

              <button className="group flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition-colors duration-300">
                Explore Course
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
