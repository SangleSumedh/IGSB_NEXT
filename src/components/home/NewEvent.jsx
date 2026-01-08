"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Play,
  ArrowUpRight,
  Mic,
} from "lucide-react";

// --- DUMMY DATA ---
const eventList = [
  {
    title: "Indira Diversity Awards",
    description:
      "The highlight of this unforgettable event was B Praak setting the stage on fire with an electrifying live performance!",
    images: {
      main: "/Home/events/BParak.jpg",
      top: "/Home/events/event2.jpg",
      bottom: "/Home/events/event3.jpg",
    },
    backdrop: "/Home/events/event1backdrop.png", // ✅ existing image
  },
  {
    title: "Indira Women Achievers Awards",
    description:
      "An engaging discussion on constitutional values and their relevance in modern society.",
    images: {
      main: "/Home/events/event21.jpg",
      top: "/Home/events/event22.jpg",
      bottom: "/Home/events/event23.jpg",
    },
    backdrop: "/Home/events/event2backdrop.png",
  },
  {
    title: "Sports (to be changed)",
    description: "All the IGSB sports and fun",
    images: {
      main: "/Home/events/event31.jpg",
      top: "/Home/events/event33.jpg",
      bottom: "/Home/events/event32.jpg",
    },
    backdrop: "/Home/events/backdrop-placeholder.png",
  },
  {
    title: "SPLASH",
    description:
      "Industry leaders gather to share insights on the future of business and management.",
    images: {
      main: "/Home/events/event41.jpg",
      top: "/Home/events/event42.jpg",
      bottom: "/Home/events/event43.jpg",
    },
    backdrop: "/Home/events/backdrop-placeholder.png",
  },
  // {
  //   title: "Projections (TEMP)",
  //   description:
  //     "A technical symposium showcasing the latest innovations in technology and engineering.",
  //   images: {
  //     main: "/Home/boy.png",
  //     top: "/Home/boy.png",
  //     bottom: "/Home/boy.png",
  //   },
  //   backdrop: "/Home/events/backdrop-placeholder.png",
  // },
  // {
  //   title: "IGSB Film & Design Festival (TEMP)",
  //   description:
  //     "A creative exploration of visual storytelling and design aesthetics.",
  //   images: {
  //     main: "/Home/boy.png",
  //     top: "/Home/boy.png",
  //     bottom: "/Home/boy.png",
  //   },
  //   backdrop: "/Home/events/backdrop-placeholder.png",
  // },
  // {
  //   title: "National Health & Skills Conclave (TEMP)",
  //   description:
  //     "Focusing on the intersection of healthcare advancements and skill development.",
  //   images: {
  //     main: "/Home/boy.png",
  //     top: "/Home/boy.png",
  //     bottom: "/Home/boy.png",
  //   },
  //   backdrop: "/Home/events/backdrop-placeholder.png",
  // },
];

