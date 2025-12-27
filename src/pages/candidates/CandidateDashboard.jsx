"use client";

import Image from "next/image";
import Link from "next/link";
import {
  LayoutDashboard,
  User,
  FileText,
  Briefcase,
  Bell,
  Heart,
  File,
  Package,
  MessageSquare,
  Lock,
  LogOut,
  Trash2,
  Bookmark,
  Building2,
  MapPin,
  Clock,
  DollarSign,
  Users,
  FileCheck,
} from "lucide-react";
import { useRef } from "react";

export default function DashboardPage() {
  const cardsRef = useRef([]);

  const jobs = [
    { title: "Recruiting Coordinator", company: "Catalyst", type: "Freelancer", image: "/job1.webp" },
    { title: "Product Manager, Studio", company: "Invision", type: "Part Time", image: "/job2.webp" },
    { title: "Senior Product Designer", company: "Upwork", type: "Temporary", image: "/job3.webp" },
    { title: "Senior Full Stack Engineer, Creator Success", company: "Medium", type: "Full Time", image: "/job4.webp" },
    { title: "Software Engineer (Android), Libraries", company: "Figma", type: "Freelancer", image: "/job5.webp" },
    { title: "Software Engineer (Android), Libraries", company: "Segment", type: "Full Time", image: "/job6.webp" },
  ];

  return (
    <main className="min-h-screen  flex mt-24">
  
     

        {/* ================= SIDEBAR ================= */}
        <aside className="w-64 bg-white border-r hidden lg:block pt-6">
    <div className="p-6 font-bold text-xl">Employer Panel</div>


        <nav className="space-y-1 px-4 text-sm">
          {[
           ["Dashboard", LayoutDashboard],
            ["My Profile", User],
            ["My Resume", FileText],
            ["Applied Jobs", Briefcase],
            ["Job Alerts", Bell],
            ["Shortlisted Jobs", Heart],
            ["CV Manager", File],
            ["Packages", Package],
            ["Messages", MessageSquare],
            ["Change Password", Lock],
            ["Logout", LogOut],
            ["Delete Profile", Trash2],
          ].map(([label, Icon], i) => (
            <a
              key={i}
              href="#"
              className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-blue-50 text-gray-700"
            >
              <Icon size={18} />
              {label}
            </a>
          ))}
        </nav>
      </aside>


        {/* ================= DASHBOARD CONTENT ================= */}
        <section className="lg:col-span-3 space-y-10">

          {/* HEADER */}
          <div className="bg-white rounded-xl p-6">
            <h1 className="text-2xl font-semibold">Howdy, Jerome!!</h1>
            <p className="text-gray-500 mt-1">Ready to jump back in?</p>
          </div>

          {/* STATS CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            ["22", "Posted Jobs", "bg-blue-50 text-blue-600", Briefcase],
            ["9382", "Application", "bg-green-50 text-green-600", Users],
            ["74", "Messages", "bg-purple-50 text-purple-600", MessageSquare],
            ["32", "Shortlist", "bg-red-50 text-red-600", FileCheck],
          ].map(([num, label, color, Icon], i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow flex items-center gap-4">
              <div className={`p-3 rounded-lg ${color}`}>
                <Icon />
              </div>
              <div>
                <h3 className="text-xl font-bold">{num}</h3>
                <p className="text-sm text-gray-500">{label}</p>
              </div>
            </div>
          ))}
        </div>

          {/* GRAPH + NOTIFICATIONS */}
          <div className="grid lg:grid-cols-3 gap-6">

          {/* GRAPH */}
                    <div className="bg-white p-6 rounded-xl shadow lg:col-span-2">
                      <div className="flex justify-between mb-4">
                        <h3 className="font-semibold">Your Profile Views</h3>
                        <select className="border rounded-lg px-3 py-1 text-sm">
                          <option>Last 16 Months</option>
                          <option>Last Year</option>
                        </select>
                      </div>
          
                      <Image
                        src="/graph.png" /* put graph image in /public */
                        alt="Graph"
                        width={800}
                        height={400}
                        className="w-full"
                      />
                    </div>
          
            {/* NOTIFICATIONS */}
            {/* NOTIFICATIONS */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <Bell size={18} /> Notifications
            </h3>

            <ul className="space-y-3 text-sm text-gray-600">
              {[
                "Henry Wilson applied for a job Product Designer",
                "Raul Costa applied for a job Product Manager, Risk",
                "Jack Milk applied for a job Technical Architect",
                "Michel Ariana applied for a job Software Engineer",
                "Wade Warren applied for a job Web Developer",
                "Michel Ariana applied for a job Software Engineer",
              ].map((text, i) => (
                <li key={i} className="border-b pb-2 last:border-none">
                  {text}
                </li>
              ))}
            </ul>
          </div>
          </div>

          {/* JOBS APPLIED */}
          <div className="bg-white rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-6">Jobs Applied Recently</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {jobs.map((job, index) => (
                <Link
                  ref={(el) => (cardsRef.current[index] = el)}
                  href="/jobs/details"
                  key={index}
                  className="group bg-white border rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <Image
                        src={job.image}
                        alt={job.company}
                        width={48}
                        height={48}
                        className="rounded-lg"
                      />
                      <div>
                        <h3 className="font-semibold">{job.title}</h3>
                        <p className="text-sm text-gray-500">{job.company}</p>
                      </div>
                    </div>
                    <Bookmark className="text-gray-400 group-hover:text-[#1967d2]" />
                  </div>

                  <div className="mt-4 flex flex-wrap gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1"><Building2 size={16} /> Segment</div>
                    <div className="flex items-center gap-1"><MapPin size={16} /> London, UK</div>
                    <div className="flex items-center gap-1"><Clock size={16} /> 11 hours ago</div>
                    <div className="flex items-center gap-1"><DollarSign size={16} /> $35k - $45k</div>
                  </div>

                  <div className="mt-4 flex gap-2">
                    <span className="px-3 py-1 text-xs rounded-full bg-blue-50 text-blue-600">
                      {job.type}
                    </span>
                    <span className="px-3 py-1 text-xs rounded-full bg-gray-100">Private</span>
                    <span className="px-3 py-1 text-xs rounded-full bg-red-50 text-red-600">Urgent</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

        </section>

    </main>
  );
}
