"use client";

import Image from "next/image";
import Link from "next/link";

const articles = [
  {
    image: "/news1.webp",
    date: "August 31, 2021",
    comments: "12 Comment",
    title: "Attract Sales And Profits",
  },
  {
    image: "/news2.webp",
    date: "August 31, 2021",
    comments: "12 Comment",
    title: "5 Tips For Your Job Interview",
  },
  {
    image: "/news3.webp",
    date: "August 31, 2021",
    comments: "12 Comment",
    title: "How To Find Your Dream Job",
  },
];

export default function NewsPage() {
  return (
    <section className="bg-[#f0f5f7] py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADING */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Recent News Articles
          </h2>
          <p className="mt-3 text-gray-600">
            Fresh job related news content posted each day.
          </p>
        </div>

        {/* CARDS */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* IMAGE */}
              <div className="overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={260}
                  className="w-full h-[240px] object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6">
                {/* META */}
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <Link href="#hero" className="hover:text-[#1967d2]">
                    {item.date}
                  </Link>
                  <Link href="#hero" className="hover:text-[#1967d2]">
                    {item.comments}
                  </Link>
                </div>

                {/* TITLE */}
                <h3 className="mt-4 text-lg font-semibold text-gray-900 hover:text-[#1967d2] transition">
                  <Link href="/details">
                    {item.title}
                  </Link>
                </h3>

                {/* DESCRIPTION */}
                <p className="mt-3 text-gray-600">
                  A job ravenously while Far much that one rank beheld after
                  outside....
                </p>

                {/* READ MORE */}
                <Link
                  href="/details"
                  className="inline-block mt-4 text-[#1967d2] font-medium hover:underline"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
