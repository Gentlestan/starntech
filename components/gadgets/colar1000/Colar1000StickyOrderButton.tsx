
export default function Colar1000StickyOrderButton() {
  const handleClick = () => {
    document.getElementById("colar1000-order")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="md:hidden fixed right-0 top-1/2 -translate-y-1/2 z-50 bg-green-700 hover:bg-green-800 text-white font-extrabold text-sm px-4 py-5 rounded-l-xl shadow-lg transition"
      aria-label="Scroll to Colar1000 order form"
    >
      <span className="block [writing-mode:vertical-rl] rotate-180">
        Order Now
      </span>
    </button>
  );
}
