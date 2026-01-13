"use client";

import ScrollCrushWrapper from "@/components/ScrollCrushWrapper";
import PlacementHero from "@/components/PlacementComponents/PlacementHero";

import CASsection from "@/components/PlacementComponents/CASection";
import Impact from "@/components/PlacementComponents/Impact";
import Career from "@/components/PlacementComponents/Career";
import Upskilling from "@/components/PlacementComponents/Upskilling";
import RecruitersSection from "@/components/home/RecruiterSection";
import PlacementRecords from "@/components/PlacementComponents/PlacementRecords";
import PlacementOrientation from "@/components/PlacementComponents/PlacementOrientation";
import PlacementIndustryVisit from "@/components/PlacementComponents/PlacementIndustryVisit";
import PlacementCell from "@/components/PlacementComponents/PlacementCell";
import RecruiterPlacement from "@/components/PlacementComponents/RecruiterPlacement";
import DomainSteps from "@/components/PlacementComponents/DomainSteps";
import PuzzleSkills from "@/components/PlacementComponents/PuzzleSection";

export default function Placement() {
  return (
    <div className="bg-white text-gray-900">
      {/* ⬅️ FIX: Hero must be passed as prop */}
      <ScrollCrushWrapper Hero={<PlacementHero />}>
        {/* Sections with scroll fade animation */}
        <Impact />
        {/* <RecruitersSection /> */}
        <RecruiterPlacement />
        <Career />
        <CASsection />
        {/* <Upskilling /> */}
        <DomainSteps />
        <PuzzleSkills />
        <PlacementRecords />
        {/* <PlacementOrientation /> */}
        {/* <PlacementIndustryVisit /> */}
        {/* <PlacementCell /> */}
      </ScrollCrushWrapper>
    </div>
  );
}
