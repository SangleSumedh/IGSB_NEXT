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
  CheckCircle2,
  Briefcase, // Added for the roles section
} from "lucide-react";

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
    roles: [
      "Brand Manager / Assistant Brand Manager",
      "Digital Marketing Manager / Specialist",
      "Growth / Performance Marketing Manager",
      "Marketing Analytics / Consumer Insights",
      "Product Marketing Manager",
    ],
  },
  {
    title: "Finance Management",
    icon: <CircleDollarSign size={20} />,
    angle: 45,
    description:
      "The MBA in Finance at IGSB prepares students for analytical, decision-driven roles in the financial ecosystem. The curriculum emphasizes financial management, corporate finance, financial modelling, investment analysis, risk management, and strategic financial decision-making, aligned with real-world business scenarios. Students gain exposure to capital markets, valuation, budgeting, compliance, and fintech fundamentals, enabling them to contribute effectively in corporate finance, banking, consulting, investment analysis, and financial strategy roles across industries.",
    roles: [
      "Financial Analyst / Corporate Finance Analyst",
      "Investment Banking Analyst / Associate",
      "Equity Research Analyst / Market Analyst",
      "Risk Management / Credit Risk Analyst",
      "Finance Manager / Business Finance Partner",
    ],
  },
  {
    title: "Human Resource Management",
    icon: <Users size={20} />,
    angle: 25,
    description:
      "The MBA in Human Resources at IGSB is designed to develop strategic HR leaders capable of managing talent, culture, and organizational transformation in modern enterprises. The program integrates HR analytics, talent acquisition, learning & development, performance management, and HR technology, enabling students to move beyond transactional HR into business-driven people management. With a strong focus on employee lifecycle management, organizational behaviour, labour laws, and leadership development, graduates are prepared for roles in HR consulting, talent strategy, corporate HR, and people analytics within leading organizations.",
    roles: [
      "HR Business Partner (HRBP)",
      "Talent Acquisition / Recruitment Manager",
      "Learning & Development (L&D) Manager",
      "HR Analytics Specialist",
      "Compensation & Benefits Manager",
    ],
  },
  {
    title: "Operations & Supply Chain Management",
    icon: <Settings size={20} />,
    angle: 5,
    description:
      "The MBA in Operations & Supply Chain Management at IGSB focuses on building professionals who can optimize processes, manage complex supply networks, and drive operational excellence. The specialization covers operations strategy, supply chain planning, logistics management, procurement, quality systems, and lean methodologies. With increasing emphasis on data-driven operations, technology integration, and global supply chain resilience, students are trained for leadership roles in manufacturing, logistics, e-commerce, consulting, and operations strategy functions.",
    roles: [
      "Operations Manager / Operations Analyst",
      "Supply Chain Manager / SCM Analyst",
      "Logistics & Distribution Manager",
      "Procurement / Sourcing Manager",
      "Lean / Six Sigma Specialist",
    ],
  },
  {
    title: "Business Analytics Management",
    icon: <LineChart size={20} />,
    angle: -15,
    description:
      "The MBA in Business Analytics at IGSB is structured to create professionals who can convert data into strategic business insights. The specialization focuses on data analysis, business intelligence, predictive analytics, visualization tools, and decision science, aligned with managerial applications. By combining statistical thinking, analytical tools, and business context, students are prepared for high-impact roles in business analytics, consulting, strategy, operations analytics, and management decision-support functions in data-driven organizations.",
    roles: [
      "Business / Data Analyst",
      "Data Scientist / Machine Learning Analyst",
      "BI Analyst / Consultant",
      "Analytics Consultant / Strategy Analyst",
      "Customer / Marketing Analytics Specialist",
    ],
  },
];

