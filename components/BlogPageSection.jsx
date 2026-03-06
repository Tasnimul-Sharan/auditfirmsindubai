// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import { FaArrowRight, FaRegUser } from "react-icons/fa";
// import { motion } from "framer-motion";
// import { useState } from "react";

// const blogs = [
//   {
//     id: 1,
//     img: "/blogs/pharma/pharma-1.jpg",
//     date: "18 AUGUST, 2025",
//     author: "BRIDGE PHARMA INSIGHTS",
//     title: "Ensuring GMP Compliance in Modern Pharmaceutical Manufacturing",
//     slug: "gmp-compliance-pharma-manufacturing",
//   },
//   {
//     id: 2,
//     img: "/blogs/animal-health/animal-health-1.jpg",
//     date: "10 AUGUST, 2025",
//     author: "BRIDGE PHARMA INSIGHTS",
//     title: "Advancing Animal Health Through Quality Veterinary Medicines",
//     slug: "advancing-animal-health",
//   },
//   {
//     id: 3,
//     img: "/blogs/research/research-1.jpg",
//     date: "02 AUGUST, 2025",
//     author: "BRIDGE PHARMA R&D",
//     title: "Innovation & Research: Driving the Future of Pharmaceuticals",
//     slug: "innovation-research-pharma",
//   },
//   {
//     id: 4,
//     img: "/blogs/quality/quality-1.jpg",
//     date: "22 JULY, 2025",
//     author: "BRIDGE QUALITY TEAM",
//     title: "Quality Assurance Protocols in Pharmaceutical Distribution",
//     slug: "pharma-quality-assurance-protocols",
//   },
//   {
//     id: 5,
//     img: "/blogs/supply-chain/supply-1.jpg",
//     date: "14 JULY, 2025",
//     author: "BRIDGE SUPPLY CHAIN",
//     title: "Strengthening Cold Chain Logistics for Medicine Safety",
//     slug: "cold-chain-medicine-safety",
//   },
//   {
//     id: 6,
//     img: "/blogs/technology/tech-1.jpg",
//     date: "05 JULY, 2025",
//     author: "BRIDGE PHARMA TECH",
//     title: "Digital Transformation in Pharmaceutical Operations",
//     slug: "digital-transformation-pharma-operations",
//   },
// ];

// const cardVariants = {
//   hidden: { opacity: 0, y: 40 },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.6, ease: "easeOut" },
//   },
// };

// export default function BlogPageSection() {
//   return (
//     <section className="py-24 bg-gray-50 relative">
//       <div className="max-w-7xl mx-auto">
//         <motion.div
//           className="grid grid-cols-1 md:grid-cols-2 gap-6"
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, amount: 0.2 }}
//         >
//           {blogs.map((blog) => (
//             <motion.article
//               key={blog.id}
//               variants={cardVariants}
//               className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500"
//             >
//               {/* Image */}
//               <div className="relative h-64 overflow-hidden">
//                 <motion.div
//                   whileHover={{ scale: 1.08 }}
//                   transition={{ duration: 0.6, ease: "easeOut" }}
//                   className="relative w-full h-full"
//                 >
//                   <Image
//                     src={blog.img}
//                     alt={blog.title}
//                     fill
//                     className="object-cover"
//                   />
//                 </motion.div>
//               </div>

//               {/* Content */}
//               <div className="p-7">
//                 <div className="flex items-center gap-4 mb-4">
//                   <span className="inline-flex items-center text-xs font-semibold tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full">
//                     {blog.date}
//                   </span>

//                   <div className="flex items-center gap-2 text-gray-500 text-xs">
//                     <FaRegUser />
//                     <span>{blog.author}</span>
//                   </div>
//                 </div>

//                 <h3 className="text-lg font-semibold text-gray-900 leading-snug mb-5">
//                   {blog.title}
//                 </h3>

//                 <Link href={`/blogs/${blog.slug}`}>
//                   <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all duration-300">
//                     Read Article <FaArrowRight />
//                   </span>
//                 </Link>
//               </div>
//             </motion.article>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }

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
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Page Title */}
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold text-[#0B1C2D]">
            Insights & Articles
          </h1>
        </div>

        {/* Featured Post */}
        <div className="mb-20 bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition">
          <div className="grid md:grid-cols-2">
            <Image
              src={featured.image}
              alt={featured.title}
              width={700}
              height={500}
              className="object-cover h-full"
            />
            <div className="p-12 flex flex-col justify-center">
              <p className="text-sm text-[#5B2EFF] uppercase tracking-widest mb-3">
                Featured Article
              </p>
              <h2 className="text-3xl font-bold mb-6">{featured.title}</h2>
              <p className="text-gray-600 mb-6">{featured.excerpt}</p>
              <Link
                href={`/blog/${featured.slug}`}
                className="text-[#5B2EFF] font-semibold"
              >
                Read Full Article →
              </Link>
            </div>
          </div>
        </div>

        {/* Search */}
        {/* <div className="mb-12 flex justify-end">
          <input
            type="text"
            placeholder="Search articles..."
            className="border border-gray-200 rounded-xl px-5 py-3 w-80 focus:outline-none focus:ring-2 focus:ring-[#5B2EFF]"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div> */}

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {displayedPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition"
            >
              <Image
                src={post.image}
                alt={post.title}
                width={500}
                height={300}
                className="object-cover"
              />
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">
                  {new Date(post.date).toDateString()}
                </p>
                <h3 className="text-xl font-semibold mb-4">{post.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-[#5B2EFF] font-medium"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-16 flex justify-center gap-4">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-4 py-2 rounded-lg ${
                currentPage === i + 1
                  ? "bg-[#5B2EFF] text-white"
                  : "bg-white border"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}