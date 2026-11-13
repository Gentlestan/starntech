export default function ColarFanIntro() {
  return (
    <div className="mt-2">
      <p className="text-sm font-bold uppercase tracking-wider text-green-700 mb-3">
        A Thoughtful Christmas Gift for Your Loved Ones ❤️
      </p>

      <h1 className="text-3xl md:text-5xl font-extrabold text-gray-950 leading-tight">
        This Christmas, Send Comfort Home!
      </h1>

      <p className="text-gray-700 text-base md:text-lg leading-7 mt-4 max-w-xl">
        You may have an air conditioner in your home, but what about
        your mum, dad and loved ones back home who have to cope with
        the heat and unreliable electricity?
      </p>

      <p className="text-gray-600 text-base leading-7 mt-3 max-w-xl">
        Give them a thoughtful gift that helps make hot afternoons
        and warm evenings more comfortable. Or get one for your own
        home and enjoy rechargeable cooling when public electricity
        is unavailable.
      </p>

      <p className="text-gray-700 text-sm md:text-base leading-6 mt-4 font-medium">
        Available in 16-inch CH-SF3 and 18-inch CH-SF04 models,
        both with a 25W solar panel.
      </p>

      <div className="flex flex-wrap gap-2 mt-4">
        {[
          "25W Solar Panel",
          "Rechargeable Battery",
          "Remote Control",
          "Built-in LED Light",
        ].map((feature) => (
          <span
            key={feature}
            className="rounded-full bg-green-50 border border-green-100 px-3 py-2 text-xs sm:text-sm font-semibold text-green-800"
          >
            ✓ {feature}
          </span>
        ))}
      </div>

      <div className="mt-5 rounded-xl bg-green-50 border border-green-100 p-3">
        <p className="text-sm font-bold text-green-900">
          Sending one to someone in another city?
        </p>

        <p className="text-sm text-green-800 mt-1">
          We've got you covered with nationwide delivery included
          and payment on delivery.
        </p>
      </div>
    </div>
  );
}