"use client";

import { useState, useEffect } from "react";

export default function CursorLight() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // do not render on mobile
    if (window.innerWidth <= 768) return;

    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-20"
      style={{
        backgroundImage: `radial-gradient(circle 280px at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 255, 255, 0.15) 0%, transparent)`,
      }}
    />
  );
}
