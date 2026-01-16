import React from "react";
import Image from "next/image";
import RoadmapSection from "@/components/CampusLife/StudentInduction";
import { MemoryLane } from "@/components/CampusLife/MemoryLane";

export default function StudentInductionPage() {
  return (
    <div className="">
      
      {/* Page Content */}
      <div className="max-w-full mx-auto ">
        <RoadmapSection />
        <MemoryLane />
      </div>
    </div>
  );
}
