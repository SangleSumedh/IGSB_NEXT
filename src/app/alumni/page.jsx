"use client";

import React, { useState } from "react";
import Head from "next/head";

export default function Alumni() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    graduationYear: "",
    course: "",
    currentCompany: "",
    position: "",
    linkedin: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for registering! We will get back to you soon.");
  };

  const alumniProfiles = [
    { id: 1, name: "Rajesh Kumar", position: "Software Engineer", company: "Google", year: "2018" },
    { id: 2, name: "Priya Sharma", position: "Product Manager", company: "Microsoft", year: "2019" },
    { id: 3, name: "Amit Patel", position: "Data Scientist", company: "Amazon", year: "2017" },
    { id: 4, name: "Neha Gupta", position: "UX Designer", company: "Adobe", year: "2020" },
    { id: 5, name: "Sanjay Verma", position: "Business Analyst", company: "TCS", year: "2016" },
    { id: 6, name: "Anjali Singh", position: "Marketing Head", company: "Infosys", year: "2018" },
    { id: 7, name: "Vikram Joshi", position: "System Architect", company: "IBM", year: "2015" },
    { id: 8, name: "Sneha Reddy", position: "DevOps Engineer", company: "Cisco", year: "2019" },
    { id: 9, name: "Rahul Mehta", position: "AI Researcher", company: "NVIDIA", year: "2021" },
    { id: 10, name: "Pooja Desai", position: "Cloud Architect", company: "AWS", year: "2017" },
    { id: 11, name: "Karan Malhotra", position: "Tech Lead", company: "Uber", year: "2016" },
    { id: 12, name: "Divya Iyer", position: "Data Engineer", company: "Netflix", year: "2020" },
  ];

  return (
    <>
      <Head>
        <title>ICEM Alumni Network</title>
        <meta name="description" content="Connect with ICEM alumni and stay updated with our alumni network." />
      </Head>

      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-secondary mb-4">
              ICEM Alumni Network
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay connected with your alma mater and fellow alumni. Join our
              growing network of successful professionals.
            </p>
          </div>

          {/* Alumni Grid */}
          <div className="lg:col-span-3">
            <h2 className="text-3xl font-bold text-secondary mb-8 text-center lg:text-left">
              Our Distinguished Alumni
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

              {alumniProfiles.map((alumni) => (
                <div key={alumni.id} className="text-center group w-full">

                  {/* Card */}
                  <div className="relative overflow-hidden rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300 bg-gray-300 w-full">

                    {/* Square ratio */}
                    <div className="w-full aspect-square flex items-center justify-center transform group-hover:scale-105 transition-transform duration-300">
                      <span className="text-gray-600 text-lg font-semibold">
                        Alumni Photo
                      </span>
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-secondary bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-300 flex items-center justify-center">
                      <div className="text-white text-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                        <p className="font-semibold text-sm">{alumni.position}</p>
                        <p className="text-xs">{alumni.company}</p>
                        <p className="text-xs mt-1">Batch: {alumni.year}</p>
                      </div>
                    </div>
                  </div>

                  {/* Name + Role */}
                  <h3 className="mt-3 font-semibold text-gray-800">{alumni.name}</h3>
                  <p className="text-sm text-gray-600">{alumni.position}</p>
                  <p className="text-xs text-gray-500">{alumni.company}</p>

                </div>
              ))}

            </div>
          </div>

        </div>
      </div>
    </>
  );
}
