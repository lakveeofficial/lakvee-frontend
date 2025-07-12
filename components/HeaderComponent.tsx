import Image from "next/image";
import React from "react";
import Logo from "./common/Logo";
import BtnComponent from "./common/BtnComponent";
import Link from "next/link";

export default function HeaderComponent() {
  return (
    <div className="px-20 w-full flex items-center justify-between fixed top-0 left-0 z-50 bg-background/80 backdrop-blur-md text-white">
      <Logo />
      <div className="flex  items-center gap-10 text-primary font-semibold">
        <Link
          href="#home"
          className="transition-colors duration-200 hover:text-[#0072CE] hover:underline underline-offset-8"
        >
          Home
        </Link>
        <Link
          href="#about"
          className="transition-colors duration-200 hover:text-[#0072CE] hover:underline underline-offset-8"
        >
          About
        </Link>
        <Link
          href="#projects"
          className="transition-colors duration-200 hover:text-[#0072CE] hover:underline underline-offset-8"
        >
          Services
        </Link>
        <Link
          href="#services"
          className="transition-colors duration-200 hover:text-[#0072CE] hover:underline underline-offset-8"
        >
          Courses
        </Link>
        <Link
          href="#contact"
          className="transition-colors duration-200 hover:text-[#0072CE] hover:underline underline-offset-8"
        >
          Contact
        </Link>
      </div>
      <div className="flex items-center gap-6">
        <a
          href="tel:+919340052512"
          className="flex items-center gap-2 font-semibold bg-gradient-to-r from-[#0072CE] via-[#0090ae] to-[#00c6fb] text-white px-4 py-2 rounded-full shadow-lg ring-2 ring-[#0072CE] hover:scale-105 hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-[#0090ae]/50"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 6.75c0-1.243 1.007-2.25 2.25-2.25h2.086c.414 0 .81.168 1.102.466l2.21 2.21a1.5 1.5 0 01.293 1.707l-.805 1.61a.75.75 0 00.168.86l4.242 4.242a.75.75 0 00.86.168l1.61-.805a1.5 1.5 0 011.707.293l2.21 2.21c.298.292.466.688.466 1.102v2.086a2.25 2.25 0 01-2.25 2.25h-.75C6.798 21 3 17.202 3 12.75v-.75z"
            />
          </svg>
          Call Us
        </a>
        <Link href="#home" className="hidden md:inline-block">
          <BtnComponent
            value="Book Demo"
            className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-400 text-white border-0 shadow-lg ring-2 ring-pink-500 hover:scale-105 hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-pink-400/50 px-6 py-2 rounded-full font-bold text-base"
            variant="filled"
          />
        </Link>
      </div>
    </div>
  );
}
