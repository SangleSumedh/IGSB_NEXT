"use client";

import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import toast from "react-hot-toast";
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";


if (typeof window !== "undefined" && "Worker" in window) {
  pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    "pdfjs-dist/build/pdf.worker.min.mjs",
    import.meta.url
  ).toString();
}

export default function PdfViewer({ pdfUrl, scale }) {
  const [numPages, setNumPages] = useState(null);

  return (
    <Document
      file={pdfUrl}
      onLoadSuccess={({ numPages }) => setNumPages(numPages)}
      onLoadError={(error) => toast.error("Failed to load PDF: " + error.message)}
      loading={<p className="text-cyan-300 text-center">Loading PDF...</p>}
    >
      {Array.from(new Array(numPages), (el, index) => (
        <div key={`page_${index + 1}`} className="mb-4 flex justify-center">
          <Page
            pageNumber={index + 1}
            scale={scale}
            renderTextLayer
            renderAnnotationLayer
          />
        </div>
      ))}
    </Document>
  );
}
