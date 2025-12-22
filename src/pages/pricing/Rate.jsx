"use client";

import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";

export default function PricingPage() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative h-[320px] md:h-[380px]">
        <Image
          src="/blog.jpg"
          alt="Blog"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-3xl md:text-4xl font-semibold">Pricing</h1>
          <p className="mt-2 text-sm md:text-base">
            <Link href="/" className="hover:underline">
              Home
            </Link>{" "}
            /Pricing
          </p>
        </div>
      </section>

      {/* ================= PRICING ================= */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">

          {/* HEADING */}
          <h2 className="text-3xl md:text-4xl font-semibold text-center text-gray-900">
            Pricing Packages
          </h2>

          {/* CARDS */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* BASIC */}
            <div className="border border-blue-500 rounded-2xl p-8 flex flex-col">
              <h3 className="text-lg font-semibold text-blue-600">
                Basic
              </h3>

              <p className="mt-4 text-4xl font-semibold text-gray-900">
                $199 <span className="text-base font-normal text-gray-500">/ monthly</span>
              </p>

              <ul className="mt-8 space-y-4 text-gray-700">
                <li className="flex items-center gap-3">
                  <Check className="text-blue-600" size={18} />
                  30 job posting
                </li>
                <li className="flex items-center gap-3">
                  <Check className="text-blue-600" size={18} />
                  3 featured job
                </li>
                <li className="flex items-center gap-3">
                  <Check className="text-blue-600" size={18} />
                  Job displayed for 15 days
                </li>
                <li className="flex items-center gap-3">
                  <Check className="text-blue-600" size={18} />
                  Premium Support 24/7
                </li>
              </ul>

              <button className="mt-auto bg-blue-100 hover:bg-blue-200 transition text-blue-600 py-3 rounded-xl mt-10">
                Add to Cart
              </button>
            </div>

            {/* STANDARD */}
            <div className="border-2 border-blue-600 rounded-2xl p-8 flex flex-col relative">
              <span className="absolute top-6 right-6 bg-blue-100 text-blue-600 text-sm px-4 py-1 rounded-full">
                Recommended
              </span>

              <h3 className="text-lg font-semibold text-blue-600">
                Standard
              </h3>

              <p className="mt-4 text-4xl font-semibold text-gray-900">
                $499 <span className="text-base font-normal text-gray-500">/ monthly</span>
              </p>

              <ul className="mt-8 space-y-4 text-gray-700">
                <li className="flex items-center gap-3">
                  <Check className="text-blue-600" size={18} />
                  40 job posting
                </li>
                <li className="flex items-center gap-3">
                  <Check className="text-blue-600" size={18} />
                  5 featured job
                </li>
                <li className="flex items-center gap-3">
                  <Check className="text-blue-600" size={18} />
                  Job displayed for 20 days
                </li>
                <li className="flex items-center gap-3">
                  <Check className="text-blue-600" size={18} />
                  Premium Support 24/7
                </li>
              </ul>

              <button className="mt-auto bg-blue-600 hover:bg-blue-700 transition text-white py-3 rounded-xl mt-10">
                Add to Cart
              </button>
            </div>

            {/* EXTENDED */}
            <div className="border border-gray-200 rounded-2xl p-8 flex flex-col">
              <h3 className="text-lg font-semibold text-blue-600">
                Extended
              </h3>

              <p className="mt-4 text-4xl font-semibold text-gray-900">
                $799 <span className="text-base font-normal text-gray-500">/ monthly</span>
              </p>

              <ul className="mt-8 space-y-4 text-gray-700">
                <li className="flex items-center gap-3">
                  <Check className="text-blue-600" size={18} />
                  50 job posting
                </li>
                <li className="flex items-center gap-3">
                  <Check className="text-blue-600" size={18} />
                  10 featured job
                </li>
                <li className="flex items-center gap-3">
                  <Check className="text-blue-600" size={18} />
                  Job displayed for 60 days
                </li>
                <li className="flex items-center gap-3">
                  <Check className="text-blue-600" size={18} />
                  Premium Support 24/7
                </li>
              </ul>

              <button className="mt-auto bg-blue-100 hover:bg-blue-200 transition text-blue-600 py-3 rounded-xl mt-10">
                Add to Cart
              </button>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
