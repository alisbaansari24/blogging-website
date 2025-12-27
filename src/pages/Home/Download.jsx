"use client";

import Image from "next/image";
import Link from "next/link";
import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AppDownloadPage() {
  useLayoutEffect(() => {
    // 🔥 RESET VISIBILITY (CRITICAL FIX)
    gsap.set(
      [
        ".app-image",
        ".app-text > *",
        ".recruit-text > *",
        ".recruit-image",
      ],
      { autoAlpha: 1 }
    );

    const ctx = gsap.context(() => {
      /* ================= APP SECTION ================= */
      const appTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".app-section",
          start: "top 75%",
          toggleActions: "play none none reset",
        },
      });

      appTl
        .from(".app-image", {
          x: -80,
          autoAlpha: 0,
          duration: 1.1,
          ease: "power3.out",
        })
        .from(
          ".app-text > *",
          {
            y: 40,
            autoAlpha: 0,
            stagger: 0.2,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.6"
        );

      /* ================= RECRUIT SECTION ================= */
      const recruitTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".recruit-section",
          start: "top 75%",
          toggleActions: "play none none reset",
        },
      });

      recruitTl
        .from(".recruit-text > *", {
          y: 40,
          autoAlpha: 0,
          stagger: 0.25,
          duration: 0.8,
          ease: "power3.out",
        })
        .from(
          ".recruit-image",
          {
            x: 80,
            autoAlpha: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.6"
        );
    });

    ScrollTrigger.refresh();

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <>
      {/* ================= APP DOWNLOAD ================= */}
      <section className="app-section bg-white py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="app-image relative flex justify-center">
            <div className="absolute w-[380px] h-[380px] md:w-[440px] md:h-[440px] bg-[#f0f5f7] rounded-full -z-10" />
            <Image
              src="/app.webp"
              alt="App Preview"
              width={460}
              height={460}
              className="relative object-contain"
            />
          </div>

          <div className="app-text">
            <p className="text-[#1967d2] font-semibold tracking-wide">
              DOWNLOAD & ENJOY
            </p>

            <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-gray-900">
              Get the Superio Job <br /> Search App
            </h2>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Search through millions of jobs and find the right fit.
              <br />
              swipe right to apply.
            </p>

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
          <div className="recruit-text">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
              Recruiting?
            </h2>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Advertise your jobs to millions of monthly users and search 15.8
              million <br />
              CVs in our database.
            </p>

            {/* ✅ BUTTON NOW VISIBLE + ANIMATED */}
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
