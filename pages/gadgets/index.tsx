import GadgetsHero from "@/components/gadgets/GadgetsHero";
import GadgetCategories from "@/components/gadgets/GadgetsCategories";
import FeaturedGadgets from "@/components/gadgets/FeaturedGadgets";
import GadgetsTrust from "@/components/gadgets/GadgetsTrust";

export default function Gadgets() {
  return (
    <section className="bg-linear-to-b from-gray-50 to-white py-14 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <GadgetsHero />

        <GadgetCategories />

        <FeaturedGadgets />

        <GadgetsTrust />
      </div>
    </section>
  );
}