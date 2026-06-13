import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-white text-gray-900">
      <div className="max-w-6xl mx-auto px-4 py-14 md:py-20 grid md:grid-cols-2 gap-12 items-center">

        {/* TEXT SIDE */}
        <div>

          <p className="text-green-700 font-semibold text-sm md:text-base tracking-wide">
            Solar • CCTV • Inverters • Networking
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mt-4 text-gray-900">
            Reliable Energy & Security Solutions
          </h1>

          <p className="text-gray-700 mt-6 text-base md:text-lg leading-8">
            We design and install solar systems, inverter backups,
            CCTV security setups, and smart electrical solutions
            for homes and businesses across Nigeria.
          </p>

          <div className="mt-8 flex gap-4 flex-wrap">

            <a
              href="https://wa.me/2348062991395"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition"
            >
              Get Quote
            </a>

            <Link
              href="/projects"
              className="border border-gray-300 text-gray-800 hover:border-gray-900 hover:text-black px-6 py-3 rounded-lg transition"
            >
              View Work
            </Link>

          </div>

        </div>

        {/* IMAGE SIDE */}
        <div className="relative w-full h-80 md:h-96 rounded-2xl overflow-hidden shadow-lg">

          <Image
            src="/images/panel.jpg"
            alt="Solar installation"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            priority
          />

        </div>

      </div>
    </section>
  );
}