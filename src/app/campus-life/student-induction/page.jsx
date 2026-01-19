import React from "react";
import ScrollCrushWrapper from "@/components/ScrollCrushWrapper";

// Components
import RoadmapSection from "@/components/CampusLife/StudentInduction";
import RoadmapSectionMobile from "@/components/CampusLife/RoadmapSection";
import { MemoryLane } from "@/components/CampusLife/MemoryLane";
import ArambhaSection from "@/components/CampusLife/ArambhaSection";

export default function StudentInductionPage() {
  
  // 1. Define the Hero content (The Roadmap)
  // We wrap the responsive logic here so it can be passed as a single prop
  const RoadmapHero = (
    <div className="w-full h-full relative">
      {/* DESKTOP ROADMAP */}
      <div className="hidden md:block">
        <RoadmapSection />
      </div>

      {/* MOBILE ROADMAP */}
      <div className="block md:hidden">
        <RoadmapSectionMobile />
      </div>
    </div>
  );

  return (
    <div className="bg-white text-gray-900">
      {/* 2. Pass RoadmapHero to the wrapper */}
      <ScrollCrushWrapper Hero={RoadmapHero}>
        
        {/* 3. The content that scrolls OVER the roadmap */}
        {/* Added a background color to ensure it covers the hero cleanly */}
        <div className="bg-white relative z-10">
          <ArambhaSection />
          <MemoryLane />
        </div>

      </ScrollCrushWrapper>
    </div>
  );
}