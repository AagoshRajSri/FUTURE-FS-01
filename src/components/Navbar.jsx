import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const NavbarLinks = [
    { id: 1, name: "Home", href: "#home" },
    { id: 2, name: "About", href: "#about" },
    { id: 3, name: "Skills", href: "#skills" },
    { id: 4, name: "My Projects", href: "#projects" },
  ];
  return (
    <header
      className="fixed top-0 left-0 w-full z-20 text-white"
      data-aos="fade-up"
      data-aos-delay="300"
    >
      <div className="container mx-auto flex items-center justify-between p-5">
        {/* logo */}
        <a
          href="#home"
          className="text-4xl font-mono font-bold italic text-white "
        >
          Portfolio
        </a>
        {/* mobile menu toggle */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FiMenu className="w-8 h-8 text-white" />
        </button>
        {/* desktop navg */}
        <nav className="hidden md:flex items-center space-x-7">
          {NavbarLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className="hover:text-gray-200 text-lg"
            >
              {link.name}
            </a>
          ))}
          <a href="#contact">
            <button className="inline-flex text-white border-2 py-2 px-6 focus:outline-none hover:bg-purple-800 rounded-full text-lg">
              Contact
            </button>
          </a>
        </nav>
      </div>

      {/* Mobile navg */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden bg-[#801b9c] absolute top-0 left-0 w-full h-screen flex flex-col items-center justify-center space-y-8 pt-16`}
      >
        {/* close button */}
        <button
          className="absolute top-5 right-5 text-white"
          onClick={() => setIsOpen(false)}
        >
          <FiX className="w-8 h-8" />
        </button>
        {/* Mobile navg */}
        {NavbarLinks.map((link) => (
          <a
            key={link.id}
            href={link.href}
            className="text-lg text-white hover:text-gray-300"
            onClick={() => setIsOpen(false)}
          >
            {link.name}
          </a>
        ))}
        {/* contact button */}
        <button className="inline-flex text-white border-2 py-2 px-6 focus:outline-none hover:bg-purple-800 rounded-full text-lg"></button>
      </div>
    </header>
  );
}
