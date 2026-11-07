import Link from "next/link";

type OrderNowButtonProps = {
  slug: string;
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
};

export default function OrderNowButton({
  slug,
  className = "",
  children = "Order Now — Pay on Delivery",
  onClick,
}: OrderNowButtonProps) {
  return (
    <Link
      href={`/gadgets/${slug}#order`}
      onClick={onClick}
      className={`inline-flex items-center justify-center rounded-xl bg-green-700 px-6 py-4 font-bold text-white transition hover:bg-green-800 active:scale-[0.99] ${className}`}
    >
      {children}
      <span className="ml-2">→</span>
    </Link>
  );
}