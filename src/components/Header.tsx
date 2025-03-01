"use client";
// import { useState } from "react";
// import HamburgerButton from "./HamburgerButton";
// import ThemeToggle from "./ThemeToggle";

export default function Header() {
  // const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full flex justify-between items-center p-6 z-50">
      <a href="#about" className="sr-only focus:not-sr-only">
        Skip To Content
      </a>
      {/* <ThemeToggle /> */}
      {/* <HamburgerButton open={open} setOpen={setOpen} /> */}
    </header>
  );
}
