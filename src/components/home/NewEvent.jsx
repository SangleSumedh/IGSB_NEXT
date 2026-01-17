"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

/* ======================================================
   EVENTS DATA (5 IMAGES PER EVENT)
====================================================== */
const eventList = [
  {
    title: "Indira Diversity Awards",
    images: [
      "/newEvents/IDA1.jpg",
      "/newEvents/IDA2.jpg",
      "/newEvents/IDA7.jpg",
      "/newEvents/IDA12.JPG",
      "/newEvents/IDA11.jpg",
    ],
    backdrop: "/Home/events/event1backdrop.png",
  },
  {
    title: "Indira Women Achievers Awards",
    images: [
      "/newEvents/IWA2.jpg",
      "/newEvents/IWA7.jpg",
      "/newEvents/IWA11.jpg",
      "/newEvents/IWA8.jpg",
      "/newEvents/IWA6.jpg",
    ],
    backdrop: "/Home/events/event2backdrop.png",
  },
  {
    title: "Gusto",
    images: [
      "/newEvents/Gusto1.jpg",
      "/newEvents/Gusto2.jpg",
      "/newEvents/Gusto3.jpg",
      "/newEvents/Gusto4.jpg",
      "/newEvents/Gusto5.jpeg",
    ],
  },
  {
    title: "Navratri",
    images: [
      "/newEvents/Navratri5.JPG",
      "/newEvents/Navratri2.JPG",
      "/newEvents/Navratri4.JPG",
      "/newEvents/Navratri6.JPG",
      "/newEvents/Navratri3.JPG",
    ],
  },
  {
    title: "Splash",
    images: [
      "/newEvents/Splash2.jpg",
      "/newEvents/Splash7.jpg",
      "/newEvents/Splash6.jpg",
      "/newEvents/Splash8.jpg",
      "/newEvents/Splash5.jpg",
    ],
  },
  {
    title: "Ganpati Aarti",
    images: [
      "/newEvents/GanpatiAartiImg.png",
      "/newEvents/GanpatiAartiImg.png",
      "/newEvents/GanpatiAartiImg.png",
      "/newEvents/GanpatiAartiImg.png",
      "/newEvents/GanpatiAartiImg.png",
    ],
  },
];

export default function NewEvent() {
  const [activeEventIndex, setActiveEventIndex] = useState(0);
  const activeEvent = eventList[activeEventIndex];

  return (
    <div className="bg-slate-50 py-6 sm:py-12 overflow-hidden font-sans">
      <div className="max-w-full mx-auto px-4 sm:px-16">

        {/* ================= HEADER ================= */}
        <div className="mb-12 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
          <div className="max-w-4xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#10404A] mb-4">
              Life at IGSB
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              From cultural celebrations to award ceremonies, campus life at
              IGSB is vibrant, visual, and unforgettable.
            </p>
          </div>

          {/* ✅ BACKDROP LOGIC — UNCHANGED */}
          {activeEvent.backdrop && (
            <div className="hidden lg:flex justify-end items-center relative w-[150px] h-[150px] opacity-80 mix-blend-multiply">
              <Image
                src={activeEvent.backdrop}
                alt=""
                aria-hidden="true"
                fill
                className="object-contain transition-opacity duration-500"
                priority
              />
            </div>
          )}
        </div>

        {/* ================= MAIN GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">

          {/* LEFT NAV */}
          <div className="lg:col-span-1">
            <div className="flex gap-3 mb-6">
              <button
                onClick={() =>
                  setActiveEventIndex(Math.max(0, activeEventIndex - 1))
                }
                className="w-10 h-10 rounded-full bg-[#10404A]/10 text-[#10404A] flex items-center justify-center hover:bg-[#10404A] hover:text-white"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() =>
                  setActiveEventIndex(
                    Math.min(eventList.length - 1, activeEventIndex + 1),
                  )
                }
                className="w-10 h-10 rounded-full bg-[#10404A] text-white flex items-center justify-center hover:bg-[#fb7035]"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            <div className="space-y-4">
              {eventList.map((event, index) => (
                <div
                  key={index}
                  onClick={() => setActiveEventIndex(index)}
                  className={`cursor-pointer text-lg transition-all
                    ${
                      activeEventIndex === index
                        ? "text-[#fb7035] translate-x-2 font-bold"
                        : "text-slate-500 hover:text-[#10404A]"
                    }`}
                >
                  {event.title}
                </div>
              ))}
            </div>
          </div>

          {/* ================= IMAGE-ONLY BENTO GRID ================= */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-5 h-auto md:h-[600px]">

            {/* LEFT COLUMN (2 images) */}
            <div className="flex flex-col gap-5">
              <div className="flex-1 relative rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src={activeEvent.images[1]}
                  alt={`${activeEvent.title} highlight`}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="h-48 relative rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src={activeEvent.images[2]}
                  alt={`${activeEvent.title} moment`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* CENTER TALL IMAGE */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={activeEvent.images[0]}
                alt={activeEvent.title}
                fill
                className="object-cover object-"
                priority
              />
            </div>

            {/* RIGHT COLUMN (2 images) */}
            <div className="flex flex-col gap-5">
              <div className="flex-1 relative rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src={activeEvent.images[3]}
                  alt={`${activeEvent.title} activity`}
                  fill
                  className="object-cover object-top"
                />
              </div>

              <div className="h-48 relative rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src={activeEvent.images[4]}
                  alt={`${activeEvent.title} celebration`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
