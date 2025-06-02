"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    document.addEventListener("mousemove", updateMousePosition);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      document.removeEventListener("mousemove", updateMousePosition);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {/* Main cursor dot */}
      <div
        className={`absolute w-3 h-3 bg-purple-500 rounded-full transition-transform duration-100 ${
          isClicking ? "scale-75" : "scale-100"
        }`}
        style={{
          left: mousePosition.x - 6,
          top: mousePosition.y - 6,
        }}
      />

      {/* Simple ripple effect */}
      <div
        className={`absolute border border-purple-400/50 rounded-full transition-all duration-200 ${
          isClicking ? "w-10 h-10 border-purple-500/70" : "w-6 h-6"
        }`}
        style={{
          left: mousePosition.x - (isClicking ? 20 : 12),
          top: mousePosition.y - (isClicking ? 20 : 12),
        }}
      />
    </div>
  );
}
