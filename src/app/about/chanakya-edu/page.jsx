"use client";
import React, { useState } from "react";
import Image from "next/image";

const ChanakyaEdu = () => {
  const trustees = [
    {
      name: "Smt. Sarita Shankar Wakalkar",
      role: "President",
      image: "/banners/sarita-shankar.jpeg",
    },
    {
      name: "Dr. Tarita Shankar",
      role: "Chief Managing Trustee and Founder Secretary",
      image: "/banners/dr-tarita-shankar-chairperson.png",
    },
    {
      name: "Mr. Shardul Nitin Gangal",
      role: "Vice - President",
      image: "/banners/Mr-Shardul-Gangal.webp",
    },
    {
      name: "Mr. Sahil Tarita Shankar",
      role: "Joint Secretary",
      image: "/banners/Sahil-Mehendale.jpg",
    },
    {
      name: "Mr. Pilaji Sursingh Jadhavrao",
      role: "Treasurer",
      image: "/banners/pilaji-sursingh-jadhavrao.jpg",
    },
    {
      name: "Mr. Vasant Maruti Maske",
      role: "Trustee Member",
      image: "/banners/VASANT-MARUTI-MASKE.png",
    },
    {
      name: "Mr. Shaan Tarita Shankar",
      role: "Trustee Member",
      image: "/banners/SHAAN-ADITYA-MEHENDALE.png",
    },
  ];

  const tabs = [
    "Research",
    "Awards",
    "Education",
    "Consultancy",
    "Resource Person",
  ];
  const [activeTab, setActiveTab] = useState("Research");
  const [activeYear, setActiveYear] = useState("AY 2024");

  return (
    <div className="w-full bg-white text-gray-800">
      <div className="relative w-full h-[40vh] sm:h-[50vh] lg:h-[70vh]">
        <Image
          src="/AboutBanner1.jpg"
          alt="About Banner"
          fill
          priority
          className="object-cover"
        />
      </div>
      {/* Main Container */}
      <div className="max-w-7xl mx-auto py-16 px-6 space-y-20">
        {/* SCES Section */}
        <section id="about-sces" className="relative scroll-mt-[15vh]">
          <div className="bg-white p-8 rounded-xl shadow-lg ">
            <h2 className="text-2xl md:text-4xl font-bold text-secondary mb-6">
              Shree Chanakya Education Society (SCES)
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg text-justify">
              The Shree Chanakya Education Society (SCES) was established in
              February 1994, under the visionary leadership of Dr. Tarita
              Shankar, with the aim of providing top quality post-graduate
              education in the ﬁelds of Business Management, International
              Business and Information Technology. By consistently providing
              quality education over the past few decades, institutes at Indira
              Group is now considered as one of the best institutes in Pune. At
              a time when India was struggling to put its economy back on its
              feet, after the nation having pawned the “family jewels” just to
              keep aﬂoat, Dr. Tarita Shankar sensed that education too would
              have to become more broad based and more vocational in nature if
              India was to stand up to the world competition in quality and
              price for its products, The then Finance Minister had prescribed
              for the economy and so, in 1994, began a saga of growth and
              quality in education; a story that is just reaching its zenith
              with 14 full ﬂedged Institutes registering a strong presence on
              Pune’s educational horizon. Since inception, the Institutes
              managed by SCES, have maintained high academic standards and have
              successfully provided trained manpower to the industrial and
              services sector of the country. These institutes are now listed
              amongst the top colleges not just in Pune, but also in Maharashtra
              and India. With a modest strength of 60 students pursuing a single
              course, SCES has grown steadily and today boasts of 14 Institutes,
              having more than 8000 students from all over India pursuing
              multi-disciplinary, graduate & post-graduate programs. The
              objective of the institute is providing ‘Management education in a
              corporate environment’, has been possible due to the sincere and
              dedicated efforts of the members of SCES, who have invaluable
              experience in varied areas like academics, industry, service and
              social-world.
            </p>
          </div>
        </section>

        {/* Board of Trustees Section */}
        <section id="about-trustees" className="relative scroll-mt-[15vh]">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl md:text-4xl font-bold text-secondary mb-2">
              Board of Trustees
            </h2>
            <p className="text-gray-600 text-lg mb-10">
              Managing Committee Members/Trustees of 'Shree Chanakya Education
              Society'
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {trustees.map((person, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-secondary group"
                >
                  <div className="w-full h-90 bg-gray-100 flex items-center justify-center text-gray-400 rounded-t-xl group-hover:bg-gray-50 transition-colors overflow-hidden">
                    <Image
                      src={person.image}
                      alt={person.name}
                      width={400}
                      height={320}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="p-5 text-center">
                    <h4 className="font-bold text-gray-800 text-lg group-hover:text-secondary transition-colors">
                      {person.name}
                    </h4>
                    <p className="text-gray-600 mt-2">{person.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About IGSB Section - UPDATED */}
        <section id="about-igsb" className="relative scroll-mt-[15vh]">
          <div className="bg-white p-8 rounded-xl shadow-lg ">
            <h2 className="text-2xl md:text-4xl font-bold text-secondary mb-6">
              About Indira Global School of Business
            </h2>
            <div className="text-gray-700 leading-relaxed text-lg text-justify space-y-6">
              <p>
                About Indira Global School of Business (IGSB) has been
                established with the explicit vision to train managers with a
                global perspective who can provide sustainable impetus to growing
                international business. IGSB has established its presence in Pune
                as a premier B- School offering MBA (MBA and MBA - Services
                Management) affiliated to Savitribai Phule Pune University and
                approved by AICTE, New Delhi. As a driving philosophy, the
                belief is that the emerging global environment has created a
                scenario where managers have to face greater situational
                challenges, predict and handle the vagaries of the market and
                provide sustainable strategic solutions to corporate issues. The
                current global economy has created an environment where managers
                have to face greater situational challenges; predict and handle
                the impulses of the market and provide quality service
                management. Such an environment requires professional graduates
                not only armed with the necessary knowledge but also the
                confidence of facing extreme competition with greater
                articulation.
              </p>
              <p>
                The IGSB campus is located imposingly adjoining the Mumbai-Pune
                Expressway, on a beautiful site amidst open fields and clusters
                of large trees in a beautiful, green valley which gives a sense
                of endless space to the quest of mind and soul. The
                infrastructure is dynamic in nature because of our constant
                attempt to maintain pace with the development opportunities
                available to us. Our infrastructure acts as a facilitator for the
                effective delivery of our curriculum and nurtures the quest for
                knowledge. The MBA programs (MBA and MBA - Services Management)
                at IGSB equip students with fresh insights and alternative ways
                of thinking, helping them to succeed in highly unpredictable and
                non-linear conditions, making global leaders out of them.
              </p>
            </div>
          </div>
        </section>

        <section id="about-vision" className="relative scroll-mt-[15vh] space-y-10">
          {/* Vision */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl md:text-4xl font-bold text-secondary mb-6">
              Vision
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              "Indira Global School of Business will be a preferred center of
              academic excellence for developing dynamic management
              practitioners who will be globally competent and socially
              responsible business leaders with a purpose driven life."
            </p>
          </div>

          {/* Mission */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl md:text-4xl font-bold text-secondary mb-6">
              Mission
            </h2>

            <ul className="list-disc pl-6 space-y-4 text-gray-700 leading-relaxed text-lg text-justify">
              <li>
                To mentor budding managers, global business leaders and
                encourage entrepreneurs by promoting a learning environment to
                create and lead sustainable business.
              </li>
              <li>
                To enable stakeholders to cultivate strategic alliance that
                promote cross-cultural, social sensitivity, academic excellence,
                research and consultancy aimed at attaining comprehensive
                development.
              </li>
            </ul>
          </div>
        </section>

        {/* Chairperson Section - UPDATED */}
       {/* Chairperson Section */}
<section id="about-chairperson" className="relative scroll-mt-[15vh]">
  <div className="bg-white p-8 rounded-xl shadow-lg">
    <h2 className="text-3xl font-bold text-secondary mb-10">
      Chairperson & Chief Mentor's – IGI Message
    </h2>

    <div className="flex flex-col lg:flex-row items-start gap-12 bg-white p-8 rounded-xl border border-gray-100">
      <div className="lg:w-2/5 w-full">
        <div className="relative rounded-2xl overflow-hidden shadow-lg mb-10">
          <Image
            src="/TaritaMam1.jpg"
            alt="Dr. Tarita Shankar"
            width={500}
            height={600}
            className="w-full h-auto object-contain rounded-2xl"
          />
        </div>

        <div className="text-center lg:text-left">
          <p className="font-semibold text-gray-800">
            Founder Secretary & Chief Managing Trustee,
          </p>
          <p className="font-semibold text-gray-800">
            Shree Chankya Education Society
          </p>
          <p className="font-semibold text-gray-800">
            Chairperson & Chief Mentor,
          </p>
          <p className="font-semibold text-gray-800 mb-2">
            Indira Group of Institutes, Pune
          </p>
          <p className="text-secondary font-medium">
            Email: taritashankar@indiraedu.com
          </p>
        </div>
      </div>

      <div className="lg:w-3/5 w-full">
        {/* Desktop-only title section */}
        <div className="hidden lg:block border-l-4 border-secondary pl-6 mb-6">
          <h3 className="text-2xl font-bold text-secondary mb-1">
            DR. TARITA SHANKAR
          </h3>
          <p className="text-secondary font-semibold text-lg mb-2">
            CHAIRPERSON & CHIEF MENTOR
          </p>
          <p className="text-gray-700 font-semibold">
            INDIRA GROUP OF INSTITUTES, PUNE
          </p>
        </div>

        {/* Message paragraphs separated */}
        <div className="space-y-6">
          <p className="text-gray-700 leading-relaxed text-lg">
            Dear Students,
          </p>
          <p className="text-gray-700 leading-relaxed text-lg text-justify">
            Pursuit of Management Education at Indira Group of
            Institutes has been an inspiring journey. With over two
            decades of existence, and shortly closing on twenty five
            years of celebrating education, Indira strongly believes in
            the power of education to transform the youth. The
            philosophy, governance and values of business are witnessing
            a sea change and plenty of its repercussions are already
            being witnessed across the globe. Indira embraces these
            changes and epitomizes matching innovation in curriculum.
            Such transformational efforts lead our aspiring managers to
            become professionals who develop capabilities to lead in
            dynamic environment.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg text-justify">
            Quality being the bottom line for every industry, Indira has
            never lost sight of the fact that for India to forge ahead
            in its drive towards economic supremacy in the world, it is
            the quality of our people who drive it that matters most.
            And quality, as the cliché goes, is never an accident but an
            article of faith, and the entire faculty team at Indira
            embodies such dedication to quality. The Indira Group has
            proven itself on this count and has no intention of resting
            on its laurels.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg text-justify">
            Indira offers holistic and transformative learning
            experience, designed and delivered by experts from industry
            and academia. While the curriculum keeps the programs
            contextually abreast, innovative pedagogies inspire
            application oriented learning.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg text-justify">
            Indira strives to create good human beings and not just
            professionals. With the confidence that our intentions have
            matched our efforts, I wish you the very best in the future.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Director Section */}
<section id="about-director" className="relative scroll-mt-[15vh]">
  <div className="bg-white p-8 rounded-xl shadow-lg">
    <h2 className="text-3xl font-bold text-secondary mb-10">
      Director's Profile – Message
    </h2>

    <div className="flex flex-col lg:flex-row items-start gap-12 bg-white p-8 rounded-xl border border-gray-100">
      <div className="lg:w-2/5 w-full">
        <div className="relative rounded-2xl overflow-hidden shadow-lg mb-10">
          <Image
            src="/banners/Dr-Virendra-Tatake.jpg"
            alt="Dr. Virendra Tatake"
            width={500}
            height={600}
            className="w-full h-auto object-contain rounded-2xl"
          />
        </div>

        <div className="text-center lg:text-left">
          <p className="font-semibold text-gray-800">
            DR. VIRENDRA TATAKE
          </p>
          <p className=" text-gray-800">
            Indira Global School of Business
          </p>
          <p className="text-gray-800">
            Director ,
          </p>
          
          <p className="font-semibold text-gray-800">
            Email: <span className="text-secondary">virendratatake@indiraedu.com</span> 
          </p>
        </div>
      </div>

      <div className="lg:w-3/5 w-full">
        {/* Desktop-only title section */}
        <div className="hidden lg:block border-l-4 border-secondary pl-6 mb-6">
          <h3 className="text-2xl font-bold text-secondary mb-1">
            DR. VIRENDRA TATAKE
          </h3>
          <p className="text-secondary font-semibold text-lg mb-2">
            DIRECTOR
          </p>
          <p className="text-gray-700 font-semibold">
            INDIRA Global School of Business, PUNE
          </p>
        </div>

        {/* Message paragraphs separated */}
        <div className="space-y-6">
          <p className="text-gray-700 leading-relaxed text-lg">
            Dear Students,
          </p>
          <p className="text-gray-700 leading-relaxed text-md text-justify">
            Indira Global Business School is proud to be the part of
            The Shree Chanakya Education Society (SCES) which is
            celebrating its Silver Jubilee Year of its establishment.
          </p>
          <p className="text-gray-700 leading-relaxed text-md text-justify">
            During these 25 years, Indira Group of Institutes (IGI) has
            grown steadily and today it has 14 Institutes, having more
            than 8000 students from all over India pursuing
            multi-disciplinary, graduate & post-graduate programmes. IGI
            has always been committed to impart effective & qualitative
            education throughout this journey of 25 years.
          </p>
          <p className="text-gray-700 leading-relaxed text-md text-justify">
            The completion of 25 years is indeed a major milestone in
            the life of an educational institution. IGI since its
            foundation in 1994, has earned appreciation for providing
            value-based education and for imparting the ideals of
            academic excellence, sense of discipline and high moral and
            ethical values, leading to the development of integrated
            personalities.
          </p>
          <p className="text-gray-700 leading-relaxed text-md text-justify">
            The motto of The SCES is reflected in its faith that
            education is a process of awakening individual potential to
            creative knowledge inculcating in them, the desire to excel
            in various spheres. It is extremely noteworthy that IGI
            considers it to be its duty to nurture its students as
            sensitive people with strong values, who will leverage their
            individual achievements to strengthen the fabric of the
            community, the nation and the planet.
          </p>
          <p className="text-gray-700 leading-relaxed text-md text-justify">
            I, on behalf of Indira Global Business School convey our
            good wishes and thanks to everyone associated with us during
            this journey and wish all success and a great future ahead.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
      </div>
    </div>
  );
};

export default ChanakyaEdu;