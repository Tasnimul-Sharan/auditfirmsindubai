// import { useState } from "react";

// export default function ContactPageSection() {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [success, setSuccess] = useState(false);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     // Fake delay (replace with real API call)
//     setTimeout(() => {
//       setLoading(false);
//       setSuccess(true);
//       setForm({ name: "", email: "", subject: "", message: "" });
//     }, 1000);
//   };

//   return (
//     <section className="bg-white">

//       {/* HERO */}
//       <div className="py-24 text-center border-b">
//         <h1 className="text-5xl font-bold text-[#0B1C2D]">
//           Contact Our Advisory Team
//         </h1>
//         <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
//           Speak directly with our audit specialists for confidential
//           consultation and regulatory guidance.
//         </p>
//       </div>

//       {/* MAIN GRID */}
//       <div className="py-24 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20">

//         {/* LEFT PANEL */}
//         <div>
//           <h2 className="text-2xl font-semibold text-[#0B1C2D] mb-10">
//             Direct Contact
//           </h2>

//           <div className="space-y-8 text-gray-700">

//             <div>
//               <p className="text-sm uppercase tracking-widest text-gray-400">
//                 Landline
//               </p>
//               <p className="text-lg font-medium">
//                 +971 42 500 251
//               </p>
//             </div>

//             <div>
//               <p className="text-sm uppercase tracking-widest text-gray-400">
//                 Phone (Call Only)
//               </p>
//               <p className="text-lg font-medium">
//                 +971 50 7869887
//               </p>
//             </div>

//             <div>
//               <p className="text-sm uppercase tracking-widest text-gray-400">
//                 WhatsApp
//               </p>
//               <p className="text-lg font-medium">
//                 +971 52 6922 588
//               </p>
//             </div>

//             <div>
//               <p className="text-sm uppercase tracking-widest text-gray-400">
//                 Email
//               </p>
//               <p className="text-lg font-medium">
//                 sales@auditfirmsindubai.com
//               </p>
//             </div>

//             <div>
//               <p className="text-sm uppercase tracking-widest text-gray-400">
//                 Office
//               </p>
//               <p className="text-lg font-medium">
//                 IBIS Hotel Building – Office Entrance 5th Floor,
//                 Office No. 5001, Rigga Road Dubai, UAE
//               </p>
//             </div>

//           </div>
//         </div>

//         {/* FORM */}
//         <div className="bg-gray-50 p-12 rounded-3xl shadow-sm">
//           <h2 className="text-2xl font-semibold mb-10 text-[#0B1C2D]">
//             Send a Confidential Message
//           </h2>

//           <form onSubmit={handleSubmit} className="space-y-6">

//             <input
//               name="name"
//               value={form.name}
//               onChange={handleChange}
//               required
//               placeholder="Full Name"
//               className="w-full border border-gray-200 rounded-xl px-5 py-4 focus:ring-2 focus:ring-[#5B2EFF]"
//             />

//             <input
//               name="email"
//               type="email"
//               value={form.email}
//               onChange={handleChange}
//               required
//               placeholder="Email Address"
//               className="w-full border border-gray-200 rounded-xl px-5 py-4 focus:ring-2 focus:ring-[#5B2EFF]"
//             />

//             <input
//               name="subject"
//               value={form.subject}
//               onChange={handleChange}
//               placeholder="Subject"
//               className="w-full border border-gray-200 rounded-xl px-5 py-4 focus:ring-2 focus:ring-[#5B2EFF]"
//             />

//             <textarea
//               name="message"
//               value={form.message}
//               onChange={handleChange}
//               required
//               rows={5}
//               placeholder="Your Message"
//               className="w-full border border-gray-200 rounded-xl px-5 py-4 focus:ring-2 focus:ring-[#5B2EFF]"
//             />

//             <button
//               type="submit"
//               disabled={loading}
//               className="bg-[#5B2EFF] text-white px-10 py-4 rounded-2xl font-semibold hover:bg-[#4726d1] transition w-full"
//             >
//               {loading ? "Sending..." : "Submit Message"}
//             </button>

//             {success && (
//               <p className="text-green-600 text-sm">
//                 Message sent successfully.
//               </p>
//             )}

//           </form>
//         </div>

//       </div>

//       {/* MAP */}
//       <div className="h-[450px]">
//         <iframe
//           src="https://www.google.com/maps/embed?pb=..."
//           width="100%"
//           height="100%"
//           loading="lazy"
//           className="border-0"
//         />
//       </div>

//     </section>
//   );
// }

"use client";

