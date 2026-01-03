"use client";

import React, { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import ApplyForm from "./ApplyForm";

export default function ProgrammesSection() {
  const [openIndex, setOpenIndex] = useState(0);
  const [activeQuote, setActiveQuote] = useState(0);

  const quotes = [
    {
      name: "Steve Jobs",
      role: "Co-founder & Former CEO, Apple Inc.",
      quote: "Innovation distinguishes between a leader and a follower.",
      img: "/boy.png",
    },
    {
      name: "Jeff Bezos",
      role: "Founder & Executive Chairman, Amazon",
      quote:
        "Your brand is what other people say about you when you’re not in the room.",
      img: "/boy.png",
    },
    {
      name: "Indra Nooyi",
      role: "Former CEO, PepsiCo",
      quote:
        "Leadership is hard to define, and good leadership even harder.",
      img: "/boy.png",
    },
    {
      name: "N. R. Narayana Murthy",
      role: "Co-founder, Infosys",
      quote: "Progress is often achieved by unconventional thinkers.",
      img: "/boy.png",
    },
    {
      name: "Mukesh Ambani",
      role:
        "Chairman & Managing Director, Reliance Industries Limited",
      quote:
        "Every risk is worth taking as long as it’s for a good cause and contributes to a good life.",
      img: "/boy.png",
    },
    {
      name: "Kumar Mangalam Birla",
      role: "Chairman, Aditya Birla Group",
      quote:
        "Businesses must be grounded in strong values and ethics.",
      img: "/boy.png",
    },
    {
      name: "Uday Kotak",
      role: "Founder & CEO, Kotak Mahindra Group",
      quote:
        "The goal is to turn data into information, and information into insight.",
      img: "/boy.png",
    },
    {
      name: "Azim Premji",
      role: "Founder & Former Chairman, Wipro",
      quote:
        "Success is achieved twice, once in the mind and once in the real world.",
      img: "/boy.png",
    },
  ];

  /* 🔁 AUTO ROTATION */
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveQuote((prev) => (prev + 1) % quotes.length);
    }, 4000); // ⏱ change duration if needed

    return () => clearInterval(interval);
  }, [quotes.length]);

  const specializations = [
    {
      title: "MBA in Marketing Management",
      desc: (
        <>
          <p>
            The MBA in Marketing at IGSB develops market-oriented, data-driven
            marketing leaders equipped to operate in dynamic and competitive
            environments, including emerging business models such as quick
            commerce, e-commerce, and dark store ecosystems. The programme blends
            marketing strategy, consumer behaviour, brand management, sales
            management, and digital marketing analytics, ensuring relevance
            across traditional, digital, and platform-led markets.
          </p>
          <p className="mt-3">
            Students learn to translate market insights into scalable business
            growth, preparing them for roles in brand management, digital
            marketing, sales leadership, market research, and growth strategy
            across consumer-centric sectors and technology-enabled commerce
            platforms.
          </p>
        </>
      ),
    },
    {
      title: "MBA in Finance Management",
      desc: (
        <>
          <p>
            The MBA in Finance at IGSB prepares students for analytical,
            decision-driven roles in the financial ecosystem. The curriculum
            emphasizes financial management, corporate finance, financial
            modelling, investment analysis, risk management, and strategic
            financial decision-making, aligned with real-world business
            scenarios.
          </p>
          <p className="mt-3">
            Students gain exposure to capital markets, valuation, budgeting,
            compliance, and fintech fundamentals, enabling them to contribute
            effectively in corporate finance, banking, consulting, investment
            analysis, and financial strategy roles across industries.
          </p>
        </>
      ),
    },
    {
      title: "MBA in Human Resources Management",
      desc: (
        <>
          <p>
            The MBA in Human Resources at IGSB is designed to develop strategic HR
            leaders capable of managing talent, culture, and organizational
            transformation in modern enterprises. The program integrates HR
            analytics, talent acquisition, learning & development, performance
            management, and HR technology, enabling students to move beyond
            transactional HR into business-driven people management.
          </p>
          <p className="mt-3">
            With a strong focus on employee lifecycle management, organizational
            behaviour, labour laws, and leadership development, graduates are
            prepared for roles in HR consulting, talent strategy, corporate HR,
            and people analytics within leading organizations.
          </p>
        </>
      ),
    },
    {
      title: "MBA in Operations & Supply Chain Management",
      desc: (
        <>
          <p>
            The MBA in Operations & Supply Chain Management at IGSB focuses on
            building professionals who can optimize processes, manage complex
            supply networks, and drive operational excellence. The specialization
            covers operations strategy, supply chain planning, logistics
            management, procurement, quality systems, and lean methodologies.
          </p>
          <p className="mt-3">
            With increasing emphasis on data-driven operations, technology
            integration, and global supply chain resilience, students are trained
            for leadership roles in manufacturing, logistics, e-commerce,
            consulting, and operations strategy functions.
          </p>
        </>
      ),
    },
    {
      title: "MBA in Business Analytics",
      desc: (
        <>
          <p>
            The MBA in Business Analytics at IGSB is structured to create
            professionals who can convert data into strategic business insights.
            The specialization focuses on data analysis, business intelligence,
            predictive analytics, visualization tools, and decision science,
            aligned with managerial applications.
          </p>
          <p className="mt-3">
            By combining statistical thinking, analytical tools, and business
            context, students are prepared for high-impact roles in business
            analytics, consulting, strategy, operations analytics, and
            management decision-support functions in data-driven organizations.
          </p>
        </>
      ),
    },
  ];

  return (
    <section className="w-full bg-white px-6 py-16">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-2xl md:text-4xl font-extrabold text-secondary mb-8">
          MBA Specializations
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-[65%_35%] gap-10 items-start">

          {/* LEFT — ACCORDION */}
          <div className="space-y-4">
            {specializations.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className="border border-gray-200 rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => setOpenIndex(index)}
                    className="w-full flex items-center justify-between px-6 py-7 text-left"
                  >
                    <h3 className="text-xl font-semibold text-gray-800">
                      {item.title}
                    </h3>
                    <ChevronDown
                      className={`transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-secondary" : "text-gray-400"
                      }`}
                    />
                  </button>

                  <div
                    className={`px-6 overflow-hidden transition-all duration-300 ${
                      isOpen ? "max-h-[700px] pb-6" : "max-h-0"
                    }`}
                  >
                    <div className="text-gray-700 text-sm md:text-base leading-relaxed">
                      {item.desc}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* RIGHT — CAROUSEL + FORM */}
          <div className="space-y-8">

            {/* QUOTES CAROUSEL */}
            <div className="border border-gray-200 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <img
                  src={quotes[activeQuote].img}
                  alt={quotes[activeQuote].name}
                  className="w-14 h-14 rounded-full object-cover"
                />

                <div>
                  <p className="italic text-gray-700 text-sm md:text-base transition-opacity duration-300">
                    “{quotes[activeQuote].quote}”
                  </p>

                  <p className="mt-3 font-semibold text-gray-900 text-sm">
                    {quotes[activeQuote].name}
                  </p>

                  <p className="text-xs text-gray-500">
                    {quotes[activeQuote].role}
                  </p>
                </div>
              </div>

              {/* DOTS */}
              <div className="flex justify-center gap-2 mt-6">
                {quotes.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveQuote(i)}
                    className={`w-2.5 h-2.5 rounded-full transition ${
                      activeQuote === i
                        ? "bg-secondary"
                        : "bg-gray-300"
                    }`}
                    aria-label={`Show quote ${i + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* FORM */}
            <ApplyForm variant="card" />

          </div>
        </div>
      </div>
    </section>
  );
}
