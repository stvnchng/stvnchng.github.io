import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        lightBg: "#FBE8A6", // Sunlight golden yellow, warmer and softer
        lightText: "#3A2E25", // Rich brown, like sun-kissed earth
        lightAccent: "#D1A15E", // Warm amber/golden glow, like sunlight filtering through
        darkBg: "#01121A", // Dark, deep sea blue with hints of green
        darkText: "#A1C6D8", // Soft moonlight blue/white for text, like bioluminescent glow
        darkAccent: "#2E4F5D", // Muted, deep teal, like deep ocean water
      },
      backgroundImage: {
        "sea-floor":
          "linear-gradient(to bottom, #000A10 50%, #01121A 70%, #013D47 85%, #5a9b9d)",
      },
    },
  },
  plugins: [],
} satisfies Config;
