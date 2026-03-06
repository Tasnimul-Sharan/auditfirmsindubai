import Link from "next/link";
import {
  FaShieldAlt,
  FaChartLine,
  FaSearchDollar,
  FaBalanceScale,
  FaFileInvoiceDollar,
  FaUniversity,
} from "react-icons/fa";

export default function ServicesPage() {
  return (
    <div className="bg-white text-[#0B1C2D] overflow-hidden">
      {/* ================= HERO ================= */}
      <section className="relative py-32 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
        {/* Background Accent */}
        <div className="absolute top-0 left-0 w-full h-96 bg-[#5B2EFF]/5 blur-3xl -z-10" />

        <div className="custom-container text-center max-w-4xl mx-auto">
          <p className="uppercase tracking-widest text-sm text-[#5B2EFF] mb-4">
            Our Expertise
          </p>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Audit & Advisory Services Designed for Modern Enterprises
          </h1>

          <p className="text-gray-600 mt-6 text-lg">
            Strategic, compliance-driven, and precision-focused audit solutions
            tailored for UAE and international businesses.
          </p>
        </div>
      </section>

      {/* ================= SERVICES GRID ================= */}
      <section className="py-28 bg-gradient-to-b from-gray-50 to-white">
        <div className="custom-container">
          <div className="grid md:grid-cols-2 gap-6 lg:grid-cols-3">
            <ServiceCard
              icon={<FaShieldAlt />}
              title="External Audit Services"
              description="Independent statutory audits ensuring full regulatory compliance and transparent financial reporting."
            />

            <ServiceCard
              icon={<FaChartLine />}
              title="Internal Audit & Risk"
              description="Risk assessment frameworks and internal control systems to strengthen governance."
            />

            <ServiceCard
              icon={<FaSearchDollar />}
              title="Forensic Audit"
              description="Financial investigation and fraud detection services with advanced analytical methodologies."
            />

            <ServiceCard
              icon={<FaBalanceScale />}
              title="Tax Advisory"
              description="Strategic VAT and corporate tax planning aligned with UAE and international regulations."
            />

            <ServiceCard
              icon={<FaFileInvoiceDollar />}
              title="Due Diligence"
              description="Comprehensive financial reviews for mergers, acquisitions, and investment decisions."
            />

            <ServiceCard
              icon={<FaUniversity />}
              title="IFRS & Compliance"
              description="IFRS advisory and regulatory compliance solutions tailored for growing enterprises."
            />
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIAL SECTION ================= */}
      <section className="py-32 bg-white">
        <div className="custom-container">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-2xl text-gray-700 leading-relaxed italic">
              “Outstanding communication and exceptional financial precision.
              Their strategic advisory has significantly strengthened our
              corporate compliance structure.”
            </p>

            <div className="mt-10">
              <h4 className="font-semibold text-lg">Michael Chen</h4>
              <p className="text-sm text-gray-500">Marketing Director</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PREMIUM CTA ================= */}
      <section className="relative py-32">
        <div className="custom-container">
          <div className="relative rounded-3xl overflow-hidden bg-[#0B1C2D] p-16 text-white">
            <div className="absolute inset-0 bg-gradient-to-r from-[#5B2EFF]/40 to-transparent" />

            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold mb-6">
                Book a Confidential Consultation
              </h2>

              <p className="text-gray-300 mb-10 text-lg">
                Over 40 years of experience ensuring financial clarity,
                compliance, and strategic security.
              </p>

              <Link
                href="/contact"
                className="inline-block bg-white text-[#0B1C2D] px-10 py-4 rounded-2xl
                           font-semibold hover:bg-[#5B2EFF]
                           hover:text-white transition-all duration-300
                           shadow-xl"
              >
                Schedule Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ================= SERVICE CARD COMPONENT ================= */

function ServiceCard({ icon, title, description }) {
  return (
    <div
      className="group relative rounded-3xl p-10 bg-white shadow-sm 
                    hover:shadow-2xl transition-all duration-500 
                    border border-gray-100 hover:border-[#5B2EFF]/30
                    hover:-translate-y-2"
    >
      {/* Icon Badge */}
      <div
        className="w-14 h-14 rounded-2xl bg-[#5B2EFF]/10 
                      flex items-center justify-center 
                      mb-6 group-hover:bg-[#5B2EFF] 
                      transition-all duration-300 text-[#5B2EFF]
                      group-hover:text-white text-xl"
      >
        {icon}
      </div>

      <h3 className="text-2xl font-semibold mb-4">{title}</h3>

      <p className="text-gray-600 leading-relaxed mb-6">{description}</p>

      <Link
        href="/contact"
        className="text-[#5B2EFF] font-medium flex items-center gap-2
                   group-hover:gap-4 transition-all duration-300"
      >
        Learn More →
      </Link>
    </div>
  );
}
