
import Link from "next/link";
import { useRouter } from "next/router";

export default function ThankYouPage() {
const router = useRouter();
const isColar1000 = router.query.product === "colar1000";

const productName = isColar1000
  ? "Colar1000 Solar Power Station"
  : "V380 Max 4G Solar Security Camera";

const orderLink = isColar1000
  ? "/gadgets/solar-solutions/colar1000"
  : "/gadgets/v380-solar-camera";

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-2xl bg-white border border-gray-100 rounded-2xl shadow-sm p-7 md:p-10 text-center">
        <div className="w-16 h-16 mx-auto rounded-full bg-green-100 flex items-center justify-center text-3xl mb-5">
          ✓
        </div>

        <p className="text-green-700 font-semibold text-sm">
          Order Request Received
        </p>

        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2">
          Thank You for Your Order!
        </h1>

       <p className="text-gray-700 mt-4 leading-7 max-w-lg mx-auto">
        Your request for <strong>{productName}</strong> has been received.
        We will contact you shortly to confirm your order and delivery details before dispatch.
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
            <span>
              {isColar1000
                ? "We confirm your payment and delivery arrangement based on your location."
                : "You pay when your order is delivered."}
            </span>
          </div>
          </div>
        </div>

        <Link
        href={orderLink}
        className="inline-block mt-7 text-green-700 font-medium text-sm hover:underline"
      >
        Place another order
      </Link>
      </div>
    </main>
  );
}
