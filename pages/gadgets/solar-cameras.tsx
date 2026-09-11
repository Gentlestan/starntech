import Link from "next/link";
import Image from "next/image";
import { gadgets } from "@/data/gadgets";

export default function SolarCamerasPage() {
  const cameras = gadgets.filter(
    (item) => item.category === "Solar Cameras" && item.available
  );

  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8">Solar Security Cameras</h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
              className="bg-white rounded-2xl border p-4 hover:shadow-lg transition"
            >
              <div className="relative aspect-square">
                {imageSrc ? (
                  <Image
                    src={imageSrc}
                    alt={camera.name}
                    fill
                    className="object-contain"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-sm">
                    Product image coming soon
                  </div>
                )}

                {firstMedia?.type === "video" && (
                  <div className="absolute bottom-3 right-3">
                    <span className="bg-black/70 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                      ▶ VIDEO
                    </span>
                  </div>
                )}
              </div>

              <h2 className="font-semibold mt-4">{camera.name}</h2>

              <p className="text-green-700 font-bold mt-2">
                ₦{camera.price.toLocaleString()}
              </p>

              {camera.freeDelivery && (
                <p className="text-sm text-gray-600 mt-1">
                  Free Nationwide Delivery
                </p>
              )}
            </Link>
          );
        })}
      </div>
    </section>
  );
}