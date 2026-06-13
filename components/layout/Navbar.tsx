import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <nav className="max-w-6xl mx-auto flex items-center justify-between p-4">

        {/* LOGO */}
        <Link
          href="/"
          className="font-bold text-xl text-gray-900 tracking-tight"
        >
          Starntech
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">

          <Link
            href="/"
            className="text-gray-800 hover:text-green-600 transition"
          >
            Home
          </Link>

          <Link
            href="/projects"
            className="text-gray-800 hover:text-green-600 transition"
          >
            Projects
          </Link>

          <Link
            href="/blog"
            className="text-gray-800 hover:text-green-600 transition"
          >
            Blog
          </Link>

          <Link
            href="/contact"
            className="text-gray-800 hover:text-green-600 transition"
          >
            Contact
          </Link>

          {/* WhatsApp CTA */}
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
          className="md:hidden text-2xl text-gray-900"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </nav>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden flex flex-col gap-4 p-4 border-t bg-white font-medium">

          <Link
            href="/"
            className="text-gray-800"
            onClick={() => setOpen(false)}
          >
            Home
          </Link>

          <Link
            href="/projects"
            className="text-gray-800"
            onClick={() => setOpen(false)}
          >
            Projects
          </Link>

          <Link
            href="/blog"
            className="text-gray-800"
            onClick={() => setOpen(false)}
          >
            Blog
          </Link>

          <Link
            href="/contact"
            className="text-gray-800"
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>

          <a
            href="https://wa.me/2348062991395"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 text-white px-4 py-3 rounded-md text-center font-medium"
          >
            Chat on WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}