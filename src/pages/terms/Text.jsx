"use client";

import Link from "next/link";

export default function TermsPage() {
  return (
    <section className="bg-white pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6">

        {/* ================= HEADING ================= */}
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Terms and Conditions
          </h1>

          {/* BREADCRUMB */}
          <div className="mt-3 text-sm text-gray-500">
            <Link href="/" className="hover:text-[#1967d2]">
              Home
            </Link>{" "}
            /{" "}
            <span className="text-gray-700">
              Terms and Conditions
            </span>
          </div>
        </div>

        {/* ================= CONTENT ================= */}
        <div className="mt-16 space-y-12 text-gray-700 leading-relaxed">

          {/* 1 */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              1. Terms
            </h2>
            <p>
              Pharetra nulla ullamcorper sit lectus. Fermentum mauris pellentesque
              nec nibh sed et, vel diam, massa. Placerat quis vel fames interdum
              urna lobortis sagittis sed pretium. Aliquam eget posuere sit enim
              elementum nulla vulputate magna. Morbi sed arcu proin quis tortor
              non risus.
            </p>

            <p className="mt-4">
              Elementum lectus a porta commodo suspendisse arcu, aliquam lectus
              faucibus. Nisl malesuada tortor, ligula aliquet felis vitae enim.
              Mi augue aliquet mauris non elementum tincidunt eget facilisi.
              Pellentesque massa ipsum tempus vel aliquam massa eu pulvinar eget.
            </p>
          </div>

          {/* 2 */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              2. Limitations
            </h2>
            <p>
              Pharetra nulla ullamcorper sit lectus. Fermentum mauris pellentesque
              nec nibh sed et, vel diam, massa. Placerat quis vel fames interdum
              urna lobortis sagittis sed pretium. Aliquam eget posuere sit enim
              elementum nulla vulputate magna. Morbi sed arcu proin quis tortor
              non risus.
            </p>

            <p className="mt-4">
              Elementum lectus a porta commodo suspendisse arcu, aliquam lectus
              faucibus. Nisl malesuada tortor, ligula aliquet felis vitae enim.
              Mi augue aliquet mauris non elementum tincidunt eget facilisi.
              Pellentesque massa ipsum tempus vel aliquam massa eu pulvinar eget.
            </p>
          </div>

          {/* 3 */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              3. Revisions and Errata
            </h2>
            <p>
              Pharetra nulla ullamcorper sit lectus. Fermentum mauris pellentesque
              nec nibh sed et, vel diam, massa. Placerat quis vel fames interdum
              urna lobortis sagittis sed pretium. Aliquam eget posuere sit enim
              elementum nulla vulputate magna. Morbi sed arcu proin quis tortor
              non risus.
            </p>

            <p className="mt-4">
              Elementum lectus a porta commodo suspendisse arcu, aliquam lectus
              faucibus. Nisl malesuada tortor, ligula aliquet felis vitae enim.
              Mi augue aliquet mauris non elementum tincidunt eget facilisi.
              Pellentesque massa ipsum tempus vel aliquam massa eu pulvinar eget.
            </p>
          </div>

          {/* 4 */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              4. Site Terms of Use Modifications
            </h2>
            <p>
              Pharetra nulla ullamcorper sit lectus. Fermentum mauris pellentesque
              nec nibh sed et, vel diam, massa. Placerat quis vel fames interdum
              urna lobortis sagittis sed pretium. Aliquam eget posuere sit enim
              elementum nulla vulputate magna. Morbi sed arcu proin quis tortor
              non risus.
            </p>

            <p className="mt-4">
              Elementum lectus a porta commodo suspendisse arcu, aliquam lectus
              faucibus. Nisl malesuada tortor, ligula aliquet felis vitae enim.
              Mi augue aliquet mauris non elementum tincidunt eget facilisi.
              Pellentesque massa ipsum tempus vel aliquam massa eu pulvinar eget.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
