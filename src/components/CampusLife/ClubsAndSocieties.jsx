"use client";

import React from "react";
import { clubsAndSocieties } from "@/static/campuslife/clubs-and-societies";

export default function ClubsAndSocieties() {
  return (
    <>
    <div className="space-y-12">
      {clubsAndSocieties.map((club, idx) => (
        <div
          key={idx}
          className="bg-white shadow-md rounded-2xl p-8 border border-gray-200"
        >
          {/* Header */}
          <div className="flex flex-col md:flex-row gap-8 items-start">
            
            {/* Club Photo */}
            <div className="w-full md:w-1/3 h-56 bg-gray-200 rounded-xl flex items-center justify-center text-gray-500 text-sm">
              <span>[ Club Photo Placeholder ]</span>
            </div>

            {/* Club Basic Info */}
            <div className="flex-1 space-y-3">
              <h2 className="text-2xl font-bold text-secondary">{club.name}</h2>
              <p className="text-gray-600"><b>Department:</b> {club.department}</p>
              <p className="text-gray-600"><b>Faculty Coordinator:</b> {club.facultyCoordinator}</p>
              {club.studentCoordinator && (
                <p className="text-gray-600"><b>Student Coordinator:</b> {club.studentCoordinator}</p>
              )}
              <p className="text-gray-600"><b>Club Strength:</b> {club.strength} Students</p>
            </div>
          </div>

          {/* About Section */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-secondary mb-2">About the Club</h3>
            <p className="text-gray-700 leading-relaxed">{club.about}</p>

            {club.clubStrengthInfo && (
              <p className="text-gray-700 leading-relaxed mt-2">{club.clubStrengthInfo}</p>
            )}
          </div>

          {/* Objectives */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-secondary mb-2">Objectives</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              {club.objectives.map((obj, i) => (
                <li key={i}>{obj}</li>
              ))}
            </ul>
          </div>

          {/* Vision */}
          {club.vision && (
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-secondary mb-2">Vision</h3>
              <p className="text-gray-700 leading-relaxed">{club.vision}</p>
            </div>
          )}

          {/* Activities */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-secondary mb-2">Club Activities</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              {club.activities.map((act, i) => (
                <li key={i}>{act}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
    </>
  );
}
