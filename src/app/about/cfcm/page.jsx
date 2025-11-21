"use client";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

export default function CFCM() {
  return (
    <div className="w-full bg-white text-gray-800">
      {/* Chairperson's Message */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h3 className="text-2xl font-bold text-secondary mb-6">Chairperson & Chief Mentor's - IGI Message</h3>
        <div className="flex flex-col md:flex-row gap-8 bg-gray-50 rounded-xl p-6 shadow-md">
          
          {/* Left Side - Image Placeholder + Socials */}
          <div className="md:w-1/3">
            {/* Image Placeholder */}
            <div className="w-full h-[380px] bg-gray-200 flex items-center justify-center text-gray-500 rounded-lg">
              [ Image Placeholder ]
            </div>

            <div className="flex justify-center gap-4 mt-3 text-gray-700 text-lg">
              <FaFacebookF className="hover:text-primary transition-colors cursor-pointer" />
              <FaLinkedinIn className="hover:text-primary transition-colors cursor-pointer" />
              <FaInstagram className="hover:text-primary transition-colors cursor-pointer" />
              <FaTwitter className="hover:text-primary transition-colors cursor-pointer" />
              <FaYoutube className="hover:text-primary transition-colors cursor-pointer" />
            </div>

            <div className="mt-3 text-center">
              <h4 className="font-semibold text-lg">DR. TARITA SHANKAR</h4>
              <p className="text-sm text-gray-600">
                CHAIRPERSON & CHIEF MENTOR<br />
                INDIRA GROUP OF INSTITUTES, PUNE
              </p>
              
            </div>
          </div>

          {/* Right Side - Message Content */}
          <div className="md:w-2/3 text-gray-700 leading-relaxed">
            <blockquote className="border-l-4 border-primary pl-4 mb-6 italic text-gray-600">
              "Education is not just about learning facts; it is about igniting curiosity, nurturing innovation, and shaping leaders who can create a meaningful impact in the world."
              <br />
              <span className="font-semibold">— Dr. Tarita Shankar</span>
            </blockquote>

            <p className="mb-4 font-semibold">Dear Students,</p>
            
            <p className="mb-4">
              Welcome to Indira College of Engineering and Management (ICEM), a place where innovation meets excellence.
            </p>

            <p className="mb-4">
              At ICEM, we are committed to providing a transformative educational experience that goes beyond traditional learning. Our mission is to nurture students into competent professionals who are equipped to lead in the ever-evolving technological landscape.
            </p>

            <p className="mb-4">
              We believe in fostering an environment that encourages creativity, critical thinking, and ethical practices. Our state-of-the-art infrastructure, experienced faculty, and industry collaborations ensure that our students receive a comprehensive education that prepares them for the challenges of tomorrow.
            </p>

            <p className="mb-4">
              As you embark on this journey, remember that success is not just about acquiring knowledge but also about developing the right attitude and values. At ICEM, we strive to instil a sense of responsibility, integrity, and a passion for continuous learning in every student.
            </p>

            <p>
              We are here to support you at every step, guiding you towards achieving your goals and realizing your full potential.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}