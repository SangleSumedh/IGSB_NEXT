import ScrollCrushWrapper from "@/components/ScrollCrushWrapper";

import HeroSlider from "@/components/home/HeroSlider";
import ExploreSection from "@/components/home/ExploreSection";
import DiscoverPaths from "@/components/home/DiscoverPaths";
import AcademicYearSection from "@/components/home/AcademicYearSection";
import RecruitersSection from "@/components/home/RecruiterSection";
import EnergyInnovation from "@/components/home/EnergyInnovation";
import CollegeUnplugged from "@/components/home/CollegeUnplugged";
import EventsSection from "@/components/home/EventSection";
import CTASection from "@/components/home/CTASection";
import InstagramMosaic from "@/components/home/InstagramMosaic";
import NewDiscover from "@/components/home/newDiscover";
import ProgrammesSection from "@/components/home/ProgrammesSection";
import Phd from "@/components/home/Phd";
import Pillar from "@/components/home/Pillar";

import FormSection from "@/components/home/FormSection"; // XL+
import SmallDesktopFormSection from "@/components/home/SmallDesktopFormSection"; // LG → XL
import NewCTA from "@/components/home/NewCTA";
import Training from "@/components/home/Training";
import FactSection from "@/components/home/FactSection";

export default function HomePage() {
  return (
    <div className="bg-white text-gray-900">
      <ScrollCrushWrapper Hero={<HeroSlider />}>
        <ExploreSection />
        {/* <NewDiscover /> */}
        {/* <DiscoverPaths /> */}

        <Pillar />
        <ProgrammesSection />

        {/* ===== FORMS (RESPONSIVE) ===== */}
        <FormSection />                {/* xl and above */}
        <SmallDesktopFormSection />    {/* lg → xl */}

        <Phd />
        <FactSection />
        <Training />
              {/* <NewCTA /> */}
        {/* <AcademicYearSection /> */}
        {/* <RecruitersSection /> */}
        {/* <EnergyInnovation /> */}
        {/* <CollegeUnplugged /> */}
        {/* <EventsSection /> */}
  
        {/* <CTASection /> */}
        {/* <EventsSection /> */}
        <NewCTA />
        <CTASection />
      </ScrollCrushWrapper>

      {/* <InstagramMosaic /> */}
    </div>
  );
}
