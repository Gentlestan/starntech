import { gadgets } from "@/data/gadgets";
import GadgetCard from "./GadgetsCard";


export default function FeaturedGadgets() {
  const featuredGadgets = gadgets.filter(
    (gadget) => gadget.featured && gadget.available
  );

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          Featured Gadgets
        </h2>

        <p className="text-gray-600 mt-2 text-sm md:text-base">
          Explore our latest gadgets and available offers.
        </p>
      </div>

      {featuredGadgets.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredGadgets.map((gadget, index) => (
            <GadgetCard
              key={gadget.slug}
              gadget={gadget}
              priority={index === 0}
            />
          ))}
        </div>
      ) : (
        <div className="bg-white border border-gray-100 rounded-2xl p-10 text-center">
          <p className="text-gray-600">
            New gadgets coming soon.
          </p>
        </div>
      )}
    </div>
  );
}