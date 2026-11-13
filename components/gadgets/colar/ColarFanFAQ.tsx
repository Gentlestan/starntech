
type ColarFanFAQProps = {
  imageSrc?: string;
  imageAlt: string;
  selectedVariantName: string;
  onOrderClick: () => void;
};

const faqs = [
  {
    question: "What is the difference between the 16-inch and 18-inch Colar fans?",
    answer:
      "The 16-inch model is the CH-SF3, with a stated 6,000mAh / 7.4V rechargeable battery. The larger 18-inch CH-SF04 comes with a stated 12,000mAh battery capacity. Both models include a 25W solar panel, remote control, three speed settings and built-in LED lighting.",
  },
  {
    question: "What is the advantage of the 25W solar panel?",
    answer:
      "Both Colar models come with a 25W solar panel. Some comparable solar fans are advertised with 15W or 20W panels. A 25W panel has a higher rated power output, potentially providing more charging power when sunlight is sufficient and the charging system supports it. This may help reduce charging time, although actual performance depends on sunlight, battery capacity and charging circuitry.",
  },
  {
    question: "Can I use the fan when NEPA takes light?",
    answer:
      "Yes. Both models have rechargeable batteries, allowing you to continue enjoying airflow when public electricity is unavailable, provided the battery has sufficient charge.",
  },
  {
    question: "Can the solar panel recharge the fan?",
    answer:
      "Yes. Both models come with a 25W solar panel, providing an additional way to recharge the fan using sunlight.",
  },
  {
    question: "Does the fan come with a remote control?",
    answer:
      "Yes. The Colar Solar Home Fan comes with a remote control, making it convenient to operate and adjust its settings.",
  },
  {
    question: "Does the fan have built-in lighting?",
    answer:
      "Yes. Both models feature built-in LED lighting, providing an additional lighting option during evenings and power interruptions.",
  },
{
  question: "How long does the battery last when fully charged?",
  answer:
    "The 16-inch CH-SF3 can provide approximately 4–10 hours of use on a full charge, depending on the selected speed. You can expect around 4–6 hours on High speed and up to 8–10 hours on Low speed. The larger 18-inch CH-SF04 comes with a 12,000mAh rechargeable battery, offering greater battery capacity. Its actual runtime will depend on speed selection and usage conditions, including the use of the LED light and USB output.",
},
{
  question: "How long does it take to fully charge the fan?",
  answer:
    "The 16-inch CH-SF3 takes approximately 2–4 hours to charge, depending on the charging method and conditions. Solar charging time can vary with sunlight strength and panel positioning.",
},
  {
    question: "Can I use the USB port to charge my phone?",
    answer:
      "The fan has a USB output designed for compatible devices. Charging performance depends on the device and the available battery power.",
  },
  {
    question: "Can I order the fan for my parents or relatives in another city?",
    answer:
      "Absolutely! You can place your order from anywhere in Nigeria and provide the recipient's delivery address and phone number. Starntech will help arrange delivery to their location.",
  },
  {
    question: "Do I have to pay before delivery?",
    answer:
      "No. Starntech offers payment on delivery. Our team will contact you to confirm your selected fan size and delivery details before dispatch. You pay when your order arrives.",
  },
  {
    question: "Is nationwide delivery included?",
    answer:
      "Yes. Nationwide delivery is included in the advertised price. Our team will confirm the delivery arrangements with you before dispatch.",
  },
  {
    question: "What happens after I place my order?",
    answer:
      "Once you submit your order, our team will contact you to confirm your preferred fan size, contact information and delivery address before arranging dispatch.",
  },
];

export default function ColarFanFAQ({
  imageSrc,
  imageAlt,
  selectedVariantName,
  onOrderClick,
}: ColarFanFAQProps) {
  return (
    <section className="mt-14 md:mt-20">
      {/* FAQ HEADING */}
      <div className="max-w-2xl mx-auto text-center mb-8">
        <p className="text-sm font-bold uppercase tracking-wider text-green-700">
          Before You Place Your Order
        </p>

        <h2 className="text-2xl md:text-4xl font-extrabold text-gray-950 mt-2">
          Questions? We've Got Answers.
        </h2>

        <p className="text-gray-600 text-sm md:text-base leading-7 mt-3">
          Everything you need to know about the Colar Solar Home
          Fan, its features, ordering and nationwide delivery.
        </p>
      </div>

      {/* FAQ AND PRODUCT IMAGE */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-start">
        {/* EXPANDABLE QUESTIONS */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <details
              key={faq.question}
              className="group rounded-xl border border-gray-200 bg-white p-4 md:p-5"
              open={index === 0}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-gray-900">
                <span>{faq.question}</span>

                <span className="flex-shrink-0 text-green-700 text-xl transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>

              <p className="text-sm text-gray-600 leading-7 mt-3">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>

        {/* ACTUAL COLAR PRODUCT IMAGE */}
        <div className="lg:sticky lg:top-24">
          <div className="relative min-h-[300px] md:min-h-[420px] rounded-3xl overflow-hidden bg-gray-50 border border-gray-100">
            {imageSrc ? (
              <img
                src={imageSrc}
                alt={imageAlt}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-contain p-6 md:p-10"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-sm">
                Colar fan image coming soon
              </div>
            )}

            <div className="absolute bottom-4 left-4 bg-white/95 rounded-full px-4 py-2 text-xs font-bold text-green-800 shadow-sm">
              {selectedVariantName}
            </div>
          </div>
        </div>
      </div>

      {/* FINAL SALES MESSAGE */}
      <div className="mt-10 rounded-3xl bg-green-800 px-6 py-9 md:px-10 md:py-12 text-center">
        <p className="text-green-200 text-sm font-bold uppercase tracking-wider">
          A Thoughtful Gift. Everyday Comfort.
        </p>

        <h2 className="text-2xl md:text-4xl font-extrabold text-white mt-3">
          This Christmas, Send Comfort Home!
        </h2>

        <p className="text-green-50 text-sm md:text-base leading-7 max-w-2xl mx-auto mt-4">
          Whether you're buying for your own home or sending a
          thoughtful gift to your parents and loved ones, let
          Starntech help arrange delivery.
        </p>

        <button
          type="button"
          onClick={onOrderClick}
          className="w-full sm:w-auto mt-7 rounded-xl bg-white px-8 py-4 text-green-800 font-extrabold text-base shadow-lg hover:bg-green-50 transition"
        >
          Order Now – Pay on Delivery
        </button>

        <p className="text-xs text-green-100 mt-4">
          Nationwide delivery included. No online payment required.
        </p>
      </div>
    </section>
  );
}
