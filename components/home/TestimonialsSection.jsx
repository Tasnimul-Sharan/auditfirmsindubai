export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "David Thompson",
      role: "Financial Director",
      text: "The level of expertise and professionalism is unmatched. Highly recommended for compliance and audit services.",
    },
    {
      name: "Sarah Johnson",
      role: "CEO, Tech Solutions",
      text: "Accurate, efficient, and extremely transparent throughout the audit process.",
    },
    {
      name: "John Vincent",
      role: "Business Owner",
      text: "Outstanding guidance and financial insights that improved our reporting standards.",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1C2D]">
            What Our Clients Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl 
                         transition-all duration-300"
            >
              <p className="text-gray-600 leading-relaxed mb-6">
                “{item.text}”
              </p>

              <div>
                <h4 className="font-semibold text-[#0B1C2D]">{item.name}</h4>
                <p className="text-sm text-gray-500">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
