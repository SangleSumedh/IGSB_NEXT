"use client";

import React, { useState } from "react";
import { Mail, Menu } from "lucide-react";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Grid2x2 } from "lucide-react";
import { PanelRightOpen, PanelLeftOpen } from "lucide-react";
// import { Menu } from "lucide-react";
import { LayoutGrid } from "lucide-react";
import Link from "next/link";

const FixedActionBar = () => {
  const [isOpenRight, setIsOpenRight] = useState(false);
  const [isOpenMobile, setIsOpenMobile] = useState(true);

  return (
    <>
      {/* ================= RIGHT BAR (NEW) ================= */}
      <div className="hidden md:flex fixed bottom-10 right-5 z-[99999] items-center">
        <div
          className="relative flex items-center group"
          onMouseEnter={() => setIsOpenRight(true)}
          onMouseLeave={() => setIsOpenRight(false)}
        >
          {/* 🌈 Right Hamburger Button */}
          <div className="relative p-[2px] transition-all duration-500 rounded-md">
            <button
              title="Menu"
              className="relative flex items-center justify-center bg-[#10404A] text-white p-4 rounded-md shadow-lg hover:brightness-110 transition-all duration-300"
            >
              <LayoutGrid size={22} />
            </button>
          </div>

          {/* 🚀 Right Side Social Icons */}
          <div
            className={`absolute right-full top-1/2 -translate-y-1/2 flex items-center transition-all duration-500 ease-in-out ${
              isOpenRight
                ? "opacity-100 -translate-x-0"
                : "opacity-0 translate-x-3 pointer-events-none"
            }`}
          >
            <div className="bg-[#10404A] px-3 py-2 shadow-lg flex items-center gap-3 rounded-l-md">
              <Link
                href="https://www.facebook.com/igsbpune"
                target="_blank"
                className="bg-white text-black p-2.5 rounded-md shadow hover:scale-105 transition"
              >
                <FaFacebookF size={18} />
              </Link>

              <span className="w-[1px] h-6 bg-white/40"></span>

              <Link
                href="https://www.linkedin.com/company/indira-global-school-of-business/?originalSubdomain=in"
                target="_blank"
                className="bg-white text-black p-2.5 rounded-md shadow hover:scale-105 transition"
              >
                <FaLinkedinIn size={18} />
              </Link>

              <span className="w-[1px] h-6 bg-white/40"></span>

              <Link
                href="#"
                target="_blank"
                className="bg-white text-black p-2.5 rounded-md shadow hover:scale-105 transition"
              >
                <Mail size={18} />
                {/* <FaSquareXTwitter size={18} /> */}
              </Link>

              <span className="w-[1px] h-6 bg-white/40"></span>

              <Link
                href="https://www.instagram.com/indira.igsb/"
                target="_blank"
                className="bg-white text-black p-2.5 rounded-md shadow hover:scale-105 transition"
              >
                <FaInstagram size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ===== MOBILE SOCIAL BAR (Button + Sliding Icons) ===== */}
      <div className="md:hidden fixed bottom-2 left-5 z-[99999] items-center">
        <div className="relative flex items-center">
          {/* Mobile Button */}
          <div className="relative p-[2px] transition-all duration-500 rounded-md">
            <button
              title="Social Media"
              onClick={() => setIsOpenMobile(!isOpenMobile)}
              className="relative flex items-center justify-center bg-[#10404A] text-white p-2 shadow-lg hover:brightness-110 transition-all duration-300"
            >
              {isOpenMobile ? (
                <PanelRightOpen size={18} />
              ) : (
                <PanelLeftOpen size={18} />
              )}
            </button>
          </div>

          {/* Sliding Social Icons */}
          <div
            className={`absolute left-full top-1/2 -translate-y-1/2 flex items-center transition-all duration-500 ease-in-out ${
              isOpenMobile
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-3 pointer-events-none"
            }`}
          >
            <div className="bg-[#10404A] px-2 py-1 shadow-lg flex items-center gap-2 rounded-md">
              <Link
                href="https://www.facebook.com/ICEM.AVIRAT/"
                target="_blank"
                className="bg-white text-black p-2 shadow hover:scale-105 transition"
              >
                <FaFacebookF size={16} />
              </Link>

              <span className="w-[1px] h-4 bg-white/40"></span>

              <Link
                href="https://www.linkedin.com/company/indira-college-of-engineering-and-management-pune/"
                target="_blank"
                className="bg-white text-black p-2 shadow hover:scale-105 transition"
              >
                <FaLinkedinIn size={16} />
              </Link>

              <span className="w-[1px] h-4 bg-white/40"></span>

              <Link
                href="mailto:admissions@indiraicem.ac.in"
                target="_blank"
                className="bg-white text-black p-2 shadow hover:scale-105 transition"
              >
                <Mail size={16} />
              </Link>

              <span className="w-[1px] h-4 bg-white/40"></span>

              <Link
                href="https://www.instagram.com/icem_pune/"
                target="_blank"
                className="bg-white text-black p-2 shadow hover:scale-105 transition"
              >
                <FaInstagram size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 🌈 Glow Border Styles */}
      <style>{`
        @keyframes glow-border {
          0% {
            background-position: 0% 50%;
            box-shadow: 0 0 8px rgba(0, 229, 255, 0.4);
          }
          50% {
            background-position: 100% 50%;
            box-shadow: 0 0 15px rgba(255, 0, 234, 0.6);
          }
          100% {
            background-position: 0% 50%;
            box-shadow: 0 0 8px rgba(0, 229, 255, 0.4);
          }
        }
        .animate-glow-border {
          animation: glow-border 3s ease-in-out infinite;
        }
      `}</style>
    </>
  );
};

export default FixedActionBar;
