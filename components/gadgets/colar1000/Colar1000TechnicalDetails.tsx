
type Colar1000TechnicalDetailsProps = {
  name: string;
  output: string;
  description: string;
};

export default function Colar1000TechnicalDetails({
  name,
  output,
  description,
}: Colar1000TechnicalDetailsProps) {
  return (
    <section
      id="colar1000-technical"
      className="bg-gray-50 py-16 md:py-24"
    >
      <div className="max-w-7xl mx-auto px-5">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-sm font-bold uppercase tracking-wider text-green-700">
            Understand Before You Buy
          </p>

          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-950 mt-3">
            Understand Your {name}
          </h2>

          <p className="text-gray-600 leading-7 mt-4">
            {description} Here is what its stated inverter
            rating and battery capacity mean before you buy.
          </p>
        </div>

        <div className="max-w-2xl mx-auto rounded-3xl border-2 border-green-700 bg-white p-6 md:p-8 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-wider text-green-700">
            {name}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          <div className="rounded-2xl bg-green-50 p-5">
            <p className="text-xs font-bold uppercase tracking-wide text-green-800">
              Inverter Rating
            </p>
            <p className="text-3xl font-extrabold text-green-800 mt-2">
              {output}
            </p>
          </div>

          <div className="rounded-2xl bg-gray-50 p-5">
            <p className="text-xs font-bold uppercase tracking-wide text-gray-500">
              Battery Capacity
            </p>
            <p className="text-3xl font-extrabold text-gray-900 mt-2">
              1,004.8Wh
            </p>
          </div>

          <div className="rounded-2xl bg-blue-50 p-5">
            <p className="text-xs font-bold uppercase tracking-wide text-blue-800">
              Battery Type
            </p>
            <p className="text-2xl font-extrabold text-blue-900 mt-2">
              LiFePO4
            </p>
          </div>
        </div>
          </div>
        

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-12">
          <div className="rounded-3xl bg-white border border-gray-200 p-6 md:p-8">
            <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center text-2xl">
              ⚡
            </div>

            <h3 className="text-xl font-extrabold text-gray-950 mt-5">
              What Does {output} Mean?
            </h3>

            <p className="text-sm text-gray-600 leading-7 mt-3">
              This is the inverter output rating. It tells you
              the rated power output of the power station.
              Appliances connected to the unit must operate
              within its output limits.
            </p>

            <p className="text-sm text-gray-600 leading-7 mt-3">
              Some appliances also require extra power when
              starting. This is why checking both running
              power and starting surge requirements matters
              before choosing a power station.
            </p>
          </div>

          <div className="rounded-3xl bg-white border border-gray-200 p-6 md:p-8">
            <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-2xl">
              🔋
            </div>

            <h3 className="text-xl font-extrabold text-gray-950 mt-5">
              What Does 1,004.8Wh Mean?
            </h3>

            <p className="text-sm text-gray-600 leading-7 mt-3">
            Watt-hours measure the energy stored in the
            battery. Each Colar1000 unit has a stated
            capacity of 1,004.8Wh using LiFePO4 battery
            technology.
          </p>

            <p className="text-sm text-gray-600 leading-7 mt-3">
              Actual usable energy and runtime depend on
              inverter efficiency, appliance consumption
              and other operating conditions.
            </p>
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-green-200 bg-green-50 p-6 md:p-8">
          <p className="font-extrabold text-green-950">
            Our Promise at Starntech
          </p>

          <p className="text-sm text-green-900 leading-7 mt-2">
            We would rather tell you the truth than sell you
            the wrong product. We explain what each power
            station can do and what you should check before
            choosing one.
          </p>
        </div>

        <p className="text-xs text-gray-500 leading-6 mt-6 text-center">
          Battery capacity and inverter ratings are based on
          the product specifications supplied to Starntech.
          Appliance compatibility depends on the complete
          electrical specifications.
        </p>
      </div>
    </section>
  );
}
