"use client";
import React from "react";

/* =========================
   DATA
========================= */
const facilities = [
  {
    title: "Sports Facilities",
    name: "Sports",
    images: [
      "/NEWFacilities/Sports1.JPG",
      "/NEWFacilities/Sports4.JPG",
      "/NEWFacilities/Sports9.JPG",
    ],
    description1:
      "Our campus offers excellent sports facilities that encourage physical fitness, teamwork, and overall well-being among students.",
    description2:
      "The sports infrastructure is regularly maintained to provide a safe, energetic, and motivating environment.",
  },
  {
    title: "Library",
    name: "Library",
    images: [
      "/NEWFacilities/Lib4.jpg",
      "/NEWFacilities/Lib1.jpg",
      "/NEWFacilities/Lib3.jpg",
    ],
    description1:
      "The library provides a quiet and resource-rich environment that supports academic learning, research, and self-study.",
    description2:
      "It offers a wide collection of books, journals, and digital resources for students and faculty.",
  },
  {
    title: "Canteen",
    name: "Canteen",
    images: [
      "/NEWFacilities/Canteen2.JPG",
      "/NEWFacilities/Canteen1.JPG",
      "/NEWFacilities/Canteen3.JPG",
    ],
    description1:
      "The campus canteen serves hygienic, nutritious, and affordable meals in a comfortable setting.",
    description2:
      "It acts as a social space where students relax and interact during breaks.",
  },
  {
    title: "Academics",
    name: "Academics",
    images: [
      "/NEWFacilities/Lab5.jpg",
      "/NEWFacilities/Lab2.jpg",
      "/NEWFacilities/Lab3.jpg",
    ],
    description1:
      "Academic facilities are designed to foster innovation, critical thinking, and practical learning.",
    description2:
      "Well-equipped classrooms and labs support a strong learning ecosystem.",
  },
  {
    title: "Gym",
    name: "Gym",
    images: [
      "/NEWFacilities/Gym3.webp",
      "/NEWFacilities/Gym8.webp",
      "/NEWFacilities/Gym4.webp",
    ],
    description1:
      "The gym is equipped with modern fitness equipment to promote physical health and active lifestyles.",
    description2:
      "Students are encouraged to maintain fitness as part of holistic development.",
  },
  {
    title: "Hostel",
    name: "Hostel",
    singleImage: "/NEWFacilities/FacilitiesHostel.jpg",
    description1:
      "The hostel provides a safe, comfortable, and disciplined residential environment for students.",
    description2:
      "It includes essential amenities that support both academic focus and personal well-being.",
  },
  {
    title: "Transport",
    name: "Transport",
    singleImage: "/NEWFacilities/Transport.webp",
    description1:
      "The institute offers reliable transportation facilities connecting major routes and nearby areas.",
    description2:
      "It ensures safe and punctual travel for students and staff.",
  },
  {
    title: "Nature and Peace",
    name: "Nature and Peace",
    images: [
      "/NEWFacilities/Lab5.jpg",
      "/NEWFacilities/Lab2.jpg",
      "/NEWFacilities/Lab3.jpg",
    ],
    description1:
      "The green campus environment promotes calmness, focus, and mental well-being.",
    description2:
      "Natural surroundings create a peaceful atmosphere ideal for learning and reflection.",
  },
];

/* =========================
   FACILITY SECTION
========================= */
function FacilitySection({ data, index }) {
  const isOdd = index % 2 === 0;

  return (
    <div className="relative w-full min-h-[80vh] overflow-hidden">
      {/* BACKGROUND */}
      {isOdd ? (
        <div className="absolute left-0 top-[52%] bottom-0 w-full bg-gradient-to-r from-[#10404A] to-[#1F6D71] z-0" />
      ) : (
        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#10404A] to-[#1F6D71] z-0" />
      )}

      <div className="relative z-10 w-full px-6 py-12 xl:px-16 xl:py-8">
        {/* HEADING */}
        <div className={`mb-10 flex ${isOdd ? "justify-start" : "justify-end"}`}>
          <div>
            <h2 className={`text-3xl font-semibold ${isOdd ? "text-gray-900" : "text-white"}`}>
              {data.title}
            </h2>
            <div className={`mt-2 w-20 h-[2px] bg-[#fc7116] ${isOdd ? "ml-0" : "ml-auto"}`} />
          </div>
        </div>

        <div className={`relative flex flex-col lg:flex-row gap-8 ${!isOdd ? "lg:flex-row-reverse" : ""}`}>
          {/* IMAGES */}
          <div className="w-full lg:w-[70%]">
            {data.singleImage ? (
              <img src={data.singleImage} className="w-full h-[60vh] object-cover rounded-sm" />
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 h-[60vh]">
                  <img src={data.images[0]} className="w-full h-full object-cover rounded-sm" />
                </div>
                <div className="flex flex-col gap-6 h-[60vh]">
                  <img src={data.images[1]} className="w-full h-1/2 object-cover rounded-sm" />
                  <img src={data.images[2]} className="w-full h-1/2 object-cover rounded-sm" />
                </div>
              </div>
            )}
          </div>

          {/* TEXT + CHANAKYA */}
          <div
            className={`w-full lg:w-[30%] ${
              isOdd
                ? "absolute lg:static left-0 right-0 top-[26%] lg:top-auto flex flex-col items-center text-center translate-y-[-50%] lg:translate-y-0"
                : "flex flex-col justify-start"
            }`}
          >
            <h3 className={`text-xl font-semibold mb-3 ${isOdd ? "text-gray-900" : "text-white"}`}>
              {data.name}
            </h3>
            <p className={`text-sm leading-relaxed mb-4 ${isOdd ? "text-gray-600" : "text-white/80"}`}>
              {data.description1}
            </p>
            <p className={`text-sm leading-relaxed ${isOdd ? "text-gray-600" : "text-white/80"}`}>
              {data.description2}
            </p>

            {/* Chanakya */}
            <img
              src="/chanu/chanumeditatingp2.png"
              alt="Chanakya"
              className="mt-6 w-32 opacity-90"
            />
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
      {/* HERO */}
      <div className="w-full py-16 bg-gradient-to-r from-[#FF8B61] via-[#10404A] to-[#10404A] shadow-lg">
        <div className="max-w-7xl mx-auto px-6 xl:px-16 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">
            Life @ IGSB
          </h1>
          <div className="mx-auto mt-5 mb-6 w-16 h-[3px] rounded-full bg-[#fc7116]" />
          <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
            Explore the facilities and vibrant campus life that shape learning,
            growth, and community at IGSB.
          </p>
        </div>
      </div>

      {facilities.map((item, index) => (
        <FacilitySection key={index} data={item} index={index} />
      ))}
    </section>
  );
}
