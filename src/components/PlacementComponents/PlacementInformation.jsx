"use client";
import { useState } from "react";
import {
  placedStudentsData,
  placementMembers,
} from "@/static/placement/placement";

export default function PlacementInformation() {
  const [active, setActive] = useState("Placement Team");

  // ALL ACCORDION CONTENT
  const sectionContent = {
    "Placement Team": {
      type: "accordion",
      content: {
        "Placement Team Members": placementMembers,
      },
    },

    "Placed Students": {
      type: "placedStudents",
      content: placedStudentsData,
    },

    "Placement Policy": {
      type: "accordion",
      content: {
        "Policy Overview": [
          "Our placement policy ensures fair and transparent placement opportunities for all eligible students.",
          "Guidelines for students and recruiters.",
        ],
        "Eligibility Criteria": [
          "Information about eligibility criteria, academic requirements, and prerequisites for placements.",
        ],
      },
    },
  };

  const tabs = Object.keys(sectionContent);

  // RENDER PLACED STUDENTS TABLE
  const renderPlacedStudents = (contentData) => {
    return (
      <div className="space-y-6">
        {Object.entries(contentData).map(([year, programs]) => (
          <div key={year} className="border border-gray-200 rounded-lg">
            <details className="group">
              <summary className="flex justify-between items-center p-4 cursor-pointer bg-gray-50 hover:bg-gray-100 rounded-lg">
                <h4 className="font-semibold text-secondary text-lg">
                  Academic Year {year}
                </h4>
                <span className="transition-transform group-open:rotate-180">
                  ▼
                </span>
              </summary>

              <div className="p-4 pt-2 space-y-6">
                {/* Engineering Students */}
                <div>
                  <h5 className="font-semibold text-primary mb-3 text-lg">
                    Engineering Students
                  </h5>
                  <div className="overflow-x-auto border border-gray-200 rounded-lg">
                    <table className="w-full text-sm text-left">
                      <thead className="bg-gray-50 text-gray-700">
                        <tr>
                          <th className="p-3 border-b font-semibold w-16">
                            Sr.No.
                          </th>
                          <th className="p-3 border-b font-semibold min-w-[180px]">
                            Student Name
                          </th>
                          <th className="p-3 border-b font-semibold min-w-[150px]">
                            Company Name
                          </th>
                          <th className="p-3 border-b font-semibold w-24">
                            Stream
                          </th>
                          <th className="p-3 border-b font-semibold w-32">
                            Year of Passing
                          </th>
                          <th className="p-3 border-b font-semibold w-40">
                            Package (LPA)
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {programs.engineering.map((student) => (
                          <tr
                            key={student.srNo}
                            className="hover:bg-gray-50 border-b last:border-b-0"
                          >
                            <td className="p-3 text-gray-600">
                              {student.srNo}
                            </td>
                            <td className="p-3 font-medium text-gray-800">
                              {student.studentName}
                            </td>
                            <td className="p-3 text-gray-700">
                              {student.companyName}
                            </td>
                            <td className="p-3 text-gray-600">
                              {student.stream}
                            </td>
                            <td className="p-3 text-gray-600">
                              {student.yearOfPassing}
                            </td>
                            <td className="p-3 font-semibold text-green-600">
                              {student.package}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* MBA Students */}
                <div>
                  <h5 className="font-semibold text-primary mb-3 text-lg">
                    MBA Students
                  </h5>
                  <div className="overflow-x-auto border border-gray-200 rounded-lg">
                    <table className="w-full text-sm text-left">
                      <thead className="bg-gray-50 text-gray-700">
                        <tr>
                          <th className="p-3 border-b font-semibold w-16">
                            Sr.No.
                          </th>
                          <th className="p-3 border-b font-semibold min-w-[180px]">
                            Student Name
                          </th>
                          <th className="p-3 border-b font-semibold min-w-[150px]">
                            Company Name
                          </th>
                          <th className="p-3 border-b font-semibold w-24">
                            Stream
                          </th>
                          <th className="p-3 border-b font-semibold w-32">
                            Year of Passing
                          </th>
                          <th className="p-3 border-b font-semibold w-40">
                            Package (LPA)
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {programs.mba.map((student) => (
                          <tr
                            key={student.srNo}
                            className="hover:bg-gray-50 border-b last:border-b-0"
                          >
                            <td className="p-3 text-gray-600">
                              {student.srNo}
                            </td>
                            <td className="p-3 font-medium text-gray-800">
                              {student.studentName}
                            </td>
                            <td className="p-3 text-gray-700">
                              {student.companyName}
                            </td>
                            <td className="p-3 text-gray-600">
                              {student.stream}
                            </td>
                            <td className="p-3 text-gray-600">
                              {student.yearOfPassing}
                            </td>
                            <td className="p-3 font-semibold text-green-600">
                              {student.package}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* MCA Students */}
                <div>
                  <h5 className="font-semibold text-primary mb-3 text-lg">
                    MCA Students
                  </h5>
                  <div className="overflow-x-auto border border-gray-200 rounded-lg">
                    <table className="w-full text-sm text-left">
                      <thead className="bg-gray-50 text-gray-700">
                        <tr>
                          <th className="p-3 border-b font-semibold w-16">
                            Sr.No.
                          </th>
                          <th className="p-3 border-b font-semibold min-w-[180px]">
                            Student Name
                          </th>
                          <th className="p-3 border-b font-semibold min-w-[150px]">
                            Company Name
                          </th>
                          <th className="p-3 border-b font-semibold w-24">
                            Stream
                          </th>
                          <th className="p-3 border-b font-semibold w-32">
                            Year of Passing
                          </th>
                          <th className="p-3 border-b font-semibold w-40">
                            Package (LPA)
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {programs.mca.map((student) => (
                          <tr
                            key={student.srNo}
                            className="hover:bg-gray-50 border-b last:border-b-0"
                          >
                            <td className="p-3 text-gray-600">
                              {student.srNo}
                            </td>
                            <td className="p-3 font-medium text-gray-800">
                              {student.studentName}
                            </td>
                            <td className="p-3 text-gray-700">
                              {student.companyName}
                            </td>
                            <td className="p-3 text-gray-600">
                              {student.stream}
                            </td>
                            <td className="p-3 text-gray-600">
                              {student.yearOfPassing}
                            </td>
                            <td className="p-3 font-semibold text-green-600">
                              {student.package}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </details>
          </div>
        ))}
      </div>
    );
  };

  // RENDER ACCORDION CONTENT
  const renderContent = (contentData) => {
    if (contentData.type === "placedStudents") {
      return renderPlacedStudents(contentData.content);
    }

    return (
      <div className="space-y-4">
        {Object.entries(contentData.content).map(([title, items]) => (
          <div key={title} className="border border-gray-200 rounded-lg">
            <details className="group">
              <summary className="flex justify-between items-center p-4 cursor-pointer bg-gray-50 hover:bg-gray-100 rounded-lg">
                <h4 className="font-semibold text-secondary text-lg">
                  {title}
                </h4>
                <span className="transition-transform group-open:rotate-180">
                  ▼
                </span>
              </summary>

              <div className="p-4 pt-2 space-y-4">
                {items.map((item, index) => {
                  // PDF LINK
                  if (item.pdf) {
                    return (
                      <a
                        key={index}
                        href={item.pdf}
                        target="_blank"
                        className="text-secondary underline font-medium"
                      >
                        {item.label}
                      </a>
                    );
                  }

                  // STAFF CARD
                  if (item.name) {
                    return (
                      <div
                        key={index}
                        className="flex items-start gap-4 p-4 rounded-lg border border-gray-100 shadow-sm"
                      >
                        <div className="w-16 h-16 rounded-md bg-gray-200 overflow-hidden">
                          {item.img ? (
                            <img
                              src={item.img}
                              alt=""
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="w-full h-full object-cover bg-gray-300 justify-center p-2 text-gray">
                              Image here
                            </div>
                          )}
                        </div>
                        <div>
                          <p className="font-semibold text-secondary">
                            {item.name}
                          </p>
                          <p className="text-sm text-gray-700">
                            {item.position}
                          </p>
                          <p className="text-sm text-gray-700">
                            {item.department}
                          </p>
                          <p className="text-sm text-gray-600">
                            <strong>Mobile:</strong> {item.mobile}
                          </p>
                          <p className="text-sm text-gray-600">
                            <strong>Email:</strong> {item.email}
                          </p>
                        </div>
                      </div>
                    );
                  }

                  // NORMAL TEXT
                  return (
                    <p key={index} className="text-gray-700 flex items-start">
                      <span className="text-secondary mr-2 mt-1">•</span>
                      {item}
                    </p>
                  );
                })}
              </div>
            </details>
          </div>
        ))}
      </div>
    );
  };

  return (
    <section className="w-full bg-gradient-to-b from-gray-50 to-white text-black py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-secondary mb-4">
            Placement Information
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Empowering students with comprehensive training and placement
            opportunities
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* LEFT MENU */}
          <nav className="lg:col-span-1 bg-white rounded-xl shadow-sm p-6 space-y-2 sticky top-24 self-start border border-gray-100">
            <h3 className="font-semibold text-gray-800 mb-4 text-lg">
              Quick Links
            </h3>
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActive(tab)}
                className={`block w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${
                  active === tab
                    ? "bg-secondary text-white shadow-md"
                    : "hover:bg-gray-50 text-gray-700 hover:text-secondary"
                }`}
              >
                <span className="font-medium">{tab}</span>
              </button>
            ))}
          </nav>

          {/* RIGHT CONTENT */}
          <div className="lg:col-span-3 bg-white rounded-xl shadow-sm p-8 border border-gray-100">
            <div className="mb-6 pb-4 border-b border-gray-200">
              <h3 className="text-2xl font-bold text-secondary">{active}</h3>
            </div>

            <div className="content-area">
              {renderContent(sectionContent[active])}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
