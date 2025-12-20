"use client";

import Link from "next/link";
import { useEffect } from "react";
import { Facebook, Twitter, Instagram } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  useEffect(() => {
    gsap.from(".footer-col", {
      y: 40,
      autoAlpha: 0,
      duration: 0.9,
      stagger: 0.15,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "footer",
        start: "top 85%",
      },
    });

    gsap.from(".footer-bottom", {
      autoAlpha: 0,
      y: 20,
      duration: 0.6,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".footer-bottom",
        start: "top 95%",
      },
    });
  }, []);

  return (
    <footer className="bg-white border-t border-gray-200">
      {/* ================= MAIN FOOTER ================= */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">

        {/* LOGO + CONTACT */}
        <div className="footer-col">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-9 h-9 rounded-full bg-[#1967d2] flex items-center justify-center text-white font-bold">
              S
            </div>
            <span className="text-xl font-semibold text-gray-900">Superio</span>
          </div>

          <p className="text-sm text-gray-600 mb-3">Call us</p>
          <p className="text-lg font-semibold text-[#1967d2] mb-4">
            123 456 7890
          </p>

          <p className="text-sm text-gray-600 leading-relaxed">
            329 Queensberry Street, North Melbourne VIC 3051, Australia.
          </p>

          <p className="text-sm text-gray-600 mt-2">
            support@superio.com
          </p>
        </div>

        {/* FOR CANDIDATES */}
        <div className="footer-col">
          <h4 className="font-semibold text-gray-900 mb-4">
            For Candidates
          </h4>
          <ul className="space-y-3 text-sm text-gray-600">
            <li><Link href="/jobs" className="hover:text-[#1967d2]">Browse Jobs</Link></li>
            <li><Link href="/categories" className="hover:text-[#1967d2]">Browse Categories</Link></li>
            <li><Link href="/dashboard" className="hover:text-[#1967d2]">Candidate Dashboard</Link></li>
            <li><Link href="/alerts" className="hover:text-[#1967d2]">Job Alerts</Link></li>
            <li><Link href="/bookmarks" className="hover:text-[#1967d2]">My Bookmarks</Link></li>
          </ul>
        </div>

        {/* FOR EMPLOYERS */}
        <div className="footer-col">
          <h4 className="font-semibold text-gray-900 mb-4">
            For Employers
          </h4>
          <ul className="space-y-3 text-sm text-gray-600">
            <li><Link href="/candidates" className="hover:text-[#1967d2]">Browse Candidates</Link></li>
            <li><Link href="/employer-dashboard" className="hover:text-[#1967d2]">Employer Dashboard</Link></li>
            <li><Link href="/add-job" className="hover:text-[#1967d2]">Add Job</Link></li>
            <li><Link href="/packages" className="hover:text-[#1967d2]">Job Packages</Link></li>
          </ul>
        </div>

        {/* ABOUT US */}
        <div className="footer-col">
          <h4 className="font-semibold text-gray-900 mb-4">
            About Us
          </h4>
          <ul className="space-y-3 text-sm text-gray-600">
            <li><Link href="/about" className="hover:text-[#1967d2]">About Us</Link></li>
            <li><Link href="/invoice" className="hover:text-[#1967d2]">Job Page Invoice</Link></li>
            <li><Link href="/terms" className="hover:text-[#1967d2]">Terms Page</Link></li>
            <li><Link href="/blog" className="hover:text-[#1967d2]">Blog</Link></li>
            <li><Link href="/contact" className="hover:text-[#1967d2]">Contact</Link></li>
          </ul>
        </div>

        {/* RESOURCES */}
        <div className="footer-col">
          <h4 className="font-semibold text-gray-900 mb-4">
            Helpful Resources
          </h4>
          <ul className="space-y-3 text-sm text-gray-600">
            <li><Link href="/sitemap" className="hover:text-[#1967d2]">Site Map</Link></li>
            <li><Link href="/terms" className="hover:text-[#1967d2]">Terms of Use</Link></li>
            <li><Link href="/privacy" className="hover:text-[#1967d2]">Privacy Center</Link></li>
            <li><Link href="/security" className="hover:text-[#1967d2]">Security Center</Link></li>
            <li><Link href="/accessibility" className="hover:text-[#1967d2]">Accessibility Center</Link></li>
          </ul>
        </div>
      </div>

      {/* ================= BOTTOM BAR ================= */}
      <div className="footer-bottom border-t border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()} Superio by ib-themes. All Right Reserved.
          </p>

          <div className="flex items-center gap-4">
            <Link href="#"><Facebook size={18} /></Link>
            <Link href="#"><Twitter size={18} /></Link>
            <Link href="#"><Instagram size={18} /></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
