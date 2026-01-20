"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaChevronDown,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-white border-t-4 border-[#FF8C1A] text-[#10404A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12 lg:py-16">

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* ================= COLUMN 1 ================= */}
          <div className="space-y-5 md:order-1">

            {/* Logo */}
            <div className="bg-white p-3 rounded-lg inline-block shadow-sm mx-auto md:mx-0">
              <Image
                src="/Logo.png"
                alt="IGSB Logo"
                width={220}
                height={90}
                className="h-auto w-auto"
              />
            </div>

            {/* Address */}
            <div className="space-y-2 text-center md:text-left">
              <h4 className="font-bold uppercase tracking-wider border-b-2 border-[#FF8C1A] pb-1 inline-block">
                Address
              </h4>

              <p className="leading-relaxed text-gray-600 text-sm">
                S.No. 64, 65, Gat No. 276, Parandwadi, Near Somatnephata<br />
                Tal. Maval, Dist. Pune – 410 506
              </p>
            </div>

            {/* Mobile Contact */}
            <div className="space-y-3 text-sm text-gray-600 text-center md:hidden">
              <div>
                <strong className="text-[#10404A]">MBA:</strong>{" "}
                9657856103 / 02114691417
              </div>

              <div>
                <strong className="text-[#10404A]">Administrative:</strong>{" "}
                9657856103
              </div>

              <div className="space-y-1">
                <div className="whitespace-nowrap overflow-hidden text-ellipsis">
                  <strong className="text-[#10404A]">Exam:</strong>{" "}
                  exam.committee@indiragsb.edu.in
                </div>
                <div className="whitespace-nowrap overflow-hidden text-ellipsis">
                  <strong className="text-[#10404A]">MBA:</strong>{" "}
                  mba.admissions@indiragsb.edu.in
                </div>
                <div className="whitespace-nowrap overflow-hidden text-ellipsis">
                  <strong className="text-[#10404A]">Admin:</strong>{" "}
                  admin@indiraigsb.edu.in
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="flex gap-3 pt-2 justify-center md:justify-start">
              {[
                { href: "https://www.facebook.com/igsbpune", icon: <FaFacebookF /> },
                { href: "https://www.linkedin.com/company/indira-global-school-of-business/", icon: <FaLinkedinIn /> },
                { href: "https://www.instagram.com/indira.igsb/", icon: <FaInstagram /> },
                { href: "https://www.youtube.com/user/indiracollege", icon: <FaYoutube /> },
              ].map((item, i) => (
                <Link
                  key={i}
                  href={item.href}
                  target="_blank"
                  className="
                    w-10 h-10
                    flex items-center justify-center
                    rounded-full
                    bg-white
                    border-2 border-[#FF8C1A]
                    text-[#FF8C1A]
                    hover:bg-[#FF8C1A]
                    hover:text-white
                    transition-all
                    duration-300
                    shadow-sm
                  "
                >
                  {item.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* ================= COLUMN 4: Contact Details (MD + LG) ================= */}
          <div className="hidden md:block space-y-6 md:order-2 lg:order-4">
            <h4 className="font-bold uppercase tracking-wider border-b-2 border-[#FF8C1A] pb-2 inline-block">
              Contact Details
            </h4>

            <div className="space-y-5 text-sm text-gray-600">
              <div>
                <strong className="text-[#10404A] block mb-1">MBA:</strong>
                <div>Mobile: 9657856103</div>
                <div>Tel: 02114691417</div>
              </div>

              <div>
                <strong className="text-[#10404A] block mb-1">Administrative:</strong>
                <div>Mobile: 9657856103</div>
              </div>

              <div>
                <strong className="text-[#10404A] block mb-1">Emails:</strong>
                <div className="space-y-1">
                  <Link href="mailto:exam.committee@indiragsb.edu.in" className="hover:text-[#FF8C1A] block">
                    Email ID: exam.committee@indiragsb.edu.in
                  </Link>
                  <Link href="mailto:mba.admissions@indiragsb.edu.in" className="hover:text-[#FF8C1A] block">
                    MBA: mba.admissions@indiragsb.edu.in
                  </Link>
                  <Link href="mailto:admin@indiraigsb.edu.in" className="hover:text-[#FF8C1A] block">
                    Administrative: admin@indiraigsb.edu.in
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* ================= COLUMN 2: Quick Links ================= */}
          <div className="space-y-4 md:order-3">

            <details className="md:block lg:hidden">
              <summary className="cursor-pointer font-semibold flex items-center justify-between border-b-2 border-[#FF8C1A] pb-2">
                Quick Links <FaChevronDown />
              </summary>
              <ul className="mt-3 space-y-2 text-sm text-gray-600">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about/chanakya-edu">About Us</Link></li>
                <li><Link href="/programs/mba">MBA Admissions</Link></li>
                <li><Link href="/alumni">Alumni</Link></li>
                <li><Link href="/contact">Contact Us</Link></li>
                <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                <li><Link href="/blogs">Blogs</Link></li>
              </ul>
            </details>

            <div className="hidden lg:block space-y-6 lg:pl-6">
              <h3 className="text-lg font-semibold inline-block border-b-2 border-[#FF8C1A] pb-2">
                Quick Links
              </h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li><Link href="/" className="hover:text-[#FF8C1A]">Home</Link></li>
                <li><Link href="/about/chanakya-edu" className="hover:text-[#FF8C1A]">About Us</Link></li>
                <li><Link href="/programs/mba" className="hover:text-[#FF8C1A]">MBA Admissions</Link></li>
                <li><Link href="/alumni" className="hover:text-[#FF8C1A]">Alumni</Link></li>
                <li><Link href="/contact" className="hover:text-[#FF8C1A]">Contact Us</Link></li>
                <li><Link href="/privacy-policy" className="hover:text-[#FF8C1A]">Privacy Policy</Link></li>
                <li><Link href="/blogs" className="hover:text-[#FF8C1A]">Blogs</Link></li>
              </ul>
            </div>
          </div>

          {/* ================= COLUMN 3: Featured ================= */}
          <div className="space-y-4 md:order-4 lg:order-3">

            <details className="md:block lg:hidden">
              <summary className="cursor-pointer font-semibold flex items-center justify-between border-b-2 border-[#FF8C1A] pb-2">
                Featured <FaChevronDown />
              </summary>
              <ul className="mt-3 space-y-2 text-sm text-gray-600">
                <li><Link href="https://www.vidyalakshmi.co.in/Students/" target="_blank">Vidya Lakshmi</Link></li>
                <li><Link href="https://www.aicte.gov.in/feedback/" target="_blank">AICTE Feedback</Link></li>
                <li><Link href="/campus-life/student-engagement">Engagement</Link></li>
                <li><Link href="/campus-life/student-achievements">Achievements</Link></li>
                <li><Link href="/facilities">Student Life</Link></li>
                <li><Link href="https://www.nvsp.in/Account/Login" target="_blank">Voter Reg.</Link></li>
              </ul>
            </details>

            <div className="hidden lg:block space-y-6">
              <h3 className="text-lg font-semibold inline-block border-b-2 border-[#FF8C1A] pb-2">
                Featured
              </h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li><Link href="https://www.vidyalakshmi.co.in/Students/" target="_blank" className="hover:text-[#FF8C1A]">Vidya Lakshmi</Link></li>
                <li><Link href="https://www.aicte.gov.in/feedback/" target="_blank" className="hover:text-[#FF8C1A]">AICTE Feedback</Link></li>
                <li><Link href="/campus-life/student-engagement" className="hover:text-[#FF8C1A]">Engagement</Link></li>
                <li><Link href="/campus-life/student-achievements" className="hover:text-[#FF8C1A]">Achievements</Link></li>
                <li><Link href="/facilities" className="hover:text-[#FF8C1A]">Student Life</Link></li>
                <li><Link href="https://www.nvsp.in/Account/Login" target="_blank" className="hover:text-[#FF8C1A]">Voter Reg.</Link></li>
              </ul>
            </div>
          </div>

        </div>
      </div>

      {/* ================= BOTTOM BAR ================= */}
      <div className="bg-[#10404A] border-t-4 border-[#FF8C1A]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4 text-center text-white text-xs sm:text-sm">
          © 2025. Indira Global School of Business. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
