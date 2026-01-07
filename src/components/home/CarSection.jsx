"use client";

import React, { useState, useEffect } from "react";
import { MapPin, RefreshCw, Cloud } from "lucide-react";

export default function JourneyToCollege() {
  const [hasArrived, setHasArrived] = useState(false);
  const [isDriving, setIsDriving] = useState(true);

  // Duration of the animation
  const JOURNEY_DURATION = 12000; // 12 seconds

  useEffect(() => {
    startJourney();
  }, []);

  const startJourney = () => {
    setHasArrived(false);
    setIsDriving(true);

    const timer = setTimeout(() => {
      setIsDriving(false);
      setHasArrived(true);
    }, JOURNEY_DURATION);

    return () => clearTimeout(timer);
  };

  return (
    <div className="relative w-full h-[50vh] bg-gradient-to-b from-sky-400 via-sky-200 to-white overflow-hidden font-sans select-none border-b-8 border-[#10404A]">
      {/* --- SKY LAYER (Clouds) --- */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <div
          className={`absolute top-8 left-[10%] text-white/70 ${
            isDriving ? "animate-drift-slow" : ""
          }`}
        >
          <Cloud size={80} fill="currentColor" />
        </div>
        <div
          className={`absolute top-24 left-[40%] text-white/40 ${
            isDriving ? "animate-drift-medium" : ""
          }`}
        >
          <Cloud size={40} fill="currentColor" />
        </div>
        <div
          className={`absolute top-10 left-[70%] text-white/60 ${
            isDriving ? "animate-drift-fast" : ""
          }`}
        >
          <Cloud size={60} fill="currentColor" />
        </div>
      </div>

      {/* --- BACKGROUND LAYER (Mountains - Parallax) --- */}
      <div
        className={`absolute bottom-[15%] left-0 h-64 flex items-end w-[400%] ${
          isDriving ? "animate-scenery-slow" : "translate-x-[calc(-100%+100vw)]"
        }`}
        style={{
          animationPlayState: isDriving ? "running" : "paused",
          animationFillMode: "forwards",
        }}
      >
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="relative w-[20vw] flex items-end">
            <div className="w-full h-40 bg-[#2d857e] opacity-30 clip-mountain-1 transform translate-y-10"></div>
            <div className="absolute left-1/2 w-full h-64 bg-[#1F6D71] opacity-20 clip-mountain-2 transform -translate-x-20"></div>
          </div>
        ))}
      </div>

      {/* --- MID-GROUND LAYER (The Story) --- */}
      <div
        className={`absolute bottom-[15%] left-0 h-auto flex items-end w-[400%] ${
          isDriving ? "animate-scenery-fast" : "translate-x-[calc(-100%+100vw)]"
        }`}
        style={{
          animationPlayState: isDriving ? "running" : "paused",
          animationFillMode: "forwards",
        }}
      >
        {/* === SECTION 1: THE CITY (150vw) === */}
        <div className="w-[150vw] h-full flex items-end justify-start pl-10 gap-0.5">
          {/* Randomized City Skyline */}
          {Array.from({ length: 25 }).map((_, i) => {
            // Randomize heights for "Height Differences"
            const heights = ["h-32", "h-64", "h-48", "h-80", "h-40", "h-96"];
            const widths = ["w-16", "w-20", "w-24", "w-12"];
            const colors = [
              "bg-gray-400",
              "bg-gray-500",
              "bg-gray-600",
              "bg-slate-500",
              "bg-slate-600",
            ];

            const h = heights[i % heights.length];
            const w = widths[i % widths.length];
            const c = colors[i % colors.length];

            return (
              <div
                key={i}
                className={`${w} ${h} ${c} rounded-t-sm flex flex-col justify-end p-1 relative z-10 mx-[1px]`}
              >
                <div className="grid grid-cols-2 gap-1 w-full h-full opacity-30 overflow-hidden py-2">
                  {Array.from({ length: 8 }).map((_, j) => (
                    <div
                      key={j}
                      className="bg-yellow-100/50 h-2 w-full rounded-[1px]"
                    ></div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* === SECTION 2: HIGHWAY TREES (150vw) === */}
        <div className="w-[150vw] h-full flex items-end justify-around relative px-10">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="relative flex items-end">
              {/* Back Layer Tree */}
              <img
                src="/Home/tree1.svg"
                alt="Tree"
                className="w-24 h-auto opacity-80 transform scale-90"
              />
              {/* Front Layer Tree (Offset) */}
              <img
                src="/Home/tree2.svg"
                alt="Tree"
                className="w-28 h-auto absolute -bottom-2 -right-10 z-10"
              />
            </div>
          ))}
        </div>

        {/* === SECTION 3: COLLEGE & FOREST (100vw) === */}
        <div className="w-[100vw] h-full flex items-end justify-center relative pl-20">
          {/* --- THICK PINE FOREST BACKGROUND --- */}
          {/* CHANGE: Width increased to w-[200%] and anchored right-0. 
              This makes it bleed backwards into Section 2. */}
          <div className="absolute bottom-0 right-0 h-full w-[200%] flex items-end justify-end pointer-events-none z-0">
            <div className="flex items-end w-full justify-end pr-0">
              {/* CHANGE: Increased tree count from 30 to 60 to fill the extra space */}
              {Array.from({ length: 60 }).map((_, i) => (
                <img
                  key={i}
                  src="/Home/pinetree.svg"
                  alt="Pine Forest"
                  style={{ transform: `scale(${0.8 + (i % 3) * 0.2})` }}
                  className={`
                        w-24 h-auto 
                        -ml-12  /* Negative margin for density/overlap */
                        ${
                          i % 2 === 0
                            ? "z-0 brightness-90"
                            : "z-10 brightness-100"
                        }
                        transform origin-bottom
                      `}
                />
              ))}
            </div>
          </div>

          {/* --- COLLEGE BUILDING --- */}
          <div className="relative flex flex-col items-center z-20 mr-32">
            <img
              src="/Home/IGSB_animated.png"
              alt="IGSB College"
              className="w-[500px] h-auto object-contain drop-shadow-2xl"
            />
          </div>

          {/* Welcome Tooltip */}
          {hasArrived && (
            <div className="absolute top-20 right-[40%] animate-bounce-in z-50">
              <div className="bg-white px-6 py-3 rounded-full shadow-2xl border-2 border-[#fb7035] flex items-center gap-2">
                <MapPin className="text-[#fb7035]" size={20} />
                <span className="font-bold text-[#10404A]">
                  Welcome to IGSB!
                </span>
              </div>
              <div className="w-0 h-0 border-l-[10px] border-l-transparent border-t-[10px] border-t-white border-r-[10px] border-r-transparent mx-auto"></div>
            </div>
          )}
        </div>
      </div>

      {/* --- FOREGROUND (The Road) --- */}
      <div className="absolute bottom-0 w-full h-[15%] bg-[#3a3a3a] border-t-4 border-gray-500 flex items-center overflow-hidden z-20">
        <div
          className={`w-[200%] h-0 border-t-4 border-dashed border-yellow-400 opacity-80 ${
            isDriving ? "animate-road" : ""
          }`}
        ></div>
      </div>

      {/* --- THE CAR (Asset) --- */}
      <div className="absolute bottom-[5%] left-10 md:left-32 z-50">
        <div
          className={`relative w-48 h-auto
            ${isDriving ? "animate-suspension" : ""} 
            ${hasArrived ? "animate-drive-in" : ""} 
            transition-all duration-1000 ease-in-out
          `}
        >
          {/* Car Asset */}
          <img
            src="/Home/car.svg"
            alt="Car"
            className="w-1/2 h-1/2 object-contain drop-shadow-lg"
          />

          {/* Wind Lines (CSS) */}
          {isDriving && (
            <div className="absolute -right-10 top-2 space-y-2 opacity-60">
              <div className="w-16 h-1 bg-white rounded-full animate-wind-1"></div>
              <div className="w-24 h-0.5 bg-white rounded-full animate-wind-2"></div>
            </div>
          )}
        </div>
      </div>

      {/* --- REPLAY BUTTON --- */}
      {hasArrived && (
        <button
          onClick={startJourney}
          className="absolute top-5 right-5 z-50 bg-white/90 hover:bg-white text-[#10404A] p-3 rounded-full shadow-xl backdrop-blur-md transition-all hover:scale-110 border border-[#10404A]/20"
          title="Replay Journey"
        >
          <RefreshCw size={24} />
        </button>
      )}

      {/* --- CUSTOM CSS FOR ANIMATIONS --- */}
      <style jsx>{`
        .clip-mountain-1 {
          clip-path: polygon(0% 100%, 50% 0%, 100% 100%);
        }
        .clip-mountain-2 {
          clip-path: polygon(0% 100%, 30% 20%, 60% 100%);
        }

        @keyframes road-move {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-road {
          animation: road-move 0.4s linear infinite;
        }

        @keyframes scenery-move {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% + 100vw));
          }
        }
        .animate-scenery-fast {
          animation: scenery-move 12s linear forwards;
        }
        .animate-scenery-slow {
          animation: scenery-move 20s linear forwards;
        }

        @keyframes suspension {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-2px);
          }
        }
        .animate-suspension {
          animation: suspension 0.6s ease-in-out infinite;
        }

        /* Drive In: Moves forward into the college building and disappears */
        @keyframes drive-in {
          0% {
            transform: translateX(0) scale(1);
            opacity: 1;
          }
          100% {
            transform: translateX(300px) scale(0.7); /* Move right and shrink */
            opacity: 0;
          }
        }
        .animate-drive-in {
          animation: drive-in 2s cubic-bezier(0.55, 0.085, 0.68, 0.53) forwards;
        }

        @keyframes drift {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-30px);
          }
        }
        .animate-drift-slow {
          animation: drift 5s ease-in-out infinite alternate;
        }
        .animate-drift-medium {
          animation: drift 4s ease-in-out infinite alternate;
        }
        .animate-drift-fast {
          animation: drift 3s ease-in-out infinite alternate;
        }

        @keyframes wind {
          0% {
            transform: translateX(0);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateX(-150px);
            opacity: 0;
          }
        }
        .animate-wind-1 {
          animation: wind 0.8s linear infinite;
        }
        .animate-wind-2 {
          animation: wind 0.6s linear infinite 0.1s;
        }

        @keyframes bounce-in {
          0% {
            transform: scale(0);
            opacity: 0;
          }
          60% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
        .animate-bounce-in {
          animation: bounce-in 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)
            forwards;
          animation-delay: 1.5s;
          opacity: 0;
          animation-fill-mode: forwards;
        }
      `}</style>
    </div>
  );
}
