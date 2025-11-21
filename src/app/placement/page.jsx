import Image from "next/image";
import Typingsection from "@/components/PlacementComponents/TypingSection";
import CASsection from "@/components/PlacementComponents/CASection";
import TrainingOverview from "@/components/PlacementComponents/TrainingOverview";
import Impact from "@/components/PlacementComponents/Impact";
import Companies from "@/components/PlacementComponents/Companies";
import ResearchLab from "@/components/PlacementComponents/ResearchLab";
import Career from "@/components/PlacementComponents/Career";
import Testimonials from "@/components/PlacementComponents/Testimonials";
import PlacementInformation from "@/components/PlacementComponents/PlacementInformation";
import Upskilling from "@/components/PlacementComponents/Upskilling";
import PlacementCarousel from "@/components/PlacementComponents/PlacementCarousel";

function Placement() {
  return (
    <div className="w-full bg-white">
      <PlacementCarousel/>
      <Typingsection />
      <Impact />
      <Companies />
      <ResearchLab />
      <Career /> {/* Add logos etc here */}
      <CASsection />
      <TrainingOverview />
      <Upskilling />
      <Testimonials />
      <PlacementInformation /> {/* All the extra content goes here */}
    </div>
  );
}

export default Placement;
