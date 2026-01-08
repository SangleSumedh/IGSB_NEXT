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
    <div className="relative w-full bg-gradient-to-r from-[#10404A] to-[#1F6D71] text-white shadow-xl overflow-hidden">
      
      {/* FIXED HEIGHT — UNCHANGED */}
      <div className="grid grid-cols-1 md:grid-cols-8 h-auto md:h-[40vh] items-stretch">

        {/* LEFT VECTOR — ADJUSTED FOR EQUAL HEIGHT */}
        <div className="flex md:col-span-2 items-end justify-center relative h-44 md:h-full">
          <img
            src="/Home/confused.png"
            alt="Confused person"
            onError={handleImageError}
            className="
              h-[120%] md:h-[135%]
              w-auto
              object-contain object-bottom
              opacity-90
              transition-transform duration-500
            "
          />
        </div>

        {/* TEXT + CTA — VERTICALLY CENTERED ON XL AND ABOVE */}
        <div
          className="
            flex  flex-col justify-center  xl:justify-center
            items-center xl:items-center
            text-center
            px-4
            h-full xl:h-[80%]
            md:col-span-2
            z-10
            gap-4
          "
        >
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold leading-tight max-w-xs">
            <span className="font-[baskerville-bt] italic">
              Still confused?
            </span>
            <span className="block text-lg md:text-xl lg:text-2xl mt-1">
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

        {/* RIGHT IMAGE — UNCHANGED */}
        <div className="hidden md:block md:col-span-4 relative h-full w-full">
          <img
            src="/Home/igsb_grid.jpg"
            alt="IGSB Campus"
            onError={handleImageError}
            className="
              w-full h-full
              object-cover object-center
              opacity-85
              scale-[1.02]
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