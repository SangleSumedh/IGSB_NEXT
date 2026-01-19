"use client";

import React from "react";

export default function ArambhSectionMobile({ data = [] }) {
  return (
    // Just a margin-top to separate it from the Metamorphosis section
    <div className="mt-20 border-t border-white/20 pt-10">

      {/* 1. TITLE (Matches parent H1 style) */}
      <h1 className="text-4xl font-black uppercase mb-4 text-[#082328]">
        Arambha
      </h1>

      <p className="text-white mb-10">
        The beginning of momentum, where ideas take their first real form.
      </p>

      {/* 2. IMAGE (Matches parent Image style) */}
      <div className="w-100 mb-10">
        <img
          src="/chanu/chanuleft.png"
          alt="Arambha visual"
          className="w-full h-auto rounded-2xl object-contain"
        />
      </div>

      {/* 3. CARDS (Matches parent Card style exactly) */}
      <div className="space-y-6">
        {data.map((item, i) => (
          <div
            key={i}
            className="
              relative bg-[#3aafa9] backdrop-blur-xl
              border border-white/10
              rounded-2xl overflow-hidden
            "
          >
            {/* CARD IMAGE */}
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

            {/* CARD TEXT */}
            <div className="p-4 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-secondary">
                {item.topic}
              </span>

              <h3 className="text-xl font-bold text-white">
                {item.name}
              </h3>

              <div className="w-20 h-8 bg-white/10 rounded-md flex items-center justify-center">
                <img
                  src={item.companyLogo}
                  alt="Company logo"
                  className="w-20 h-8 rounded-md object-contain p-1"
                />
              </div>

              <p className="text-sm text-white">
                {item.designation}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}