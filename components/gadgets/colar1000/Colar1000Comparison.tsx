
import Image from "next/image";
const powerStations = [
  {
    id: "neo",
    name: "Colar1000 Neo",
    output: "300W",
    price: "₦303,000",
    packageTotal: "₦606,000",
    offer: "Buy 2 units",
    gift: "1 FREE 18-inch Colar Solar Fan",
    description:
    "The upgraded 300W Neo is a portable power solution for customers looking for dependable backup power.",
    featured: false,
  },
  {
    id: "pro",
    name: "Colar1000 Pro",
    output: "300W",
    price: "₦312,000",
    packageTotal: "₦624,000",
    offer: "Buy 2 units",
    gift: "1 FREE 18-inch Colar Solar Fan",
    description:
    "A stylish 300W power station for customers looking for dependable backup power.",
    featured: false,
  },
  {
    id: "plus",
    name: "Colar1000 Plus",
    output: "500W",
    price: "₦332,000",
    packageTotal: "₦332,000",
    offer: "Buy just 1 unit",
    gift: "1 FREE 18-inch Colar Solar Fan",
    description:
      "The highest-output option in the Colar1000 range.",
    featured: true,
  },
];

export default function Colar1000Comparison() {
  return (
    <section
      id="colar1000-offers"
      className="max-w-7xl mx-auto px-5 py-16 md:py-24"
    >
      <div className="max-w-3xl mx-auto text-center mb-10">
        <p className="text-sm font-bold uppercase tracking-wider text-green-700">
          Find Your Power Solution
        </p>

        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-950 mt-3">
          Meet the Colar1000 Family
        </h2>

        <p className="text-gray-600 leading-7 mt-4">
        Explore three Colar1000 power station options, each with a
        special package offer that includes a FREE 18-inch Colar Solar
        Fan. Choose the model that best suits your power needs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {powerStations.map((station) => (
          <div
            key={station.id}
            className={`relative flex flex-col rounded-3xl border-2 p-6 md:p-7 ${
              station.featured
                ? "border-green-700 bg-green-50 shadow-xl"
                : "border-gray-200 bg-white shadow-sm"
            }`}
          >
            {station.featured && (
              <span className="absolute -top-3 left-6 rounded-full bg-green-700 px-4 py-1.5 text-xs font-extrabold text-white">
                FEATURED OFFER
              </span>
            )}

           <div className="mt-3">
            <div className="relative w-full h-48 mb-5">
                <Image
                src={`/images/colar1000/${station.id}-1.webp`}
                alt={station.name}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-contain"
                />
            </div>

            <p className="text-xs uppercase font-bold tracking-wider text-green-700">
                Colar1000 Series
            </p>

              <h3 className="text-2xl font-extrabold text-gray-950 mt-2">
                {station.name}
              </h3>

              <p className="text-3xl md:text-4xl font-extrabold text-green-800 mt-5">
                {station.price}
                </p>

                <p className="text-xs text-gray-500 mt-1">
                Price per unit
                </p>

              <p className="text-4xl font-extrabold text-green-800 mt-4">
                {station.output}
              </p>

             <p className="text-sm text-gray-500 mt-1">
                Rated power output
                </p>

                <p className="text-sm font-bold text-gray-800 mt-4">
                1,004.8Wh Battery Capacity
                </p>

                <p className="text-xs text-gray-500 mt-1">
                LiFePO4 Battery
                </p>
            </div>

            <p className="text-sm text-gray-600 leading-6 mt-5">
              {station.description}
            </p>

            <div className="mt-6 rounded-2xl bg-white border border-green-200 p-4">
              <p className="text-xs uppercase font-bold tracking-wide text-green-700">
                Special Package Gift
                </p>

             <p className="text-lg font-extrabold text-gray-950 mt-2">
                {station.offer}
                </p>
                <p className="text-base font-extrabold text-green-800 mt-2">
                Total: {station.packageTotal}
                </p>

              <p className="text-sm font-bold text-green-800 mt-2">
                🎁 {station.gift}
              </p>
            </div>

            <div className="mt-auto pt-7">
              <a
                href={`/gadgets/solar-solutions/colar1000-${station.id}`}
                className={`block w-full rounded-xl px-5 py-4 text-center font-extrabold transition ${
                  station.featured
                    ? "bg-green-700 text-white hover:bg-green-800"
                    : "bg-gray-950 text-white hover:bg-gray-800"
                }`}
              >
                View Details & Order
              </a>
            </div>
          </div>
        ))}
      </div>

      <p className="text-center text-xs text-gray-500 mt-7 leading-6">
        Each qualifying package includes one FREE 18-inch Colar Solar Fan.
        Transportation is paid separately by the customer. Package prices
        are as displayed above.
        </p>
    </section>
  );
}
