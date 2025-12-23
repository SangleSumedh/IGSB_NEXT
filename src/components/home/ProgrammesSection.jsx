import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function ProgrammesSection() {
  const items = [
    {
      tag: "Human Resource Management",
      title: "Human Resource Management",
      img: "/MBA4.jpg",
      href: "/programs/mba?spec=hr",
      desc:
        "The HR specialization prepares students to manage people, culture, and organizational development with strategic insight. Students learn talent acquisition, performance management, employee engagement, HR analytics, and labor laws—enabling them to build high-performing workplaces and lead transformational people practices in dynamic business environments.",
    },
    {
      tag: "Finance Management",
      title: "Finance Management",
      img: "/MBA1.jpg",
      href: "/programs/mba?spec=finance",
      desc:
        "The finance specialization develops strong analytical and strategic decision-making skills in financial planning, investment analysis, corporate finance, banking, risk management, and capital markets.",
    },
    {
      tag: "Operations & Supply Chain Management",
      title: "Operations & Supply Chain Management",
      img: "/MBA3.jpg",
      href: "/programs/mba?spec=operations",
      desc:
        "Focused on efficiency and value creation, this specialization trains students in logistics, process optimization, supply chain strategy, and technology-enabled operations.",
    },
    {
      tag: "Marketing Management",
      title: "Marketing Management",
      img: "/MBA2.jpg",
      href: "/programs/mba?spec=marketing",
      desc:
        "This specialization equips students with cutting-edge skills in digital marketing, branding, consumer behavior, sales strategy, and market research.",
    },
    {
      tag: "Business Analytics",
      title: "Business Analytics",
      img: "/MBA4.jpg",
      href: "/programs/mba?spec=ba",
      desc:
        "The Business Analytics specialization empowers students with data-driven decision-making skills using statistics, data visualization, predictive analytics, and BI tools.",
    },
  ];

  return (
    <div className="w-full bg-white px-6 py-12">
      <section className="w-full max-w-7xl mx-auto">

        {/* HEADING */}
        <h2 className="text-2xl md:text-4xl font-extrabold text-secondary mb-4">
          MBA Specializations
        </h2>

        {/* TEXT */}
        <p className="text-gray-700 text-md md:text-lg mb-10 max-w-7xl">
          IGSB offers diverse MBA specializations—including Marketing, Finance, HR,
          and Operations & Supply Chain Management—designed to build industry-ready
          professionals with strong analytical, leadership, and strategic capabilities.
        </p>

        {/* ================= MOBILE + TABLET + LG ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:hidden">
          {items.map((item, index) => (
            <Link key={index} href={item.href}>
              <Card {...item} />
            </Link>
          ))}
        </div>

        {/* ================= XL DESKTOP ================= */}
        <div className="hidden xl:grid xl:grid-cols-3 xl:gap-6">

          {/* FIRST ROW */}
          <div className="xl:col-span-2 grid xl:grid-cols-3 gap-6">
            <div className="xl:col-span-2">
              <Link href={items[0].href}>
                <Card {...items[0]} />
              </Link>
            </div>
            <div className="xl:col-span-1">
              <Link href={items[1].href}>
                <Card {...items[1]} />
              </Link>
            </div>
          </div>

          {/* TALL CARD */}
          <div className="xl:row-span-2">
            <Link href={items[2].href}>
              <Card {...items[2]} tall />
            </Link>
          </div>

          {/* SECOND ROW */}
          <div className="xl:col-span-2 grid xl:grid-cols-3 gap-6">
            <div className="xl:col-span-1">
              <Link href={items[3].href}>
                <Card {...items[3]} />
              </Link>
            </div>
            <div className="xl:col-span-2">
              <Link href={items[4].href}>
                <Card {...items[4]} />
              </Link>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

/* ---------------- CARD ---------------- */

function Card({ img, tag, title, desc, tall }) {
  return (
    <div
      className={`relative w-full overflow-hidden rounded-lg cursor-pointer group
        ${tall ? "h-[260px] xl:h-[540px]" : "h-[260px]"}`}
    >
      <img
        src={img}
        alt={title}
        className="w-full h-full object-cover transition-all duration-500 group-hover:opacity-40"
      />

      <div className="absolute inset-0 bg-teal-200 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

      <span className="absolute top-4 left-4 bg-teal-200 text-black text-xs font-semibold px-3 py-1 rounded-md z-20 group-hover:bg-white">
        {tag}
      </span>

      <div className="absolute bottom-6 left-6 right-6 z-20">
        <h3 className="text-xl font-semibold text-white group-hover:text-black transition">
          {title}
        </h3>

        <p className="text-sm text-black opacity-0 max-h-0 overflow-hidden group-hover:max-h-24 group-hover:opacity-100 transition-all duration-500">
          {desc}
        </p>

        <div className="flex items-center gap-1 mt-3 text-sm font-medium text-white group-hover:text-black">
          <span>Know More</span>
          <ChevronRight size={18} />
        </div>
      </div>
    </div>
  );
}
