import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-12 items-center">

        <div>
          <p className="text-green-600 font-semibold">
            Solar • CCTV • Inverters • Networking
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mt-3">
            Reliable Energy & Security Solutions
          </h1>

          <p className="text-gray-600 mt-6 text-lg leading-8">
            We design and install solar systems, inverter backups,
            CCTV security setups, and smart electrical solutions
            for homes and businesses.
          </p>

          <div className="mt-8 flex gap-4 flex-wrap">
            <a
              href="https://wa.me/2348062991395"
              className="bg-green-500 text-white px-6 py-3 rounded-lg"
            >
              Get Quote
            </a>

            <Link href="/projects" className="border px-6 py-3 rounded-lg">
              View Work
            </Link>
          </div>
        </div>

        <div className="relative w-full h-100 md:h-125 rounded-2xl overflow-hidden">
          <Image
            src="/images/panel.jpg"
            alt="Solar installation"
            fill
            className="object-cover"
            priority
          />
        </div>

      </div>
    </section>
  );
}