import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaShieldAlt,
  FaBolt,
  FaAward,
} from "react-icons/fa";

function ContactItem({ icon, title, text }) {
  return (
    <div className="flex items-start gap-4">
      <div className="text-xl text-[#8F2DA8] mt-1">{icon}</div>
      <div>
        <h4 className="font-semibold text-lg">{title}</h4>
        <p className="text-gray-600">{text}</p>
      </div>
    </div>
  );
}

function InputField({ placeholder }) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="w-full border border-gray-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#8F2DA8]"
    />
  );
}

function TextareaField({ placeholder }) {
  return (
    <textarea
      rows={5}
      placeholder={placeholder}
      className="w-full border border-gray-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#8F2DA8]"
    />
  );
}

function TrustCard({ icon, title, text }) {
  return (
    <div className="bg-white p-8 rounded-3xl shadow-lg text-center">
      <div className="text-3xl text-[#8F2DA8] mb-4 flex justify-center">
        {icon}
      </div>
      <h4 className="font-bold text-lg mb-2">{title}</h4>
      <p className="text-gray-600">{text}</p>
    </div>
  );
}

export default function ContactPage() {
  return (
    <div className="bg-[#F9F7FC] text-[#1C1C1E] overflow-hidden">
      {/* ================= HERO ================= */}
      <section className="relative py-28 text-white bg-gradient-to-r from-[#5E1B89] to-[#8F2DA8]">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

        <div className="relative custom-container text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Let’s Start a Strategic Conversation
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90 mb-8">
            We’re here to guide your business with clarity, compliance, and
            confidence.
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
            <span>⭐ 40+ Years Experience</span>
            <span>🌍 150+ Countries</span>
            <span>🛡 Trusted by 30,000+ Clients</span>
          </div>
        </div>
      </section>

      {/* ================= MAIN CONTACT SECTION ================= */}
      <section className="py-24 custom-container grid lg:grid-cols-2 gap-16">
        {/* ========= LEFT GLASS PANEL ========= */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/70 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border"
        >
          <h3 className="text-2xl font-bold mb-8">Direct Contact</h3>

          <div className="space-y-8">
            <ContactItem
              icon={<FaPhoneAlt />}
              title="Direct Consultation"
              text="+971 42 500 251"
            />

            <ContactItem
              icon={<FaWhatsapp />}
              title="WhatsApp Priority Line"
              text="+971 50 786 9887"
            />

            <ContactItem
              icon={<FaEnvelope />}
              title="Corporate Email"
              text="sales@auditfirmsindubai.com"
            />

            <ContactItem
              icon={<FaMapMarkerAlt />}
              title="Dubai Office"
              text="IBIS Hotel Building, Rigga Road, Dubai"
            />
          </div>
        </motion.div>

        {/* ========= RIGHT FORM ========= */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl p-12 shadow-2xl border border-gray-200"
        >
          <h3 className="text-2xl font-bold mb-8">Send Confidential Inquiry</h3>

          <form className="space-y-6">
            <InputField placeholder="Full Name" />
            <InputField placeholder="Email Address" />
            <InputField placeholder="Subject" />
            <TextareaField placeholder="Your Message" />

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#5E1B89] to-[#8F2DA8] text-white py-4 rounded-xl font-semibold shadow-lg hover:scale-[1.02] transition-all duration-300"
            >
              Send Confidential Inquiry →
            </button>
          </form>
        </motion.div>
      </section>

      {/* ================= WHY CONTACT US ================= */}
      <section className="pb-24 custom-container">
        <div className="grid md:grid-cols-3 gap-8">
          <TrustCard
            icon={<FaShieldAlt />}
            title="100% Confidential"
            text="Your consultation remains strictly private."
          />

          <TrustCard
            icon={<FaBolt />}
            title="Fast Response"
            text="We respond within 24 business hours."
          />

          <TrustCard
            icon={<FaAward />}
            title="Award Winning Experts"
            text="Certified and experienced audit professionals."
          />
        </div>
      </section>

      {/* ================= MAP SECTION ================= */}
      <section className="relative">
        <div className="absolute top-8 left-8 bg-white p-6 rounded-2xl shadow-xl z-10">
          <h4 className="font-bold text-lg mb-2">Visit Our Dubai Office</h4>
          <button className="text-primary font-semibold">
            Open in Google Maps →
          </button>
        </div>

        <iframe
          src="https://www.google.com/maps/embed?..."
          className="w-full h-[500px] rounded-t-[40px]"
          loading="lazy"
        />
      </section>
    </div>
  );
}