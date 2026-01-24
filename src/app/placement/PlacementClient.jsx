"use client";

import ScrollCrushWrapper from "@/components/ScrollCrushWrapper";
import PlacementHero from "@/components/PlacementComponents/PlacementHero";
import CASsection from "@/components/PlacementComponents/CASection";
import Impact from "@/components/PlacementComponents/Impact";
import Career from "@/components/PlacementComponents/Career";
import RecruiterPlacement from "@/components/PlacementComponents/RecruiterPlacement";
import DomainSteps from "@/components/PlacementComponents/DomainSteps";
import PuzzleSkills from "@/components/PlacementComponents/PuzzleSection";
import PlacementRecords from "@/components/PlacementComponents/PlacementRecords";
import Testimonials from "@/components/home/Testimonials";

export default function PlacementClient() {
  return (
    <div className="bg-white text-gray-900">
      <ScrollCrushWrapper Hero={<PlacementHero />}>
        <Impact />
        <RecruiterPlacement />
        <Career />
        <CASsection />
        <DomainSteps />
        <PuzzleSkills />
        <PlacementRecords />
        <Testimonials />
      </ScrollCrushWrapper>
    </div>
  );
}