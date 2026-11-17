
import Head from "next/head";
import Colar1000Comparison from "@/components/gadgets/colar1000/Colar1000Comparison";
import Colar1000TechnicalDetails from "@/components/gadgets/colar1000/Colar1000TechnicalDetails";
import Colar1000whyChooseUs from "@/components/gadgets/colar1000/Colar1000WhyChooseUs";
import Colar1000OrderingDelivery from "@/components/gadgets/colar1000/Colar1000OrderingDelivery";
import Colar1000FAQ from "@/components/gadgets/colar1000/Colar1000FAQ";
import Colar1000PlusFreezerSection from "../../../components/gadgets/colar1000/Colar1000PlusFreezerSection";
export default function Colar1000LandingPage() {
  return (
    <>
      <Head>
        <title>
          Colar1000 Solar Power Stations Christmas Offers | Starntech
        </title>

        <meta
          name="description"
          content="Discover the Colar1000 Neo, Pro and Plus portable power stations. Enjoy special Christmas offers with a free 18-inch Colar solar fan on qualifying purchases. Abuja Pay on Delivery available in covered areas."
        />

        <meta
          property="og:title"
          content="Power Your Home This Christmas | Starntech"
        />

        <meta
          property="og:description"
          content="Choose your Colar1000 power station and receive a free 18-inch Colar solar fan on qualifying purchases."
        />
      </Head>

      <main className="min-h-screen bg-white text-gray-900">
        {/* SECTION 1: CHRISTMAS HERO */}
        <section className="relative overflow-hidden bg-gradient-to-br from-green-950 via-green-900 to-green-800 text-white">
          <div className="max-w-7xl mx-auto px-5 py-14 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

              {/* HERO MESSAGE */}
              <div>
                <span className="inline-flex items-center rounded-full border border-yellow-300/40 bg-yellow-300/10 px-4 py-2 text-xs md:text-sm font-bold tracking-wide text-yellow-200">
                  STARNTECH CHRISTMAS SPECIAL
                </span>

                <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                  Power Your Home This Christmas!
                </h1>

                <p className="mt-5 text-lg md:text-xl leading-8 text-green-50">
                  Get a Colar1000 portable power station and enjoy
                  a FREE 18-inch Colar solar fan when you qualify
                  for our special Christmas bundle.
                </p>

                <p className="mt-4 text-sm md:text-base leading-7 text-green-100">
                  Whether you want dependable backup power for your
                  home or a thoughtful gift for your loved ones,
                  explore the Colar1000 range and find an option
                  that suits your needs.
                </p>

                {/* MAIN CTA */}
                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <a
                    href="#colar1000-offers"
                    className="inline-flex items-center justify-center rounded-xl bg-yellow-400 px-7 py-4 text-green-950 font-extrabold shadow-lg hover:bg-yellow-300 transition"
                  >
                    Explore Christmas Offers
                    <span className="ml-2" aria-hidden="true">
                      →
                    </span>
                  </a>

                  <a
                    href="#starntech-promise"
                    className="inline-flex items-center justify-center rounded-xl border border-white/40 px-7 py-4 text-white font-bold hover:bg-white/10 transition"
                  >
                    Our Honest Promise
                  </a>
                </div>

                <p className="mt-5 text-xs md:text-sm text-green-200">
                  Nationwide delivery available. Payment arrangements
                  depend on your delivery location.
                </p>
              </div>

              {/* PROMOTION VISUAL */}
              <div className="relative">
                <div className="rounded-3xl border border-white/15 bg-white/10 p-5 md:p-7 shadow-2xl backdrop-blur-sm">

                  <div className="flex items-center justify-between gap-3 mb-6">
                    <div>
                      <p className="text-xs uppercase tracking-widest text-yellow-200 font-bold">
                        Special Gift Offer
                      </p>

                      <h2 className="text-2xl md:text-3xl font-extrabold mt-2">
                        Buy Power. Get a Fan FREE!
                      </h2>
                    </div>

                    <span className="flex-shrink-0 rounded-full bg-yellow-400 px-3 py-2 text-xs font-extrabold text-green-950">
                      FREE GIFT
                    </span>
                  </div>

                  {/* POWER STATION RANGE */}
                  <div className="space-y-3">
                    <div className="rounded-2xl bg-white p-4 text-gray-900">
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <p className="font-extrabold text-lg">
                            Colar1000 Neo
                          </p>
                          <p className="text-sm text-gray-600">
                            300W Power Station
                          </p>
                        </div>

                        <span className="text-green-700 font-extrabold text-sm">
                          2 UNITS
                        </span>
                      </div>

                      <p className="mt-3 border-t border-gray-100 pt-3 text-sm font-bold text-green-800">
                        Buy 2 Neo units, get 1 free 18-inch fan.
                      </p>
                    </div>

                    <div className="rounded-2xl bg-white p-4 text-gray-900">
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <p className="font-extrabold text-lg">
                            Colar1000 Pro
                          </p>
                          <p className="text-sm text-gray-600">
                            300W Power Station
                          </p>
                        </div>

                        <span className="text-green-700 font-extrabold text-sm">
                          2 UNITS
                        </span>
                      </div>

                      <p className="mt-3 border-t border-gray-100 pt-3 text-sm font-bold text-green-800">
                        Buy 2 Pro units, get 1 free 18-inch fan.
                      </p>
                    </div>

                    <div className="rounded-2xl border-2 border-yellow-300 bg-yellow-50 p-4 text-gray-900">
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <p className="font-extrabold text-lg">
                            Colar1000 Plus
                          </p>
                          <p className="text-sm text-gray-600">
                            500W Power Station
                          </p>
                        </div>

                        <span className="rounded-full bg-green-800 px-3 py-1 text-xs font-bold text-white">
                          FEATURED
                        </span>
                      </div>

                      <p className="mt-3 border-t border-yellow-200 pt-3 text-sm font-extrabold text-green-800">
                        Buy just 1 Plus and get 1 free 18-inch fan!
                      </p>
                    </div>
                  </div>

                  <p className="text-center text-xs text-green-100 mt-5 leading-5">
                    Free fan offer applies to the qualifying quantities
                    shown above. Subject to promotional stock availability.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* PAYMENT AND DELIVERY MESSAGE */}
        <section className="border-b border-gray-100 bg-gray-50">
          <div className="max-w-6xl mx-auto px-5 py-7 grid grid-cols-1 sm:grid-cols-2 gap-5">

            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-800 text-xl">
                📍
              </span>

              <div>
                <h3 className="font-extrabold text-gray-900">
                  Abuja Customers
                </h3>

                <p className="text-sm text-gray-600 leading-6 mt-1">
                  Pay on delivery in our covered Abuja service areas,
                  subject to address confirmation.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-800 text-xl">
                🚚
              </span>

              <div>
                <h3 className="font-extrabold text-gray-900">
                  Outside Abuja
                </h3>

                <p className="text-sm text-gray-600 leading-6 mt-1">
                  Nationwide delivery is available. Full payment
                  must be confirmed before dispatch.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* TEMPORARY ANCHORS FOR UPCOMING SECTIONS */}
        {/* SECTION 2: COLAR1000 PRODUCT COMPARISON */}
        <Colar1000Comparison />
        {/* SECTION 3: TECHNICAL KNOW-HOW */}
        <Colar1000TechnicalDetails
          name="Colar1000 Series"
          output="300W or 500W"
          description="The Colar1000 range offers three portable solar power station models, each with a 1,000Wh stated battery capacity and a different inverter output rating."
        />
        {/* SECTION 4: WHY BUY FROM STARNTECH */}
        <Colar1000whyChooseUs />
        {/* SECTION 5: ORDERING, PAYMENT & DELIVERY */}
        <Colar1000OrderingDelivery />
        {/* SECTION 6: FREQUENTLY ASKED QUESTIONS */}
        <Colar1000FAQ />

      </main>
    </>
  );
}
