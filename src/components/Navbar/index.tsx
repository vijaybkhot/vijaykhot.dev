"use client";

import Link from "next/link";
import { useState } from "react";
import { FiExternalLink, FiMenu, FiX } from "react-icons/fi";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleResume = () => setResumeOpen((prev) => !prev);

  const navLinkClass = (path: string) =>
    `hover:text-blue-400 transition ${
      pathname === path ? "text-blue-400 font-semibold" : ""
    }`;

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0f172a]/80 backdrop-blur border-b border-zinc-800">
      <div className="flex items-center justify-between h-16 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-white">
          vijaykhot.com
        </Link>

        {/* Desktop Nav */}
        <nav className="relative items-center hidden gap-6 text-xl font-medium text-gray-200 md:flex">
          <Link href="/" className={navLinkClass("/")}>
            Home
          </Link>
          <Link href="/about" className={navLinkClass("/about")}>
            About Me
          </Link>
          <Link href="/work" className={navLinkClass("/work")}>
            Work
          </Link>
          <Link href="/contact" className={navLinkClass("/contact")}>
            Contact
          </Link>

          {/* Resume Dropdown (Click to Toggle) */}
          <div className="relative">
            <button
              onClick={toggleResume}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white transition bg-blue-500 rounded-full hover:bg-blue-600"
            >
              <FiExternalLink className="text-base" />
              Resume
            </button>
            {resumeOpen && (
              <div className="absolute right-0 z-20 w-48 py-2 mt-2 text-sm text-white bg-gray-800 rounded-lg shadow-lg">
                <a
                  href="/resume/Vijay_Khot_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 hover:bg-gray-700"
                >
                  View Resume
                </a>
                <a
                  href="/resume/Vijay_Khot_Resume_full_stack.pdf"
                  download
                  className="block px-4 py-2 hover:bg-gray-700"
                >
                  Download Resume
                </a>
              </div>
            )}
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="text-gray-200 md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="flex flex-col gap-4 px-6 py-4 md:hidden bg-[#0f172a] text-lg font-medium text-gray-200">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className={navLinkClass("/")}
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={() => setIsOpen(false)}
            className={navLinkClass("/about")}
          >
            About
          </Link>
          <Link
            href="/work"
            onClick={() => setIsOpen(false)}
            className={navLinkClass("/work")}
          >
            Work
          </Link>
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className={navLinkClass("/contact")}
          >
            Contact
          </Link>
          <a
            href="/resume/Vijay_Khot_Resume_full_stack.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 text-sm font-semibold text-white transition bg-blue-500 rounded-full hover:bg-blue-600"
          >
            View Resume
          </a>
          <a
            href="/resume/Vijay_Khot_Resume_full_stack.pdf"
            download
            className="inline-block px-4 py-2 text-sm font-semibold text-white transition bg-blue-500 rounded-full hover:bg-blue-600"
          >
            Download Resume
          </a>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
