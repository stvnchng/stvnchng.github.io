"use client";

import { useTheme } from "@/hooks/useTheme";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.div
      onClick={toggleTheme}
      className="fixed top-5 left-6 w-14 h-14 rounded-full bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 shadow-lg flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-105"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {theme === "dark" ? "🌊" : "☀️"}
    </motion.div>
  );
}
