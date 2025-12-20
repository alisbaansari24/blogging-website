"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Bookmark,
  Building2,
  MapPin,
  Clock,
  DollarSign,
} from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const jobs = [
  {
    title: "Recruiting Coordinator",
    company: "Catalyst",
    type: "Freelancer",
    image: "/job1.webp",
  },
  {
    title: "Product Manager, Studio",
    company: "Invision",
    type: "Part Time",
    image: "/job2.webp",
  },
  {
    title: "Senior Product Designer",
    company: "Upwork",
    type: "Temporary",
    image: "/job3.webp",
  },
  {
    title: "Senior Full Stack Engineer, Creator Success",
    company: "Medium",
    type: "Full Time",
    image: "/job4.webp",
  },
  {
    title: "Software Engineer (Android), Libraries",
    company: "Figma",
    type: "Freelancer",
    image: "/job5.webp",
  },
  {
    title: "Software Engineer (Android), Libraries",
    company: "Segment",
    type: "Full Time",
    image: "/job6.webp",
  },
];

export default function FeaturedJobsPage() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardsRef = useRef([]);
  const buttonRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      },
      defaults: { ease: "power3.out" },
    });

    tl.fromTo(
      headingRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.8 }
    )
      .fromTo(
        cardsRef.current,
        { opacity: 0, y: 30, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.12,
        },
        "-=0.3"
      )
      .fromTo(
        buttonRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 },
        "-=0.2"
      );
  }, []);

  return (
    <section ref={sectionRef} className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADING */}
        <div ref={headingRef} className="text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Featured Jobs
          </h2>
          <p className="mt-3 text-gray-600">
            Know your worth and find the job that qualify your life
          </p>
        </div>

        {/* JOB CARDS */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
          {jobs.map((job, index) => (
            <Link
              ref={(el) => (cardsRef.current[index] = el)}
              href="/jobs/details"
              key={index}
              className="group bg-white border rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* TOP ROW */}
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <Image
                    src={job.image}
                    alt={job.company}
                    width={48}
                    height={48}
                    className="rounded-lg object-cover"
                  />

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {job.title}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {job.company}
                    </p>
                  </div>
                </div>

                <Bookmark className="text-gray-400 group-hover:text-[#1967d2] transition" />
              </div>

              {/* JOB META */}
              <div className="mt-4 flex flex-wrap gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <Building2 size={16} />
                  Segment
                </div>
                <div className="flex items-center gap-1">
                  <MapPin size={16} />
                  London, UK
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={16} />
                  11 hours ago
                </div>
                <div className="flex items-center gap-1">
                  <DollarSign size={16} />
                  $35k - $45k
                </div>
              </div>

              {/* TAGS */}
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="px-3 py-1 text-xs rounded-full bg-blue-50 text-blue-600">
                  {job.type}
                </span>
                <span className="px-3 py-1 text-xs rounded-full bg-gray-100 text-gray-600">
                  Private
                </span>
                <span className="px-3 py-1 text-xs rounded-full bg-red-50 text-red-600">
                  Urgent
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* LOAD MORE BUTTON */}
        <div ref={buttonRef} className="mt-16 flex justify-center">
          <Link
            href="/jobs"
            
           className="inline-block mt-8 px-8 py-3 bg-[#1967d2] text-white rounded-lg font-medium hover:bg-blue-700 transition"
          >
            Load More Listing
          </Link>
        </div>

      </div>
    </section>
  );
}
