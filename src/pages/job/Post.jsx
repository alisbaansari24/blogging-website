"use client";

import { useState } from "react";
import {
  LayoutDashboard,
  Building2,
  PlusCircle,
  Briefcase,
  Users,
  Star,
  Package,
  MessageSquare,
  Bell,
  Lock,
  LogOut,
  Trash2,
  FileText,
  CreditCard,
  CheckCircle,
  MapPin,
} from "lucide-react";

export default function PostJobPage() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    email: "",
    username: "",
    jobType: "",
    salary: "",
    careerLevel: "",
    experience: "",
    gender: "",
    industry: "",
    qualification: "",
    deadline: "",
    country: "Australia",
    city: "Melbourne",
    address: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!form.title || !form.description || !form.email) {
      alert("Please fill all required fields");
      return;
    }
    alert("Job submitted successfully!");
  };

  return (
    <main className="min-h-screen pt-28 bg-[#f5f7fc]">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-[260px_1fr] gap-8">

        {/* ================= SIDEBAR ================= */}
        <aside className="bg-white rounded-xl shadow p-6 space-y-2">
          {[
            ["Dashboard", LayoutDashboard],
            ["Company Profile", Building2],
            ["Post a New Job", PlusCircle, true],
            ["Manage Jobs", Briefcase],
            ["All Applicants", Users],
            ["Shortlisted Resumes", Star],
            ["Packages", Package],
            ["Messages", MessageSquare],
            ["Resume Alerts", Bell],
            ["Change Password", Lock],
            ["Logout", LogOut],
            ["Delete Profile", Trash2],
          ].map(([label, Icon, active], i) => (
            <div
              key={i}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer
              ${active ? "bg-blue-600 text-white" : "hover:bg-gray-100 text-gray-700"}`}
            >
              <Icon size={18} />
              <span className="text-sm font-medium">{label}</span>
            </div>
          ))}
        </aside>

        {/* ================= RIGHT CONTENT ================= */}
        <section className="bg-white rounded-xl shadow p-8">

          {/* HEADER */}
          <h1 className="text-2xl font-bold">Post a New Job!</h1>
          <p className="text-gray-600 mt-1">Ready to jump back in?</p>

          {/* STEPS */}
          <div className="flex flex-wrap gap-6 mt-8">
            {[
              ["Job Detail", FileText],
              ["Package & Payments", CreditCard],
              ["Confirmation", CheckCircle],
            ].map(([label, Icon], i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                  <Icon />
                </div>
                <span className="font-medium">{label}</span>
              </div>
            ))}
          </div>

          {/* ================= FORM ================= */}
          <div className="mt-10 grid md:grid-cols-2 gap-6">

            {/* INPUT */}
            <Input label="Job Title" name="title" value={form.title} onChange={handleChange} required />

            <Input label="Email Address" name="email" value={form.email} onChange={handleChange} required />

            <Input label="Username" name="username" value={form.username} onChange={handleChange} />

            <Select label="Job Type" name="jobType" onChange={handleChange}
              options={["Full Time", "Part Time", "Freelance", "Internship"]} />

            <Select label="Offered Salary" name="salary" onChange={handleChange}
              options={["$20k-$30k", "$30k-$50k", "$50k-$80k", "$80k+"]} />

            <Select label="Career Level" name="careerLevel" onChange={handleChange}
              options={["Junior", "Mid", "Senior", "Lead"]} />

            <Select label="Experience" name="experience" onChange={handleChange}
              options={["0-1 Years", "1-3 Years", "3-5 Years", "5+ Years"]} />

            <Select label="Gender" name="gender" onChange={handleChange}
              options={["Any", "Male", "Female"]} />

            <Select label="Qualification" name="qualification" onChange={handleChange}
              options={["Bachelor", "Master", "PhD"]} />

            <Input label="Application Deadline" name="deadline" type="date" value={form.deadline} onChange={handleChange} />

            {/* TEXTAREA */}
            <div className="md:col-span-2">
              <label className="text-sm font-medium">Job Description *</label>
              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                rows={5}
                className="w-full mt-2 border rounded-lg p-3"
                placeholder="Enter full job description..."
              />
            </div>

            {/* ADDRESS */}
            <Input label="Country" name="country" value={form.country} onChange={handleChange} />
            <Input label="City" name="city" value={form.city} onChange={handleChange} />

            <div className="md:col-span-2">
              <Input
                label="Complete Address"
                name="address"
                value={form.address}
                onChange={handleChange}
              />
            </div>

          </div>

          {/* MAP */}
          <div className="mt-8">
            <div className="h-56 bg-gray-200 rounded-lg flex items-center justify-center text-gray-600">
              <MapPin className="mr-2" /> Map Preview
            </div>
          </div>

          {/* BUTTON */}
          <button
            onClick={handleSubmit}
            className="mt-8 bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700"
          >
            Next →
          </button>

        </section>
      </div>
    </main>
  );
}

/* ================= COMPONENTS ================= */

function Input({ label, ...props }) {
  return (
    <div>
      <label className="text-sm font-medium">{label}</label>
      <input
        {...props}
        className="w-full mt-2 border rounded-lg px-4 py-2"
      />
    </div>
  );
}

function Select({ label, options, ...props }) {
  return (
    <div>
      <label className="text-sm font-medium">{label}</label>
      <select {...props} className="w-full mt-2 border rounded-lg px-4 py-2">
        <option value="">Select</option>
        {options.map((op) => (
          <option key={op}>{op}</option>
        ))}
      </select>
    </div>
  );
}
