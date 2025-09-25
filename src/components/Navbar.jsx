import React, { useState } from "react";
import { Search, CircleUserRound, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  {
    /* <div class="bg-transparent">Text is still visible</div> */
  }

  return (
    <nav className="w-full bg-transparent-white shadow-md fixed ">
      <div className="max-w-7xl mx-auto  py-3 flex items-center justify-between">
        {/* Left - Logo */}
        <div className="flex items-center">
          <img
            src="././images/main_logo.ed6347e1.png"
            alt="Grad Partners"
            className="h-10 w-auto cursor-pointer"
          />
        </div>

        <div className="hidden md:flex space-x-6 font-base text-xl text-gray-700">
          <a href="/" className="hover:bg-pink-200 px-5 py-2 rounded-md">
            Home
          </a>

          {/* Dropdown Wrapper */}
          <div className="relative group">
            <a
              href="/events"
              className="hover:bg-pink-200 px-5 py-2 rounded-md inline-block"
            >
              Events
            </a>

            {/* Dropdown Menu */}
            <div className="absolute  shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200">
              <a
                href="/events/opportunities"
                className="block px-4 py-2 hover:bg-pink-200"
              >
                Opportunities
              </a>
              <a
                href="/events/workshops"
                className="block px-4 py-2 hover:bg-pink-200"
              >
                Workshops
              </a>
            </div>
          </div>

          <a href="/careers" className="hover:bg-pink-200 px-5 py-2 rounded-md">
            Careers
          </a>
          <a href="/about" className="hover:bg-pink-200 px-5 py-2 rounded-md">
            About Us
          </a>
        </div>

        {/* Right - Search & Button (Desktop) */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search Events"
              className="border rounded-md pl-5 pr-16 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <span className="absolute right-3 top-1.5 text-gray-500 cursor-pointer">
              <Search />
            </span>
          </div>
          <CircleUserRound className="w-10 h-10 text-pink-500 cursor-pointer" />

          <button className="bg-pink-600 text-white px-4 py-2 rounded-xl hover:bg-pink-700 transition">
            Host Opportunities
          </button>
        </div>

        {/* Hamburger Icon (Mobile) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 focus:outline-none"
          >
            {isOpen ? (
              <X className="h-12 w-12" />
            ) : (
              <div className="flex space-x-10 justify-contant-center">
                <CircleUserRound className="w-10 h-10 text-pink-500 cursor-pointer" />
                <Menu className="h-12 w-12" />
              </div>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="flex flex-col space-y-3 p-4 font-medium text-gray-700">
            <a href="/" className="hover:text-pink-600">
              Home
            </a>

            {/* Events Dropdown for Mobile */}
            <details className="group">
              <summary className="cursor-pointer hover:text-pink-600 flex justify-between items-center">
                Events
                <span className="ml-1 group-open:rotate-180 transition">▾</span>
              </summary>
              <div className="ml-4 mt-2 flex flex-col space-y-2">
                <a href="/events/opportunities" className="hover:text-pink-600">
                  Opportunities
                </a>
                <a href="/events/workshops" className="hover:text-pink-600">
                  Workshops
                </a>
              </div>
            </details>

            <a href="/careers" className="hover:text-pink-600">
              Careers
            </a>
            <a href="/about" className="hover:text-pink-600">
              About Us
            </a>

            {/* Search Bar */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search Events"
                className="w-full border rounded-full pl-3 pr-10 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <span className="absolute right-3 top-1.5 text-gray-500">
                <Search className="w-4 h-4" />
              </span>
            </div>

            {/* CTA Button */}
            <button className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition">
              Host Opportunities
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
