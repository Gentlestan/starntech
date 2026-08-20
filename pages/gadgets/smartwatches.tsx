import Link from "next/link";
import Image from "next/image";
import { gadgets } from "@/data/gadgets";

export default function SmartwatchesPage() {
  const smartwatches = gadgets.filter(
    (item) => item.category === "Smartwatches" && item.available
  );

  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8">Smartwatches</h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {smartwatches.map((watch) => (
          <Link
            key={watch.slug}
            href={`/gadgets/${watch.slug}`}
            className="bg-white rounded-2xl border p-4 hover:shadow-lg transition"
          >
            <div className="relative aspect-square">
              <Image
                src={watch.images[0]}
                alt={watch.name}
                fill
                className="object-contain"
              />
            </div>

            <h2 className="font-semibold mt-4">{watch.name}</h2>
            <p className="text-green-700 font-bold mt-2">
              ₦{watch.price.toLocaleString()}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}