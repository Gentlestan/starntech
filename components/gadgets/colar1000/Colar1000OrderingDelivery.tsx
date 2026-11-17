
export default function Colar1000OrderingDelivery() {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-5">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-sm font-bold uppercase tracking-wider text-green-700">
            Simple and Straightforward
          </p>

          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-950 mt-3">
            How to Order, Pay and Receive Your Colar1000
          </h2>

          <p className="text-gray-600 leading-7 mt-4">
            Getting your Colar1000 power station from Starntech
            is straightforward. Here is what to expect when you order.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl bg-white border border-gray-200 p-6">
            <div className="text-3xl">🛒</div>
            <h3 className="text-lg font-extrabold text-gray-950 mt-4">
              1. Choose Your Package
            </h3>
            <p className="text-sm text-gray-600 leading-7 mt-3">
              Select the Colar1000 Neo, Pro or Plus package
              that suits your power needs. Submit your order
              through the order form on this page.
            </p>
          </div>

          <div className="rounded-2xl bg-white border border-gray-200 p-6">
            <div className="text-3xl">📞</div>
            <h3 className="text-lg font-extrabold text-gray-950 mt-4">
              2. Confirm Your Order
            </h3>
            <p className="text-sm text-gray-600 leading-7 mt-3">
              Our team will contact you to confirm your
              selected package, delivery address and
              applicable payment arrangements.
            </p>
          </div>

          <div className="rounded-2xl bg-white border border-gray-200 p-6">
            <div className="text-3xl">🚚</div>
            <h3 className="text-lg font-extrabold text-gray-950 mt-4">
              3. Receive Your Package
            </h3>
            <p className="text-sm text-gray-600 leading-7 mt-3">
              Once your order and delivery arrangements are
              confirmed, we arrange dispatch to your location.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="rounded-2xl border border-green-200 bg-green-50 p-6">
            <h3 className="text-lg font-extrabold text-gray-950">
              Abuja (FCT) Customers
            </h3>
            <p className="text-sm text-gray-700 leading-7 mt-3">
              Pay on delivery is available in covered areas,
              subject to confirmation of your delivery address.
            </p>
          </div>

          <div className="rounded-2xl border border-blue-200 bg-blue-50 p-6">
            <h3 className="text-lg font-extrabold text-gray-950">
              Customers Outside Abuja
            </h3>
            <p className="text-sm text-gray-700 leading-7 mt-3">
              Full payment is required before dispatch
              for orders outside Abuja.
            </p>
          </div>
        </div>

        <p className="text-center text-sm text-gray-500 mt-8">
          Transportation costs are paid separately by the customer.
        </p>
      </div>
    </section>
  );
}
