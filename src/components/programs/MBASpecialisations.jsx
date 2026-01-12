"use client";

import React, { useState } from "react";

// --- DATA ---
const mbaData = {
  marketing: {
    title: "Marketing Management (MKT)",
    overview:
      "This specialization equips students with cutting-edge skills in digital marketing, branding, consumer behavior, sales strategy, market research, and product management. Students learn to understand markets, create value-driven campaigns, and build strong customer relationships.",
    highlights: [
      {
        title: "Strategic Marketing Expertise",
        text: "Develop a profound understanding of market dynamics, consumer insights, and competitive strategy.",
      },
      {
        title: "Digital-First Approach",
        text: "Gain hands-on experience with the latest digital marketing tools and analytics platforms.",
      },
      {
        title: "Industry Interface",
        text: "Learn from industry experts and work on live projects with leading brands.",
      },
    ],
  },
  finance: {
    title: "Finance Management (FIN)",
    overview:
      "The finance specialization develops strong analytical and strategic decision-making skills in financial planning, investment analysis, corporate finance, banking, risk management, and capital markets.",
    highlights: [
      {
        title: "Analytical Rigor",
        text: "Build quantitative and analytical skills essential for modelling, valuation, and investment decision-making.",
      },
      {
        title: "Market-Ready Skills",
        text: "Gain practical exposure using financial databases, tools, and simulations.",
      },
      {
        title: "Strategic Perspective",
        text: "Understand the strategic role of finance in budgeting, governance, and corporate decision-making.",
      },
    ],
  },
  hr: {
    title: "Human Resource Management (HR)",
    overview:
      "The HR specialization prepares students to manage people, culture, and organizational development with strategic insight. Students learn talent acquisition, performance management, employee engagement, HR analytics, and labor laws.",
    highlights: [
      {
        title: "Strategic HR Partnering",
        text: "Align HR strategies with business goals for talent-driven growth.",
      },
      {
        title: "People Analytics",
        text: "Use data for evidence-based decisions in hiring, retention, and performance.",
      },
      {
        title: "Leadership in Change Management",
        text: "Develop the ability to drive organizational transformation and employee engagement.",
      },
    ],
  },
  operations: {
    title: "Operations & Supply Chain (OSCM)",
    overview:
      "Focused on efficiency and value creation, this specialization trains students in logistics, process optimization, supply chain strategy, project management, quality systems, and technology-enabled operations.",
    highlights: [
      {
        title: "End-to-End Supply Chain View",
        text: "Understand sourcing, production, logistics, distribution, and last-mile operations.",
      },
      {
        title: "Quantitative Problem-Solving",
        text: "Learn forecasting, optimization, and ERP tools for real-world problem solving.",
      },
      {
        title: "Global Perspective",
        text: "Explore international logistics, trade regulations, and risk mitigation strategies.",
      },
    ],
  },
  ba: {
    title: "Business Analytics (BA)",
    overview: "Coming soon",
    structure: ["Coming soon"],
    highlights: [
      {
        title: "Coming Soon",
        text: "Coming Soon",
      },
      {
        title: "Coming Soon",
        text: "Coming Soon",
      },
      {
        title: "Coming Soon",
        text: "Coming Soon",
      },
    ],
  },
};

// --- ICONS ---
const Icons = {
  Marketing: (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-8 h-8"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 018.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.43.816 1.035.816 1.73 0 .695-.32 1.3-.816 1.73"
      />
    </svg>
  ),
  Finance: (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-8 h-8"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
      />
    </svg>
  ),
  HR: (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-8 h-8"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
      />
    </svg>
  ),
  Operations: (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-8 h-8"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
      />
    </svg>
  ),
  Analytics: (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-8 h-8"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
      />
    </svg>
  ),
};

const getIcon = (key) => {
  switch (key) {
    case "marketing":
      return Icons.Marketing;
    case "finance":
      return Icons.Finance;
    case "hr":
      return Icons.HR;
    case "operations":
      return Icons.Operations;
    case "ba":
      return Icons.Analytics;
    default:
      return Icons.Marketing;
  }
};

