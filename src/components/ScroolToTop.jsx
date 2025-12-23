"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";
// import { ArrowUp } from "lucide-react";
// import { MoveUp } from "lucide-react";

export default function ScrollToTop({ lenis }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isMobile = window.innerWidth < 768;
      const scrollThreshold = isMobile ? 0.8 * window.innerHeight : window.innerHeight;
      setShow(window.scrollY > scrollThreshold);
    };

    handleScroll(); // Initial check
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const scrollTop = () => {
    if (lenis) {
      lenis.scrollTo(0, { duration: 1 });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={scrollTop}
      className={` block fixed bottom-2 sm:bottom-28 right-4 sm:right-6 z-[999999] bg-secondary text-white p-2 sm:p-4 rounded-full shadow-lg w-10 h-10 sm:w-14 sm:h-14 flex items-center justify-center
        transition-all duration-500 
        ${
          show
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        }
      `}
    >
      <ChevronUp size={22} />
    </button>
  );
}