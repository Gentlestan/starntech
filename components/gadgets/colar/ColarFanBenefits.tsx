
import Image from "next/image";

type ColarFanBenefitsProps = {
  imageSrc?: string;
  imageAlt: string;
  selectedVariantName: string;
  onOrderClick: () => void;
};

const benefits = [
  {
    icon: "☀️",
    title: "A 25W Solar Charging Option",
    description:
      "The included 25W solar panel provides another way to recharge your fan when sunlight is available.",
  },
  {
    icon: "🔋",
    title: "Rechargeable Battery",
    description:
      "Store power ahead of time and enjoy the convenience of using your fan when public electricity is unavailable.",
  },
  {
    icon: "🌬️",
    title: "Three Adjustable Speeds",
    description:
      "Choose from three speed settings to get the airflow that suits your comfort.",
  },
  {
    icon: "🎛️",
    title: "Convenient Remote Control",
    description:
      "Adjust your fan settings conveniently without having to reach for the fan controls.",
  },
  {
    icon: "💡",
    title: "Built-in LED Lighting",
    description:
      "Enjoy an additional lighting option during evenings and power interruptions.",
  },
  {
    icon: "🔌",
    title: "Useful Output Options",
    description:
      "The USB output supports compatible devices, while the two DC outputs are designed for compatible LED bulbs.",
  },
];

export default function ColarFanBenefits({
  imageSrc,
  imageAlt,
  selectedVariantName,
  onOrderClick,
}: ColarFanBenefitsProps) {
  return (
    <section className="mt-14 md:mt-20">
      {/* SECTION HEADING */}
      <div className="max-w-2xl mx-auto text-center mb-8">
        <p className="text-sm font-bold uppercase tracking-wider text-green-700">
          Designed for Everyday Convenience
        </p>

        <h2 className="text-2xl md:text-4xl font-extrabold text-gray-950 mt-2">
          More Than Just a Rechargeable Fan
        </h2>

        <p className="text-gray-600 text-sm md:text-base leading-7 mt-3">
          From solar charging to convenient controls and built-in
          lighting, the Colar Solar Home Fan offers useful features
          for everyday home comfort.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center">
        {/* ACTUAL COLAR PRODUCT IMAGE */}
        <div className="relative min-h-[320px] md:min-h-[440px] rounded-3xl overflow-hidden bg-gray-50 border border-gray-100">
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain p-6 md:p-10"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-sm">
              Colar fan image coming soon
            </div>
          )}

          <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 text-xs font-bold text-green-800 shadow-sm">
            Selected Model: {selectedVariantName}
          </div>
        </div>

        {/* CUSTOMER BENEFITS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="rounded-2xl border border-gray-100 bg-white p-4 md:p-5 shadow-sm"
            >
              <span className="text-2xl">
                {benefit.icon}
              </span>

              <h3 className="text-base font-bold text-gray-900 mt-3">
                {benefit.title}
              </h3>

              <p className="text-sm text-gray-600 leading-6 mt-2">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ORDER CTA */}
      <div className="mt-8 text-center">
        <button
          type="button"
          onClick={onOrderClick}
          className="w-full sm:w-auto rounded-xl bg-green-700 px-8 py-4 text-white font-bold text-base shadow-lg shadow-green-700/20 hover:bg-green-800 transition"
        >
          Order Now – Pay on Delivery
        </button>

        <p className="text-xs text-gray-500 mt-3">
          Nationwide delivery included. Pay when your order arrives.
        </p>
      </div>
    </section>
  );
}
