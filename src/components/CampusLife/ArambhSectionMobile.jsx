"use client";

import React from "react";


export default function ArambhaSectionMobile({ data = [] }) {
  return (
    <div className="bg-[#050110] text-white px-4 py-16">

      {/* TITLE */}
      <h1 className="text-4xl font-black uppercase mb-4">
        Arambha
      </h1>

      <p className="text-gray-400 mb-10">
        The beginning of momentum, where ideas take their first real form.
      </p>

      {/* IMAGE */}
      <div className="mb-12">
        <img
          src="/chanu/chanucute.png"
          alt="Arambha visual"
          className="w-full h-auto rounded-2xl object-cover"
        />
      </div>

      {/* TIMELINE / CARDS */}
      <div className="space-y-6">
        {data.map((item, i) => (
          <div
            key={i}
            className="
              relative bg-white/5 backdrop-blur-xl
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
              <span className="text-xs uppercase tracking-wider text-purple-400">
                {item.topic}
              </span>

              <h3 className="text-xl font-bold">
                {item.name}
              </h3>

              <div className="w-20 h-8 bg-white/10 rounded-md flex items-center justify-center">
                <img
                  src={item.companyLogo}
                  alt="Company logo"
                  className="w-full h-full object-contain"
                />
              </div>

              <p className="text-sm text-gray-400">
                {item.designation}
              </p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
