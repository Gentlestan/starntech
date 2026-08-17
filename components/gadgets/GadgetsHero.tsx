export default function GadgetsHero() {
  return (
    <div className="text-center mb-12 md:mb-16">
      <p className="text-green-700 font-semibold tracking-wide text-sm md:text-base">
        StarnTech Gadgets
      </p>

      <h1 className="text-3xl md:text-5xl font-bold mt-3 text-gray-900">
        Smart Gadgets. Better Everyday.
      </h1>

      <p className="text-gray-700 mt-4 max-w-2xl mx-auto text-base md:text-lg leading-7">
        Discover useful and affordable gadgets carefully selected for
        everyday convenience, entertainment and lifestyle.
      </p>

      <div className="flex flex-wrap justify-center gap-3 mt-6">
        <span className="inline-flex items-center px-4 py-2 rounded-full bg-green-50 text-green-700 text-sm font-medium">
          🚚 Nationwide Delivery
        </span>

        <span className="inline-flex items-center px-4 py-2 rounded-full bg-green-50 text-green-700 text-sm font-medium">
          💳 Payment on Delivery
        </span>
      </div>
    </div>
  );
}