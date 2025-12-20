"use client";

import Link from "next/link";
import {
  Briefcase,
  Megaphone,
  Palette,
  Code,
  Users,
  Car,
  Headphones,
  HeartPulse,
  ClipboardList,
} from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const categories = [
  {
    title: "Accounting / Finance",
    jobs: "2 open positions",
    icon: Briefcase,
    link: "/jobs/accounting",
  },
  {
    title: "Marketing",
    jobs: "86 open positions",
    icon: Megaphone,
    link: "/jobs/marketing",
  },
  {
    title: "Design",
    jobs: "43 open positions",
    icon: Palette,
    link: "/jobs/design",
  },
  {
    title: "Development",
    jobs: "12 open positions",
    icon: Code,
    link: "/jobs/development",
  },
  {
    title: "Human Resource",
    jobs: "55 open positions",
    icon: Users,
    link: "/jobs/hr",
  },
  {
    title: "Automotive Jobs",
    jobs: "2 open positions",
    icon: Car,
    link: "/jobs/automotive",
  },
  {
    title: "Customer Service",
    jobs: "2 open positions",
    icon: Headphones,
    link: "/jobs/customer-service",
  },
  {
    title: "Health and Care",
    jobs: "25 open positions",
    icon: HeartPulse,
    link: "/jobs/health",
  },
  {
    title: "Project Management",
    jobs: "92 open positions",
    icon: ClipboardList,
    link: "/jobs/project-management",
  },
];

export default function PopularCategoriesPage() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power3.out" },
    });

    tl.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.6 }
    )
      .fromTo(
        headingRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8 }
      )
      .fromTo(
        cardsRef.current,
        { opacity: 0, y: 30, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.12,
        },
        "-=0.3"
      );
  }, []);

  return (
    <>
      <section ref={sectionRef} className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">

          {/* HEADING */}
          <div ref={headingRef} className="text-center">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
              Popular Job Categories
            </h2>
            <p className="mt-3 text-gray-600">
              2020 jobs live - 293 added today.
            </p>
          </div>

          {/* CARDS */}
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat, index) => {
              const Icon = cat.icon;
              return (
                <Link
                  ref={(el) => (cardsRef.current[index] = el)}
                  key={index}
                  href={cat.link}
                  className="group bg-white border rounded-xl p-6 flex items-start gap-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  {/* ICON */}
                  <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-gray-100 group-hover:bg-blue-50 transition">
                    <Icon className="w-7 h-7 text-gray-500 group-hover:text-[#1967d2] transition" />
                  </div>

                  {/* TEXT */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {cat.title}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      ({cat.jobs})
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>

        </div>
      </section>

      {/* HORIZONTAL LINE */}
      <div className="max-w-7xl mx-auto px-6">
        <hr className="border-t border-gray-200" />
      </div>
    </>
  );
}
