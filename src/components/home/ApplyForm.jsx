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
  { code: "+81", country: "Japan" },
  { code: "+49", country: "Germany" },
  { code: "+33", country: "France" },
];

// Programs & Courses
const engineeringPrograms = [
  "Computer Engineering",
  "Information Technology",
  "Mechanical Engineering",
  "AIDS Engineering",
  "Electronics & Telecommunication",
  "Civil Engineering",
];

const ugCourses = ["BBA", "BCA", "Engineering", "Direct Second Year"];
const pgCourses = ["MBA", "MCA", "M-Tech"];

export default function ApplyForm({ variant = "card" }) {
  const isModal = variant === "modal";

  const [selectedState, setSelectedState] = useState("");
  const [selectedDiscipline, setSelectedDiscipline] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");
  const [cities, setCities] = useState([]);
  const [countryCode, setCountryCode] = useState("+91");
  const [loading, setLoading] = useState(false);

  // Load cities when state changes
  useEffect(() => {
    setCities(selectedState ? stateCityData[selectedState] : []);
  }, [selectedState]);

  const inputClass =
    "w-full border border-gray-300 bg-white rounded-md px-3 py-2 text-gray-700 placeholder:text-gray-400 " +
    "focus:outline-none focus:ring-2 focus:ring-[#E85C0D]";

  const selectClass = 
    "w-full border border-gray-300 bg-white rounded-md px-3 py-2 text-gray-700 " +
    "focus:outline-none focus:ring-2 focus:ring-[#E85C0D] appearance-none cursor-pointer";

  // ------------------- AJAX SUBMIT (NO REDIRECT) -------------------
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    formData.append("_template", "box"); // nicer email UI
    formData.append("_captcha", "false");

    try {
      await fetch("https://formsubmit.co/ajax/gauravipatilgip@gmail.com", {
        method: "POST",
        body: formData,
      });

      toast.success("Form submitted successfully!");
      e.target.reset();

      // Reset dependent dropdowns
      setSelectedState("");
      setSelectedCourse("");
      setSelectedDiscipline("");

    } catch (err) {
      toast.error("Failed to submit! Try again.");
    }

    setLoading(false);
  };

  return (
    <div
    id="contact-form"
      className={`w-full  ${
        isModal
          ? "p-0"
          : "bg-white rounded-lg p-6 shadow-md border border-gray-200"
      }`}
    >
      {!isModal && (
        <h3 className="text-xl font-semibold text-secondary mb-6 text-center">
          Enquire Now
        </h3>
      )}

      {/* FORM */}
      <form onSubmit={handleSubmit} className={`space-y-4 ${isModal ? "mt-4 px-2" : ""}`}>

        {/* NAME */}
        <input type="text" name="name" required placeholder="Enter Name *" className={inputClass} />

        {/* EMAIL */}
        <input type="email" name="email" required placeholder="Enter Email Address *" className={inputClass} />

        {/* PHONE NUMBER */}
        <div className="flex gap-3 w-full">
          <div className="flex-[1.1] min-w-[130px] relative">
            <select
              name="countryCode"
              value={countryCode}
              onChange={(e) => setCountryCode(e.target.value)}
              className={selectClass}
            >
              {countryCodes.map((c) => (
                <option key={c.code} value={c.code}>
                  {c.code} ({c.country})
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          <input
            type="tel"
            name="mobile"
            required
            placeholder="Enter Mobile Number *"
            className={`flex-[2] ${inputClass}`}
          />
        </div>

        {/* STATE + CITY */}
        <div className="flex gap-3">
          <div className="flex-1 relative">
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
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          <div className="flex-1 relative">
            <select
              name="city"
              required
              disabled={!selectedState}
              className={`${selectClass} ${!selectedState ? 'text-gray-400' : ''}`}
            >
              <option value="">
                {selectedState ? "Select City *" : "Select State First"}
              </option>
              {cities.map((city) => (
                <option key={city}>{city}</option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {/* DISCIPLINE */}
        <div className="relative">
          <select
            name="discipline"
            required
            value={selectedDiscipline}
            onChange={(e) => {
              setSelectedDiscipline(e.target.value);
              setSelectedCourse("");
            }}
            className={selectClass}
          >
            <option value="">Select Discipline *</option>
            <option value="UG">UG</option>
            <option value="PG">PG</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        {/* COURSE */}
        <div className="relative">
          <select
            name="course"
            required
            value={selectedCourse}
            onChange={(e) => setSelectedCourse(e.target.value)}
            className={selectClass}
          >
            <option value="">Select Course *</option>
            {selectedDiscipline === "UG" &&
              ugCourses.map((c) => <option key={c}>{c}</option>)}
            {selectedDiscipline === "PG" &&
              pgCourses.map((c) => <option key={c}>{c}</option>)}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        {/* PROGRAM */}
        <div className="relative">
          <select name="program" required className={selectClass}>
            <option value="">Select Program *</option>
            {["Engineering", "Direct Second Year"].includes(selectedCourse) &&
              engineeringPrograms.map((p) => <option key={p}>{p}</option>)}
            {selectedCourse === "BBA" && <option value="BBA">BBA</option>}
            {selectedCourse === "BCA" && <option value="BCA">BCA</option>}
            {selectedCourse === "MBA" && <option value="MBA">MBA</option>}
            {selectedCourse === "MCA" && <option value="MCA">MCA</option>}
            {selectedCourse === "M-Tech" &&
              engineeringPrograms.map((p) => (
                <option key={p} value={`M-Tech in ${p}`}>
                  M-Tech in {p}
                </option>
              ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        {/* CET */}
        <input type="text" name="cetScore" placeholder="Enter CET Score" className={inputClass} />

        {/* CAPTCHA */}
        <div className="flex gap-3 items-center">
          <div className="bg-white border border-gray-300 rounded-md w-1/2 flex items-center justify-center py-2 font-bold text-gray-700">
            8fcb09
          </div>

          <input type="text" name="captcha" required placeholder="Enter Captcha" className={`flex-1 ${inputClass}`} />
        </div>

        {/* CHECKBOX */}
        <div className="flex items-center gap-2 mt-2">
          <input type="checkbox" required />
          <label className="text-sm text-gray-700">
            I agree to receive information regarding my submitted enquiry*
          </label>
        </div>

        {/* SUBMIT */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-secondary text-white font-semibold py-2 rounded-md"
        >
          {loading ? "Submitting..." : "SUBMIT"}
        </button>
      </form>
    </div>
  );
}