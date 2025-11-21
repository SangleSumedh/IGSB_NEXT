"use client";
import { useState } from "react";
import Link from "next/link";

export default function Sidebar() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    state: "",
    city: "",
    discipline: "",
    course: "",
    program: "",
    cetScore: "",
    captcha: "",
    countryCode: "+91",
  });

  // ✅ About Us Links
  const aboutLinks = [
    { label: "Overview", link: "/about/overview" },
    { label: "Facilities", link: "/about/facilities" },
    { label: "Governance", link: "/about/governance" },
    { label: "Accreditation", link: "/about/accreditation" },
  ];

  // ✅ Campus Life Links
  const campusLifeLinks = [
    { label: "Student Welfare", link: "/campus-life/student-welfare" },
    { label: "IIC", link: "/campus-life/iic" },
    { label: "Induction Programme", link: "/campus-life/induction-programme" },
    { label: "Student Council", link: "/campus-life/student-council" },
    { label: "National Service Scheme", link: "/campus-life/nss" },
    { label: "Award Functions", link: "/campus-life/icem-awards" },
    { label: "Academics", link: "/campus-life/academics" },
    { label: "Committees", link: "/campus-life/committees" },
    {
      label: "Grievance Redressals",
      link: "/campus-life/grievance-redressals",
    },
    { label: "Cultural Events", link: "/campus-life/cultural-events" },
    { label: "Sports & Recreation", link: "/campus-life/sports" },
    { label: "Clubs & Societies", link: "/campus-life/clubs" },
    { label: "Technical Fest", link: "/campus-life/tech-fest" },
    { label: "Workshops & Seminars", link: "/campus-life/workshops" },
    { label: "Annual Fest", link: "/campus-life/annual-fest" },
  ];

  // ✅ Programs & Admission Links
  const programLinks = [
    { label: "Computer Engineering", link: "/programs/computer-engineering" },
    {
      label: "Mechanical Engineering",
      link: "/programs/mechanical-engineering",
    },
    {
      label: "Artificial Intelligence and Data Science",
      link: "/programs/ai-ds",
    },
    { label: "Electronics and Telecommunication", link: "/programs/entc" },
    { label: "First Year Engineering", link: "/programs/fye" },
    { label: "Information Technology", link: "/programs/it" },
    { label: "Integrated MBA (BBA + MBA)", link: "/programs/imba" },
    { label: "Integrated MCA (BCA + MCA)", link: "/programs/imca" },
    { label: "MBA", link: "/programs/mba" },
    { label: "MCA", link: "/programs/mca" },
    { label: "M-Tech in Mechanical Engineering", link: "/programs/mtech-mech" },
    { label: "M-Tech in Computer Science", link: "/programs/mtech-comp" },
  ];

  // ✅ Accreditation Links
  const accreditationLinks = [
    { label: "NAAC - SSR Reports", link: "/accreditation/naac-ssr" },
    {
      label: "NAAC - Criteria Wise Details",
      link: "/accreditation/naac-criteria",
    },
    { label: "NAAC - AQAR Reports", link: "/accreditation/naac-aqar" },
    { label: "NAAC Certificate", link: "/accreditation/naac-certificate" },
    { label: "IQAC Committee", link: "/accreditation/iqac-committee" },
    { label: "IQAC Notices", link: "/accreditation/iqac-notices" },
    { label: "IQAC MOMS & Actions", link: "/accreditation/iqac-moms" },
    { label: "IQAC Formats", link: "/accreditation/iqac-formats" },
    { label: "Best Practices", link: "/accreditation/best-practices" },
    {
      label: "Distinctive Practice",
      link: "/accreditation/distinctive-practice",
    },
    { label: "SPPU Annual Report", link: "/accreditation/sppu-report" },
    { label: "Code of Conduct", link: "/accreditation/code-of-conduct" },
    { label: "NIRF", link: "/accreditation/nirf" },
    { label: "Financial Statements", link: "/accreditation/financials" },
    { label: "Soft Skills & Aptitude", link: "/accreditation/soft-skills" },
    { label: "Reports", link: "/accreditation/reports" },
  ];

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="w-full h-full bg-secondary text-white p-6  shadow-lg flex flex-col">
      {/* ===== Navigation Links ===== */}
      <div className="space-y-6 mb-8">
        {/* About Us */}
        <div>
          <h4 className="font-semibold text-white/90 mb-3 border-l-4 border-accent pl-2">
            About Us
          </h4>
          <div className="space-y-2">
            {aboutLinks.map((link, i) => (
              <Link
                key={i}
                href={link.link}
                className="block text-sm text-white/80 hover:text-white hover:bg-white/10 p-2 rounded transition-all duration-200 hover:translate-x-1"
              >
                • {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Campus Life */}
        <div>
          <h4 className="font-semibold text-white/90 mb-3 border-l-4 border-accent pl-2">
            Campus Life
          </h4>
          <div className="space-y-2">
            {campusLifeLinks.map((link, i) => (
              <Link
                key={i}
                href={link.link}
                className="block text-sm text-white/80 hover:text-white hover:bg-white/10 p-2 rounded transition-all duration-200 hover:translate-x-1"
              >
                • {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Programs */}
        <div>
          <h4 className="font-semibold text-white/90 mb-3 border-l-4 border-accent pl-2">
            Programs & Admission
          </h4>
          <div className="space-y-2">
            {programLinks.map((link, i) => (
              <Link
                key={i}
                href={link.link}
                className="block text-sm text-white/80 hover:text-white hover:bg-white/10 p-2 rounded transition-all duration-200 hover:translate-x-1"
              >
                • {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Accreditation */}
        <div>
          <h4 className="font-semibold text-white/90 mb-3 border-l-4 border-accent pl-2">
            Accreditation
          </h4>
          <div className="space-y-2">
            {accreditationLinks.map((link, i) => (
              <Link
                key={i}
                href={link.link}
                className="block text-sm text-white/80 hover:text-white hover:bg-white/10 p-2 rounded transition-all duration-200 hover:translate-x-1"
              >
                • {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ===== Complete Enquire Form ===== */}
      <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
        <h3 className="text-center text-lg font-bold mb-4 text-white">
          Apply Now
        </h3>
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Name & Email */}
          <input
            type="text"
            name="name"
            placeholder="Enter Name *"
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E85C0D] transition-all duration-300 text-sm"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Enter Email Address *"
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E85C0D] transition-all duration-300 text-sm"
            value={formData.email}
            onChange={handleInputChange}
            required
          />

          {/* Mobile */}
          <div className="flex gap-2">
            <select
              name="countryCode"
              className="w-24 border border-gray-300 rounded-md px-2 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#E85C0D] transition-all duration-300 text-sm"
              value={formData.countryCode}
              onChange={handleInputChange}
            >
              <option value="+91">+91</option>
              <option value="+92">+92</option>
            </select>
            <input
              type="tel"
              name="phone"
              placeholder="Mobile Number *"
              className="flex-1 border border-gray-300 rounded-md px-3 py-2 text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E85C0D] transition-all duration-300 text-sm"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* State & City */}
          <div className="grid grid-cols-2 gap-2">
            <select
              name="state"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#E85C0D] transition-all duration-300 text-sm"
              value={formData.state}
              onChange={handleInputChange}
              required
            >
              <option value="" disabled>
                State *
              </option>
              <option value="Maharashtra">Maharashtra</option>
              <option value="Karnataka">Karnataka</option>
            </select>
            <select
              name="city"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#E85C0D] transition-all duration-300 text-sm"
              value={formData.city}
              onChange={handleInputChange}
              required
            >
              <option value="" disabled>
                City *
              </option>
              <option value="Pune">Pune</option>
              <option value="Mumbai">Mumbai</option>
            </select>
          </div>

          {/* Discipline & Course */}
          <div className="space-y-2">
            <select
              name="discipline"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#E85C0D] transition-all duration-300 text-sm"
              value={formData.discipline}
              onChange={handleInputChange}
              required
            >
              <option value="" disabled>
                Select Discipline *
              </option>
              <option value="Engineering">Engineering</option>
              <option value="Management">Management</option>
            </select>
            <select
              name="course"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#E85C0D] transition-all duration-300 text-sm"
              value={formData.course}
              onChange={handleInputChange}
              required
            >
              <option value="" disabled>
                Select Course *
              </option>
              <option value="Computer Engineering">Computer Engineering</option>
              <option value="Mechanical Engineering">
                Mechanical Engineering
              </option>
              <option value="Artificial Intelligence and Data Science">
                AI & Data Science
              </option>
              <option value="Electronics and Telecommunication">ENTC</option>
              <option value="Information Technology">IT</option>
              <option value="MBA">MBA</option>
              <option value="MCA">MCA</option>
            </select>
          </div>

          {/* Program */}
          <select
            name="program"
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#E85C0D] transition-all duration-300 text-sm"
            value={formData.program}
            onChange={handleInputChange}
            required
          >
            <option value="" disabled>
              Select Program *
            </option>
            <option value="B.Tech">B.Tech</option>
            <option value="M.Tech">M.Tech</option>
            <option value="MBA">MBA</option>
            <option value="MCA">MCA</option>
            <option value="Integrated MBA">Integrated MBA</option>
            <option value="Integrated MCA">Integrated MCA</option>
          </select>

          {/* CET Score */}
          <input
            type="text"
            name="cetScore"
            placeholder="Enter CET Score"
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E85C0D] transition-all duration-300 text-sm"
            value={formData.cetScore}
            onChange={handleInputChange}
          />

          {/* Captcha */}
          <div className="flex gap-2 items-center">
            <div className="bg-gray-100 border border-gray-300 rounded-md w-1/2 flex items-center justify-center py-2 text-gray-700 font-bold select-none text-sm">
              8fcb09
            </div>
            <input
              type="text"
              name="captcha"
              placeholder="Enter Captcha"
              className="flex-1 border border-gray-300 rounded-md px-3 py-2 text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E85C0D] transition-all duration-300 text-sm"
              value={formData.captcha}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Checkbox */}
          <div className="flex items-start gap-2 mt-2">
            <input
              type="checkbox"
              id="agreeSidebar"
              className="mt-1 transition-all duration-300 hover:scale-110"
              required
            />
            <label
              htmlFor="agreeSidebar"
              className="text-xs text-white/80 leading-tight"
            >
              I agree to receive information regarding my submitted enquiry*
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#E85C0D] hover:bg-[#d14f08] text-white font-semibold py-3 rounded-md transition-all duration-300 hover:scale-105 hover:shadow-lg mt-4 text-sm"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
}
