const trustItems = [
  {
    icon: "💳",
    title: "Payment on Delivery",
    description: "Pay when your order arrives.",
  },
  {
    icon: "🚚",
    title: "Nationwide Delivery",
    description: "We deliver through GIG across Nigeria.",
  },
  {
    icon: "📞",
    title: "Order Confirmation",
    description: "We contact you before dispatching your order.",
  },
  {
    icon: "💬",
    title: "Customer Support",
    description: "Get assistance through WhatsApp and phone.",
  },
];

export default function GadgetsTrust() {
  return (
    <div className="mt-16 md:mt-24">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          Why Shop With StarnTech Gadgets?
        </h2>

        <p className="text-gray-600 mt-3 max-w-2xl mx-auto text-sm md:text-base">
          We make ordering simple and convenient, with support from
          order confirmation to delivery.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {trustItems.map((item) => (
          <div
            key={item.title}
            className="bg-white border border-gray-100 rounded-2xl p-5 text-center"
          >
            <div className="text-2xl mb-3">{item.icon}</div>

            <h3 className="font-semibold text-gray-900">
              {item.title}
            </h3>

            <p className="text-sm text-gray-600 mt-2 leading-6">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}