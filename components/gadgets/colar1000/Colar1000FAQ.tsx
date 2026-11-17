
import { useState } from "react";

const faqs = [
  {
    question: "What is the difference between Colar1000 Neo, Pro and Plus?",
    answer:
      "The Colar1000 Neo and Pro both have a rated inverter output of 300W, while the Colar1000 Plus offers 500W. All three models have a 1,004.8Wh LiFePO4 battery. Neo and Pro share the same battery capacity and inverter output, while the Pro features a more modern design. The Plus is the higher-output option for appliances with greater power requirements.",
  },
  {
    question: "Do all three models have the same battery capacity?",
    answer:
      "Yes. The Neo, Pro and Plus each have a 1,004.8Wh LiFePO4 battery. Their main difference is inverter output: Neo and Pro are rated at 300W, while Plus is rated at 500W. Actual backup time depends on the appliances connected, their power consumption and how long you use them.",
  },
  {
    question: "What does the FREE 18-inch Colar solar fan offer include?",
    answer:
      "Every advertised Colar1000 package includes one FREE 18-inch Colar solar fan. The Neo package includes two power stations and one free fan. The Pro package also includes two power stations and one free fan, while the Plus package includes one power station and one free fan. The fan is an additional gift at no extra cost.",
  },
  {
    question: "What are the payment arrangements?",
    answer:
      "Customers in covered areas of Abuja (FCT) can pay on delivery, subject to confirmation of their delivery address. Customers outside Abuja are required to make full payment before dispatch. Our team will confirm the order and payment arrangements with you.",
  },
  {
    question: "Who pays for transportation?",
    answer:
      "Transportation is paid separately by the customer. The applicable delivery or transport cost will be confirmed based on your location and delivery arrangements before dispatch.",
  },
  {
    question: "Which Colar1000 model is suitable for my appliances?",
    answer:
      "The Neo and Pro have a 300W rated inverter output, while the Plus has a 500W rated output. Your choice should depend on the combined running wattage of the appliances you want to use. Remember that appliances with motors or compressors may draw extra power when starting. Also, the total load running at the same time must remain within the power station's rated output. If you are unsure, contact Starntech with a list of your appliances so we can help you choose the right model.",
  },
  {
    question: "Which solar panel is recommended for the Colar1000 Neo and Pro?",
    answer:
      "We recommend a 300W solar panel for both the Colar1000 Neo and Pro. Their maximum solar charging input is 200W, maximum PV input voltage is 52V, and maximum input current is 10A. The 300W panel provides additional capacity to compensate for real-world solar losses and helps the power station get closer to its maximum charging input under favourable sunlight conditions. Before connecting a panel, ensure its electrical specifications are compatible with the power station's permitted input limits.",
  },
  {
    question: "Which solar panels can I use with the Colar1000 Plus?",
    answer:
      "The manufacturer's recommended solar panel for the Colar1000 Plus is 320W. You can also use a 400W or 450W panel, provided its electrical specifications remain within the power station's permitted PV input limits: 11–55V input voltage and 10A maximum input current. The Plus has a maximum solar charging input of 300W, so using a larger panel does not increase its maximum charging capacity. The additional panel capacity helps compensate for real-world solar losses. Always check the panel's open-circuit voltage (Voc) and current specifications before connecting it.",
  },
];

export default function Colar1000FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-5">
        <div className="text-center mb-12">
          <p className="text-sm font-bold uppercase tracking-wider text-green-700">
            Need More Clarity?
          </p>

          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-950 mt-3">
            Frequently Asked Questions
          </h2>

          <p className="text-gray-600 leading-7 mt-4">
            Find answers to common questions about the Colar1000
            power stations, solar panels, packages and delivery.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="rounded-2xl border border-gray-200 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-5 p-5 md:p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-bold text-gray-900">
                    {faq.question}
                  </span>

                  <span className="text-2xl text-green-700 shrink-0">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 md:px-6 pb-6">
                    <p className="text-sm md:text-base text-gray-600 leading-7">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
