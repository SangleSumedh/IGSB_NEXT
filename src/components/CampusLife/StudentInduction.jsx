"use client";
import React, { useState } from "react";
import Image from "next/image";
import { studentInduction } from "@/static/campuslife/student-inductions.js";
import { FaCircle, FaCalendarAlt, FaMicrophone } from "react-icons/fa";

/* ============================================================
   Timeline Item Component
   - Replaces the old Card
   - Implements the "Node -> Pill Title -> Content" layout
   ============================================================ */
function TimelineItem({ item, index, isLast }) {
  return (
    <div className={`relative pl-8 sm:pl-12 ${!isLast ? "pb-12" : "pb-0"}`}>
      
      {/* 1. VERTICAL CONNECTING LINE (The "Path") */}
      {!isLast && (
        <div className="absolute left-[11px] sm:left-[15px] top-4 h-full w-[2px] bg-gray-200"></div>
      )}

      {/* 2. THE "PLANET" MARKER (Left Icon) */}
      <div className="absolute left-0 top-1 w-6 h-6 sm:w-8 sm:h-8 bg-blue-500 rounded-full border-4 border-white shadow-md z-10 flex items-center justify-center">
        <div className="w-2 h-2 bg-white rounded-full" />
      </div>

      {/* 3. THE CONTENT AREA */}
      <div className="flex flex-col space-y-4">
        
        {/* A. The "Pill" Title (Matches the reference image style) */}
        <div className="bg-[#1e293b] text-white py-3 px-6 rounded-r-full rounded-bl-xl shadow-lg self-start inline-block max-w-full sm:max-w-2xl transform transition hover:-translate-y-1">
          <h3 className="text-lg sm:text-xl font-bold tracking-wide uppercase">
            {item.title}
          </h3>
        </div>

        {/* B. The Body Content (Description, Images, Sessions) */}
        <div className="bg-white border-l-4 border-blue-500 pl-4 sm:pl-6 py-2 space-y-6">
          
          {/* Description */}
          {item.description?.length > 0 && (
            <div className="text-gray-700 leading-relaxed space-y-3">
              {item.description.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          )}

          {/* Objective Box */}
          {item.objective && (
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
              <h4 className="font-bold text-blue-800 mb-2 text-sm uppercase">Objective</h4>
              {Array.isArray(item.objective) ? (
                <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm">
                  {item.objective.map((obj, i) => <li key={i}>{obj}</li>)}
                </ul>
              ) : (
                <p className="text-gray-700 text-sm">{item.objective}</p>
              )}
            </div>
          )}

          {/* SESSIONS (If available) */}
          {item.sessions && item.sessions.length > 0 && (
            <div className="space-y-4 mt-4">
              {item.sessions.map((session, idx) => {
                 const imageForSession = item.images?.[idx];
                 return (
                  <div key={idx} className="bg-gray-50 rounded-xl p-4 border border-gray-200 flex flex-col lg:flex-row gap-6">
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
                       <p className="text-sm text-gray-600 leading-relaxed">{session.description}</p>
                    </div>
                    {/* Session Image */}
                    {imageForSession && (
                      <div className="lg:w-48 h-32 relative rounded-lg overflow-hidden flex-shrink-0 shadow-sm">
                        <Image src={imageForSession} alt={session.title} fill className="object-cover" />
                      </div>
                    )}
                  </div>
                 )
              })}
            </div>
          )}

          {/* IMAGE GALLERY (For items without sessions) */}
          {(!item.sessions || item.sessions.length === 0) && item.images?.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-4">
              {item.images.slice(0, 4).map((img, i) => (
                <div key={i} className="relative h-40 w-full rounded-lg overflow-hidden shadow border border-gray-200 group">
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

/* ============================================================
   Main Component
   ============================================================ */
export default function StudentInduction() {
  const YEARS = Object.keys(studentInduction);
  const [selectedYear, setSelectedYear] = useState(YEARS[0]);
  const yearData = studentInduction[selectedYear];

  return (
    <div className="w-full">
      
      {/* --- Header & Year Selector --- */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 border-b pb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Student Induction</h1>
          <p className="text-gray-500 mt-1">Your Journey Starts Here</p>
        </div>

        {/* Year Tabs */}
        <div className="flex flex-wrap gap-2">
          {YEARS.map((year) => (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={`
                px-5 py-2 rounded-full text-sm font-semibold transition-all
                ${selectedYear === year 
                  ? "bg-blue-600 text-white shadow-md ring-2 ring-blue-600 ring-offset-2" 
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }
              `}
            >
              {year}
            </button>
          ))}
        </div>
      </div>

      {/* --- Timeline Flow --- */}
      <div className="max-w-full mx-auto">
        {yearData && yearData.length > 0 ? (
            yearData.map((item, idx) => (
            <TimelineItem 
                key={idx} 
                item={item} 
                index={idx} 
                isLast={idx === yearData.length - 1} 
            />
            ))
        ) : (
            <div className="text-center text-gray-500 py-12">No data found for {selectedYear}</div>
        )}
      </div>

    </div>
  );
}