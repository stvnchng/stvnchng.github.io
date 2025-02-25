"use client";

import { useEffect, useState } from "react";

export function useTheme() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const storedTheme =
      (localStorage.getItem("theme") as "light" | "dark") || "dark";

    setTheme(storedTheme);
    document.documentElement.classList.add(storedTheme);

    return () => {
      document.documentElement.classList.remove(storedTheme);
    };
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.remove(theme || "light");
    document.documentElement.classList.add(newTheme);
  };

  return { theme, toggleTheme };
}
