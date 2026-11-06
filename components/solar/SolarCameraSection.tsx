
import Link from "next/link";
import Image from "next/image";
import { gadgets } from "@/data/gadgets";

export default function SolarCameraSection() {
  const cameras = gadgets.filter(
    (item) => item.category === "Solar Cameras" && item.available
  );

  return (
    <section
      id="solar-cameras"
      className="w-full py-10 sm:py-14"
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Section heading */}
        <div className="mb-7 sm:mb-9">
          <p className="text-sm font-semibold uppercase tracking-wider text-green-700 mb-2">
            Security & Protection
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Solar Security Cameras
          </h2>

          <p className="text-gray-600 mt-2 text-sm sm:text-base max-w-2xl">
            Keep an eye on your property with solar-powered security cameras
            designed for convenient remote monitoring.
          </p>
        </div>

        {/* Camera products */}
        {cameras.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {cameras.map((camera) => {
              const firstMedia = camera.media?.[0];

              const imageSrc =
                firstMedia?.type === "video"
                  ? firstMedia.thumbnail
                  : firstMedia?.src;

              return (
                <Link
                  key={camera.slug}
                  href={`/gadgets/${camera.slug}`}
                  className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition duration-300"
                >
                  {/* Product image */}
                  <div className="relative aspect-square bg-gray-50">
                    {imageSrc ? (
                      <Image
                        src={imageSrc}
                        alt={camera.name}
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
                  </div>

                  {/* Product information */}
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 text-base sm:text-lg leading-snug">
                      {camera.name}
                    </h3>

                    <p className="text-green-700 font-bold text-lg mt-2">
                      ₦{camera.price.toLocaleString("en-NG")}
                    </p>

                    {camera.freeDelivery && (
                      <p className="text-sm text-gray-600 mt-1">
                        Free Nationwide Delivery
                      </p>
                    )}

                    <span className="inline-flex items-center justify-center mt-4 w-full rounded-lg bg-green-700 text-white font-semibold text-sm py-3 group-hover:bg-green-800 transition">
                      View Product
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        ) : (
          <p className="text-gray-500 text-sm">
            Solar security cameras will be available here soon.
          </p>
        )}
      </div>
    </section>
  );
}
