import { RotateCcw, Target, Users, Briefcase } from "lucide-react";

export default function CASsection() {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* CLDP Card */}
          <div
            className="group relative overflow-hidden rounded-2xl bg-gradient-to-r
      from-[#10404A]
      to-[#1F6D71] p-10 text-white transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >
            <div className="absolute top-6 right-6 opacity-10">
              <Target className="w-24 h-24" />
            </div>
            <div className="flex items-center mb-8">
              <div className="bg-gradient-to-r from-[#f15a24] to-orange-500 p-3 rounded-xl mr-6">
                <Target className="w-8 h-8" />
              </div>
              <h2 className="text-4xl font-bold">CLDP</h2>
            </div>
            <p className="text-lg leading-relaxed opacity-90 relative z-10">
              CLDP is conceptualized by Gryphon Academy as a specialized
              framework that trains the future MBA professionals to evolve into
              industry-ready leaders. It focuses on building aptitude, business
              communication, and digital presence.
            </p>
            <div className="mt-8 pt-8 border-t border-white/10">
              <span className="inline-flex items-center text-[#f15a24] font-semibold">
                Learn more →
              </span>
            </div>
          </div>

          {/* 360° Opportunities */}
          <div className="bg-white rounded-2xl p-10 shadow-xl border border-gray-100">
            <div className="flex items-center mb-10">
              <div className="bg-gradient-to-r from-[#f15a24]/10 to-orange-100 p-4 rounded-2xl mr-6">
                <RotateCcw className="w-12 h-12 text-[#f15a24]" />
              </div>
              <div>
                <span className="text-5xl font-bold text-gray-900">360°</span>
                <p className="text-gray-600 mt-2">Career Opportunities</p>
              </div>
            </div>
            <div className="space-y-6">
              {["Internships", "SIP TO PPO", "Industrial visits"].map(
                (item, index) => (
                  <div
                    key={index}
                    className="flex items-center p-4 rounded-xl hover:bg-gray-50 transition-colors"
                  >
                    <div className="w-3 h-3 bg-[#f15a24] rounded-full mr-4"></div>
                    <span className="text-xl font-semibold text-gray-800">
                      {item}
                    </span>
                  </div>
                )
              )}
            </div>
          </div>
          {/* Additional Opportunities */}
          <div className="bg-white rounded-2xl p-10 shadow-xl border border-gray-100">
            <div className="flex items-center mb-10">
              <div className="bg-gradient-to-r from-[#f15a24]/10 to-orange-100 p-4 rounded-2xl mr-6">
                <Briefcase className="w-12 h-12 text-[#f15a24]" />
              </div>
              <div>
                <span className="text-5xl font-bold text-gray-900">100%</span>
                <p className="text-gray-600 mt-2">Placement Support</p>
              </div>
            </div>
            <div className="space-y-6">
              {["Mock Interviews", "Resume Building", "Network Access"].map(
                (item, index) => (
                  <div
                    key={index}
                    className="flex items-center p-4 rounded-xl hover:bg-gray-50 transition-colors"
                  >
                    <div className="w-3 h-3 bg-[#f15a24] rounded-full mr-4"></div>
                    <span className="text-xl font-semibold text-gray-800">
                      {item}
                    </span>
                  </div>
                )
              )}
            </div>
          </div>

          {/* IRP Card */}
          <div
            className="group relative overflow-hidden rounded-2xl bg-gradient-to-r
      from-[#10404A]
      to-[#1F6D71] p-10 text-white transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >
            <div className="absolute top-6 right-6 opacity-10">
              <Users className="w-24 h-24" />
            </div>
            <div className="flex items-center mb-8">
              <div className="bg-gradient-to-r from-[#f15a24] to-orange-500 p-3 rounded-xl mr-6">
                <Users className="w-8 h-8" />
              </div>
              <h2 className="text-4xl font-bold">IRP</h2>
            </div>
            <p className="text-lg leading-relaxed opacity-90 relative z-10">
              IRP is curated by Gryphon Academy to be a structured training
              initiative designed to prepare students for the real-world demands
              of the corporate world through hands-on training and mentorship.
            </p>
            <div className="mt-8 pt-8 border-t border-white/10">
              <span className="inline-flex items-center text-[#f15a24] font-semibold">
                Learn more →
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
