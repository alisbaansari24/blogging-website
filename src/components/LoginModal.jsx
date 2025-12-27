"use client";

import { useState } from "react";
import { X } from "lucide-react";

export default function LoginModal({ isOpen, onClose }) {
  const [form, setForm] = useState({
    username: "",
    password: "",
    remember: false,
  });

  const [errors, setErrors] = useState({});

  if (!isOpen) return null;

  const validate = () => {
    const newErrors = {};

    if (!form.username.trim()) {
      newErrors.username = "Username is required";
    }

    if (!form.password.trim()) {
      newErrors.password = "Password is required";
    } else if (form.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Login Data:", form);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/50 px-4">
      {/* MODAL */}
      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl relative animate-fade-in">
        
        {/* CLOSE */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-800"
        >
          <X />
        </button>

        <div className="p-8">
          <h2 className="text-2xl font-semibold text-gray-900 text-center">
            Login
          </h2>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            {/* USERNAME */}
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
                <p className="text-sm text-red-500 mt-1">
                  {errors.username}
                </p>
              )}
            </div>

            {/* PASSWORD */}
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
                <p className="text-sm text-red-500 mt-1">
                  {errors.password}
                </p>
              )}
            </div>

            {/* REMEMBER + FORGOT */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={form.remember}
                  onChange={(e) =>
                    setForm({ ...form, remember: e.target.checked })
                  }
                />
                Remember me
              </label>

              <a href="#" className="text-[#1967d2] hover:underline">
                Forgot password?
              </a>
            </div>

            {/* LOGIN BUTTON */}
            <button
              type="submit"
              className="w-full py-3 bg-[#1967d2] text-white rounded-lg font-medium hover:bg-blue-700 transition"
            >
              Log In
            </button>
          </form>

          {/* SIGNUP */}
          <p className="mt-4 text-sm text-center text-gray-600">
            Don't have an account?{" "}
            <a href="/register" className="text-[#1967d2] font-medium">
              Signup
            </a>
          </p>

         

          
        </div>
      </div>
    </div>
  );
}
