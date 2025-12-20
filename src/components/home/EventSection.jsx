"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

export default function EventsSection() {
  const marqueeRef = useRef(null);
  const [expandedIndex, setExpandedIndex] = useState(null);

  const events = [
    { img: "/events/IGIIRP.JPG", title: "Indira Global Industrial Research Program", description: "Encouraging collaboration between academia and industry for impactful research and innovation." },
    { img: "/events/MBAInduction.jpg", title: "MBA Induction Program", description: "The beginning of the management journey with insights from corporate leaders and alumni." },
    { img: "/events/Navratri.JPG", title: "Navratri Celebration", description: "A grand cultural evening filled with Garba, music, and colorful traditional festivities." },
    { img: "/events/MPL-Img.png", title: "Manomay Premier League", description: "IGSB celebrated National Sports Day 2025 with the thrilling Manomay Premier League cricket tournament! From powerful shots to incredible catches, the day was all about celebrating the spirit of sports and teamwork." },
    { img: "/events/Vyavahar-Img.png", title: "Vyavahar", description: "IGSB Hosted and organised Vyavahar a dynamic game, which challenged the students to navigate the complexities of entrepreneurship and make strategic decisions to grow virtual businesses. From managing retail stores and real estate to offering educational courses students lived in different sectors." },
    { img: "/events/BParak.jpg", title: "Bharat Parakrama", description: "A celebration of patriotism and valor with vibrant cultural performances and student participation." },
    { img: "/events/gusto.jpg", title: "Gusto – Annual Tech Fest", description: "A thrilling fest of technology, creativity, and innovation featuring workshops and competitions." },
    { img: "/events/Womens-Day-Img.png", title: "Women's Day", description: "Celebrate the strength, grace, and resilience of the incredible women at IGSB! On this Women’s Day, team IGSB expresses our heartfelt gratitude with a token of appreciation—because every woman deserves to be celebrated every day!" },
    { img: "/events/Movie-Club-Img.png", title: "Movie Club activity", description: "IGSB's Movie Club Activity brought management lessons to life as students explored leadership, strategy, and decision-making through the lens of cinema. A perfect blend of entertainment and education!" },
    { img: "/events/Alumni-Meet-Img.png", title: "Alumni Meet 2025", description: "The Indira Global School of Business (IGSB) proudly hosted its much-awaited Alumni Meet 2025 on 5th April, bringing together former students from across various batches for an evening filled with nostalgia, inspiration, and renewed connections." },
    { img: "/events/SPLASH-Img.png", title: "SPLASH 2024: A Cultural Extravaganza!", description: "At IGSB, we believe that education goes beyond classrooms—it’s about creating memories, fostering creativity, and celebrating diversity. Our vibrant cultural event that brought together students,faculty, and alumni for a day of unforgettable experiences! From soul-stirring performances in dance, music, and drama to jaw-dropping artistic displays, Splash was a kaleidoscope of talent and energy. The event wasn’t just about showcasing skills; it was about building connections, breaking barriers, and reviling in the rich tapestry of cultures that make our campus so unique!" },
    { img: "/events/Ganpati-Aarti-Img.png", title: "Ganpati Aarti", description: "Team IGSB came together to celebrate the auspicious Ganpati Aarti, seeking Lord Ganesha’s blessings for wisdom, harmony, and success." },
    { img: "/events/Independence-day-Img.png", title: "Independence Day", description: "A grand cultural evening filled with Garba, music, and colorful traditional festivities." },
    { img: "/events/Farewell-Img.png", title: "Farewell 2025", description: "A chapter closes, but the memories stay forever. From classroom dreams to unforgettable memories, your journey at IGSB will always be cherished." },
  ];

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    const cards = marquee.querySelectorAll(".card");

    cards.forEach((card) => {
      card.addEventListener("mouseenter", () => {
        marquee.style.animationPlayState = "paused";
        card.classList.add("scale-up");
      });

      card.addEventListener("mouseleave", () => {
        marquee.style.animationPlayState = "running";
        card.classList.remove("scale-up");
      });
    });
  }, []);

  return (
    <section className="w-full bg-gray-50 py-16 overflow-hidden">
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-10">
        Academic Conferences & Campus Events
      </h2>

      <div className="relative w-full overflow-visible py-10">
        <div ref={marqueeRef} className="marquee flex px-6">
          {[...events, ...events, ...events].map((event, index) => {
            const isExpanded = expandedIndex === index;

            return (
              <div key={index} className="card-wrapper mr-6 flex-shrink-0">
                <div
                  className={`card w-[280px] sm:w-[320px] md:w-[360px] bg-white rounded-xl shadow-md border border-gray-100 transition-all duration-300 flex flex-col ${
                    isExpanded ? "h-auto" : "h-[420px]"
                  }`}
                >
                  <div className="relative w-full h-44 sm:h-52 md:h-56 lg:h-64 rounded-t-xl overflow-hidden">
                    <Image src={event.img} alt={event.title} fill className="object-cover" />
                  </div>

                  <div className="p-4 flex flex-col flex-grow">
                    <h3 className="font-semibold text-gray-800 text-base mb-1">
                      {event.title}
                    </h3>

                    <p
                      className={`text-gray-600 text-sm transition-all duration-300 ${
                        isExpanded ? "" : "line-clamp-3"
                      }`}
                    >
                      {event.description}
                    </p>

                    {event.description.length > 140 && (
                      <button
                        onClick={() =>
                          setExpandedIndex(isExpanded ? null : index)
                        }
                        className="mt-auto text-sm text-secondary font-medium hover:underline self-start"
                      >
                        {isExpanded ? "View Less" : "View More"}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes marqueeScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        .marquee {
          animation: marqueeScroll 35s linear infinite;
          width: max-content;
          will-change: transform;
        }

        .card-wrapper,
        .card {
          will-change: transform;
          transform: translateZ(0);
        }

        .scale-up {
          transform: scale(1.06) translateZ(0);
          background-color: #b2f5ea;
          z-index: 20;
          box-shadow: 0 12px 25px rgba(0, 0, 0, 0.18);
        }
      `}</style>
    </section>
  );
}
