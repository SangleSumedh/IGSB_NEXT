import React from "react";

function ContactUs() {
  return (
    <div className="bg-white text-gray-800">
      {/* ===== Contact Section ===== */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-6">Contact</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Section */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Indira College of Engineering and Management, Pune
            </h2>
            <p className="text-gray-700 mb-6">
              Gat No. 276, Tal. Maval, S.No. 64, 65, Indira College Road,
              Parandvadi, Maharashtra 410506
            </p>

            <div className="space-y-3">
              <p>
                <strong>Programme Enquiry:</strong> <br />
                Monday - Saturday : 10:00 AM – 6:00 PM
              </p>

              <p>
                <strong>Campus:</strong> Indira College of Engineering and
                Management (ICEM)
              </p>

              <p>
                <strong>Phone:</strong> +91 20-6673 7800 / +91 20-6673 7801
              </p>

              <p>
                <strong>Whatsapp:</strong> +91 9881492848 (Message Only)
              </p>

              <p>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:admissions@indiraicem.ac.in"
                  className="text-blue-600 hover:underline"
                >
                  admissions@indiraicem.ac.in
                </a>
              </p>
            </div>
          </div>

          {/* Right Section - Map */}
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3779.0466238407625!2d73.65569987524128!3d18.706730682423288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b1d73f3714a9%3A0x67d53d3bd8ea5416!2sIndira%20College%20Of%20Engineering%20And%20Management%2C%20Pune%2C%20Maharashtra%20410506!5e0!3m2!1sen!2sin!4v1759919307664!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* ===== Administrative Offices ===== */}
      <section className="bg-cyan-400 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-6 text-white">
            Administrative Offices
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {[
              {
                title: "Registrar",
                name: "Mr. Ganesh Pokale",
                email: "registrar@indiraicem.ac.in",
              },
              {
                title: "Deputy CAFO - Finance & Accounts",
                name: "Preeti Chandak",
                email: "finance@indiraicem.ac.in",
              },
              {
                title: "Director of Admissions",
                name: "Dr. Prakash Mainkar",
                email: "director.admissions@indiraicem.ac.in",
              },
              {
                title: "Controller of Examination",
                name: "Dr. Rahul Joshi",
                email: "coe@indiraicem.ac.in",
              },
            ].map((office, index) => (
              <div
                key={index}
                className="bg-cyan-100 p-6 rounded-lg shadow-md text-gray-700"
              >
                <h3 className="font-semibold">{office.title}</h3>
                <p className="text-lg font-medium">{office.name}</p>
                <p className="text-gray-600">{office.email}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== International Admissions ===== */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-6">
          Call for International Category Admissions Only
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              name: "Prateek Patil",
              email: "international.admissions@indiraicem.ac.in",
              phone: "+91 77200 61619",
            },
            {
              name: "Amruta Sakhare",
              email: "international.admissions@indiraicem.ac.in",
              phone: "+91 74474 54556",
            },
            {
              name: "Mudasir Naik",
              email: "international.admissions@indiraicem.ac.in",
              phone: "+91 70309 63294",
            },
            {
              name: "Ninad Sapre",
              email: "international.admissions@indiraicem.ac.in",
              phone: "+91 86528 42525",
            },
          ].map((person, index) => (
            <div
              key={index}
              className="bg-cyan-100 p-6 rounded-lg shadow-md text-gray-700"
            >
              <h3 className="font-semibold">International</h3>
              <p className="text-lg font-medium">{person.name}</p>
              <p className="text-gray-600">{person.email}</p>
              <p className="text-gray-600">{person.phone}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Contact Form ===== */}
      <section className="bg-cyan-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">
          {/* Left Info */}
          <div className="bg-cyan-100 text-gray-800 p-6 rounded-lg">
            <p>
              <strong>Campus:</strong> Indira College of Engineering and
              Management
            </p>
            <p>
              <strong>Campus Address:</strong> Gat No. 276, Tal. Maval, S.No.
              64, 65, Indira College Road, Parandvadi, Maharashtra 410506
            </p>
            <p>
              <strong>Phone:</strong> +91 20-6673 7800 / +91 20-6673 7801
            </p>
            <p>
              <strong>Email:</strong> admissions@indiraicem.ac.in
            </p>
          </div>

          {/* Form */}
          <form className="bg-cyan-600 p-6 rounded-lg space-y-4 modal-form">
            <input
              type="text"
              placeholder="Name*"
              className="w-full p-3 rounded-full text-gray-800"
            />
            <input
              type="tel"
              placeholder="Phone*"
              className="w-full p-3 rounded-full text-gray-800"
            />
            <input
              type="email"
              placeholder="Email ID*"
              className="w-full p-3 rounded-full text-gray-800"
            />
            <input
              type="text"
              placeholder="Address"
              className="w-full p-3 rounded-full text-gray-800"
            />
            <textarea
              placeholder="Query"
              className="w-full p-3 rounded-2xl text-gray-800"
              rows="3"
            ></textarea>

            <button
              type="submit"
              className="bg-red-500 text-white py-3 px-6 rounded-full font-semibold hover:bg-red-600"
            >
              Submit →
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default ContactUs;
