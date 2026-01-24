"use client";

import { useState, useEffect } from "react";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FixedActionBar from "@/components/FixedActionBar";
import Loader from "@/components/Loader";
import LenisProvider from "@/components/LenisProvider";
import ScrollToTop from "@/components/ScroolToTop";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function RootLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <head>
        {/* Primary Meta Tags */}
        <title>Indira Global School of Business (IGSB)</title>
        <meta
          name="description"
          content="Indira Global School of Business (IGSB) offers industry-focused MBA and BBA programs with modern facilities, expert faculty, and strong placement support."
        />
        <meta
          name="keywords"
          content="IGSB, Indira Global School of Business, MBA college Pune, BBA college Pune, business school India, management institute Pune"
        />
        <meta name="author" content="Indira Global School of Business" />
        <meta name="robots" content="index, follow" />

        {/* Viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Favicon */}
        <link rel="icon" href="/shortLogo.png" />

        {/* Open Graph / Facebook */}
        <meta
          property="og:title"
          content="Indira Global School of Business (IGSB)"
        />
        <meta
          property="og:description"
          content="Explore MBA and BBA programs at Indira Global School of Business with world-class infrastructure and placement support."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com" />
        <meta
          property="og:image"
          content="https://yourdomain.com/og-image.jpg"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Indira Global School of Business (IGSB)"
        />
        <meta
          name="twitter:description"
          content="Join IGSB for career-focused management education in Pune."
        />
        <meta
          name="twitter:image"
          content="https://yourdomain.com/og-image.jpg"
        />
      </head>

      <body className="min-h-screen bg-white">
        <Loader isLoading={isLoading} />

        <Navbar />
        <ScrollToTop />
        <FixedActionBar />
        <WhatsAppButton />

        <LenisProvider>
          <main className="flex-grow">{children}</main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
