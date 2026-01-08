"use client";

import React from "react";
import { ArrowBigUp, Download } from "lucide-react";
import { FaDownload } from "react-icons/fa";

function NewCTA() {
  const handleDownload = () => {
    alert("Downloading brochure...");
  };

  const handleImageError = (e) => {
    e.currentTarget.style.display = "none";
  };

  return (
    <div className="relative  w-full bg-gradient-to-r from-[#10404A] to-[#1F6D71] text-white shadow-xl overflow-hidden">
      {/* CONTAINER HEIGHT:
        - Mobile: h-auto (Stack content vertically)
        - Desktop (md+): h-[25vh] (Strict horizontal strip)
      */}
      <div className="grid grid-cols-1 md:grid-cols-8 h-auto md:h-[25vh]">
        {/* --- COLUMN 1: LEFT IMAGE (Confused Person) --- 
            Mobile: Visible, height fixed to h-40 (approx 160px) to not dominate screen.
            Desktop: Visible, takes full height of container.
        */}
        <div className="flex md:col-span-1 items-end justify-center relative h-40 md:h-full pt-4 md:pt-0">
          <img
            src="/Home/confused.png"
            alt="Confused person"
            onError={handleImageError}
            className="
              h-full w-auto 
              object-contain object-bottom 
              opacity-90 hover:scale-105 transition-transform duration-500
            "
          />
        </div>

        {/* --- COLUMN 2: TEXT & CTA --- 
            Mobile: Stacked below image.
            Desktop: Center aligned (cols 2-3).
        */}
        <div className="flex flex-col justify-center items-center text-center px-4 pb-8 pt-2 md:py-0 md:col-span-2 z-10 relative">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-3 leading-tight">
            <span className="font-[baskerville-bt] italic text-white">
              Still confused?
            </span>
            <span className="block text-xl lg:text-2xl mt-1">
              Discover more about IGSB.
            </span>
          </h2>

          <button
            onClick={handleDownload}
            className="
              inline-flex items-center justify-center gap-2
              px-5 py-3 w-auto min-w-[150px]
              text-sm font-bold
              text-[#10404A] bg-white
              rounded-full shadow-lg
              hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] 
              hover:-translate-y-0.5
              transition-all duration-300
            "
          >
            {/* <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg> */}
            <FaDownload/>
            Download Brochure
          </button>
        </div>

        {/* --- COLUMN 3: RIGHT IMAGE (IGSB Campus) --- 
            Mobile: HIDDEN (as requested).
            Desktop: Visible (cols 4-8), strict 25vh height.
        */}
        <div className="hidden md:block md:col-span-5 relative h-full w-full">
          <div className="absolute inset-0 w-full h-full">
            <img
              src="/Home/igsb_grid.jpg"
              alt="IGSB Campus"
              onError={handleImageError}
              className="
                w-full h-full 
                object-cover object-center
                opacity-80 mix-blend-overlay md:mix-blend-normal md:opacity-100
                [mask-image:linear-gradient(to_right,transparent,black_15%)]
                [-webkit-mask-image:linear-gradient(to_right,transparent,black_15%)]
              "
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewCTA;
