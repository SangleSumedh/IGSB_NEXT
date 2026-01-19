"use client";

import { useState } from "react";
import { Target, Users, ChevronDown, ChevronUp } from "lucide-react";

// 1. Reusable Card Component to handle "Read More" logic
const InfoCard = ({ title, icon: Icon, text, imageSrc }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className="group relative overflow-hidden rounded-xl bg-white
      p-6
      text-secondary transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg
      flex items-start gap-6 border-secondary/50 border-2" 
    >
      {/* LEFT SIDE: Text Content */}
      <div className="flex-1 relative z-10">
        {/* Header */}
        <div className="flex items-center mb-3">
          <div className="bg-gradient-to-r from-[#f15a24] to-orange-500 p-2 rounded-lg mr-3 shadow-md">
            <Icon className="w-5 h-5" />
          </div>
          <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
        </div>

        {/* Body Text with Toggle */}
        <div className="relative text-justify leading-snug">
          <p>
            {text}
          </p>
        </div>
      </div>

      {/* RIGHT SIDE: Image Container (Fixed Dimensions) */}
      <div className="w-32 h-32 flex-shrink-0 flex items-center justify-center rounded-lg">
        <img
          src={imageSrc}
          alt={`${title} Illustration`}
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
};

export default function CASsection() {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-8 px-4">
      <div className="max-w-full mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* CLDP Card */}
          <InfoCard
            title="CLDP"
            icon={Target}
            imageSrc="/placement/3601.png"
            text="CLDP is the career acceleration phase of the MBA journey, focused on specialization and professional credibility. Along with advanced business competencies, the programme includes Professional Certifications across multiple domains."
          />

          {/* IRP Card */}
          <InfoCard
            title="IRP"
            icon={Users}
            imageSrc="/placement/3602.png"
            text="IRP serves as the entry point into the professional world, equipping students with the practical skills, business orientation, and workplace understanding required in modern organizations. By integrating applied learning with industry exposure, IRP ensures students transition smoothly from classroom learning to real corporate roles."
          />

        </div>
      </div>
    </section>
  );
}