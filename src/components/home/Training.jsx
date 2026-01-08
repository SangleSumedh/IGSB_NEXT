import React from "react";
import {
  Briefcase,
  Users,
  BarChart3,
  Target,
  Award,
  MessageSquare,
  TrendingUp,
  Layers,
  Compass,
  Star,
} from "lucide-react";

function Training() {
  return (
    <section className="w-full bg-white py-10 px-4 md:py-16 md:px-12">
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-stretch">
        {/* CENTER DIVIDER (Hidden on mobile) */}
        <div className="hidden md:block absolute left-1/2 top-0 h-full w-px bg-white/60 -translate-x-1/2" />

        {/* ================= IRP ================= */}
        <div className="relative flex flex-col h-full rounded-2xl overflow-hidden bg-[#3aafa9]">
          {/* TOP HEADER */}
          <div className="bg-[#10404A] text-center pt-6 pb-14 px-2">
            <h2 className="text-xl md:text-2xl font-bold text-white">
              Industry Readiness Programme (IRP)
            </h2>
          </div>

          {/* FLOATING WHITE CARD */}
          <div className="relative -mt-10 mx-4 md:mx-6 mb-6 bg-white rounded-xl shadow-lg p-5 md:p-8 space-y-6 flex flex-col h-full">
            {/* TEXT + IMAGE */}
            <div className="flex flex-col md:flex-row gap-6">
              {/* TEXT */}
              <div className="w-full md:w-[70%]">
                <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                  The Industry Readiness Programme (IRP) is a structured
                  training programme designed in close collaboration with
                  <span className="font-bold"> industry experts</span> to align
                  academic learning with real-world corporate expectations. It
                  focuses on building functional skills, analytical thinking,
                  and job readiness through{" "}
                  <span className="font-bold"> hands-on training</span> and
                  <span className="font-bold"> expert mentorship.</span>
                </p>
              </div>

              {/* IMAGE */}
              <div className="w-full md:w-[30%] flex items-center justify-center">
                <img
                  src="/Home/ICEMCertificates.jpg"
                  alt="ICEM Certificates"
                  className="w-full h-auto max-h-40 object-contain rounded-lg"
                />
              </div>
            </div>

            {/* ICONS - 2 Cols on Mobile, 4 on Desktop */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mt-auto">
              {[
                { icon: Briefcase, label: "Industry Exposure" },
                { icon: Users, label: "Expert Mentors" },
                { icon: BarChart3, label: "Analytical Skills" },
                { icon: Target, label: "Job Readiness" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center gap-2 md:gap-3 px-2 py-3 rounded-lg 
                             bg-[#3aafa9] border-2 border-white/80"
                >
                  <item.icon className="w-8 h-8 md:w-12 md:h-12 text-white" />
                  <span className="text-xs md:text-sm font-medium text-white text-center leading-tight">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ================= CLDP ================= */}
        <div className="relative flex flex-col h-full rounded-2xl overflow-hidden bg-[#3aafa9]">
          {/* TOP HEADER */}
          <div className="bg-[#10404A] text-center pt-6 pb-14 px-2 relative overflow-hidden">
            <div className="flex items-center justify-center gap-2 md:gap-3">
              <h2 className="text-xl md:text-2xl font-bold text-white z-10 relative">
                Career Leadership Development Programme (CLDP)
              </h2>

              {/* 5 STARS */}
              <div className="absolute top-2 right-2 md:top-2 md:right-5 flex gap-1 pointer-events-none opacity-80 md:opacity-100">
                <svg width="0" height="0">
                  <defs>
                    <linearGradient
                      id="goldGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#FFD700" />
                      <stop offset="50%" stopColor="#FFB800" />
                      <stop offset="100%" stopColor="#C99700" />
                    </linearGradient>
                  </defs>
                </svg>
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-3 h-3 md:w-4 md:h-4"
                    fill="url(#goldGradient)"
                    stroke="url(#goldGradient)"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* FLOATING WHITE CARD */}
          <div className="relative -mt-10 mx-4 md:mx-6 mb-6 bg-white rounded-xl shadow-2xl p-4 md:p-6 space-y-6 flex flex-col h-full z-20">
            <div className="flex flex-col md:flex-row gap-4 md:gap-3">
              {/* TEXT */}
              <div className="w-full md:w-[70%]">
                <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                  The Career Leadership Development Programme (CLDP) is a
                  leadership-focused framework designed to develop future-ready
                  MBA professionals with expert-level capabilities. It
                  strengthens aptitude, communication, and domain expertise
                  while offering{" "}
                  <span className="font-bold">
                    {" "}
                    professional certifications.
                  </span>
                </p>
              </div>

              {/* IMAGE */}
              <div className="w-full md:w-[30%] flex items-center justify-center">
                <img
                  src="/Home/ICEMCertificates.jpg"
                  alt="ICEM Certificates"
                  className="w-full h-auto max-h-40 object-contain rounded-lg"
                />
              </div>
            </div>

            {/* ICONS GRID - 3 Cols on Mobile, 6 on Desktop */}
            <div className="grid grid-cols-3 md:grid-cols-6 gap-2 mt-auto">
              {[
                { label: "Power BI" },
                { label: "Communication" },
                { label: "Career Growth" },
                { label: "Domain Skills" },
                { label: "Strategy" },
                { label: "Certifications" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center p-2 md:p-4 rounded-lg 
                  border-2 border-orange-500 shadow-md bg-white hover:shadow-lg transition-shadow"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 mb-2 flex items-center justify-center rounded-md overflow-hidden bg-gray-50">
                    <img
                      src="/Home/powerbi.webp"
                      alt={item.label}
                      className="w-8 h-8 md:w-10 md:h-10 object-contain"
                    />
                  </div>
                  <span className="text-[10px] md:text-xs font-medium text-black text-center leading-tight">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Training;
