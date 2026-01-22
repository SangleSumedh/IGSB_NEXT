"use client";

import React, { useState } from "react";
import Image from "next/image";

/* =========================
   UPDATED DATA WITH NEW CONTENT
========================= */
const facilities = [
  {
    title: "Sports",
    chanakyaImage: "/chanu/chanuSports1.png",
    images: [
      "/NEWFacilities/Sports1.webp",
      "/NEWFacilities/Sports4.webp",
      "/NEWFacilities/Sports9.webp",
    ],
    description1:
      "The campus features modern sports facilities designed to support student fitness and overall wellness.",
    description2:
      "Regularly maintained grounds provide a safe and energetic environment that complements academic rigor and enhances the MBA campus experience.",
  },
  {
    title: "Library",
    chanakyaImage: "/chanu/chanakya.png",
    images: [
      "/NEWFacilities/Lib4.webp",
      "/NEWFacilities/Lib1.webp",
      "/NEWFacilities/Lib3.webp",
    ],
    description1:
      "With a wide range of academic resources and digital learning materials, the library supports MBA coursework, research initiatives, and faculty development.",
    description2:
      "The calm and structured environment promotes focused study and knowledge creation.",
  },
  {
    title: "Canteen",
    chanakyaImage: "/chanu/chanuCanteen.png",
    images: [
      "/NEWFacilities/Canteen2.webp",
      "/NEWFacilities/Canteen1.webp",
      "/NEWFacilities/Canteen3.webp",
    ],
    description1:
      "The campus canteen offers hygienic, nutritious, and affordable meals in a comfortable and student-friendly environment.",
    description2:
      "Designed to support daily campus life, it follows food safety standards and caters to diverse dietary preferences.",
  },
  {
    title: "Academics",
    chanakyaImage: "/chanu/chanuAcademics.png",
    images: [
      "/NEWFacilities/Lab5.webp",
      "/NEWFacilities/Lab7.webp",
      "/NEWFacilities/Lab3.webp",
    ],
    description1:
      "The academic ecosystem emphasizes industry-relevant curriculum, experienced faculty, and outcome-driven learning.",
    description2:
      "With a focus on practical exposure, skill development, and academic excellence, the institution prepares students for professional success and higher education pathways.",
  },
  {
    title: "Gym",
    chanakyaImage: "/chanu/chanuGym.png",
    images: [
      "/NEWFacilities/Gym3.webp",
      "/NEWFacilities/Gym8.webp",
      "/NEWFacilities/Gym4.webp",
    ],
    description1:
      "The campus gym is equipped with modern fitness equipment to support student health, wellness, and physical fitness.",
    description2:
      "Designed for daily workouts and stress management, it promotes a balanced academic lifestyle through regular exercise and well-being initiatives.",
  },
  {
    title: "Hostel",
    chanakyaImage: "/chanu/chanuHostel.png",
    singleImage: "/NEWFacilities/FacilitiesHostel.jpg",
    description1:
      "The campus hostel offers secure, comfortable, and well-maintained residential facilities for students.",
    description2:
      "Designed to support academic focus and personal well-being, it provides a safe living environment with essential amenities and round-the-clock supervision.",
  },
  {
    title: "Transport",
    chanakyaImage: "/chanu/chanu7.png",
    singleImage: "/NEWFacilities/Transport.webp",
    description1:
      "The institution provides reliable and safe transportation facilities with well-connected routes for students and staff.",
    description2:
      "The transport system ensures convenient daily commuting, punctuality, and accessibility across key locations, supporting a seamless campus experience.",
  },
  {
    title: "Nature and Peace",
    chanakyaImage: "/chanu/chanumeditatingp2.png",
    images: [
      "/NEWFacilities/nature1.png",
      "/NEWFacilities/nature2.jpg",
      "/NEWFacilities/nature3.jpg",
    ],
    description1:
      "Set amidst a green and serene landscape, the campus offers a clean, pollution-free environment with fresh air and a low AQI.",
    description2:
      "Surrounded by nature, landscaped gardens, and open spaces, the peaceful campus enhances focus, well-being, and holistic student development.",
  },
];

/* =========================
   MOBILE → LG DESIGN
========================= */
function FacilitySectionMobile({ data, index }) {
  const isEven = index % 2 === 1;

  return (
    <div
      className={`w-full px-5 py-8 ${
        isEven
          ? "bg-gradient-to-r from-[#10404A] to-[#1F6D71] text-white"
          : "bg-white text-gray-900"
      }`}
    >
      {/* HEADING ROW */}
      <div className="flex items-center justify-between gap-4 mb-4">
        <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
          {data.title}
        </h2>

        <div className="relative w-14 h-14 shrink-0">
          <Image
            src={data.chanakyaImage}
            alt="Chanakya"
            fill
            className="object-contain"
            sizes="56px"
          />
        </div>
      </div>

      {/* DESCRIPTION */}
      <p
        className={`text-sm leading-relaxed mb-5 ${
          isEven ? "text-white/90" : "text-gray-600"
        }`}
      >
        {data.description1} {data.description2}
      </p>

      {/* IMAGES GRID */}
      {data.singleImage ? (
        <div className="relative w-full h-56 md:h-72 rounded-md overflow-hidden">
          <Image
            src={data.singleImage}
            alt={data.title}
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      ) : (
        <div className="grid grid-cols-4 grid-rows-4 gap-2">
          <div className="col-span-4 row-span-2 relative h-48 md:h-64 rounded-md overflow-hidden">
            <Image
              src={data.images[0]}
              alt={`${data.title} 1`}
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>

          <div className="col-span-2 row-span-2 relative h-40 md:h-52 rounded-md overflow-hidden">
            <Image
              src={data.images[1]}
              alt={`${data.title} 2`}
              fill
              className="object-cover"
              sizes="50vw"
            />
          </div>

          <div className="col-span-2 row-span-2 relative h-40 md:h-52 rounded-md overflow-hidden">
            <Image
              src={data.images[2]}
              alt={`${data.title} 3`}
              fill
              className="object-cover"
              sizes="50vw"
            />
          </div>
        </div>
      )}
    </div>
  );
}


