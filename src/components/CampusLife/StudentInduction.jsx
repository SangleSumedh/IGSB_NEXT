"use client";
import React, { useState } from "react";
import Image from "next/image";
import { studentInduction } from "@/static/campuslife/student-inductions.js";
import { MemoryLane } from "@/components/CampusLife/MemoryLane";
import { FaMicrophone, FaChevronDown, FaChevronUp } from "react-icons/fa";

/* ============================================================
   HELPER: Calculate Curve Indentation (Pure Logic)
   ============================================================ */
const getCurveIndent = (index, totalItems) => {
  const centerIndex = Math.floor(totalItems / 2);
  const distanceFromCenter = Math.abs(index - centerIndex);
  const shiftLevel = Math.max(0, centerIndex - distanceFromCenter);

  // Curve Depth values (pixels)
  // Center items get pushed 110px, edges get 0px
  const indentValues = ["0px", "40px", "85px", "110px"];

  return indentValues[shiftLevel] || "0px";
};

/* ============================================================
   COMPONENT: Expandable Card (Fixed Content Logic)
   ============================================================ */
function ExpandableTimelineCard({ item, index, indentValue, isCardsOnRight, isOpen, onToggle }) {
 ;

  // LOGIC:
  // 1. Layout & Border
  const layoutClass = isCardsOnRight
    ? "lg:ml-[var(--indent)] border-l-0"
    : "lg:mr-[var(--indent)] border-r-0";

  // 2. Text Alignment & Header Orientation
  const contentFlex = isCardsOnRight ? "flex-row" : "flex-row-reverse";
  const textAlign = isCardsOnRight ? "text-left" : "text-right";
  const bubbleSpacing = isCardsOnRight ? "mr-4" : "ml-4";

  // 3. Session Card Orientation (Mirrors the header)
  // Right Cards: Text Left, Image Right
  // Left Cards: Image Left, Text Right
  const sessionFlex = isCardsOnRight ? "flex-row" : "flex-row-reverse";
  const sessionTitleJustify = isCardsOnRight ? "justify-start" : "justify-end";

  return (
    <div
      style={{ "--indent": indentValue }}
      className={`w-full lg:w-[calc(100%-var(--indent))] mb-2 last:mb-0 relative z-10 transition-all duration-500 ease-in-out ${layoutClass}
      ${!isCardsOnRight ? "self-end" : "self-start"}`}
    >
      {/* --- HEADER --- */}
      <button
        onClick={onToggle}
        className={`w-full py-3 px-4 rounded-xl shadow-sm transition-all duration-300 
          flex items-center justify-between group
          ${
            isOpen
              ? "bg-[#10404A] text-white border-[#FF8B61] shadow-lg scale-[1.02]"
              : "bg-white text-gray-700 border-[#10404A] hover:border-[#FF8B61] hover:shadow-md hover:bg-gray-50"
          }
        `}
      >
        <div className={`flex items-center w-full ${contentFlex}`}>
          {/* Bubble */}
          <div
            className={`
              shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border-2 transition-colors
              ${
                isOpen
                  ? "bg-[#FF8B61] text-white border-white"
                  : "bg-white text-[#10404A] border-[#10404A]"
              }
              ${bubbleSpacing}
          `}
          >
            {index + 1}
          </div>

          {/* Title */}
          <h3
            className={`text-sm sm:text-base font-bold uppercase tracking-wide truncate flex-1 ${textAlign}`}
          >
            {item.title}
          </h3>

          {/* Chevron */}
          <div className={`shrink-0 ${isCardsOnRight ? "ml-3" : "mr-3"}`}>
            {isOpen ? (
              <FaChevronUp className="text-[#FF8B61]" />
            ) : (
              <FaChevronDown className="text-gray-400 group-hover:text-[#FF8B61]" />
            )}
          </div>
        </div>
      </button>

      {/* --- EXPANDED BODY --- */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-[1000px] opacity-100 mt-2" : "max-h-0 opacity-0"
        }`}
      >
        <div
          className={`bg-slate-50 rounded-xl p-4 border border-slate-200 ${textAlign}`}
        >
          {/* Main Description */}
          {item.description?.length > 0 && (
            <div className="mb-4 space-y-2">
              {item.description.map((para, i) => (
                <p
                  key={i}
                  className="text-slate-600 text-xs sm:text-sm leading-relaxed"
                >
                  {para}
                </p>
              ))}
            </div>
          )}

          {/* Sessions List */}
          {item.sessions && item.sessions.length > 0 && (
            <div className="space-y-3">
              <h4
                className={`font-bold text-[#10404A] text-[10px] uppercase border-b border-slate-200 pb-1 mb-2 ${textAlign}`}
              >
                Highlights
              </h4>

              {item.sessions.map((session, idx) => {
                const imageForSession = item.images?.[idx];
                return (
                  <div
                    key={idx}
                    className={`bg-white p-2 rounded-lg border border-slate-100 flex gap-3 shadow-sm ${sessionFlex}`}
                  >
                    {/* Text Section */}
                    <div className="flex-1 min-w-0">
                      <h5
                        className={`font-bold text-[#FF8B61] text-xs flex items-center gap-2 mb-1 ${sessionTitleJustify}`}
                      >
                        <FaMicrophone className="w-3 h-3 shrink-0" />
                        <span className="truncate">{session.title}</span>
                      </h5>

                      {session.speaker && (
                        <div
                          className={`mb-1 ${
                            isCardsOnRight ? "text-left" : "text-right"
                          }`}
                        >
                          <span className="text-[9px] bg-blue-50 text-blue-800 px-1.5 py-0.5 rounded-full inline-block font-medium">
                            {session.speaker}
                          </span>
                        </div>
                      )}

                      <p className="text-[10px] text-slate-500 line-clamp-2">
                        {session.description}
                      </p>
                    </div>

                    {/* Image Section */}
                    {imageForSession && (
                      <div className="w-16 h-12 sm:w-20 sm:h-14 relative rounded overflow-hidden shrink-0 bg-slate-100">
                        <Image
                          src={imageForSession}
                          alt={session.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {/* Fallback Gallery (if no sessions but images exist) */}
          {(!item.sessions || item.sessions.length === 0) &&
            item.images?.length > 0 && (
              <div
                className={`grid grid-cols-3 gap-2 mt-2 ${
                  isCardsOnRight ? "" : "direction-rtl"
                }`}
              >
                {item.images.slice(0, 3).map((img, i) => (
                  <div
                    key={i}
                    className="relative h-16 rounded overflow-hidden shadow-sm"
                  >
                    <Image
                      src={img}
                      alt="Gallery"
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   MAIN COMPONENT
   ============================================================ */
export default function StudentInduction() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    // If I click the card that is ALREADY open, close it (set to null).
    // Otherwise, set the new index.
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  
  const YEARS = Object.keys(studentInduction);
  const currentYearData = studentInduction[YEARS[0]];

  const chunkSize = 7;
  const chunks = [];
  if (currentYearData) {
    for (let i = 0; i < currentYearData.length; i += chunkSize) {
      chunks.push(currentYearData.slice(i, i + chunkSize));
    }
  }

  return (
    <div className="w-full bg-white pb-0">
      {/* --- HERO HEADER --- */}
      <div className="bg-gradient-to-r from-[#FF8B61] via-[#10404A] to-[#10404A] py-8 px-4 text-center text-white">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-2 leading-tight tracking-tight">
          Your Journey Starts Here
        </h1>
        <p className="text-base text-white/90 max-w-2xl mx-auto font-light">
          Welcome to IGSB. Step into your transformation.
        </p>
      </div>

      <div className="max-w-full mx-auto px-4 md:px-8 py-8">
        <h2 className="text-2xl font-bold text-[#10404A] mb-8 border-l-8 border-[#FF8B61] pl-4 ">
          Metamorphosis
        </h2>

        {/* --- SNAKE LAYOUT RENDER --- */}
        <div className="space-y-12">
          {chunks.map((chunk, chunkIndex) => {
            // Layout Logic:
            // Chunk 0 (Even): Circle Left | Cards Right
            // Chunk 1 (Odd):  Cards Left  | Circle Right
            const isCircleLeft = chunkIndex % 2 === 0;
            const isCardsOnRight = isCircleLeft; // Alias for clarity

            return (
              <div key={chunkIndex} className="relative w-full">
                <div
                  className={`flex items-center justify-center ${
                    isCircleLeft ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  {/* A. THE HALF CIRCLE IMAGE PLACEHOLDER */}
                  <div
                    className={`hidden lg:block absolute top-1/2 -translate-y-1/2 z-0
                    ${isCircleLeft ? "left-0" : "right-0"}
                  `}
                  >
                    <div
                      className={`
                        relative w-[300px] h-[500px] bg-slate-200 overflow-hidden shadow-inner
                        ${
                          isCircleLeft
                            ? "rounded-r-[250px] rounded-l-none" // Semi-circle facing right
                            : "rounded-l-[250px] rounded-r-none" // Semi-circle facing left
                        }
                      `}
                    >
                      {/* PLACEHOLDER IMAGE */}
                      <Image
                        src="/placement/hr.png"
                        alt="Visual"
                        fill
                        className="object-cover opacity-80 hover:scale-105 transition-transform duration-700"
                      />
                      {/* Overlay Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10 pointer-events-none"></div>
                    </div>
                  </div>

                  {/* B. THE CARDS STACK */}
                  <div className="w-full lg:w-[60%] flex flex-col justify-center z-10 relative">
                    {chunk.map((item, itemIdx) => {
                      const globalIndex = chunkIndex * chunkSize + itemIdx;

                      // Calculate Curve Indentation
                      const indentValue = getCurveIndent(itemIdx, chunk.length);

                      return (
                        <ExpandableTimelineCard
                          key={globalIndex}
                          item={item}
                          index={globalIndex}
                          indentValue={indentValue}
                          isCardsOnRight={isCardsOnRight}
                          isOpen={openIndex === globalIndex}
                          // "Here is the remote control to change the channel"
                          onToggle={() => handleToggle(globalIndex)}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <MemoryLane />
    </div>
  );
}
