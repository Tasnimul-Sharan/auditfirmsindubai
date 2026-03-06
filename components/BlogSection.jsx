import Link from "next/link";

export default function BlogSection() {
  const posts = [
    {
      title: "Anti-Money Laundering Compliance in UAE",
      excerpt:
        "Understanding AML regulations and how businesses can ensure compliance.",
      image: "/blog/blog1.jpg",
      slug: "anti-money-laundering-uae",
    },
    {
      title: "The Importance of Annual Audits",
      excerpt:
        "Why structured financial reviews are critical for sustainable growth.",
      image: "/blog/blog2.jpg",
      slug: "importance-of-annual-audits",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1C2D]">
            Latest Insights
          </h2>

          <Link
            href="/blog"
            className="text-[#5B2EFF] font-medium hover:underline"
          >
            View All →
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {posts.map((post, i) => (
            <div
              key={i}
              className="bg-gray-50 rounded-2xl overflow-hidden 
                         hover:shadow-xl transition-all duration-300"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-60 object-cover"
              />

              <div className="p-8">
                <h3 className="text-xl font-semibold text-[#0B1C2D] mb-4">
                  {post.title}
                </h3>

                <p className="text-gray-600 mb-6">{post.excerpt}</p>

                <Link
                  href={`/blog/${post.slug}`}
                  className="text-[#5B2EFF] font-medium hover:underline"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
