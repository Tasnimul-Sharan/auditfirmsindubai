export default function ClientsSection() {
  const clients = [
    "/clients/client1.png",
    "/clients/client2.png",
    "/clients/client3.png",
    "/clients/client4.png",
    "/clients/client5.png",
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1C2D]">
            Trusted By Leading Organizations
          </h2>
          <p className="text-gray-600 mt-4">
            We proudly serve businesses across the UAE and internationally.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 items-center">
          {clients.map((logo, i) => (
            <div
              key={i}
              className="bg-gray-50 p-6 rounded-xl flex items-center justify-center
                         hover:shadow-lg transition-all duration-300"
            >
              <img
                src={logo}
                alt="Client Logo"
                className="max-h-12 opacity-70 hover:opacity-100 transition"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
