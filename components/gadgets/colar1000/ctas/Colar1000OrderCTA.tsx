import { colar1000Packages } from "../../../../data/colar1000";
import type { Colar1000Model } from "../types";

type Colar1000OrderCTAProps = {
  model: Colar1000Model;
  variant?: "mid" | "final";
};

export default function Colar1000OrderCTA({
  model,
  variant = "mid",
}: Colar1000OrderCTAProps) {
  const packageDetails = colar1000Packages[model.id];

  if (variant === "final") {
    return (
      <section className="bg-green-50 py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-5">
          <div className="rounded-3xl bg-white border-2 border-green-200 p-7 md:p-12 text-center shadow-sm">
            <p className="text-sm font-extrabold uppercase tracking-widest text-green-700">
              Ready to Order?
            </p>

            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-950 mt-5">
              Get Your {model.name} Today
            </h2>

            <p className="text-lg text-gray-600 leading-8 mt-5 max-w-2xl mx-auto">
              Purchase {model.offer.toLowerCase()} and enjoy
              reliable backup power, plus a FREE 18-inch Colar
              Solar Fan included with your package.
            </p>

            <div className="bg-green-50 rounded-2xl p-6 mt-8 max-w-xl mx-auto">
              <p className="text-sm font-bold uppercase text-green-800">
                Your package includes
              </p>

              <p className="text-xl md:text-2xl font-extrabold text-green-900 mt-2">
                {model.offer}
              </p>

              <p className="text-base font-bold text-gray-900 mt-3">
                + 1 FREE 18-inch Colar Solar Fan
              </p>
            </div>

            <a
              href="#colar1000-order"
              className="inline-block w-full sm:w-auto rounded-xl bg-green-700 hover:bg-green-800 text-white font-extrabold text-center px-10 py-4 mt-8 transition"
            >
              Order Now
            </a>

            <p className="text-sm text-gray-500 mt-5 leading-6">
              Abuja (FCT): Pay on Delivery in covered areas, subject to
              address confirmation. Outside Abuja: advance payment is
              required before dispatch.
            </p>

            <p className="text-xs text-gray-500 mt-3">
              Transportation cost is separate.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-green-950 py-12 md:py-16">
      <div className="max-w-5xl mx-auto px-5 text-center">
        <p className="text-sm font-bold uppercase tracking-widest text-green-300">
          Ready for Reliable Backup Power?
        </p>

        <h2 className="text-2xl md:text-3xl font-extrabold text-white mt-3">
          Get Your {model.name} Today
        </h2>

        <p className="text-green-100 leading-7 mt-4 max-w-2xl mx-auto">
          Get {model.offer.toLowerCase()} with a FREE 18-inch
          Colar Solar Fan included.
        </p>

        <p className="text-3xl font-extrabold text-white mt-5">
          ₦{packageDetails.price.toLocaleString("en-NG")}
        </p>

        <a
          href="#colar1000-order"
          className="inline-block rounded-xl bg-green-500 hover:bg-green-400 text-white font-extrabold px-10 py-4 mt-6 transition"
        >
          Order Now
        </a>

        <p className="text-xs text-green-200 mt-4">
          Transportation cost is separate.
        </p>
      </div>
    </section>
  );
}