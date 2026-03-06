import Link from "next/link";

export default function ServiceCard({ title, description }) {
  return (
    <div className="group relative rounded-3xl p-10 bg-white shadow-sm 
                    hover:shadow-2xl transition-all duration-500 
                    border border-gray-100 hover:border-[#5B2EFF]/30
                    hover:-translate-y-2">

      {/* Icon Badge */}
      <div className="w-14 h-14 rounded-2xl bg-[#5B2EFF]/10 
                      flex items-center justify-center 
                      mb-6 group-hover:bg-[#5B2EFF] 
                      transition-all duration-300">
        <div className="w-6 h-6 bg-[#5B2EFF] 
                        group-hover:bg-white 
                        rounded-md transition-all duration-300" />
      </div>

      <h3 className="text-2xl font-semibold text-[#0B1C2D] mb-4">
        {title}
      </h3>

      <p className="text-gray-600 leading-relaxed mb-6">
        {description}
      </p>

      <Link
        href="#"
        className="text-[#5B2EFF] font-medium flex items-center gap-2
                   group-hover:gap-4 transition-all duration-300"
      >
        Learn More →
      </Link>
    </div>
  );
}