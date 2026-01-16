
"use client";
import { FaMicrophone } from "react-icons/fa";
import Image from "next/image";
import React, { useState } from "react";
import { studentInduction } from "@/static/campuslife/student-inductions.js";

export function OldPage() {
  // 1. Get all keys & slice to get the past 3 years
  const allYears = Object.keys(studentInduction);
  const pastYearsKeys = allYears.slice(1, 4);

  // 2. State for the currently active tab (defaults to the first past year)
  const [activeTab, setActiveTab] = useState(pastYearsKeys[0]);

  if (pastYearsKeys.length === 0) return null;

  // Helper to get data for the currently selected year
  const activeContent = studentInduction[activeTab]?.[0];

  return (
    <div className="py-8 px-4 md:px-8 bg-slate-50/50">
      {/* --- TABS ROW (Scrollable on mobile) --- */}
      <div className="flex flex-wrap gap-3 mb-8 border-b border-slate-200 pb-4">
        {pastYearsKeys.map((yearKey) => {
          const isActive = activeTab === yearKey;
          return (
            <button
              key={yearKey}
              onClick={() => setActiveTab(yearKey)}
              className={`
                px-5 py-2.5 rounded-md text-sm font-bold transition-all duration-200 border
                ${
                  isActive
                    ? "bg-[#10404A] text-white border-[#10404A] shadow-md"
                    : "bg-white text-[#10404A] border-slate-300 hover:bg-slate-100 hover:border-slate-400"
                }
              `}
            >
              {yearKey}
            </button>
          );
        })}
      </div>

      {/* --- CONTENT AREA (Changes based on active tab) --- */}
      {activeContent ? (
        <div className="bg-white rounded-xl p-6 md:p-8 border border-slate-200 shadow-sm animate-in fade-in zoom-in-95 duration-300">
          {/* Header of Content */}
          <div className="mb-6">
            <h3 className="text-xl md:text-2xl font-bold text-[#10404A]">
              {activeContent.title}
            </h3>
          </div>

          {/* Description Text */}
          <div className="space-y-4 text-slate-600 leading-relaxed text-sm md:text-base">
            {activeContent.description?.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          {/* Image Grid */}
          {activeContent.images && activeContent.images.length > 0 && (
            <div className="mt-8 pt-6 border-t border-slate-100">
              <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">
                Highlights Gallery
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {activeContent.images.slice(0, 4).map((img, i) => (
                  <div
                    key={i}
                    className="relative h-32 md:h-40 rounded-lg overflow-hidden group shadow-sm bg-slate-100 border border-slate-200"
                  >
                    <Image
                      src={img}
                      alt={`Memory ${i}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="text-center text-slate-400 py-12 italic">
          No content available for this year.
        </div>
      )}
    </div>
  );
}

/* ============================================================
   COMPONENT: MemoryLane (The Wrapper Accordion)
   ============================================================ */
export function MemoryLane() {
  const [showMemoryLane, setShowMemoryLane] = useState(false);
  return (
    <div className="w-full bg-white border-t border-slate-200">
      {/* Toggle Button */}
      <button
        onClick={() => setShowMemoryLane(!showMemoryLane)}
        className="w-full py-8 flex flex-col items-center justify-center transition-colors duration-300 group cursor-pointer outline-none hover:bg-slate-50"
      >
        <div className="flex items-center gap-3 text-[#10404A] group-hover:text-[#fb7035] transition-colors">
          <h3 className="text-lg font-bold tracking-wide uppercase">
            Revisit Memory Lane
          </h3>
          <svg
            className={`w-5 h-5 transition-transform duration-500 ${
              showMemoryLane ? "rotate-180" : "rotate-0"
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
        <p className="text-xs text-slate-400 mt-2 font-medium tracking-widest opacity-80 group-hover:opacity-100 transition-opacity">
          CLICK TO EXPAND ARCHIVE
        </p>
      </button>

      {/* Collapsible Area */}
      <div
        className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${
          showMemoryLane ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="border-t border-slate-100 bg-white shadow-inner">
            <OldPage />
          </div>
        </div>
      </div>
    </div>
  );
}

export function TimelineItem({ item, index, isLast }) {
  return (
    <div className={`relative pl-8 sm:pl-12 ${!isLast ? "pb-12" : "pb-0"}`}>
      {!isLast && (
        <div className="absolute left-[11px] sm:left-[15px] top-4 h-full w-[2px] bg-gray-200"></div>
      )}
      <div className="absolute left-0 top-1 w-6 h-6 sm:w-8 sm:h-8 bg-blue-500 rounded-full border-4 border-white shadow-md z-10 flex items-center justify-center">
        <div className="w-2 h-2 bg-white rounded-full" />
      </div>
0
      <div className="flex flex-col space-y-4">
        <div className="bg-[#1e293b] text-white py-3 px-6 rounded-r-full rounded-bl-xl shadow-lg self-start inline-block max-w-full sm:max-w-2xl transform transition hover:-translate-y-1">
          <h3 className="text-lg sm:text-xl font-bold tracking-wide uppercase">
            {item.title}
          </h3>
        </div>

        <div className="bg-white border-l-4 border-blue-500 pl-4 sm:pl-6 py-2 space-y-6">
          {item.description?.length > 0 && (
            <div className="text-gray-700 leading-relaxed space-y-3">
              {item.description.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          )}

          {item.objective && (
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
              <h4 className="font-bold text-blue-800 mb-2 text-sm uppercase">
                Objective
              </h4>
              {Array.isArray(item.objective) ? (
                <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm">
                  {item.objective.map((obj, i) => (
                    <li key={i}>{obj}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-700 text-sm">{item.objective}</p>
              )}
            </div>
          )}

          {item.sessions && item.sessions.length > 0 && (
            <div className="space-y-4 mt-4">
              {item.sessions.map((session, idx) => {
                const imageForSession = item.images?.[idx];
                return (
                  <div
                    key={idx}
                    className="bg-gray-50 rounded-xl p-4 border border-gray-200 flex flex-col lg:flex-row gap-6"
                  >
                    <div className="flex-1 space-y-2">
                      <h5 className="font-bold text-lg text-gray-800 flex items-center gap-2">
                        <FaMicrophone className="text-blue-500" />
                        {session.title}
                      </h5>
                      {session.speaker && (
                        <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded font-semibold">
                          {session.speaker}
                        </span>
                      )}
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {session.description}
                      </p>
                    </div>
                    {imageForSession && (
                      <div className="lg:w-48 h-32 relative rounded-lg overflow-hidden flex-shrink-0 shadow-sm">
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

          {(!item.sessions || item.sessions.length === 0) &&
            item.images?.length > 0 && (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-4">
                {item.images.slice(0, 4).map((img, i) => (
                  <div
                    key={i}
                    className="relative h-40 w-full rounded-lg overflow-hidden shadow border border-gray-200 group"
                  >
                    <Image
                      src={img}
                      alt="Event"
                      fill
                      className="object-cover transition duration-500 group-hover:scale-110"
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
