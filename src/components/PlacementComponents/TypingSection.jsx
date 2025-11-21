"use client";

import { useState, useEffect } from "react";

const words = ["Future", "Success", "Career", "Journey", "Impact", "Legacy"];
export default function Typingsection() {
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  // Words to cycle through dynamically

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[currentWordIndex];

      if (!isDeleting) {
        // Typing forward
        if (currentText === currentWord) {
          setTimeout(() => setIsDeleting(true), 1000);
          return;
        }
        setCurrentText(currentWord.substring(0, currentText.length + 1));
      } else {
        // Deleting backward
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
          return;
        }
        setCurrentText(currentWord.substring(0, currentText.length - 1));
      }
    };

    const timeout = setTimeout(handleTyping, isDeleting ? 80 : 120);
    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex]);

  return (
    <>
      {/* Typing Text Button Section */}
      <div className="flex justify-center items-center pr-6 pt-14 md:-mt-12 relative z-10">
        <button className="bg-primary text-white px-6 py-3 rounded-full text-2xl font-semibold shadow-lg hover:bg-primary/90 transition-all duration-300 flex items-center gap-2">
          Crafting Your{" "}
          <span className="relative inline-block text-white font-bold">
            {currentText}
            <span className="ml-1 animate-blink">|</span>
          </span>
        </button>
      </div>

      {/* Cursor Blink Animation */}
      <style>
        {`
    @keyframes blink {
      50% { opacity: 0; }
    }
    .animate-blink {
      animation: blink 1s step-start infinite;
    }
  `}
      </style>
    </>
  );
}
