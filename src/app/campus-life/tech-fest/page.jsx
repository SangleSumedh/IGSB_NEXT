// pages/under-development.js
import React from "react";
import Link from "next/link";

export default function UnderDevelopment() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-gray-100 px-4 text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
        🚧 Under Development
      </h1>
      <p className="text-gray-600 mb-8 max-w-md">
        This section of the website is currently under development. Please check
        back later for updates!
      </p>
      <Link href="/">Go Back Home</Link>
    </div>
  );
}