export default function ProgrammesSection() {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [delay, setDelay] = useState(5000);

  const activeSpec = specializations[activeIndex];

  useEffect(() => {
    setIsExpanded(false);
  }, [activeIndex]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % specializations.length);
      setDelay(5000);
    }, delay);

    return () => clearTimeout(timer);
  }, [activeIndex, delay]);

  const handleManualSelect = (index) => {
    setActiveIndex(index);
    setDelay(10000);
  };

  const handleReadMore = () => {
    setIsExpanded(!isExpanded);
    setDelay(10000);
  };

  return (
    <section className="relative w-full bg-white font-sans overflow-hidden">

      {/* DESKTOP LAYOUT - LG AND ABOVE */}
      <div className="hidden lg:block relative lg:h-[95vh] flex-1 items-center">
        {/* IMAGE AT BOTTOM LEFT */}
        <div className="absolute bottom-0 left-0 lg:w-[45vw] xl:w-[50vw] h-[80vh] z-20 pointer-events-none">
          <Image
            src="/Home/MBASpec.png"
            alt="MBA Specializations"
            fill
            className="object-contain object-bottom left-0"
            priority
          />
        </div>

        {/* LEFT SIDE: CIRCLE INTERFACE */}
        <div className="absolute -bottom-10 lg:left-10 xl:left-16 lg:w-[40vw] lg:h-[40vw] xl:w-[45vw] xl:h-[45vw]">
          <div className="relative w-full h-full rounded-full border-4 border-[#fc7116]">
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
        <div className="absolute right-0 top-0 w-full lg:w-[45%] xl:w-[40%] h-[95%] flex items-center justify-center lg:pr-8 xl:pr-16 z-40 pointer-events-none max-w-md xl:max-w-lg">
          <div className="pointer-events-auto w-full max-w-xl">
            <div className="bg-[white/90] backdrop-blur-xl border border-white/20 shadow-2xl rounded-3xl lg:p-8 xl:p-10 relative overflow-hidden transition-all duration-500">
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
                {/* Header Tag */}
                <div className="flex items-center gap-3 mb-3 text-orange-600">
                  <RenderIcon spec={activeSpec} size={20} />
                  <span className="text-sm font-bold tracking-wider uppercase">
                    MBA Specializations
                  </span>
                </div>

                {/* Title */}
                <h2 className="lg:text-2xl xl:text-3xl font-extrabold text-[#10404A] mb-3 leading-tight">
                  {activeSpec.title}
                </h2>

                {/* Description */}
                <p
                  className={`text-slate-600 lg:text-sm xl:text-md lg:leading-snug xl:leading-relaxed mb-4 transition-all duration-300 ${
                    isExpanded ? "" : "line-clamp-3"
                  }`}
                >
                  {activeSpec.description}
                </p>

                {/* Read More Button */}
                <button
                  onClick={handleReadMore}
                  className="group inline-flex items-center gap-2 text-sm font-bold text-[#fc7116] hover:text-orange-700 transition-colors mb-6 cursor-pointer"
                >
                  {isExpanded ? "Read Less" : "Read More"}
                  <ArrowRight
                    className={`w-4 h-4 transition-transform duration-300 ${
                      isExpanded ? "-rotate-90" : "group-hover:translate-x-1"
                    }`}
                  />
                </button>

                {/* --- NEW: Roles Block (Replaces the 3 small blocks) --- */}
                <div className="bg-[#3aa6a9] border border-orange-100 rounded-2xl p-3">
                  <div className="flex items-center gap-2 mb-3">
                    <Briefcase size={18} className="text-white" />
                    <h4 className="font-bold text-white  text-sm uppercase tracking-wide">
                      Top In-Demand Roles
                    </h4>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-2 gap-y-2">
                    {activeSpec.roles?.map((role, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2 text-[11px] xl:text-xs text-slate-50 font-medium leading-snug"
                      >
                        <CheckCircle2
                          size={12}
                          className="mt-0.5 text-white shrink-0"
                        />
                        <span>{role}</span>
                      </div>
                    ))}
                  </div>
                </div>
                {/* --- End New Block --- */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE/TABLET LAYOUT - BELOW LG */}
      <div className="lg:hidden w-full px-6 py-12">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#10404A] mb-3">
            MBA Specializations
          </h2>
        </div>

        <div className="flex flex-col gap-6">
          {specializations.map((spec, index) => {
            const isActive = index === activeIndex;

            return (
              <div key={index} className="relative flex gap-4">
                {index !== specializations.length - 1 && (
                  <span className="absolute left-6 top-14 h-full w-px bg-orange-300" />
                )}

                <button
                  onClick={() => handleManualSelect(index)}
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
                      <p
                        className={`text-sm text-slate-600 mt-2 transition-all duration-300 ${
                          isExpanded ? "" : "line-clamp-4"
                        }`}
                      >
                        {spec.description}
                      </p>

                      <button
                        onClick={handleReadMore}
                        className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-orange-600 hover:text-orange-700"
                      >
                        {isExpanded ? "Read Less" : "Read More"}
                        <ArrowRight
                          className={`w-4 h-4 transition-transform duration-300 ${
                            isExpanded ? "-rotate-90" : "translate-x-0"
                          }`}
                        />
                      </button>

                      {/* --- Mobile View Roles --- */}
                      <div className="mt-4 bg-orange-50 rounded-xl p-4 border border-orange-100">
                        <h5 className="text-xs font-bold text-[#10404A] uppercase mb-3 flex items-center gap-2">
                          <Briefcase size={14} /> In-Demand Roles
                        </h5>
                        <div className="grid grid-cols-1 gap-2">
                          {spec.roles?.map((role, rIdx) => (
                            <div
                              key={rIdx}
                              className="flex items-start gap-2 text-xs text-slate-700"
                            >
                              <CheckCircle2
                                size={12}
                                className="mt-0.5 text-orange-500 shrink-0"
                              />
                              {role}
                            </div>
                          ))}
                        </div>
                      </div>
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
