import React from "react";
import { ChevronRight } from "lucide-react";

export default function PhdSection() {
  const items = [
    { tag: "PHD", title: "PhD in Finance", img: "/MBA1.jpg" },
    { tag: "PHD", title: "PhD in Marketing", img: "/MBA2.jpg" },
    { tag: "PHD", title: "PhD in Business Analytics", img: "/MBA3.jpg" },
    { tag: "PHD", title: "PhD in Human Resource", img: "/MBA4.jpg" },
  ];

  return (
    <div className="w-full bg-white px-6 py-12">
      <section className="w-full max-w-7xl mx-auto">

        {/* HEADING */}
        <h2 className="text-2xl md:text-4xl font-extrabold text-secondary mb-4">
          PhD Research Programmes
        </h2>

        {/* TEXT BELOW HEADING */}
        <div className="max-w-7xl mb-10 space-y-4">
          <p className="text-gray-700 text-md md:text-lg leading-relaxed text-justify">
            Indira Global School of Business (IGSB), recognized by AICTE and UGC and
            affiliated with Savitribai Phule Pune University (SPPU), has built a strong
            reputation as a premier B-School shaping globally competent management
            professionals. Strengthening its academic excellence, IGSB now offers
            Doctoral Programs in Management from the academic year 2025–26, marking a
            significant step toward fostering impactful research and innovation.
          </p>

          <p className="text-gray-700 text-md md:text-lg leading-relaxed text-justify">
            The IGSB Research Center (PGRC) is a recognized Ph.D. Research Center under
            SPPU, dedicated to promoting high-quality, rigorous research across diverse
            management domains. The Center aims to cultivate an intellectually
            stimulating environment where scholars, academicians, and industry
            researchers collaborate to explore contemporary business challenges and
            contribute original insights to the field of management.
          </p>

          <p className="text-gray-700 text-md md:text-lg leading-relaxed text-justify">
            At the heart of the Research Center’s philosophy is a commitment to advancing
            knowledge through scholarly inquiry, critical thinking, and interdisciplinary
            engagement. The Doctoral Programme encourages research that not only enriches
            academic literature but also supports industry, policy, and society through
            evidence-based outcomes. IGSB strongly promotes multidisciplinary research,
            empowering scholars to integrate perspectives and address complex, real-world
            challenges with depth and innovation.
          </p>
        </div>

        {/* ================= MOBILE (EQUAL CARDS) ================= */}
        <div className="grid grid-cols-1 gap-6 md:hidden">
          {items.map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </div>

        {/* ================= DESKTOP (EXISTING LAYOUT) ================= */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">

          {/* LEFT TALL CARD */}
          <div className="md:row-span-2">
            <Card {...items[0]} tall />
          </div>

          {/* RIGHT TOP BIG CARD */}
          <div className="md:col-span-2">
            <Card {...items[1]} />
          </div>

          {/* RIGHT BOTTOM TWO CARDS */}
          <div className="md:col-span-2 grid md:grid-cols-2 gap-6">
            <Card {...items[2]} />
            <Card {...items[3]} />
          </div>

        </div>

      </section>
    </div>
  );
}

/* ---------------- CARD ---------------- */

function Card({ img, tag, title, tall }) {
  return (
    <div
      className={`relative w-full overflow-hidden rounded-lg cursor-pointer group
        ${tall ? "h-[260px] md:h-[545px]" : "h-[260px]"}
        bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100`}
    >
      {/* IMAGE */}
      <img
        src={img}
        alt={title}
        className="w-full h-full object-cover transition-all duration-500 group-hover:opacity-40"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-teal-200 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

      {/* TAG */}
      <span className="absolute top-4 left-4 bg-teal-200 text-black text-xs font-semibold px-3 py-1 rounded-md z-20">
        {tag}
      </span>

      {/* CONTENT */}
      <div className="absolute bottom-6 left-6 right-6 z-20">
        <h3 className="text-xl font-semibold text-white transition-all duration-500 group-hover:text-black">
          {title}
        </h3>

        <p className="text-sm text-white opacity-0 max-h-0 overflow-hidden 
          group-hover:max-h-24 group-hover:opacity-100 transition-all duration-500 group-hover:text-black">
          Explore advanced PhD research opportunities across specializations.
        </p>

        <div className="flex items-center gap-1 mt-3 text-sm font-medium text-white group-hover:text-black">
          <span>Know More</span>
          <ChevronRight size={18} />
        </div>
      </div>
    </div>
  );
}
