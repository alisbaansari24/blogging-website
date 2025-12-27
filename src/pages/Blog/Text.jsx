"use client";

import Image from "next/image";
import { CheckCircle } from "lucide-react";

export default function CourseDescriptionPage() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-5xl mx-auto px-6">

        {/* ================= HEADING ================= */}
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-gray-900">
          Course Description
        </h2>

        {/* ================= DESCRIPTION TEXT ================= */}
        <div className="mt-10 text-gray-700 leading-relaxed space-y-6">
          <p>
            Aliquam hendrerit sollicitudin purus, quis rutrum mi accumsan nec.
            Quisque bibendum orci ac nibh facilisis, at malesuada orci congue.
            Nullam tempus sollicitudin cursus. Ut et adipiscing erat.
            Curabitur{" "}
            <a href="#" className="text-blue-600 underline">
              this is a text link
            </a>{" "}
            libero tempus congue.
          </p>

          <p>
            Duis mattis laoreet neque, et ornare neque sollicitudin at. Proin
            sagittis dolor sed mi elementum pretium. Donec et justo ante.
            Vivamus egestas sodales est, eu rhoncus urna semper eu. Cum sociis
            natoque penatibus et magnis dis parturient montes, nascetur ridiculus
            mus. Integer tristique elit lobortis purus bibendum, quis dictum
            metus mattis. Phasellus posuere felis sed eros porttitor mattis.
            Curabitur massa magna, tempor in blandit id, porta in ligula.
            Aliquam laoreet nisl massa, at interdum mauris sollicitudin et.
          </p>
        </div>

        {/* ================= HIGHLIGHT BOX ================= */}
        <div className="mt-12 bg-[#f0f5f7] p-8 rounded-xl">
          <p className="text-gray-800">
            Aliquam hendrerit sollicitudin purus, quis rutrum mi accumsan nec.
            Quisque bibendum orci ac nibh facilisis, at malesuada orci congue.
          </p>

          <p className="mt-4 font-semibold text-gray-900">
            Luis Pickford
          </p>
        </div>

        {/* ================= WHAT YOU'LL LEARN ================= */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8">
            What you&apos;ll learn
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Become a UI/UX designer.",
              "Build a UI project from beginning to end.",
              "You will be able to start earning money Figma skills.",
              "Work with colors & fonts.",
              "You will create your own UI Kit.",
              "Become a UI/UX designer.",
              "Build a UI project from beginning to end.",
              "You will be able to start earning money Figma skills.",
              "Work with colors & fonts.",
              "You will create your own UI Kit.",
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="text-green-600 w-5 h-5 mt-1" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ================= IMAGE ================= */}
        <div className="mt-16">
          <Image
            src="/course.webp" // add your image
            alt="Course"
            width={900}
            height={500}
            className="rounded-2xl w-full object-cover"
          />
        </div>

        {/* ================= REQUIREMENTS ================= */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">
            Requirements
          </h3>

          <ul className="space-y-3 text-gray-700 list-disc list-inside">
            <li>
              We do not require any previous experience or pre-defined skills to
              take this course. A great orientation would be enough to master
              UI/UX design.
            </li>
            <li>A computer with a good internet connection.</li>
            <li>Adobe Photoshop (OPTIONAL)</li>
          </ul>
        </div>

        {/* ================= DIVIDER ================= */}
        <hr className="mt-16 border-gray-300" />

      </div>
    </section>
  );
}
