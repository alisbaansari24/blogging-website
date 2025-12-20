"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const cardRef = useRef(null);
  const contentRef = useRef(null);
  const listRef = useRef([]);
  const counterRef = useRef(null);

  const [counts, setCounts] = useState({
    users: 0,
    jobs: 0,
    stories: 0,
  });

  /* ================= GSAP ANIMATIONS ================= */
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(imageRef.current, {
        opacity: 0,
        x: -60,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      gsap.from(cardRef.current, {
        opacity: 0,
        y: 40,
        scale: 0.9,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });

      gsap.from(contentRef.current, {
        opacity: 0,
        x: 60,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      gsap.from(listRef.current, {
        opacity: 0,
        y: 20,
        stagger: 0.2,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 80%",
        },
      });

      gsap.from(counterRef.current.children, {
        opacity: 0,
        y: 30,
        stagger: 0.25,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: counterRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  /* ================= COUNTER ANIMATION ================= */
  useEffect(() => {
    let users = 0;
    let jobs = 0;
    let stories = 0;

    const interval = setInterval(() => {
      users = Math.min(users + 200000, 4000000);
      jobs = Math.min(jobs + 600, 12000);
      stories = Math.min(stories + 1000000, 20000000);

      setCounts({ users, jobs, stories });

      if (users === 4000000 && jobs === 12000 && stories === 20000000) {
        clearInterval(interval);
      }
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={sectionRef} className="bg-white py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* ================= LEFT IMAGE ================= */}
        <div ref={imageRef} className="relative">
          <Image
            src="/about.webp"
            alt="About"
            width={520}
            height={620}
            className="rounded-2xl object-cover"
          />

          {/* FLOATING CARD */}
          <div
            ref={cardRef}
            className="absolute bottom-0 right-0 bg-white rounded-xl shadow-xl p-5 w-64"
          >
            <div className="absolute -top-4 -left-4 w-9 h-9 bg-[#1967d2] rounded-full flex items-center justify-center">
              <Check size={18} className="text-white" />
            </div>

            <h4 className="font-semibold text-gray-900 text-lg">
              300k+ Employers
            </h4>

            <div className="mt-3 flex -space-x-3">
              {["/job1.webp", "/job2.webp", "/job3.webp", "/job4.webp", "/job5.webp"].map(
                (img, i) => (
                  <Image
                    key={i}
                    src={img}
                    alt="User"
                    width={36}
                    height={36}
                    className="rounded-full border-2 border-white"
                  />
                )
              )}
            </div>
          </div>
        </div>

        {/* ================= RIGHT CONTENT ================= */}
        <div ref={contentRef}>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Millions of Jobs. <br /> Find the one that suits you.
          </h2>

          <p className="mt-5 text-gray-600 leading-relaxed">
            Search all the open positions on the web. Get your own personalized
            salary estimate. Read reviews on over 600,000 companies worldwide.
          </p>

          <ul className="mt-6 space-y-4">
            {[
              "Bring to the table win-win survival",
              "Capitalize on low hanging fruit",
              "But I must explain to you how all this",
            ].map((text, i) => (
              <li
                key={i}
                ref={(el) => (listRef.current[i] = el)}
                className="flex items-start gap-3"
              >
                <span className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                  <Check size={14} className="text-[#1967d2]" />
                </span>
                <span className="text-gray-700">{text}</span>
              </li>
            ))}
          </ul>

          <Link
            href="/jobs"
            className="inline-block mt-8 px-8 py-3 bg-[#1967d2] text-white rounded-lg font-medium hover:bg-blue-700 transition"
          >
            Get Started
          </Link>
        </div>
      </div>

      {/* ================= COUNTERS ================= */}
      <div
        ref={counterRef}
        className="mt-24 max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-12 text-center"
      >
        <div>
          <h3 className="text-3xl font-semibold text-gray-900">
            {Math.floor(counts.users / 1000000)}M
          </h3>
          <p className="mt-2 text-gray-600">4 million daily active users</p>
        </div>

        <div>
          <h3 className="text-3xl font-semibold text-gray-900">
            {counts.jobs / 1000}k
          </h3>
          <p className="mt-2 text-gray-600">Over 12k open job positions</p>
        </div>

        <div>
          <h3 className="text-3xl font-semibold text-gray-900">
            {Math.floor(counts.stories / 1000000)}M
          </h3>
          <p className="mt-2 text-gray-600">Over 20 million stories shared</p>
        </div>
      </div>
    </section>
  );
}
