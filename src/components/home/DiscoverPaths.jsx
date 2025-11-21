"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const DiscoverPaths = () => {
  // ✅ Course data
  const courses = [
    {
      name: "Computer Engineering",
      img: "/Comp.jpg",
      link: "/programs/computer-engineering",
    },
    {
      name: "Mechanical Engineering",
      img: "/Mech.jpg",
      link: "/programs/mechanical-engineering",
    },
    {
      name: "Artificial Intelligence and Data Science",
      img: "/AIDS.jpg",
      link: "/programs/ai-ds",
    },
    {
      name: "Electronics and Telecommunication",
      img: "/newENTC.jpg",
      link: "/programs/entc",
    },
    { name: "Information Technology", img: "/IT1.jpg", link: "/programs/it" },
    { name: "MBA", img: "/IBBAMBA1.jpg", link: "/programs/mba" },
    { name: "MCA", img: "/IBCAMCA.jpg", link: "/programs/mca" },
    {
      name: "M-Tech in Mechanical Engineering",
      img: "/BannerOverviewPage.jpg",
      link: "/programs/mtech-mech",
    },
    {
      name: "M-Tech in Computer Science",
      img: "/BannerOverviewPage.jpg",
      link: "/programs/mtech-comp",
    },
  ];

  return (
    <div className="bg-gray-50 py-6 sm:py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto ">
        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Discover Your Path to Success
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
            Explore our comprehensive programs designed to shape your future
            career
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {courses.map((course, index) => (
            <Link
              key={index}
              href={course.link}
              className="group relative bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-gray-200"
            >
              {/* Course Image Container */}
              <div className="relative w-full h-48 sm:h-52 md:h-56 overflow-hidden">
                <Image
                  src={course.img}
                  alt={course.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  loading="lazy"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Course Name - Always single line */}
              <div className="absolute bottom-0 left-0 right-0">
                <div className="bg-secondary text-white backdrop-blur-sm rounded-b-lg px-4 py-3 shadow-sm border border-white/20">
                  <h3 className="flex justify-center text-sm font-semibold text-white truncate text-center sm:text-left">
                    {course.name}
                  </h3>
                </div>
              </div>

              {/* Hover Indicator */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg
                  className="w-4 h-4 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DiscoverPaths;
