"use client";

import Link from "next/link";
import { useState } from "react";
import { FiExternalLink, FiMenu, FiX } from "react-icons/fi";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

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

          {/* Resume Button - Direct Link */}
          <a
            href="/resume/Vijay_Khot_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white transition bg-blue-500 rounded-full hover:bg-blue-600"
          >
            <FiExternalLink className="text-base" />
            Resume
          </a>
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
            href="/resume/Vijay_Khot_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white transition bg-blue-500 rounded-full hover:bg-blue-600 w-fit"
          >
            <FiExternalLink className="text-base" />
            Resume
          </a>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
