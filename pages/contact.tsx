import Head from "next/head";
import { useEffect } from "react";

export default function Contact() {

  // Floating WhatsApp button
  useEffect(() => {
    const btn = document.createElement("a");
    btn.href =
      "https://wa.me/2348062991395?text=Hello%20StarnTech,%20I%20need%20a%20solar%20or%20inverter%20installation%20quotation.";
    btn.target = "_blank";
    btn.style.position = "fixed";
    btn.style.bottom = "20px";
    btn.style.right = "20px";
    btn.style.backgroundColor = "#25D366";
    btn.style.color = "white";
    btn.style.padding = "12px 16px";
    btn.style.borderRadius = "50px";
    btn.style.fontWeight = "600";
    btn.style.zIndex = "9999";
    btn.style.boxShadow = "0 4px 10px rgba(0,0,0,0.2)";
    btn.innerText = "WhatsApp";

    document.body.appendChild(btn);

    return () => {
      document.body.removeChild(btn);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Contact StarnTech | Solar & Inverter Experts</title>
        <meta
          name="description"
          content="Contact StarnTech for solar installations, inverter systems, lithium batteries and CCTV security solutions across Nigeria."
        />
      </Head>

      {/* HERO */}
      <section className="bg-green-700 text-white py-20">
        <div className="max-w-5xl mx-auto px-4 text-center">

          <h1 className="text-4xl md:text-5xl font-bold">
            Get Expert Solar & Inverter Support
          </h1>

          <p className="mt-6 text-lg text-green-100">
            Send us your project details and we will recommend the right system
            size, components, and configuration for your home or business.
          </p>

          <a
            href="https://wa.me/2348062991395?text=Hello%20StarnTech,%20I%20need%20help%20with%20a%20solar%20installation."
            target="_blank"
            className="inline-block bg-white text-green-700 font-semibold px-6 py-3 rounded-lg mt-8"
          >
            Chat on WhatsApp Now
          </a>

        </div>
      </section>

      {/* CONTACT OPTIONS */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-6">

          <div className="bg-gray-50 p-6 rounded-xl">
            <h3 className="font-bold text-xl">Call Us</h3>
            <p className="text-gray-600 mt-2">
              Speak directly with our technical team.
            </p>

            <a
              href="tel:+2348062991395"
              className="text-green-600 font-semibold mt-4 block"
            >
              +234 806 299 1395
            </a>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl">
            <h3 className="font-bold text-xl">WhatsApp</h3>
            <p className="text-gray-600 mt-2">
              Fastest response for quotations and support.
            </p>

            <a
              href="https://wa.me/2348062991395"
              target="_blank"
              className="text-green-600 font-semibold mt-4 block"
            >
              Start Chat
            </a>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl">
            <h3 className="font-bold text-xl">Email</h3>
            <p className="text-gray-600 mt-2">
              Send detailed project requests.
            </p>

            <a
              href="mailto:hello@starntech.com"
              className="text-green-600 font-semibold mt-4 block"
            >
              hello@starntech.com
            </a>
          </div>

        </div>
      </section>

      {/* SIMPLE CTA SECTION */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">

          <h2 className="text-3xl font-bold">
            Tell Us About Your Project
          </h2>

          <p className="text-gray-600 mt-4">
            We will size your system properly and recommend the best setup for your budget.
          </p>

          <a
            href="https://wa.me/2348062991395?text=Hello%20StarnTech,%20I%20want%20a%20solar%20system%20recommendation."
            target="_blank"
            className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg mt-6"
          >
            Request Recommendation
          </a>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-green-700 text-white py-20 text-center">
        <h2 className="text-4xl font-bold">
          Ready to Power Your Home or Business?
        </h2>

        <p className="mt-4 text-green-100">
          Talk to our engineers today for a proper system design.
        </p>

        <a
          href="https://wa.me/2348062991395"
          target="_blank"
          className="inline-block bg-white text-green-700 font-semibold px-8 py-4 rounded-lg mt-8"
        >
          Chat on WhatsApp
        </a>
      </section>
    </>
  );
}