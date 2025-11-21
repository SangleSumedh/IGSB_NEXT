"use client";
import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import Slider from "react-slick";
import Image from "next/image";

// Import slick carousel CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Testimonials() {
  const testimonials = [
    {
      image: "/logos/logo8.png",
      quote:
        "ICEM has always provided us with trained mechanical engineers, and as an organization, we appreciate the college's efforts to prepare the students for the industry.",
      name: "Mr. Rahul Bagale",
      position: "Group HR Head – Force Motors",
    },
    {
      image: "/logos/logo45.png",
      quote:
        "We have entered into an MOU with ICEM to actively support their endeavours in providing excellent job opportunities for civil engineering students. Our longstanding partnership of over a decade with ICEM will continue further to support the civil engineers. ",
      name: "Mr. Siddharth Moorthy",
      position: "Managing Director – Vascon Engineers",
    },
    {
      image: "/logos/logo2.png",
      quote:
        "While conducting campus recruitment drives across the country, ICEM consistently emerges as the top choice due to their exceptional commitment to preparing students for their dream job offers.",
      name: "Ms. Shilpi Mahar",
      position: "Manager, TA – Data Axle",
    },
    {
      image: "/logos/logo22.png",
      quote:
        "We appreciate the designed training programs by ICEM aimed at equipping core Mechanical Engineering students with the necessary skills to excel in the industry. These programs ensure that students emerge as industry-ready professionals  ",
      name: "Ms. Sumana Chakraborty",
      position: "HR Business Partner – Bridgestone India",
    },
    {
      image: "/logos/logo19.png",
      quote:
        "ICEM has been a part of Ready Engineers Programme from a long time. Their way of creating resources prepared specifically to meet the needs of students, ensures a transformative experience that prepares them effectively for the corporate world.",
      name: "Mr. Sushant Kumar",
      position: "India Lead – University Relations, Tata Technologies",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4500,
    arrows: false,
    pauseOnHover: true,
    adaptiveHeight: true,
  };

  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          
          {/* Left Side - Heading Section */}
          <div className="lg:w-2/5 text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary mb-4">
              Trusted by the Best in the Business
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              Our strongest endorsements come from our recruitment partners. Discover why leading companies consistently choose ICEM graduates to drive their success.
            </p>
          </div>

          {/* Right Side - Testimonials Carousel */}
          <div className="lg:w-3/5 w-full">
            <Slider {...settings}>
              {testimonials.map((item, index) => (
                <div key={index} className="px-1">
                  <div className="flex flex-col items-center border border-gray-200 rounded-xl p-2 sm:p-6 h-[300px] ">
                    {/* Quote Box */}
                    <div className="bg-secondary/5 p-4 sm:p-6 md:p-8 relative w-full mx-auto mb-4 sm:mb-6 md:mb-8">
                      <FaQuoteLeft className="text-primary text-lg sm:text-xl absolute -top-2 left-2 sm:left-4 opacity-90" />
                      <p className="italic text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed px-1 sm:px-2">
                        {item.quote}
                      </p>
                      <FaQuoteRight className="text-primary text-lg sm:text-xl absolute -bottom-2 right-2 sm:right-4 opacity-90" />
                    </div>

                    {/* Name, Position and Logo */}
                    <div className="flex flex-col sm:flex-row justify-between items-center w-full max-w-2xl px-2 sm:px-4 gap-3 sm:gap-0">
                      {/* Name and Position */}
                      <div className="text-center sm:text-left flex-1">
                        <h3 className="text-base sm:text-lg font-bold text-secondary mb-1">
                          {item.name}
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-600 leading-tight">{item.position}</p>
                      </div>

                      {/* Logo */}
                      <div className="w-20 sm:w-24 md:w-28 h-10 sm:h-12 md:h-14 relative bg-white p-1 sm:p-2 rounded-lg shadow-md border border-gray-100">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-contain"
                          sizes="(max-width: 640px) 80px, (max-width: 768px) 96px, 112px"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>

            {/* Custom dot styling */}
            <style jsx>{`
              :global(.slick-dots) {
                bottom: -40px !important;
              }
              :global(.slick-dots li button:before) {
                color: #3b82f6 !important;
                opacity: 0.4;
                font-size: 8px !important;
              }
              :global(.slick-dots li.slick-active button:before) {
                opacity: 1;
                color: #3b82f6 !important;
              }
              @media (min-width: 640px) {
                :global(.slick-dots) {
                  bottom: -45px !important;
                }
                :global(.slick-dots li button:before) {
                  font-size: 10px !important;
                }
              }
            `}</style>
          </div>
        </div>
      </div>
    </section>
  );
}