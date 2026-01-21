"use client";

import { useState } from "react";
import StudentWelfare from "./StudentEngagement";

export default function RevisitMemoryLane() {
  const [open, setOpen] = useState(false);

  return (
    <section className="w-full bg-white border-t border-slate-200 ">
      {/* TOGGLE HEADER */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full py-8 flex flex-col items-center justify-center
                   transition-colors duration-300 group
                   hover:bg-slate-50"
      >
        <div className="flex items-center gap-3 text-[#10404A] group-hover:text-[#fb7035] transition-colors">
          <h3 className="text-lg font-bold tracking-wide uppercase">
            Explore Past Student Engagements
          </h3>

          {/* ARROW */}
          <svg
            className={`w-5 h-5 transition-transform duration-500 ${
              open ? "rotate-180" : ""
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

        <p className="text-xs text-slate-400 mt-2 font-medium tracking-widest">
          CLICK TO EXPAND ARCHIVE
        </p>
      </button>

      {/* COLLAPSIBLE CONTENT */}
      <div
        className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="bg-white border-t border-slate-100 shadow-inner">
            <StudentWelfare />
          </div>
        </div>
      </div>
    </section>
  );
}
