import React from "react";
import Link from "next/link";
import {
  CircleDollarSign,
  PieChart,
  Users,
  LineChart,
  ArrowUpRight,
} from "lucide-react";

const PHD_DOMAINS = [
  { title: "Marketing Management", icon: PieChart },
  { title: "Finance Management", icon: CircleDollarSign },
  { title: "Human Resource", icon: Users },
  { title: "Business Analytics", icon: LineChart },
];

export default function PhdSection() {
  return (
    <section className="w-full bg-white px-4 sm:px-6 py-12 xl:px-16 xl:py-8">
      <div className="w-full">
        {/* SECTION HEADING */}
        <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 mb-8">
          PhD Research Programmes
        </h2>

        {/* TEXT CONTENT */}
        <div className="w-full space-y-3 mb-10">
          <p className="text-gray-700 text-sm sm:text-md md:text-lg leading-relaxed text-justify">
            Indira Global School of Business (IGSB) is an AICTE-approved,
            UGC-recognized institution affiliated with Savitribai Phule Pune
            University (SPPU) and is committed to advancing academic excellence,
            thought leadership, and high-impact management research.
          </p>

          <p className="text-gray-700 text-sm sm:text-md md:text-lg leading-relaxed text-justify">
            The IGSB Research Centre (PGRC) is a recognized Ph.D. Research Centre
            under SPPU. We promote original, methodologically rigorous research
            that contributes meaningfully to global academic literature, policy
            development, and practical business innovation, while preparing
            scholars for careers in academia, research institutions, and
            industry-led knowledge roles.
          </p>
        </div>

        <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 pb-5">
          PhD specializations offered:
        </h2>

        {/* DOMAIN BLOCKS */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4 xl:flex xl:justify-between">
          {PHD_DOMAINS.map((item, index) => {
            const Icon = item.icon;

            return (
              <Link
                key={index}
                href="/programs/phd"
                className="
                  group
                  bg-[#10404A] hover:bg-[#14545f]
                  transition-all duration-300
                  rounded-xl
                  p-4 sm:p-5

                  /* MOBILE: vertical layout */
                  flex flex-col items-center justify-center text-center gap-3

                  /* lg → xl */
                  lg:flex-col lg:items-center lg:gap-3

                  /* xl+ */
                  xl:flex-row xl:items-center xl:justify-between xl:text-left
                "
              >
                {/* ICON */}
                <div
                  className="
                    w-12 h-12
                    sm:w-13 sm:h-13
                    lg:w-14 lg:h-14
                    rounded-full
                    border-4 border-[#fb7035]
                    bg-white
                    flex items-center justify-center
                    shrink-0
                  "
                >
                  <Icon
                    size={20}
                    className="text-black lg:w-[22px] lg:h-[22px]"
                  />
                </div>

                {/* TITLE */}
                <h3 className="text-xs sm:text-sm md:text-base lg:text-sm xl:text-base font-semibold text-white leading-tight">
                  {item.title}
                </h3>

                {/* ARROW */}
                <ArrowUpRight
                  size={18}
                  className="
                    text-white/60 group-hover:text-white transition
                    hidden xl:block
                  "
                />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
