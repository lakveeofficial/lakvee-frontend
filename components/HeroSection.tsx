"use client";
import { GoDownload } from "react-icons/go";
import { useEffect, useRef } from "react";

export default function HeroSection() {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.classList.add("animate-fadein");
    }
  }, []);

  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-hero bg-cover bg-center md:bg-top z-0" />
      <div className="absolute inset-0 bg-black bg-opacity-60 md:bg-opacity-70 z-10 transition-all duration-300" />
      <div
        ref={contentRef}
        className="relative z-20 flex flex-col items-center justify-center text-center px-4 md:px-8 w-full max-w-3xl mx-auto opacity-0 animate-none"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 text-white drop-shadow-2xl bg-black/40 px-4 py-2 rounded-lg">
          LakVee Softwares & Skill Development Institute
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 drop-shadow-xl text-white bg-black/30 px-3 py-1 rounded">
          Learn. Build. Get Hired.
        </h2>
        <p className="text-base md:text-lg max-w-2xl mb-8 text-white bg-black/20 px-3 py-2 rounded shadow">
          Where skills meet opportunity – <i>Get trained by experts</i>, build
          real-world projects, and launch your IT career with confidence.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Primary CTA */}
          <button className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-400 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-200">
            📌 Book a Free Demo Session
          </button>
          {/* Secondary CTA */}
          <button className="border bg-slate-100 border-slate-950 text-slate-800 opacity-90 hover:opacity-100 flex items-center gap-2 px-6 py-3 rounded-full transition">
            <GoDownload className="text-lg" />
            Download Course Brochure
          </button>
        </div>
      </div>
    </div>
  );
}

// Add fade-in animation to globals.css:
// @keyframes fadein { from { opacity: 0; transform: translateY(40px);} to { opacity: 1; transform: none; } }
// .animate-fadein { animation: fadein 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
