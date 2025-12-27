"use client";

import Image from "next/image";

export default function BlogDetailsPage() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-4xl mx-auto px-6">

        {/* ================= TITLE ================= */}
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-snug text-center">
          Attract Sales And Profits toward the sunshine – and shadows will fall
          behind you.
        </h1>

        {/* ================= META INFO ================= */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600">

          {/* AUTHOR */}
          <div className="flex items-center gap-2">
            <Image
              src="/t2.webp" // add a small author image
              alt="Alison Dawn"
              width={32}
              height={32}
              className="rounded-full object-cover"
            />
            <span className="font-medium text-gray-800">
              Alison Dawn
            </span>
          </div>

          {/* DATE */}
          <span>August 31, 2021</span>

          {/* COMMENTS */}
          <span>12 Comment</span>
        </div>

        {/* ================= BLOG IMAGE ================= */}
        <div className="mt-12">
          <Image
            src="/news1.webp" // add your blog image
            alt="Blog Details"
            width={900}
            height={500}
            className="rounded-2xl object-cover w-full"
          />
        </div>

      </div>
    </section>
  );
}
