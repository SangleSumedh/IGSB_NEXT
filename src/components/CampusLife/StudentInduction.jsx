"use client";
import React, { useState } from "react";
import Image from "next/image";
import { studentInduction } from "@/static/campuslife/student-inductions.js";
import { MemoryLane } from "@/components/CampusLife/MemoryLane";
import { FaMicrophone, FaChevronDown, FaChevronUp, FaQuoteLeft } from "react-icons/fa";

/* ============================================================
   COMPONENT: Continuous Carousel (The Visual Reel)
   ============================================================ */
const ContinuousCarousel = ({ images }) => {
  const carouselImages = images || [
    "/placement/hr.png",
    "/placement/marketing.png",
    "/placement/hr.png", 
    "/placement/marketing.png",
  ];

  return (
    <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100">
      {/* Decorative Header within the frame */}
      <div className="absolute top-0 left-0 right-0 h-12 bg-white/90 backdrop-blur-sm z-20 flex items-center justify-between px-4 border-b border-slate-100">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
        </div>
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Memories</span>
      </div>

      <div className="relative w-full h-full overflow-hidden mt-0">
        <div className="flex h-full w-[200%] animate-carousel-scroll">
          {[...carouselImages, ...carouselImages].map((src, i) => (
            <div key={i} className="relative w-full h-full shrink-0">
               <Image 
                 src={src} 
                 alt="Carousel Item" 
                 fill 
                 className="object-cover" 
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-carousel-scroll {
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

/* ============================================================
   COMPONENT: Stack Card (Clean Design)
   ============================================================ */
function InductionCard({ item, index, isOpen, onToggle }) {
  return (
    <div className="group relative mb-4 last:mb-0">
      {/* Connecting Line (Visual Thread) */}
      <div className={`absolute left-6 top-14 bottom-[-16px] w-0.5 bg-slate-200 z-0 ${isOpen ? 'opacity-100' : 'opacity-100 group-last:opacity-0'}`}></div>

      <div 
        className={`relative z-10 bg-white rounded-2xl border transition-all duration-300 overflow-hidden
        ${isOpen 
          ? "border-[#FF8B61] shadow-xl ring-1 ring-[#FF8B61]/20" 
          : "border-slate-200 shadow-sm hover:shadow-md hover:border-[#10404A]/30"
        }`}
      >
        {/* --- HEADER --- */}
        <button
          onClick={onToggle}
          className="w-full flex items-center p-4 sm:p-5 text-left bg-white transition-colors"
        >
          {/* Index Bubble */}
          <div className={`
            shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold border-4 transition-all duration-300 mr-5 shadow-sm
            ${isOpen 
              ? "bg-[#FF8B61] text-white border-white scale-110" 
              : "bg-slate-50 text-[#10404A] border-slate-100 group-hover:border-[#10404A]/20"
            }
          `}>
            {index + 1}
          </div>

          {/* Title Area */}
          <div className="flex-1 min-w-0">
            <h3 className={`text-base sm:text-lg font-bold uppercase tracking-tight truncate transition-colors ${isOpen ? 'text-[#10404A]' : 'text-slate-700'}`}>
              {item.title}
            </h3>
            <p className="text-xs text-slate-400 font-medium mt-0.5">
              Click to expand details
            </p>
          </div>

          {/* Chevron */}
          <div className={`shrink-0 ml-4 w-8 h-8 flex items-center justify-center rounded-full transition-all duration-300 ${isOpen ? 'bg-[#10404A] rotate-180' : 'bg-slate-50'}`}>
             <FaChevronDown className={`w-3 h-3 ${isOpen ? 'text-white' : 'text-slate-400'}`} />
          </div>
        </button>

        {/* --- EXPANDED BODY --- */}
        <div
          className={`transition-all duration-500 ease-in-out ${
            isOpen ? "max-h-[1200px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="p-5 pt-0 sm:pl-[5.5rem]"> {/* Indent content to align with text, not bubble */}
            <div className="h-px w-full bg-slate-100 mb-5"></div>
            
            {/* Description */}
            {item.description?.length > 0 && (
              <div className="mb-6 space-y-3">
                {item.description.map((para, i) => (
                  <p key={i} className="text-slate-600 text-sm leading-relaxed flex gap-3">
                    {i === 0 && <FaQuoteLeft className="text-[#FF8B61]/40 shrink-0 mt-1" />}
                    <span>{para}</span>
                  </p>
                ))}
              </div>
            )}

            {/* Sessions / Highlights */}
            {item.sessions && item.sessions.length > 0 && (
              <div className="grid grid-cols-1 gap-3">
                <h4 className="font-bold text-[#10404A] text-xs uppercase tracking-wider mb-1 flex items-center gap-2">
                  <span className="w-1 h-4 bg-[#FF8B61] rounded-full"></span>
                  Key Highlights
                </h4>
                
                {item.sessions.map((session, idx) => {
                  const imageForSession = item.images?.[idx];
                  return (
                    <div key={idx} className="bg-slate-50 hover:bg-[#10404A]/5 p-3 rounded-xl border border-slate-100 transition-colors flex gap-4 items-start group/session">
                      {/* Optional Session Image */}
                      {imageForSession ? (
                        <div className="w-16 h-16 relative rounded-lg overflow-hidden shrink-0 shadow-sm">
                          <Image src={imageForSession} alt={session.title} fill className="object-cover group-hover/session:scale-110 transition-transform duration-500" />
                        </div>
                      ) : (
                         <div className="w-16 h-16 rounded-lg bg-white border border-slate-200 flex items-center justify-center shrink-0 text-[#FF8B61]">
                           <FaMicrophone />
                         </div>
                      )}

                      <div className="flex-1">
                        <h5 className="font-bold text-[#10404A] text-sm mb-1">{session.title}</h5>
                        {session.speaker && (
                           <span className="text-[10px] bg-white border border-slate-200 text-slate-500 px-2 py-0.5 rounded-full font-medium inline-block mb-1.5">
                             {session.speaker}
                           </span>
                        )}
                        <p className="text-xs text-slate-500 leading-snug">{session.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
            
            {/* Gallery Fallback */}
            {(!item.sessions || item.sessions.length === 0) && item.images?.length > 0 && (
               <div className="mt-4 grid grid-cols-3 gap-2">
                 {item.images.map((img, i) => (
                   <div key={i} className="relative h-20 rounded-lg overflow-hidden">
                     <Image src={img} alt="Gallery" fill className="object-cover" />
                   </div>
                 ))}
               </div>
            )}
          </div>
          <div className="h-4"></div>{/* Bottom spacer */}
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   MAIN COMPONENT
   ============================================================ */
export default function StudentInduction() {
  const [openIndex, setOpenIndex] = useState(0); // Default open first item

  const handleToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const YEARS = Object.keys(studentInduction);
  const currentYearData = studentInduction[YEARS[0]] || [];

  return (
    <div className="w-full bg-slate-50/50 min-h-screen">
      
      {/* --- HERO HEADER --- */}
      <div className="bg-[#10404A] relative overflow-hidden py-16 px-4 text-center text-white mb-8">
        {/* Background Patterns */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#FF8B61]/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FF8B61]/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

        <div className="relative z-10 max-w-3xl mx-auto">
          <span className="inline-block py-1 px-3 rounded-full bg-[#FF8B61]/20 border border-[#FF8B61]/50 text-[#FF8B61] text-xs font-bold uppercase tracking-widest mb-4">
            New Beginnings
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight">
            Metamorphosis <span className="text-[#FF8B61]">2024</span>
          </h1>
          <p className="text-lg text-slate-300 font-light max-w-xl mx-auto leading-relaxed">
            Your transformation starts here. Explore the journey of your first days at IGSB.
          </p>
        </div>
      </div>

      {/* --- CONTENT GRID --- */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-20">
        
        <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-start">
          
          {/* LEFT COLUMN: Sticky Visuals (Desktop Only) */}
          <div className="hidden lg:block lg:col-span-5 sticky top-24">
            <div className="space-y-6">
               <div className="bg-white p-6 rounded-3xl shadow-xl border border-slate-100">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-[#10404A]">Visual Journey</h3>
                    <p className="text-slate-400 text-sm">Glimpses from the induction week</p>
                  </div>
                  <ContinuousCarousel />
                  
                  {/* Additional Info Box */}
                  <div className="mt-6 p-4 bg-[#10404A] rounded-xl text-white text-center">
                    <p className="text-xs text-white/60 uppercase tracking-widest mb-1">Total Sessions</p>
                    <p className="text-3xl font-bold">{currentYearData.length}</p>
                  </div>
               </div>
            </div>
          </div>

          {/* RIGHT COLUMN: The Card Stack */}
          <div className="col-span-1 lg:col-span-7">
             {/* Mobile visual header (visible only on small screens) */}
             <div className="block lg:hidden mb-8">
                <ContinuousCarousel />
             </div>

             <div className="flex flex-col relative">
                {currentYearData.map((item, index) => (
                  <InductionCard
                    key={index}
                    item={item}
                    index={index}
                    isOpen={openIndex === index}
                    onToggle={() => handleToggle(index)}
                  />
                ))}
             </div>

             {/* Footer Note */}
             <div className="mt-12 text-center">
                <p className="text-slate-400 text-sm">End of Induction Timeline</p>
                <div className="w-2 h-2 bg-slate-300 rounded-full mx-auto mt-2"></div>
             </div>
          </div>

        </div>
      </div>

      <MemoryLane />
    </div>
  );
}