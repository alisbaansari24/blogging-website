"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, MapPin, DollarSign, Briefcase } from "lucide-react";

/* ================= INPUT COMPONENT ================= */
function Input({ placeholder, icon, value, onChange }) {
  return (
    <div className="flex items-center gap-2 border rounded-lg px-4 py-3">
      {icon}
      <input
        className="w-full outline-none text-sm"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

/* ================= DATA ================= */
const candidatesData = [
  {
    id: 1,
    name: "Darlene Robertson",
    role: "UI Designer",
    location: "London, UK",
    rate: 99,
    image: "/t4.webp",
    featured: true,
  },
  {
    id: 2,
    name: "Wade Warren",
    role: "Developer",
    location: "London, UK",
    rate: 94,
    image: "/t2.webp",
    featured: true,
  },
  {
    id: 3,
    name: "Leslie Alexander",
    role: "Marketing Expert",
    location: "London, UK",
    rate: 99,
    image: "/t5.webp",
    featured: true,
  },
  {
    id: 4,
    name: "Floyd Miles",
    role: "Charted Accountant",
    location: "London, UK",
    rate: 88,
    image: "/t1.webp",
    featured: true,
  },
  {
    id: 5,
    name: "Darlene Robertson",
    role: "UI Designer",
    location: "London, UK",
    rate: 77,
    image: "/t4.webp",
    featured: true,
  },
  {
    id: 6,
    name: "Wade Warren",
    role: "Developer",
    location: "London, UK",
    rate: 66,
    image: "/t5.webp",
    featured: true,
  },
  {
    id: 7,
    name: "Leslie Alexander",
    role: "Marketing Expert",
    location: "London, UK",
    rate: 99,
    image: "/t3.webp",
    featured: true,
  },
  {
    id: 8,
    name: "Floyd Miles",
    role: "Charted Accountant",
    location: "London, UK",
    rate: 89,
    image: "/t6.webp",
    featured: true,
  },
  {
    id: 9,
    name: "Darlene Robertson",
    role: "UI Designer",
    location: "London, UK",
    rate: 79,
    image: "/t3.webp",
    featured: true,
  },
  {
    id: 10,
    name: "Wade Warren",
    role: "Developer",
    location: "London, UK",
    rate: 99,
    image: "/t6.webp",
    featured: true,
  },
];

/* ================= PAGE ================= */
export default function CandidatesPage() {
  const [keyword, setKeyword] = useState("");
  const [city, setCity] = useState("");
  const [category, setCategory] = useState("");
  const [sortBy, setSortBy] = useState("newest");
  const [perPage, setPerPage] = useState(6);
  const [page, setPage] = useState(1);

  /* ================= FILTER LOGIC ================= */
  const filtered = useMemo(() => {
    let data = [...candidatesData];

    if (keyword) {
      data = data.filter((c) =>
        c.name.toLowerCase().includes(keyword.toLowerCase())
      );
    }

    if (city) {
      data = data.filter((c) =>
        c.location.toLowerCase().includes(city.toLowerCase())
      );
    }

    if (sortBy === "oldest") data.reverse();

    return data;
  }, [keyword, city, sortBy]);

  const totalPages = Math.ceil(filtered.length / perPage);
  const visible = filtered.slice(
    (page - 1) * perPage,
    page * perPage
  );

  return (
    <main className="bg-[#f5f7fc] min-h-screen py-10">
      {/* ================= SEARCH BAR ================= */}
      <section className="max-w-7xl mx-auto px-4 mt-20">
        <div className="bg-white rounded-xl shadow p-6">
          <div className="grid md:grid-cols-4 gap-4">
            <Input
              placeholder="Job title, keywords, or company"
              icon={<Search size={16} />}
              value={keyword}
              onChange={setKeyword}
            />
            <Input
              placeholder="City or postcode"
              icon={<MapPin size={16} />}
              value={city}
              onChange={setCity}
            />
            <select
              className="border rounded-lg px-4 text-sm"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Choose category</option>
              <option>Design</option>
              <option>Development</option>
              <option>Marketing</option>
            </select>
            <button className="bg-blue-600 text-white rounded-lg font-medium">
              Find Candidates
            </button>
          </div>
        </div>
      </section>

      {/* ================= SORT BAR ================= */}
      <section className="max-w-7xl mx-auto px-4 mt-8 flex flex-col md:flex-row justify-between gap-4">
        <select
          className="border rounded-lg px-4 py-2 text-sm"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
        </select>

        <select
          className="border rounded-lg px-4 py-2 text-sm"
          value={perPage}
          onChange={(e) => {
            setPerPage(Number(e.target.value));
            setPage(1);
          }}
        >
          <option value={15}>15 per page</option>
          <option value={20}>20 per page</option>
          <option value={25}>25 per page</option>
        </select>
      </section>

      {/* ================= CANDIDATE CARDS ================= */}
      <section className="max-w-7xl mx-auto px-4 mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {visible.map((c) => (
          <div key={c.id} className="bg-white rounded-xl shadow p-6 text-center">
            {/* FEATURED */}
            <span className="inline-block bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded-full mb-4">
              Featured
            </span>

            {/* IMAGE */}
            <div className="flex justify-center">
              <Image
                src={c.image}
                width={90}
                height={90}
                className="rounded-full"
                alt=""
              />
            </div>

            {/* INFO */}
            <h3 className="mt-4 font-semibold">{c.name}</h3>
            <p className="text-sm text-gray-500">{c.role}</p>

            <div className="flex justify-center gap-4 text-sm text-gray-600 mt-3">
              <span className="flex items-center gap-1">
                <MapPin size={14} /> {c.location}
              </span>
              <span className="flex items-center gap-1">
                <DollarSign size={14} /> ${c.rate} / hour
              </span>
            </div>

            {/* TAGS */}
            <div className="flex justify-center gap-2 mt-4">
              {["App", "Design", "Digital"].map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 text-xs bg-gray-100 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* BUTTON */}
            <Link
              href={`/candidates/${c.id}`}
              className="inline-block mt-5 px-5 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition text-sm"
            >
              View Profile
            </Link>
          </div>
        ))}
      </section>

      {/* ================= PAGINATION ================= */}
      <div className="flex justify-center gap-2 mt-12">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i + 1)}
            className={`px-4 py-2 rounded-lg text-sm ${
              page === i + 1
                ? "bg-blue-600 text-white"
                : "bg-white border"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </main>
  );
}
