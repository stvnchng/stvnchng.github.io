"use client";

import { useEffect } from "react";

export default function CursorLight() {
  useEffect(() => {
    const light = document.createElement("div");
    light.style.position = "absolute";
    light.style.borderRadius = "50%";
    light.style.pointerEvents = "none";
    light.style.transition = "transform 0.05s ease-out"; // smooth transition for movement
    light.style.transition = "box-shadow 0.1s ease-out"; // smooth transition for the shadow

    // Set initial position for the light
    light.style.left = "-100px"; // Start offscreen
    light.style.top = "-100px"; // Start offscreen
    document.body.appendChild(light);

    // Update light size and position on mousemove
    const handleMouseMove = (event: MouseEvent) => {
      // Position the light at the cursor
      light.style.left = `${event.pageX - 10}px`; // Cursor centered on light
      light.style.top = `${event.pageY - 10}px`; // Cursor centered on light

      // Stronger box-shadow for a more intense glow
      light.style.boxShadow = `0 0 200px 100px rgba(0, 255, 255, 0.25)`; // Stronger glow with larger spread
    };

    document.addEventListener("mousemove", handleMouseMove);

    // Clean up the event listener and light element on component unmount
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.body.removeChild(light); // Remove the light element on unmount
    };
  }, []);

  return null; // This component doesn't render anything directly
}
