import Link from "next/link";

const categories = [
  {
    name: "All Gadgets",
    href: "/gadgets",
    active: true,
  },
  {
    name: "Smartwatches",
    href: "/gadgets/smartwatches",
  },
  {
    name: "Audio",
    href: "/gadgets/audio",
  },
  {
    name: "Gift Sets",
    href: "/gadgets/gift-sets",
  },
];

export default function GadgetCategories() {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-10 md:mb-14">
      {categories.map((category) => (
        <Link
          key={category.name}
          href={category.href}
          className={`px-4 py-2 rounded-full text-sm font-medium transition ${
            category.active
              ? "bg-green-700 text-white"
              : "bg-white border border-gray-200 text-gray-700 hover:border-green-300 hover:text-green-700"
          }`}
        >
          {category.name}
        </Link>
      ))}
    </div>
  );
}