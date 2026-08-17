import { FormEvent, useState } from "react";

type GadgetOrderFormProps = {
  productName: string;
};

export default function GadgetOrderForm({
  productName,
}: GadgetOrderFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setLoading(true);

    const form = event.currentTarget;
    const formData = new FormData(form);

    const order = {
      product: productName,
      name: formData.get("name"),
      phone: formData.get("phone"),
      whatsapp: formData.get("whatsapp"),
      state: formData.get("state"),
      city: formData.get("city"),
      address: formData.get("address"),
      quantity: formData.get("quantity"),
      note: formData.get("note"),
    };

    console.log("Gadget order:", order);

    /*
      We will connect this to the actual lead destination later.

      For example:
      - Google Sheets
      - Email notification
      - WhatsApp
      - Form backend

      For now, we're only testing the form UI.
    */

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      form.reset();
    }, 700);
  };

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-100 rounded-2xl p-7 md:p-10 text-center">
        <div className="text-4xl mb-4">✅</div>

        <h3 className="text-2xl font-bold text-gray-900">
          Order Request Received
        </h3>

        <p className="text-gray-700 mt-3 leading-7 max-w-lg mx-auto">
          Thank you for your order request. We will contact you shortly to
          confirm your order, delivery location and payment-on-delivery
          details before dispatch.
        </p>

        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-6 text-green-700 font-medium text-sm hover:underline"
        >
          Place another order
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6 md:p-8">
      {/* HEADER */}
      <div className="mb-7">
        <p className="text-green-700 font-semibold text-sm">
          Order Request
        </p>

        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2">
          Order {productName}
        </h3>

        <p className="text-gray-600 mt-3 text-sm md:text-base leading-6">
          Fill in your details below. We will call you to confirm your order
          before dispatch.
        </p>
      </div>

      {/* PAYMENT NOTICE */}
      <div className="bg-green-50 border border-green-100 rounded-xl p-4 mb-7">
        <div className="flex items-start gap-3">
          <span className="text-lg">💳</span>

          <div>
            <p className="font-semibold text-green-900 text-sm">
              Payment on Delivery
            </p>

            <p className="text-green-800 text-xs md:text-sm mt-1 leading-5">
              No online payment is required. We will confirm your order and
              delivery details by phone before dispatch.
            </p>
          </div>
        </div>
      </div>

      {/* FORM */}
      <form onSubmit={handleSubmit} className="space-y-5">

        {/* NAME */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-800 mb-2"
          >
            Full Name *
          </label>

          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Enter your full name"
            className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
          />
        </div>

        {/* PHONE */}
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-800 mb-2"
          >
            Phone Number *
          </label>

          <input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="08012345678"
            className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
          />
        </div>

        {/* WHATSAPP */}
        <div>
          <label
            htmlFor="whatsapp"
            className="block text-sm font-medium text-gray-800 mb-2"
          >
            WhatsApp Number
            <span className="text-gray-400 font-normal ml-1">
              (Optional)
            </span>
          </label>

          <input
            id="whatsapp"
            name="whatsapp"
            type="tel"
            placeholder="If different from your phone number"
            className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
          />
        </div>

        {/* LOCATION */}
        <div className="grid sm:grid-cols-2 gap-5">

          {/* STATE */}
          <div>
            <label
              htmlFor="state"
              className="block text-sm font-medium text-gray-800 mb-2"
            >
              State *
            </label>

            <input
              id="state"
              name="state"
              type="text"
              required
              placeholder="e.g. Abuja"
              className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
            />
          </div>

          {/* CITY */}
          <div>
            <label
              htmlFor="city"
              className="block text-sm font-medium text-gray-800 mb-2"
            >
              City / Town *
            </label>

            <input
              id="city"
              name="city"
              type="text"
              required
              placeholder="e.g. Gwarinpa"
              className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
            />
          </div>

        </div>

        {/* ADDRESS */}
        <div>
          <label
            htmlFor="address"
            className="block text-sm font-medium text-gray-800 mb-2"
          >
            Delivery Address *
          </label>

          <textarea
            id="address"
            name="address"
            required
            rows={3}
            placeholder="Enter your delivery address"
            className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none resize-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
          />
        </div>

        {/* QUANTITY */}
        <div>
          <label
            htmlFor="quantity"
            className="block text-sm font-medium text-gray-800 mb-2"
          >
            Quantity *
          </label>

          <select
            id="quantity"
            name="quantity"
            required
            defaultValue="1"
            className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm bg-white outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>

        {/* NOTE */}
        <div>
          <label
            htmlFor="note"
            className="block text-sm font-medium text-gray-800 mb-2"
          >
            Additional Note
            <span className="text-gray-400 font-normal ml-1">
              (Optional)
            </span>
          </label>

          <textarea
            id="note"
            name="note"
            rows={3}
            placeholder="Any question or special delivery instruction?"
            className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none resize-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
          />
        </div>

        {/* SUBMIT */}
        <button
          type="submit"
          disabled={loading}
          className="w-full inline-flex items-center justify-center px-6 py-4 rounded-xl bg-green-700 text-white font-semibold text-sm hover:bg-green-800 disabled:opacity-60 disabled:cursor-not-allowed transition"
        >
          {loading ? "Submitting Order..." : "Submit Order Request →"}
        </button>

        <p className="text-xs text-gray-500 text-center leading-5">
          By submitting this form, you are requesting an order. We will
          contact you to confirm the order before dispatch.
        </p>

      </form>
    </div>
  );
}