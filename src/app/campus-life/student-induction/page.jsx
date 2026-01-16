import React from "react";
import Image from "next/image";
import RoadmapSection from "@/components/CampusLife/StudentInduction";
import { MemoryLane } from "@/components/CampusLife/MemoryLane";
import RoadmapSectionMobile from "@/components/CampusLife/RoadmapSection";

export default function StudentInductionPage() {
  return (
    <div className="">
      {/* Page Content */}
      <div className="max-w-full mx-auto ">
        <div className="hidden md:block">
          <RoadmapSection />
        </div>

        {/* MOBILE */}
        <div className="block md:hidden">
          <RoadmapSectionMobile />
        </div>
        <MemoryLane />
      </div>
    </div>
  );
}
