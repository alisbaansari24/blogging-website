"use client";

import { useState } from "react";
import Link from "next/link";
import {
  LayoutDashboard,
  User,
  FileText,
  Briefcase,
  Bell,
  Star,
  Folder,
  Package,
  MessageSquare,
  Lock,
  LogOut,
  Trash2,
  Upload,
  X,
} from "lucide-react";

export default function CvManagerPage() {
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    if (!selected) return;

    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (!allowedTypes.includes(selected.type)) {
      setError("Only PDF, DOC, DOCX files are allowed");
      return;
    }

    if (selected.size > 5 * 1024 * 1024) {
      setError("File size must be less than 5MB");
      return;
    }

    setError("");
    setFile(selected);
  };

  const removeFile = () => {
    setFile(null);
  };

  return (
    <main className="min-h-screen pt-28 md:pt-32 py-10">
  <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-[260px_1fr] gap-8">

        
        {/* ================= SIDEBAR ================= */}
        <aside className=" rounded-xl shadow p-6 space-y-3">
          {[
            { label: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
            { label: "My Profile", icon: User, href: "/profile" },
            { label: "My Resume", icon: FileText, href: "/resume" },
            { label: "Applied Jobs", icon: Briefcase, href: "/applied-jobs" },
            { label: "Job Alerts", icon: Bell, href: "/job-alerts" },
            { label: "Shortlisted Jobs", icon: Star, href: "/shortlisted" },
            { label: "CV Manager", icon: Folder, href: "/cv-manager", active: true },
            { label: "Packages", icon: Package, href: "/packages" },
            { label: "Messages", icon: MessageSquare, href: "/messages" },
            { label: "Change Password", icon: Lock, href: "/change-password" },
            { label: "Logout", icon: LogOut, href: "/logout" },
            { label: "Delete Profile", icon: Trash2, href: "/delete-profile", danger: true },
          ].map((item, i) => (
            <Link
              key={i}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition
                ${
                  item.active
                    ? "bg-blue-600 text-white"
                    : item.danger
                    ? "text-red-600 hover:bg-red-50"
                    : "text-gray-700 hover:bg-gray-100"
                }
              `}
            >
              <item.icon size={18} />
              {item.label}
            </Link>
          ))}
        </aside>

        {/* ================= RIGHT CONTENT ================= */}
        <section className="space-y-8">
          
          {/* HEADER */}
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">
              CV Manager!
            </h1>
            <p className="text-gray-500 mt-1">
              Ready to jump back in?
            </p>
          </div>

          {/* CV MANAGER CARD */}
          <div className=" rounded-xl shadow p-8">
            <h2 className="text-lg font-semibold mb-6">CV Manager</h2>

            {/* UPLOAD BOX */}
            <label className="border-2 border-dashed border-blue-600 rounded-xl p-10 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-blue-50 transition">
              <Upload className="text-blue-600 mb-3" size={32} />
              <p className="text-blue-600 font-medium">
                Drop files here to upload
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Max file size 5MB (.doc, .docx, .pdf)
              </p>

              <input
                type="file"
                className="hidden"
                onChange={handleFileChange}
              />

              <span className="mt-5 inline-block bg-blue-600 text-white px-6 py-2 rounded-lg">
                Upload Resume
              </span>
            </label>

            {/* ERROR */}
            {error && (
              <p className="text-red-600 text-sm mt-4">{error}</p>
            )}

            {/* UPLOADED FILE */}
            {file && (
              <div className="mt-6 flex items-center justify-between bg-gray-50 border rounded-lg px-4 py-3">
                <div>
                  <p className="font-medium text-gray-800">
                    {file.name}
                  </p>
                  <p className="text-sm text-gray-500">
                    {(file.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                </div>

                <button
                  onClick={removeFile}
                  className="text-red-600 hover:bg-red-50 p-2 rounded-lg"
                >
                  <X />
                </button>
              </div>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
