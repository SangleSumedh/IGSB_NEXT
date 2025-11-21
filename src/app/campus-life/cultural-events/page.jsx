"use client";

import React from "react";
import Image from "next/image";
import Sidebar from "@/components/Sidebar";
import CulturalEvents from "@/components/CampusLife/CulturalEvents";

export default function CulturalActivitiesPage() {
  return (
    <div className="w-full bg-white text-gray-800">
      {/* Banner */}
      <div className="w-full h-[40vh] sm:h-[50vh] lg:h-[60vh] relative">
        <Image
          src="/cultural-events/CulturalBanner.webp"
          alt="Cultural Activities"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </div>

      {/* Layout */}
      <div className="max-w-full mx-auto">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Main Content */}
          <div className="lg:w-3/4 space-y-6 px-2 py-3 m-3">
            <CulturalEvents />
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/4">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
}
