// export default function StatsSection() {
//   return (
//     <section className="py-20 bg-[#0B1C2D] text-white">
//       <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-10 text-center">
//         <div>
//           <h3 className="text-4xl font-bold text-[#C8A951]">40+</h3>
//           <p className="mt-2 text-gray-300">Years Experience</p>
//         </div>

import Counter from "./Counter";

//         <div>
//           <h3 className="text-4xl font-bold text-[#C8A951]">150+</h3>
//           <p className="mt-2 text-gray-300">Countries Served</p>
//         </div>

//         <div>
//           <h3 className="text-4xl font-bold text-[#C8A951]">30,000+</h3>
//           <p className="mt-2 text-gray-300">Clients</p>
//         </div>

//         <div>
//           <h3 className="text-4xl font-bold text-[#C8A951]">120+</h3>
//           <p className="mt-2 text-gray-300">Awards</p>
//         </div>
//       </div>
//     </section>
//   );
// }


export default function StatsSection() {
  return (
    <section className="py-24 bg-[#0B1C2D] text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 text-center">
          <div>
            <h3 className="text-4xl md:text-5xl font-bold text-[#C8A951]">
              <Counter end={40} suffix="+" />
            </h3>
            <p className="mt-3 text-gray-300">Years of Experience</p>
          </div>

          <div>
            <h3 className="text-4xl md:text-5xl font-bold text-[#C8A951]">
              <Counter end={150} suffix="+" />
            </h3>
            <p className="mt-3 text-gray-300">Countries Served</p>
          </div>

          <div>
            <h3 className="text-4xl md:text-5xl font-bold text-[#C8A951]">
              <Counter end={30000} suffix="+" />
            </h3>
            <p className="mt-3 text-gray-300">Clients Served</p>
          </div>

          <div>
            <h3 className="text-4xl md:text-5xl font-bold text-[#C8A951]">
              <Counter end={120} suffix="+" />
            </h3>
            <p className="mt-3 text-gray-300">Industry Awards</p>
          </div>
        </div>
      </div>
    </section>
  );
}