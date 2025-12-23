"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react"; // You can use any icon library or replace with SVGs

export default function EventsSection() {
  const marqueeRef = useRef(null);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const events = [
    { img: "/events/IGIIRP.JPG", title: "Indira Global Industrial Research Program", description: "Encouraging collaboration between academia and industry for impactful research and innovation." },
    { img: "/events/MBAInduction.jpg", title: "MBA Induction Program", description: "The beginning of the management journey with insights from corporate leaders and alumni." },
    { img: "/events/Navratri.JPG", title: "Navratri Celebration", description: "A grand cultural evening filled with Garba, music, and colorful traditional festivities." },
    { img: "/events/MPL-Img.png", title: "Manomay Premier League", description: "IGSB celebrated National Sports Day 2025 with the thrilling Manomay Premier League cricket tournament! From powerful shots to incredible catches, the day was all about celebrating the spirit of sports and teamwork." },
    { img: "/events/Vyavahar-Img.png", title: "Vyavahar", description: "IGSB Hosted and organised Vyavahar a dynamic game, which challenged the students to navigate the complexities of entrepreneurship and make strategic decisions to grow virtual businesses. From managing retail stores and real estate to offering educational courses students lived in different sectors." },
    { img: "/events/BParak.jpg", title: "Bharat Parakrama", description: "A celebration of patriotism and valor with vibrant cultural performances and student participation." },
    { img: "/events/gusto.jpg", title: "Gusto – Annual Tech Fest", description: "A thrilling fest of technology, creativity, and innovation featuring workshops and competitions." },
    { img: "/events/Womens-Day-Img.png", title: "Women's Day", description: "Celebrate the strength, grace, and resilience of the incredible women at IGSB! On this Women's Day, team IGSB expresses our heartfelt gratitude with a token of appreciation—because every woman deserves to be celebrated every day!" },
    { img: "/events/Movie-Club-Img.png", title: "Movie Club activity", description: "IGSB's Movie Club Activity brought management lessons to life as students explored leadership, strategy, and decision-making through the lens of cinema. A perfect blend of entertainment and education!" },
    { img: "/events/Alumni-Meet-Img.png", title: "Alumni Meet 2025", description: "The Indira Global School of Business (IGSB) proudly hosted its much-awaited Alumni Meet 2025 on 5th April, bringing together former students from across various batches for an evening filled with nostalgia, inspiration, and renewed connections." },
    { img: "/events/SPLASH-Img.png", title: "SPLASH 2024: A Cultural Extravaganza!", description: "At IGSB, we believe that education goes beyond classrooms—it's about creating memories, fostering creativity, and celebrating diversity. Our vibrant cultural event that brought together students,faculty, and alumni for a day of unforgettable experiences! From soul-stirring performances in dance, music, and drama to jaw-dropping artistic displays, Splash was a kaleidoscope of talent and energy. The event wasn't just about showcasing skills; it was about building connections, breaking barriers, and reviling in the rich tapestry of cultures that make our campus so unique!" },
    { img: "/events/Ganpati-Aarti-Img.png", title: "Ganpati Aarti", description: "Team IGSB came together to celebrate the auspicious Ganpati Aarti, seeking Lord Ganesha's blessings for wisdom, harmony, and success." },
    { img: "/events/Independence-day-Img.png", title: "Independence Day", description: "A grand cultural evening filled with Garba, music, and colorful traditional festivities." },
    { img: "/events/Farewell-Img.png", title: "Farewell 2025", description: "A chapter closes, but the memories stay forever. From classroom dreams to unforgettable memories, your journey at IGSB will always be cherished." },
  ];

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Control marquee animation
  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    if (isPaused) {
      marquee.style.animationPlayState = 'paused';
    } else {
      marquee.style.animationPlayState = 'running';
    }

    const cards = marquee.querySelectorAll(".card");

    cards.forEach((card) => {
      card.addEventListener("mouseenter", () => {
        if (!isMobile) {
          marquee.style.animationPlayState = "paused";
          card.classList.add("scale-up");
        }
      });

      card.addEventListener("mouseleave", () => {
        if (!isMobile && !isPaused) {
          marquee.style.animationPlayState = "running";
          card.classList.remove("scale-up");
        }
      });
    });

    return () => {
      cards.forEach((card) => {
        card.removeEventListener("mouseenter", () => {});
        card.removeEventListener("mouseleave", () => {});
      });
    };
  }, [isPaused, isMobile]);

  const togglePause = () => {
    setIsPaused(!isPaused);
  };

  return (
    <section className="w-full bg-gray-50 py-8 md:py-16 overflow-hidden relative">
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-6 md:mb-10 px-4">
        Academic Conferences & Campus Events
      </h2>

      {/* Mobile Pause/Play Button */}
      {isMobile && (
        <div className="flex justify-center mb-4 md:hidden">
          <button
            onClick={togglePause}
            className="flex items-center gap-2 bg-secondary text-white px-4 py-2 rounded-full text-sm font-medium shadow-md hover:bg-secondary/90 transition-colors z-30"
            aria-label={isPaused ? "Play animation" : "Pause animation"}
          >
            {isPaused ? (
              <>
                <Play size={16} />
                Play
              </>
            ) : (
              <>
                <Pause size={16} />
                Pause
              </>
            )}
          </button>
        </div>
      )}

      <div className="relative w-full overflow-visible py-6 md:py-10">
        <div 
          ref={marqueeRef} 
          className="marquee flex px-4 md:px-6"
        >
          {[...events, ...events, ...events].map((event, index) => {
            const isExpanded = expandedIndex === index;

            return (
              <div key={index} className="card-wrapper mr-4 md:mr-6 flex-shrink-0">
                <div
                  className={`card w-[260px] xs:w-[280px] sm:w-[300px] md:w-[340px] lg:w-[360px] bg-white rounded-xl shadow-md border border-gray-100 transition-all duration-300 flex flex-col ${
                    isExpanded ? "h-auto" : "h-[380px] sm:h-[400px] md:h-[420px]"
                  }`}
                >
                  <div className="relative w-full h-40 sm:h-44 md:h-48 lg:h-56 xl:h-64 rounded-t-xl overflow-hidden">
                    <Image 
                      src={event.img} 
                      alt={event.title} 
                      fill 
                      className="object-cover"
                      sizes="(max-width: 640px) 280px, (max-width: 768px) 300px, (max-width: 1024px) 340px, 360px"
                    />
                  </div>

                  <div className="p-3 sm:p-4 flex flex-col flex-grow">
                    <h3 className="font-semibold text-gray-800 text-sm sm:text-md md:text-lg mb-1 sm:mb-2">
                      {event.title}
                    </h3>

                    <p
                      className={`text-gray-600 text-xs sm:text-sm md:text-md transition-all duration-300 ${
                        isExpanded ? "" : "line-clamp-3"
                      }`}
                    >
                      {event.description}
                    </p>

                    {event.description.length > 100 && (
                      <button
                        onClick={() =>
                          setExpandedIndex(isExpanded ? null : index)
                        }
                        className="mt-2 sm:mt-auto text-xs sm:text-sm text-secondary font-medium hover:underline self-start"
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

      {/* Mobile Touch Instruction */}
      {isMobile && !isPaused && (
        <p className="text-center text-xs text-gray-500 mt-4 md:hidden px-4">
          Touch and hold a card to pause
        </p>
      )}

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
          animation-play-state: running;
        }

        @media (max-width: 768px) {
          .marquee {
            animation-duration: 40s;
          }
        }

        @media (max-width: 640px) {
          .marquee {
            animation-duration: 45s;
          }
        }

        .card-wrapper,
        .card {
          will-change: transform;
          transform: translateZ(0);
          transition: transform 0.3s ease;
        }

        .scale-up {
          transform: scale(1.05) translateZ(0);
          background-color: #99f6e4;
          z-index: 20;
          box-shadow: 0 12px 25px rgba(0, 0, 0, 0.18);
        }

        /* Mobile touch interactions */
        @media (max-width: 768px) {
          .card {
            touch-action: pan-y;
          }
          
          .card:active {
            transform: scale(0.98);
          }
        }

        /* Responsive breakpoints */
        @media (min-width: 480px) {
          .xs\\:w-\\[280px\\] {
            width: 280px;
          }
        }
      `}</style>
    </section>
  );
}