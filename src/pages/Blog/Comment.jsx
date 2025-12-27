"use client";

import Image from "next/image";
import { Facebook, Twitter } from "lucide-react";

export default function PostFooterSection() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-5xl mx-auto px-6">

        {/* ================= SHARE BUTTONS ================= */}
        <div className="flex flex-wrap items-center justify-center gap-3 text-sm font-medium">
          <span className="text-gray-700 mr-2">Share this post :</span>

          <button className="px-4 py-2 rounded-full bg-blue-600 text-white">
            Facebook
          </button>
          <button className="px-4 py-2 rounded-full bg-sky-500 text-white">
            Twitter
          </button>
          <button className="px-4 py-2 rounded-full bg-red-500 text-white">
            Google+
          </button>

          <button className="px-4 py-2 rounded-full bg-purple-600 text-white">
            App
          </button>
          <button className="px-4 py-2 rounded-full bg-green-600 text-white">
            Design
          </button>
          <button className="px-4 py-2 rounded-full bg-orange-500 text-white">
            Digital
          </button>
        </div>

        {/* ================= DIVIDER ================= */}
        <hr className="my-12 border-gray-300" />

        {/* ================= PREV / NEXT ================= */}
        <div className="flex flex-col md:flex-row justify-between gap-10 text-center md:text-left">
          <div>
            <p className="text-sm text-gray-500">Previous Post</p>
            <h4 className="font-semibold text-gray-900 mt-1">
              Given Set was without from god divide rule Hath
            </h4>
          </div>

          <div>
            <p className="text-sm text-gray-500">Next Post</p>
            <h4 className="font-semibold text-gray-900 mt-1">
              Tree earth fowl given moveth deep lesser After
            </h4>
          </div>
        </div>

        {/* ================= DIVIDER ================= */}
        <hr className="my-12 border-gray-300" />

        {/* ================= COMMENTS ================= */}
        <h3 className="text-2xl font-semibold mb-8 text-gray-900">
          Comment
        </h3>

        {/* COMMENT 1 */}
        <div className="flex gap-5 mb-10">
          <Image
            src="/t3.webp"
            alt="Oscar Cafeo"
            width={60}
            height={60}
            className="rounded-full"
          />
          <div>
            <h4 className="font-semibold">Oscar Cafeo</h4>
            <p className="text-sm text-gray-500 mb-2">Beautiful courses</p>
            <p className="text-gray-700">
              Far much that one rank beheld bluebird after outside ignobly
              allegedly more when oh arrogantly vehement tantaneously eel
              valiantly petted this along across highhandedly much.
            </p>
          </div>
        </div>

        {/* COMMENT 2 */}
        <div className="flex gap-5 mb-16">
          <Image
            src="/t1.webp"
            alt="Alex Morgan"
            width={60}
            height={60}
            className="rounded-full"
          />
          <div>
            <h4 className="font-semibold">Alex Morgan</h4>
            <p className="text-sm text-gray-500 mb-2">Beautiful courses</p>
            <p className="text-gray-700">
              Far much that one rank beheld bluebird after outside ignobly
              allegedly more when oh arrogantly vehement tantaneously eel
              valiantly petted this along across highhandedly much.
            </p>
          </div>
        </div>

        {/* ================= COMMENT FORM ================= */}
        <h3 className="text-2xl font-semibold mb-8 text-gray-900">
          Leave your thought here
        </h3>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Your Name*"
            required
            className="border border-gray-300 px-4 py-3 rounded-md w-full"
          />

          <input
            type="email"
            placeholder="Your Email*"
            required
            className="border border-gray-300 px-4 py-3 rounded-md w-full"
          />

          <input
            type="text"
            placeholder="Subject *"
            required
            className="border border-gray-300 px-4 py-3 rounded-md w-full md:col-span-2"
          />

          <textarea
            rows="5"
            placeholder="Write your message..."
            required
            className="border border-gray-300 px-4 py-3 rounded-md w-full md:col-span-2"
          />

          <div className="md:col-span-2">
            <button
              type="submit"
              className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition"
            >
              Send Massage
            </button>
          </div>
        </form>

      </div>
    </section>
  );
}
