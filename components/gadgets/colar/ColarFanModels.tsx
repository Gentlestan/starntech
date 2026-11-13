
import Image from "next/image";

type ColarFanVariant = {
  name: string;
  model?: string;
  price: number;
  stock?: number;
};

type ColarFanModelsProps = {
  variants: ColarFanVariant[];
  selectedVariantName: string;
  onSelectVariant: (variantName: string) => void;
  onOrderClick: () => void;
};

const modelDetails: Record<
  string,
  {
    model: string;
    image: string;
    description: string;
  }
> = {
  "16-inch": {
    model: "CH-SF3",
    image: "/images/colarhome-ch-sf3-16-inch-2.jpg",
    description:
      "A practical 16-inch option for everyday comfort at home.",
  },

  "18-inch": {
    model: "CH-SF04",
    image: "/images/colarhome-ch-sf04-18-inch-2.png",
    description:
      "A larger 18-inch option for customers who prefer a bigger fan.",
  },
};

export default function ColarFanModels({
  variants,
  selectedVariantName,
  onSelectVariant,
  onOrderClick,
}: ColarFanModelsProps) {
  return (
    <section className="mt-14 md:mt-20">
      {/* SECTION INTRODUCTION */}
      <div className="text-center max-w-2xl mx-auto mb-8">
        <p className="text-sm font-bold uppercase tracking-wider text-green-700">
          Find Your Preferred Size
        </p>

        <h2 className="text-2xl md:text-4xl font-extrabold text-gray-950 mt-2">
          Meet the Colar Solar Home Fan
        </h2>

        <p className="text-gray-600 text-sm md:text-base leading-7 mt-3">
          Whether you're choosing a fan for your own home or
          sending one to someone you love, select the size
          that works best for your needs.
        </p>
      </div>

      {/* TWO FAN MODELS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-7">
        {variants.map((variant) => {
          const details = modelDetails[variant.name];

          if (!details) return null;

          const isSelected =
            selectedVariantName === variant.name;

          return (
            <article
              key={variant.model || variant.name}
              className={`overflow-hidden rounded-2xl border-2 bg-white transition-all ${
                isSelected
                  ? "border-green-700 shadow-md"
                  : "border-gray-200 shadow-sm"
              }`}
            >
              {/* PRODUCT IMAGE */}
              <div className="relative aspect-square bg-gray-50">
                <Image
                  src={details.image}
                  alt={`ColarHome ${variant.name} Solar Fan ${details.model}`}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-contain p-5"
                />

                <span className="absolute top-3 left-3 rounded-full bg-green-700 px-3 py-1.5 text-xs font-bold text-white">
                  {variant.name}
                </span>

                {isSelected && (
                  <span className="absolute top-3 right-3 rounded-full bg-green-100 px-3 py-1.5 text-xs font-bold text-green-800">
                    ✓ Selected
                  </span>
                )}
              </div>

              {/* PRODUCT DETAILS */}
              <div className="p-5">
                <h3 className="text-xl font-extrabold text-gray-900">
                  Colar Solar Fan {variant.name}
                </h3>

                <p className="text-xs text-gray-500 mt-1">
                  Model {variant.model}
                </p>

                <p className="text-sm text-gray-600 leading-6 mt-3">
                  {details.description}
                </p>

                <p className="text-2xl font-extrabold text-green-800 mt-4">
                  ₦{variant.price.toLocaleString("en-NG")}
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="rounded-full bg-green-50 px-3 py-2 text-xs font-semibold text-green-800">
                    25W Solar Panel
                  </span>

                  <span className="rounded-full bg-green-50 px-3 py-2 text-xs font-semibold text-green-800">
                    Rechargeable
                  </span>
                </div>

                {/* SUPPLIER AVAILABILITY */}
                {variant.stock !== undefined && (
                  <p className="text-xs text-gray-500 mt-4">
                    {variant.stock > 0
                      ? `${variant.stock} available`
                      : "Currently unavailable"}
                  </p>
                )}

                {/* SELECT MODEL */}
                <button
                  type="button"
                  disabled={variant.stock === 0}
                  onClick={() =>
                    onSelectVariant(variant.name)
                  }
                  className={`w-full mt-4 rounded-xl px-4 py-3 text-sm font-bold transition ${
                    variant.stock === 0
                      ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                      : isSelected
                        ? "bg-green-100 text-green-800 border border-green-200"
                        : "bg-green-700 text-white hover:bg-green-800"
                  }`}
                >
                  {variant.stock === 0
                    ? "Unavailable"
                    : isSelected
                      ? "✓ Currently Selected"
                      : `Choose ${variant.name}`}
                </button>
              </div>
            </article>
          );
        })}
      </div>

      {/* PAY ON DELIVERY CTA */}
      <div className="mt-8 text-center">
        <button
          type="button"
          onClick={onOrderClick}
          className="w-full sm:w-auto rounded-xl bg-green-700 px-8 py-4 text-white font-bold text-base shadow-lg shadow-green-700/20 hover:bg-green-800 transition"
        >
          Order Now – Pay on Delivery
        </button>

        <p className="text-xs text-gray-500 mt-3">
          Nationwide delivery included. Pay when your order arrives.
        </p>
      </div>
    </section>
  );
}
