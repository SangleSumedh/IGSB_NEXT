"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import axios from "axios";
import toast from "react-hot-toast";

// ✅ Lazy load PdfViewer (only in browser)
const PdfViewer = dynamic(() => import("./PdfViewer"), { ssr: false });

const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://cms-backend-icem.onrender.com/api/news";

export default function NewsSection() {
  const [newsList, setNewsList] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedPdfUrl, setSelectedPdfUrl] = useState(null);
  const [selectedTitle, setSelectedTitle] = useState("");
  const [scale, setScale] = useState(1.1);

  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => setNewsList(res.data))
      .catch(() => toast.error("Failed to load notices"));
  }, []);

  const handleDownloadPdf = async (pdfUrl, title) => {
    try {
      const formattedUrl = pdfUrl.includes("/upload/")
        ? pdfUrl.replace("/upload/", "/upload/fl_attachment/")
        : pdfUrl;

      const response = await fetch(formattedUrl);
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      const fileName = title?.replace(/\s+/g, "_") + ".pdf" || "document.pdf";

      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = fileName;
      link.click();
      setTimeout(() => window.URL.revokeObjectURL(blobUrl), 5000);
    } catch {
      toast.error("Failed to download PDF");
    }
  };

  return (
    <div className="flex justify-center items-center py-16 px-4 bg-gray-50">
      <div className="w-full max-w-4xl bg-white border border-gray-200 shadow-sm rounded-md p-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#0f1e46] mb-8">
          Notices / Circulars
        </h2>

        {newsList.length === 0 ? (
          <p className="text-center text-gray-600">No notices available.</p>
        ) : (
          <div className="space-y-4">
            {newsList.map((news) => (
              <div
                key={news.id}
                className="border-b border-gray-200 pb-3 flex flex-col sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="flex items-start sm:items-center gap-3">
                  <span className="bg-[#0f1e46] text-white text-xs font-semibold px-2 py-0.5 rounded-sm mt-0.5">
                    New
                  </span>
                  <h3 className="text-sm sm:text-base text-[#0f1e46] font-medium leading-snug">
                    {news.title}
                  </h3>
                </div>

                {news.pdfUrl && (
                  <div className="mt-2 sm:mt-0 flex gap-4 text-sm text-blue-700 font-medium">
                    <button
                      onClick={() => {
                        setSelectedPdfUrl(news.pdfUrl);
                        setSelectedTitle(news.title);
                        setShowModal(true);
                      }}
                      className="hover:underline"
                    >
                      View PDF
                    </button>
                    <button
                      onClick={() => handleDownloadPdf(news.pdfUrl, news.title)}
                      className="hover:underline"
                    >
                      Download PDF
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        <div className="mt-10 text-center">
          <button className="px-6 py-2 border border-[#0f1e46] text-[#0f1e46] rounded-sm hover:bg-[#0f1e46] hover:text-white transition-all duration-300 text-sm font-semibold">
            View All Notices
          </button>
        </div>
      </div>

      {/* ✅ Modal */}
      {showModal && selectedPdfUrl && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex justify-center items-center">
          <div className="bg-[#0d1117] border border-cyan-500/40 rounded-2xl w-11/12 lg:w-3/4 xl:w-2/3 h-[90vh] shadow-2xl shadow-cyan-500/10 flex flex-col overflow-hidden">
            <div className="flex justify-between items-center px-5 py-3 border-b border-cyan-500/30 bg-black/40">
              <h2 className="text-cyan-300 font-semibold text-lg tracking-wide">
                {selectedTitle || "View PDF"}
              </h2>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-400 hover:text-red-400 text-2xl font-bold transition-all"
              >
                ✕
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 bg-black/30 custom-scrollbar">
              {/* 👇 Render PDF only in browser */}
              <PdfViewer pdfUrl={selectedPdfUrl} scale={scale} />
            </div>

            <div className="flex justify-center items-center gap-4 py-3 border-t border-cyan-500/30 bg-black/40">
              <button
                onClick={() => setScale((prev) => Math.max(prev - 0.2, 0.6))}
                className="px-3 py-1 bg-gray-700/50 rounded-lg hover:bg-gray-600/70 transition-all"
              >
                ➖ Zoom Out
              </button>
              <button
                onClick={() => setScale((prev) => Math.min(prev + 0.2, 2))}
                className="px-3 py-1 bg-gray-700/50 rounded-lg hover:bg-gray-600/70 transition-all"
              >
                ➕ Zoom In
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
