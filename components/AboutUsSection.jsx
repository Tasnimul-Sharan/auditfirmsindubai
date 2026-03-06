"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaShieldAlt, FaLeaf, FaGlobeAsia } from "react-icons/fa";
import SectionBadge from "./SectionBadge";

export default function AboutUsSection() {
  return (
    <section className="relative overflow-hidden bg-[#F9FAFB]">
      {/* Premium Gradient Background Accents */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl" />

      <div className="relative custom-container mx-auto py-28 grid lg:grid-cols-2 gap-20 items-center">
        {/* ================= LEFT CONTENT ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <SectionBadge className="mb-4">
            Since 2010 • Trusted Nationwide
          </SectionBadge>

          <h2 className="text-4xl md:text-5xl font-bold text-secondary leading-tight mb-6">
            Advancing Bangladesh’s
            <span className="block text-primary">
              Animal Health & Biosecurity Standards
            </span>
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed max-w-xl mb-6">
            Bridge Pharmaceuticals Ltd. is a leading animal health company
            committed exclusively to Veterinary & Aquaculture healthcare. We
            deliver scientifically formulated medicines, nutritional
            supplements, and advanced biosecurity solutions tailored for modern
            farming needs.
          </p>

          <p className="text-gray-600 text-lg leading-relaxed max-w-xl mb-10">
            With a decade of expertise and innovation, our mission is to empower
            livestock producers with reliable, affordable, and globally
            benchmarked veterinary solutions that ensure healthier animals and
            sustainable productivity.
          </p>

          {/* Key Highlights */}
          <div className="grid sm:grid-cols-3 gap-6 mb-10">
            <div className="flex items-center gap-3">
              <FaShieldAlt className="text-primary text-xl" />
              <span className="text-gray-700 font-medium">Quality Assured</span>
            </div>

            <div className="flex items-center gap-3">
              <FaLeaf className="text-primary text-xl" />
              <span className="text-gray-700 font-medium">
                Sustainable Practices
              </span>
            </div>

            <div className="flex items-center gap-3">
              <FaGlobeAsia className="text-primary text-xl" />
              <span className="text-gray-700 font-medium">
                Nationwide Reach
              </span>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-5">
            <Link href="/about">
              <button className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:scale-105 transition-all duration-300">
                Discover Our Journey →
              </button>
            </Link>

            <Link href="/contact">
              <button className="border-2 border-primary text-primary px-8 py-4 rounded-xl font-semibold hover:bg-primary hover:text-white transition-all duration-300">
                Talk to Our Experts
              </button>
            </Link>
          </div>
        </motion.div>

        {/* ================= RIGHT IMAGE ================= */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative h-[540px] rounded-[30px] overflow-hidden shadow-2xl">
            <Image
              src="/about.JPG"
              alt="Bridge Pharmaceuticals Animal Health"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Premium Floating Stats Card */}
          <div className="absolute -bottom-10 left-10 bg-white/90 backdrop-blur-lg px-8 py-6 rounded-2xl shadow-xl border">
            <p className="text-sm uppercase tracking-wider text-gray-500 mb-2">
              Over
            </p>
            <p className="text-3xl font-bold text-primary">10+ Years</p>
            <p className="text-gray-600 text-sm">Of Veterinary Innovation</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
