"use client";

import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import stateCityData from "../../../public/States/Indian_Cities_In_States_JSON.json";

const countryCodes = [
  { code: "+91", country: "India" },
  { code: "+1", country: "USA" },
  { code: "+44", country: "UK" },
  { code: "+61", country: "Australia" },
  { code: "+971", country: "UAE" },
];

export default function ApplyForm({ variant = "card", onClose }) {
  const isModal = variant === "modal";

  const [selectedState, setSelectedState] = useState("");
  const [cities, setCities] = useState([]);
  const [countryCode, setCountryCode] = useState("+91");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setCities(selectedState ? stateCityData[selectedState] : []);
  }, [selectedState]);

  const inputClass =
    "w-full border border-gray-300 bg-white rounded-md px-3 py-2 text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary text-sm sm:text-xxs";

  const selectClass =
    "w-full border border-gray-300 bg-white rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-secondary appearance-none cursor-pointer text-sm sm:text-base";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    formData.append("_template", "box");
    formData.append("_captcha", "false");

    try {
      await fetch(
        "https://formsubmit.co/ajax/mba.admissions@indiraigsb.edu.in",
        {
          method: "POST",
          body: formData,
        },
      );

      toast.success("Form submitted successfully!");
      e.target.reset();
      setSelectedState("");
    } catch {
      toast.error("Failed to submit!");
    }

    setLoading(false);
  };

  return (
    <div
      id="contact-form"
      className={`w-full scroll-mt-[15vh] ${
        isModal
          ? "relative bg-white rounded-lg p-4 sm:p-6 shadow-md border border-gray-200"
          : "bg-transparent p-0"
      }`}
    >
      {isModal && (
        <button
          type="button"
          onClick={onClose}
          aria-label="Close enquiry form"
          className="absolute top-2 right-2 w-9 h-9 rounded-full bg-white shadow border border-gray-300 flex items-center justify-center text-gray-600 hover:text-black hover:shadow-md transition"
        >
          <span className="text-xl leading-none font-semibold">×</span>
        </button>
      )}

      {isModal && (
        <h3 className="text-lg sm:text-xl font-semibold text-secondary mb-4 sm:mb-6 text-center">
          Enquire Now
        </h3>
      )}

      <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
        {/* NAME */}
        <label htmlFor="name" className="sr-only">
          Full Name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          required
          placeholder="Enter your Name"
          className={inputClass}
        />

        {/* EMAIL */}
        <label htmlFor="email" className="sr-only">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          name="email"
          required
          placeholder="Enter your Email"
          className={inputClass}
        />

        {/* PHONE */}
        <div className="flex flex-col sm:flex-row gap-3 w-full">
          <label htmlFor="countryCode" className="sr-only">
            Country Code
          </label>
          <select
            id="countryCode"
            name="countryCode"
            value={countryCode}
            onChange={(e) => setCountryCode(e.target.value)}
            className={`${selectClass} w-full sm:w-32`}
          >
            {countryCodes.map((c) => (
              <option key={c.code} value={c.code}>
                {c.code}
              </option>
            ))}
          </select>

          <label htmlFor="mobile" className="sr-only">
            Mobile Number
          </label>
          <input
            id="mobile"
            type="tel"
            name="mobile"
            required
            placeholder="Enter Mobile Number"
            className={`${inputClass} w-full`}
          />
        </div>

        {/* STATE */}
        <label htmlFor="state" className="sr-only">
          State
        </label>
        <select
          id="state"
          name="state"
          required
          value={selectedState}
          onChange={(e) => setSelectedState(e.target.value)}
          className={selectClass}
        >
          <option value="">Select State *</option>
          {Object.keys(stateCityData).map((state) => (
            <option key={state}>{state}</option>
          ))}
        </select>

        {/* CITY */}
        <label htmlFor="city" className="sr-only">
          City
        </label>
        <select
          id="city"
          name="city"
          required
          disabled={!selectedState}
          className={`${selectClass} ${!selectedState ? "text-gray-400" : ""}`}
        >
          <option value="">
            {selectedState ? "Select City *" : "Select State First"}
          </option>
          {cities.map((city) => (
            <option key={city}>{city}</option>
          ))}
        </select>

        {/* COURSE */}
        <label htmlFor="course" className="sr-only">
          Course
        </label>
        <select id="course" name="course" required className={selectClass}>
          <option value="">Select Course *</option>
          <option value="MBA">MBA</option>
        </select>

        {/* CHECKBOX */}
        <div className="flex items-start gap-2">
          <input id="agree" type="checkbox" required className="mt-1" />
          <label
            htmlFor="agree"
            className="text-xs sm:text-sm text-gray-700 leading-tight"
          >
            I agree to receive information regarding my registration
          </label>
        </div>

        {/* SUBMIT */}
        <button
          type="submit"
          disabled={loading}
          aria-label="Submit enquiry form"
          className="w-full bg-[#10404A] text-white font-semibold py-2 px-4 rounded-md text-sm sm:text-base"
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
