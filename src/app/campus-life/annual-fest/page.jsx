"use client";

import React from "react";
import Image from "next/image";
import Sidebar from "@/components/Sidebar";
import AnnualFest from "@/components/CampusLife/AnnualFest";

export default function AnnualFestPage() {
  return (
    <div className="w-full bg-white text-gray-800">
      {/* Banner */}
      <div className="w-full h-[50vh] relative">
        <Image
          src="/BannerOverviewPage.jpg"
          alt="Annual Fest"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>

        <h1 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
          text-5xl font-bold text-white drop-shadow-lg">
          Annual Fest
        </h1>
      </div>

      {/* Layout */}
      <div className="max-w-full mx-auto flex flex-col lg:flex-row gap-6 p-6">
        <div className="lg:w-3/4">
          <AnnualFest />
        </div>

        <div className="lg:w-1/4">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
