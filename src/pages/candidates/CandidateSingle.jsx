"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  DollarSign,
  Download,
  Bookmark,
  Play,
  Briefcase,
  GraduationCap,
  Award,
} from "lucide-react";

/* ================= PAGE ================= */
export default function CandidateProfile() {
  const [openVideo, setOpenVideo] = useState(false);
const officeImages = [
  "/office.jpg",
  "/office1.webp",
  "/office2.webp",
  "/office3.webp",
];

  return (
   <main className="bg-white min-h-screen pt-24 md:pt-32 pb-10">
  <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-3 gap-8">

        {/* ================= LEFT SECTION ================= */}
        <div className="lg:col-span-2 space-y-8">

          {/* ================= TOP CARD ================= */}
          <div className="bg-[#f5f7fc] rounded-xl p-6 flex flex-col md:flex-row justify-between gap-6">
            <div className="flex gap-5">
              <Image
                src="/t4.webp"
                width={90}
                height={90}
                className="rounded-full"
                alt=""
              />

              <div>
                <h2 className="text-xl font-semibold">Darlene Robertson</h2>
                <p className="text-gray-600">UI Designer</p>

                <div className="flex flex-wrap gap-4 text-sm text-gray-600 mt-2">
                  <span className="flex items-center gap-1">
                    <MapPin size={14} /> London, UK
                  </span>
                  <span className="flex items-center gap-1">
                    <DollarSign size={14} /> $99 / hour
                  </span>
                </div>

                <p className="text-sm text-gray-500 mt-2">
                  Member Since: Aug 19, 2020
                </p>

                <div className="flex gap-2 mt-3">
                  {["App", "Design", "Digital"].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs bg-white rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <a
                href="/cv.pdf"
                download
                className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm"
              >
                <Download size={16} /> Download CV
              </a>
              <button className="p-2 bg-white rounded-lg">
                <Bookmark />
              </button>
            </div>
          </div>

          {/* ================= ABOUT ================= */}
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="font-semibold text-lg mb-4">Candidate About</h3>

            {/* VIDEO */}
            <div className="relative rounded-xl overflow-hidden mb-6">
              <Image
                src="/collage2.webp"
                width={800}
                height={400}
                className="w-full"
                alt=""
              />
              <button
                onClick={() => setOpenVideo(true)}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="bg-white p-4 rounded-full">
                  <Play className="text-blue-600" />
                </div>
              </button>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed">
              Hello my name is Nicole Wells and web developer from Portland.
              In pharetra orci dignissim, blandit mi semper, ultricies diam.
              Suspendisse malesuada suscipit nunc non volutpat. Sed porta nulla
              id orci laoreet tempor non consequat enim.
            </p>

            <p className="text-gray-600 text-sm leading-relaxed mt-4">
              Mauris nec erat ut libero vulputate pulvinar. Aliquam ante erat,
              blandit at pretium et, accumsan ac est. Integer vehicula rhoncus
              molestie.
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
          </div>

          {/* ================= EDUCATION ================= */}
          <Section
            title="Education"
            icon={<GraduationCap />}
            items={[
              {
                letter: "M",
                title: "Bachelors in Fine Arts",
                org: "Modern College",
                year: "2012 - 2014",
              },
              {
                letter: "H",
                title: "Computer Science",
                org: "Harvard University",
                year: "2008 - 2012",
              },
            ]}
          />

          {/* ================= EXPERIENCE ================= */}
          <Section
            title="Work & Experience"
            icon={<Briefcase />}
            items={[
              {
                letter: "S",
                title: "Product Designer",
                org: "Spotify Inc.",
                year: "2008 - 2012",
              },
              {
                letter: "D",
                title: "Sr UX Engineer",
                org: "Dropbox Inc.",
                year: "2012 - 2014",
              },
            ]}
          />

          {/* ================= AWARDS ================= */}
          <Section
            title="Awards"
            icon={<Award />}
            items={[
              {
                letter: "E",
                title: "Perfect Attendance Programs",
                org: "Software Algorithm",
                year: "2008 - 2014",
              },
              {
                letter: "F",
                title: "Top Performer Recognition",
                org: "Web Application",
                year: "2012 - 2014",
              },
            ]}
          />
        </div>

        {/* ================= RIGHT SIDEBAR ================= */}
        <aside className="space-y-6">

          {/* DETAILS */}
          <InfoCard
            title="Candidate Details"
            items={[
              ["Experience", "0-2 Years"],
              ["Age", "28-33 Years"],
              ["Current Salary", "11K - 15K"],
              ["Expected Salary", "26K - 30K"],
              ["Gender", "Female"],
              ["Language", "English, German, Spanish"],
              ["Education Level", "Master Degree"],
            ]}
          />

          {/* SOCIAL */}
          <InfoCard title="Social Media">
            <div className="flex gap-4">
              {["facebook", "twitter", "linkedin", "instagram"].map((s) => (
                <div key={s} className="w-9 h-9 bg-white rounded-full shadow" />
              ))}
            </div>
          </InfoCard>

          {/* SKILLS */}
          <InfoCard title="Professional Skills">
            <div className="flex flex-wrap gap-2">
              {[
                "app",
                "administrative",
                "android",
                "wordpress",
                "design",
                "react",
              ].map((skill) => (
                <span
                  key={skill}
                  className="bg-white px-3 py-1 rounded-full text-xs"
                >
                  {skill}
                </span>
              ))}
            </div>
          </InfoCard>

          {/* CONTACT FORM */}
          <div className="bg-[#f5f7fc] rounded-xl p-6">
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <form className="space-y-3">
              <input
                required
                placeholder="Your Name"
                className="w-full border px-3 py-2 rounded-lg text-sm"
              />
              <input
                required
                type="email"
                placeholder="Email Address"
                className="w-full border px-3 py-2 rounded-lg text-sm"
              />
              <textarea
                required
                placeholder="Message"
                rows={4}
                className="w-full border px-3 py-2 rounded-lg text-sm"
              />
              <button className="w-full bg-blue-600 text-white py-2 rounded-lg text-sm">
                Send Message
              </button>
            </form>
          </div>
        </aside>
      </div>

      {/* ================= VIDEO MODAL ================= */}
      {openVideo && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg max-w-3xl w-full relative">
            <button
              onClick={() => setOpenVideo(false)}
              className="absolute top-2 right-2 text-lg"
            >
              ✕
            </button>
            <iframe
              className="w-full h-[400px]"
              src="https://www.youtube.com/embed/DY2gJhJaQfI"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </main>
  );
}

/* ================= REUSABLE COMPONENTS ================= */

function Section({ title, icon, items }) {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h3 className="font-semibold text-lg mb-6 flex items-center gap-2">
        {icon} {title}
      </h3>

      <div className="space-y-6">
        {items.map((i, idx) => (
          <div key={idx} className="flex gap-4">
            <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">
              {i.letter}
            </div>
            <div>
              <h4 className="font-medium">{i.title}</h4>
              <p className="text-sm text-gray-500">
                {i.org} · {i.year}
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function InfoCard({ title, items, children }) {
  return (
    <div className="bg-[#f5f7fc] rounded-xl p-6">
      <h3 className="font-semibold mb-4">{title}</h3>
      {items ? (
        <div className="space-y-2 text-sm">
          {items.map(([k, v]) => (
            <div key={k} className="flex justify-between">
              <span className="text-gray-600">{k}</span>
              <span className="font-medium">{v}</span>
            </div>
          ))}
        </div>
      ) : (
        children
      )}
    </div>
  );
}
