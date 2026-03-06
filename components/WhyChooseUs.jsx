export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <img
          src="/why-us.jpg"
          alt="Why Choose Us"
          className="rounded-2xl shadow-xl"
        />

        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1C2D]">
            Why Partner With Our Firm?
          </h2>

          <p className="mt-6 text-gray-600 leading-relaxed">
            We combine regulatory expertise with precision-driven audit
            methodology to ensure compliance, transparency, and business growth.
            Our team prioritizes accuracy and long-term trust.
          </p>

          <button className="mt-8 bg-[#5B2EFF] text-white px-7 py-3 rounded-xl hover:bg-[#4726d1] transition-all duration-300 shadow-lg">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}
