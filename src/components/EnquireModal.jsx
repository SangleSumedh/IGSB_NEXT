"use client";
import React from "react";
import ApplyForm from "./home/ApplyForm";

export default function EnquireModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-[999]">
      <div className="bg-white w-[95%] md:w-[750px] p-6 rounded-xl shadow-lg relative 
                      max-h-[90vh] overflow-hidden">

        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-3 right-3 text-gray-600 hover:text-red-600 text-2xl 
                     transition-all duration-300 hover:scale-110"
        >
          ×
        </button>

        {/* Title */}
        <h2 className="text-2xl font-bold text-center mb-6 text-secondary">
          Enquire Now
        </h2>

        {/* FULL ApplyForm inside modal */}
        <ApplyForm variant="modal" />
      </div>
    </div>
  );
}
