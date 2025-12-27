"use client";

import Image from "next/image";
import Link from "next/link";

export default function BlogPage() {
  return (
    <main className="bg-white">

      {/* ================= HERO ================= */}
      <section className="relative h-[320px] md:h-[380px]">
        <Image
          src="/blog.jpg"
          alt="Blog"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-3xl md:text-4xl font-semibold">About</h1>
          <p className="mt-2 text-sm md:text-base">
            <Link href="/" className="hover:underline">
              Home
            </Link>{" "}
            / About
          </p>
        </div>
      </section>

      {/* ================= IMAGE COLLAGE ================= */}
<section className="max-w-7xl mx-auto px-4 py-20">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">

    {/* LEFT BIG IMAGE */}
    <div className="md:row-span-2">
      <Image
        src="/collage1.webp"
        alt="collage"
        width={600}
        height={800}
        className="rounded-xl object-cover w-full h-full"
      />
    </div>

    {/* MIDDLE SMALL IMAGES */}
    <div className="grid grid-rows-2 gap-4">
      <Image
        src="/office.jpg"
        alt="collage"
        width={400}
        height={300}
        className="rounded-xl object-cover w-full h-full"
      />
      <Image
        src="/about.webp"
        alt="collage"
        width={400}
        height={300}
        className="rounded-xl object-cover w-full h-full"
      />
    </div>

    {/* RIGHT BIG IMAGE */}
    <div className="md:row-span-2">
      <Image
        src="/collage2.webp"
        alt="collage"
        width={600}
        height={800}
        className="rounded-xl object-cover w-full h-full"
      />
    </div>

    

  </div>
</section>


      {/* ================= STATS ================= */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-10 text-center">
          <div>
            <h3 className="text-4xl font-bold text-black">4M</h3>
            <p className="mt-2 text-gray-600">
              4 million daily active users
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-black">12k</h3>
            <p className="mt-2 text-gray-600">
              Over 12k open job positions
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-black">20M</h3>
            <p className="mt-2 text-gray-600">
              Over 20 million stories shared
            </p>
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="max-w-4xl mx-auto px-4 py-20">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          About Superio
        </h2>

        <p className="text-gray-600 leading-relaxed mb-6">
          Far much that one rank beheld bluebird after outside ignobly allegedly
          more when oh arrogantly vehement irresistibly fussy penguin insect
          additionally wow absolutely crud meretriciously hastily dalmatian a
          glowered inset one echidna cassowary some parrot and much as goodness
          some froze the sullen much connected bat wonderfully on instantaneously
          eel valiantly petted this along across highhandedly much.
        </p>

        <p className="text-gray-600 leading-relaxed">
          Repeatedly dreamed alas opossum but dramatically despite expeditiously
          that jeepers loosely yikes that as or eel underneath kept and slept
          compactly far purred sure abidingly up above fitting to strident wiped
          set waywardly far the and pangolin horse approving paid chuckled
          cassowary oh above a much opposite far much hypnotically more therefore
          wasp less that hey apart well like while superbly orca and far hence
          one. Far much that one rank beheld bluebird after outside ignobly
          allegedly more when oh arrogantly vehement irresistibly fussy.
        </p>
      </section>

    </main>
  );
}
