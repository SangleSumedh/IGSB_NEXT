"use client";

import React from "react";
import { Clock } from "lucide-react";

export default function NISMPage() {
  return (
    <section className="w-full bg-slate-50 min-h-[70vh] flex items-center justify-center py-16 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-white rounded-full shadow-sm border border-slate-200">
            <Clock className="w-12 h-12 text-secondary animate-pulse" />
          </div>
        </div>

        <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
          Coming Soon
        </h1>

        <div className="h-1 w-20 bg-secondary mx-auto mb-6 rounded-full" />

        <p className="text-lg text-slate-600 leading-relaxed">
          We are currently waiting on content for the{" "}
          <span className="font-semibold text-slate-900">C414</span>. Stay tuned for
          exciting updates!
        </p>
      </div>
    </section>
  );
}
