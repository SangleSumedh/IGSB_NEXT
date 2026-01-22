"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiX } from "react-icons/hi";
import { TbExternalLink } from "react-icons/tb";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { Menu } from "lucide-react";
import ApplyForm from "./home/ApplyForm";

const dropdownContent = {
  aboutUs: {
    title: "About Us",
    sections: [
      {
        label: "Home IGSB",
        link: "/",
      },
      {
        label: "Leaders Desk",
        link: "/leadersdesk",
      },
      {
        label: "Governance",
        link: "/about/governance",
      },
      {
        label: "Student Committees",
        link: "/campus-life/student-committees",
      },
      // {
      //   label: "Accrediations",
      //   link: "/Accrediation",
      // },
      {
        label: "Mandatory Disclosure",
        link: "/MandatoryDisclosure.pdf",
      },
    ],
  },

  campusLife: {
    title: "Campus Life",
    sections: [
      {
        label: "Student Induction",
        link: "/campus-life/student-induction",
      },
      // {
      //   label: "Student Interaction",
      //   link: "/campus-life/student-interaction"
      // },
      // {
      //   label: "Facilities",
      //   link: "/facilities"
      // },
      {
        label: "Facilities",
        link: "/Campus/Nature",
      },
      {
        label: "Events",
        link: "/Campus/Events",
      },
    ],
  },

  programs: {
    title: "Programs & Admission",
    sections: [
      {
        label: "MBA",
        link: "/programs/mba",
      },
      {
        label: "PhD",
        link: "/programs/phd",
      },
    ],
  },
};

