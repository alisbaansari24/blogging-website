"use client";

import Image from "next/image";
import Link from "next/link";

const articles = [
  {
    image: "/news1.webp",
    date: "August 31, 2021",
    comments: "12 Comment",
    title: "Attract Sales And Profits",
    slug: "attract-sales-and-profits",
  },
  {
    image: "/news2.webp",
    date: "August 31, 2021",
    comments: "12 Comment",
    title: "5 Tips For Your Job Interview",
    slug: "job-interview-tips",
  },
  {
    image: "/news3.webp",
    date: "August 31, 2021",
    comments: "12 Comment",
    title: "How To Find Your Dream Job",
    slug: "find-dream-job",
  },
  {
    image: "/news4.webp",
    date: "August 31, 2021",
    comments: "12 Comment",
    title: "An Overworked Newspaper Editor",
    slug: "newspaper-editor",
  },
  {
    image: "/news5.webp",
    date: "August 31, 2021",
    comments: "12 Comment",
    title: "The Best Account Providers",
    slug: "account-providers",
  },
  {
    image: "/news6.webp",
    date: "August 31, 2021",
    comments: "12 Comment",
    title: "How Recruitment Agencies Work",
    slug: "recruitment-agencies",
  },
];

export default function BlogPage() {
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
          <h1 className="text-3xl md:text-4xl font-semibold">Blog</h1>
          <p className="mt-2 text-sm md:text-base">
            <Link href="/" className="hover:underline">
              Home
            </Link>{" "}
            / Blog
          </p>
        </div>
      </section>

      {/* ================= BLOG LIST ================= */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">

          {/* HEADING */}
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
              Recent News Articles
            </h2>
           
          </div>

          {/* CARDS */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((item, i) => (
              <article
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
                    <span>{item.date}</span>
                    <span>{item.comments}</span>
                  </div>

                  {/* TITLE */}
                  <h3 className="mt-4 text-lg font-semibold text-gray-900 hover:text-[#1967d2] transition">
                    <Link href={`/blog/${item.slug}`}>
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
                    href={`/blog/${item.slug}`}
                    className="inline-block mt-4 text-[#1967d2] font-medium hover:underline"
                  >
                    Read More
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* ================= PAGINATION ================= */}
          <div className="mt-16 flex justify-center">
            <div className="flex items-center gap-2">
              <button className="px-4 py-2 border rounded-lg bg-white hover:bg-gray-100">
                Prev
              </button>

              <button className="px-4 py-2 rounded-lg bg-[#1967d2] text-white">
                1
              </button>

              <button className="px-4 py-2 border rounded-lg bg-white hover:bg-gray-100">
                2
              </button>

              <button className="px-4 py-2 border rounded-lg bg-white hover:bg-gray-100">
                3
              </button>

              <button className="px-4 py-2 border rounded-lg bg-white hover:bg-gray-100">
                Next
              </button>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
