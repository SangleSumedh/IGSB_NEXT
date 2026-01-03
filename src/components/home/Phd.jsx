import React from "react";
import Link from "next/link";
import {
  TrendingUp,
  PieChart,
  Users,
  BarChart3,
  ArrowUpRight,
} from "lucide-react";

const PHD_DOMAINS = [
  {
    title: "Marketing",
    icon: <PieChart size={22} className="text-secondary" />,
  },
  {
    title: "Finance",
    icon: <TrendingUp size={22} className="text-secondary" />,
  },
  {
    title: "Human Resource Management",
    icon: <Users size={22} className="text-secondary" />,
  },
  {
    title: "Business Analytics",
    icon: <BarChart3 size={22} className="text-secondary" />,
  },
];

export default function PhdSection() {
  return (
    <section className="w-full bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">

        {/* SECTION HEADING — SEPARATE */}
        <h2 className="text-2xl md:text-4xl font-extrabold text-secondary mb-10">
          PhD Research Programmes
        </h2>

        {/* MAIN GRID — 65 : 35 */}
        <div className="grid grid-cols-1 lg:grid-cols-[65%_35%] gap-10 items-start">

          {/* LEFT SECTION — TEXT ONLY */}
          <div className="space-y-5">
            <p className="text-gray-700 text-md md:text-lg leading-relaxed text-justify">
              Indira Global School of Business (IGSB) is an AICTE-approved,
              UGC-recognized institution affiliated with Savitribai Phule Pune
              University (SPPU) and is committed to advancing academic excellence,
              thought leadership, and high-impact management research.
            </p>

            <p className="text-gray-700 text-md md:text-lg leading-relaxed text-justify">
              The IGSB Research Centre (PGRC) is a recognized Ph.D. Research Centre
              under SPPU. We promote original, methodologically rigorous research
              that contributes meaningfully to global academic literature, policy
              development, and practical business innovation, while preparing
              scholars for careers in academia, research institutions, and
              industry-led knowledge roles.
            </p>
            <p className="text-gray-700 text-md md:text-lg leading-relaxed text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio molestiae quaerat voluptatem, architecto eveniet in? Ad alias doloremque impedit magni earum cum quis dolor natus magnam? Vero molestias similique non.
            </p>
          </div>

          {/* RIGHT SECTION — DOMAIN BLOCKS */}
          <div className="flex flex-col justify-between h-full space-y-3">

            {PHD_DOMAINS.map((item, index) => (
              <Link
                key={index}
                href="/programs/phd"
                className="group flex items-center justify-between gap-4 p-4
                border border-gray-200 rounded-lg
                hover:border-secondary hover:bg-gray-50
                transition-all duration-300"
              >
                {/* LEFT — ICON + TITLE */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-md bg-gray-100 flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>

                  <h3 className="text-base font-semibold text-gray-800 leading-tight">
                    {item.title}
                  </h3>
                </div>

                {/* RIGHT — ARROW */}
                <ArrowUpRight
                  size={18}
                  className="text-gray-400 group-hover:text-secondary transition"
                />
              </Link>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
}
