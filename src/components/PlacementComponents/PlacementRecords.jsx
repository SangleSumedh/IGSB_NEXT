"use client";
import React, { useState } from "react";
import Image from "next/image";
import { placementData } from "@/static/placement/placementdata";
import { FiFileText,FiExternalLink } from "react-icons/fi";

export default function PlacementRecords() {
  const years = Object.keys(placementData);
  const [activeYear, setActiveYear] = useState(years[0]);
  const currentPdfLink = placementData[activeYear]?.pdfUrl || "#";

  return (
    <div className="w-full bg-[#3aa] text-primary">
      <div className="max-w-[1400px] mx-auto py-12 px-4 lg:py-16 lg:px-6">
        
        {/* Title */}
        <h1 className="text-3xl lg:text-4xl font-bold text-white text-center mb-10 lg:mb-16">
          Placement Records
        </h1>

        {/* ================= MAIN RESPONSIVE GRID ================= */}
        {/* Mobile: 1 Column | Desktop: 12 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:items-stretch">
          
          {/* 1. YEAR TABS */}
          {/* Mobile: Horizontal Scroll | Desktop: Vertical List */}
          <div className="lg:col-span-2 flex flex-row lg:flex-col gap-3 overflow-x-auto pb-4 lg:pb-0 scrollbar-hide">
            {/* Mobile Label */}
            <h3 className="lg:hidden text-white text-xs font-bold uppercase tracking-widest mb-1 min-w-max self-center mr-2">
              Select Year:
            </h3>
            
            {/* Desktop Label */}
            <h3 className="hidden lg:block text-white text-sm font-bold uppercase tracking-widest mb-2 px-1">
              Select Year
            </h3>

            {years.map((year) => (
              <button
                key={year}
                onClick={() => setActiveYear(year)}
                className={`whitespace-nowrap px-5 py-3 lg:py-4 rounded-full lg:rounded-lg font-semibold transition-all border-white/10 lg:border-l-4 text-sm lg:text-base ${
                  activeYear === year
                    ? "bg-[#ff885b] text-white lg:border-white shadow-lg"
                    : "bg-secondary text-white lg:border-transparent hover:bg-white/20 hover:text-white"
                }`}
              >
                {year}
              </button>
            ))}
          </div>

          {/* 2. STATS GRID (Photos) */}
          <div className="lg:col-span-6 flex flex-col">
            <h3 className="text-white text-sm font-bold uppercase tracking-widest mb-4">
              Placement Analytics
            </h3>
            {/* Mobile: 1 col or 2 col depending on screen width */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-full">
              {placementData[activeYear].statsImages.slice(0, 4).map((stat, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 flex flex-col items-center justify-center p-4 min-h-[220px]"
                >
                  <div className="relative w-full h-40">
                    <Image
                      src={stat.img}
                      alt={stat.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-center font-semibold text-gray-700 mt-2 text-sm">
                    {stat.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>

          {/* 3. PDF PREVIEWER */}
          <div className="lg:col-span-4 flex flex-col">
            <h3 className="text-white text-sm font-bold uppercase tracking-widest mb-4">
              Official Report
            </h3>
            
            {/* Mobile: Fixed Height | Desktop: Full Height */}
            <div className="lg:h-full bg-white/5 border border-white/10 rounded-2xl p-1 flex flex-col">
              <div className="bg-white rounded-xl w-full h-full flex flex-col items-center justify-center p-8 text-center space-y-4 shadow-inner min-h-[350px] lg:min-h-0">
                
                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-red-50 text-red-500 rounded-full flex items-center justify-center mb-2 shadow-sm">
                  <FiFileText size={32} className="lg:w-10 lg:h-10" />
                </div>
                
                <div>
                  <h4 className="text-xl lg:text-2xl font-bold text-gray-800">
                    Report {activeYear}
                  </h4>
                  <p className="text-gray-500 text-sm lg:text-base mt-2 max-w-[220px] mx-auto leading-relaxed">
                    Detailed analysis of student offers and salary packages.
                  </p>
                </div>

                <a 
                  href={currentPdfLink} 
                  target="_blank" 
                  rel="noreferrer"
                  className="mt-4 lg:mt-6 px-6 lg:px-8 py-3 bg-secondary text-white rounded-lg font-bold flex items-center gap-2 hover:bg-[#ff885b] transition-colors shadow-lg shadow-secondary/20 text-sm lg:text-base"
                >
                  View Full PDF <FiExternalLink size={16} />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
