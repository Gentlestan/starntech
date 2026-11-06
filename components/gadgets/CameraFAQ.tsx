
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Does the camera need Wi-Fi?",
    answer:
      "No. The V380 4G Solar Camera connects to the internet using a compatible 4G SIM card. You don't need a Wi-Fi router to use it. For the best experience, ensure you use a 4G network with strong and reliable coverage in your area.",
  },
  {
    question: "Which SIM card can I use?",
    answer:
      "You can use MTN, Airtel, Glo or any other compatible 4G SIM card. Just make sure the network you choose has a strong and reliable 4G signal in the area where you intend to install the camera.",
  },
  {
    question: "Does the SIM card need data?",
    answer:
      "Yes. The SIM card must have an active data plan for the camera to connect to the internet and allow remote viewing through the V380 app. On average, the camera consumes approximately 1.5GB–2GB of data per month, depending on usage and how often you view live footage.",
  },
  {
    question: "Can I view the camera when I'm away from home?",
    answer:
      "Yes. Once your camera is connected to a 4G network and set up, you can open the V380 app on your smartphone to view your property remotely, from anywhere in the world.",
  },
  {
    question: "Does it work without NEPA?",
    answer:
      "Yes! Once the solar panel is mounted outside and connected to the camera, it helps keep the camera powered using sunlight. You won't need NEPA/PHCN or a generator to keep it running. Enjoy 24/7 security monitoring without worrying about power outages.",
  },
  {
    question: "Does the camera have night vision?",
    answer:
        "Yes! The camera features night vision and built-in lights to help you see what's happening around your property, even in darkness. You can monitor your surroundings clearly at night through the V380 app on your smartphone.",
    },
   {
    question: "Does the camera support SD card and cloud recording?",
    answer:
      "Yes. The camera supports both microSD card recording and cloud recording. You can save footage to a compatible memory card or subscribe to the cloud storage service. Cloud recording is a paid service, but it offers an efficient and convenient way to store and access your recordings online.",
  },
  {
    question: "Can I talk through the camera?",
    answer:
      "Yes. With its two-way audio feature, you can listen and speak through the camera using the V380 app on your smartphone.",
  },
  {
    question: "Is installation difficult?",
    answer:
      "Not at all! Mounting the camera on your wall is easy and straightforward. We'll also provide you with a step-by-step setup guide to help you connect the camera to your phone and get it working through the V380 app.",
  },
];

export default function CameraFAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <span className="mb-3 inline-block rounded-full bg-green-50 px-4 py-2 text-sm font-semibold text-green-700">
            Got Questions?
          </span>

          <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            Frequently Asked Questions
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-gray-600">
            Find answers to common questions about the V380 4G Solar Security
            Camera.For
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            const answerId = `camera-faq-answer-${index}`;

            return (
              <div
                key={faq.question}
                className={`overflow-hidden rounded-xl border transition-colors duration-200 ${
                  isOpen
                    ? "border-green-200 bg-green-50/40"
                    : "border-gray-200 bg-white"
                }`}
              >
                <button
                  type="button"
                  onClick={() =>
                    setActiveIndex(isOpen ? null : index)
                  }
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
                >
                  <span className="font-semibold text-gray-900">
                    {faq.question}
                  </span>

                  <ChevronDown
                    size={20}
                    className={`shrink-0 text-green-700 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  id={answerId}
                  className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-base leading-7 text-gray-700 sm:px-6">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-8 text-center text-sm text-gray-500">
          Still have questions? Feel free to contact us. We're happy to help.
        </p>
      </div>
    </section>
  );
}
