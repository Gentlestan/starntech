import Head from "next/head";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact StarnTech | Solar & Inverter Experts</title>
        <meta
          name="description"
          content="Contact StarnTech for solar installation, inverter systems, lithium batteries and CCTV solutions across Nigeria."
        />
      </Head>

      {/* FLOATING WHATSAPP (PROPER REACT WAY) */}
      <a
        href="https://wa.me/2348062991395?text=Hello%20StarnTech,%20I%20need%20a%20solar%20or%20inverter%20installation%20quotation."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50 bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-full shadow-lg text-sm font-medium transition"
      >
        WhatsApp
      </a>

      {/* HERO */}
      <section className="bg-green-700 text-white py-20">
        <div className="max-w-5xl mx-auto px-4 text-center">

          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Get Expert Solar & Inverter Support
          </h1>

          <p className="mt-6 text-base md:text-lg text-green-100 leading-7 max-w-3xl mx-auto">
            Send us your project details and we will design a reliable system
            tailored to your home or business — based on real field experience.
          </p>

          <a
            href="https://wa.me/2348062991395"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-green-700 font-semibold px-6 py-3 rounded-lg mt-8"
          >
            Chat on WhatsApp Now
          </a>
        </div>
      </section>

      {/* CONTACT OPTIONS */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-6">

          {/* CALL */}
          <div className="bg-gray-50 border rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900">Call Us</h3>
            <p className="text-gray-600 mt-2 text-sm leading-6">
              Speak directly with our technical team for fast support.
            </p>

            <a
              href="tel:+2348062991395"
              className="text-green-600 font-semibold mt-4 inline-block"
            >
              +234 806 299 1395
            </a>
          </div>

          {/* WHATSAPP */}
          <div className="bg-gray-50 border rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900">WhatsApp</h3>
            <p className="text-gray-600 mt-2 text-sm leading-6">
              Fastest response for quotations and system design.
            </p>

            <a
              href="https://wa.me/2348062991395"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 font-semibold mt-4 inline-block"
            >
              Start Chat
            </a>
          </div>

          {/* EMAIL */}
          <div className="bg-gray-50 border rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900">Email</h3>
            <p className="text-gray-600 mt-2 text-sm leading-6">
              Send detailed project requirements and documentation.
            </p>

            <a
              href="mailto:hello@starntech.com"
              className="text-green-600 font-semibold mt-4 inline-block"
            >
              hello@starntech.com
            </a>
          </div>
        </div>
      </section>

      {/* MAIN CTA */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Tell Us About Your Project
          </h2>

          <p className="text-gray-600 mt-4 leading-7">
            We will size your system properly and recommend the best setup
            for your budget and energy needs.
          </p>

          <a
            href="https://wa.me/2348062991395"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg mt-6 transition"
          >
            Request Recommendation
          </a>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-green-700 text-white py-20 text-center">
        <div className="max-w-3xl mx-auto px-4">

          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Power Your Home or Business?
          </h2>

          <p className="mt-4 text-green-100 leading-7">
            Talk to our engineers today for a professional solar system design.
          </p>

          <a
            href="https://wa.me/2348062991395"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-green-700 font-semibold px-8 py-4 rounded-lg mt-8"
          >
            Chat on WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}