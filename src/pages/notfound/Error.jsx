"use client";

import Image from "next/image";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <section className="relative min-h-screen flex items-center justify-center ">
      
      {/* ===== BACKGROUND IMAGE ===== */}
      <Image
        src="/bg.jpg"  
        alt="Background"
        fill
        priority
        className=""
      />

      {/* OVERLAY */}
      <div className="absolute inset-0" />

      {/* ===== CONTENT ===== */}
      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center text-white">

        {/* CENTER IMAGE */}
        <div className="flex justify-center">
          <Image
            src="/404.png" 
            alt="Page Not Found"
            width={320}
            height={260}
            className="object-contain"
          />
        </div>

        {/* HEADING */}
        <h1 className="mt-8 text-3xl md:text-4xl text-black font-semibold">
          Page Not Found?
        </h1>

        {/* TEXT */}
        <p className="mt-4 text-lg text-black">
          Whoops, this is embarassing.
          <br />
          Looks like the page you were looking for wasn&apos;t found.
        </p>

        {/* BUTTON */}
        <Link
          href="/"
          className="inline-block mt-8 px-8 py-3 bg-[#1967d2] text-white rounded-lg font-medium hover:bg-blue-700 transition"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
