import React from "react";
import Link from "next/link";
import {
  ChevronRight,
  TrendingUp,
  Users,
  BarChart3,
  PieChart,
  ArrowUpRight,
} from "lucide-react";

const PROGRAMS = [
  {
    title: "PhD in Finance",
    icon: <TrendingUp className="text-secondary" size={32} />,
    color: "bg-blue-50",
  },
  {
    title: "PhD in Marketing",
    icon: <PieChart className="text-secondary" size={32} />,
    color: "bg-teal-50",
  },
  {
    title: "PhD in Human Resource",
    icon: <Users className="text-secondary" size={32} />,
    color: "bg-purple-50",
  },
  {
    title: "PhD in Business Analytics",
    icon: <BarChart3 className="text-secondary" size={32} />,
    color: "bg-cyan-50",
  },
];

export default function PhdSection() {
  return (
    <section className="w-full bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Simplified Header */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-secondary mb-4">
            PhD Research Programmes
          </h2>
          <p className="text-gray-600 max-w-3xl text-md md:text-lg leading-relaxed">
            The IGSB Research Center (PGRC) promotes high-quality, rigorous
            research across diverse management domains, addressing real-world
            challenges through academic innovation.
          </p>
        </div>

        {/* Clean Icon Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PROGRAMS.map((item, idx) => (
            <Link
              key={idx}
              href="/programs/phd"
              className="group block p-8 rounded-xl border border-gray-100 hover:border-teal-500 hover:shadow-sm transition-all duration-300 relative overflow-hidden"
            >
              {/* Subtle Icon Background */}
              <div className={`mb-6 inline-flex p-3 rounded-lg ${item.color}`}>
                {item.icon}
              </div>

              <h3 className="text-lg font-bold text-gray-800 group-hover:text-secondary transition-colors">
                {item.title}
              </h3>

              <div className="mt-4 flex items-center text-sm font-medium text-gray-400 group-hover:text-secondary">
                <span>View Program</span>
                <ArrowUpRight
                  size={16}
                  className="ml-1 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </div>
            </Link>
          ))}
        </div>

        {/* Accreditation Footer */}
        <p className="mt-10 text-center text-sm text-gray-400 font-medium italic">
          Affiliated with Savitribai Phule Pune University (SPPU)
        </p>
      </div>
    </section>
  );
}
