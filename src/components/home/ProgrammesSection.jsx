import React from "react";
import { ChevronRight } from "lucide-react";

export default function ProgrammesSection() {
  const items = [
    {
      tag: "Human Resource Management",
      title: "Human Resource Management",
      img: "/MBA4.jpg",
      desc:
        "The HR specialization prepares students to manage people, culture, and organizational development with strategic insight. Students learn talent acquisition, performance management, employee engagement, HR analytics, and labor laws—enabling them to build high-performing workplaces and lead transformational people practices in dynamic business environments.",
    },
    {
      tag: "Finance Management",
      title: "Finance Management",
      img: "/MBA1.jpg",
      desc:
        "The finance specialization develops strong analytical and strategic decision-making skills in financial planning, investment analysis, corporate finance, banking, risk management, and capital markets. Students learn to interpret financial data, evaluate opportunities, and drive sustainable financial growth across diverse financial roles.",
    },
    {
      tag: "Operations & Supply Chain Management",
      title: "Operations & Supply Chain Management",
      img: "/MBA3.jpg",
      tall: true,
      desc:
        "Focused on efficiency and value creation, this specialization trains students in logistics, process optimization, supply chain strategy, project management, quality systems, and technology-enabled operations—preparing graduates to streamline operations, reduce costs, and manage complex global supply networks.",
    },
    {
      tag: "Marketing Management",
      title: "Marketing Management",
      img: "/MBA2.jpg",
      desc:
        "This specialization equips students with cutting-edge skills in digital marketing, branding, consumer behavior, sales strategy, market research, and product management. Students learn to understand markets, create value-driven campaigns, and build strong customer relationships in competitive global markets.",
    },
    {
      tag: "Business Analytics",
      title: "Business Analytics",
      img: "/MBA4.jpg",
      desc:
        "The Business Analytics specialization empowers students with data-driven decision-making skills using statistics, data visualization, predictive analytics, business intelligence tools, and machine learning fundamentals. Graduates learn to translate complex data into actionable insights that drive strategic and operational excellence.",
    },
  ];

  return (
    <div className="w-full bg-white py-16">
      <section className="w-full max-w-7xl mx-auto">

        {/* ⭐ Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-secondary mb-4">
          MBA Specializations
        </h2>

        {/* ⭐ Paragraph below heading */}
        <p className="text-gray-700 text-md lg:text-lg max-w-7xl mb-10">
          IGSB offers diverse MBA specializations—including Marketing, Finance, HR,
          and Operations & Supply Chain Management—designed to build industry-ready
          professionals with strong analytical, leadership, and strategic capabilities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* FIRST ROW */}
          <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <Card {...items[0]} />
            </div>
            <div className="md:col-span-1">
              <Card {...items[1]} />
            </div>
          </div>

          {/* TALL RIGHT CARD */}
          <div className="row-span-2">
            <Card {...items[2]} tall />
          </div>

          {/* SECOND ROW */}
          <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-1">
              <Card {...items[3]} />
            </div>
            <div className="md:col-span-2">
              <Card {...items[4]} />
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

function Card({ img, tag, title, desc, tall }) {
  return (
    <div
      className={`relative w-full overflow-hidden rounded-lg cursor-pointer group ${
        tall ? "h-[540px]" : "h-[260px]"
      }`}
    >
      {/* Background Image */}
      <img
        src={img}
        alt={title}
        className="w-full h-full object-cover transition-all duration-500 group-hover:opacity-40"
      />

      {/* Aqua Hover Overlay */}
      <div className="absolute inset-0 bg-teal-200 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

      {/* Tag */}
      <span className="absolute top-4 left-4 bg-teal-200 text-black text-xs font-semibold px-3 py-1 rounded-md z-20 group-hover:bg-white transition-colors duration-300">
        {tag}
      </span>

      {/* TEXT BLOCK */}
      <div className="absolute bottom-6 left-6 right-6 z-20">
        <h3 className="text-xl font-semibold transition-all duration-500 transform group-hover:-translate-y-1 text-white group-hover:text-black">
          {title}
        </h3>

        <p className="text-sm text-black opacity-0 max-h-0 overflow-hidden group-hover:max-h-24 group-hover:opacity-100 transition-all duration-500">
          {desc}
        </p>

        <div className="flex items-center gap-1 mt-3 text-sm font-medium text-white group-hover:text-black transition-colors duration-300">
          <span>Know More</span>
          <ChevronRight size={18} />
        </div>
      </div>
    </div>
  );
}
