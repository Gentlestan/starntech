
import Image from "next/image";
import Link from "next/link";
import { gadgets } from "@/data/gadgets";

const solarProducts = gadgets.filter(
  (item) =>
    (item.category === "Solar Cameras" ||
      item.category === "Solar Products") &&
    item.available
);

export default function SolarProductsGrid() {
  return (
    <section className="w-full">
      <div className="max-w-7xl mx-auto px-4 py-10 sm:py-14">
        {/* Single page heading */}
        <div className="mb-8 sm:mb-10">
          <p className="text-green-700 font-semibold text-sm uppercase tracking-wider mb-2">
            StarnTech Engineering
          </p>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
            Solar Solutions
          </h2>

          <p className="text-gray-600 mt-3 max-w-2xl text-sm sm:text-base leading-relaxed">
            Discover reliable solar-powered security and rechargeable
            products for your home and business.
          </p>
        </div>

        {/* Unified product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7">
          {solarProducts.map((product) => {
            const firstMedia = product.media?.[0];

            const imageSrc =
              firstMedia?.type === "video"
                ? firstMedia.thumbnail
                : firstMedia?.src;

            const isVideo = firstMedia?.type === "video";

            return (
              <article
                key={product.slug}
                className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Product image */}
                <Link
                  href={`/gadgets/${product.slug}`}
                  className="block relative aspect-[4/3] bg-gray-100 overflow-hidden"
                >
                  {imageSrc ? (
                    <Image
                      src={imageSrc}
                      alt={product.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                      Image coming soon
                    </div>
                  )}

                  {isVideo && (
                    <span className="absolute top-3 left-3 bg-black/75 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      VIDEO
                    </span>
                  )}

                  {product.freeDelivery && (
                    <span className="absolute bottom-3 left-3 bg-green-700 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      Free Delivery
                    </span>
                  )}
                </Link>

                {/* Product details */}
                <div className="p-4 sm:p-5">
                  <h3 className="font-semibold text-gray-900 text-base sm:text-lg leading-snug">
                    <Link
                      href={`/gadgets/${product.slug}`}
                      className="hover:text-green-700 transition-colors"
                    >
                      {product.name}
                    </Link>
                  </h3>

                  <div className="mt-3 flex items-center gap-2 flex-wrap">
                    <span className="text-xl font-bold text-gray-900">
                      ₦{product.price.toLocaleString("en-NG")}
                    </span>

                    {product.comparePrice &&
                      product.comparePrice > product.price && (
                        <span className="text-sm text-gray-400 line-through">
                          ₦{product.comparePrice.toLocaleString("en-NG")}
                        </span>
                      )}
                  </div>

                  {/* Product variants, where available */}
                  {product.variants && product.variants.length > 0 && (
                    <div className="mt-3 border-t border-gray-100 pt-3">
                      <p className="text-xs font-semibold text-gray-500 mb-2">
                        AVAILABLE OPTIONS
                      </p>

                      <div className="space-y-1">
                        {product.variants.map((variant, index) => (
                          <div
                            key={`${product.slug}-${index}`}
                            className="flex justify-between gap-3 text-sm"
                          >
                            <span className="text-gray-600">
                              {variant.name || variant.model}
                            </span>
                            <span className="font-medium text-gray-800 whitespace-nowrap">
                              ₦{variant.price.toLocaleString("en-NG")}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <Link
                    href={`/gadgets/${product.slug}`}
                    className="mt-5 block w-full rounded-lg bg-green-700 hover:bg-green-800 text-white text-center font-semibold py-3 px-4 transition-colors"
                  >
                    View Product
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
