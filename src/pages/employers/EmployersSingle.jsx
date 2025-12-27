"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Bookmark,
  MessageCircle,
  Building2,
  Clock,
  DollarSign,
} from "lucide-react";

const jobs = [
  {
    title: "Product Manager, Studio",
    company: "Invision",
    type: "Part Time",
    image: "/job2.webp",
  },
  {
    title: "Senior Product Designer",
    company: "Upwork",
    type: "Temporary",
    image: "/job3.webp",
  },
  {
    title: "Senior Full Stack Engineer, Creator Success",
    company: "Medium",
    type: "Full Time",
    image: "/job4.webp",
  },
];
const officeImages = [
  "/office.jpg",
  "/office1.webp",
  "/office2.webp",
  "/office3.webp",
];


export default function CompanyPage() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");

  const submit = () => {
    if (!name || !msg) {
      setError("All fields are required");
      return;
    }
    setError("");
    alert("Message sent successfully!");
    setOpen(false);
    setName("");
    setMsg("");
  };

  return (
    <main className="bg-white py-10 mt-24 md:mt-28">
      {/* ✅ SPACE BETWEEN NAVBAR & PAGE */}

      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-3 gap-8">

        {/* ================= LEFT CONTENT ================= */}
        <div className="lg:col-span-2 space-y-8">

          {/* COMPANY HEADER */}
          <div className="bg-white p-6 rounded-xl shadow flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div className="flex items-center gap-5">
              <Image
                src="/c4.webp"
                alt="Udemy"
                width={80}
                height={80}
                className="rounded-full object-cover"
              />

              <div>
                <h2 className="text-xl font-semibold">Udemy</h2>

                <div className="mt-2 flex flex-wrap gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <MapPin size={14} /> London, UK
                  </span>
                  <span>Accounting / Finance</span>
                  <span className="flex items-center gap-1">
                    <Phone size={14} /> 123 456 7890
                  </span>
                  <span className="flex items-center gap-1">
                    <Mail size={14} /> info@udemy.com
                  </span>
                  <span className="text-blue-600 font-medium">
                    Open Jobs – 15
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={() => setOpen(true)}
                className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                <MessageCircle size={16} />
                Private Message
              </button>

              <Bookmark className="text-gray-400 hover:text-blue-600 cursor-pointer" />
            </div>
          </div>

          {/* ABOUT COMPANY */}
          <div className="bg-white p-6 rounded-xl shadow space-y-6">
            <h3 className="text-lg font-semibold">About Company</h3>

            {/* FULL TEXT ABOVE IMAGES */}
            <p className="text-gray-600 leading-relaxed">
              Moody’s Corporation, often referred to as Moody’s, is an American
              business and financial services company. It is the holding company
              for Moody’s Investors Service (MIS), an American credit rating
              agency, and Moody’s Analytics (MA), an American provider of
              financial analysis software and services.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Moody’s was founded by John Moody in 1909 to produce manuals of
              statistics related to stocks and bonds and bond ratings. Moody’s
              was acquired by Dun & Bradstreet in 1962. In 2000, Dun & Bradstreet
              spun off Moody’s Corporation as a separate company that was listed
              on the NYSE under MCO. In 2007, Moody’s Corporation was split into
              two operating divisions, Moody’s Investors Service and Moody’s
              Analytics.
            </p>

            {/* IMAGE GALLERY */}
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
  {officeImages.map((src, i) => (
    <Image
      key={i}
      src={src}
      alt={`Office ${i + 1}`}
      width={300}
      height={200}
      className="rounded-lg object-cover w-full h-40 md:h-48"
    />
  ))}
</div>

            {/* FULL TEXT BELOW IMAGES */}
            <p className="text-gray-600 leading-relaxed">
              Moody’s Corporation continues to be a global leader in financial
              intelligence, helping organizations make better decisions through
              data, insights, and innovative technology solutions.
            </p>
          </div>

          {/* JOBS SECTION */}
          <div>
            <h3 className="text-xl font-semibold">3 Other jobs available</h3>
            <p className="text-sm text-gray-500 mt-1">
              2020 jobs live - 293 added today.
            </p>

            <div className="mt-6 space-y-6">
              {jobs.map((job, index) => (
                <Link
                  href="/jobs/details"
                  key={index}
                  className="block bg-white border rounded-xl p-6 hover:shadow-lg transition"
                >
                  <div className="flex justify-between items-start">
                    <div className="flex gap-4">
                      <Image
                        src={job.image}
                        alt={job.company}
                        width={48}
                        height={48}
                        className="rounded-lg"
                      />
                      <div>
                        <h4 className="font-semibold">{job.title}</h4>
                        <p className="text-sm text-gray-500">{job.company}</p>
                      </div>
                    </div>
                    <Bookmark className="text-gray-400 hover:text-blue-600" />
                  </div>

                  <div className="mt-4 flex flex-wrap gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <Building2 size={14} /> Segment
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={14} /> London
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={14} /> 11 hours ago
                    </span>
                    <span className="flex items-center gap-1">
                      <DollarSign size={14} /> $35k - $45k
                    </span>
                  </div>

                  <div className="mt-4 flex gap-2">
                    <span className="px-3 py-1 text-xs rounded-full bg-blue-50 text-blue-600">
                      {job.type}
                    </span>
                    <span className="px-3 py-1 text-xs rounded-full bg-gray-100">
                      Private
                    </span>
                    <span className="px-3 py-1 text-xs rounded-full bg-red-50 text-red-600">
                      Urgent
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* ================= RIGHT SIDEBAR ================= */}
        <aside className="space-y-6">
          <div className="bg-[#f5f7fc] p-6 rounded-xl border">
            <h4 className="font-semibold mb-4">Company Information</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><b>Primary industry:</b> Software</li>
              <li><b>Company size:</b> 501–1,000</li>
              <li><b>Founded in:</b> 2011</li>
              <li><b>Phone:</b> 123 456 7890</li>
              <li><b>Email:</b> info@udemy.com</li>
              <li><b>Location:</b> London, UK</li>
              <li><b>Website:</b> www.udemy.com</li>
            </ul>
          </div>

          <div className="bg-[#f5f7fc] p-4 rounded-xl">
            <iframe
              className="w-full h-64 rounded-lg"
              src="https://maps.google.com/maps?q=london&t=&z=13&ie=UTF8&iwloc=&output=embed"
            />
          </div>
        </aside>
      </div>

      {/* MODAL */}
      {open && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl w-full max-w-md">
            <h3 className="text-lg font-semibold mb-4">
              Send message to Udemy
            </h3>

            {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

            <input
              className="w-full border rounded-lg px-4 py-2 mb-3"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <textarea
              className="w-full border rounded-lg px-4 py-2 mb-4"
              placeholder="Message"
              rows={4}
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
            />

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setOpen(false)}
                className="px-4 py-2 border rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={submit}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
