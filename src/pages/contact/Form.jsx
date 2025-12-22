"use client";

import Image from "next/image";
import { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Enter a valid email";
    }
    if (!form.subject.trim()) newErrors.subject = "Subject is required";
    if (!form.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Message Sent:", form);
      alert("Message sent successfully!");
      setForm({ name: "", email: "", subject: "", message: "" });
    }
  };

  return (
    <>
      {/* ================= MAP SECTION ================= */}
      <section className="w-full h-[450px]">
        <iframe
          className="w-full h-full border-0"
          loading="lazy"
          allowFullScreen
          src="https://www.google.com/maps?q=329%20Queensberry%20Street%20North%20Melbourne%20VIC%203051&output=embed"
        />
      </section>

      {/* ================= CONTACT FORM SECTION ================= */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* LEFT IMAGE */}
            <div className="flex justify-center">
              <Image
                src="/contact.svg" // 🔴 add your image
                alt="Contact"
                width={480}
                height={420}
                className="object-contain"
              />
            </div>

            {/* RIGHT FORM */}
            <div>
              <h2 className="text-3xl font-semibold text-gray-900">
                Leave A Message
              </h2>

              <form onSubmit={handleSubmit} className="mt-8 space-y-4">

                {/* NAME */}
                <div>
                  <input
                    type="text"
                    placeholder="Your Name*"
                    value={form.name}
                    onChange={(e) =>
                      setForm({ ...form, name: e.target.value })
                    }
                    className="w-full px-4 py-3 border rounded-lg outline-none focus:border-[#1967d2]"
                  />
                  {errors.name && (
                    <p className="text-sm text-red-500 mt-1">{errors.name}</p>
                  )}
                </div>

                {/* EMAIL */}
                <div>
                  <input
                    type="email"
                    placeholder="Your Email*"
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

                {/* SUBJECT */}
                <div>
                  <input
                    type="text"
                    placeholder="Subject*"
                    value={form.subject}
                    onChange={(e) =>
                      setForm({ ...form, subject: e.target.value })
                    }
                    className="w-full px-4 py-3 border rounded-lg outline-none focus:border-[#1967d2]"
                  />
                  {errors.subject && (
                    <p className="text-sm text-red-500 mt-1">
                      {errors.subject}
                    </p>
                  )}
                </div>

                {/* MESSAGE */}
                <div>
                  <textarea
                    rows="5"
                    placeholder="Write your message..."
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    className="w-full px-4 py-3 border rounded-lg outline-none focus:border-[#1967d2]"
                  />
                  {errors.message && (
                    <p className="text-sm text-red-500 mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* BUTTON */}
                <button
                  type="submit"
                  className="px-8 py-3 bg-[#1967d2] text-white rounded-lg font-medium hover:bg-blue-700 transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTACT INFO ================= */}
      <section className="bg-white py-16 border-t">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">

            {/* ADDRESS */}
            <div className="flex flex-col items-center gap-3">
              <MapPin className="w-10 h-10 text-[#1967d2]" />
              <h4 className="text-lg font-semibold text-gray-900">Address</h4>
              <p className="text-gray-600 text-sm">
                329 Queensberry Street, North
                <br />
                Melbourne VIC 3051, Australia.
              </p>
            </div>

            {/* PHONE */}
            <div className="flex flex-col items-center gap-3">
              <Phone className="w-10 h-10 text-[#1967d2]" />
              <h4 className="text-lg font-semibold text-gray-900">Call Us</h4>
              <p className="text-gray-600 text-sm">123 456 7890</p>
            </div>

            {/* EMAIL */}
            <div className="flex flex-col items-center gap-3">
              <Mail className="w-10 h-10 text-[#1967d2]" />
              <h4 className="text-lg font-semibold text-gray-900">Email</h4>
              <p className="text-gray-600 text-sm">
                contact.london@example.com
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
