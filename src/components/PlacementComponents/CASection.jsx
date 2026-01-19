import { Target, Users } from "lucide-react";

export default function CASsection() {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-20 px-4">
      <div className="max-w-9xl mx-auto">
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
          </div>

          {/* Image 1 */}
          <div className="relative flex items-center justify-center rounded-2xl p-6 bg-transparent ">
            <img
              src="/placement/3601.png"
              alt="360 Degree Academic & Professional Foundation"
              className="max-h-80 w-auto object-contain"
            />
          </div>

          {/* Image 2 */}
          <div className="relative flex items-center justify-center rounded-2xl p-6 bg-transparent ">
            <img
              src="/placement/3602.png"
              alt="360 Degree Academic & Professional Foundation"
              className="max-h-80 w-auto object-contain"
            />
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
          </div>
        </div>
      </div>
    </section>
  );
}
