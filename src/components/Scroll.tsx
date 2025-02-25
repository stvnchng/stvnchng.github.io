"use client";

import { useTheme } from "@/hooks/useTheme";

export default function Scroll() {
  const { theme } = useTheme();

  return (
    <div className="scroll-down">
      <a href="#about">
        <span></span>
        {theme === "dark" ? "Dive" : "Scroll"}
      </a>
    </div>
  );
}
