"use client";

import Image from "next/image";
import {
  LayoutDashboard,
  Building,
  PlusCircle,
  Briefcase,
  Users,
  FileCheck,
  CreditCard,
  MessageSquare,
  Bell,
  Lock,
  LogOut,
  Trash2,
  Eye,
  Check,
  X,
  MapPin,
  DollarSign,
  User,
} from "lucide-react";

export default function DashboardPage() {
  return (
    <main className="min-h-screen  flex mt-24">
  
  {/* ================= SIDEBAR ================= */}
  <aside className="w-64 bg-white border-r hidden lg:block pt-6">
    <div className="p-6 font-bold text-xl">Employer Panel</div>


        <nav className="space-y-1 px-4 text-sm">
          {[
            ["Dashboard", LayoutDashboard],
            ["Company Profile", Building],
            ["Post a New Job", PlusCircle],
            ["Manage Jobs", Briefcase],
            ["All Applicants", Users],
            ["Shortlisted Resumes", FileCheck],
            ["Packages", CreditCard],
            ["Messages", MessageSquare],
            ["Resume Alerts", Bell],
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
      <section className="flex-1 p-6 lg:p-10 space-y-8">

        {/* HEADER */}
        <div>
          <h1 className="text-2xl font-semibold">Dashboard Home!</h1>
          <p className="text-gray-500">Ready to jump back in?</p>
        </div>

        {/* ================= STATS CARDS ================= */}
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

        {/* ================= GRAPH + NOTIFICATIONS ================= */}
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

        {/* ================= RECENT APPLICANTS ================= */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Recent Applicants</h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              ["Darlene Robertson", "UI Designer", "$44 / hour"],
              ["Wade Warren", "Developer", "$99 / hour"],
              ["Leslie Alexander", "Digital Marketer", "$88 / hour"],
              ["Floyd Miles", "Front-end Developer", "$44 / hour"],
              ["Cameron Williamson", "Backend Developer", "$99 / hour"],
              ["Robert Fox", "Software Engineer", "$77 / hour"],
            ].map(([name, role, price], i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow">
                <div className="flex gap-4">
                  <Image
                    src="/user.webp"
                    alt={name}
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div>
                    <h4 className="font-semibold">{name}</h4>
                    <p className="text-sm text-gray-500">{role}</p>
                    <p className="text-sm flex items-center gap-1 text-gray-500">
                      <MapPin size={14} /> London, UK
                    </p>
                    <p className="text-sm flex items-center gap-1 text-gray-500">
                      <DollarSign size={14} /> {price}
                    </p>
                  </div>
                </div>

                {/* TAGS */}
                <div className="flex gap-2 mt-4 flex-wrap">
                  {["App", "Design", "Digital"].map((tag, j) => (
                    <span
                      key={j}
                      className="px-3 py-1 text-xs rounded-full bg-blue-50 text-blue-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* ACTION ICONS */}
                <div className="flex gap-3 mt-4 text-gray-500">
                  <Trash2 size={18} />
                  <Eye size={18} />
                  <Check size={18} />
                  <X size={18} />
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>
    </main>
  );
}
