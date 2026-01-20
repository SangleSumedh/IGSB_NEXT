import React from "react";

function Training() {
  return (
    <section className="w-full bg-white py-10 px-4 sm:px-6 md:py-16 lg:px-12 xl:px-16">
      <div className="relative flex flex-col xl:grid xl:grid-cols-2 gap-8 xl:gap-12 items-stretch">
        {/* CENTER DIVIDER */}
        <div className="hidden xl:block absolute left-1/2 top-0 h-full w-px bg-white/60 -translate-x-1/2" />

        {/* ================= IRP ================= */}
        <div className="relative flex flex-col h-full rounded-2xl overflow-hidden bg-[#3aafa9]">
          {/* TOP HEADER */}
          <div className="bg-[#10404A] text-center pt-6 pb-14 px-4">
            <h2 className="text-xl sm:text-2xl lg:text-2xl xl:text-2xl font-bold text-white">
              Industry Readiness Programme (IRP)
            </h2>
          </div>

          {/* FLOATING WHITE CARD */}
          <div className="relative -mt-10 mx-4 sm:mx-6 lg:mx-6 xl:mx-6 mb-6 bg-white rounded-xl shadow-lg p-5 sm:p-6 lg:p-8 xl:p-8 space-y-6 flex flex-col h-full 
                          transition-all duration-300 ease-in-out hover:scale-[1.02] hover:bg-gray-50 hover:shadow-2xl">
            {/* TEXT + IMAGE */}
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

              {/* IMAGE */}
              <div className="w-full sm:w-[30%] lg:w-[30%] xl:w-[35%] flex items-center justify-center relative">
                <img
                  src="/Home/ICEMCertificates.jpg"
                  alt="ICEM Certificates"
                  className="w-full h-auto max-h-40 object-contain rounded-lg transition-all duration-300 hover:scale-105"
                />
              </div>
            </div>

            {/* IRP FEATURES - IMAGE BASED */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-auto">
              {[
                { label: "Aptitude", logo: "/Home/Aptitude9.png" },
                { label: "Technical", logo: "/Home/technical.png" },
                { label: "Soft Skills", logo: "/Home/SS.png" },
                { label: "Tools", logo: "/Home/Tools.png" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center gap-2 sm:gap-3 px-2 py-3 rounded-lg 
                             bg-[#10404A] border-2 border-white/80 transition-all duration-300 
                             hover:bg-[#10404A] hover:scale-105"
                >
                  <img
                    src={item.logo}
                    alt={item.label}
                    className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 xl:w-14 xl:h-14 object-contain transition-all duration-300 hover:scale-110"
                  />
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
          <div className="bg-[#10404A] text-center pt-6 pb-14 px-4">
            <h2 className="text-xl sm:text-2xl lg:text-2xl xl:text-2xl font-bold text-white text-center">
              Career Leadership Development Programme (CLDP)
            </h2>
          </div>

          {/* FLOATING WHITE CARD */}
          <div className="relative -mt-10 mx-4 sm:mx-6 lg:mx-6 xl:mx-6 mb-6 bg-white rounded-xl shadow-2xl p-4 sm:p-5 lg:p-6 xl:p-6 space-y-6 flex flex-col h-full z-20
                          transition-all duration-300 ease-in-out hover:scale-[1.02] hover:bg-gray-50 hover:shadow-3xl">
            {/* TEXT + IMAGE */}
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
                    professional certifications.
                  </span>
                </p>
              </div>

              {/* IMAGE */}
              <div className="w-full sm:w-[30%] lg:w-[30%] xl:w-[35%] flex items-center justify-center relative">
                <img
                  src="/Home/ICEMCertificates.jpg"
                  alt="ICEM Certificates"
                  className="w-full h-auto max-h-40 object-contain rounded-lg transition-all duration-300 hover:scale-105"
                />
              </div>
            </div>

            {/* CLDP FEATURES - IMAGE BASED */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-2 sm:gap-2 lg:gap-3 xl:gap-3 mt-auto">
              {[
                { label: "Project Management", logo: "/Home/ProjectManagement.jpg" },
                { label: "Product Management", logo: "/Home/ProductManagement.jpg" },
                { label: "Excel", logo: "/Home/Excel.jpg" },
                { label: "Power BI", logo: "/Home/PowerBIManagement.jpg" },
                { label: "Business Analytics", logo: "/Home/businessA.jpg" },
                { label: "SQL | Tableau", logo: "/Home/SQLManagement.jpg" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center p-2 sm:p-2 lg:p-3 xl:p-3 rounded-lg 
                             border-2 border-orange-500 shadow-md bg-white hover:shadow-lg transition-all duration-300 
                             hover:scale-105 hover:bg-orange-50 min-h-[80px]"
                >
                  <div className="w-10 h-10 sm:w-10 sm:h-10 lg:w-12 lg:h-12 xl:w-12 xl:h-12 mb-1 flex items-center justify-center">
                    <img
                      src={item.logo}
                      alt={item.label}
                      className="w-full h-full object-contain transition-all duration-300 hover:scale-110"
                    />
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
