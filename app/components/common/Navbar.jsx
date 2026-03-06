"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/aboutus" },
    { name: "Products", href: "/products" },
    { name: "Blogs", href: "/blogs" },
    { name: "Contact", href: "/contactus" },
  ];

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <nav className="fixed top-0 left-0 w-full z-[60] flex justify-center pointer-events-none">
      <section
        className={`
          mt-3 max-w-[1650px] flex justify-between items-center z-50 relative transition-all duration-700 ease-in-out pointer-events-auto
          ${
            scrolled
              ? "w-[90%] md:w-[70%] lg:w-[70%] px-4 py-2 bg-white/70 backdrop-blur-xl border border-white/40 shadow-2xl rounded-full"
              : "w-[95%] md:w-[90%] px-4 py-2 backdrop-blur-md bg-white/20 border border-white/40 rounded-full shadow-sm"
          }
        `}
      >
        {/* Logo Section */}
        <Link
          href="/"
          className="flex rounded-4xl items-center justify-center w-30 h-12 bg-primary"
        >
          <div className="px-1.5">
            <span className="text-white font-bold">Hygrix</span>
          </div>

          <div className="grid items-center p-2 grid-cols-3 bg-[#F5F5F5] h-10 w-12 rounded-r-full">
            <span className="w-2 h-2 mt-1 bg-primary rounded-full"></span>
            <span className="w-1 h-1 bg-primary rounded-full"></span>
            <span className="w-1.5 h-1.5 mb-1 bg-primary rounded-full"></span>
            <span></span> <span></span>
            <span className="w-1 h-1 relative -top-1 left-2 bg-primary rounded-full"></span>
            <span></span>
            <span className="w-1.5 h-1.5 relative right-1 bg-primary rounded-full"></span>
            <span></span>
            <span className="w-1 h-1 ml-2 relative left-4 -top-0.5 bg-primary rounded-full"></span>
          </div>
        </Link>

        {/* Desktop Navigation - Clean Spacing */}
        <div className="hidden lg:flex gap-2 items-center bg-white rounded-full shadow p-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`
                px-5 py-3 rounded-full text-xs font-bold transition-all duration-300
                ${
                  isActive(link.href)
                    ? "bg-black text-white shadow-sm"
                    : "text-black hover:bg-white/50 hover:text-primary"
                }
              `}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop Contact Button - Modern Minimalism */}
        <Link
          href="/contactus"
          className={`
            hidden md:flex px-6 py-4 rounded-full font-black text-[11px] uppercase tracking-widest transition-all duration-500
            ${
              scrolled
                ? "bg-primary text-white hover:bg-black shadow-lg shadow-primary/20"
                : "bg-black text-white hover:bg-primary"
            }
          `}
        >
          Contact Team
        </Link>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-3 bg-black/5 rounded-full hover:bg-black/10 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className="w-5 h-5 text-black" />
          ) : (
            <Image src="/Menu.png" alt="Menu" width={24} height={24} />
          )}
        </button>
      </section>

      {/* Mobile Menu Overlay - Floating Glass style */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-24 left-5 right-5 bg-white/90 backdrop-blur-2xl rounded-[2rem] shadow-2xl border border-white/50 p-6 lg:hidden pointer-events-auto"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`p-4 rounded-2xl text-center font-bold transition-all ${isActive(link.href) ? "bg-primary text-white" : "bg-black/5 text-[#171717]"}`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
