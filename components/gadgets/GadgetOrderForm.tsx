
import { FormEvent, useState } from "react";

type GadgetOrderFormProps = {
  productName: string;
  price: number;
};

export default function GadgetOrderForm({
  productName,
  price,
}: GadgetOrderFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const total = price * quantity;

  const formatPrice = (value: number) => {
    return `₦${value.toLocaleString("en-NG")}`;
  };

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

    try {
      const response = await fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(order),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.message || "Something went wrong. Please try again."
        );
      }

      setSubmitted(true);
      form.reset();
      setQuantity(1);
    } catch (error) {
      console.error("Order submission error:", error);

      alert(
        error instanceof Error
          ? error.message
          : "Unable to submit your order. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-100 rounded-2xl p-7 md:p-10 text-center">
        <div className="w-16 h-16 mx-auto rounded-full bg-green-100 flex items-center justify-center text-3xl mb-5">
          ✓
        </div>

        <p className="text-green-700 font-semibold text-sm">
          Order Request Received
        </p>

        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2">
          Thank You for Your Order!
        </h3>

        <p className="text-gray-700 mt-4 leading-7 max-w-lg mx-auto">
          Your request for <strong>{productName}</strong> has been received.
          We will contact you shortly to confirm your order and delivery
          details before dispatch.
        </p>

        <div className="max-w-md mx-auto mt-7 bg-white border border-green-100 rounded-xl p-5 text-left">
          <p className="font-semibold text-gray-900 mb-4">
            What happens next?
          </p>

          <div className="space-y-3 text-sm text-gray-600">
            <div className="flex gap-3">
              <span className="text-green-700 font-bold">1.</span>
              <span>We contact you to confirm your order.</span>
            </div>

            <div className="flex gap-3">
              <span className="text-green-700 font-bold">2.</span>
              <span>We confirm your delivery location and details.</span>
            </div>

            <div className="flex gap-3">
              <span className="text-green-700 font-bold">3.</span>
              <span>Your order is prepared and dispatched.</span>
            </div>

            <div className="flex gap-3">
              <span className="text-green-700 font-bold">4.</span>
              <span>You pay when your order is delivered.</span>
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-7 text-green-700 font-medium text-sm hover:underline"
        >
          Place another order
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6 md:p-8">
      <div className="mb-7">
        <p className="text-green-700 font-semibold text-sm">
          Quick Order
        </p>

        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2">
          Order {productName}
        </h3>

        <p className="text-gray-600 mt-3 text-sm md:text-base leading-6">
          Fill in your details below. We will contact you to confirm your
          order before dispatch.
        </p>
      </div>

      {/* Order Summary */}
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-7">
        <div className="flex justify-between items-start gap-4">
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wide">
              Product
            </p>

            <p className="font-semibold text-gray-900 mt-1">
              {productName}
            </p>
          </div>

          <p className="font-semibold text-gray-900">
            {formatPrice(price)}
          </p>
        </div>

        <div className="border-t border-gray-200 my-4" />

        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">
            Quantity
          </span>

          <span className="font-medium text-gray-900">
            × {quantity}
          </span>
        </div>

        <div className="flex justify-between items-center mt-3">
          <span className="font-semibold text-gray-900">
            Total
          </span>

          <span className="text-xl font-bold text-green-700">
            {formatPrice(total)}
          </span>
        </div>

        <div className="mt-4 space-y-2 text-sm">
          <div className="flex items-center gap-2 text-gray-600">
            <span>🚚</span>
            <span>Free nationwide delivery</span>
          </div>

          <div className="flex items-center gap-2 text-gray-600">
            <span>💳</span>
            <span>Pay on delivery</span>
          </div>
        </div>
      </div>

      {/* Payment Notice */}
      <div className="bg-green-50 border border-green-100 rounded-xl p-4 mb-7">
        <div className="flex items-start gap-3">
          <span className="text-lg">💳</span>

          <div>
            <p className="font-semibold text-green-900 text-sm">
              No Payment Required Now
            </p>

            <p className="text-green-800 text-xs md:text-sm mt-1 leading-5">
              Simply submit your order request. We will contact you to confirm
              your order and delivery details before dispatch. You pay when
              your order is delivered.
            </p>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name */}
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
            autoComplete="name"
            placeholder="Enter your full name"
            className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
          />
        </div>

        {/* Phone */}
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
            autoComplete="tel"
            inputMode="tel"
            placeholder="08012345678"
            className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
          />

          <p className="text-xs text-gray-500 mt-1.5">
            We will call this number to confirm your order.
          </p>
        </div>

        {/* WhatsApp */}
        <div>
          <label
            htmlFor="whatsapp"
            className="block text-sm font-medium text-gray-800 mb-2"
          >
            WhatsApp Number{" "}
            <span className="text-gray-400 font-normal">
              (Optional)
            </span>
          </label>

          <input
            id="whatsapp"
            name="whatsapp"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            placeholder="If different from your phone number"
            className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
          />

          <p className="text-xs text-gray-500 mt-1.5">
            Leave blank if your phone number is also your WhatsApp number.
          </p>
        </div>

        {/* Location */}
        <div className="grid sm:grid-cols-2 gap-5">
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
              autoComplete="address-level1"
              placeholder="e.g. FCT Abuja"
              className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
            />
          </div>

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
              autoComplete="address-level2"
              placeholder="e.g. Gwarinpa"
              className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
            />
          </div>
        </div>

        {/* Address */}
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
            autoComplete="street-address"
            placeholder="House number, street name, estate, landmark..."
            className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none resize-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
          />

          <p className="text-xs text-gray-500 mt-1.5">
            Please provide enough details to help the delivery agent locate
            you easily.
          </p>
        </div>

        {/* Quantity */}
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
            value={quantity}
            onChange={(event) => setQuantity(Number(event.target.value))}
            className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm bg-white outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
        </div>

        {/* Note */}
        <div>
          <label
            htmlFor="note"
            className="block text-sm font-medium text-gray-800 mb-2"
          >
            Additional Note{" "}
            <span className="text-gray-400 font-normal">
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

        {/* Final Total */}
        <div className="bg-gray-50 rounded-xl p-4">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">
              Order Total
            </span>

            <span className="text-xl font-bold text-gray-900">
              {formatPrice(total)}
            </span>
          </div>

          <p className="text-xs text-gray-500 mt-1">
            Free delivery • Pay on delivery
          </p>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full inline-flex items-center justify-center px-6 py-4 rounded-xl bg-green-700 text-white font-semibold text-sm hover:bg-green-800 disabled:opacity-60 disabled:cursor-not-allowed transition"
        >
          {loading ? (
            <>
              <span className="mr-2 h-4 w-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
              Submitting Order...
            </>
          ) : (
            "Place Order Request →"
          )}
        </button>

        <p className="text-xs text-gray-500 text-center leading-5">
          No payment is required at this stage. We will contact you to
          confirm your order before dispatch.
        </p>
      </form>
    </div>
  );
}

