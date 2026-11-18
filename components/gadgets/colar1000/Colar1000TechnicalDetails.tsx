
type Colar1000TechnicalDetailsProps = {
  name: string;
  output: string;
  description: string;
};

export default function Colar1000TechnicalDetails({
  name,
  output,
}: Colar1000TechnicalDetailsProps) {
  return (
    <section
      id="colar1000-technical"
      className="bg-gray-50 py-16 md:py-20"
    >
      <div className="max-w-5xl mx-auto px-5">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <p className="text-sm font-bold uppercase tracking-wider text-green-700">
            Product Specifications
          </p>

          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-950 mt-3">
            Meet the {name}
          </h2>

          <p className="text-gray-600 leading-7 mt-4">
            Here are the key specifications to know before choosing your power station.
          </p>
        </div>

        <div className="max-w-3xl mx-auto rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-wider text-green-700">
            {name}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
            <div className="rounded-2xl bg-green-50 p-5">
              <p className="text-xs font-bold uppercase tracking-wide text-green-800">
                Rated Inverter Output
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
                Battery Technology
              </p>
              <p className="text-2xl font-extrabold text-blue-900 mt-2">
                LiFePO4
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-green-200 bg-green-50 p-6 md:p-8 text-center">
          <p className="font-extrabold text-green-950">
            Honest Information. Confident Buying.
          </p>

          <p className="text-sm text-green-900 leading-7 mt-2 max-w-2xl mx-auto">
            At Starntech, we help you understand the product
            specifications and check appliance compatibility
            before you buy.
          </p>
        </div>
      </div>
    </section>
  );
}
