"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-300">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-14 grid grid-cols-1 md:grid-cols-3 gap-16">
        {/* ================= LEFT COLUMN (Takes 2/3 space) ================= */}
        <div className="md:col-span-2 space-y-8 ">
          {/* Increased Logo Size */}
          <Image
            src="/Logo.png"
            alt="IGSB Logo"
            width={400} // Increased from 200
            height={400}
            className="h-auto w-auto "
          />

          {/* Contact Info positioned directly under Logo */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-sm text-gray-700">
            <div className="space-y-3">
              <h4 className="font-bold text-gray-900 uppercase tracking-wider">
                Address
              </h4>
              <p className="leading-relaxed">
                S.No. 64, 65, Gat No. 276,
                <br />
                At Post : Parandwadi, Near Somatnephata,
                <br />
                Tal. : Maval, Dist.: Pune – 410 506
              </p>

              {/* Social Icons moved under address for cleaner look */}
              <div className="flex gap-4 text-gray-700 text-lg pt-4">
                <Link
                  href="https://www.facebook.com/igsbpune"
                  target="_blank"
                  className="hover:text-secondary transition-colors"
                >
                  <FaFacebookF />
                </Link>
                <Link
                  href="https://www.linkedin.com/company/indira-global-school-of-business/?originalSubdomain=in"
                  target="_blank"
                  className="hover:text-secondary transition-colors"
                >
                  <FaLinkedinIn />
                </Link>
                <Link
                  href="https://www.instagram.com/indira.igsb/"
                  target="_blank"
                  className="hover:text-secondary transition-colors"
                >
                  <FaInstagram />
                </Link>
                <Link
                  href="#"
                  className="hover:text-secondary transition-colors"
                >
                  <FaYoutube />
                </Link>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-bold text-gray-900 uppercase tracking-wider">
                Contact Details
              </h4>
              <p>
                <strong>MBA:</strong> 9657856103 / 02114691417
              </p>
              <p>
                <strong>Administrative:</strong> +91 9657856103
              </p>
              <p>
                <strong>Emails -</strong> 
              </p>
              <div className="flex flex-col space-y-1">
                <Link
                  href="mailto:exam.committee@indiragsb.edu.in"
                  className="hover:underline break-all"
                >
                  exam.committee@indiragsb.edu.in
                </Link>
                <Link
                  href="mailto:mba.admissions@indiragsb.edu.in"
                  className="hover:underline"
                >
                  mba.admissions@indiragsb.edu.in
                </Link>
                <Link
                  href="mailto:admin@indiragsb.edu.in"
                  className="hover:underline"
                >
                  admin@indiragsb.edu.in
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* ================= RIGHT COLUMN (Quick Links & Docs) ================= */}
        <div className="md:col-span-1 grid grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 border-b-2 border-secondary inline-block pb-1 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm text-gray-700">
              <li>
                <Link href="/" className="hover:text-secondary">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about/chanakya-edu"
                  className="hover:text-secondary"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/programs/mba" className="hover:text-secondary">
                  MBA Admissions
                </Link>
              </li>
              <li>
                <Link href="/alumni" className="hover:text-secondary">
                  Alumni
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-secondary">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-secondary">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 border-b-2 border-secondary inline-block pb-1 mb-4">
              Documents
            </h3>
            <ul className="space-y-3 text-sm text-gray-700">
              <li>
                <Link
                  href="https://www.vidyalakshmi.co.in/Students/"
                  target="_blank"
                  className="hover:text-secondary"
                >
                  Vidya Lakshmi
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.aicte.gov.in/feedback/"
                  target="_blank"
                  className="hover:text-secondary"
                >
                  AICTE Feedback
                </Link>
              </li>
              <li>
                <Link
                  href="/campus-life/student-engagement"
                  className="hover:text-secondary"
                >
                  Engagement
                </Link>
              </li>
              <li>
                <Link
                  href="/campus-life/student-achievements"
                  className="hover:text-secondary"
                >
                  Achievements
                </Link>
              </li>
              <li>
                <Link href="/facilities" className="hover:text-secondary">
                  Student Life
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.nvsp.in/Account/Login"
                  target="_blank"
                  className="hover:text-secondary"
                >
                  Voter Reg.
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ================= BOTTOM BAR ================= */}
      <div className="bg-secondary text-white text-center py-3 text-xs sm:text-sm">
        © 2025. Indira Global School of Business. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
