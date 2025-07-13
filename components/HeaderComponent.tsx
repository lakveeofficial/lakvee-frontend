"use client";
import { useState } from "react";
import Logo from "./common/Logo";
import BtnComponent from "./common/BtnComponent";
import { usePathname, useRouter } from "next/navigation";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

export default function HeaderComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathName = usePathname();
  const router = useRouter();

  // Manual scroll handler
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false); 
    }
  };

  const navLinks = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Courses", id: "courses" }, 
    { label: "Admission", id: "admission" }, 
    { label: "Contact", id: "contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md text-white shadow">
      <div className="flex justify-between items-center px-4 md:px-10 lg:px-20 py-2">
        <Logo />

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-primary font-semibold">
          {navLinks.map((link) =>
            pathName !== "/contact" ? (
              <button
                key={link.label}
                onClick={() => scrollTo(link.id)}
                className="transition-colors duration-200 hover:text-[#0072CE] hover:underline underline-offset-8"
              >
                {link.label}
              </button>
            ) : (
              <button
                key={link.label}
                onClick={() => router.push("/")}
                className="transition-colors duration-200 hover:text-[#0072CE] hover:underline underline-offset-8"
              >
                {link.label}
              </button>
            )
          )}
        </nav>

        {/* Right Side Buttons */}
        <div className="flex items-center gap-4">
          <a
            href="tel:+919340052512"
            className="flex items-center gap-2 font-semibold bg-gradient-to-r from-[#0072CE] via-[#0090ae] to-[#00c6fb] text-white px-4 py-2 rounded-full shadow-lg ring-2 ring-[#0072CE] hover:scale-105 hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-[#0090ae]/50 text-sm md:text-base"
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

          {/* Book Demo hidden on small screens */}
          {pathName !== "/contact" && (
              <BtnComponent
                value="Book Demo"
                className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-400 text-white border-0 shadow-lg ring-2 ring-pink-500 hover:scale-105 hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-pink-400/50 px-6 py-2 rounded-full font-bold text-sm md:text-base hidden md:inline-block"
                variant="filled"
                onClick={() => router.push("/contact")}
              />
          )}

          {/* Hamburger icon on mobile */}
          <button
            className="md:hidden text-primary text-2xl ml-2 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/20 text-primary font-semibold flex flex-col px-6 py-4 space-y-3 shadow-lg rounded-b-xl">
          {navLinks.map((link) =>
            pathName !== "/contact" ? (
              <button
                key={link.label}
                onClick={() => scrollTo(link.id)}
                className="text-left hover:text-[#0072CE] transition-colors duration-200"
              >
                {link.label}
              </button>
            ) : (
              <button
                key={link.label}
                onClick={() => {
                  router.push("/");
                  setIsMenuOpen(false);
                }}
                className="text-left hover:text-[#0072CE] transition-colors duration-200"
              >
                {link.label}
              </button>
            )
          )}
        </div>
      )}
    </header>
  );
}