export default function GadgetsFooter() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-10">

        <div className="flex flex-col md:flex-row items-center justify-between gap-5">

          <div className="text-center md:text-left">
            <p className="font-bold text-lg">
              StarnTech Gadgets
            </p>

            <p className="text-gray-400 text-sm mt-1">
              Smart gadgets for everyday life.
            </p>
          </div>

          <div className="flex items-center gap-5 text-sm">
            <a
              href="https://wa.me/2348062991395"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-green-400 transition"
            >
              WhatsApp
            </a>

            <span className="text-gray-600">|</span>

            <span className="text-gray-400">
              Nationwide Delivery
            </span>

            <span className="text-gray-600">|</span>

            <span className="text-gray-400">
              Payment on Delivery
            </span>
          </div>

        </div>

        <div className="border-t border-gray-800 mt-8 pt-5 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} StarnTech Gadgets. All rights reserved.
        </div>

      </div>
    </footer>
  );
}