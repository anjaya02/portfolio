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
  const [isMobile, setIsMobile] = useState(false);
  const [isHovering, setIsHovering] = useState(false); // ✅ Track hover state
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

      // ✅ Check if hovering over interactive elements
      const target = e.target as HTMLElement;
      const isInteractive =
        target?.closest(
          'button, a, [role="button"], input, textarea, select, .cursor-pointer'
        ) !== null;
      setIsHovering(isInteractive);

      // ✅ Use requestAnimationFrame for smoother lag ring movement
      requestAnimationFrame(() => {
        if (lagRef.current) {
          lagRef.current.style.transform = `translate3d(${point.x - 16}px, ${point.y - 16}px, 0)`;
        }
      });
    };

    const addRipple = (e: MouseEvent) => {
      const id = rippleCounter.current++;
      const newRipple: Ripple = { id, x: e.clientX, y: e.clientY };
      setRipples((prev) => [...prev, newRipple]);
      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== id));
      }, 400); // ✅ Reduced from 600ms to 400ms for faster cleanup
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
      {/* Core dot - immediate response */}
      <div
        className={`absolute rounded-full shadow-lg transition-all duration-200 ${
          isHovering
            ? "w-2 h-2 bg-purple-300 shadow-purple-400/60"
            : "w-1 h-1 bg-purple-400 shadow-purple-500/50"
        }`}
        style={{
          transform: `translate3d(${pos.x - (isHovering ? 4 : 2)}px, ${pos.y - (isHovering ? 4 : 2)}px, 0)`,
          transition:
            "width 0.2s ease, height 0.2s ease, background-color 0.2s ease",
        }}
      />

      {/* Outer glow dot */}
      <div
        className={`absolute rounded-full blur-sm transition-all duration-200 ${
          isHovering ? "w-4 h-4 bg-purple-400/40" : "w-3 h-3 bg-purple-500/30"
        }`}
        style={{
          transform: `translate3d(${pos.x - (isHovering ? 8 : 6)}px, ${pos.y - (isHovering ? 8 : 6)}px, 0)`,
          transition:
            "width 0.2s ease, height 0.2s ease, background-color 0.2s ease",
        }}
      />

      {/* Lagging ring - smooth follow */}
      <div
        ref={lagRef}
        className={`absolute rounded-full backdrop-blur-sm transition-all duration-200 ${
          isHovering
            ? "w-12 h-12 border-2 border-purple-400/60 bg-purple-500/5"
            : "w-8 h-8 border border-purple-400/40"
        }`}
        style={{
          transform: `translate3d(${pos.x - (isHovering ? 24 : 16)}px, ${pos.y - (isHovering ? 24 : 16)}px, 0)`,
          transition:
            "transform 0.15s cubic-bezier(0.22, 1, 0.36, 1), width 0.2s ease, height 0.2s ease, border-width 0.2s ease",
        }}
      />

      {/* Click ripples */}
      {ripples.map((r) => (
        <span
          key={r.id}
          className="absolute rounded-full border-2 border-purple-500/60 shadow-lg shadow-purple-500/20"
          style={{
            left: r.x - 15,
            top: r.y - 15,
            width: 30,
            height: 30,
            animation:
              "ripple 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
          }}
        />
      ))}
    </div>
  );
}
