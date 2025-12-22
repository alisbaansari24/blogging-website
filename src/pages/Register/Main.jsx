"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function RegisterPage() {
  const [role, setRole] = useState("candidate");
  const [form, setForm] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!form.username.trim()) {
      newErrors.username = "Username is required";
    }

    if (!form.password.trim()) {
      newErrors.password = "Password is required";
    } else if (form.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (form.confirmPassword !== form.password) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Register Data:", { role, ...form });
    }
  };

  return (
    <>
      {/* ================= PAGE WRAPPER ================= */}
      <section className="pt-32 pb-24 min-h-[calc(100vh-200px)] flex items-center">
        <div className="max-w-6xl mx-auto px-6 w-full">

          {/* CARD */}
          <div className="bg-white rounded-2xl shadow-xl grid grid-cols-1 lg:grid-cols-2 overflow-hidden">

            {/* ================= LEFT IMAGE ================= */}
            <div className="hidden lg:flex items-center justify-center bg-gradient-to-br from-[#2b2fa5] to-[#1c1f8a]">
              <Image
                src="/register.jpg"
                alt="Register"
                width={500}
                height={520}
                className="object-contain"
              />
            </div>

            {/* ================= RIGHT FORM ================= */}
            <div className="p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
                Create a Free Superio Account
              </h2>

              {/* ROLE */}
              <div className="mt-6 flex gap-6">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="role"
                    checked={role === "candidate"}
                    onChange={() => setRole("candidate")}
                  />
                  Candidate
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="role"
                    checked={role === "employer"}
                    onChange={() => setRole("employer")}
                  />
                  Employer
                </label>
              </div>

              {/* FORM */}
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    className="w-full px-4 py-3 border rounded-lg outline-none focus:border-[#1967d2]"
                  />
                  {errors.email && (
                    <p className="text-sm text-red-500 mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <input
                    type="text"
                    placeholder="Username"
                    value={form.username}
                    onChange={(e) =>
                      setForm({ ...form, username: e.target.value })
                    }
                    className="w-full px-4 py-3 border rounded-lg outline-none focus:border-[#1967d2]"
                  />
                  {errors.username && (
                    <p className="text-sm text-red-500 mt-1">{errors.username}</p>
                  )}
                </div>

                <div>
                  <input
                    type="password"
                    placeholder="Password"
                    value={form.password}
                    onChange={(e) =>
                      setForm({ ...form, password: e.target.value })
                    }
                    className="w-full px-4 py-3 border rounded-lg outline-none focus:border-[#1967d2]"
                  />
                  {errors.password && (
                    <p className="text-sm text-red-500 mt-1">{errors.password}</p>
                  )}
                </div>

                <div>
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    value={form.confirmPassword}
                    onChange={(e) =>
                      setForm({ ...form, confirmPassword: e.target.value })
                    }
                    className="w-full px-4 py-3 border rounded-lg outline-none focus:border-[#1967d2]"
                  />
                  {errors.confirmPassword && (
                    <p className="text-sm text-red-500 mt-1">
                      {errors.confirmPassword}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#1967d2] text-white rounded-lg font-medium hover:bg-blue-700 transition"
                >
                  Register
                </button>
              </form>

              <p className="mt-4 text-sm text-gray-600">
                Already have an account?{" "}
                <Link href="/login" className="text-[#1967d2] font-medium">
                  Log In
                </Link>
              </p>

              {/* OR */}
              <div className="my-6 flex items-center gap-3">
                <div className="flex-1 h-px bg-gray-200" />
                <span className="text-sm text-gray-500">or</span>
                <div className="flex-1 h-px bg-gray-200" />
              </div>

              {/* SOCIAL */}
              <div className="space-y-3">
                <button className="w-full py-3 border rounded-lg hover:bg-gray-50 transition">
                  Log In via Facebook
                </button>
                <button className="w-full py-3 border rounded-lg hover:bg-gray-50 transition">
                  Log In via Gmail
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
