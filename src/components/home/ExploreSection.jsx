"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ExploreSection = () => {
  const sectionRef = useRef(null);

  const logos = [
    { title: "Approved by AICTE", img: "/AICTE.webp" },
    { title: "Affiliated to SPPU Pune", img: "/SPPU.webp" },
  ];

  useEffect(() => {
    const section = sectionRef.current;

    gsap.fromTo(
      section.querySelectorAll(".fade-text"),
      { autoAlpha: 0, y: 40 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
          once: true,
        },
      }
    );

    gsap.fromTo(
      section.querySelectorAll(".fade-logo"),
      { autoAlpha: 0, x: 60 },
      {
        autoAlpha: 1,
        x: 0,
        duration: 1.1,
        ease: "power3.out",
        stagger: {
          each: 0.25,
          from: "end",
        },
        scrollTrigger: {
          trigger: section.querySelector(".logos-wrapper"),
          start: "top 90%",
          once: true,
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white relative z-30 px-6 py-12"
    >
      <div className="max-w-7xl mx-auto space-y-5">

        {/* HEADING */}
        <div className="grid grid-cols-1 lg:grid-cols-[65%_35%] fade-text">
          <div>
            <h2 className="text-2xl md:text-4xl font-semibold text-gray-800 leading-tight">
              Explore Your Potential At
            </h2>
            <h2 className="text-2xl md:text-4xl font-extrabold text-secondary mt-1 leading-tight">
              INDIRA GLOBAL SCHOOL OF BUSINESS
            </h2>
          </div>
        </div>

        {/* TEXT + LOGOS */}
        <div className="grid grid-cols-1 lg:grid-cols-[65%_35%] gap-10">

          {/* TEXT */}
          <div className="fade-text">
            <p className="text-gray-700 text-md md:text-lg leading-relaxed text-justify">
              Indira Global School of Business (IGSB) is committed to shaping globally
              competent, socially responsible, and purpose-driven leaders for the
              dynamic world of business. Guided by our vision of becoming a preferred
              center of academic excellence, we nurture management professionals who
              combine strategic thinking with integrity, compassion, and a deep sense
              of responsibility toward society and the environment.
            </p>

            <p className="text-gray-700 text-md md:text-lg leading-relaxed text-justify mt-2">
              At IGSB, our mission is to mentor future-ready managers, global leaders,
              and aspiring entrepreneurs through a vibrant learning environment that
              encourages innovation, sustainability, and practical problem-solving.
              We actively promote strategic alliances that foster cross-cultural
              understanding, academic excellence, research involvement, and holistic
              development for all stakeholders.
            </p>

            <p className="text-gray-700 text-md md:text-lg leading-relaxed text-justify mt-2">
              Located along the serene Mumbai–Pune Expressway, the IGSB campus offers
              modern infrastructure amidst natural surroundings, inspiring students
              to think boldly and grow holistically. With industry-relevant MBA
              programs and a focus on experiential learning, IGSB empowers students
              to become confident, adaptable, and ethical leaders who can thrive in
              an unpredictable global economy.
            </p>
          </div>

          {/* LOGOS */}
          <div className="logos-wrapper flex gap-6 justify-center lg:justify-center items-start">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="fade-logo flex items-center transition-transform duration-300 hover:scale-105"
              >
                <Image
                  src={logo.img}
                  alt={logo.title}
                  width={150}
                  height={150}
                  className="object-contain drop-shadow"
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ExploreSection;
