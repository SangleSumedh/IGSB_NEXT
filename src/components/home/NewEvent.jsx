"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

/* ======================================================
   EVENTS DATA
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
];

const SLIDE_DURATION = 6000; // 6 seconds

export default function NewEvent() {
  const [activeEventIndex, setActiveEventIndex] = useState(0);
  const activeEvent = eventList[activeEventIndex];

  /* ================= AUTO SLIDE ================= */
  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveEventIndex((prev) =>
        prev === eventList.length - 1 ? 0 : prev + 1,
      );
    }, SLIDE_DURATION);

    return () => clearTimeout(timer);
  }, [activeEventIndex]);

  const goPrev = () => {
    setActiveEventIndex((prev) =>
      prev === 0 ? eventList.length - 1 : prev - 1,
    );
  };

  const goNext = () => {
    setActiveEventIndex((prev) =>
      prev === eventList.length - 1 ? 0 : prev + 1,
    );
  };

  const goToIndex = (index) => {
    setActiveEventIndex(index);
  };

  return (
    <div className="bg-slate-50 py-6 sm:py-12 overflow-hidden font-sans">
      <div className="max-w-full mx-auto px-4 sm:px-16">

        {/* ================= HEADER ================= */}
        <div className="mb-10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
          <div className="max-w-4xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#10404A] mb-4">
              Life at IGSB
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              From cultural celebrations to award ceremonies, campus life at
              IGSB is vibrant, visual, and unforgettable.
            </p>
          </div>

          {activeEvent.backdrop && (
            <div className="hidden lg:flex justify-end items-center relative w-[150px] h-[150px] opacity-80 mix-blend-multiply">
              <Image
                src={activeEvent.backdrop}
                alt=""
                aria-hidden="true"
                fill
                className="object-contain transition-opacity duration-700"
                priority
              />
            </div>
          )}
        </div>

        {/* ================= SINGLE EVENT ROW (MOBILE + MD–LG) ================= */}
        <div className="flex lg:hidden items-center gap-4 mb-8">
          <button
            onClick={goPrev}
            className="w-10 h-10 rounded-full bg-[#FF8C1A]/15 text-[#FF8C1A] flex items-center justify-center hover:bg-[#FF8C1A] hover:text-white transition"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="flex-1 text-center text-base sm:text-lg font-semibold text-[#FF8C1A] truncate">
            {activeEvent.title}
          </div>

          <button
            onClick={goNext}
            className="w-10 h-10 rounded-full bg-gradient-to-r from-[#FF8C1A] to-[#F2A900] text-white flex items-center justify-center hover:opacity-90 transition"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* ================= MAIN GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">

          {/* LEFT NAV (LG+ ONLY) */}
          <div className="hidden lg:block lg:col-span-1">
            {/* arrows */}
            <div className="flex gap-3 mb-6">
              <button
                onClick={goPrev}
                className="w-10 h-10 rounded-full bg-[#FF8C1A]/15 text-[#FF8C1A] flex items-center justify-center hover:bg-[#FF8C1A] hover:text-white transition"
              >
                <ChevronLeft size={20} />
              </button>

              <button
                onClick={goNext}
                className="w-10 h-10 rounded-full bg-gradient-to-r from-[#FF8C1A] to-[#F2A900] text-white flex items-center justify-center hover:opacity-90 transition"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* vertical list */}
            <div className="space-y-4">
              {eventList.map((event, index) => (
                <div
                  key={index}
                  onClick={() => goToIndex(index)}
                  className={`cursor-pointer text-lg transition-colors duration-300
                    ${
                      activeEventIndex === index
                        ? "font-semibold text-[#FF8C1A]"
                        : "text-slate-500 hover:text-[#10404A]"
                    }`}
                >
                  {event.title}
                </div>
              ))}
            </div>
          </div>

          {/* ================= IMAGE GRIDS ================= */}
          <div className="lg:col-span-3">

            {/* ===== MOBILE GRID (2–1–2) ===== */}
            <div className="grid grid-cols-2 gap-4 md:hidden">

              {/* row 1 */}
              <div className="relative h-40 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  key={activeEvent.images[1]}
                  src={activeEvent.images[1]}
                  alt={`${activeEvent.title} highlight`}
                  fill
                  className="object-cover transition-opacity duration-700 ease-in-out"
                  priority
                />
              </div>

              <div className="relative h-40 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  key={activeEvent.images[2]}
                  src={activeEvent.images[2]}
                  alt={`${activeEvent.title} moment`}
                  fill
                  className="object-cover transition-opacity duration-700 ease-in-out"
                />
              </div>

              {/* row 2 - full width */}
              <div className="col-span-2 relative h-56 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  key={activeEvent.images[0]}
                  src={activeEvent.images[0]}
                  alt={activeEvent.title}
                  fill
                  className="object-cover transition-opacity duration-700 ease-in-out"
                  priority
                />
              </div>

              {/* row 3 */}
              <div className="relative h-40 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  key={activeEvent.images[3]}
                  src={activeEvent.images[3]}
                  alt={`${activeEvent.title} activity`}
                  fill
                  className="object-cover object-top transition-opacity duration-700 ease-in-out"
                />
              </div>

              <div className="relative h-40 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  key={activeEvent.images[4]}
                  src={activeEvent.images[4]}
                  alt={`${activeEvent.title} celebration`}
                  fill
                  className="object-cover transition-opacity duration-700 ease-in-out"
                />
              </div>
            </div>

            {/* ===== TABLET + DESKTOP BENTO GRID ===== */}
            <div className="hidden md:grid md:grid-cols-3 gap-5 h-auto md:h-[500px]">

              {/* LEFT COLUMN */}
              <div className="flex flex-col gap-5">
                <div className="flex-1 relative rounded-3xl overflow-hidden shadow-xl">
                  <Image
                    key={activeEvent.images[1]}
                    src={activeEvent.images[1]}
                    alt={`${activeEvent.title} highlight`}
                    fill
                    className="object-cover transition-opacity duration-700 ease-in-out"
                    priority
                  />
                </div>

                <div className="h-48 relative rounded-3xl overflow-hidden shadow-xl">
                  <Image
                    key={activeEvent.images[2]}
                    src={activeEvent.images[2]}
                    alt={`${activeEvent.title} moment`}
                    fill
                    className="object-cover transition-opacity duration-700 ease-in-out"
                  />
                </div>
              </div>

              {/* CENTER */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  key={activeEvent.images[0]}
                  src={activeEvent.images[0]}
                  alt={activeEvent.title}
                  fill
                  className="object-cover transition-opacity duration-700 ease-in-out"
                  priority
                />
              </div>

              {/* RIGHT COLUMN */}
              <div className="flex flex-col gap-5">
                <div className="flex-1 relative rounded-3xl overflow-hidden shadow-xl">
                  <Image
                    key={activeEvent.images[3]}
                    src={activeEvent.images[3]}
                    alt={`${activeEvent.title} activity`}
                    fill
                    className="object-cover object-top transition-opacity duration-700 ease-in-out"
                  />
                </div>

                <div className="h-48 relative rounded-3xl overflow-hidden shadow-xl">
                  <Image
                    key={activeEvent.images[4]}
                    src={activeEvent.images[4]}
                    alt={`${activeEvent.title} celebration`}
                    fill
                    className="object-cover transition-opacity duration-700 ease-in-out"
                  />
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
