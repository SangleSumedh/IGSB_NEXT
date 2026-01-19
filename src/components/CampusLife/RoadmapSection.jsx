"use client";

import React from "react";
import { roadmapData } from "./roadmapdata";
import { arambhData } from "./arambhdata";
import ArambhaSectionMobile from "./ArambhSectionMobile";

export default function RoadmapSectionMobile() {
  return (
    <div className="bg-gradient-to-r from-[#10404A] to-[#1F6D71] text-white px-4 py-16">

      {/* TITLE */}
      <h1 className="text-4xl font-black uppercase mb-4 text-[#082328]">
        Metamorphosis
      </h1>

      <p className="text-white mb-10">
        Experience the journey through our planned phases.
      </p>

      {/* IMAGE */}
      <div className=" w-100">
        <img
          src="/chanu/chanuhand2.png"
          alt="Metamorphosis visual"
          className="w-full h-auto rounded-2xl object-contain"
        />
      </div>

      {/* CARDS */}
      <div className="space-y-6">
        {roadmapData.map((item, i) => (
          <div
            key={i}
            className="
              relative bg-[#3aafa9] backdrop-blur-xl
              border border-white/10
              rounded-2xl overflow-hidden
            "
          >
            {/* IMAGE */}
            <div className="relative h-48">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0
                bg-gradient-to-t
                from-[#050110]/90
                via-[#050110]/40
                to-transparent"
              />
            </div>

            {/* TEXT */}
            <div className="p-4 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-secondary">
                {item.topic}
              </span>

              <h3 className="text-xl font-bold">
                {item.name}
              </h3>

              <div className="w-20 h-8 bg-white/10 rounded-md flex items-center justify-center">
                <img
                  src={item.companyLogo}
                  alt="Company logo"
                  className="w-20 h-8 rounded-md"
                />
              </div>

              <p className="text-sm text-white">
                {item.designation}
              </p>
            </div>
          </div>

        ))}
      </div>
         <ArambhaSectionMobile data={arambhData} />

    </div>
  );
}
