"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  ChevronDown,
  Menu,
  X,
  User,
  LogIn,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navBg = scrolled ? "bg-white shadow-sm" : "bg-[#f0f5f7]";

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${navBg}`}
    >
      <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-9 h-9 bg-[#1967d2] rounded-full flex items-center justify-center text-white font-bold">
            S
          </div>
          <span className="text-xl font-semibold text-gray-900">Superio</span>
        </Link>

        {/* DESKTOP MENU */}
        <nav className="hidden lg:flex items-center gap-8 text-gray-800 font-medium">
          {[
            { label: "Home", items: [] },
            { label: "Find Jobs", items: [] },
            {
              label: "Employers",
              items: [
                "Employers List",
                "Employers Single",
                "Employers Dashboard",
              ],
            },
            {
              label: "Candidates",
              items: [
                "Candidates List",
                "Candidates Single",
                "Candidates Dashboard",
              ],
            },
            {
              label: "Blog",
              items: ["Blogs", "Blog Details"],
            },
            {
              label: "Pages",
              items: [
                "Shop",
                "About",
                "Pricing",
                "FAQ's",
                "Terms",
                "Invoice",
                "Contact",
                "404",
              ],
            },
          ].map((menu, i) => (
            <div
              key={i}
              className="relative"
              onMouseEnter={() => setActiveDropdown(menu.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 hover:text-[#1967d2]">
                {menu.label}
                {menu.items.length > 0 && <ChevronDown size={16} />}
              </button>

              {menu.items.length > 0 &&
                activeDropdown === menu.label && (
                  <div className="absolute top-full left-0 mt-3 bg-white shadow-lg rounded-lg w-56 py-2 text-sm">
                    {menu.items.map((item, idx) => (
                      <Link
                        key={idx}
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                )}
            </div>
          ))}
        </nav>

        {/* DESKTOP ACTIONS */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/upload-cv"
            className="text-sm text-[#1967d2] hover:underline"
          >
            Upload your CV
          </Link>
          <Link
            href="/login"
            className="px-4 py-2 text-sm bg-[#e7effa] text-[#1967d2] rounded-lg"
          >
            Login / Register
          </Link>
          <Link
            href="/job-post"
            className="px-4 py-2 text-sm bg-[#1967d2] text-white rounded-lg"
          >
            Job Post
          </Link>
        </div>

        {/* MOBILE ICONS */}
        <div className="lg:hidden flex items-center gap-3">
          <User size={20} />
          <LogIn size={20} />
          <button onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="lg:hidden bg-white px-6 py-6 space-y-5 text-gray-800">
          {[
            "Home",
            "Find Jobs",
            "Employers",
            "Candidates",
            "Blog",
            "Pages",
          ].map((item, i) => (
            <div key={i} className="font-medium">
              {item}
            </div>
          ))}

          <div className="border-t pt-5 text-sm space-y-3">
            <p className="font-semibold">Call us</p>
            <p className="text-[#1967d2] font-semibold">
              123 456 7890
            </p>
            <p>
              329 Queensberry Street, North Melbourne VIC 3051, Australia.
            </p>
            <p className="text-[#1967d2]">support@superio.com</p>

            <div className="flex gap-4 pt-2">
              <Facebook size={18} />
              <Twitter size={18} />
              <Instagram size={18} />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
