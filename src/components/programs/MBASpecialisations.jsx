"use client";

import React, { useState, useEffect } from "react";

// --- DATA (Unchanged) ---
const mbaData = {
  marketing: {
    title: "Marketing Management (MKT)",
    overview:
      "This specialization equips students with cutting-edge skills in digital marketing, branding, consumer behavior, sales strategy, market research, and product management.",
    highlights: [
      {
        title: "Strategic Marketing",
        text: "Understand market dynamics and competitive strategy.",
      },
      {
        title: "Digital-First",
        text: "Hands-on experience with digital tools and analytics.",
      },
      {
        title: "Industry Interface",
        text: "Work on live projects with leading brands.",
      },
    ],
  },
  finance: {
    title: "Finance Management (FIN)",
    overview:
      "The finance specialization develops strong analytical and strategic decision-making skills in financial planning, investment analysis, corporate finance, and risk management.",
    highlights: [
      {
        title: "Analytical Rigor",
        text: "Build skills for modelling and valuation.",
      },
      {
        title: "Market-Ready",
        text: "Exposure to financial databases and simulations.",
      },
      {
        title: "Strategic Perspective",
        text: "Role of finance in corporate governance.",
      },
    ],
  },
  hr: {
    title: "Human Resource (HR)",
    overview:
      "Prepares students to manage people, culture, and organizational development. Learn talent acquisition, performance management, and HR analytics.",
    highlights: [
      {
        title: "Strategic HR",
        text: "Align HR strategies with business goals.",
      },
      {
        title: "People Analytics",
        text: "Data-driven decisions in hiring and retention.",
      },
      {
        title: "Change Management",
        text: "Drive organizational transformation.",
      },
    ],
  },
  operations: {
    title: "Operations & Supply Chain",
    overview:
      "Focused on efficiency and value creation, training students in logistics, process optimization, supply chain strategy, and quality systems.",
    highlights: [
      {
        title: "End-to-End View",
        text: "Sourcing, production, and distribution.",
      },
      { title: "Problem Solving", text: "Forecasting and optimization tools." },
      {
        title: "Global Perspective",
        text: "International logistics and risk mitigation.",
      },
    ],
  },
  ba: {
    title: "Business Analytics (BA)",
    overview:
      "Develops expertise in data visualization, predictive modeling, and big data technologies to drive business intelligence.",
    highlights: [
      { title: "Data Driven", text: "Master tools like Python, R, and SQL." },
      {
        title: "Predictive Modeling",
        text: "Forecast trends using advanced algorithms.",
      },
      {
        title: "Decision Science",
        text: "Convert raw data into actionable insights.",
      },
    ],
  },
};

// --- ICONS (Unchanged) ---
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

