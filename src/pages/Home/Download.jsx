"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AppDownloadPage() {
  useEffect(() => {
  // APP SECTION
  gsap.from(".app-image", {
    x: -80,
    autoAlpha: 0,
    duration: 1.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".app-section",
      start: "top 75%",
    },
  });

  gsap.from(".app-text p, .app-text h2, .app-text div", {
    y: 40,
    autoAlpha: 0,
    duration: 0.9,
    stagger: 0.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".app-section",
      start: "top 75%",
    },
  });

  // ✅ RECRUITING SECTION (FIXED)
  gsap.from(
    [
      ".recruit-text h2",
      ".recruit-text p",
      ".recruit-text button",
    ],
    {
      y: 40,
      autoAlpha: 0,
      duration: 0.9,
      stagger: 0.25,
      ease: "power3.out",
      clearProps: "all", // 🔥 IMPORTANT
      scrollTrigger: {
        trigger: ".recruit-section",
        start: "top 75%",
      },
    }
  );

  gsap.from(".recruit-image", {
    x: 80,
    autoAlpha: 0,
    duration: 1.1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".recruit-section",
      start: "top 75%",
    },
  });
}, []);
  return (
    <>
      {/* ================= APP DOWNLOAD ================= */}
      <section className="app-section bg-white py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT IMAGE WITH OVAL BG */}
          <div className="app-image relative flex justify-center">
            {/* OVAL BACKGROUND */}
            <div className="absolute w-[380px] h-[380px] md:w-[440px] md:h-[440px] bg-[#f0f5f7] rounded-full -z-10" />

            <Image
              src="/app.webp"
              alt="App Preview"
              width={460}
              height={460}
              className="relative object-contain"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="app-text">
            <p className="text-[#1967d2] font-semibold tracking-wide">
              DOWNLOAD & ENJOY
            </p>

            <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-gray-900">
              Get the Superio Job <br /> Search App
            </h2>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Search through millions of jobs and find the right fit. Simply
              <br />
              swipe right to apply.
            </p>

            {/* STORE BUTTONS */}
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="https://apple.com" target="_blank">
                <Image
                  src="/store.webp"
                  alt="Apple Store"
                  width={180}
                  height={60}
                  className="hover:scale-105 transition"
                />
              </Link>

              <Link href="https://play.google.com" target="_blank">
                <Image
                  src="/play.webp"
                  alt="Google Play"
                  width={180}
                  height={60}
                  className="hover:scale-105 transition"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= RECRUITING ================= */}
      <section className="recruit-section bg-[#f0f5f7] py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT TEXT */}
          <div className="recruit-text">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
              Recruiting?
            </h2>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Advertise your jobs to millions of monthly users and search 15.8
              million <br />
              CVs in our database.
            </p>

           <button
  onClick={() =>
    document.getElementById("hero")?.scrollIntoView({
      behavior: "smooth",
    })
  }
  className="mt-8 px-8 py-3 bg-[#1967d2] text-white rounded-lg font-medium hover:bg-blue-700 transition"
>
  Start Recruiting Now
</button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="recruit-image flex justify-center lg:justify-end">
            <Image
              src="/recruiting.png"
              alt="Recruiting"
              width={420}
              height={420}
              className="object-contain"
            />
          </div>
        </div>
      </section>
    </>
  );
}
