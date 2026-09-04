import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Creator Marketing OS — Operating System for Creator-Led Marketing",
  description: "Find verified creators with AI, schedule multi-platform posts, run product seeding drops, approve content, track revenue attribution, and optimize ROI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${outfit.variable}`}>
      <body className="bg-[#070913] text-slate-100 font-sans antialiased overflow-x-hidden">
        {/* Ambient Glowing Background Lights */}
        <div className="bg-glow-top" />
        <div className="bg-glow-middle" />
        <div className="bg-glow-bottom" />
        {children}
      </body>
    </html>
  );
}
