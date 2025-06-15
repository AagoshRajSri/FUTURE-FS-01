import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-purple-700 to-blue-700 text-white py-6 mt-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-2xl md:text-3xl font-semibold italic tracking-wide mb-3 md:mb-0">
          Portfolio
        </h1>
        <p className="text-sm text-gray-200 text-center md:text-right">
          &copy; 2025 My Website. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
