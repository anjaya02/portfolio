"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <Button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full glass-card glass-card-hover !border-none text-purple-400 hover:text-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center magnetic group backdrop-blur-md"
      aria-label="Back to top"
    >
      <div className="relative">
        <ArrowUp className="w-6 h-6 transition-all duration-300 group-hover:animate-bounce" />
        <div className="absolute inset-0 w-6 h-6 bg-purple-500/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </Button>
  );
}
