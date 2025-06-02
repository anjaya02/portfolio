"use client";

import { useEffect, useState, useRef } from "react";

interface Point {
  x: number;
  y: number;
}

interface Ripple extends Point {
  id: number;
}

export default function CustomCursor() {
  const [pos, setPos] = useState<Point>({ x: 0, y: 0 });
  const [isHidden, setIsHidden] = useState(true);
  const [isMobile, setIsMobile] = useState(false); // ✅ Track if mobile
  const lagRef = useRef<HTMLDivElement>(null);
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const rippleCounter = useRef(0);

  useEffect(() => {
    // ✅ Disable on mobile
    const isTouch = window.innerWidth < 768 || "ontouchstart" in window;
    setIsMobile(isTouch);

    if (isTouch) return; // ⛔ Skip listener setup for mobile

    const move = (e: MouseEvent) => {
      const point = { x: e.clientX, y: e.clientY };
      setPos(point);
      setIsHidden(false);
      if (lagRef.current) {
        lagRef.current.style.transform = `translate3d(${point.x - 12}px, ${point.y - 12}px, 0)`;
      }
    };

    const addRipple = (e: MouseEvent) => {
      const id = rippleCounter.current++;
      const newRipple: Ripple = { id, x: e.clientX, y: e.clientY };
      setRipples((prev) => [...prev, newRipple]);
      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== id));
      }, 600);
    };

    const hide = () => setIsHidden(true);

    document.addEventListener("mousemove", move);
    document.addEventListener("mousedown", addRipple);
    document.addEventListener("mouseleave", hide);
    document.addEventListener("mouseenter", () => setIsHidden(false));

    return () => {
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mousedown", addRipple);
      document.removeEventListener("mouseleave", hide);
      document.removeEventListener("mouseenter", () => setIsHidden(false));
    };
  }, []);

  if (isMobile || isHidden) return null; // ✅ Don’t render anything on mobile

  return (
    <div className="fixed inset-0 z-50 pointer-events-none select-none">
      {/* Core dot */}
      <div
        className="absolute w-2.5 h-2.5 bg-purple-500 rounded-full"
        style={{ transform: `translate3d(${pos.x - 5}px, ${pos.y - 5}px, 0)` }}
      />

      {/* Lagging ring */}
      <div
        ref={lagRef}
        className="absolute w-6 h-6 rounded-full border border-purple-400/60 transition-transform duration-150"
        style={{
          transform: `translate3d(${pos.x - 12}px, ${pos.y - 12}px, 0)`,
        }}
      />

      {/* Click ripples */}
      {ripples.map((r) => (
        <span
          key={r.id}
          className="absolute rounded-full border border-purple-500"
          style={{
            left: r.x - 20,
            top: r.y - 20,
            width: 40,
            height: 40,
            animation: "ripple 0.6s ease-out forwards",
          }}
        />
      ))}
    </div>
  );
}
