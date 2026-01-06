"use client";

import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import stateCityData from "../../../public/States/Indian_Cities_In_States_JSON.json";

// Country Codes
const countryCodes = [
  { code: "+91", country: "India" },
  { code: "+1", country: "USA" },
  { code: "+44", country: "UK" },
  { code: "+61", country: "Australia" },
  { code: "+971", country: "UAE" },
];

export default function ApplyForm({ variant = "card" }) {
  const isModal = variant === "modal";

  const [selectedState, setSelectedState] = useState("");
  const [cities, setCities] = useState([]);
  const [countryCode, setCountryCode] = useState("+91");
  const [loading, setLoading] = useState(false);

  // Load cities when State changes
  useEffect(() => {
    setCities(selectedState ? stateCityData[selectedState] : []);
  }, [selectedState]);

  // Responsive input classes
  const inputClass =
    "w-full border border-gray-300 bg-white rounded-md px-3 py-2 text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary text-sm sm:text-base";

  const selectClass =
    "w-full border border-gray-300 bg-white rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-secondary appearance-none cursor-pointer text-sm sm:text-base";

  // AJAX Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    formData.append("_template", "box");
    formData.append("_captcha", "false");

    try {
      await fetch("https://formsubmit.co/ajax/gauravipatilgip@gmail.com", {
        method: "POST",
        body: formData,
      });

      toast.success("Form submitted successfully!");
      e.target.reset();
      setSelectedState(""); // reset selects
    } catch {
      toast.error("Failed to submit!");
    }

    setLoading(false);
  };

  return (
    <div
      id="contact-form"
      className={`w-full scroll-mt-[15vh] ${
        isModal ? "p-0" : "bg-white rounded-lg p-4 sm:p-6 shadow-md border border-gray-200"
      }`}
    >
      {!isModal && (
        <h3 className="text-lg sm:text-xl font-semibold text-secondary mb-4 sm:mb-6 text-center">
          Enquire Now
        </h3>
      )}

      <form onSubmit={handleSubmit} className={`space-y-3 sm:space-y-4 ${isModal ? "mt-4 px-2" : ""}`}>

        {/* NAME */}
        <input
          type="text"
          name="name"
          required
          placeholder="Enter your Name *"
          className={inputClass}
        />

        {/* EMAIL */}
        <input
          type="email"
          name="email"
          required
          placeholder="Enter your Email *"
          className={inputClass}
        />

        {/* PHONE NUMBER - Responsive layout */}
        <div className="flex flex-col sm:flex-row gap-3 w-full">
          <div className="relative w-full sm:w-32">
            <select
              name="countryCode"
              value={countryCode}
              onChange={(e) => setCountryCode(e.target.value)}
              className={`${selectClass} w-full`}
            >
              {countryCodes.map((c) => (
                <option key={c.code} value={c.code}>
                  {c.code}
                </option>
              ))}
            </select>
          </div>

          <input
            type="tel"
            name="mobile"
            required
            placeholder="Enter Mobile Number *"
            className={`${inputClass} w-full`}
          />
        </div>

        {/* STATE */}
        <select
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

        {/* CITY (DYNAMIC DROPDOWN LINKED TO STATE) */}
        <select
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

        {/* COURSE (ONLY MBA AS PER YOUR UI) */}
        <select name="course" required className={selectClass}>
          <option value="">Select Course *</option>
          <option value="MBA">MBA</option>
        </select>

        {/* CHECKBOX */}
        <div className="flex items-start gap-2">
          <input 
            type="checkbox" 
            required 
            className="mt-1"
          />
          <label className="text-xs sm:text-sm text-gray-700 leading-tight">
            I agree to receive information regarding my registration
          </label>
        </div>

        {/* SUBMIT */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#10404A]  text-white font-semibold py-2 px-4 rounded-md text-sm sm:text-base"
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}