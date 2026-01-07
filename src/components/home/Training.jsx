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
    <section className="w-full bg-white py-16 px-12">
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
        {/* CENTER DIVIDER */}
        <div className="hidden md:block absolute left-1/2 top-0 h-full w-px bg-white/60 -translate-x-1/2" />

        {/* ================= IRP ================= */}
        <div className="relative flex flex-col h-full rounded-2xl overflow-hidden bg-[#3aafa9]">
          {/* TOP HEADER */}
          <div className="bg-[#10404A] text-center pt-6 pb-14">
            <h2 className="text-xl md:text-2xl font-bold text-white">
              Industry Readiness Programme (IRP)
            </h2>
          </div>

          {/* FLOATING WHITE CARD */}
          <div className="relative -mt-10 mx-6 mb-6 bg-white rounded-xl shadow-lg p-8 space-y-6 flex flex-col h-full">
            {/* TEXT + IMAGE */}
            <div className="flex gap-6">
              {/* TEXT — 70% */}
              <div className="w-[70%]">
                <p className="text-gray-700 leading-relaxed">
                  The Industry Readiness Programme (IRP) is a structured training
                  programme designed in close collaboration with industry experts to
                  align academic learning with real-world corporate expectations. It
                  focuses on building functional skills, analytical thinking, and
                  job readiness through hands-on training and expert mentorship.
                </p>
              </div>

              {/* IMAGE — 30% */}
              <div className="w-[30%] flex items-center justify-center">
                <img
                  src="/Home/ICEMCertificates.jpg"
                  alt="ICEM Certificates"
                  className="w-full h-auto max-h-40 object-contain rounded-lg"
                />
              </div>
            </div>

            {/* ICONS */}
            <div className="grid grid-cols-4 gap-4 mt-auto">
              {[
                { icon: Briefcase, label: "Industry Exposure" },
                { icon: Users, label: "Expert Mentors" },
                { icon: BarChart3, label: "Analytical Skills" },
                { icon: Target, label: "Job Readiness" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-3 p-3 rounded-lg 
                             bg-[#3aafa9] border-2 border-white/80"
                >
                  <item.icon className="w-12 h-12 text-white" />
                  <span className="text-sm font-medium text-white">
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
          <div className="bg-[#10404A] text-center pt-6 pb-14">
            <div className="flex items-center justify-center gap-3">
              <h2 className="text-xl md:text-2xl font-bold text-white">
                Career Leadership Development Programme (CLDP)
              </h2>

              {/* 5 STARS */}
              <div className="flex gap-1">
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
                    className="w-5 h-5"
                    fill="url(#goldGradient)"
                    stroke="url(#goldGradient)"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* FLOATING WHITE CARD */}
          <div className="relative -mt-10 mx-6 mb-6 bg-white rounded-xl shadow-2xl p-8 space-y-6 flex flex-col h-full">
            <div className="flex gap-6">
              {/* TEXT — 70% */}
              <div className="w-[70%]">
                <p className="text-gray-700 leading-relaxed">
                  The Career Leadership Development Programme (CLDP) is a
                  leadership-focused framework designed to develop future-ready
                  MBA professionals with expert-level capabilities. It
                  strengthens aptitude, communication, and domain expertise
                  while offering professional certifications.
                </p>
              </div>

              {/* IMAGE — 30% */}
              <div className="w-[30%] flex items-center justify-center">
                <img
                  src="/Home/ICEMCertificates.jpg"
                  alt="ICEM Certificates"
                  className="w-full h-auto max-h-40 object-contain rounded-lg"
                />
              </div>
            </div>

            {/* ICONS GRID */}
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mt-auto">
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
                  className="flex flex-col items-center justify-center p-4 rounded-lg 
                    border-2 border-orange-500 shadow-md bg-white hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 mb-2 flex items-center justify-center rounded-md overflow-hidden bg-gray-50">
                    <img
                      src="/Home/powerbi.webp"
                      alt={item.label}
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                  <span className="text-sm font-medium text-black text-center">
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
