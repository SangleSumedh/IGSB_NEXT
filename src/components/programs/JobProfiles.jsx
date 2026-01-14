import { DollarSign, DollarSignIcon } from "lucide-react";
import React from "react";

// 1. DATA: You can move this to a separate file or fetch it from an API later.
const jobProfiles = [
  {
    title: "Marketing Manager",
    category: "MRK",
    description:
      "Lead marketing strategies, manage campaigns, and analyze market trends to drive business growth.",
    avgPackage: "8 - 12 LPA",
    skills: ["Brand Strategy", "Digital Marketing", "Analytics"],
  },
  {
    title: "Financial Analyst",
    category: "FIN",
    description:
      "Analyze financial data, prepare reports, and guide investment decisions for corporate stability.",
    avgPackage: "7 - 14 LPA",
    skills: ["Financial Modeling", "Risk Management", "Excel"],
  },
  {
    title: "Human Resource Management",
    category: "HR",
    description:
      "Align HR strategies with business objectives, managing talent acquisition and employee relations.",
    avgPackage: "6 - 10 LPA",
    skills: ["Talent Mgmt", "Labor Laws", "Negotiation"],
  },

  {
    title: "Operations & Supply Chains",
    category: "OPS",
    description:
      "Oversee and manage every stage of the production flow, from purchasing raw materials to delivery.",
    avgPackage: "7 - 13 LPA",
    skills: ["Logistics", "Vendor Mgmt", "ERP Systems"],
  },
  {
    title: "Business Analyst",
    category: "BA",
    description:
      "Bridge the gap between IT and business using data analytics to assess processes and deliver requirements.",
    avgPackage: "8 - 15 LPA",
    skills: ["Data Analysis", "SQL", "Process Improvement"],
  },
];

const JobProfiles = () => {
  return (
    <section className="w-full py-16 px-6 md:px-16 bg-white">
      <div className="max-w-full mx-auto">
        {/* SECTION HEADER */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            Career Pathways
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            An MBA from IGSB opens doors to diverse leadership roles across
            global industries.
          </p>
        </div>

        {/* CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {jobProfiles.map((job, index) => (
            <div
              key={index}
              className="group bg-[#3aa6a9] rounded-xl overflow-hidden border border-slate-200 shadow-sm 
                         hover:shadow-xl hover:border-[#FF8B61]/30 transition-all duration-300 
                         flex flex-col relative"
            >
              <div className="p-8 flex flex-col h-full">
                {/* Category Badge */}
                {/* <span
                  className="inline-block px-3 py-1 rounded-full bg-secondary text-slate-100 
                                 text-xs font-semibold tracking-wide uppercase mb-4 w-fit
                                 group-hover:bg-[#FFF0EB]  transition-colors"
                >
                  {job.category}
                </span> */}

                {/* Title */}
                <h3 className="text-xl font-extrabold text-slate-100 mb-3 group-hover:text-[#FF8B61] transition-colors">
                  {job.title}
                </h3>

                {/* Description */}
                <p className="text-slate-100 text-sm leading-relaxed mb-6 flex-grow">
                  {job.description}
                </p>

                {/* Divider */}
                {/* <div className="h-px w-full bg-slate-100 my-4"></div> */}

                {/* Footer Info: Salary & Skills */}
                <div className="space-y-4">
                  {/* Salary Row */}
                  <div className="flex items-center gap-2 md:gap-5  text-slate-100">
                    <DollarSignIcon className="w-8 h-8 text-slate-900 border-3 border-primary bg-white rounded-full p-1 " />
                    <span className="text-lg font-medium">
                      Avg:{" "}
                      <span className="text-slate-100 font-bold">
                        {job.avgPackage}
                      </span>
                    </span>
                  </div>

                  {/* Skills Tags */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobProfiles;