export default function MBASpecializationsCarousel({ scrollToApply }) {
  const [activeCard, setActiveCard] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  // --- TOUCH STATE ---
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [hasSwiped, setHasSwiped] = useState(false); // Track if user has swiped
  const minSwipeDistance = 50; // threshold in pixels

  const keys = Object.keys(mbaData);

  // Responsive Calculation
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setItemsPerPage(1);
      else if (window.innerWidth < 1024) setItemsPerPage(2);
      else setItemsPerPage(3);
    };
    handleResize(); // Init
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(keys.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev + 1 >= keys.length - (itemsPerPage - 1) ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? keys.length - itemsPerPage : prev - 1
    );
  };

  const toggleCard = (key) => {
    setActiveCard(activeCard === key ? null : key);
  };

  // --- TOUCH HANDLERS ---
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe || isRightSwipe) {
      setHasSwiped(true); // Disable indicator after first swipe
    }

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }
  };

  return (
    <div className="w-full bg-white py-20 px-6 md:px-16 lg:px-24 text-slate-800 relative">
      <div className="mx-auto max-w-[1800px]">
        {/* HEADER */}
        <div className="text-center mb-16 mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-bold text-[#10404a] mb-6 tracking-tight">
            MBA Specializations
          </h2>
          <p className="text-lg text-slate-600 font-medium leading-relaxed">
            IGSB offers diverse MBA specializations designed to build
            industry-ready professionals with strong analytical, leadership, and
            strategic capabilities.
          </p>
        </div>

        {/* CAROUSEL WRAPPER */}
        <div className="relative group/carousel">
          {/* Controls - Left (Hidden on Mobile/Tablet) */}
          <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 left-0 md:-left-12 xl:-left-20 z-20">
            <button
              onClick={prevSlide}
              className="bg-white border border-slate-200 p-4 rounded-full shadow-lg text-[#10404a] hover:bg-[#3aafa9] hover:text-white transition-all disabled:opacity-50 hover:scale-110 active:scale-95"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>
          </div>

          {/* Controls - Right (Hidden on Mobile/Tablet) */}
          <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 right-0 md:-right-12 xl:-right-20 z-20">
            <button
              onClick={nextSlide}
              className="bg-white border border-slate-200 p-4 rounded-full shadow-lg text-[#10404a] hover:bg-[#3aafa9] hover:text-white transition-all hover:scale-110 active:scale-95"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>

          {/* Slider Window */}
          <div
            className="overflow-hidden py-8 relative" // Added relative for positioning the indicator
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {/* --- SWIPE INDICATOR (Mobile/Tablet Only) --- */}
            {!hasSwiped && (
              <div className="lg:hidden absolute -bottom-5 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none">
                <div className="  text-black px-5 py-2.5  flex items-center gap-3 animate-pulse">
                  <div className="swipe-hand-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path d="M10.5 3a2.5 2.5 0 00-2.5 2.5v9.25a.75.75 0 01-1.5 0V11a2.5 2.5 0 00-5 0v1.75c0 4.32 3.551 7.75 8.169 7.75 5.093 0 8.831-3.67 8.831-8.25v-3.5a2.5 2.5 0 00-5 0V9.5a.75.75 0 01-1.5 0V5.5A2.5 2.5 0 0010.5 3z" />
                    </svg>
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider">
                    Swipe
                  </span>
                </div>
              </div>
            )}

            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / itemsPerPage)
                }%)`,
              }}
            >
              {keys.map((key) => {
                const spec = mbaData[key];
                const isActive = activeCard === key;

                return (
                  <div
                    key={key}
                    className="flex-shrink-0 px-4"
                    style={{ width: `${100 / itemsPerPage}%` }}
                  >
                    <div
                      className={`
                        relative bg-white rounded-2xl p-8 border border-slate-200 
                        shadow-md hover:shadow-lg hover:shadow-[#ff8b61] transition-all duration-300 ease-in-out
                        flex flex-col h-[500px]  w-full overflow-hidden
                        ${isActive ? "ring-2 ring-[#3aafa9]" : ""}
                      `}
                    >
                      {/* Decorative Gradient */}
                      <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#10404a] to-[#3aafa9]"></div>

                      {/* Header */}
                      <div className="flex justify-between items-start mb-6 shrink-0 relative z-10">
                        <h2 className="text-xl md:text-2xl font-bold text-[#10404a] leading-tight pr-4">
                          {spec.title}
                        </h2>
                        <div
                          className={`p-3 rounded-full transition-colors duration-300 shrink-0 ${
                            isActive
                              ? "bg-[#ff8b61] text-white"
                              : "bg-slate-50 text-[#ff8b61]"
                          }`}
                        >
                          {getIcon(key)}
                        </div>
                      </div>

                      {/* CONTENT SWITCHER AREA */}
                      <div className="flex-grow relative overflow-hidden">
                        {/* VIEW 1: OVERVIEW */}
                        <div
                          className={`absolute inset-0 transition-all duration-500 ease-in-out transform ${
                            isActive
                              ? "-translate-x-full opacity-0"
                              : "translate-x-0 opacity-100"
                          }`}
                        >
                          <p className="text-slate-600 text-base leading-relaxed">
                            {spec.overview}
                          </p>

                          <div className="mt-6 p-4 bg-slate-50 rounded-lg border border-slate-100">
                            <p className="text-xs text-slate-400 uppercase font-bold tracking-wider mb-2">
                              Focus Areas
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {spec.highlights.slice(0, 2).map((h, i) => (
                                <span
                                  key={i}
                                  className="text-xs font-medium text-[#10404a] bg-white px-2 py-1 rounded shadow-sm border border-slate-100"
                                >
                                  {h.title}
                                </span>
                              ))}
                              <span className="text-xs font-medium text-[#3aafa9] px-2 py-1">
                                + More
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* VIEW 2: HIGHLIGHTS */}
                        <div
                          className={`absolute inset-0 transition-all duration-500 ease-in-out transform ${
                            isActive
                              ? "translate-x-0 opacity-100"
                              : "translate-x-full opacity-0"
                          }`}
                        >
                          <h4 className="text-sm font-bold text-[#3aafa9] uppercase tracking-wider mb-4 border-b border-slate-100 pb-2">
                            Curriculum Highlights
                          </h4>
                          <ul className="space-y-4">
                            {spec.highlights.map((item, i) => (
                              <li key={i} className="text-sm text-slate-700">
                                <span className="font-bold text-[#10404a] block mb-0.5">
                                  {item.title}
                                </span>
                                <span className="text-slate-500 text-xs leading-snug">
                                  {item.text}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* ACTION FOOTER */}
                      <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-100 relative z-10 bg-white">
                        <button
                          onClick={() => toggleCard(key)}
                          className="text-xs font-bold text-slate-400 uppercase tracking-widest hover:text-[#10404a] transition-colors focus:outline-none flex items-center gap-1"
                        >
                          {isActive ? (
                            <>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="w-4 h-4"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              Back
                            </>
                          ) : (
                            <>
                              Details
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="w-4 h-4"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </>
                          )}
                        </button>

                        <button
                          onClick={scrollToApply}
                          className="px-5 py-2 rounded-full border border-[#3aafa9] text-[#3aafa9] font-bold text-xs hover:bg-[#3aafa9] hover:text-white transition-all duration-300 shadow-sm"
                        >
                          Enquire
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* DOTS INDICATOR */}
        <div className="flex justify-center mt-8 gap-2">
          {Array.from({ length: keys.length - (itemsPerPage - 1) }).map(
            (_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? "w-8 bg-[#3aafa9]"
                    : "w-2 bg-slate-300 hover:bg-[#10404a]"
                }`}
              />
            )
          )}
        </div>
      </div>

      {/* Custom Styles for Hand Animation */}
      <style jsx>{`
        .swipe-hand-icon {
          animation: swipe-hint 1.5s ease-in-out infinite;
        }
        @keyframes swipe-hint {
          0%,
          100% {
            transform: translateX(0);
            opacity: 0.8;
          }
          50% {
            transform: translateX(-6px);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
