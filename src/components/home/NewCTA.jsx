"use client";

import React from "react";

function NewCTA() {
  const handleDownload = () => {
    alert("Downloading brochure...");
  };

  const handleImageError = (e) => {
    e.currentTarget.style.display = "none";
  };

  return (
    <div
      className="
        relative w-full overflow-hidden
        bg-gradient-to-r from-[#10404A] to-[#1F6D71]
        text-white shadow-xl
      "
    >
      {/* GRID WRAPPER */}
      <div className="grid grid-cols-1 lg:grid-cols-8">
        {/* COLUMN 1 — IMAGE (NO PY, TOUCHES BOTTOM) */}
        <div className="relative flex items-end justify-center lg:justify-start">
          <img
            src="/Home/confused.png"
            alt="Confused person illustration"
            onError={handleImageError}
            className="
              h-[25vh]
              w-auto
              object-contain
              opacity-90
            "
          />
        </div>

        {/* COLUMN 2 — TEXT + CTA */}
        <div className="flex flex-col justify-center items-center text-center px-6 md:px-10 py-8 md:col-span-2">
          <h2 className="text-2xl md:text-3xl  lg:text-4xl font-bold text-white mb-4 leading-tight">
            <span className="font-[baskerville-bt] italic">
              Still confused?
            </span>
            <span className="block text-3xl">Discover more about IGSB.</span>
          </h2>

          <button
            onClick={handleDownload}
            className="
              inline-flex items-center justify-center gap-3
              px-2 py-3 w-3/5
               font-semibold
              text-orange-500 bg-white
              rounded-md shadow-lg
              hover:shadow-xl hover:-translate-y-0.5
              transition
            "
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Download Brochure
          </button>
        </div>
        <div className="hidden max-h-[25vh] relative lg:flex items-center justify-center col-span-5">
          <img
            src="/Home/IGSB.jpg"
            alt="Confused person illustration"
            onError={handleImageError}
            className="
      object-contain
      object-top
      [mask-image:linear-gradient(to_right,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_50%,rgba(0,0,0,1)_100%)]
      [-webkit-mask-image:linear-gradient(to_right,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_50%,rgba(0,0,0,1)_100%)]
    "
          />
        </div>
      </div>
    </div>
  );
}

export default NewCTA;
