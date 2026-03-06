export default function ElegantStats() {
  return (
    <section className="py-20 bg-[#0B1C2D] text-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-12 text-center">
        {[
          { value: "40+", label: "Years Experience" },
          { value: "150+", label: "Countries Served" },
          { value: "30,000+", label: "Clients" },
          { value: "120+", label: "Awards" },
        ].map((stat, i) => (
          <div key={i}>
            <h3 className="text-4xl font-bold text-[#C8A951]">{stat.value}</h3>
            <p className="mt-2 text-gray-300">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
