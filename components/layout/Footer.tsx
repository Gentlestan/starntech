import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white mt-20">
      
      <div className="max-w-6xl mx-auto px-4 py-12 grid gap-10 md:grid-cols-3">

        {/* BRAND */}
        <div>
          <h2 className="text-2xl font-bold">Starntech</h2>

          <p className="mt-4 text-sm text-gray-300 leading-6">
            Solar installation, inverter systems, lithium & tubular battery solutions,
            and CCTV security systems for homes and businesses across Nigeria.
          </p>

          <p className="mt-4 text-sm text-green-400">
            Serving Abuja, South East (Enugu, Nsukka) & South South Nigeria
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-lg font-semibold mb-4">
            Quick Links
          </h3>

          <div className="flex flex-col gap-3 text-sm text-gray-300">
            <Link href="/">Home</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/blog">Solar Insights</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-lg font-semibold mb-4">
            Contact Us
          </h3>

          <div className="space-y-3 text-sm text-gray-300">

            <p>Email: hello@starntech.com</p>

            <p>Phone: +234 806 299 1395</p>

            <p>Available: Mon – Sat (8am – 6pm)</p>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/2348062991395?text=Hello%20Starntech,%20I%20need%20a%20solar%20or%20inverter%20installation%20quotation."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 bg-green-500 hover:bg-green-600 px-4 py-2 rounded-md text-white font-medium"
            >
              Chat on WhatsApp
            </a>

            {/* Click to Call */}
            <a
              href="tel:+2348062991395"
              className="block mt-2 text-green-400 hover:underline"
            >
              Click to Call Now
            </a>

          </div>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-800 text-center text-sm text-gray-400 py-4">
        © {new Date().getFullYear()} Starntech. All rights reserved.
      </div>

    </footer>
  );
}