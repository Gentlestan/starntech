
import SolarProductsGrid from "@/components/solar/SolarProductsGrid";

export default function SolarSolutionsPage() {
  return (
    <main className="w-full">
      {/* Page introduction */}
      <section className="bg-green-950 text-white py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-green-300 font-semibold text-sm uppercase tracking-wider mb-3">
            StarnTech Engineering
          </p>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight max-w-3xl">
            Smart Solar Products for Your Home and Business
          </h1>

          <p className="text-gray-200 mt-4 text-sm sm:text-lg max-w-2xl leading-relaxed">
            Explore practical solar-powered security and rechargeable
            products. Get professional guidance to help you choose the
            right solution for your needs.
          </p>
        </div>
      </section>

      <SolarProductsGrid />
    </main>
  );
}
