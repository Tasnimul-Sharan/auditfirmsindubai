"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { blogPostData } from "@/data/blogPostData";

const POSTS_PER_PAGE = 6;

export default function BlogPage() {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredPosts = blogPostData.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase()),
  );

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);

  const displayedPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE,
  );

  const featured = blogPostData[0];

  return (
    <section className="bg-gradient-to-b from-[#f8fafc] to-white py-24">
      <div className="max-w-6xl mx-auto md:px-6">
        {/* PAGE TITLE */}

        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-[#0F172A] tracking-tight">
            Insights & Articles
          </h1>
          <p className="text-gray-500 mt-4">
            Expert insights on auditing, compliance and finance in UAE
          </p>
        </div>

        {/* FEATURED ARTICLE */}

        <div className="relative rounded-3xl overflow-hidden mb-20 group">
          <Image
            src={featured.image}
            alt={featured.title}
            width={1200}
            height={600}
            className="object-cover w-full h-full group-hover:scale-105 transition duration-700"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          <div className="absolute bottom-10 left-10 text-white max-w-xl">
            <p className="text-sm uppercase tracking-widest text-[#C8A96A] mb-2">
              Featured Article
            </p>

            <h2 className="text-3xl font-bold leading-tight mb-4">
              {featured.title}
            </h2>

            <Link
              href={`/blog/${featured.slug}`}
              className="font-semibold text-white hover:text-[#C8A96A]"
            >
              Read Full Article →
            </Link>
          </div>
        </div>

        {/* MAIN GRID */}

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* BLOG POSTS AREA */}
          <div className="lg:col-span-6">
            <div className="grid md:grid-cols-2 gap-8">
              {displayedPosts.map((post) => (
                <div
                  key={post.id}
                  className="group bg-white rounded-3xl border border-gray-100 overflow-hidden hover:shadow-2xl transition duration-500"
                >
                  <div className="overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={500}
                      height={300}
                      className="object-cover w-full h-52 group-hover:scale-105 transition duration-700"
                    />
                  </div>

                  <div className="p-6">
                    <p className="text-xs text-gray-400 mb-2">
                      {new Date(post.date).toDateString()}
                    </p>

                    <h3 className="text-lg font-semibold text-[#0F172A] mb-3 group-hover:text-[#1E3A8A] transition">
                      {post.title}
                    </h3>

                    <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>

                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-sm font-semibold text-[#1E3A8A] hover:text-[#C8A96A]"
                    >
                      Read Article →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SIDEBAR */}
          {/* <aside className="lg:col-span-1 space-y-10 lg:sticky lg:top-24 h-fit">
            <div className="bg-white rounded-3xl border border-gray-100 p-6">
              <h4 className="font-semibold text-[#0F172A] mb-4">Search</h4>

              <input
                type="text"
                placeholder="Search articles..."
                className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <div className="bg-white rounded-3xl border border-gray-100 p-6">
              <h4 className="font-semibold text-[#0F172A] mb-4">Categories</h4>

              <ul className="space-y-3 text-sm text-gray-600">
                <li className="hover:text-[#1E3A8A] cursor-pointer">
                  Audit and Assurance
                </li>

                <li className="hover:text-[#1E3A8A] cursor-pointer">
                  Financial Audit
                </li>

                <li className="hover:text-[#1E3A8A] cursor-pointer">
                  Internal Audit
                </li>

                <li className="hover:text-[#1E3A8A] cursor-pointer">
                  Forensic Auditing
                </li>

                <li className="hover:text-[#1E3A8A] cursor-pointer">IFRS</li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl border border-gray-100 p-6">
              <h4 className="font-semibold text-[#0F172A] mb-4">
                Recent Posts
              </h4>

              <div className="space-y-4">
                {blogPostData.slice(0, 4).map((post) => (
                  <Link
                    key={post.id}
                    href={`/blog/${post.slug}`}
                    className="block text-sm text-gray-600 hover:text-[#1E3A8A]"
                  >
                    {post.title}
                  </Link>
                ))}
              </div>
            </div>
          </aside> */}
        </div>
      </div>
    </section>
  );
}
