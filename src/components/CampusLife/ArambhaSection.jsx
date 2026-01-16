"use client";

import { useRef } from "react";

export default function ArambhaSection({ data = [] }) {
  const containerRef = useRef(null);
  const rightSideRef = useRef(null);

  return (
    <div className="bg-[#050110] text-white">
      <div
        ref={containerRef}
        className="relative h-screen overflow-hidden bg-gradient-to-b from-[#0f0524] to-[#050110]"
      >
        <div className="max-w-full mx-auto h-full flex px-10">

          {/* LEFT — TIMELINE (same as Metamorphosis RIGHT) */}
          <div className="w-2/4 relative overflow-hidden">
            <div className="absolute left-10 top-0 bottom-0 border-l-2 border-dashed border-[#3aafa9]" />

            <div ref={rightSideRef} className="pt-[5vh] pb-[5vh]">
              {data.map((item, i) => (
                <div
                  key={i}
                  className={`mb-[5vh] last:mb-0 ${
                    i === 0 ? "-mt-[5vh] pt-5" : ""
                  }`}
                >
                  {/* CARD — IDENTICAL */}
                  <div
                    className="relative flex items-stretch
                               bg-white/5 backdrop-blur-xl
                               border border-white/10
                               rounded-2xl overflow-hidden
                               hover:bg-white/10 transition-colors duration-300"
                  >
                    {/* LEFT: TEXT */}
                    <div className="relative z-10 w-3/5 p-6 space-y-2 max-w-lg">
                      <span className="text-sm uppercase tracking-wider text-purple-400">
                        {item.topic}
                      </span>

                      <h3 className="text-2xl font-bold text-white">
                        {item.name}
                      </h3>

                      <div className="w-24 h-10 bg-white/10 rounded-md flex items-center justify-center">
                        <img
                          src={item.companyLogo}
                          alt="Company logo"
                          className="w-full h-full object-center rounded-md"
                        />
                      </div>

                      <p className="text-gray-400">
                        {item.designation}
                      </p>
                    </div>

                    {/* RIGHT: IMAGE */}
                    <div className="absolute right-0 top-0 h-full w-2/5 ">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />

                      <div
                        className="absolute inset-0
                                   bg-gradient-to-l
                                   from-transparent
                                   via-[#050110]/40
                                   to-[#050110]/90"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — CONTENT (same as Metamorphosis LEFT) */}
          <div className="w-2/4 flex flex-col justify-center px-8 ml-10">
            <h1 className="text-5xl font-black uppercase mb-6">
              Arambha
            </h1>

            <p className="text-gray-400 mb-10 max-w-md">
              The beginning of momentum, where ideas take their first real form.
            </p>

            <div className="relative w-100 h-100">
              <img
                src="/chanu/chanucute.png"
                alt="Arambha visual"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
