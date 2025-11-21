import HeroSlider from "@/components/home/HeroSlider";
import ExploreSection from "@/components/home/ExploreSection";
import DiscoverPaths from "@/components/home/DiscoverPaths";
import AcademicYearSection from "@/components/home/AcademicYearSection";
import RecruitersSection from "@/components/home/RecruiterSection";
import EnergyInnovation from "@/components/home/EnergyInnovation";
import CampusBeat from "@/components/home/CampusBeat";
import CollegeUnplugged from "@/components/home/CollegeUnplugged";
// import NewsSection from "@/components/home/NewsSection";
import EventsSection from "@/components/home/EventSection";
import InstagramMosaic from "@/components/home/InstagramMosaic"; // <-- Import here
import CTASection from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <div className="bg-white  text-gray-900">
      <HeroSlider />
      <ExploreSection />
      <DiscoverPaths />
      <AcademicYearSection />
      <RecruitersSection />

      <CampusBeat />
      <EnergyInnovation />
      <CollegeUnplugged />

      <EventsSection />
      <CTASection />
      <InstagramMosaic />
    </div>
  );
}
