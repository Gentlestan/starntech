
import { useState, type FormEvent } from "react";
import {
  colar1000Packages,
  type Colar1000PackageId,
} from "../../../data/colar1000";

type PackageId = Colar1000PackageId;

type DeliveryState = "FCT" | "other";


export type Colar1000OrderData = {
  packageId: PackageId;
  customerName: string;
  customerPhone: string;
  deliveryState: string;
  deliveryCity: string;
  deliveryAddress: string;
  additionalNotes: string;
};
type Colar1000OrderFormProps = {
  initialPackage?: PackageId;
  isSubmitting?: boolean;
  onSubmit: (order: Colar1000OrderData) => void | Promise<void>;
};

const packages = colar1000Packages;

const states = [
  { label: "Abuja (FCT)", value: "FCT" },
  { label: "Abia", value: "Abia" },
  { label: "Adamawa", value: "Adamawa" },
  { label: "Akwa Ibom", value: "Akwa Ibom" },
  { label: "Anambra", value: "Anambra" },
  { label: "Bauchi", value: "Bauchi" },
  { label: "Bayelsa", value: "Bayelsa" },
  { label: "Benue", value: "Benue" },
  { label: "Borno", value: "Borno" },
  { label: "Cross River", value: "Cross River" },
  { label: "Delta", value: "Delta" },
  { label: "Ebonyi", value: "Ebonyi" },
  { label: "Edo", value: "Edo" },
  { label: "Ekiti", value: "Ekiti" },
  { label: "Enugu", value: "Enugu" },
  { label: "Gombe", value: "Gombe" },
  { label: "Imo", value: "Imo" },
  { label: "Jigawa", value: "Jigawa" },
  { label: "Kaduna", value: "Kaduna" },
  { label: "Kano", value: "Kano" },
  { label: "Katsina", value: "Katsina" },
  { label: "Kebbi", value: "Kebbi" },
  { label: "Kogi", value: "Kogi" },
  { label: "Kwara", value: "Kwara" },
  { label: "Lagos", value: "Lagos" },
  { label: "Nasarawa", value: "Nasarawa" },
  { label: "Niger", value: "Niger" },
  { label: "Ogun", value: "Ogun" },
  { label: "Ondo", value: "Ondo" },
  { label: "Osun", value: "Osun" },
  { label: "Oyo", value: "Oyo" },
  { label: "Plateau", value: "Plateau" },
  { label: "Rivers", value: "Rivers" },
  { label: "Sokoto", value: "Sokoto" },
  { label: "Taraba", value: "Taraba" },
  { label: "Yobe", value: "Yobe" },
  { label: "Zamfara", value: "Zamfara" },
];

