"use client";
import React from 'react'
import Image from 'next/image'
import { useState } from "react";

function NatureAndPeacePage() {

      const [showVideo, setShowVideo] = useState(true);

 



  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      {/* Hero Section with Video */}
    <section className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/20 to-teal-900/10 z-0"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

          {/* LEFT */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="h-[400px] md:h-[550px] flex flex-col justify-center">
              <h1 className="text-4xl md:text-6xl font-bold text-emerald-900 mb-6 text-center">
                Nature & Peace
                <span className="block text-3xl md:text-4xl text-emerald-700 mt-3">
                  at IGSB Campus
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
                Where Modern Business Education Meets Natural Serenity
              </p>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-xl">
                <p className="text-lg md:text-xl text-gray-800 leading-relaxed ">
                  "IGSB (Indira Global School of Business) is located along the Mumbai–Pune Expressway,
                  where our campus blends state-of-the-art infrastructure with a serene, natural setting,
                  offering a fresh and inspiring environment that fosters innovation, focus, and holistic development."
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="flex flex-col items-center">

              {/* VIDEO / IMAGE CONTAINER */}
              <div className="relative rounded-2xl overflow-hidden  h-[400px] md:h-[550px] w-full">
                {showVideo ? (
                  <video
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
   
                  >
                    <source src="/chanu/chanumeditatingv1.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img
                    src="/chanu/chanumeditatingp2.png"
                    alt="Meditation at IGSB"
                    className="w-full h-full object-cover"
                  />
                )}

          
              </div>

              {/* SWITCH BUTTON */}
              <button
                onClick={() => setShowVideo(!showVideo)}
                className="mt-4 px-6 py-2 rounded-full bg-emerald-700 text-white text-sm font-medium
                           hover:bg-emerald-800 transition-colors duration-300 shadow-md"
              >
                {showVideo ? "View Image" : "Play Video"}
              </button>

              {/* Caption */}
              <div className="mt-3 text-center lg:text-left">
                <p className="text-gray-600 text-sm">
                  Experience the peaceful ambiance of our campus through guided meditation sessions
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>

    </div>
  )
}

export default NatureAndPeacePage