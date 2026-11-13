
//import Image from "next/image";


type ColarFanTrustProps = {
  imageSrc?: string;
  imageAlt: string;
  onOrderClick: () => void;
};

const trustBenefits = [
  {
    icon: "🚚",
    title: "Nationwide Delivery Included",
    description:
      "Whether you're ordering for yourself or sending a fan to your parents and loved ones in another Nigerian city, we'll help arrange delivery to their location.",
  },
  {
    icon: "💳",
    title: "Pay on Delivery",
    description:
      "You don't need to make an online payment before placing your order. Pay when your fan arrives.",
  },
  {
    icon: "📞",
    title: "Order Confirmation",
    description:
      "Our team will contact you to confirm your selected fan size, contact information and delivery details before dispatch.",
  },
  {
    icon: "🎁",
    title: "Sending a Gift? We've Got You.",
    description:
      "You can place an order from wherever you live and provide the delivery details of the person you want to surprise. We'll help coordinate the delivery.",
  },
];

export default function ColarFanTrust({
  imageSrc,
  imageAlt,
  onOrderClick,
}: ColarFanTrustProps) {
  return (
    <section className="mt-14 md:mt-20">
      {/* SECTION HEADING */}
      <div className="max-w-2xl mx-auto text-center mb-8">
        <p className="text-sm font-bold uppercase tracking-wider text-green-700">
          Your Comfort Matters to Us
        </p>

        <h2 className="text-2xl md:text-4xl font-extrabold text-gray-950 mt-2">
          Why Buy Your Colar Fan from Starntech?
        </h2>

        <p className="text-gray-600 text-sm md:text-base leading-7 mt-3">
          Buying a fan should be convenient and straightforward,
          even when you're ordering for someone who lives far away.
          That's why we've made the process easier.
        </p>
      </div>

      {/* TRUST CONTENT */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center">
        {/* ACTUAL COLAR FAN IMAGE */}
        <div className="relative min-h-[300px] md:min-h-[430px] rounded-3xl overflow-hidden bg-gray-50 border border-gray-100">
          {imageSrc ? (
            <img
            src={imageSrc}
            alt={imageAlt}
            className="absolute inset-0 w-full h-full object-contain p-6 md:p-10"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-sm">
              Colar fan image coming soon
            </div>
          )}
        </div>

        {/* REASONS TO BUY FROM STARNTECH */}
        <div className="space-y-5">
          {trustBenefits.map((benefit) => (
            <div
              key={benefit.title}
              className="flex items-start gap-4 rounded-2xl border border-gray-100 bg-white p-4 md:p-5 shadow-sm"
            >
              <span className="flex-shrink-0 flex items-center justify-center w-11 h-11 rounded-xl bg-green-50 text-xl">
                {benefit.icon}
              </span>

              <div>
                <h3 className="text-base font-bold text-gray-900">
                  {benefit.title}
                </h3>

                <p className="text-sm text-gray-600 leading-6 mt-1">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* PAY ON DELIVERY CTA */}
      <div className="mt-8 rounded-2xl bg-green-50 border border-green-100 p-6 md:p-8 text-center">
        <h3 className="text-xl md:text-2xl font-extrabold text-gray-950">
          Ready to Send Comfort Home?
        </h3>

        <p className="text-sm text-gray-600 mt-2">
          Choose your preferred size and let Starntech help
          arrange delivery.
        </p>

        <button
          type="button"
          onClick={onOrderClick}
          className="w-full sm:w-auto mt-5 rounded-xl bg-green-700 px-8 py-4 text-white font-bold text-base shadow-lg shadow-green-700/20 hover:bg-green-800 transition"
        >
          Order Now – Pay on Delivery
        </button>

        <p className="text-xs text-gray-500 mt-3">
          Nationwide delivery included. No online payment required.
        </p>
      </div>
    </section>
  );
}
