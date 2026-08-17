import Image from "next/image";
import Link from "next/link";

type Gadget = {
  slug: string;
  name: string;
  category: string;
  price: number;
  shortDescription: string;
  images: string[];
};

type GadgetCardProps = {
  gadget: Gadget;
  priority?: boolean;
};

export default function GadgetCard({
  gadget,
  priority = false,
}: GadgetCardProps) {
  return (
    <article className="group bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300">
      {/* IMAGE */}
      <Link href={`/gadgets/${gadget.slug}`}>
        <div className="relative w-full h-60 overflow-hidden bg-gray-100">
          {gadget.images?.[0] ? (
            <Image
              src={gadget.images[0]}
              alt={gadget.name}
              fill
              priority={priority}
              sizes="(max-width: 640px) 100vw,
                     (max-width: 1024px) 50vw,
                     33vw"
              className="object-cover group-hover:scale-105 transition duration-500"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-sm">
              Product image coming soon
            </div>
          )}

          <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent pointer-events-none" />

          <div className="absolute top-4 left-4">
            <span className="bg-white/95 text-green-700 text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm">
              Payment on Delivery
            </span>
          </div>
        </div>
      </Link>

      {/* CONTENT */}
      <div className="p-6">
        <p className="text-xs uppercase tracking-wide text-green-700 font-semibold">
          {gadget.category}
        </p>

        <h3 className="font-semibold text-lg md:text-xl text-gray-900 group-hover:text-green-700 transition leading-snug mt-2">
          {gadget.name}
        </h3>

        <p className="text-gray-700 mt-3 text-sm md:text-[15px] leading-7 line-clamp-3">
          {gadget.shortDescription}
        </p>

        <div className="mt-5">
          {gadget.price > 0 ? (
            <p className="text-xl font-bold text-gray-900">
              ₦{gadget.price.toLocaleString("en-NG")}
            </p>
          ) : (
            <p className="text-sm font-medium text-gray-500">
              Price available on enquiry
            </p>
          )}
        </div>

        <p className="text-xs text-gray-500 mt-2">
          🚚 Nationwide delivery available
        </p>

        <Link
          href={`/gadgets/${gadget.slug}`}
          className="inline-flex items-center justify-center w-full mt-5 px-5 py-3 rounded-xl bg-green-700 text-white font-medium text-sm hover:bg-green-800 transition"
        >
          View Product
          <span className="ml-2 group-hover:translate-x-1 transition">
            →
          </span>
        </Link>
      </div>
    </article>
  );
}