export default function Colar1000OrderForm({
  initialPackage = "plus",
  isSubmitting = false,
  onSubmit,
}: Colar1000OrderFormProps) {
  const [packageId, setPackageId] = useState<PackageId>(initialPackage);

  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");

  const [deliveryState, setDeliveryState] = useState("");
  const [deliveryCity, setDeliveryCity] = useState("");
  const [deliveryAddress, setDeliveryAddress] = useState("");

  const [additionalNotes, setAdditionalNotes] = useState("");

  const selectedPackage = packages[packageId];

const isPayOnDeliveryAvailable =
deliveryState === "FCT" || deliveryState === "Lagos";

const canSubmit = Boolean(
  customerName.trim() &&
  customerPhone.trim() &&
  deliveryState &&
  deliveryCity.trim() &&
  deliveryAddress.trim()
);

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!canSubmit || isSubmitting) return;

    const order: Colar1000OrderData = {
      packageId,
      customerName,
      customerPhone,
      deliveryState,
      deliveryCity,
      deliveryAddress,
      additionalNotes,
    };

    await onSubmit(order);
  }

  const formatPrice = (amount: number) =>
    `₦${amount.toLocaleString("en-NG")}`;

  return (
    <section
      className="mt-12 rounded-3xl border border-gray-200 bg-white p-5 md:p-8 shadow-sm"
    >
      {/* FORM INTRODUCTION */}
      <div className="max-w-2xl mb-8">
        <p className="text-sm font-bold uppercase tracking-wider text-green-700">
          Christmas Power Bundle
        </p>

        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-950 mt-2">
          Secure Your Colar1000 Offer
        </h2>

        <p className="text-sm md:text-base text-gray-600 leading-7 mt-3">
          Choose your preferred power station, provide your delivery
          details and let our team help arrange your order.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* PACKAGE SELECTION */}
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-4">
            1. Choose Your Power Station
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {(Object.keys(packages) as PackageId[]).map((id) => {
              const item = packages[id];
              const selected = packageId === id;

              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => setPackageId(id)}
                  aria-pressed={selected}
                  className={`rounded-2xl border-2 p-4 text-left transition ${
                    selected
                      ? "border-green-700 bg-green-50 ring-2 ring-green-100"
                      : "border-gray-200 hover:border-green-400"
                  }`}
                >
                  <span className="block font-extrabold text-gray-900">
                    {item.name}
                  </span>

                  <span className="block text-sm text-gray-600 mt-1">
                    {item.output}
                  </span>

                  <span className="block text-xs text-gray-500 mt-3">
                    {item.quantity} unit{item.quantity > 1 ? "s" : ""}
                  </span>

                  <span className="block text-xs font-bold text-green-800 mt-2">
                    {item.freeGift}
                  </span>

                <span className="block text-lg font-extrabold text-green-800 mt-3">
                  {formatPrice(item.price)}
                </span>
                  {selected && (
                    <span className="inline-flex mt-3 rounded-full bg-green-700 px-3 py-1 text-xs font-bold text-white">
                      Selected
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* CUSTOMER DETAILS */}
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-4">
            2. Your Contact Details
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Your full name *
              </label>

              <input
                required
                value={customerName}
                onChange={(event) => setCustomerName(event.target.value)}
                placeholder="Enter your full name"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none focus:border-green-700 focus:ring-2 focus:ring-green-100"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Your phone number *
              </label>

              <input
                required
                type="tel"
                value={customerPhone}
                onChange={(event) => setCustomerPhone(event.target.value)}
                placeholder="e.g. 08012345678"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none focus:border-green-700 focus:ring-2 focus:ring-green-100"
              />
            </div>
          </div>

          <p className="text-xs text-gray-500 mt-3">
            We'll contact you to confirm your order and delivery arrangements.
          </p>
        </div>


        {/* DELIVERY LOCATION */}
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-4">
            4. Delivery Location
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Delivery state *
              </label>

              <select
                required
                value={deliveryState}
                onChange={(event) => setDeliveryState(event.target.value)}
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm bg-white outline-none focus:border-green-700"
              >
                <option value="">Select delivery state</option>

                {states.map((state) => (
                  <option key={state.value} value={state.value}>
                    {state.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                City or area *
              </label>

              <input
                required
                value={deliveryCity}
                onChange={(event) => setDeliveryCity(event.target.value)}
                placeholder="e.g. Gwarinpa, Abuja"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none focus:border-green-700"
              />
            </div>
          </div>

          <div className="mt-4">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Full delivery address *
            </label>

            <textarea
              required
              rows={3}
              value={deliveryAddress}
              onChange={(event) => setDeliveryAddress(event.target.value)}
              placeholder="House number, street, estate or landmark"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none focus:border-green-700"
            />
          </div>
        </div>

        {/* AUTOMATIC PAYMENT ARRANGEMENT */}
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-4">
            5. Your Payment Arrangement
          </h3>

          {!deliveryState ? (
            <div className="rounded-2xl bg-gray-50 border border-gray-200 p-5">
              <p className="text-sm text-gray-600">
                Select your delivery state above to see the payment
                arrangement available for your location.
              </p>
            </div>
          ) : isPayOnDeliveryAvailable ? (
            <div className="rounded-2xl border border-green-200 bg-green-50 p-5">
              <p className="text-xs uppercase font-bold tracking-wider text-green-800">
               Abuja & Lagos delivery
              </p>

              <h4 className="text-xl font-extrabold text-green-900 mt-2">
                Pay on Delivery
              </h4>

              <p className="text-sm text-green-800 leading-6 mt-2">
                Pay when your order arrives. Our team will confirm
                your delivery address and arrangements before processing
                your order.
              </p>
            </div>
          ) : (
            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <p className="text-xs uppercase font-bold tracking-wider text-amber-800">
                Nationwide delivery
              </p>

              <h4 className="text-xl font-extrabold text-amber-900 mt-2">
                 FULL PAYMENT REQUIRED BEFORE DELIVERY
              </h4>
              <p className="text-sm text-amber-900 leading-6 mt-2">
                Orders outside Abuja and Lagos require full payment
                before delivery. Our team will confirm your order
                and provide payment instructions.
              </p>

              <p className="text-sm font-extrabold text-red-700 mt-3">
                If you are ordering outside Abuja and are not comfortable
                making full payment before delivery, kindly do not place
                your order. Thank you for your understanding.
              </p>
            </div>
          )}
        </div>

        {/* ADDITIONAL NOTES */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Additional information (optional)
          </label>

          <textarea
            rows={3}
            value={additionalNotes}
            onChange={(event) => setAdditionalNotes(event.target.value)}
            placeholder="Anything else we should know about your order?"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none focus:border-green-700"
          />
        </div>

        {/* ORDER SUMMARY */}
        <div className="rounded-2xl bg-gray-50 border border-gray-200 p-5">
          <h3 className="font-extrabold text-gray-900">
            Your Order Summary
          </h3>

          <div className="flex justify-between gap-3 mt-4 text-sm">
            <span className="text-gray-600">
              {selectedPackage.name} ({selectedPackage.output})
              {" × "}
              {selectedPackage.quantity}
            </span>

            <span className="font-semibold text-gray-900">
              {formatPrice(selectedPackage.price)}
            </span>
          </div>

          <div className="flex justify-between gap-3 mt-3 text-sm">
            <span className="text-gray-600">Christmas gift</span>

            <span className="font-bold text-green-700 text-right">
              {selectedPackage.freeGift}
            </span>
          </div>

          <div className="border-t border-gray-200 mt-4 pt-4 flex justify-between gap-3">
            <span className="font-bold text-gray-900">
              Total selling price
            </span>

            <span className="text-lg font-extrabold text-green-800">
              {formatPrice(selectedPackage.price)}
            </span>
          </div>
        </div>

       {/* SUBMIT */}
      <button
        type="submit"
        disabled={!canSubmit || isSubmitting}
        className="w-full rounded-xl bg-green-700 px-6 py-4 text-white font-extrabold text-base shadow-lg shadow-green-700/20 hover:bg-green-800 transition disabled:cursor-not-allowed disabled:bg-gray-400 disabled:shadow-none"
      >
        {isSubmitting ? "Submitting Order..." : "Submit Christmas Order"}
      </button>

       {!canSubmit && (
        <p className="text-xs text-center text-amber-700">
          Please complete all required fields to submit your order.
        </p>
      )}

        <p className="text-xs text-gray-500 text-center leading-5">
          Submitting an order request does not mean payment has been collected.
          Our team will contact you to confirm the details.
        </p>
      </form>
    </section>
  );
}
