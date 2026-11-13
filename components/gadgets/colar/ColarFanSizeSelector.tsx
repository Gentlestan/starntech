type ColarFanVariant = {
  name: string;
  model?: string;
  price: number;
  stock: number;
};

type ColarFanSizeSelectorProps = {
  variants: ColarFanVariant[];
  selectedVariantName: string;
  onSelect: (variantName: string) => void;
};

export default function ColarFanSizeSelector({
  variants,
  selectedVariantName,
  onSelect,
}: ColarFanSizeSelectorProps) {
  return (
    <section className="mb-6 rounded-2xl border border-green-200 bg-white p-4 md:p-5 shadow-sm">
      <div className="mb-4">
        <p className="text-xs font-bold uppercase tracking-wider text-green-700">
          Choose Your Preferred Size
        </p>

        <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mt-1">
          Which Colar Solar Fan Is Right for You?
        </h2>

        <p className="text-sm text-gray-500 mt-1">
          Select a size to view its pictures, videos and product details.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {variants.map((variant) => {
          const isSelected = selectedVariantName === variant.name;

          return (
            <button
              key={variant.name}
              type="button"
              onClick={() => onSelect(variant.name)}
              aria-pressed={isSelected}
              className={`rounded-xl border-2 p-3 md:p-4 text-left transition ${
                isSelected
                  ? "border-green-700 bg-green-50 ring-2 ring-green-100"
                  : "border-gray-200 bg-white hover:border-green-400"
              }`}
            >
              <span className="block text-base md:text-lg font-extrabold text-gray-900">
                {variant.name}
              </span>

              <span className="block text-xs text-gray-500 mt-1">
                Model {variant.model}
              </span>

              <span className="block text-lg md:text-xl font-extrabold text-green-800 mt-2">
                ₦{variant.price.toLocaleString("en-NG")}
              </span>

              <span className="block text-xs text-gray-600 mt-2">
                25W Solar Panel
              </span>

              {isSelected && (
                <span className="inline-flex mt-3 rounded-full bg-green-700 text-white text-xs font-bold px-3 py-1">
                  ✓ Selected
                </span>
              )}
            </button>
          );
        })}
      </div>

      <div className="flex flex-wrap gap-3 mt-4 text-xs font-semibold text-green-800">
        <span>🚚 Nationwide Delivery Included</span>
        <span>💳 Pay on Delivery</span>
      </div>
    </section>
  );
}