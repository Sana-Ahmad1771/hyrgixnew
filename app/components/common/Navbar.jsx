"use client"; // Required for useState in Next.js App Router

import Image from "next/image"
import { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react"
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/aboutus" },
    { name: "Products", href: "/products" },
    { name: "Blogs", href: "/blogs" },
    { name: "Contact", href: "/contactus" },
  ];

  return (
    <nav className="relative">
      <section
        className={` bg-white shadow-[0_20px_41.1px_0_rgba(0,0,0,0.05)]  flex justify-between items-center  mx-5 md:mx-20 lg:mx-30  px-5 py-3 mt-10 z-50 relative transition-all duration-300 ${isOpen ? 'rounded-t-4xl rounded-b-none' : 'rounded-4xl'}`}>

        {/* Logo Section */}
        <Link href="/" className="flex rounded-4xl items-center justify-center w-30 h-12 bg-[#F37303]">
          <div className="px-1.5"><span className="text-white font-bold">Hygrix</span></div>
          <div className="grid items-center p-2 grid-cols-3 bg-[#F5F5F5] h-10 w-12 rounded-r-full">
            <span className="w-2 h-2 mt-1 bg-[#F37303] rounded-full"></span>
            <span className="w-1 h-1 bg-[#F37303] rounded-full"></span>
            <span className="w-1.5 h-1.5 mb-1 bg-[#F37303] rounded-full"></span>
            <span></span> <span></span><span className="w-1 h-1 relative -top-1 left-2 bg-[#F37303] rounded-full"></span><span></span>
            <span className="w-1.5 h-1.5 relative right-1 bg-[#F37303] rounded-full"></span><span></span><span className="w-1 h-1 ml-2 relative left-4 -top-0.5 bg-[#F37303] rounded-full"></span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex gap-6 items-center">
          {navLinks.map((link, index) => (
            <div key={link.name} className="flex items-center gap-6">
              <Link href={link.href} className="hover:text-[#F37303] transition-colors">
                <span>{link.name}</span>
              </Link>
              {index !== navLinks.length - 1 && (
                <Image src="/Line.png" alt="Navigation separator" width={8} height={12} className="w-2 h-3" />
              )}
            </div>
          ))}
        </div>

        {/* Desktop Contact Button */}
        <Link href="/contact" className="hidden lg:flex items-center justify-center w-24.5 h-11 rounded-[100px] bg-black shadow-[-13px_22px_12.8px_0_rgba(255,255,255,0.25)] cursor-pointer hover:bg-gray-800 transition-all">
          <span className="text-white text-sm">Contact Us</span>
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <span className="text-2xl font-bold">✕</span> // Simple Close Icon
          ) : (
            <Image src="/Menu.png" alt="Open navigation menu" width={32} height={32} className="w-8" />
          )}
        </button>
      </section>

      {/* Mobile Menu Overlay */}
      <div className={`
        lg:hidden absolute top-full left-0 right-0 mx-5 md:mx-20 lg:mx-30  bg-white shadow-xl overflow-hidden transition-all duration-300 ease-in-out z-40
        ${isOpen ? "max-h-82 opacity-100 rounded-b-4xl" : "max-h-0 opacity-0"}
      `}>
        <div className="flex flex-col p-6 gap-4 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium border-b border-gray-100 w-full text-center pb-2"
            >
              {link.name}
            </Link>
          ))}
          <div className="w-full flex justify-center mt-2">
            <div className="flex items-center justify-center w-full h-11 rounded-[100px] bg-black">
              <span className="text-white">Contact Us</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}