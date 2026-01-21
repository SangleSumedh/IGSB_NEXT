import React from "react";
import ScrollCrushWrapper from "@/components/ScrollCrushWrapper";
import RoadmapSection from "@/components/CampusLife/StudentInduction";
import RoadmapSectionMobile from "@/components/CampusLife/RoadmapSection";
import { MemoryLane } from "@/components/CampusLife/MemoryLane";
import ArambhaSection from "@/components/CampusLife/ArambhaSection";
import ArambhaSectionMobile from "@/components/CampusLife/ArambhSectionMobile";
import Csuite from "@/components/CampusLife/Csuite";
import StudentWelfare from "@/components/CampusLife/StudentEngagement";
import ExplorePast from "@/components/CampusLife/Explorepast";

export default function StudentInductionPage() {
  return (
    <div className="bg-white text-gray-900">
      {/* DESKTOP VERSION with ScrollCrushWrapper */}
      <div className="hidden md:block">
        <ScrollCrushWrapper Hero={<RoadmapSection />}>
          <div className="bg-white relative z-10">
            <ArambhaSection />
            <MemoryLane />
            <Csuite />
            <ExplorePast />
          </div>
        </ScrollCrushWrapper>
      </div>

      {/* MOBILE VERSION - Simple stacked layout */}
      <div className="block md:hidden">
        <RoadmapSection />
        <ArambhaSection />
        <MemoryLane />
        <Csuite />
        <ExplorePast />
      </div>
    </div>
  );
}