/* =========================
   DESKTOP DESIGN (UNCHANGED)
========================= */
function FacilitySection({ data, index }) {
  const isOdd = index % 2 === 0;

  return (
    <div className="relative w-full min-h-[80vh] overflow-hidden">
      {isOdd ? (
        <div className="absolute left-0 top-[56%] bottom-0 w-full bg-gradient-to-r from-[#10404A] to-[#1F6D71] z-0" />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-r from-[#10404A] to-[#1F6D71] z-0" />
      )}

      <div className="relative z-10 w-full px-6 py-12 xl:px-16 xl:py-8">
        <div className="mb-10 flex justify-start">
          <div>
            <h2
              className={`text-5xl md:text-6xl font-semibold ${
                isOdd ? "text-gray-900" : "text-white"
              }`}
            >
              {data.title}
            </h2>
            <div className="mt-3 w-20 h-[2px] bg-[#fc7116] ml-0" />
          </div>
        </div>

        <div
          className={`relative flex flex-col lg:flex-row items-stretch gap-6 lg:gap-8 ${
            !isOdd ? "lg:flex-row-reverse" : ""
          }`}
        >
          <div className="w-full lg:w-[70%] min-h-[400px]">
            {data.singleImage ? (
              <div className="relative w-full h-[60vh] min-h-[400px]">
                <Image
                  src={data.singleImage}
                  alt={data.title}
                  fill
                  className="object-cover rounded-sm"
                  sizes="(max-width: 768px) 100vw, 70vw"
                />
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6 h-full">
                <div className="relative lg:col-span-2 h-[50vh] md:h-[60vh] min-h-[300px]">
                  <Image
                    src={data.images[0]}
                    alt={`${data.title} 1`}
                    fill
                    className="object-cover rounded-sm"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 66vw, 46vw"
                  />
                </div>
                <div className="flex flex-col gap-4 lg:gap-6 h-[50vh] md:h-[60vh] min-h-[300px]">
                  <div className="relative flex-1">
                    <Image
                      src={data.images[1]}
                      alt={`${data.title} 2`}
                      fill
                      className="object-cover rounded-sm"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 23vw"
                    />
                  </div>
                  <div className="relative flex-1">
                    <Image
                      src={data.images[2]}
                      alt={`${data.title} 3`}
                      fill
                      className="object-cover rounded-sm"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 23vw"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="w-full lg:w-[30%] flex flex-col">
            <div className="rounded-xl p-6 lg:p-8 flex-1 flex flex-col">
              <div className="flex-1">
                <p
                  className={`text-base lg:text-md leading-relaxed mb-4 lg:mb-6 ${
                    isOdd ? "text-gray-600" : "text-white/90"
                  }`}
                >
                  {data.description1}
                </p>

                <p
                  className={`text-base lg:text-md leading-relaxed ${
                    isOdd ? "text-gray-600" : "text-white/90"
                  }`}
                >
                  {data.description2}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex justify-center">
                <div className="relative w-48 h-48 lg:w-60 lg:h-60">
                  <Image
                    src={data.chanakyaImage}
                    alt="Chanakya"
                    fill
                    className="object-contain opacity-95"
                    sizes="(max-width: 768px) 192px, 240px"
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

/* =========================
   PAGE
========================= */
export default function FacilitiesPage() {
  return (
    <section className="relative bg-white">
      <div className="w-full py-12 md:py-16 bg-gradient-to-r from-[#FF8B61] via-[#10404A] to-[#10404A] shadow-lg">
  <div className="max-w-7xl mx-auto px-5 md:px-6 xl:px-16 text-center">
    <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-extrabold text-white animate-fade-up">
      An MBA Campus Designed for Growth and Innovation
    </h1>

    <div className="mx-auto mt-4 md:mt-5 mb-5 md:mb-6 w-12 md:w-16 h-[3px] rounded-full bg-[#fc7116] animate-fade-up animation-delay-100" />

    <p className="text-sm sm:text-base md:text-lg lg:text-lg text-white/90 max-w-4xl mx-auto leading-relaxed animate-fade-up animation-delay-200">
      Explore a dynamic business school campus offering advanced academic facilities, 
      collaborative learning spaces, and a vibrant student ecosystem that prepares 
      future leaders for global careers.
    </p>
  </div>
</div>


      {/* MOBILE → LG */}
      <div className="block lg:hidden">
        {facilities.map((item, index) => (
          <FacilitySectionMobile key={index} data={item} index={index} />
        ))}
      </div>

      {/* DESKTOP */}
      <div className="hidden lg:block">
        {facilities.map((item, index) => (
          <FacilitySection key={index} data={item} index={index} />
        ))}
      </div>
    </section>
  );
}
