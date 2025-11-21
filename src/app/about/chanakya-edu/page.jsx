"use client";
import react from "react";
import Image from "next/image";

export default function ChanakyaEdu() {
  const rightLinks = [
    "Overview",
    "Shree Chanakya Education Society",
    "Indira Group of Institute",
    "Chairpersons Profile & Chief Mentor IGL",
    "Sports",
    "Library",
    "Hostel",
    "Transport",
    "Canteen",
    "Gym",
    "Primary Health Centre",
    "Governance",
  ];

  const quickLinks = [
    "Eligibility & Fees",
    "Download Certificate Formats",
    "Admission Helpline",
    "Availability of Forms",
    "Apply Online",
  ];

  const trustees = [
    { name: "Smt. Sarita Shankar Wakalkar", role: "President" },
    { name: "Dr. Tarita Shankar", role: "Chief Managing Trustee and Founder Secretary" },
    { name: "Mr. Shardul Gangal", role: "Vice - President" },
    { name: "Mr. Sahil Tarita Shankar", role: "Joint Secretary" },
    { name: "Mr. Pilaji Sursingh Jadhavrao", role: "Treasurer" },
    { name: "Mr. Vasant Maruti Maske", role: "Trustee Member" },
    { name: "Mr. Shaan Tarita Shankar", role: "Trustee Member" },
  ];

  const institutes = [
    { name: "Indira Global Business School (IGBS)", url: "https://indiraigsb.edu.in/" },
    { name: "Indira College of Engineering & Management (ICEM)", url: "https://indiraicem.ac.in/" },
  ];

  return (
    <div className="w-full bg-white text-gray-800">
      {/* Hero Banner */}
     

      {/* Content Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 py-16 px-6">
        {/* Left Section */}
        <div className="md:w-2/3 bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-secondary mb-6">
            Shree Chanakya Education Society (SCES)
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            The <strong>Shree Chanakya Education Society (SCES)</strong> was established in February 1994 under the
            visionary leadership of <strong>Dr. Tarita Shankar</strong>, with the mission to provide high-quality
            postgraduate education in <strong>Business Management, International Business,</strong> and
            <strong> Information Technology</strong>. What began with just 60 students and a single program has
            evolved into a thriving academic ecosystem under the brand of <strong>Indira University</strong>, attracting
            over 8000 students from across India.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            During a period of significant economic transition in India, <strong>Dr. Tarita Shankar</strong> recognized
            the need for an education system that was practical, industry-aligned, and globally competitive. Her foresight
            laid the groundwork for an institution committed to delivering future-focused, value-driven education that
            continues to evolve with the demands of a dynamic world.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            Today, <strong>Indira University</strong> stands as a symbol of excellence in higher education, offering a
            wide array of undergraduate and postgraduate programs across disciplines. A key part of this academic journey
            is the <strong>Chanakya Campus</strong> located at Parandwadi, which offers premier <strong>Engineering</strong> and
            <strong> Management</strong> programs through state-of-the-art infrastructure, experienced faculty, and
            strong industry integration.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            SCES has always upheld high academic standards and has been instrumental in providing skilled talent to
            India’s industrial and service sectors. Guided by the core philosophy of offering
            <strong> “Management education in a corporate environment,”</strong> the institution seamlessly blends
            academic learning with real-world exposure.
          </p>

          <p className="text-gray-700 leading-relaxed mb-10">
            Backed by a committed team with deep expertise across academia, industry, and public service, SCES continues
            to shape professionals who are ethically grounded, technically proficient, and globally competitive.
          </p>

          {/* Board of Trustees Section */}
        
        </div>  

        {/* Right Section */}
        <div className="md:w-1/3 bg-primary text-white p-6 rounded-xl shadow-md flex flex-col justify-between">
          {/* About Links */}
          <ul className="space-y-4 w-full mb-8">
            {rightLinks.map((link, index) => (
              <li
                key={index}
                className="pb-2 border-b border-white/30 hover:text-black cursor-pointer transition-colors"
              >
                {link}
              </li>
            ))}
          </ul>

          {/* Contact Form */}
          <div className="bg-secondary/90 p-6 rounded-lg mb-8">
            <h3 className="text-center text-lg font-bold mb-4">GET IN TOUCH WITH US</h3>
            <form className="space-y-3">
              <input
                type="text"
                placeholder="YOUR NAME*"
                className="w-full p-2 text-black rounded focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <div className="flex items-center bg-white rounded">
                <span className="pl-2 text-gray-600">🇮🇳</span>
                <input
                  type="text"
                  placeholder="PHONE NUMBER*"
                  className="w-full p-2 text-black rounded-r focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <input
                type="email"
                placeholder="YOUR EMAIL ID"
                className="w-full p-2 text-black rounded focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <select className="w-full p-2 text-black rounded focus:outline-none focus:ring-2 focus:ring-primary">
                <option>Select Program</option>
                <option>Engineering</option>
                <option>MBA</option>
                <option>MCA</option>
              </select>
              <input
                type="text"
                placeholder="STATE"
                className="w-full p-2 text-black rounded focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <p className="text-xs text-white/70">
                By providing your contact details, you agree to receive updates from Indira College through WhatsApp.
              </p>
              <button
                type="submit"
                className="w-full bg-secondary text-white font-semibold py-2 rounded hover:bg-primary/90 transition"
              >
                Enquire Now
              </button>
            </form>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-center text-primary font-bold mb-4 border-t border-white/30 pt-4">
              QUICK LINKS
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 text-sm hover:text-primary cursor-pointer transition-colors"
                >
                  <span className="text-primary">•</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* IGI Section */}
      <div className="max-w-7xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-semibold text-secondary mb-6">
          About Indira Group of Institutes (IGI)
        </h2>

        <p className="text-gray-700 leading-relaxed mb-4">
          Established in 1994 under the visionary guidance of <strong>Dr. Tarita Shankar</strong>, the{" "}
          <strong>Indira Group of Institutes (IGI)</strong> in Pune has emerged as a premier educational institution
          dedicated to shaping future-ready professionals. Founded by the <strong>Shree Chanakya Education Society (SCES)</strong>,
          IGI was envisioned as a platform to nurture talent, foster innovation, and empower students with the knowledge
          and skills necessary to succeed in a rapidly evolving world.
        </p>

        <p className="text-gray-700 leading-relaxed mb-4">
          With a strong legacy spanning over three decades, IGI has consistently pursued academic excellence while promoting
          holistic development. The group has expanded its footprint to include <strong>12 distinguished institutes</strong>
          offering a wide array of programs across Management, Engineering, Information Technology, Pharmacy, Commerce, Science,
          and Mass Communication. This multi-disciplinary approach enables IGI to provide a seamless educational journey from
          <strong> Kindergarten to Doctorate</strong>, preparing students to excel at every stage of their academic and professional careers.
        </p>

        <p className="text-gray-700 leading-relaxed mb-4">
          At the heart of IGI’s philosophy is a commitment to <strong>student empowerment</strong>. The institutes focus not only
          on delivering high-quality education but also on developing critical thinking, leadership, and entrepreneurial skills.
          Students are encouraged to engage in practical learning experiences, research initiatives, industry collaborations, and
          community service, fostering an environment that promotes innovation, ethical values, and social responsibility.
        </p>

        <p className="text-gray-700 leading-relaxed mb-4">
          IGI takes pride in its <strong>state-of-the-art infrastructure</strong>, experienced faculty, and a supportive learning
          environment that encourages curiosity, creativity, and self-confidence. The campus culture is designed to inspire students
          to explore their potential fully, embrace challenges, and emerge as competent, confident, and socially conscious professionals.
        </p>

        <p className="text-gray-700 leading-relaxed mb-4">
          Over the years, IGI has built a strong network of alumni who have made significant contributions across industries,
          demonstrating the institute’s commitment to nurturing talent and leadership. By combining academic rigor with experiential
          learning and industry exposure, IGI equips its students to thrive in diverse professional landscapes, adapt to emerging trends,
          and lead with vision and integrity.
        </p>

        <p className="text-gray-700 leading-relaxed font-medium">
          As a beacon of educational excellence in Pune, the Indira Group of Institutes continues to innovate, inspire, and lead.
          With a forward-looking approach and a student-centric ethos, IGI remains dedicated to creating opportunities for growth,
          fostering lifelong learning, and preparing a generation of leaders who are ready to make a meaningful impact in the world.
        </p>
      </div>

      {/* Institutes Section */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
  <h3 className="text-2xl font-bold text-secondary mb-8">
    Institutes under Indira Group (IGI)
  </h3>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {institutes.map((inst, index) => (
      <div
        key={index}
        className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
      >
        <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-500 rounded-t-xl">
          [ Image Placeholder ]
        </div>
        <div className="p-4 text-center">
          <a
            href={inst.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-gray-800 text-base hover:text-secondary transition-colors duration-200"
          >
            {inst.name}
          </a>
        </div>
      </div>
    ))}
  </div>
</div>

    </div>
  );
}
