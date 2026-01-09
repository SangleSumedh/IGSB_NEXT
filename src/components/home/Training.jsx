import React from "react";
import { Briefcase, Users, BarChart3, Target, Star } from "lucide-react";

import { Brain, Code2, MessageSquare, Wrench } from "lucide-react";

function Training() {
  return (
    <section className="w-full bg-white py-10 px-4 sm:px-6 md:py-16 lg:px-12 xl:px-16">
      <div className="relative flex flex-col xl:grid xl:grid-cols-2 gap-8 xl:gap-12 items-stretch">
        {/* CENTER DIVIDER (Hidden on mobile, shown on xl and above) */}
        <div className="hidden xl:block absolute left-1/2 top-0 h-full w-px bg-white/60 -translate-x-1/2" />

        {/* ================= IRP ================= */}
        <div className="relative flex flex-col h-full rounded-2xl overflow-hidden bg-[#3aafa9]">
          {/* TOP HEADER */}
          <div className="bg-[#10404A] text-center pt-6 pb-14 px-4">
            <h2 className="text-xl sm:text-2xl lg:text-2xl xl:text-2xl font-bold text-white">
              Industry Readiness Programme (IRP)
            </h2>
          </div>

          {/* FLOATING WHITE CARD with hover animation */}
          <div
            className="relative -mt-10 mx-4 sm:mx-6 lg:mx-6 xl:mx-6 mb-6 bg-white rounded-xl shadow-lg p-5 sm:p-6 lg:p-8 xl:p-8 space-y-6 flex flex-col h-full 
                        transition-all duration-300 ease-in-out hover:scale-[1.02] hover:bg-gray-50 hover:shadow-2xl"
          >
            {/* TEXT + IMAGE - Certificate beside text */}
            <div className="flex flex-col sm:flex-row gap-6">
              {/* TEXT */}
              <div className="w-full sm:w-[70%] lg:w-[70%] xl:w-[60%]">
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base lg:text-base xl:text-base text-justify">
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

              {/* IMAGE - Certificate */}
              <div className="w-full sm:w-[30%] lg:w-[30%] xl:w-[35%] flex items-center justify-center relative">
                <img
                  src="/Home/ICEMCertificates.jpg"
                  alt="ICEM Certificates"
                  className="w-full h-auto max-h-40 object-contain rounded-lg transition-all duration-300 hover:scale-105"
                />
              </div>
            </div>

            {/* ICONS - Responsive grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-auto">
              {[
                { icon: Brain, label: "Aptitude" },
                { icon: Code2, label: "Technical" },
                { icon: MessageSquare, label: "Soft Skills" },
                { icon: Wrench, label: "Tools" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center gap-2 sm:gap-3 px-2 py-3 rounded-lg 
                 bg-[#3aafa9] border-2 border-white/80 transition-all duration-300 
                 hover:bg-[#2B8B85] hover:scale-105"
                >
                  <item.icon className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 xl:w-12 xl:h-12 text-white" />
                  <span className="text-xs sm:text-sm lg:text-sm xl:text-sm font-medium text-white text-center leading-tight">
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
          <div className="bg-[#10404A] text-center pt-6 pb-14 px-4 relative overflow-hidden">
            <div className="flex flex-col items-center justify-center">
              {/* HEADER */}
              <h2 className="text-xl sm:text-2xl lg:text-2xl xl:text-2xl font-bold text-white text-center">
                Career Leadership Development Programme (CLDP)
              </h2>

              {/* STARS FOR NON-XL SCREENS */}
              <div className="xl:hidden flex gap-1 items-center mt-2">
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
                    className="w-4 h-4 sm:w-4 sm:h-4 lg:w-5 lg:h-5"
                    fill="url(#goldGradient)"
                    stroke="url(#goldGradient)"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* FLOATING WHITE CARD with hover animation */}
          <div
            className="relative -mt-10 mx-4 sm:mx-6 lg:mx-6 xl:mx-6 mb-6 bg-white rounded-xl shadow-2xl p-4 sm:p-5 lg:p-6 xl:p-6 space-y-6 flex flex-col h-full z-20
                        transition-all duration-300 ease-in-out hover:scale-[1.02] hover:bg-gray-50 hover:shadow-3xl"
          >
            {/* TEXT + IMAGE - Certificate beside text */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-3 lg:gap-3 xl:gap-3">
              {/* TEXT */}
              <div className="w-full sm:w-[70%] lg:w-[70%] xl:w-[60%]">
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base lg:text-base xl:text-base text-justify">
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

              {/* IMAGE - Certificate with stars on xl */}
              <div className="w-full sm:w-[30%] lg:w-[30%] xl:w-[35%] flex items-center justify-center relative">
                <img
                  src="/Home/ICEMCertificates.jpg"
                  alt="ICEM Certificates"
                  className="w-full h-auto max-h-40 object-contain rounded-lg transition-all duration-300 hover:scale-105"
                />

                {/* STARS FOR XL SCREENS - Absolute positioned above certificate */}
                <div className="hidden xl:flex absolute -top-4 left-1/2 -translate-x-1/2 gap-1 items-center justify-center px-3 py-1">
                  <svg width="0" height="0">
                    <defs>
                      <linearGradient
                        id="goldGradientXL"
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
                      fill="url(#goldGradientXL)"
                      stroke="url(#goldGradientXL)"
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* ICONS GRID - Responsive columns with larger icons */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-2 sm:gap-2 lg:gap-3 xl:gap-3 mt-auto">
              {[
                {
                  label: "Project Management",
                  icon: "📋",
                  color: "text-blue-600",
                },
                {
                  label: "Product Management",
                  icon: "📦",
                  color: "text-purple-600",
                },
                {
                  label: "Excel",
                  logo: "/Home/Excel.png",
                },
                {
                  label: "Power BI",
                  logo: "/Home/powerbi.webp",
                },
                {
                  label: "Business Analytics",
                  icon: "📈",
                  color: "text-red-600",
                },
                {
                  label: "SQL | Tableau",
                  logo: "/Home/mysql1png.png",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center p-2 sm:p-2 lg:p-3 xl:p-3 rounded-lg 
                            border-2 border-orange-500 shadow-md bg-white hover:shadow-lg transition-all duration-300 
                            hover:scale-105 hover:bg-orange-50 min-h-[80px]"
                >
                  <div className="w-10 h-10 sm:w-10 sm:h-10 lg:w-12 lg:h-12 xl:w-12 xl:h-12 mb-1 sm:mb-1 lg:mb-1 xl:mb-1 flex items-center justify-center">
                    {item.logo ? (
                      <img
                        src={item.logo}
                        alt={item.label}
                        className="w-10 h-10 sm:w-10 sm:h-10 lg:w-12 lg:h-12 xl:w-12 xl:h-12 object-contain transition-all duration-300 hover:scale-110"
                      />
                    ) : (
                      <span
                        className={`text-3xl sm:text-3xl lg:text-4xl xl:text-4xl ${
                          item.color || ""
                        } transition-all duration-300 hover:scale-110`}
                      >
                        {item.icon}
                      </span>
                    )}
                  </div>
                  <span className="text-[9px] sm:text-[10px] lg:text-[11px] xl:text-[11px] font-medium text-black text-center leading-tight px-1">
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
