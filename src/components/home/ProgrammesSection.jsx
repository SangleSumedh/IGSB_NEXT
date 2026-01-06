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

const FinanceIcon = ({ size = 24, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 6181 6181" // Original large viewBox from CorelDRAW
    width={size}
    height={size}
    className={className}
    fill="currentColor" // This lets Tailwind control the color!
    shapeRendering="geometricPrecision"
    textRendering="geometricPrecision"
    imageRendering="optimizeQuality"
    fillRule="evenodd"
    clipRule="evenodd"
  >
    <g>
      <path d="M1750 808l411 429c101,-26 222,-95 336,-128 1458,-418 2792,753 2652,2182 -55,564 -305,958 -588,1248 -643,659 -1776,877 -2667,233 -699,-505 -1042,-1399 -786,-2259 38,-127 96,-235 127,-340l-417 -427c-6,6 -11,7 -12,12l-193 385c-696,1794 746,3760 2705,3591 729,-63 1297,-413 1654,-769 898,-896 1070,-2367 217,-3503 -548,-730 -1562,-1166 -2561,-985 -255,46 -721,196 -878,331z" />
      <path d="M2369 1634l-3 400c62,-9 119,-61 187,-91 241,-108 498,-146 762,-99 624,110 1078,677 1038,1323 -10,176 -53,325 -122,469 -194,408 -600,690 -1059,717 -853,52 -1510,-730 -1311,-1565 44,-185 125,-276 174,-410l-407 -9c-62,201 -128,307 -153,562 -59,597 218,1154 660,1474 692,499 1584,347 2102,-158 556,-540 644,-1448 170,-2113 -384,-539 -1181,-884 -2038,-500z" />
      <path d="M1105 1094c-181,5 -563,-68 -591,125 -15,106 82,174 130,221l729 730c81,83 92,111 256,111 526,1 384,-63 669,221l496 497c67,70 193,242 319,120 132,-126 -46,-266 -102,-321 -89,-89 -167,-167 -256,-256l-372 -373c-138,-138 -102,-100 -102,-488 0,-251 -34,-239 -294,-497l-528 -528c-49,-49 -113,-150 -218,-144 -206,13 -130,399 -136,582z" />
      <path d="M2624 2260c25,69 95,129 148,164 208,-53 297,-113 545,-36 525,162 667,830 309,1214 -328,352 -1029,287 -1226,-267 -77,-218 -37,-364 26,-556l-148 -158c-237,372 -141,914 241,1218 382,304 944,216 1240,-73 482,-468 316,-1404 -430,-1591 -353,-88 -497,28 -705,85z" />
    </g>
  </svg>
);
/* ---------------- ICON RENDERER (NEW) ---------------- */
function RenderIcon({ spec, size = 28, className = "" }) {
  if (typeof spec.icon === "string") {
    return (
      <Image
        src={spec.icon}
        alt={spec.title}
        width={size}
        height={size}
        className={className}
      />
    );
  }

  const IconComponent = spec.icon.type;
  return <IconComponent size={size} className={className} />;
}
/* ---------------------------------------------------- */

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
    icon: <FinanceIcon size={20}/>,
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
            const left = 50 + 50 * Math.cos(radian);
            const top = 50 - 50 * Math.sin(radian);
            const isActive = index === activeIndex;

            return (
              <div
                key={index}
                className="absolute flex items-center group cursor-pointer"
                style={{
                  left: `${left}%`,
                  top: `${top}%`,
                  transform: "translate(-10%, -50%)",
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
                  <RenderIcon spec={spec} size={20} />
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
            <div className="absolute -right-6 -top-6 opacity-10 rotate-12 scale-150">
              <RenderIcon spec={activeSpec} size={180} />
            </div>

            {/* Animated Content */}
            <div
              key={activeIndex}
              className="relative z-10 animate-in fade-in slide-in-from-bottom-4 duration-500"
            >
              <div className="flex items-center gap-3 mb-4 text-orange-600">
                <RenderIcon spec={activeSpec} size={20} />
                <span className="text-sm font-bold tracking-wider uppercase">
                  Specialization
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
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
