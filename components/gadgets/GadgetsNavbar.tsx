import { useState } from "react";
import Link from "next/link";

export default function GadgetsNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <nav className="max-w-6xl mx-auto flex items-center justify-between p-4">

        {/* LOGO */}
        <Link
          href="/gadgets"
          className="font-bold text-xl tracking-tight"
        >
          <span className="text-gray-900">StarnTech</span>
          <span className="text-green-600 ml-1">Gadgets</span>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">

          {/* HOME */}
          <Link
            href="/gadgets"
            className="text-gray-800 hover:text-green-600 transition"
          >
            Home
          </Link>

          {/* SMARTWATCH */}
          <Link
            href="/gadgets/smartwatch"
            className="text-gray-800 hover:text-green-600 transition"
          >
            Smartwatch
          </Link>

          {/* EARBUDS */}
          <Link
            href="/gadgets/q16-wireless-earbuds"
            className="text-gray-800 hover:text-green-600 transition"
          >
            Earbuds
          </Link>


          {/* WHATSAPP */}
          <a
            href="https://wa.me/2348062991395"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md font-medium transition"
          >
            WhatsApp
          </a>

        </div>

        {/* MOBILE BUTTON */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          className="md:hidden text-2xl text-gray-900"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>

      </nav>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden flex flex-col gap-4 p-4 border-t bg-white font-medium">

          {/* HOME */}
          <Link
            href="/gadgets"
            className="text-gray-800 hover:text-green-600 transition"
            onClick={() => setOpen(false)}
          >
            Home
          </Link>

          {/* SMARTWATCH */}
          <Link
            href="/gadgets/smartwatch"
            className="text-gray-800 hover:text-green-600 transition"
            onClick={() => setOpen(false)}
          >
            Smartwatch
          </Link>

          {/* EARBUDS */}
          <Link
            href="/gadgets/q16-wireless-earbuds"
            className="text-gray-800 hover:text-green-600 transition"
            onClick={() => setOpen(false)}
          >
            Earbuds
          </Link>

         

          {/* WHATSAPP */}
          <a
            href="https://wa.me/2348062991395"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-md text-center font-medium transition"
          >
            Chat on WhatsApp
          </a>

        </div>
      )}

    </header>
  );
}