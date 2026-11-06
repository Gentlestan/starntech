
import Link from "next/link";
import Image from "next/image";
import { gadgets } from "@/data/gadgets";

export default function SolarFanSection() {
  const fan = gadgets.find(
    (item) => item.slug === "colarhome-solar-rechargeable-fan"
  );

  return (
    <section
      id="solar-fans"
      className="w-full py-10 sm:py-14"
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Section heading */}
        <div className="mb-7 sm:mb-9">
          <p className="text-sm font-semibold uppercase tracking-wider text-green-700 mb-2">
            Cooling & Backup Power
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Solar Rechargeable Fans
          </h2>

          <p className="text-gray-600 mt-2 text-sm sm:text-base max-w-2xl">
            Stay comfortable during power interruptions with rechargeable
            solar fans suitable for homes, shops and small businesses.
          </p>
        </div>

        {/* Fan product */}
        {fan ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {(() => {
              const firstMedia = fan.media?.[0];

              const imageSrc =
                firstMedia?.type === "video"
                  ? firstMedia.thumbnail
                  : firstMedia?.src;

              return (
                <Link
                  href={`/gadgets/${fan.slug}`}
                  className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition duration-300"
                >
                  {/* Product image */}
                  <div className="relative aspect-square bg-gray-50">
                    {imageSrc ? (
                      <Image
                        src={imageSrc}
                        alt={fan.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-contain p-3 group-hover:scale-105 transition duration-300"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-sm">
                        Product image coming soon
                      </div>
                    )}

                    {firstMedia?.type === "video" && (
                      <span className="absolute bottom-3 right-3 bg-black/75 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                        ▶ VIDEO
                      </span>
                    )}

                    <span className="absolute top-3 left-3 bg-green-700 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                      16-inch & 18-inch
                    </span>
                  </div>

                  {/* Product information */}
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 text-base sm:text-lg leading-snug">
                      {fan.name}
                    </h3>

                    <p className="text-green-700 font-bold text-lg mt-2">
                      From ₦{fan.price.toLocaleString("en-NG")}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-3">
                      {fan.variants?.map((variant) => (
                        <span
                          key={variant.name}
                          className="text-xs font-medium bg-gray-100 text-gray-700 px-3 py-2 rounded-lg"
                        >
                          {variant.name}: ₦
                          {variant.price.toLocaleString("en-NG")}
                        </span>
                      ))}
                    </div>

                    {fan.freeDelivery && (
                      <p className="text-sm text-gray-600 mt-3">
                        Free Nationwide Delivery
                      </p>
                    )}

                    <span className="inline-flex items-center justify-center mt-4 w-full rounded-lg bg-green-700 text-white font-semibold text-sm py-3 group-hover:bg-green-800 transition">
                      View Product
                    </span>
                  </div>
                </Link>
              );
            })()}
          </div>
        ) : (
          <p className="text-gray-500 text-sm">
            Solar rechargeable fans will be available here soon.
          </p>
        )}
      </div>
    </section>
  );
}
