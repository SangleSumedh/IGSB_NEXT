"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-zinc-100 text-gray-800 border-t border-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10">
        {/* ===== Left Section ===== */}
        <div>
          <div className="flex items-center mb-4">
            <Image
              src="/Logo.png"
              alt="ICEM Logo"
              height={200}
              width={200}
              className="h-12 sm:h-16 mr-3 w-auto"
            />
          </div>

          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
            <span className="font-semibold block mb-1">
              📍 Indira Chanakya Campus (ICC)
            </span>
            S.No. 64,65, Gat No. 276 At Post : Parandwadi,
            <br />
            Near Somatne phata, Tal. : Maval, Dist. Pune – 410 506
          </p>

          <p className="text-xs sm:text-sm flex items-center gap-2 mb-1">
            <FaPhoneAlt className="text-primary text-sm sm:text-base" /> 02114 –
            661500 / 666
          </p>
          <p className="text-xs sm:text-sm flex items-center gap-2 mb-4">
            <FaEnvelope className="text-primary text-sm sm:text-base" />{" "}
            info@indiraicem.ac.in
          </p>

          {/* Social Media */}
          <div className="flex gap-4 text-base sm:text-lg">
            <a href="#" className="text-blue-700 hover:text-primary">
              <FaFacebookF />
            </a>
            <a href="#" className="text-blue-700 hover:text-primary">
              <FaLinkedinIn />
            </a>
            <a href="#" className="text-blue-700 hover:text-primary">
              <FaTwitter />
            </a>
            <a href="#" className="text-blue-700 hover:text-primary">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* ===== Middle Section: Featured Links ===== */}
        <div>
          <h3 className="text-base sm:text-lg font-bold text-blue-900 mb-3 sm:mb-4">
            Featured Links
          </h3>
          <div className="grid grid-cols-2 gap-x-4 sm:gap-x-6 text-xs sm:text-sm text-gray-700">
            <ul className="space-y-2">
              <li>Staff Grievance Form</li>
              <li>Women Welfare Policy</li>
              <li>Anti Ragging Policy</li>
              <li>Faculty Application Form</li>
              <li>SPPU</li>
              <li>AICTE</li>
              <li>Privacy Policy</li>
            </ul>
            <ul className="space-y-2">
              <li>DTE</li>
              <li>MahaDBT</li>
              <li>Mandatory Disclosure</li>
              <li>AICTE Approval</li>
              <li>Fees Regulating Authority</li>
              <li>Feedback</li>
            </ul>
          </div>
        </div>

        {/* ===== Right Section: Popular Posts ===== */}
        <div>
          <h3 className="text-base sm:text-lg font-bold text-blue-900 mb-3 sm:mb-4">
            Popular Posts
          </h3>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-16 h-14 sm:w-20 sm:h-16 bg-gray-300 rounded-md flex items-center justify-center text-gray-600 text-[10px] sm:text-xs">
              Image
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 text-xs sm:text-sm leading-tight">
                Investment Opportunities for Women in India
              </h4>
              <p className="text-[10px] sm:text-xs text-gray-500 mt-1">
                March 15, 2023
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-16 h-14 sm:w-20 sm:h-16 bg-gray-300 rounded-md flex items-center justify-center text-gray-600 text-[10px] sm:text-xs">
              Image
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 text-xs sm:text-sm leading-tight">
                Importance of Pre-planning to Achieve Success
              </h4>
              <p className="text-[10px] sm:text-xs text-gray-500 mt-1">
                January 27, 2023
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ===== Bottom Bar ===== */}
      <div className="bg-secondary text-white text-center py-2 sm:py-3 text-xs sm:text-sm">
        © 2024. Indira College of Engineering and Management.
      </div>
    </footer>
  );
};

export default Footer;
