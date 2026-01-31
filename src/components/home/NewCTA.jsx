"use client";
import React from "react";
import { Download } from "lucide-react";
import Image from "next/image";

function NewCTA() {
  const handleDownload = () => {
    alert("Downloading brochure...");
  };

  const handleImageError = (e) => {
    e.currentTarget.style.display = "none";
  };

  return (
    <section
      className="
        relative w-full 
        bg-gradient-to-r from-[#10404A] to-[#1F6D71] 
        text-white shadow-xl overflow-hidden
      "
    >
      {/* 
        Height rules:
        - Mobile: auto
        - Desktop normal: min-h instead of fixed h
        - Short-height desktop (≤600px): force auto height + padding
      */}
      <div
        className="
          grid grid-cols-1 md:grid-cols-8
          h-auto
          md:min-h-[260px]
          xl:min-h-[300px]
          max-h-none
          [@media(min-width:1024px)_and_(max-height:600px)]:h-auto
          [@media(min-width:1024px)_and_(max-height:600px)]:py-6
        "
      >
        {/* LEFT IMAGE */}
        <div className="flex md:col-span-1 items-end justify-center relative h-40 md:h-full pt-4 md:pt-0">
          <Image
            src="/Home/confused.png"
            alt="Confused person"
            height={200}
            width={180}
            onError={handleImageError}
            className="h-full w-auto object-contain object-bottom opacity-90"
          />
        </div>

        {/* TEXT + CTA */}
        <div
          className="
            flex flex-col justify-center items-center text-center
            px-4 pb-8 pt-2
            md:py-0 md:col-span-2 z-10 relative
            [@media(min-width:1024px)_and_(max-height:600px)]:pb-4
          "
        >
          <h2 className="text-2xl lg:text-3xl font-bold mb-3 leading-tight">
            <span className="font-[baskerville-bt] italic block">
              Still confused?
            </span>
            <span className="block text-xl lg:text-2xl mt-1">
              Discover more about IGSB.
            </span>
          </h2>

          <button
            onClick={handleDownload}
            className="
              inline-flex items-center gap-2
              px-5 py-3 min-w-[150px]
              text-sm font-bold text-[#10404A]
              bg-white rounded-full shadow-lg
              hover:-translate-y-0.5 transition-all
            "
          >
            <Download size={18} />
            Download Brochure
          </button>
        </div>

        {/* RIGHT IMAGE (DESKTOP ONLY) */}
        <div className="hidden md:block md:col-span-5 relative w-full">
          <Image
            src="/Home/igsb_grid.webp"
            alt="IGSB Campus"
            onError={handleImageError}
            fill
            className="
              object-cover object-center
              opacity-80 md:opacity-100
              [mask-image:linear-gradient(to_right,transparent,black_15%)]
              [-webkit-mask-image:linear-gradient(to_right,transparent,black_15%)]
            "
          />
        </div>
      </div>
    </section>
  );
}

export default NewCTA;
