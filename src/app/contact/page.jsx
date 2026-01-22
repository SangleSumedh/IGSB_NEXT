"use client";

import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <section className="bg-slate-50 py-8 md:py-12 lg:py-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================== PAGE TITLE ==================== */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-slate-900 mb-2">
          Contact Us
        </h1>
        <p className="text-center text-slate-600 text-sm sm:text-base mb-6 sm:mb-8 md:mb-10">
          We are always here to hear from you.
        </p>

        {/* ======================================================
           CONTACT + MAP (SIDE BY SIDE)
        ====================================================== */}
        <div className="bg-white rounded-lg sm:rounded-xl md:rounded-2xl shadow-sm border border-slate-200 p-4 sm:p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
            {/* LEFT COLUMN — ADDRESS / PHONE / EMAIL */}
            <div className="space-y-4 sm:space-y-5 md:space-y-6">
              {/* Address */}
              <div>
                <h2 className="text-lg sm:text-xl font-semibold text-slate-900 flex items-center gap-2 mb-2 sm:mb-3">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-secondary flex-shrink-0" />
                  Address
                </h2>
                <p className="font-semibold text-sm sm:text-base">
                  Indira Global School of Business
                </p>
                <p className="text-slate-600 text-xs sm:text-sm md:text-base mt-1 leading-relaxed">
                  S.No. 64, 65, Gat No. 276, Parandwadi, Near Somatnephata Tal.
                  Maval, Dist. Pune – 410 506
                </p>
              </div>

              {/* Phone Numbers */}
              <div>
                <h2 className="text-lg sm:text-xl font-semibold flex items-center gap-2 mb-2 sm:mb-3">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-secondary flex-shrink-0" />
                  Phone Number
                </h2>

                <p className="mt-2 sm:mt-3 font-semibold text-sm sm:text-base">MBA:</p>
                <p className="text-slate-600 text-xs sm:text-sm md:text-base">Mobile: 9657856103</p>
                <p className="text-slate-600 text-xs sm:text-sm md:text-base">Tel.: 02114691417</p>

                <p className="mt-2 sm:mt-3 font-semibold text-sm sm:text-base">
                  For Administrative Purpose:
                </p>
                <p className="text-slate-600 text-xs sm:text-sm md:text-base">Mobile: +91 9657856103</p>
              </div>

              {/* Email */}
              <div>
                <h2 className="text-lg sm:text-xl font-semibold flex items-center gap-2 mb-2 sm:mb-3">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-secondary flex-shrink-0" />
                  Email
                </h2>

                <p className="mt-2 sm:mt-3 font-semibold text-xs sm:text-sm md:text-base">
                  For verification of student/Alumni academic records
                </p>
                <p className="text-slate-600 text-xs sm:text-sm md:text-base">
                  Email ID: exam.committee@indiragbs.edu.in
                </p>

                <p className="mt-2 sm:mt-3 font-semibold text-xs sm:text-sm md:text-base">MBA:</p>
                <p className="text-slate-600 text-xs sm:text-sm md:text-base">
                  mba.admissions@indiragbs.edu.in
                </p>

                <p className="mt-2 sm:mt-3 font-semibold text-xs sm:text-sm md:text-base">
                  For Administrative Purpose:
                </p>
                <p className="text-slate-600 text-xs sm:text-sm md:text-base">admin@indiragbs.edu.in</p>
              </div>
            </div>

            {/* RIGHT COLUMN — GOOGLE MAP */}
            <div className="w-full h-64 sm:h-72 md:h-80 lg:h-96 xl:h-[350px] rounded-lg sm:rounded-xl overflow-hidden shadow-sm border border-slate-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3779.1899312630558!2d73.659914!3d18.700313!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b1b3b4ce1c29%3A0x600df0dc57132670!2sIndira%20Global%20School%20of%20Business!5e0!3m2!1sen!2sus!4v1768892165044!5m2!1sen!2sus"
                className="w-full h-full border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Indira Global School of Business Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}