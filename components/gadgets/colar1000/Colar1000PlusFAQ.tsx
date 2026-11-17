
import { useState } from "react";

const faqs = [
  {
    question: "Can Colar1000 Plus power my inverter freezer?",
    answer:
      "Yes. Colar1000 Plus delivers 500W inverter output and can power compatible, energy-efficient inverter freezers, provided their running power and startup requirements are within the unit's capacity.",
  },
  {
    question: "How long can it run my freezer?",
    answer:
  "We recommend using energy-efficient inverter freezers like the models featured on this page. When paired with a suitable solar panel system, Colar1000 Plus can recharge during the day while powering your freezer, helping provide continuous power for your frozen goods.",
  },
  {
    question: "Can I recharge the battery with solar while using the freezer?",
    answer:
      "Yes. With a suitable solar panel system connected, the battery can recharge from solar energy while the freezer is operating, helping to support extended freezer operation.",
  },
  {
    question: "Can I use Colar1000 Plus without NEPA electricity?",
    answer:
      "Yes. Once the battery is charged, Colar1000 Plus can power a compatible freezer without NEPA electricity. Connecting a suitable solar panel system helps recharge the battery using sunlight.",
  },
  {
    question:
      "Can I use it to power my freezer and other household appliances at the same time?",
    answer:
      "Yes, provided the combined power requirements are within the unit's capacity. However, for businesses that rely on their freezers to keep products frozen, we recommend dedicating the Colar1000 Plus to the freezer to ensure it gets the available backup power.",
  },
  {
    question: "Does the Colar1000 Plus come with a free solar fan?",
    answer:
      "Yes! Every Colar1000 Plus purchase comes with one FREE 18-inch Colar solar fan at no extra cost. Transportation is paid separately.",
  },
];

export default function Colar1000PlusFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-5">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-bold uppercase tracking-widest text-green-700">
            Frequently Asked Questions
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-950 mt-4">
            Questions About Colar1000 Plus
          </h2>
          <p className="text-gray-600 leading-7 mt-4">
            Here are answers to common questions about using Colar1000 Plus
            for freezer backup.
          </p>
        </div>

        <div className="mt-10 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="border border-gray-200 rounded-2xl overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-5 text-left p-5 md:p-6"
                >
                  <span className="font-bold text-gray-900 leading-7">
                    {faq.question}
                  </span>
                  <span className="text-2xl font-medium text-green-700 shrink-0">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 md:px-6 pb-5 md:pb-6">
                    <p className="text-gray-600 leading-8">
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
