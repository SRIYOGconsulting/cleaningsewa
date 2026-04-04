"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import MobileDrawer from "./MobileDrawer";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkIcon, setDarkIcon] = useState(true);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  // Initialize theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("Theme");
    if (savedTheme === "dark") {
      document.body.classList.add("dark");
      setDarkIcon(false);
    } else {
      document.body.classList.remove("dark");
      setDarkIcon(true);
    }
  }, []);

  // Toggle dark/light mode
  const triggerTheme = () => {
    if (document.body.classList.contains("dark")) {
      document.body.classList.remove("dark");
      localStorage.setItem("Theme", "light");
      setDarkIcon(true);
    } else {
      document.body.classList.add("dark");
      localStorage.setItem("Theme", "dark");
      setDarkIcon(false);
    }
  };

  // Handle search navigation
  const handleSearch = () => {
    if (searchQuery.trim() !== "") {
      router.push(`/search?query=${encodeURIComponent(searchQuery)}`);
      setShowSearch(false);
      setSearchQuery("");
    }
  };

  // Trigger search on Enter key
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <header className="header">
      <div className="relative max-w-7xl mx-auto flex items-center justify-between py-4 px-3 sm:px-6">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="block">
            <Image
              src="/logo/cleaning-sewa-logo-wordmark.svg"
              alt="Cleaning Sewa Logo"
              width={200} // optimized width
              height={60} // optimized height
              className="w-[190px] sm:w-[220px] h-auto"
              priority
            />
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex items-center space-x-0 sm:space-x-4">
          {/* Desktop Links */}
          {!showSearch && (
            <div className="hidden lg:flex items-center space-x-6">
              <Link href="/" className="text-[16px] hover:text-teal-700">
                Home
              </Link>
              <Link href="/about" className="text-[16px] hover:text-teal-700">
                About
              </Link>
              <Link href="/services" className="text-[16px] hover:text-teal-700">
                Services
              </Link>
              <Link href="/projects" className="text-[16px] hover:text-teal-700">
                Projects
              </Link>
              <Link href="/contact" className="text-[16px] hover:text-teal-700">
                Contact
              </Link>

              <Link href="/career">
                <button className="border cursor-pointer text-[16px] border-teal-900 hover:text-black rounded px-4 py-1 hover:bg-teal-50">
                  Career
                </button>
              </Link>

              <Link href="/book">
                <button className="bg-teal-900 cursor-pointer text-[16px] border border-teal-900 text-white px-4 py-1 rounded hover:bg-teal-800">
                  Book Now
                </button>
              </Link>
            </div>
          )}

          {/* Mobile Book Now */}
          {!showSearch && (
            <div className="lg:hidden w-[80%] mx-auto">
              <Link href="/book">
                <button className="bg-[#ebebeb] cursor-pointer sm:hidden border-[1.5px] border-teal-800 text-black px-4 py-1 rounded hover:bg-teal-800 w-full">
                  Book Now
                </button>
              </Link>
            </div>
          )}

          {/* Search Input */}
          <div className="absolute md:right-52 lg:right-24">
            <div
              className={`hidden md:flex relative bg-white ml-2 mr-8 z-20 border rounded-md transition-all duration-300 ease-in-out h-8 ${
                showSearch
                  ? "w-[250px] lg:w-[550px] opacity-100 px-3 py-1"
                  : "w-0 opacity-0 px-0 py-0 overflow-hidden"
              }`}
            >
              <button
                onClick={() => setShowSearch(false)}
                className="text-black cursor-pointer absolute -top-1.5 left-2 font-bold text-3xl bottom-1"
                aria-label="Close search"
              >
                ‹
              </button>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Search..."
                className={`absolute left-8 right-0 top-0 bottom-0 border-none outline-none rounded-r-md transition-all duration-300 ease-in-out ${
                  showSearch ? "md:w-[300px] lg:w-[517px] opacity-100" : "w-0 opacity-0 px-0 py-0 overflow-hidden"
                }`}
              />
            </div>
          </div>

          {/* Search Icon */}
          {!showSearch && (
            <Image
              width={22}
              height={22}
              alt="search icon"
              onClick={() => setShowSearch(true)}
              src="/icons/search.svg"
              className="w-[22px] h-[22px] cursor-pointer hidden md:block"
            />
          )}

          {/* Dark Mode Toggle */}
          <div className="hidden sm:block">
            <button
              onClick={triggerTheme}
              className={`text-2xl cursor-pointer ml-2 rounded-full h-8 w-8 flex items-center justify-center ${
                darkIcon ? "bg-black text-white rotate-45" : "bg-white text-black"
              }`}
              aria-label="Toggle Dark Mode"
            >
              {darkIcon ? "☽" : "☀︎"}
            </button>
          </div>

          {/* Mobile Drawer */}
          <MobileDrawer setIsOpen={setIsOpen} isOpen={isOpen} />
        </nav>
      </div>
    </header>
  );
};

export default Header;