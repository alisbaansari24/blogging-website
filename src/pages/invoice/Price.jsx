"use client";

import Link from "next/link";
import Image from "next/image";

export default function InvoicePage() {
  return (
    <main className="min-h-screen bg-[#f5f7fc] py-24 px-4">
      
      {/* ================= TOP ACTIONS ================= */}
      <div className="max-w-5xl mx-auto flex justify-end gap-4 mb-6">
        <Link
          href="/"
          className="px-5 py-2 border rounded-lg text-sm font-medium hover:bg-gray-100"
        >
          Back Home
        </Link>

        <button
          onClick={() => window.print()}
          className="px-5 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700"
        >
          Print
        </button>
      </div>

      {/* ================= INVOICE ================= */}
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow p-8">
        
        {/* HEADER */}
        <div className="flex flex-col sm:flex-row justify-between gap-6 border-b pb-6">
          <div>
            <Image
              src="/logo.svg"
              alt="Logo"
              width={140}
              height={40}
              className="mb-4"
            />
            <p className="text-sm text-gray-500">Invoice #</p>
            <h2 className="font-semibold text-lg">0043128641</h2>
          </div>

          <div className="text-sm text-gray-600 space-y-1">
            <p><b>Invoice date:</b> 03/10/2021</p>
            <p><b>Due date:</b> 03/10/2021</p>
          </div>
        </div>

        {/* BILLING INFO */}
        <div className="grid sm:grid-cols-2 gap-6 mt-8">
          <div>
            <h3 className="font-semibold mb-2">Supplier</h3>
            <p className="text-gray-600">
              Superio LLC <br />
              2301 Ravenswood Rd <br />
              Madison, WI 53711
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Customer</h3>
            <p className="text-gray-600">
              John Doe <br />
              329 Queensberry Street <br />
              North Melbourne VIC 3051 <br />
              Australia
            </p>
          </div>
        </div>

        {/* TABLE */}
        <div className="overflow-x-auto mt-10">
          <table className="w-full text-sm border">
            <thead className="bg-gray-100 text-left">
              <tr>
                <th className="p-3 border">Description</th>
                <th className="p-3 border">Price</th>
                <th className="p-3 border">VAT (20%)</th>
                <th className="p-3 border">Total</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="p-3 border">Standard Plan</td>
                <td className="p-3 border">$443.00</td>
                <td className="p-3 border">$921.80</td>
                <td className="p-3 border">$9,243</td>
              </tr>

              <tr>
                <td className="p-3 border">Extra Plan</td>
                <td className="p-3 border">$413.00</td>
                <td className="p-3 border">$912.80</td>
                <td className="p-3 border">$5,943</td>
              </tr>

              <tr className="bg-gray-50">
                <td className="p-3 border font-semibold text-right" colSpan="3">
                  Total Due
                </td>
                <td className="p-3 border font-semibold">$9,750</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* FOOTER */}
        <div className="border-t mt-10 pt-6 text-sm text-gray-600 flex flex-col sm:flex-row justify-between gap-4">
          <p>www.ibthemespro.com</p>
          <p>invoice@superio.com</p>
          <p>(123) 123-456</p>
        </div>
      </div>
    </main>
  );
}