const Navbar = () => {
  const [isHelplineOpen, setIsHelplineOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);

  const dropdownRef = useRef(null);
  const navbarRef = useRef(null);
  const modalRef = useRef(null);

  const toggleHelpline = () => setIsHelplineOpen(!isHelplineOpen);
  const toggleModal = () => setIsModalOpen(!isModalOpen);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        navbarRef.current &&
        !navbarRef.current.contains(event.target)
      ) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutsideModal = (event) => {
      if (
        isModalOpen &&
        modalRef.current &&
        !modalRef.current.contains(event.target)
      ) {
        setIsModalOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutsideModal);
    return () =>
      document.removeEventListener("mousedown", handleClickOutsideModal);
  }, [isModalOpen]);

  const toggleDropdown = (dropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  const toggleMobileDropdown = (dropdownName) => {
    setMobileDropdown(mobileDropdown === dropdownName ? null : dropdownName);
  };

  // Render compact dropdown for desktop
  const renderCompactDropdown = (content) => (
    <div
      ref={dropdownRef}
      className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-secondary rounded-lg shadow-xl border border-gray-200 min-w-[240px] z-50 animate-in fade-in-0 zoom-in-95 duration-200 overflow-hidden"
    >
      <div className="py-2">
        {content.sections.map((section, index) => (
          <div key={index} className="relative">
            {section.link && (
              <Link
                href={section.link}
                className="flex items-center justify-between px-4 py-3 text-sm text-white hover:bg-white/10 transition-colors duration-200 group border-b border-white/20 last:border-b-0"
                onClick={() => setActiveDropdown(null)}
              >
                <span className="font-medium">{section.label}</span>
                <TbExternalLink className="text-white/70 text-xs transition-transform duration-200 group-hover:translate-x-1 group-hover:scale-110" />
              </Link>
            )}

            {/* For sections with nested items */}
            {section.items && !section.title && (
              <div>
                <div className="px-4 py-2 text-xs font-semibold text-white/80 uppercase tracking-wider border-b border-white/20">
                  {section.label}
                </div>
                {section.items.map((item, itemIndex) => (
                  <Link
                    key={itemIndex}
                    href={item.link}
                    className="flex items-center justify-between px-6 py-3 text-sm text-white hover:bg-white/10 transition-colors duration-200 group border-b border-white/20 last:border-b-0"
                    onClick={() => setActiveDropdown(null)}
                  >
                    <span className="font-medium">{item.label}</span>
                    <TbExternalLink className="text-white/70 text-xs transition-transform duration-200 group-hover:translate-x-1 group-hover:scale-110" />
                  </Link>
                ))}
              </div>
            )}

            {/* For MBA/PhD sections with title */}
            {section.title && (
              <div>
                <div className="px-4 py-2 text-xs font-semibold text-white/80 uppercase tracking-wider border-t border-white/20 first:border-t-0 border-b border-white/20">
                  {section.title}
                </div>
                {section.items.map((item, itemIndex) => (
                  <Link
                    key={itemIndex}
                    href={item.link}
                    className="flex items-center justify-between px-6 py-3 text-sm text-white hover:bg-white/10 transition-colors duration-200 group border-b border-white/20 last:border-b-0"
                    onClick={() => setActiveDropdown(null)}
                  >
                    <span className="font-medium">{item.label}</span>
                    <TbExternalLink className="text-white/70 text-xs transition-transform duration-200 group-hover:translate-x-1 group-hover:scale-110" />
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  // Render mobile dropdown
  const renderMobileDropdown = (content, dropdownName) => (
    <div className="bg-secondary/10 rounded-lg mt-1 overflow-hidden animate-in fade-in-0 slide-in-from-top-2 duration-200">
      {content.sections.map((section, index) => (
        <div key={index}>
          {/* Simple link sections */}
          {section.link && (
            <Link
              href={section.link}
              className="flex items-center justify-between px-4 py-3 text-sm text-gray-700 hover:bg-secondary/20 transition-colors duration-200 border-b border-secondary/20 last:border-b-0"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="font-medium">{section.label}</span>
              <TbExternalLink className="text-secondary text-xs transition-transform duration-200 hover:translate-x-1 hover:scale-110" />
            </Link>
          )}

          {/* Nested items sections */}
          {section.items && (
            <div>
              {section.label && !section.title && (
                <div className="px-4 py-2 text-xs font-semibold text-secondary uppercase tracking-wider bg-secondary/10 border-b border-secondary/20">
                  {section.label}
                </div>
              )}
              {section.title && (
                <div className="px-4 py-2 text-xs font-semibold text-secondary uppercase tracking-wider bg-secondary/10 border-b border-secondary/20">
                  {section.title}
                </div>
              )}
              {section.items.map((item, itemIndex) => (
                <Link
                  key={itemIndex}
                  href={item.link}
                  className="flex items-center justify-between px-6 py-3 text-sm text-gray-700 hover:bg-secondary/20 transition-colors duration-200 border-b border-secondary/20 last:border-b-0"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="font-medium">{item.label}</span>
                  <TbExternalLink className="text-secondary text-xs transition-transform duration-200 hover:translate-x-1 hover:scale-110" />
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );

  return (
    <>
      {/* ===== NAVBAR ===== */}
      <nav
        ref={navbarRef}
        className="w-full h-[12vh] flex justify-between bg-white text-black shadow-sm font-sans fixed top-0 left-0 right-0 z-50"
      >
        {/* Left: Logo */}
   {/* Left: Logo */}
<div className="w-[60%] md:w-[29%] lg:w-[25%] xl:w-[30%] h-full flex items-center justify-start pl-2 md:pl-3">
  <Link href="/" className="flex items-center h-full">
    <Image
      src="/Logo.png"
      alt="Logo"
      height={340}
      width={340}
      className="
        h-[92%] md:h-[78%]
        w-auto 
        cursor-pointer 
        object-contain 
        transition-transform 
        duration-300
      "
      priority
      fetchPriority="high"
      unoptimized={true}
    />
  </Link>
</div>


        {/* Right Section - Desktop */}
        <div className="hidden md:flex w-[70%] h-full flex-col">
          {/* Top Bar */}
          <div className="flex justify-end w-full h-[45%] text-[0.75rem] lg:text-sm">
            <div className="flex gap-2 lg:gap-4">
              <div className="flex items-center gap-2 md:gap-2 lg:gap-4 font-semibold">
               {/* <Link
                  href="/FRA"
                  className="relative inline-block group hover:text-primary transition-colors duration-200"
                >
                  FRA Fee Structure
                  <span className="absolute left-0 -bottom-1 h-[6px] w-full scale-x-0 bg-primary opacity-70 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
                </Link>
                <span className="text-secondary">|</span> */}
                <a
                  href="https://rapid.grayquest.com/iudp-master"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-block group hover:text-secondary transition-colors duration-200"
                >
                  Pay Fee
                  <span className="absolute left-0 -bottom-1 h-[6px] w-full scale-x-0 bg-primary opacity-70 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
                </a>

                <span className="text-secondary">|</span>
                <a
                  href="http://220.226.204.21/login.aspx/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-block group hover:text-secondary transition-colors duration-200"
                >
                  ERP Login
                  <span className="absolute left-0 -bottom-1 h-[6px] w-full scale-x-0 bg-primary opacity-70 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
                </a>

                <span className="text-secondary">|</span>
                <a
                  href="https://app.joinsuperset.com/join/#/signup/student/placements/621c7653-bdeb-4ee2-bb72-765e5d1d9635"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-block group hover:text-secondary transition-colors duration-200"
                >
                  Superset
                  <span className="absolute left-0 -bottom-1 h-[6px] w-full scale-x-0 bg-primary opacity-70 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
                </a>

                <span className="text-secondary">|</span>

                <Link
                  href="/MeritList"
                  className="relative inline-block group  hover:text-primary transition-colors duration-200"
                >
                  Merit List
                  <span className="absolute left-0 -bottom-1 h-[6px] w-full scale-x-0 bg-primary opacity-70 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
                </Link>
                <span className="text-secondary">|</span>

                <Link
                  href="/contact"
                  className="relative inline-block group hover:text-primary transition-colors duration-200"
                >
                  Contact Us
                  <span className="absolute left-0 -bottom-1 h-[6px] w-full scale-x-0 bg-primary opacity-70 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
                </Link>
                <span className="text-secondary">|</span>
                <Link
                  href="/blogs"
                  className="relative inline-block group hover:text-primary transition-colors duration-200"
                >
                  Blogs
                  <span className="absolute left-0 -bottom-1 h-[6px] w-full scale-x-0 bg-primary opacity-70 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
                </Link>
                </div>
 

              {/* Enquire Now Button */}
              <div className="flex justify-center items-center">
                <button
                  onClick={toggleModal}
                  className="bg-[#10404A] hover:!bg-[#fc7116] h-[80%] hover:text-gray-800 text-gray-50 px-6 rounded-bl-sm text-sm font-semibold relative overflow-hidden transition-all duration-300"
                >
                  <span>Enquire Now</span>
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Nav Links with Dropdowns */}
          <div className="flex justify-end items-center gap-2 md:gap-2 lg:gap-5 h-[55%] text-[0.74rem] lg:text-sm font-bold lg:font-bold whitespace-nowrap relative">
            {/* About Us with dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("aboutUs")}
                className="flex h-full items-center px-2 lg:px-3 gap-1 hover:text-secondary transition-all duration-200 group"
              >
                <span className="relative">
                  About Us
                  <span className="absolute left-0 -bottom-1 h-[6px] w-full scale-x-0 bg-primary opacity-70 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
                </span>
                <FiChevronDown
                  className={`w-3 h-3 transition-transform duration-200 ${
                    activeDropdown === "aboutUs" ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* About Us Dropdown */}
              {activeDropdown === "aboutUs" &&
                renderCompactDropdown(dropdownContent.aboutUs)}
            </div>

            {/* Campus Life with dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("campusLife")}
                className="flex items-center gap-1 md:px-2 hover:text-secondary transition-all duration-200 group"
              >
                <span className="relative">
                  Campus Life
                  <span className="absolute left-0 -bottom-1 h-[6px] w-full scale-x-0 bg-primary opacity-70 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
                </span>
                <FiChevronDown
                  className={`w-3 h-3 transition-transform duration-200 ${
                    activeDropdown === "campusLife" ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Campus Life Dropdown */}
              {activeDropdown === "campusLife" &&
                renderCompactDropdown(dropdownContent.campusLife)}
            </div>

            {/* Programs & Admission with dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("programs")}
                className="flex items-center gap-1 px-2 lg:px-3 hover:text-secondary transition-all duration-200 group"
              >
                <span className="relative">
                  Programee & Admission
                  <span className="absolute left-0 -bottom-1 h-[6px] w-full scale-x-0 bg-primary opacity-70 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
                </span>
                <FiChevronDown
                  className={`w-3 h-3 transition-transform duration-200 ${
                    activeDropdown === "programs" ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Programs & Admission Dropdown */}
              {activeDropdown === "programs" &&
                renderCompactDropdown(dropdownContent.programs)}
            </div>

            {/* Single Links (no dropdown) */}
            <Link
              href="/placement"
              className="hover:text-secondary px-2 lg:px-3 transition-colors duration-200 group"
            >
              <span className="relative">
                Placement
                <span className="absolute left-0 -bottom-1 h-[6px] w-full scale-x-0 bg-primary opacity-70 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
              </span>
            </Link>

            <Link
              href="/alumni"
              className="hover:text-secondary px-2 lg:px-3 transition-colors duration-200 group"
            >
              <span className="relative">
                Alumni
                <span className="absolute left-0 -bottom-1 h-[6px] w-full scale-x-0 bg-primary opacity-70 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
              </span>
            </Link>

            <Link
              href="/research"
              className="hover:text-secondary px-2 lg:px-3 transition-colors duration-200 group"
            >
              <span className="relative">
                Research
                <span className="absolute left-0 -bottom-1 h-[6px] w-full scale-x-0 bg-primary rounded-md opacity-70 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
              </span>
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden w-[20%] flex items-center justify-center pr-4">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-700 hover:text-primary transition-all duration-300 hover:scale-110"
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Add padding to main content to account for fixed navbar */}
      <div className="pt-[12vh]"></div>

      {/* Mobile Menu - Slides from bottom to top */}
      {isMobileMenuOpen && (
        <>
          {/* Overlay */}
          <div
            className="md:hidden fixed inset-0  bg-opacity-50 z-40 animate-in fade-in-0 duration-300"
            onClick={toggleMobileMenu}
          />

          {/* Mobile Menu Panel */}
          <div
            className={`md:hidden fixed bottom-0 left-0 right-0 bg-white rounded-t-2xl shadow-2xl z-50 transform transition-all duration-500 ease-[cubic-bezier(0.25,0.8,0.25,1)] ${
              isMobileMenuOpen ? "translate-y-0" : "translate-y-full"
            }`}
            style={{ maxHeight: "85vh" }}
          >
            {/* Header with Close Button */}
            <div className="flex justify-between items-center p-4 border-b border-gray-200">
              <h2 className="text-base font-semibold text-gray-900">Menu</h2>
              <button
                onClick={toggleMobileMenu}
                className="text-gray-700 hover:text-gray-900 transition-all duration-300 hover:scale-110"
              >
                <HiX size={22} />
              </button>
            </div>

            {/* Scrollable Content */}
            <div
              className="overflow-y-auto"
              style={{ maxHeight: "calc(85vh - 60px)" }}
            >
              <div className="p-3 space-y-0">
                {/* Quick Links Dropdown */}
                <div className="border-b border-gray-200">
                  <button
                    onClick={() => toggleMobileDropdown("quickLinks")}
                    className="w-full flex justify-between items-center py-3 text-left font-medium text-gray-900 text-sm hover:text-primary transition-all duration-200"
                  >
                    <span>Quick Links</span>
                    <span className="text-lg transition-transform duration-300">
                      {mobileDropdown === "quickLinks" ? (
                        <FiChevronUp className="w-4 h-4" />
                      ) : (
                        <FiChevronDown className="w-4 h-4" />
                      )}
                    </span>
                  </button>

                  {mobileDropdown === "quickLinks" && (
                    <div className="bg-gray-50 rounded-lg mt-1 overflow-hidden animate-in fade-in-0 slide-in-from-top-2 duration-200">
                      <ul className="space-y-1 text-xs font-medium text-gray-700">
                        {[
                          {
                            label: "Pay Fee",
                            href: "https://rapid.grayquest.com/iudp-master",
                          },
                          {
                            label: "ERP Login",
                            href: "http://220.226.204.21/login.aspx/",
                          },
                          {
                            label: "Superset",
                            href: "https://app.joinsuperset.com/join/#/signup/student/placements/621c7653-bdeb-4ee2-bb72-765e5d1d9635",
                          },
                          {
                            label: "Contact Us",
                            href: "/contact",
                          },
                          {
                            label: "Blogs",
                            href: "/blogs",
                          },
                        ].map((item, index) => (
                          <li
                            key={index}
                            className="animate-in fade-in-0 slide-in-from-left-2 duration-300"
                            style={{ animationDelay: `${index * 50}ms` }}
                          >
                            <a
                              href={item.href}
                              target={
                                item.href.startsWith("http")
                                  ? "_blank"
                                  : "_self"
                              }
                              rel={
                                item.href.startsWith("http")
                                  ? "noopener noreferrer"
                                  : ""
                              }
                              className="flex items-center justify-between px-4 py-2 hover:bg-gray-100 transition-all duration-200 hover:translate-x-1"
                            >
                              {item.label}
                              <TbExternalLink className="text-gray-900 text-xs transition-transform duration-200 hover:scale-110" />
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* About Us */}
                <div className="border-b border-gray-200">
                  <button
                    onClick={() => toggleMobileDropdown("aboutUs")}
                    className="w-full flex justify-between items-center py-3 text-left font-medium text-gray-900 text-sm hover:text-primary transition-all duration-200"
                  >
                    <span>About Us</span>
                    <span className="text-lg transition-transform duration-300">
                      {mobileDropdown === "aboutUs" ? (
                        <FiChevronUp className="w-4 h-4" />
                      ) : (
                        <FiChevronDown className="w-4 h-4" />
                      )}
                    </span>
                  </button>
                  {mobileDropdown === "aboutUs" &&
                    renderMobileDropdown(dropdownContent.aboutUs, "aboutUs")}
                </div>

                {/* Campus Life */}
                <div className="border-b border-gray-200">
                  <button
                    onClick={() => toggleMobileDropdown("campusLife")}
                    className="w-full flex justify-between items-center py-3 text-left font-medium text-gray-900 text-sm hover:text-primary transition-all duration-200"
                  >
                    <span>Campus Life</span>
                    <span className="text-lg transition-transform duration-300">
                      {mobileDropdown === "campusLife" ? (
                        <FiChevronUp className="w-4 h-4" />
                      ) : (
                        <FiChevronDown className="w-4 h-4" />
                      )}
                    </span>
                  </button>
                  {mobileDropdown === "campusLife" &&
                    renderMobileDropdown(
                      dropdownContent.campusLife,
                      "campusLife",
                    )}
                </div>

                {/* Programs & Admission */}
                <div className="border-b border-gray-200">
                  <button
                    onClick={() => toggleMobileDropdown("programs")}
                    className="w-full flex justify-between items-center py-3 text-left font-medium text-gray-900 text-sm hover:text-primary transition-all duration-200"
                  >
                    <span>Programs & Admission</span>
                    <span className="text-lg transition-transform duration-300">
                      {mobileDropdown === "programs" ? (
                        <FiChevronUp className="w-4 h-4" />
                      ) : (
                        <FiChevronDown className="w-4 h-4" />
                      )}
                    </span>
                  </button>
                  {mobileDropdown === "programs" &&
                    renderMobileDropdown(dropdownContent.programs, "programs")}
                </div>

                {/* Single Links */}
                {[
                  { label: "Placement", href: "/placement" },
                  { label: "Alumni", href: "/alumni" },
                  { label: "Research", href: "/research" },
                ].map((item, index) => (
                  <div key={index} className="border-b border-gray-200">
                    <Link
                      href={item.href}
                      className="flex items-center justify-between py-3 text-sm font-medium text-gray-900 hover:text-primary transition-all duration-200 hover:translate-x-1"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                      <TbExternalLink className="text-gray-900 text-xs transition-transform duration-200 hover:scale-110" />
                    </Link>
                  </div>
                ))}
              </div>

              {/* Compact Enquire Now Button */}
              <div className="p-3 border-t border-gray-200 bg-gray-50">
                <button
                  onClick={() => {
                    toggleModal();
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full bg-secondary text-white py-2 text-sm font-semibold rounded-md transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  Enquire Now
                </button>
              </div>
            </div>
          </div>
        </>
      )}

 

      {/* ===== APPLY NOW MODAL ===== */}
    {isModalOpen && (
  <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center z-[60] animate-in fade-in-0 duration-300">
    <div ref={modalRef} className="max-w-4xl relative">
      <ApplyForm variant="modal" onClose={() => setIsModalOpen(false)} />
    </div>
  </div>
)}

    </>
  );
};

export default Navbar;