export default function NewEvent() {
  const [activeEventIndex, setActiveEventIndex] = useState(0);

  // Access the currently active event object
  const activeEvent = eventList[activeEventIndex];

  return (
    <div className="bg-slate-50 py-4 sm:py-8 overflow-hidden font-sans">
      <div className="max-w-full mx-auto px-4 sm:px-16">
        {/* 1. SECTION HEADER */}
        <div className="mb-12 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
          <div className="max-w-4xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#10404A] mb-4">
              Life at IGSB
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              From celebrity talks to Lit Fests and interactions with industry
              icons, our campus pulses with energy. Student life here is
              dynamic, buzzing, and full of meaningful opportunities.
            </p>
          </div>
          {/* Header Image - Hidden on small screens, visible on large desktop */}
          <div className="hidden lg:flex justify-end items-center relative  w-[150px] h-[150px]  opacity-80 mix-blend-multiply">
            <Image
              src={activeEvent.backdrop}
              alt={`${activeEvent.title} Backdrop`}
              fill
              className="object-contain transition-opacity duration-500"
              priority
            />
          </div>
        </div>

        {/* 2. MAIN GRID LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* --- LEFT COLUMN: NAVIGATION LIST --- */}
          <div className="lg:col-span-1 flex flex-col">
            {/* Nav Arrows */}
            <div className="flex gap-3 mb-6">
              <button
                onClick={() =>
                  setActiveEventIndex(Math.max(0, activeEventIndex - 1))
                }
                className="w-10 h-10 rounded-full bg-[#10404A]/10 text-[#10404A] flex items-center justify-center hover:bg-[#10404A] hover:text-white transition-colors"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() =>
                  setActiveEventIndex(
                    Math.min(eventList.length - 1, activeEventIndex + 1)
                  )
                }
                className="w-10 h-10 rounded-full bg-[#10404A] text-white flex items-center justify-center hover:bg-[#fb7035] transition-colors shadow-lg shadow-orange-500/20"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* List Items */}
            <div className="space-y-4">
              {eventList.map((event, index) => (
                <div
                  key={index}
                  onClick={() => setActiveEventIndex(index)}
                  className={`
                    cursor-pointer text-lg font-medium transition-all duration-300
                    ${
                      activeEventIndex === index
                        ? "text-[#fb7035] translate-x-2 font-bold" // Active: Orange
                        : "text-slate-500 hover:text-[#10404A]"
                    }
                  `}
                >
                  {event.title}
                </div>
              ))}
            </div>
          </div>

          {/* --- RIGHT COLUMN: BENTO GRID --- */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-5 h-auto md:h-[600px]">
            {/* COLUMN A: Info Cards */}
            <div className="flex flex-col gap-5 h-full">
              {/* Card 1: Description (Orange Gradient) */}
              <div className="flex-1 bg-gradient-to-br from-[#fb7035] to-[#e8602a] rounded-3xl p-6 text-white flex flex-col justify-between shadow-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-20">
                  <ArrowUpRight size={40} />
                </div>
                <div>
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mb-4 backdrop-blur-sm">
                    <Mic size={20} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold leading-tight mb-2">
                    {activeEvent.title}
                  </h3>
                  <p className="text-sm text-white/90 line-clamp-3">
                    {activeEvent.description}
                  </p>
                </div>
                <button className="mt-4 text-xs font-bold uppercase tracking-wider flex items-center gap-2 hover:gap-3 transition-all">
                  Read More <ArrowUpRight size={14} />
                </button>
              </div>

              {/* Card 2: Stats (Teal Gradient) */}
              <div className="h-48 bg-gradient-to-br from-[#10404A] to-[#1F6D71] rounded-3xl p-6 text-white flex flex-col justify-end shadow-xl relative overflow-hidden">
                <div className="absolute top-4 right-4 w-16 h-16 bg-white/10 rounded-lg rotate-12 backdrop-blur-md border border-white/10"></div>

                <h4 className="text-3xl font-bold">1400+</h4>
                <p className="text-sm text-white/80">Participants</p>
              </div>
            </div>

            {/* COLUMN B: Tall Image (Centerpiece) */}
            <div className="md:col-span-1 h-[400px] md:h-full relative rounded-3xl overflow-hidden shadow-2xl group">
              <Image
                src={activeEvent.images.main}
                alt={activeEvent.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#10404A]/90 via-transparent to-transparent"></div>

              {/* Watch Video Button */}
              {/* <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-max">
                <button className="flex items-center gap-3 bg-[#6366f1] hover:bg-[#4f46e5] text-white pl-4 pr-1 py-1 rounded-full shadow-lg transition-all group-hover:-translate-y-1">
                  <span className="text-sm font-bold">Watch Video</span>
                  <div className="w-8 h-8 bg-[#fb7035] rounded-full flex items-center justify-center text-white shadow-md">
                    <Play size={14} fill="currentColor" />
                  </div>
                </button>
              </div> */}
            </div>

            {/* COLUMN C: Right Images */}
            <div className="flex flex-col gap-5 h-full">
              {/* Top Image */}
              <div className="flex-1 relative rounded-3xl overflow-hidden shadow-lg group">
                <Image
                  src={activeEvent.images.top}
                  alt="Highlights"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all"></div>
              </div>

              {/* Bottom Image with Overlay */}
              <div className="h-48 relative rounded-3xl overflow-hidden shadow-lg group">
                <Image
                  src={activeEvent.images.bottom}
                  alt="Guest Speaker"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-5">
                  <div>
                    <p className="text-xs text-white/80">Guest Speakers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
