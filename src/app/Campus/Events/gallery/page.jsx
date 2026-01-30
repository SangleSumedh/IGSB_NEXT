"use client";

import { Suspense } from "react";
import GalleryClient from "./GalleryClient";

export default function GalleryPage() {
  return (
    <Suspense fallback={<GalleryFallback />}>
      <GalleryClient />
    </Suspense>
  );
}

function GalleryFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <p className="text-gray-500 text-lg">Loading gallery...</p>
    </div>
  );
}
