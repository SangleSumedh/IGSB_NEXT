"use client";

import React from "react";
import Image from "next/image";
import Sidebar from "@/components/Sidebar";
import ClubsAndSocieties from "@/components/CampusLife/ClubsAndSocieties";

export default function ClubsAndSocietiesPage() {
  return (
    <div className="w-full bg-white text-gray-800">
      {/* Banner */}
      <div className="w-full h-[60vh] relative">
        <Image
          src="/BannerOverviewPage.jpg"
          alt="Clubs and Societies"
          fill
          className="object-cover"
          priority
        />
          <div className="absolute inset-0 bg-black/40"></div>
        <h1 className="absolute left-1/2 top-50 -translate-x-1/2 text-5xl font-bold text-white drop-shadow-lg">Clubs and Societies</h1>
      </div>
      
      <div className="max-w-full mx-auto flex flex-col lg:flex-row gap-6 py-10 px-4">
        <div className="lg:w-3/4">
          <ClubsAndSocieties />
        </div>

        <div className="lg:w-1/4">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
