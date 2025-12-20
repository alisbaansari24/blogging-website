"use client";

import { ChevronUp, Settings } from "lucide-react";
import { useState, useEffect } from "react";

export default function StickyButtons() {
  const [visible, setVisible] = useState(false);

  // Show button only after scroll
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll To Top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      

      {/* SCROLL TO TOP BUTTON */}
      {visible && (
        <button
          onClick={scrollToTop}
          className="
            fixed right-5 bottom-10
            bg-white text-black
            p-3 rounded-full
            shadow-lg
            hover:bg-[#1967d2]
            transition-all
            flex items-center justify-center
            z-50
          "
        >
          <ChevronUp size={22} />
        </button>
      )}
    </>
  );
}
