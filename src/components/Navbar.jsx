"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import LoginModal from "@/components/LoginModal";
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
const [openLogin, setOpenLogin] = useState(false);

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
    { label: "Home", href: "/", items: [] },
    { label: "Find Jobs", href: "/jobs", items: [] },
    {
      label: "Employers",
      items: [
        { label: "Employers List", href: "/employers" },
        { label: "Employers Single", href: "/employers/details" },
        { label: "Employers Dashboard", href: "/employers/dashboard" },
      ],
    },
    {
      label: "Candidates",
      items: [
        { label: "Candidates List", href: "/candidates" },
        { label: "Candidates Single", href: "/candidates/details" },
        { label: "Candidates Dashboard", href: "/candidates/dashboard" },
      ],
    },
    {
      label: "Blog",
      items: [
        { label: "Blogs", href: "/blog" },
        { label: "Blog Details", href: "/blog/details" },
      ],
    },
    {
      label: "Pages",
      items: [
        { label: "Shop", href: "/shop" },
        { label: "About", href: "/about" },
        { label: "Pricing", href: "/pricing" },
        { label: "FAQ's", href: "/faq" },
        { label: "Terms", href: "/terms" },
        { label: "Invoice", href: "/invoice" },
        { label: "Contact", href: "/contact" },
        { label: "404", href: "/not-found" },
      ],
    },
  ].map((menu, i) => (
    <div key={i} className="relative group">
      {/* MAIN LINK */}
      {menu.items.length === 0 ? (
        <Link
          href={menu.href}
          className="hover:text-[#1967d2] transition"
        >
          {menu.label}
        </Link>
      ) : (
        <>
          <span className="cursor-pointer hover:text-[#1967d2] transition">
            {menu.label}
          </span>

          {/* DROPDOWN */}
          <div className="absolute left-0 top-full mt-3 w-56 bg-white shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
            {menu.items.map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                className="block px-5 py-3 text-sm text-gray-700 hover:bg-[#f0f5f7] hover:text-[#1967d2]"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </>
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
          <button
  onClick={() => setOpenLogin(true)}
  className="px-4 py-2 text-sm text-[#1967d2] border border-[#1967d2] rounded-lg hover:bg-[#1967d2] hover:text-white"
>
  Login / Register
</button>

<LoginModal
  isOpen={openLogin}
  onClose={() => setOpenLogin(false)}
/>
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
