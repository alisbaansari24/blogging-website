"use client";

import Image from "next/image";
import { Bookmark, Search, Building2, Home, Factory } from "lucide-react";
import { useMemo, useState } from "react";

/* ================= DATA ================= */
const companies = [
  { name: "Stripe", jobs: 22, img: "/c1.webp" },
  { name: "Dropbox", jobs: 22, img: "/c2.webp" },
  { name: "Figma", jobs: 21, img: "/c3.webp" },
  { name: "Udemy", jobs: 15, img: "/c4.webp" },
  { name: "Netflix", jobs: 5, img: "/c5.webp" },
  { name: "Opendoor", jobs: 12, img: "/c6.webp" },
  { name: "Checkr", jobs: 11, img: "/c7.webp" },
  { name: "Mural", jobs: 9, img: "/c8.webp" },
  { name: "Astronomer", jobs: 8, img: "/c9.webp" },
  { name: "Invision", jobs: 4, img: "/c10.webp" },
  { name: "Upwork", jobs: 7, img: "/c11.webp" },
  { name: "Segment", jobs: 6, img: "/c12.webp" },
  { name: "Medium", jobs: 12, img: "/c13.webp" },
  { name: "Udemy", jobs: 2, img: "/c4.webp" },
];

const filledCompanies = Array.from({ length: 24 }).map(
  (_, i) => companies[i % companies.length]
);

export default function CompaniesPage() {
  const [keyword, setKeyword] = useState("");
  const [city, setCity] = useState("");
  const [category, setCategory] = useState("");
  const [founded, setFounded] = useState("");
  const [sortBy, setSortBy] = useState("newest");
  const [perPage, setPerPage] = useState(24);
  const [page, setPage] = useState(1);

  /* ================= FILTER ================= */
  const filtered = useMemo(() => {
    let data = [...filledCompanies];

    if (keyword)
      data = data.filter((c) =>
        c.name.toLowerCase().includes(keyword.toLowerCase())
      );

    if (sortBy === "oldest") data = data.reverse();

    return data;
  }, [keyword, sortBy]);

  const totalPages = Math.ceil(filtered.length / perPage);
  const paginated = filtered.slice(
    (page - 1) * perPage,
    page * perPage
  );

  return (
    <main className="bg-[#f5f7fc] min-h-screen py-10">
      {/* ================= SEARCH BAR ================= */}
   <section className="max-w-7xl mx-auto px-4 mt-12 md:mt-20">


        <div className="bg-white rounded-xl shadow p-6 flex flex-col gap-4">
          <div className="grid md:grid-cols-4 gap-4">
            <Input
              placeholder="Job title, keywords, or company"
              icon={<Search size={18} />}
              value={keyword}
              onChange={setKeyword}
            />
            <Input
              placeholder="City or postcode"
              icon={<Search size={18} />}
              value={city}
              onChange={setCity}
            />
            <select
              className="border rounded-lg px-4"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Choose a category</option>
              <option>Residential</option>
              <option>Commercial</option>
              <option>Industrial</option>
              <option>Apartments</option>
            </select>
            <button className="bg-blue-600 text-white rounded-lg font-medium">
              Find Jobs
            </button>
          </div>

          
        </div>
      </section>

      {/* ================= FOUNDED FILTER ================= */}
      <section className="max-w-7xl mx-auto px-4 mt-8">
        <label className="block text-sm mb-2">Founded Date</label>
        <select
          value={founded}
          onChange={(e) => setFounded(e.target.value)}
          className="border px-4 py-2 rounded-lg w-64"
        >
          <option value="">All</option>
          <option>1900-1950</option>
          <option>1950-2000</option>
          <option>2000-2028</option>
        </select>
      </section>

      {/* ================= HEADER ================= */}
      <section className="max-w-7xl mx-auto px-4 mt-10 flex justify-between items-center">
        <h2 className="font-semibold">24 Jobs</h2>

        <div className="flex gap-4">
          <select
            className="border px-4 py-2 rounded"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
          </select>

          <select
            className="border px-4 py-2 rounded"
            value={perPage}
            onChange={(e) => setPerPage(Number(e.target.value))}
          >
            <option value={10}>10 per page</option>
            <option value={20}>20 per page</option>
            <option value={24}>24 per page</option>
          </select>
        </div>
      </section>

      {/* ================= CARDS ================= */}
      <section className="max-w-7xl mx-auto px-4 mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {paginated.map((c, i) => (
          <div
            key={i}
            className="bg-white rounded-xl p-5 relative shadow hover:shadow-lg transition"
          >
            <span className="absolute top-3 left-3 bg-pink-100 text-pink-600 text-xs px-3 py-1 rounded-full">
              Featured
            </span>

            <Bookmark className="absolute top-4 right-4 text-gray-400" />

            <div className="flex justify-center mt-6">
              <Image
                src={c.img}
                alt={c.name}
                width={64}
                height={64}
                className="rounded-full"
              />
            </div>

            <div className="text-center mt-4">
              <h3 className="font-semibold">{c.name}</h3>
              <p className="text-sm text-gray-500">London, UK</p>
              <p className="text-sm text-gray-500">Accounting / Finance</p>
              <p className="text-blue-600 text-sm mt-1">
                Open Jobs – {c.jobs}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* ================= PAGINATION ================= */}
      <div className="flex justify-center gap-2 mt-10">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i + 1)}
            className={`px-4 py-2 border rounded ${
              page === i + 1 ? "bg-blue-600 text-white" : ""
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </main>
  );
}

/* ================= SMALL COMPONENTS ================= */

function Input({ placeholder, icon, value, onChange }) {
  return (
    <div className="flex items-center border rounded-lg px-3 gap-2">
      {icon}
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full py-2 outline-none"
      />
    </div>
  );
}

function Category({ icon, label }) {
  return (
    <div className="flex items-center gap-2 text-sm text-gray-600">
      {icon}
      {label}
    </div>
  );
}
