"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  PieChart,
  CircleDollarSign,
  Users,
  Settings,
  LineChart,
  ArrowRight,
} from "lucide-react";

/* ---------------- CUSTOM FINANCE ICON ---------------- */
const FinanceIcon = ({ size = 24, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 6181 6181"
    width={size}
    height={size}
    className={className}
    fill="currentColor"
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

/* ---------------- ICON RENDERER ---------------- */
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

/* ---------------- DATA ---------------- */
const specializations = [
  {
    title: "Marketing Management",
    icon: <PieChart size={20} />,
    angle: 70,
    description:
      "The MBA in Marketing at IGSB develops market-oriented, data-driven marketing leaders equipped to operate in dynamic and competitive environments, including emerging business models such as quick commerce, e-commerce, and dark store ecosystems. The programme blends marketing strategy, consumer behaviour, brand management, sales management, and digital marketing analytics, ensuring relevance across traditional, digital, and platform-led markets. Students learn to translate market insights into scalable business growth, preparing them for roles in brand management, digital marketing, sales leadership, market research, and growth strategy across consumer-centric sectors and technology-enabled commerce platforms.",
  },
  {
    title: "Finance Management",
    icon: <CircleDollarSign size={20} />,
    angle: 45,
    description:
      "The MBA in Finance at IGSB prepares students for analytical, decision-driven roles in the financial ecosystem. The curriculum emphasizes financial management, corporate finance, financial modelling, investment analysis, risk management, and strategic financial decision-making, aligned with real-world business scenarios. Students gain exposure to capital markets, valuation, budgeting, compliance, and fintech fundamentals, enabling them to contribute effectively in corporate finance, banking, consulting, investment analysis, and financial strategy roles across industries.",
  },
  {
    title: "Human Resource Management",
    icon: <Users size={20} />,
    angle: 25,
    description:
      "The MBA in Human Resources at IGSB is designed to develop strategic HR leaders capable of managing talent, culture, and organizational transformation in modern enterprises. The program integrates HR analytics, talent acquisition, learning & development, performance management, and HR technology, enabling students to move beyond transactional HR into business-driven people management. With a strong focus on employee lifecycle management, organizational behaviour, labour laws, and leadership development, graduates are prepared for roles in HR consulting, talent strategy, corporate HR, and people analytics within leading organizations.",
  },
  {
    title: "Operations & Supply Chain Management",
    icon: <Settings size={20} />,
    angle: 5,
    description:
      "The MBA in Operations & Supply Chain Management at IGSB focuses on building professionals who can optimize processes, manage complex supply networks, and drive operational excellence. The specialization covers operations strategy, supply chain planning, logistics management, procurement, quality systems, and lean methodologies. With increasing emphasis on data-driven operations, technology integration, and global supply chain resilience, students are trained for leadership roles in manufacturing, logistics, e-commerce, consulting, and operations strategy functions.",
  },
  {
    title: "Business Analytics Management",
    icon: <LineChart size={20} />,
    angle: -15,
    description:
      "The MBA in Business Analytics at IGSB is structured to create professionals who can convert data into strategic business insights. The specialization focuses on data analysis, business intelligence, predictive analytics, visualization tools, and decision science, aligned with managerial applications. By combining statistical thinking, analytical tools, and business context, students are prepared for high-impact roles in business analytics, consulting, strategy, operations analytics, and management decision-support functions in data-driven organizations.",
  },
];

export default function ProgrammesSection() {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(0);

  // 1. STATE: Track the current delay (default 5000ms)
  const [delay, setDelay] = useState(5000);

  const activeSpec = specializations[activeIndex];

  // 2. EFFECT: Use setTimeout to handle variable delays
  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % specializations.length);
      // After an auto-rotation, always reset speed to normal (5s)
      setDelay(5000);
    }, delay);

    return () => clearTimeout(timer);
  }, [activeIndex, delay]); // Re-runs whenever index changes (manual or auto)

  // 3. HANDLER: Manual select sets a long delay (10s)
  const handleManualSelect = (index) => {
    setActiveIndex(index);
    setDelay(10000); // Pause for 10 seconds before resuming auto-rotation
  };

  return (
    <section className="relative w-full bg-white font-sans">
      {/* DESKTOP LAYOUT - LG AND ABOVE */}
      <div className="hidden lg:block relative lg:h-[95vh] overflow-hidden flex items-center">
        {/* IMAGE AT BOTTOM LEFT */}
        <div className="absolute bottom-0 left-0 lg:w-[45vw] xl:w-[50vw] h-[80vh] z-20 pointer-events-none">
          <Image
            src="/Home/MBASpec.webp"
            alt="MBA Specializations"
            fill
            className="object-contain object-left-bottom left-0"
            priority
          />
        </div>

        {/* LEFT SIDE: CIRCLE INTERFACE */}
        <div className="absolute -bottom-[10%] lg:left-10 xl:left-16 lg:w-[min(40vw,50rem)] lg:h-[min(40vw,50rem)] xl:w-[min(45vw,60rem)] xl:h-[min(45vw,60rem)]">
          <div className="relative w-full h-full rounded-full border-4 border-[#fc7116] z-10">
            {specializations.map((spec, index) => {
              const radian = (spec.angle * Math.PI) / 180;
              const left = 50 + 50 * Math.cos(radian);
              const top = 50 - 50 * Math.sin(radian);
              const isActive = index === activeIndex;

              return (
                <div
                  key={index}
                  className="absolute flex items-center group cursor-pointer lg:[--base-left:52%] xl:[--base-left:50%]"
                  style={{
                    left: `calc(var(--base-left) + ${50 * Math.cos(radian)}%)`,
                    top: `${top}%`,
                    transform: "translate(-10%, -50%)",
                  }}
                  onClick={() => handleManualSelect(index)}
                >
                  {/* ICON BUBBLE */}
                  <div
                    className={`
                      lg:w-14 lg:h-14 xl:w-16 xl:h-16 rounded-full
                      flex items-center justify-center
                      z-30 cursor-pointer
                      transition-all duration-300 ease-out
                      hover:scale-110
                      active:scale-95
                      ${
                        isActive
                          ? `
                              bg-orange-600 text-white
                              border-4 border-orange-200
                              shadow-[0_0_0_0_rgba(252,113,22,0.6)]
                              animate-[pulseBorder_2s_ease-in-out_infinite]
                            `
                          : `
                              bg-white text-black
                              border-4 border-[#fc7116]
                              shadow-md
                            `
                      }
                    `}
                  >
                    <RenderIcon spec={spec} size={20} />
                  </div>

                  {/* LABEL */}
                  <span
                    className={`
                      ml-4 lg:w-40 xl:w-48 text-left leading-tight
                      lg:text-sm xl:text-base font-bold 
                      px-3 py-2 rounded-lg transition-all duration-300
                      cursor-pointer
                      ${
                        isActive
                          ? "text-[#fc7116]"
                          : "text-slate-800 group-hover:text-[#fc7116]"
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
        <div className="absolute  right-0 top-0 w-full lg:w-[40%] xl:w-1/3 h-[90%] flex items-center justify-center lg:p-4 xl:p-8 z-40 pointer-events-none">
          <div className="pointer-events-auto max-w-lg w-full">
            <div className="bg-[white/90] backdrop-blur-xl border border-white/20 shadow-2xl rounded-3xl lg:p-8 xl:p-12 relative overflow-hidden transition-all duration-500">
              {/* Decorative Background Icon */}
              <div className="absolute -right-6 -top-6 opacity-10 rotate-12 scale-150">
                <RenderIcon
                  spec={activeSpec}
                  size={180}
                  className="text-orange-600"
                />
              </div>

              {/* Animated Content */}
              <div
                key={activeIndex}
                className="relative z-10 animate-in fade-in slide-in-from-bottom-4 duration-500"
              >
                <div className="flex items-center gap-3 mb-4 text-orange-600">
                  <RenderIcon spec={activeSpec} size={20} />
                  <span className="text-sm font-bold tracking-wider uppercase">
                    MBA Specializations
                  </span>
                </div>

                <h2 className="lg:text-2xl xl:text-3xl font-extrabold text-[#10404A] mb-4 xl:mb-6 leading-tight">
                  {activeSpec.title}
                </h2>

                <p className="text-slate-600 lg:text-sm xl:text-lg lg:leading-snug xl:leading-relaxed mb-6 xl:mb-8 lg:line-clamp-8 xl:line-clamp-10">
                  {activeSpec.description}
                </p>

                <button
                  onClick={() => router.push("/programme/mba")}
                  aria-label="Go to Programs page"
                  className="group flex items-center gap-2 bg-[#10404A] text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition-colors duration-300"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE/TABLET LAYOUT - BELOW LG */}
      <div className="lg:hidden w-full px-6 py-12">
        {/* HEADING FOR BELOW LG SCREENS */}
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#10404A] mb-3">
            MBA Specializations
          </h2>
        </div>

        {/* TREE STRUCTURE */}
        <div className="flex flex-col gap-6">
          {specializations.map((spec, index) => {
            const isActive = index === activeIndex;

            return (
              <div key={index} className="relative flex gap-4">
                {/* Vertical line */}
                {index !== specializations.length - 1 && (
                  <span className="absolute left-6 top-14 h-full w-px bg-orange-300" />
                )}

                <button
                  onClick={() => handleManualSelect(index)}
                  aria-label={`Go to ${spec} page`}
                  className={`
                    shrink-0 min-w-12 min-h-12
                    z-10 w-12 h-12 rounded-full 
                    flex items-center justify-center
                    transition-all duration-300
                    ${
                      isActive
                        ? "bg-orange-600 text-white scale-110"
                        : "bg-white border-2 border-orange-500 text-slate-800"
                    }
                  `}
                >
                  <RenderIcon
                    spec={spec}
                    size={18}
                    className={`
                      shrink-0
                      transition-transform duration-300
                      ${isActive ? "rotate-180" : "rotate-0"}
                    `}
                  />
                </button>

                {/* Text */}
                <div className="pt-2 flex-1">
                  <h4
                    className={`font-bold text-base cursor-pointer ${
                      isActive ? "text-orange-600" : "text-slate-900"
                    }`}
                    onClick={() => handleManualSelect(index)}
                  >
                    {spec.title}
                  </h4>

                  {isActive && (
                    <>
                      <p className="text-sm text-slate-600 mt-2 line-clamp-4">
                        {spec.description}
                      </p>

                      <button
                        onClick={() => router.push("/programme/mba")}
                        aria-label="Go to Programs page"
                        className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-orange-600 hover:text-orange-700"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
