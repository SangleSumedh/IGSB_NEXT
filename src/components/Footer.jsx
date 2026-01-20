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
    <footer className="bg-[#10404A] border-t-4  border-[#ff712d] text-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-10 lg:py-14">
        
        {/* FIX: Changed to 'lg:grid-cols-5' to give Links & Featured their own side-by-side columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          
          {/* ================= COLUMN 1: Logo & Address ================= */}
          <div className="space-y-6">
            <div className=" rounded-lg inline-block">
              <Image
                src="/whiteLogo.png"
                alt="IGSB Logo"
                width={250}
                height={100}
                className="h-auto w-auto"
              />
            </div>

            <div className="space-y-3">
              <h4 className="font-bold text-white uppercase tracking-wider border-l-4 border-[#ff712d] pl-3">
                Address
              </h4>
              <p className="leading-relaxed text-gray-200 text-sm">
                S.No. 64, 65, Gat No. 276,
                <br />
                At Post : Parandwadi, Near Somatnephata,
                <br />
                Tal. : Maval, Dist.: Pune – 410 506
              </p>
              
              <div className="flex gap-4 text-white text-xl pt-2">
                <Link href="https://www.facebook.com/igsbpune" target="_blank" className="hover:text-[#ff712d] transition-colors"><FaFacebookF /></Link>
                <Link href="https://www.linkedin.com/company/indira-global-school-of-business/" target="_blank" className="hover:text-[#ff712d] transition-colors"><FaLinkedinIn /></Link>
                <Link href="https://www.instagram.com/indira.igsb/" target="_blank" className="hover:text-[#ff712d] transition-colors"><FaInstagram /></Link>
                <Link href="https://www.youtube.com/user/indiracollege" target="_blank" className="hover:text-[#ff712d] transition-colors"><FaYoutube /></Link>
              </div>
            </div>
          </div>

          {/* ================= COLUMN 2: Contact Details ================= */}
          <div className="space-y-4">
            <h4 className="font-bold text-white uppercase tracking-wider border-l-4 border-[#ff712d] pl-3">
              Contact Details
            </h4>
            <div className="space-y-3 text-sm text-gray-200">
              <div>
                <strong className="text-white block">MBA:</strong>
                <span>9657856103 / 02114691417</span>
              </div>
              <div>
                <strong className="text-white block">Administrative:</strong>
                <span>+91 9657856103</span>
              </div>
              <div>
                <strong className="text-white block">Emails:</strong>
                <div className="space-y-1">
                  <Link href="mailto:exam.committee@indiragsb.edu.in" className="hover:text-[#ff712d] block break-all">
                    exam.committee@indiragsb.edu.in
                  </Link>
                  <Link href="mailto:mba.admissions@indiragsb.edu.in" className="hover:text-[#ff712d] block break-all">
                    mba.admissions@indiragsb.edu.in
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* ================= COLUMN 3: Quick Links ================= */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold inline-block text-white border-b-2 border-[#ff712d] pb-2">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm text-gray-200">
              <li><Link href="/" className="hover:text-[#ff712d] transition-colors">Home</Link></li>
              <li><Link href="/about/chanakya-edu" className="hover:text-[#ff712d] transition-colors">About Us</Link></li>
              <li><Link href="/programs/mba" className="hover:text-[#ff712d] transition-colors">MBA Admissions</Link></li>
              <li><Link href="/alumni" className="hover:text-[#ff712d] transition-colors">Alumni</Link></li>
              <li><Link href="/contact" className="hover:text-[#ff712d] transition-colors">Contact Us</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-[#ff712d] transition-colors">Privacy Policy</Link></li>
              <li><Link href="/blogs" className="hover:text-[#ff712d] transition-colors">Blogs</Link></li>
            </ul>
          </div>

          {/* ================= COLUMN 4: Featured Links ================= */}
          <div className="space-y-4">
            <h3 className="text-lg inline-block font-semibold text-white border-b-2 border-[#ff712d] pb-2">
              Featured
            </h3>
            <ul className="space-y-2 text-sm text-gray-200">
              <li><Link href="https://www.vidyalakshmi.co.in/Students/" target="_blank" className="hover:text-[#ff712d]">Vidya Lakshmi</Link></li>
              <li><Link href="https://www.aicte.gov.in/feedback/" target="_blank" className="hover:text-[#ff712d]">AICTE Feedback</Link></li>
              <li><Link href="/campus-life/student-engagement" className="hover:text-[#ff712d]">Engagement</Link></li>
              <li><Link href="/campus-life/student-achievements" className="hover:text-[#ff712d]">Achievements</Link></li>
              <li><Link href="/facilities" className="hover:text-[#ff712d]">Student Life</Link></li>
              <li><Link href="https://www.nvsp.in/Account/Login" target="_blank" className="hover:text-[#ff712d]">Voter Reg.</Link></li>
            </ul>
          </div>

          {/* ================= COLUMN 5: Map ================= */}
          <div className="space-y-4">
            <h4 className="font-bold text-white uppercase tracking-wider border-l-4 border-[#ff712d] pl-3">
               Locate Us
            </h4>
            <div className="w-full aspect-square rounded-lg overflow-hidden border-2 border-white/20 shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d15115.519651324827!2d73.64691964730878!3d18.71419376867406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sS.No.%2064%2C%2065%2C%20Gat%20No.%20276%2C%20At%20Post%20%3A%20Parandwadi%2C%20Near%20Somatnephata%2C%20Tal.%20%3A%20Maval%2C%20Dist.%3A%20Pune%20%E2%80%93%20410%20506!5e0!3m2!1sen!2sin!4v1767779385504!5m2!1sen!2sin"
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="mt-12 pt-6 border-t border-gray-700 text-center text-gray-200 text-xs sm:text-sm">
          © 2025. Indira Global School of Business. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;