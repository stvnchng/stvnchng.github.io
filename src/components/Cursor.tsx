"use client";

import { useEffect } from "react";

export default function CursorLight() {
  useEffect(() => {
    const light = document.createElement("div");
    light.style.position = "absolute";
    light.style.borderRadius = "50%";
    light.style.pointerEvents = "none";
    light.style.transition = "transform 0.05s ease-out";
    light.style.transition = "box-shadow 0.1s ease-out";
    document.body.appendChild(light);

    const handleMouseMove = (event: MouseEvent) => {
      light.style.left = `${event.pageX - 10}px`; // Cursor centered on light
      light.style.top = `${event.pageY - 10}px`; // Cursor centered on light

      light.style.boxShadow = `0 0 200px 100px rgba(0, 255, 255, 0.25)`;
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.body.removeChild(light);
    };
  }, []);

  return null;
}
