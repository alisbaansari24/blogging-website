"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, Upload } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function HomePage() {
  const leftRef = useRef(null);
  const imageRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      leftRef.current,
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 1 }
    )
      .fromTo(
        imageRef.current,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 1 },
        "-=0.6"
      )
      .fromTo(
        cardsRef.current,
        { opacity: 0, y: 30, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
        },
        "-=0.4"
      );
  }, []);

  return (
    <section className="bg-[#f0f5f7] min-h-[110vh] pt-32 pb-24 flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* ================= LEFT CONTENT ================= */}
        <div ref={leftRef}>
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight">
            There Are <span className="text-[#1967d2]">93,178 </span>
            Postings Here
            <br />
            <span>For you!</span>
          </h1>

          <p className="mt-4 text-lg text-gray-600">
            Find Jobs, Employment & Career Opportunities
          </p>

          <div className="mt-8 bg-white rounded-xl shadow-md p-3 flex flex-col md:flex-row gap-3">
            <input
              type="text"
              placeholder="Job title, keywords, or company"
              className="flex-1 px-4 py-3  rounded-lg outline-none"
            />

            <input
              type="text"
              placeholder="City or postcode"
              className="flex-1 px-4 py-3 rounded-lg outline-none"
            />

            <Link
              href="/jobs"
              className="px-6 py-3 bg-[#1967d2] text-white rounded-lg font-medium hover:bg-blue-700 transition text-center"
            >
              Find Jobs
            </Link>
          </div>

          <p className="mt-4 text-sm text-gray-600">
            <span className="font-medium text-gray-800">Popular Searches :</span>{" "}
            Designer, Developer, Web, IOS, PHP, Senior, Engineer
          </p>
        </div>

        {/* ================= RIGHT CONTENT ================= */}
        <div className="relative hidden lg:flex justify-center">
          <Image
            ref={imageRef}
            src="/hero.svg"
            alt="Hero"
            width={520}
            height={650}
            className="rounded-2xl object-contain"
          />

          <div
            ref={(el) => (cardsRef.current[0] = el)}
            className="absolute -left-10 top-12 bg-white p-4 rounded-xl shadow-md w-60"
          >
            <div className="flex items-center gap-3">
              <Mail className="text-[#1967d2]" />
              <div>
                <p className="text-sm font-medium text-gray-800">
                  Work Inquiry From
                </p>
                <p className="text-sm text-gray-600">Ali Tufan</p>
                <p className="text-xs text-gray-400">ali@email.com</p>
              </div>
            </div>
          </div>

          <div
            ref={(el) => (cardsRef.current[1] = el)}
            className="absolute -right-10 top-28 bg-white p-4 rounded-xl shadow-md w-52"
          >
            <p className="text-lg font-semibold text-gray-900">
              10k+ Candidates
            </p>
            <div className="flex mt-2 -space-x-2">
              <img className="w-8 h-8 rounded-full border" src="https://randomuser.me/api/portraits/men/32.jpg" />
              <img className="w-8 h-8 rounded-full border" src="https://randomuser.me/api/portraits/women/44.jpg" />
              <img className="w-8 h-8 rounded-full border" src="https://randomuser.me/api/portraits/men/46.jpg" />
              <img className="w-8 h-8 rounded-full border" src="https://randomuser.me/api/portraits/women/65.jpg" />
            </div>
          </div>

          <div
            ref={(el) => (cardsRef.current[2] = el)}
            className="absolute left-14 bottom-28 bg-white p-4 rounded-xl shadow-md w-52"
          >
            <p className="text-sm text-gray-500">Creative Agency</p>
            <p className="text-lg font-semibold text-gray-900">Startup</p>
          </div>

          <div
            ref={(el) => (cardsRef.current[3] = el)}
            className="absolute right-10 bottom-12 bg-white p-4 rounded-xl shadow-md w-56"
          >
            <div className="flex items-center gap-3">
              <Upload className="text-[#1967d2]" />
              <div>
                <p className="font-medium text-gray-900">
                  Upload Your CV
                </p>
                <p className="text-sm text-gray-500">
                  It only takes a few seconds
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
