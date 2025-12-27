"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

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

export default function Page() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* ================= HERO WITH BG IMAGE ================= */}
      <section className="relative h-[90vh] flex items-center justify-center text-center text-white">
        <Image
          src="/Area.jpg"
          alt="hero"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 max-w-3xl px-4">
          <h1 className="text-4xl md:text-5xl font-bold">
            Your Dream Jobs Are Waiting
          </h1>
          <p className="mt-4 text-lg">
            Over 1 million interactions, 50,000 success stories. Make yours now.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link
              href="/jobs"
              className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium"
            >
              Search Job
            </Link>
            <Link
              href="/register"
              className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg font-medium"
            >
              Apply Job Now
            </Link>
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="relative py-24 bg-white overflow-hidden">
        {/* side floating avatars */}
        <div className="hidden md:block absolute left-10 top-1/2 -translate-y-1/2 space-y-6">
          <Image src="/t2.webp" width={40} height={40} className="rounded-full" alt="" />
          <Image src="/t3.webp" width={40} height={40} className="rounded-full" alt="" />
        </div>
        <div className="hidden md:block absolute right-10 top-1/2 -translate-y-1/2 space-y-6">
          <Image src="/t1.webp" width={40} height={40} className="rounded-full" alt="" />
          <Image src="/t2.webp" width={40} height={40} className="rounded-full" alt="" />
        </div>

        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold">
            Testimonials From Our Customers
          </h2>
          <p className="mt-3 text-gray-600">
            Lorem ipsum dolor sit amet elit, sed do eiusmod tempor
          </p>

          {/* avatar */}
          <div className="mt-10 flex justify-center">
            <Image
              src={testimonials[active].image}
              width={80}
              height={80}
              className="rounded-full border-4 border-white"
              alt=""
            />
          </div>

          {/* oval testimonial */}
          <div className="mt-6 bg-gray-200 rounded-full px-8 py-6">
            <h4 className="font-semibold text-lg">
              {testimonials[active].title}
            </h4>
            <p className="text-gray-700 mt-2">
              {testimonials[active].text}
            </p>
          </div>

          <p className="mt-4 font-semibold">
            {testimonials[active].name}
          </p>
          <p className="text-sm text-gray-500">
            {testimonials[active].role}
          </p>

          {/* dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <span
                key={i}
                className={`w-3 h-3 rounded-full cursor-pointer ${
                  i === active ? "bg-blue-600" : "bg-gray-400"
                }`}
                onClick={() => setActive(i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
<section className="bg-[#f5f7fc] py-24">
  <div className="max-w-7xl mx-auto px-4 text-center">
    <h2 className="text-3xl md:text-4xl font-bold">How It Works?</h2>
    <p className="mt-2 text-gray-600 text-sm md:text-base">
      Job for anyone, anywhere
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-14">
      
      {/* CARD 1 */}
      <div className="bg-white rounded-2xl p-8 shadow hover:shadow-lg transition">
        <Image
          src="/resume.png"
          width={90}
          height={90}
          alt="Resume Assessment"
          className="mx-auto"
        />
        <h3 className="mt-6 font-semibold text-lg">
          Free Resume Assessments
        </h3>
        <p className="mt-3 text-gray-600 text-sm leading-relaxed">
          Employers on average spend 31 seconds scanning resumes to identify
          potential matches.
        </p>
      </div>

      {/* CARD 2 */}
      <div className="bg-white rounded-2xl p-8 shadow hover:shadow-lg transition">
        <Image
          src="/score.png"
          width={90}
          height={90}
          alt="Job Fit Scoring"
          className="mx-auto"
        />
        <h3 className="mt-6 font-semibold text-lg">
          Job Fit Scoring
        </h3>
        <p className="mt-3 text-gray-600 text-sm leading-relaxed">
          Employers on average spend 31 seconds scanning resumes to identify
          potential matches.
        </p>
      </div>

      {/* CARD 3 */}
      <div className="bg-white rounded-2xl p-8 shadow hover:shadow-lg transition">
        <Image
          src="/support.png"
          width={90}
          height={90}
          alt="Help & Support"
          className="mx-auto"
        />
        <h3 className="mt-6 font-semibold text-lg">
          Help Every Step of the Way
        </h3>
        <p className="mt-3 text-gray-600 text-sm leading-relaxed">
          Employers on average spend 31 seconds scanning resumes to identify
          potential matches.
        </p>
      </div>

    </div>
  </div>
</section>

      {/* ================= BRANDS ================= */}
      <section className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4">
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center">
      <Image
        src="/b1.webp"
        alt="Google"
        width={140}
        height={60}
        className="mx-auto "
      />
      <Image
        src="/b2.webp"
        alt="Amazon"
        width={140}
        height={60}
        className="mx-auto "
      />
      <Image
        src="/b1.webp"
        alt="Microsoft"
        width={140}
        height={60}
        className="mx-auto "
      />
      <Image
        src="/b2.webp"
        alt="Spotify"
        width={140}
        height={60}
        className="mx-auto "
      />
      <Image
        src="/b3.webp"
        alt="Slack"
        width={140}
        height={60}
        className="mx-auto "
      />
      <Image
        src="/b4.webp"
        alt="Dribbble"
        width={140}
        height={60}
        className="mx-auto "
      />
    </div>
  </div>
</section>

    </>
  );
}
