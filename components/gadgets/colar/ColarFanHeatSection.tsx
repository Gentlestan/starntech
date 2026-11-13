
import Image from "next/image";

type ColarFanHeatSectionProps = {
  imageSrc?: string;
  imageAlt?: string;
  onOrderClick: () => void;
};

export default function ColarFanHeatSection({
  imageSrc,
  imageAlt = "ColarHome solar rechargeable standing fan",
  onOrderClick,
}: ColarFanHeatSectionProps) {
  return (
    <section className="mt-12 md:mt-16 rounded-3xl overflow-hidden border border-green-100 bg-green-50">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* ACTUAL COLAR FAN IMAGE */}
        <div className="relative min-h-[280px] md:min-h-[420px] bg-white order-1 md:order-2">
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain p-6 md:p-8"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-sm">
              Colar fan image coming soon
            </div>
          )}
        </div>

        {/* SALES MESSAGE */}
        <div className="p-6 md:p-10 flex flex-col justify-center order-2 md:order-1">
          <p className="text-sm font-bold uppercase tracking-wider text-green-700">
            Comfort When You Need It
          </p>

          <h2 className="text-2xl md:text-4xl font-extrabold text-gray-950 mt-3 leading-tight">
            The Heat Doesn't Wait for NEPA.
          </h2>

          <p className="text-gray-700 text-base leading-7 mt-4">
            Hot afternoons and uncomfortable nights can make life
            difficult, especially when public electricity is
            unavailable.
          </p>

          <p className="text-gray-700 text-base leading-7 mt-3">
            Whether you're buying for your own home or thinking
            about your loved ones in another city, the Colar Solar
            Fan offers another way to enjoy a refreshing breeze
            when the power goes off.
          </p>

          <p className="text-gray-600 text-sm leading-6 mt-3">
            And during warm evenings when mosquitoes are around,
            combine your fan with your usual mosquito protection
            for a more comfortable night.
          </p>

          <div className="mt-6">
            <button
              type="button"
              onClick={onOrderClick}
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl bg-green-700 px-7 py-4 text-white font-bold text-sm md:text-base shadow-lg shadow-green-700/20 hover:bg-green-800 transition"
            >
              Order Now – Pay on Delivery
            </button>

            <p className="text-xs text-gray-500 mt-3">
              Nationwide delivery included. Pay when your order arrives.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
