export default function OurPurposeSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1C2D]">
            Our Purpose
          </h2>

          <div className="w-16 h-1 bg-[#C8A951] my-6"></div>

          <p className="text-gray-600 leading-relaxed">
            We assist enterprises, high-net-worth individuals, and corporations
            across the UAE with precise financial audits and compliance-driven
            advisory services. Our certified public accountants follow
            international standards to ensure transparency and sustainable
            growth.
          </p>

          <p className="text-gray-600 leading-relaxed mt-4">
            With expertise in corporate finance, taxation, regulatory
            frameworks, and risk assessment, we provide clarity in complex
            financial environments.
          </p>
        </div>

        <div>
          <img
            src="/about-purpose.jpg"
            alt="Audit Discussion"
            className="rounded-2xl shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
