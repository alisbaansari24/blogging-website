"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Bookmark,
  MapPin,
  Clock,
  DollarSign,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

/* ================= JOB DATA (16 CARDS) ================= */
const allJobs = [
  { title: "Software Engineer (Android)", company: "Segment", type: "full-time", experience: 2, salary: 45000, date: 1, image: "/job6.webp" },
  { title: "Recruiting Coordinator", company: "Catalyst", type: "freelancer", experience: 0, salary: 20000, date: 24, image: "/job1.webp" },
  { title: "Senior Product Designer", company: "Upwork", type: "temporary", experience: 4, salary: 60000, date: 7, image: "/job3.webp" },
  { title: "Full Stack Engineer", company: "Medium", type: "full-time", experience: 4, salary: 55000, date: 14, image: "/job4.webp" },
  { title: "Android Engineer", company: "Figma", type: "freelancer", experience: 1, salary: 35000, date: 30, image: "/job5.webp" },
  { title: "Product Manager", company: "Invision", type: "part-time", experience: 2, salary: 30000, date: 7, image: "/job2.webp" },
  { title: "Web Developer", company: "Figma", type: "part-time", experience: 1, salary: 25000, date: 24, image: "/job5.webp" },
  { title: "Technical Architect", company: "Lively", type: "full-time", experience: 4, salary: 70000, date: 1, image: "/job6.webp" },
  { title: "UI Designer", company: "Upwork", type: "temporary", experience: 0, salary: 18000, date: 14, image: "/job3.webp" },
  { title: "Backend Engineer", company: "Segment", type: "freelancer", experience: 2, salary: 40000, date: 30, image: "/job6.webp" },
  { title: "Recruiter", company: "Catalyst", type: "full-time", experience: 1, salary: 30000, date: 7, image: "/job1.webp" },
  { title: "Product Manager Risk", company: "Medium", type: "freelancer", experience: 4, salary: 65000, date: 24, image: "/job4.webp" },
  { title: "UX Designer", company: "Figma", type: "part-time", experience: 2, salary: 32000, date: 14, image: "/job5.webp" },
  { title: "QA Engineer", company: "Upwork", type: "temporary", experience: 1, salary: 22000, date: 7, image: "/job3.webp" },
  { title: "DevOps Engineer", company: "Segment", type: "full-time", experience: 4, salary: 75000, date: 1, image: "/job6.webp" },
  { title: "Marketing Manager", company: "Invision", type: "freelancer", experience: 2, salary: 42000, date: 30, image: "/job2.webp" },
];

export default function JobsPage() {
   const cardsRef = useRef([]);

  /* ================= STATES ================= */
  const [jobType, setJobType] = useState("");
  const [dateFilter, setDateFilter] = useState("");
  const [experience, setExperience] = useState("");
  const [salary, setSalary] = useState("");
  const [sortBy, setSortBy] = useState("newest");
  const [perPage, setPerPage] = useState(8);
  const [currentPage, setCurrentPage] = useState(1);

  /* ================= FILTER LOGIC ================= */
  let filteredJobs = allJobs.filter((job) => {
    if (jobType && job.type !== jobType) return false;
    if (experience && job.experience < Number(experience)) return false;

    if (salary) {
      if (salary === "0-20000" && job.salary > 20000) return false;
      if (salary === "20000-40000" && (job.salary < 20000 || job.salary > 40000)) return false;
      if (salary === "40000-60000" && (job.salary < 40000 || job.salary > 60000)) return false;
      if (salary === "60000+" && job.salary < 60000) return false;
    }

    if (dateFilter && job.date > Number(dateFilter)) return false;
    return true;
  });

  if (sortBy === "newest") filteredJobs.sort((a, b) => a.date - b.date);
  if (sortBy === "oldest") filteredJobs.sort((a, b) => b.date - a.date);

  /* ================= PAGINATION ================= */
  const totalPages = Math.ceil(filteredJobs.length / perPage);
  const jobs = filteredJobs.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage
  );

  /* ================= ANIMATION ================= */
  useEffect(() => {
    gsap.fromTo(
      cardsRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, stagger: 0.08 }
    );
  }, [jobs]);

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative h-[320px]">
        <Image src="/blog.jpg" alt="Jobs" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-white">
          <h1 className="text-4xl font-semibold">Find Jobs</h1>
          <p className="mt-2 text-sm">
            <Link href="/">Home</Link> / Jobs
          </p>
        </div>
      </section>

      {/* ================= FILTERS ================= */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap gap-6 justify-between">
          <div className="flex flex-wrap gap-6">
            <Filter label="Job Type" value={jobType} onChange={setJobType} options={[
              ["", "All"], ["freelancer", "Freelancer"], ["full-time", "Full Time"], ["part-time", "Part Time"], ["temporary", "Temporary"]
            ]} />

            <Filter label="Date" value={dateFilter} onChange={setDateFilter} options={[
              ["", "All"], ["1", "Last Hour"], ["7", "Last 7 Days"], ["14", "Last 14 Days"], ["30", "Last 30 Days"]
            ]} />

            <Filter label="Experience" value={experience} onChange={setExperience} options={[
              ["", "All"], ["0", "Fresher"], ["1", "1 Year"], ["2", "2 Years"], ["4", "4 Years"]
            ]} />

            <Filter label="Salary" value={salary} onChange={setSalary} options={[
              ["", "All"], ["0-20000", "0-20k"], ["20000-40000", "20k-40k"], ["40000-60000", "40k-60k"], ["60000+", "60k+"]
            ]} />
          </div>

          <div className="flex gap-6">
            <Filter label="Sort" value={sortBy} onChange={setSortBy} options={[
              ["newest", "Newest"], ["oldest", "Oldest"]
            ]} />

            <Filter label="Per Page" value={perPage} onChange={(v) => setPerPage(Number(v))} options={[
              ["8", "8"], ["12", "12"], ["16", "16"]
            ]} />
          </div>
        </div>
      </section>

      {/* ================= JOB CARDS ================= */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {jobs.map((job, i) => (
            <Link
              href="/jobs/details"
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              className="border rounded-xl p-6 hover:shadow-xl transition bg-white"
            >
              <div className="flex justify-between">
                <div className="flex gap-4">
                  <Image src={job.image} width={48} height={48} alt="" />
                  <div>
                    <h3 className="font-semibold">{job.title}</h3>
                    <p className="text-sm text-gray-500">{job.company}</p>
                  </div>
                </div>
                <Bookmark />
              </div>

              <div className="mt-4 flex flex-wrap gap-4 text-sm text-gray-500">
                <span className="flex items-center gap-1"><MapPin size={16} /> London</span>
                <span className="flex items-center gap-1"><Clock size={16} /> {job.date}d ago</span>
                <span className="flex items-center gap-1"><DollarSign size={16} /> ${job.salary}</span>
              </div>

              <span className="inline-block mt-4 px-3 py-1 text-xs bg-blue-50 text-blue-600 rounded-full">
                {job.type}
              </span>
            </Link>
          ))}
        </div>

        {/* ================= PAGINATION ================= */}
        <div className="flex justify-center mt-10 gap-2">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-4 py-2 border rounded ${currentPage === i + 1 ? "bg-blue-600 text-white" : ""}`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </section>
    </>
  );
}

/* ================= FILTER COMPONENT ================= */
function Filter({ label, value, onChange, options }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-2">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="border px-4 py-2 rounded-md w-44"
      >
        {options.map(([v, t]) => (
          <option key={v} value={v}>{t}</option>
        ))}
      </select>
    </div>
  );
}
