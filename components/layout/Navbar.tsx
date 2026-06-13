import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <nav className="max-w-6xl mx-auto flex items-center justify-between p-4">

        {/* LOGO */}
        <Link href="/" className="font-bold text-xl">
          Starntech
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/">Home</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>

          {/* WhatsApp CTA */}
          <a
            href="https://wa.me/2348062991395"
            target="_blank"
            className="bg-green-500 text-white px-4 py-2 rounded-md"
          >
            WhatsApp
          </a>
        </div>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </nav>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden flex flex-col gap-4 p-4 border-t text-sm bg-white">
          <Link href="/" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/projects" onClick={() => setOpen(false)}>Projects</Link>
          <Link href="/blog" onClick={() => setOpen(false)}>Blog</Link>
          <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>

          <a
            href="https://wa.me/234XXXXXXXXXX"
            target="_blank"
            className="bg-green-500 text-white px-4 py-2 rounded-md text-center"
          >
            Chat on WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}