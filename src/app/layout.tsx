import type { Metadata } from "next";
import { Poppins, Quicksand } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Socials from "@/components/Socials";
import CursorLight from "@/components/Cursor";
import MarineSnow from "@/components/creatures/MarineSnow";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Steven's Homepage",
  description: "The Deep Sea",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${quicksand.variable} antialiased`}>
        <Header />
        <Socials />
        {children}
        <CursorLight />
        <MarineSnow />
      </body>
    </html>
  );
}