export default function MBASpecializations({ scrollToApply }) {
  // State to track which card is expanded to show highlights
  const [activeCard, setActiveCard] = useState(null);

  const toggleCard = (key) => {
    setActiveCard(activeCard === key ? null : key);
  };

  return (
    <div className="w-full bg-white py-12 px-4 md:px-8 text-slate-800">
      <div className="mx-auto max-w-full">
        {/* SECTION HEADER */}
        <div className="text-center  mb-12 mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-[#10404a] mb-6 tracking-tight">
            MBA Specializations
          </h2>
          {/* <div className="h-1.5 w-24 bg-[#ff8b61] rounded-full mb-6"></div> */}
          <p className="text-lg mx-auto text-slate-600 font-medium leading-relaxed max-w-4xl">
            IGSB offers diverse MBA specializations designed to build
            industry-ready professionals with strong analytical, leadership, and
            strategic capabilities.
          </p>
        </div>

        {/* GRID: Responsive Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {Object.keys(mbaData).map((key) => {
            const spec = mbaData[key];
            const isActive = activeCard === key;

            return (
              <div
                key={key}
                className={`
                  group relative bg-white rounded-2xl p-8 border border-slate-200 
                  shadow-sm hover:shadow-2xl transition-all duration-500 ease-in-out
                  flex flex-col justify-between overflow-hidden
                  ${
                    isActive
                      ? "ring-2 ring-[#3aafa9] translate-y-[-4px]"
                      : "hover:-translate-y-1"
                  }
                `}
              >
                {/* Decorative Top Gradient Line */}
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#10404a] to-[#3aafa9] opacity-80 group-hover:opacity-100 transition-opacity"></div>

                {/* --- CARD CONTENT --- */}
                <div className="relative z-10">
                  {/* Header & Icon */}
                  <div className="flex justify-between items-start mb-6">
                    <h2 className="text-2xl font-bold text-[#10404a] group-hover:text-[#3aafa9] transition-colors leading-tight">
                      {spec.title}
                    </h2>
                    <div className="p-3 bg-slate-50 rounded-full text-[#ff8b61] group-hover:bg-[#ff8b61] group-hover:text-white transition-colors duration-300">
                      {getIcon(key)}
                    </div>
                  </div>

                  {/* Overview Text (Hidden when active to make room for details) */}
                  <div
                    className={`transition-opacity duration-300 ${
                      isActive ? "opacity-0 h-0 overflow-hidden" : "opacity-100"
                    }`}
                  >
                    <p className="text-slate-600 mb-8 text-base leading-relaxed">
                      {spec.overview}
                    </p>
                  </div>

                  {/* --- DYNAMIC SECTION: REVEALED ON CLICK --- */}
                  <div
                    className={`
                      transition-all duration-500 ease-in-out overflow-hidden
                      ${
                        isActive
                          ? "max-h-[400px] opacity-100 mb-6"
                          : "max-h-0 opacity-0"
                      }
                    `}
                  >
                    <h4 className="text-sm font-bold text-[#3aafa9] uppercase tracking-wider mb-3">
                      Key Highlights
                    </h4>
                    <ul className="space-y-3">
                      {spec.highlights.map((item, i) => (
                        <li key={i} className="text-sm text-slate-700">
                          <span className="font-bold text-[#10404a] block mb-1">
                            {item.title}
                          </span>
                          <span className="text-slate-500">{item.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* ACTION AREA */}
                <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-100 relative z-10">
                  {/* Interactive Toggle Button */}
                  <button
                    onClick={() => toggleCard(key)}
                    className="text-sm font-bold text-slate-400 uppercase tracking-widest hover:text-[#10404a] transition-colors focus:outline-none"
                  >
                    {isActive ? "Show Less" : "Learn More"}
                  </button>

                  <button
                    onClick={scrollToApply}
                    className="px-6 py-2.5 rounded-full border-2 border-[#3aafa9] text-[#3aafa9] font-bold text-sm hover:bg-[#3aafa9] hover:text-white transition-all duration-300 shadow-sm"
                  >
                    Enquire Now
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
