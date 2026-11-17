
type FreezerModel = {
  name: string;
  model: string;
  capacity: string;
  power?: string;
  energyConsumption?: string;
  imageSrc?: string;
  imageAlt: string;
};

const freezers: FreezerModel[] = [
  {
    name: "Haier Thermocool Inverter Chest Freezer",
    model: "HTF-202VS",
    capacity: "196 Litres",
    power: "110W",
    energyConsumption: "0.48kWh per 24 hours",
    imageSrc: "/images/colar1000/freezer-1.jpg",
    imageAlt: "Haier Thermocool 196L HTF-202VS inverter chest freezer",
  },
  {
    name: "Haier Thermocool Inverter Chest Freezer",
    model: "HTF-219IW R6",
    capacity: "219 Litres",
    imageSrc: "/images/colar1000/freezer-2.jpg",
    imageAlt: "Haier Thermocool 219L HTF-219IW R6 inverter chest freezer",
  },
  {
    name: "Hisense Inverter Chest Freezer",
    model: "FC340SHI",
    capacity: "249 Litres",
    imageSrc: "/images/colar1000/freezer-3.webp",
    imageAlt: "Hisense 249L FC340SHI inverter chest freezer",
  },
];

export default function Colar1000PlusFreezerSection() {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-5">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-green-700">
            Freezer Backup with Colar1000 Plus
          </p>

          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-950 mt-4">
            Compatible Inverter Freezers You Can Power
          </h2>

          <p className="text-gray-600 leading-8 mt-5">
            The Colar1000 Plus combines a 500W inverter output with a
            1,004.8Wh LiFePO4 battery. It can power selected inverter
            chest freezers, making it a practical backup option for homes,
            shops and small businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mt-12 max-w-5xl mx-auto">
          {freezers.map((freezer) => (
            <div
              key={freezer.model}
              className="bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-sm"
            >
              <div className="h-64 bg-white flex items-center justify-center p-5">
                {freezer.imageSrc ? (
                  <img
                    src={freezer.imageSrc}
                    alt={freezer.imageAlt}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <div className="text-center text-gray-400">
                    <div className="text-5xl mb-3">❄️</div>
                    <p className="text-sm font-medium">
                      Freezer image will be added here
                    </p>
                  </div>
                )}
              </div>

              <div className="p-6 md:p-7">
                <p className="text-xs font-bold uppercase tracking-wider text-green-700">
                  Compatible inverter freezer
                </p>

                <h3 className="text-xl font-extrabold text-gray-950 mt-3">
                  {freezer.name}
                </h3>

                <p className="text-gray-600 mt-2">
                  Model: {freezer.model}
                </p>

                <div className="grid grid-cols-2 gap-3 mt-6">
                  <div className="rounded-xl bg-gray-50 p-4">
                    <p className="text-xs text-gray-500">Capacity</p>
                    <p className="font-extrabold text-gray-950 mt-1">
                      {freezer.capacity}
                    </p>
                  </div>

                  {freezer.power && (
                    <div className="rounded-xl bg-gray-50 p-4">
                      <p className="text-xs text-gray-500">Rated power</p>
                      <p className="font-extrabold text-gray-950 mt-1">
                        {freezer.power}
                      </p>
                    </div>
                  )}

                  {freezer.energyConsumption && (
                    <div className="rounded-xl bg-gray-50 p-4 col-span-2">
                      <p className="text-xs text-gray-500">
                        Stated energy consumption
                      </p>
                      <p className="font-extrabold text-gray-950 mt-1">
                        {freezer.energyConsumption}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto rounded-2xl bg-green-950 text-white p-7 md:p-9 mt-10">
         <h3 className="text-xl md:text-2xl font-extrabold">
            Keep Your Freezer Running, Keep Your Business Moving
            </h3>

            <p className="text-green-100 leading-8 mt-4">
            The Colar1000 Plus delivers 500W inverter output and 1,004.8Wh
            battery capacity to power compatible, energy-efficient inverter
            freezers.
            </p>

            <p className="text-green-100 leading-8 mt-3">
            Pair it with a suitable solar panel system for continuous freezer
            operation and dependable backup power for your frozen-food business.
            </p>

          <p className="text-green-100 leading-8 mt-3">
            The 500W inverter rating determines the power the unit can
            supply, while the 1,004.8Wh battery capacity determines the
            stored energy available for use.
          </p>
        </div>

        <div className="text-center mt-10">
          <a
            href="#colar1000-order"
            className="inline-block w-full sm:w-auto rounded-xl bg-green-700 hover:bg-green-800 text-white font-extrabold text-center px-10 py-4 transition"
          >
            Order Colar1000 Plus
          </a>
        </div>
      </div>
    </section>
  );
}