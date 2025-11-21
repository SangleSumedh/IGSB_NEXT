"use client";
import Image from "next/image";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import Sidebar from "@/components/Sidebar";

export default function Overview() {
  const leaders = [
    {
      name: "Dr. Nilesh Uke",
      designation:
        "Principal, Indira College of Engineering and Management, Pune.",
    },
    {
      name: "Dr. Soumitra S Das",
      designation:
        "Vice-Principal, Indira College of Engineering and Management, Pune.",
    },
    {
      name: "Dr. Saurabh Harishchand Gupta",
      designation:
        "Dean Academics, Indira College of Engineering and Management, Pune.",
    },
  ];

  const hods = [
    { name: "Dr. Mahesh G. Bhong", designation: "HoD Mechanical Engineering." },
    { name: "Prof. Savita Jangale", designation: "I/C HoD Civil Engineering." },
    { name: "Dr. Soumitra S Das", designation: "HoD Computer Engineering." },
    { name: "Dr. Poorna Shankar", designation: "HoD First Year Engineering." },
    {
      name: "Dr. Manjusha Tatiya",
      designation: "HoD Artificial Intelligence and Data Science.",
    },
    {
      name: "Dr. Archana Salve",
      designation: "HoD Master of Business Administration.",
    },
    {
      name: "Dr. Darshana Desai",
      designation: "HoD Master of Computer Applications.",
    },
    {
      name: "Prof. Dhiraj S. Bhagwate",
      designation: "HoD Electronics and Telecommunication Engineering.",
    },
    {
      name: "Dr. Awantika Bijwe",
      designation: "HoD Bachelor of Computer Applications.",
    },
    {
      name: "Dr. Deepa Jamnik",
      designation: "HoD Bachelor of Business Administration.",
    },
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
      <div className="w-full h-[60vh] relative">
        <Image
          src="/BannerOverviewPage.jpg"
          alt="ICEM Campus"
          className="w-full h-full object-cover"
          height={600}
          width={1700}
        />
      </div>

      {/* Content Section */}
      <div className="w-full flex flex-col md:flex-row">
        {/* Left Section */}
        <div className="md:w-3/4 space-y-12">
          {/* Main About Content */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold text-secondary mb-6">
              About Us
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              Indira College of Engineering and Management (ICEM), Pune,
              established in 2007 under the esteemed Indira Group of Institutes,
              is a premier autonomous institution recognized for its commitment to
              academic excellence, innovation, and holistic student development.
              The college is approved by the All India Council for Technical
              Education (AICTE), New Delhi, affiliated to Savitribai Phule Pune
              University, and conferred autonomous status by the UGC. ICEM is also
              proudly NAAC-accredited, reaffirming its position as one of the top
              engineering and management institutes in Pune.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              ICEM hosts a diverse student body of over 1500 learners, offering a
              broad spectrum of undergraduate, postgraduate, and integrated
              programs.
            </p>

            <h3 className="text-xl font-semibold text-primary mt-6 mb-3">
              Our Programs:
            </h3>

            <p className="text-gray-700 mb-2 font-medium">
              Undergraduate Engineering Programs in:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>Artificial Intelligence & Data Science</li>
              <li>Information Technology</li>
              <li>Computer Engineering</li>
              <li>Electronics & Telecommunication Engineering</li>
              <li>Mechanical Engineering</li>
            </ul>

            <p className="text-gray-700 mb-2 font-medium">
              Postgraduate Engineering Programs (M.E.) in:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>Computer Engineering</li>
              <li>Mechanical Engineering</li>
            </ul>

            <p className="text-gray-700 mb-2 font-medium">Integrated Programs:</p>
            <ul className="list-disc list-inside text-gray-700 mb-6">
              <li>Integrated MBA (BBA + MBA)</li>
              <li>Integrated MCA (BCA + MCA)</li>
            </ul>

            <p className="text-gray-700 leading-relaxed mb-4">
              Through a well-balanced academic structure, ICEM blends theoretical
              learning with practical application. Our students gain hands-on
              exposure through industry-relevant projects, expert-led workshops,
              field visits, and case studies, ensuring they are industry-ready
              from day one.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              A standout feature of ICEM is its strong industry-academia
              interface, supported by collaborations and MoUs with prominent
              organizations and international institutions, including a key
              partnership with the University of Nottingham, Malaysia. These
              collaborations enable us to offer value-added programs conducted by
              industry experts, such as:
            </p>

            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>Workshops on emerging technologies</li>
              <li>Career-readiness and placement preparation bootcamps</li>
              <li>Advanced domain-specific certifications</li>
              <li>Entrepreneurship and innovation programs</li>
              <li>Professional skill development and etiquette training</li>
              <li>Mentorship and guest lectures by leading industry professionals</li>
            </ul>

            <p className="text-gray-700 leading-relaxed mb-4">
              Our Scholar Clubs further enrich the student experience by
              recognizing and supporting academic talent through personalized
              mentoring in leadership, communication, ethics, and presentation
              skills.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              Our ultra-modern classrooms and labs, equipped with ICT panels, are
              renovated to meet global standards, providing a future-ready
              learning environment. With a highly qualified faculty, robust
              industry connections, and a student-centric approach, ICEM equips
              future engineers and managers to thrive in a dynamic, global
              environment.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              ICEM boasts an impressive placement record, with students securing
              opportunities in leading national and international companies across
              various industries. Our strong industry connections and career
              readiness programs ensure successful placements in top-tier
              organizations worldwide.
            </p>

            <p className="text-gray-700 leading-relaxed font-medium">
              We are proud to nurture the innovators, leaders, and change-makers
              of tomorrow.
            </p>
          </div>

          {/* Shree Chanakya Education Society Section */}
          <div className="bg-white p-6 rounded-xl shadow-md">
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
              India's industrial and service sectors. Guided by the core philosophy of offering
              <strong> "Management education in a corporate environment,"</strong> the institution seamlessly blends
              academic learning with real-world exposure.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Backed by a committed team with deep expertise across academia, industry, and public service, SCES continues
              to shape professionals who are ethically grounded, technically proficient, and globally competitive.
            </p>
          </div>

          {/* Chairperson's Message Section */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-2xl font-bold text-secondary mb-6">Chairperson & Chief Mentor's - IGI Message</h3>
            <div className="flex flex-col md:flex-row gap-8 bg-gray-50 rounded-xl p-6">
              
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

          {/* IGI Section */}
          <div className="bg-white p-6 rounded-xl shadow-md">
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
              At the heart of IGI's philosophy is a commitment to <strong>student empowerment</strong>. The institutes focus not only
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
              demonstrating the institute's commitment to nurturing talent and leadership. By combining academic rigor with experiential
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
          <div className="bg-white p-6 rounded-xl shadow-md">
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

          {/* Leader's Desk */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-2xl font-bold text-secondary mb-8">
              Leader's Desk
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {leaders.map((leader, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center p-4 border border-gray-100"
                >
                  <div className="w-full h-64 bg-gray-100 rounded-t-xl flex items-center justify-center text-gray-500 text-sm">
                    [ Image Placeholder ]
                  </div>
                  <div className="mt-4">
                    <h4 className="font-semibold text-gray-800">{leader.name}</h4>
                    <p className="text-sm text-gray-600">{leader.designation}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

            <div className="w-full px-6 pb-20">
        <h3 className="text-2xl font-bold text-secondary mb-8">
          Head of Departments (HoDs)
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {hods.map((hod, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center p-4 border border-gray-100"
            >
              <div className="w-full h-60 bg-gray-100 rounded-t-xl flex items-center justify-center text-gray-500 text-sm">
                [ Image Placeholder ]
              </div>
              <div className="mt-4">
                <h4 className="font-semibold text-gray-800">{hod.name}</h4>
                <p className="text-sm text-gray-600">{hod.designation}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
        </div>

        {/* Right Section - Sidebar */}
        <div className="md:w-1/4">
          <Sidebar />
        </div>
      </div>

      {/* HOD Section - Full Width */}
    
    </div>
  );
}