import { colar1000Packages } from "../../../../data/colar1000";
import type { Colar1000Model } from "../types";

type Colar1000HeroCTAProps = {
  model: Colar1000Model;
};

export default function Colar1000HeroCTA({
  model,
}: Colar1000HeroCTAProps) {
  const packageDetails = colar1000Packages[model.id];

  return (
    <div className="max-w-xl mx-auto mt-9 rounded-3xl bg-white p-6 md:p-8 text-gray-950 shadow-2xl">
      <p className="text-sm font-extrabold uppercase tracking-wider text-green-700">
        Your Christmas Gift Offer
      </p>

      <h2 className="text-2xl md:text-3xl font-extrabold mt-3">
        {model.offer}
      </h2>

      <p className="text-sm font-semibold text-gray-500 mt-5">
        Package Price
      </p>

      <p className="text-4xl md:text-5xl font-extrabold text-green-800 mt-1">
        ₦{packageDetails.price.toLocaleString("en-NG")}
      </p>

      <p className="text-sm text-gray-600 mt-2">
        {packageDetails.quantity}{" "}
        {packageDetails.quantity === 1 ? "unit" : "units"} included
      </p>

      <div className="flex items-center gap-4 mt-6 rounded-2xl bg-green-50 p-4 text-left">
        <img
          src="/images/colarhome-ch-sf04-18-inch-1.png"
          alt="Free 18-inch Colar Solar Fan"
          className="w-28 h-28 object-contain rounded-xl bg-white"
        />

        <div>
          <p className="text-xs font-extrabold uppercase tracking-wide text-green-700">
            FREE GIFT INCLUDED
          </p>

          <p className="text-base font-extrabold text-gray-900 mt-1">
            1 × 18-inch Colar Solar Fan
          </p>

          <p className="text-sm text-gray-600 mt-1">
            Included with this package at no extra cost.
          </p>
        </div>
      </div>

      <p className="text-xs text-gray-500 mt-4">
        Transportation cost is separate.
      </p>

      <a
        href="#colar1000-order"
        className="block w-full rounded-xl bg-green-700 hover:bg-green-800 text-white font-extrabold text-center px-6 py-4 mt-7 transition"
      >
        Order Now
      </a>
    </div>
  );
}