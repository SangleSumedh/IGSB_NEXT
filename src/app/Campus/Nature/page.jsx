"use client";
import React from "react";
import Image from "next/image";

/* =========================
   UPDATED DATA WITH NEW CONTENT
========================= */
const facilities = [
  {
    title: "Sports",
    // name: "Sports",
    chanakyaImage: "/chanu/chanuSports1.png",
    images: [
      "/NEWFacilities/Sports1.JPG",
      "/NEWFacilities/Sports4.JPG",
      "/NEWFacilities/Sports9.JPG",
    ],
    description1:
      "The campus features modern sports facilities designed to support student fitness and overall wellness.",
    description2:
      "Regularly maintained grounds provide a safe and energetic environment that complements academic rigor and enhances the MBA campus experience.",
  },
  {
    title: "Library",
    // name: "Library",
    chanakyaImage: "/chanu/chanakya.png",
    images: [
      "/NEWFacilities/Lib4.jpg",
      "/NEWFacilities/Lib1.jpg",
      "/NEWFacilities/Lib3.jpg",
    ],
    description1:
      "With a wide range of academic resources and digital learning materials, the library supports MBA coursework, research initiatives, and faculty development.",
    description2:
      "The calm and structured environment promotes focused study and knowledge creation.",
  },
  {
    title: "Canteen",
    // name: "Canteen",
    chanakyaImage: "/chanu/chanuCanteen.png",
    images: [
      "/NEWFacilities/Canteen2.JPG",
      "/NEWFacilities/Canteen1.JPG",
      "/NEWFacilities/Canteen3.JPG",
    ],
    description1:
      "The campus canteen offers hygienic, nutritious, and affordable meals in a comfortable and student-friendly environment.",
    description2:
      "Designed to support daily campus life, it follows food safety standards and caters to diverse dietary preferences.",
  },
  {
    title: "Academics",
    // name: "Academics",
    chanakyaImage: "/chanu/chanuAcademics.png",
    images: [
      "/NEWFacilities/Lab5.jpg",
      "/NEWFacilities/Lab7.jpg",
      "/NEWFacilities/Lab3.jpg",
    ],
    description1:
      "The academic ecosystem emphasizes industry-relevant curriculum, experienced faculty, and outcome-driven learning.",
    description2:
      "With a focus on practical exposure, skill development, and academic excellence, the institution prepares students for professional success and higher education pathways.",
  },
  {
    title: "Gym",
    // name: "Gym",
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
    // name: "Hostel",
    chanakyaImage: "/chanu/chanuHostel.png",
    singleImage: "/NEWFacilities/FacilitiesHostel.jpg",
    description1:
      "The campus hostel offers secure, comfortable, and well-maintained residential facilities for students.",
    description2:
      "Designed to support academic focus and personal well-being, it provides a safe living environment with essential amenities and round-the-clock supervision.",
  },
  {
    title: "Transport",
    // name: "Transport",
    chanakyaImage: "/chanu/chanu7.png",
    singleImage: "/NEWFacilities/Transport.webp",
    description1:
      "The institution provides reliable and safe transportation facilities with well-connected routes for students and staff.",
    description2:
      "The transport system ensures convenient daily commuting, punctuality, and accessibility across key locations, supporting a seamless campus experience.",
  },
  {
    title: "Nature and Peace",
    // name: "Nature and Peace",
    chanakyaImage: "/chanu/chanumeditatingp2.png",
    images: [
      "/NEWFacilities/Lab5.jpg",
      "/NEWFacilities/Lab2.jpg",
      "/NEWFacilities/Lab3.jpg",
    ],
    description1:
      "Set amidst a green and serene landscape, the campus offers a clean, pollution-free environment with fresh air and a low AQI.",
    description2:
      "Surrounded by nature, landscaped gardens, and open spaces, the peaceful campus enhances focus, well-being, and holistic student development.",
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
        <div className="absolute left-0 top-[56%] bottom-0 w-full bg-gradient-to-r from-[#10404A] to-[#1F6D71] z-0" />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-r from-[#10404A] to-[#1F6D71] z-0" />
      )}

      <div className="relative z-10 w-full px-6 py-12 xl:px-16 xl:py-8">
        {/* HEADING */}
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

        <div className={`relative flex flex-col lg:flex-row items-stretch gap-6 lg:gap-8 ${!isOdd ? "lg:flex-row-reverse" : ""}`}>
          {/* IMAGES - Fixed height container */}
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

          {/* TEXT + CHANAKYA IMAGE - Now properly aligned */}
          <div className={`w-full lg:w-[30%] flex flex-col ${isOdd ? "lg:justify-center" : "lg:justify-center"}`}>
            <div className={` rounded-xl p-6 lg:p-8 flex-1 flex flex-col ${isOdd ? "lg:mt-0" : "lg:mb-0"}`}>
              {/* Title removed since we have heading above */}
              
              {/* Description text with proper spacing */}
              <div className="flex-1">
                <p className={`text-base lg:text-md leading-relaxed mb-4 lg:mb-6 ${isOdd ? "text-gray-600" : "text-white/90"}`}>
                  {data.description1}
                </p>

                <p className={`text-base lg:text-md leading-relaxed ${isOdd ? "text-gray-600" : "text-white/90"}`}>
                  {data.description2}
                </p>
              </div>

              {/* CHANAKYA IMAGE - Fixed at bottom */}
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
      {/* UPDATED HERO SECTION */}
      <div className="w-full py-16 bg-gradient-to-r from-[#FF8B61] via-[#10404A] to-[#10404A] shadow-lg">
        <div className="max-w-7xl mx-auto px-6 xl:px-16 text-center">
          {/* Updated Headline */}
          <h1 className="text-4xl md:text-4xl lg:text-4xl font-extrabold text-white animate-fade-up">
            An MBA Campus Designed for Growth and Innovation
          </h1>

          {/* Accent divider */}
          <div className="mx-auto mt-5 mb-6 w-16 h-[3px] rounded-full bg-[#fc7116] animate-fade-up animation-delay-100" />

          {/* Updated Paragraph */}
          <p className="text-lg md:text-lg text-white/90 max-w-4xl mx-auto leading-relaxed animate-fade-up animation-delay-200">
            Explore a dynamic business school campus offering advanced academic facilities, 
            collaborative learning spaces, and a vibrant student ecosystem that prepares 
            future leaders for global careers.
          </p>
        </div>
      </div>

      {facilities.map((item, index) => (
        <FacilitySection key={index} data={item} index={index} />
      ))}
    </section>
  );
}