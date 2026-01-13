"use client";

import React from "react";
import { FaDownload } from "react-icons/fa";

function NewCTA() {
  const handleDownload = () => {
    alert("Downloading brochure...");
  };

  const handleImageError = (e) => {
    e.currentTarget.style.display = "none";
  };

  return (
    <div className="w-full bg-gradient-to-r from-[#10404A] to-[#1F6D71] text-white shadow-xl overflow-hidden">
      {/* MOBILE FIRST */}
      <div className="flex flex-col md:grid md:grid-cols-12 ">
        {/* LEFT VECTOR */}
        <div
          className="
          flex justify-center items-end
          h-40 md:h-full
          md:col-span-2
        "
        >
          <img
            src="/Home/confused.png"
            alt="Confused person"
            onError={handleImageError}
            className="
              h-full md:h-[135%]
              w-auto
              object-contain object-bottom
              opacity-90
            "
          />
        </div>

        {/* TEXT + CTA */}
        <div
          className="
            flex flex-col justify-center items-center
            text-center
            px-4 py-6
            gap-4
            md:col-span-3
            
          "
        >
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold leading-tight max-w-xs">
            <span className="font-[baskerville-bt] italic">
              Still confused?
            </span>
            <span className="block text-base sm:text-lg md:text-xl lg:text-2xl mt-1">
              Discover more about IGSB.
            </span>
          </h2>

          <button
            onClick={handleDownload}
            className="
              inline-flex items-center gap-2
              px-6 py-3
              text-sm font-bold
              text-[#10404A] bg-white
              rounded-full shadow-lg
              hover:-translate-y-0.5
              transition-all duration-300
            "
          >
            <FaDownload />
            Download Brochure
          </button>
        </div>

        {/* RIGHT IMAGE — HIDDEN ON MOBILE */}
        <div className="hidden md:block md:col-span-7 h-full w-full">
          <img
            src="/Home/IGSBGrid2.png"
            alt="IGSB Campus"
            onError={handleImageError}
            className="
              w-full h-full
              object-cover object-center
              opacity-85
              [mask-image:linear-gradient(to_right,transparent,black_15%)]
              [-webkit-mask-image:linear-gradient(to_right,transparent,black_15%)]
            "
          />
        </div>
      </div>
    </div>
  );
}

export default NewCTA;
