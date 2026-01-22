"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaChalkboardTeacher,
  FaBullseye,
  FaHandshake,
  FaBriefcase,
  FaRocket,
  FaUserGraduate,
} from "react-icons/fa";

const Career = () => {
  const dotTopPositions = [
    "40%", // dot 1 (index 0) — you said perfect → keep similar
    "60%", // dot 2 (index 1) — perfect → high peak
    "55%", // dot 3 (index 2) — slightly lower than 2, still high
    "50%", // dot 4 (index 3) — deep valley
    "28%", // dot 5 (index 4) — still low
    "60%", // dot 6 (index 5) — rising back toward center
  ];
  const steps = [
    {
      id: 1,
      title: "Industry-Led Induction",
      desc: "From day one, students engage with industry leaders, corporate mentors, and business experts, enabling early exposure to real-world expectations.",
      icon: <FaChalkboardTeacher />,
    },
    {
      id: 2,
      title: "Domain-Specific Support",
      desc: "Focused training and niche, sector-wise placement preparation ensure students develop specialization-aligned competencies.",
      icon: <FaBullseye />,
    },
    {
      id: 3,
      title: "Career Development",
      desc: "Focused training in aptitude, communication, and executive presence ensures students are confident, competent, and placement ready.",
      icon: <FaRocket />,
    },
    {
      id: 4,
      title: "Internship & Exposure",
      desc: "Mandatory internship and live projects provide practical business experience, strengthening employability and workplace readiness.",
      icon: <FaBriefcase />,
    },
    {
      id: 5,
      title: "Corporate Recruitment",
      desc: "Active partnerships with leading national and multinational companies enable on-campus recruitment and placement opportunities.",
      icon: <FaHandshake />,
    },
    {
      id: 6,
      title: "Alumni & Mentorship",
      desc: "Guidance from experienced alumni and industry experts supports informed career decisions, interview readiness, and professional growth.",
      icon: <FaUserGraduate />,
    },
  ];

  return (
    <section className="bg-white text-secondary overflow-hidden">
      <div className="py-8 px-4 text-center text-white">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-2 leading-tight text-secondary tracking-tight">
          An Ecosystem Designed for{" "}
          <span className="text-primary">Great Careers</span>
        </h1>
        <p className="text-base text-secondary max-w-3xl mx-auto font-light">
          IGSB offers a structured placement ecosystem focused on industry-ready
          talent. Through strong corporate partnership, expert mentorship,
          and hands-on exposure, students graduate with the skills required for
          long-term success.
        </p>
      </div>
      <div className="max-w-full mx-auto px-4 sm:px-6 relative mt-16 mb-15 ">
        {/* ================= DESKTOP TIMELINE (Horizontal Wave) ================= */}
        <div className="hidden lg:block relative h-[500px]">
          {/* THE CURVED LINE (SVG) */}
          <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 z-0">
            <svg
              width="100%"
              height="200"
              viewBox="0 0 1200 200"
              fill="none"
              preserveAspectRatio="none"
            >
              <motion.path
                d="M0,100
   C67,30 133,30 200,100
   C267,170 333,170 400,100
   C467,30 533,30 600,100
   C667,170 733,170 800,100
   C867,30 933,30 1000,100
   C1067,170 1133,170 1200,100"
                stroke="#FF8B61"
                strokeWidth="4"
                fill="none"
                strokeDasharray="10 10" // Dashed line styling
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
            </svg>
          </div>

          {/* THE CARDS GRID */}
          <div className="grid grid-cols-6 gap-4 relative z-10 h-full">
            {steps.map((step, index) => {
              // Determine if item is Top or Bottom based on index
              // Pattern: Top, Top-ish, Bottom, Bottom-ish... adapted to the curve
              // Actually, simplified alternating Pattern: Even = Top, Odd = Bottom works for straight lines,
              // but for a curve, we position manually relative to the "Wave" visual.

              const isTop = index % 2 === 0;

              return (
                <div
                  key={step.id}
                  className=" relative flex flex-col items-center justify-center h-full"
                >
                  {/* CARD CONTENT */}
                  <motion.div
                    initial={{ opacity: 0, y: isTop ? -50 : 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2, duration: 0.5 }}
                    className={`absolute w-full max-w-[220px] p-5 rounded-xl md:rounded-3xl bg-secondary backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors h-[240px]
                      ${isTop ? "top-[60%]" : "bottom-[60%]"}
                    `}
                  >
                    <div className=" text-primary text-3xl mb-3">
                      {step.icon}
                    </div>
                    <h3 className="font-bold text-lg leading-tight mb-2 text-white">
                      {step.title}
                    </h3>
                    <p
                      className="text-xs text-white
                  leading-relaxed line-clamp-5"
                    >
                      {step.desc}
                    </p>
                  </motion.div>

                  {/* ICON BUBBLE */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.5, type: "spring" }}
                    className={`w-12 h-12 rounded-full   bg-primary border-4 border-[#052c34] shadow-[0_0_20px_rgba(252,113,22,0.6)] z-20 flex items-center justify-center text-white font-bold text-lg
                      absolute top-1/2 -translate-y-1/2
                      ${
                        index === 1 || index === 2 ? "-mt-16" : ""
                      }  // Manual adjustments to follow the visual curve
                      ${index === 3 || index === 4 ? "mt-16" : ""}
                      ${index === 1 ? "-mt-[80px]" : ""}
                      ${index === 2 ? "-mt-[80px]" : ""}
                      ${index === 3 ? "-mt-[80px]" : ""}
                      ${index === 4 ? "-mt-[80px]" : ""}
                      
                      // Actually, let's keep it simple: Alternating Up/Down visually
                      ${index % 2 === 0 ? "mb-0" : "mt-0"}
                    `}
                    // Override styles to strictly stick to the SVG curve visual approx
                    style={{ top: dotTopPositions[index] }}
                  >
                    {index + 1}
                  </motion.div>

                  {/* <div
                    className={`absolute w-[2px] h-[40px] bg-[#ff712d]/50
                     ${isTop ? "bottom-[50%] mb-6" : "top-[50%] mt-6"}
                  `}
                  ></div> */}
                </div>
              );
            })}
          </div>
        </div>

        {/* ================= MOBILE TIMELINE (Vertical) ================= */}
        <div className="block lg:hidden relative pl-4">
          {/* Vertical Line */}
          <div className="absolute left-[40px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#ff712d] to-transparent"></div>

          <div className="space-y-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative flex items-start gap-6"
              >
                {/* ICON BUBBLE */}
                <div className="relative z-10 w-14 h-14 shrink-0 rounded-full bg-[#10404A] border-2 border-[#ff712d] flex items-center justify-center text-xl text-[#ff712d] shadow-lg">
                  {step.icon}
                </div>

                {/* CONTENT CARD */}
                <div className="bg-secondary border border-white/10 p-5 rounded-xl w-full">
                  <h3 className="text-xl font-bold text-[#ff712d] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Career;
