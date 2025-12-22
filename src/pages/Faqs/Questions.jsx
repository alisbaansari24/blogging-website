"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const faqs = [
  {
    category: "Payments",
    items: [
      {
        q: "Why won't my payment go through?",
        a: "Payments may fail due to insufficient balance, incorrect card details, expired cards, or temporary issues with the payment gateway. Please double-check your details or try again later."
      },
      {
        q: "How do I get a refund?",
        a: "Refunds can be requested from your account dashboard. Once approved, the amount will be credited back to your original payment method within 5–7 business days."
      },
      {
        q: "How do I redeem a coupon?",
        a: "You can apply your coupon code at checkout. Simply enter the code in the coupon field and click apply to see the discount reflected."
      },
      {
        q: "Changing account name",
        a: "You can change your account name from the profile settings page. Make sure to save your changes after updating."
      },
    ],
  },
  {
    category: "Suggestions",
    items: [
      {
        q: "Why won't my payment go through?",
        a: "If your payment fails repeatedly, try using a different payment method or contact your bank for more details."
      },
      {
        q: "How do I get a refund?",
        a: "Refund eligibility depends on the service used. Please review our refund policy or contact support for assistance."
      },
      {
        q: "How do I redeem a coupon?",
        a: "Coupons must be valid and within the expiry date. Ensure the coupon conditions match your purchase."
      },
      {
        q: "Changing account name",
        a: "Account name changes are limited to ensure security. Contact support if you face any issues updating it."
      },
    ],
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative h-[320px] md:h-[380px]">
        <Image
          src="/blog.jpg"
          alt="Blog"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-3xl md:text-4xl font-semibold">
            Faqs
          </h1>
          <p className="mt-2 text-sm md:text-base">
            <Link href="/" className="hover:underline">
              Home
            </Link>{" "}
            / Faqs
          </p>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="bg-white py-24">
        <div className="max-w-4xl mx-auto px-6">

          {/* HEADING */}
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 text-center">
            Frequently Asked Questions
          </h2>

          {/* FAQ LIST */}
          <div className="mt-16 space-y-12">
            {faqs.map((group, groupIndex) => (
              <div key={groupIndex}>
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  {group.category}
                </h3>

                <div className="space-y-4">
                  {group.items.map((item, i) => {
                    const index = `${groupIndex}-${i}`;
                    const isOpen = openIndex === index;

                    return (
                      <div
                        key={index}
                        className="border border-gray-200 rounded-xl overflow-hidden"
                      >
                        <button
                          onClick={() =>
                            setOpenIndex(isOpen ? null : index)
                          }
                          className="w-full flex justify-between items-center px-6 py-4 text-left text-gray-900 font-medium hover:bg-gray-50 transition"
                        >
                          {item.q}
                          <span className="text-xl">
                            {isOpen ? "−" : "+"}
                          </span>
                        </button>

                        {isOpen && (
                          <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                            {item.a}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
