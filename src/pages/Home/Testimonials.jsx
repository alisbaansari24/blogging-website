"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    title: "Good Quality!",
    text: `Without JobHunt i’d be homeless, they found me a job and got me
    sorted out quickly with everything! Can’t quite… The Mitech team
    works really hard to ensure high level of quality`,
    name: "Ali Tufan",
    role: "Product Manager",
    image: "/t1.webp",
  },
  {
    title: "Amazing Experience!",
    text: `JobHunt helped me land my dream role within days. The platform
    is easy to use and the support team is outstanding.`,
    name: "Sarah Johnson",
    role: "UI/UX Designer",
    image: "/t2.webp",
  },
  {
    title: "Highly Recommended",
    text: `I found the perfect job match here. The listings are high
    quality and the process is super smooth.`,
    name: "Michael Brown",
    role: "Software Engineer",
    image: "/t3.webp",
  },
];

export default function TestimonialsPage() {
  const [index, setIndex] = useState(0);

  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const sliderRef = useRef(null);
  const brandRefs = useRef([]);

  /* AUTO SLIDE */
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  /* GSAP ANIMATIONS */
  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      sliderRef.current,
      { opacity: 0, scale: 0.96 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sliderRef.current,
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      brandRefs.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: brandRefs.current[0],
          start: "top 85%",
        },
      }
    );
  }, []);

  return (
    <>
      {/* ================= TESTIMONIALS SECTION ================= */}
      <section
        ref={sectionRef}
        className="bg-[#f0f5f7] py-24 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6">

          {/* HEADING */}
          <div
            ref={headingRef}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
              Testimonials From Our Customers
            </h2>
            <p className="mt-3 text-gray-600">
              Lorem ipsum dolor sit amet elit, sed do eiusmod tempor
            </p>
          </div>

          {/* SLIDER */}
          <div ref={sliderRef} className="mt-16 relative">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {testimonials.map((item, i) => (
                <div key={i} className="min-w-full flex justify-center">
                  <div className="bg-white rounded-2xl shadow-lg p-10 max-w-3xl">
                    <p className="text-[#1967d2] font-semibold text-lg">
                      {item.title}
                    </p>

                    <p className="mt-4 text-gray-600 leading-relaxed">
                      {item.text}
                    </p>

                    <div className="mt-8 flex items-center gap-4">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={60}
                        height={60}
                        className="rounded-full object-cover"
                      />
                      <div>
                        <p className="font-semibold text-gray-900">
                          {item.name}
                        </p>
                        <p className="text-sm text-gray-500">
                          {item.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* DOTS */}
            <div className="mt-10 flex justify-center gap-3">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === i
                      ? "bg-[#1967d2] scale-125"
                      : "bg-gray-300 hover:bg-[#1967d2]"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= BRANDS SECTION ================= */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-12">
            {[
              "/b1.webp",
              "/b2.webp",
              "/b1.webp",
              "/b2.webp",
              "/b3.webp",
              "/b4.webp",
            ].map((logo, i) => (
              <div
                key={i}
                ref={(el) => (brandRefs.current[i] = el)}
              >
                <Image
                  src={logo}
                  alt="Brand Logo"
                  width={120}
                  height={50}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* FULL WIDTH LINE */}
        <div className="mt-16 w-full">
          <hr className="border-gray-200 w-full" />
        </div>
      </section>
    </>
  );
}
