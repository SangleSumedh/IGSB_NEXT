"use client";

import Image from "next/image";
import React from "react";

const CampusBeat = () => {
  return (
    <div className="bg-white py-10 sm:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* ✅ Title */}
        <h2 className="text-xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 text-center sm:text-left">
          The Campus Beat
        </h2>

        {/* ✅ Description */}
        <p className="text-gray-700 text-sm sm:text-lg max-w-5xl leading-relaxed mb-6 sm:mb-10 text-center sm:text-left">
          From celebrity talks to Lit Fests and interactions with industry
          icons, our campus pulses with energy, big ideas, and unforgettable
          moments — making student life dynamic, buzzing, inspiring, and full of
          meaningful connections & opportunities.
        </p>
      </div>

      {/* ✅ Horizontal marquee — Hidden on mobile */}
      <div className="hidden sm:block relative w-full overflow-hidden h-[30vh] sm:h-[50vh] md:h-[65vh]">
        <div className="flex w-[200%] sm:w-[1200%] animate-smoothScroll relative h-full">
          {/* Two identical images for seamless looping */}
          <div className="relative w-1/2 h-full">
            <Image
              src="/newnewMarque.jpg"
              alt="Campus Life"
              fill
              className="object-cover"
              quality={100}
              priority
              unoptimized={true}
            />
          </div>
          <div className="relative w-1/2 h-full">
            <Image
              src="/newnewMarque.jpg"
              alt="Campus Life duplicate"
              fill
              className="object-cover"
              quality={100}
              priority
              unoptimized={true}
            />
          </div>
        </div>
      </div>

      {/* ✅ Animation Styles */}
      <style jsx>{`
        @keyframes smoothScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-smoothScroll {
          animation: smoothScroll 60s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default CampusBeat;
