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
  {
    title: "Marketing Management",
    icon: <PieChart size={22} className="text-black" />,
  },
  {
    title: "Finance Management",
    icon: <CircleDollarSign size={22} className="text-black" />,
  },
  {
    title: "Human Resource Management",
    icon: <Users size={22} className="text-black" />,
  },
  {
    title: "Business Analytics Management",
    icon: <LineChart size={22} className="text-black" />,
  },
];

export default function PhdSection() {
  return (
    <section className="w-full bg-white px-4 md:px-16 py-12">
      <div className="w-full">
        {/* SECTION HEADING */}
        <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 mb-10">
          PhD RESEARCH PROGRAMMES
        </h2>

        {/* TEXT CONTENT */}
        <div className="w-full space-y-2 mb-10">
          <p className="text-gray-700 text-md md:text-lg leading-relaxed text-justify">
            Indira Global School of Business (IGSB) is an AICTE-approved,
            UGC-recognized institution affiliated with Savitribai Phule Pune
            University (SPPU) and is committed to advancing academic excellence,
            thought leadership, and high-impact management research.
          </p>

          <p className="text-gray-700 text-md md:text-lg leading-relaxed text-justify">
            The IGSB Research Centre (PGRC) is a recognized Ph.D. Research
            Centre under SPPU. We promote original, methodologically rigorous
            research that contributes meaningfully to global academic
            literature, policy development, and practical business innovation,
            while preparing scholars for careers in academia, research
            institutions, and industry-led knowledge roles.
          </p>

          {/* <p className="text-gray-700 text-md md:text-lg leading-relaxed text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            molestiae quaerat voluptatem, architecto eveniet in? Ad alias
            doloremque impedit magni earum cum quis dolor natus magnam? Vero
            molestias similique non.
          </p> */}
        </div>

        <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 pb-5">
          PhD specializations offered:
        </h2>
        {/* DOMAIN BLOCKS — INDIVIDUAL GREEN CARDS */}
        <div className="flex flex-wrap md:flex-nowrap gap-6 justify-between items-center">
          {PHD_DOMAINS.map((item, index) => (
            <Link
              key={index}
              href="/programs/phd"
              className="
                group
                flex items-center justify-between gap-4
                w-full md:w-auto
                px-6 py-4
                rounded-lg
                bg-[#10404A]
                hover:bg-[#14545f]
                transition-all duration-300
              "
            >
              {/* ICON + TITLE */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full border-4 border-[#fb7035] bg-white text-black flex items-center justify-center shrink-0">
                  {item.icon}
                </div>

                <h3 className="text-base font-semibold text-white leading-tight">
                  {item.title}
                </h3>
              </div>

              {/* ARROW */}
              <ArrowUpRight
                size={18}
                className="text-white/60 group-hover:text-white transition"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
