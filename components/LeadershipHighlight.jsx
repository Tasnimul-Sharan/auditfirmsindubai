export default function LeadershipHighlight() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0B1C2D]">
          Leadership & Expertise
        </h2>

        <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
          Our team consists of internationally certified auditors and financial
          strategists dedicated to delivering measurable value and regulatory
          compliance.
        </p>

        <div className="grid md:grid-cols-3 gap-10 mt-16">
          {["Integrity", "Precision", "Transparency"].map((item, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-[#0B1C2D] mb-4">
                {item}
              </h3>
              <p className="text-gray-600 text-sm">
                We uphold the highest standards in financial governance and
                audit practices.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
