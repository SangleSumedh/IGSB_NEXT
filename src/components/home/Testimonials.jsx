"use client";
import React, { useState, useEffect } from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import Image from "next/image";

const testimonials = [
  {
    image: "/Home/RTestimonials/juspay.png",
    quote:
      "IGSB’s emphasis on both managerial excellence and practical application prepares students exceptionally well. Their post graduates bring not just skills, but a solution-oriented mindset to Juspay.",
    name: "Dr. Shipra Pandit",
    position: "Director - HR, Juspay",
  },
  {
    image: "/Home/RTestimonials/mastercard.webp",
    quote:
      "IGSB’s commitment to blending technical education with real-world readiness is evident in their students, who arrive well-prepared to contribute meaningfully from day one, making them a preferred choice for our campus recruitment.",
    name: "Mr. Urvish Pandey",
    position:
      "India Head, University Relations & Early Talent Engagement – Mastercard",
  },
  {
    image: "/Home/RTestimonials/ultra.webp",
    quote:
      "IGSB has always provided us with trained cohort, and as an organization, we appreciate the college's efforts to prepare the students for the industry.",
    name: "Dr. Rahul Bagale",
    position: "Vice President Human Resources – Ultra Corpotech Pvt Ltd",
  },
  {
    image: "/Home/RTestimonials/vascon.webp",
    quote:
      "We have entered into an MOU with IGSB to actively support their endeavours in providing excellent job opportunities for management students. Our longstanding partnership with IGSB will continue further to support their MBA cohort .",
    name: "Mr. Siddharth Moorthy",
    position: "Managing Director – Vascon Engineers",
  },
  {
    image: "/Home/RTestimonials/zinnov.png",
    quote:
      "While conducting campus recruitment drives across the country, IGSB consistently emerges as the top choice due to their exceptional commitment to preparing students for their dream job offers.",
    name: "Ms. Shilpi Mahar",
    position: "Associate Director – Zinnov",
  },
  {
    image: "/Home/RTestimonials/expleo.webp",
    quote:
      "We appreciate the designed training programs by IGSB aimed at equipping core management students with the necessary skills to excel in the industry. These programs ensure that students emerge as industry-ready professionals",
    name: "Ms. Sumana Chakraborty",
    position: "General Manager, HR – Expleo Group",
  },
  {
    image: "/Home/RTestimonials/ey.png",
    quote:
      "IGSB has been a top choice since a long time. Their way of creating resources prepared specifically to meet the needs of students ensures a transformative experience that prepares them effectively for the corporate world.",
    name: "Mr. Sushant Kumar",
    position: "Assistant Director – Early Career Program, EY",
  },
  {
    image: "/Home/RTestimonials/philips.jpg",
    quote:
      "We consistently find IGSB students to be proactive learners and strong team players—traits that resonate deeply with the culture of innovation and collaborative excellence at Philips.",
    name: "Mr. Vispi Karkaria",
    position: "Early Career Talent India - Philips",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => handleNext(), 4500);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    const totalSlides = testimonials.length;

    if (currentIndex === totalSlides - 1) {
      setIsTransitioning(true);
      setCurrentIndex(totalSlides);

      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
      }, 700);
    } else {
      setIsTransitioning(true);
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handleDotClick = (index) => {
    setIsTransitioning(true);
    setCurrentIndex(index);
  };

  return (
    <section
      className="py-4 md:py-8 pb-12 md:pb-16 lg:pb-20 bg-secondary"
      aria-labelledby="testimonials-title"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-4 md:mb-8">
          <h2
            id="testimonials-title"
            className="text-3xl text-white md:text-4xl lg:text-5xl font-bold mb-4 leading-tight"
          >
            Trusted by the Best in the Business
          </h2>
          <p className="text-lg md:text-xl text-white max-w-4xl mx-auto leading-relaxed">
            Our strongest endorsements come from our recruitment partners.
            Discover why leading companies consistently choose IGSB post graduates to
            drive their success.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="lg:w-4/5 w-full mx-auto">
          <div className="relative overflow-hidden">
            <div
              className={`flex ${
                isTransitioning
                  ? "transition-transform duration-700 ease-in-out"
                  : ""
              }`}
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {[...testimonials, testimonials[0]].map((item, index) => (
                <div key={index} className="w-full flex-shrink-0 px-2">
                  <div className="bg-[#3aafa9] rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 md:p-8 h-auto min-h-[280px] md:min-h-[320px] flex flex-col md:flex-row gap-8 border border-gray-100">
                    {/* Content Section - Left Side */}
                    <div className="flex-[1.7] flex flex-col justify-center">
                      {/* Quote Box */}
                      <div className="flex-1 flex flex-col justify-center mb-6">
                        <div className="relative">
                          <FaQuoteLeft className="text-white text-2xl md:text-3xl absolute -top-2 -left-2" />
                          <p className="text-white text-base md:text-lg leading-relaxed px-6 md:px-8 italic">
                            {item.quote}
                          </p>
                          <FaQuoteRight className="text-white text-2xl md:text-3xl absolute -bottom-2 -right-2" />
                        </div>
                      </div>

                      {/* Name and Position */}
                      <div className="border-t border-gray-100 pt-4">
                        <h3 className="text-lg md:text-xl font-bold text-white mb-1">
                          {item.name}
                        </h3>
                        <p className="text-sm md:text-base text-white leading-tight">
                          {item.position}
                        </p>
                      </div>
                    </div>

                    {/* Logo Section - Right Side */}
                    <div className="flex-[0.9] flex items-start justify-center">
                      <div className="w-40 h-24 md:w-52 md:h-32 relative rounded-xl shadow-sm border bg-white border-gray-200 flex items-center justify-center p-4">
                        <Image
                          src={item.image}
                          alt={`${item.name} logo`}
                          fill
                          className="object-contain"
                          sizes="(max-width: 768px) 160px, 208px"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-12">
              {testimonials.map((_, i) => (
                <div
                  key={i}
                  onClick={() => handleDotClick(i)}
                  className={`relative h-3 rounded-full cursor-pointer overflow-hidden transition-all ${
                    currentIndex % testimonials.length === i
                      ? "w-8 bg-orange-200"
                      : "w-3 bg-gray-300"
                  }`}
                >
                  {currentIndex % testimonials.length === i && (
                    <span className="absolute top-0 left-0 h-full w-0 bg-primary animate-progressFill"></span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Custom dot styling */}
          <style jsx>{`
            @keyframes progressFill {
              from {
                width: 0%;
              }
              to {
                width: 100%;
              }
            }
            .animate-progressFill {
              animation: progressFill 4.5s linear forwards;
            }
          `}</style>
        </div>
      </div>
    </section>
  );
}
