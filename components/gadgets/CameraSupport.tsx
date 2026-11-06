
import {
  ShieldCheck,
  ClipboardCheck,
  Headset,
} from "lucide-react";

const assurances = [
  {
    icon: ClipboardCheck,
    title: "Tested Before Dispatch",
    description:
      "Every product is carefully checked and tested before dispatch to ensure it is working properly. We take quality seriously because we want you to receive a product you can confidently use.",
  },
  {
    icon: ShieldCheck,
    title: "Setup Guidance Included",
    description:
      "You won't be left wondering how to get started. We'll provide a step-by-step setup guide to help you install your camera, connect it to your phone and get it working.",
  },
  {
  icon: Headset,
  title: "Dedicated Technical Support",
  description:
 "Experiencing any issues with your camera after purchase? Reach out to us through our dedicated WhatsApp support line or email, and one of our technical engineers will get back to you to provide the assistance you need.",
},
];

export default function CameraSupport() {
  return (
    <section className="bg-gray-50 py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="mb-3 inline-block rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
            Your Satisfaction Matters
          </span>

          <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            Buy with Confidence. We've Got You Covered.
          </h2>

          <p className="mt-4 text-base leading-7 text-gray-600">
            We want you to enjoy a smooth buying experience, from the moment
            you place your order to the day your camera is up and running.
            That's why we take extra care before and after every purchase.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
          {assurances.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-green-50">
                  <Icon
                    size={25}
                    className="text-green-700"
                  />
                </div>

                <h3 className="text-lg font-bold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-base leading-7 text-gray-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-10 rounded-2xl border border-green-100 bg-green-50 p-6 text-center md:p-8">
          <h3 className="text-xl font-bold text-gray-900">
            Your Order Deserves Our Attention.
          </h3>

          <p className="mx-auto mt-2 max-w-2xl text-base leading-7 text-gray-700">
            From pre-dispatch testing to setup assistance, we're committed
            to making sure you have a smooth experience with your purchase.
          </p>
        </div>
      </div>
      
<div className="mt-10 rounded-2xl border border-gray-200 bg-white px-6 py-7 text-center md:px-10">
  <h3 className="text-lg font-bold text-gray-900">
    Need a Bigger Security Solution?
  </h3>

  <p className="mx-auto mt-2 max-w-2xl text-base leading-7 text-gray-600">
    Beyond security cameras, we also provide professional CCTV
    installation, solar installation and fire alarm systems to help
    protect and power your home or business.
  </p>

  <p className="mt-4 text-sm text-gray-700">
    For enquiries, contact us at{" "}
    <a
      href="mailto:sohazulike@gmail.com"
      className="font-semibold text-green-700 underline underline-offset-4 transition-colors hover:text-green-800"
    >
      sohazulike@gmail.com
    </a>
  </p>
</div>

    </section>
  );
}
