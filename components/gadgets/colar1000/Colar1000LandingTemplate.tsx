
import Head from "next/head";
import Colar1000TechnicalDetails from "./Colar1000TechnicalDetails";
import Colar1000OrderForm from "./Colar1000OrderForm";
import { useState, type ReactNode } from "react";
import type { Colar1000OrderData } from "./Colar1000OrderForm";

export type Colar1000Model = {
  id: "neo" | "pro" | "plus";
  name: string;
  output: string;
  offer: string;
  quantity: number;
  description: string;
  featured?: boolean;
};

type Colar1000LandingTemplateProps = {
  model: Colar1000Model;
  freezerSection?: ReactNode;
};

export default function Colar1000LandingTemplate({
  model,
   freezerSection,
}: Colar1000LandingTemplateProps) {
  const pageTitle = `${model.name} Solar Power Station | Starntech`;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const productImages = [
  `/images/colar1000/${model.id}-1.webp`,
  `/images/colar1000/${model.id}-2.webp`,
  `/images/colar1000/${model.id}-3.webp`,
];

const [activeImage, setActiveImage] = useState(0);

  const handleOrderSubmit = async (order: Colar1000OrderData) => {
  setIsSubmitting(true);

  try {
    const response = await fetch("/api/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        orderType: "colar1000",
        ...order,
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(
        result.message || "Something went wrong. Please try again."
      );
    }

    // Track successful Colar1000 order as a Purchase
    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq(
        "trackSingle",
        "1054762187425411",
        "Purchase",
        {
          content_name: model.name,
          value: result.orderTotal,
          currency: "NGN",
        }
      );
    }

   window.location.href = "/gadgets/thank-you?product=colar1000";
  } catch (error) {
    console.error("Colar1000 order submission error:", error);

    alert(
      error instanceof Error
        ? error.message
        : "Unable to submit your order. Please try again."
    );
  } finally {
    setIsSubmitting(false);
  }
};

  const pageDescription = `Discover the ${model.name} ${model.output} portable solar power station. ${model.offer} and receive a free 18-inch Colar solar fan.`;


    return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
      </Head>

      <main className="min-h-screen bg-white">
        {/* HERO SECTION */}
        <section className="bg-gradient-to-br from-gray-950 via-green-950 to-green-800 text-white">
          <div className="max-w-7xl mx-auto px-5 py-16 md:py-24">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-sm font-bold uppercase tracking-widest text-green-300">
                Starntech Christmas Special
              </p>

              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mt-5">
                Meet the {model.name}
              </h1>

              <p className="text-2xl md:text-3xl font-bold text-green-300 mt-4">
                {model.output} Inverter Output
              </p>

              <p className="text-base md:text-lg text-gray-200 leading-8 mt-6">
                {model.description}
              </p>

              {/* PRODUCT IMAGE GALLERY */}
                <div className="max-w-2xl mx-auto mt-10">
                <div className="bg-white rounded-3xl p-3 shadow-2xl">
                    <img
                    src={productImages[activeImage]}
                    alt={`${model.name} solar power station`}
                    className="w-full h-[300px] md:h-[430px] object-contain rounded-2xl"
                    />
                </div>

                <div className="flex justify-center gap-4 mt-5">
                    {productImages.map((image, index) => (
                    <button
                        key={image}
                        type="button"
                        onClick={() => setActiveImage(index)}
                        className={`w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden border-2 bg-white p-1 transition ${
                        activeImage === index
                            ? "border-green-400"
                            : "border-white/30 hover:border-green-300"
                        }`}
                        aria-label={`View ${model.name} image ${index + 1}`}
                    >
                        <img
                        src={image}
                        alt={`${model.name} view ${index + 1}`}
                        className="w-full h-full object-contain"
                        />
                    </button>
                    ))}
                </div>
                </div>

              <div className="max-w-xl mx-auto mt-9 rounded-3xl bg-white p-6 md:p-8 text-gray-950 shadow-2xl">
                <p className="text-sm font-extrabold uppercase tracking-wider text-green-700">
                  Your Christmas Gift Offer
                </p>

                <h2 className="text-2xl md:text-3xl font-extrabold mt-3">
                  {model.offer}
                </h2>

                <p className="text-lg font-bold text-green-800 mt-4">
                  🎁 Get 1 FREE 18-inch Colar Solar Fan
                </p>

                <a
                  href="#colar1000-order"
                  className="block w-full rounded-xl bg-green-700 hover:bg-green-800 text-white font-extrabold text-center px-6 py-4 mt-7 transition"
                >
                  Order Now
                </a>
              </div>

              <p className="text-sm text-green-100 mt-7 leading-6">
                Abuja (FCT): Pay on Delivery in covered areas, subject to
                address confirmation. Outside Abuja: advance payment is
                required before dispatch.
              </p>
            </div>
          </div>
        </section>

        {/* TECHNICAL DETAILS */}
       {/* TECHNICAL DETAILS */}
        <Colar1000TechnicalDetails
        name={model.name}
        output={model.output}
        description={model.description}
        />


        {/* UNDERSTANDING POWER AND BATTERY CAPACITY */}
        <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-5">
            <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-green-700">
                Know What You Are Buying
            </p>

            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-950 mt-4">
                500W and 1,000Wh Are Not the Same Thing
            </h2>

            <p className="text-gray-600 leading-8 mt-5">
                Two important specifications determine how a portable power
                station performs: its inverter output and its battery capacity.
                Understanding the difference helps you choose wisely.
            </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <div className="rounded-3xl border border-green-200 bg-green-50 p-7 md:p-9">
                <div className="text-4xl">⚡</div>

                <p className="text-sm font-bold uppercase tracking-wider text-green-800 mt-5">
                Inverter Output
                </p>

                <h3 className="text-3xl font-extrabold text-gray-950 mt-2">
                Watts (W)
                </h3>

                <p className="text-gray-700 leading-7 mt-4">
                Watts describe the amount of electrical power the inverter
                can supply at a particular moment.
                </p>

                <p className="text-gray-700 leading-7 mt-3">
                An appliance's running power and starting surge must both
                be considered when checking compatibility.
                </p>

                <p className="text-sm font-semibold text-green-900 mt-5">
                Think of watts as the power available to run your appliances.
                </p>
            </div>

            <div className="rounded-3xl border border-blue-200 bg-blue-50 p-7 md:p-9">
                <div className="text-4xl">🔋</div>

                <p className="text-sm font-bold uppercase tracking-wider text-blue-800 mt-5">
                Battery Capacity
                </p>

                <h3 className="text-3xl font-extrabold text-gray-950 mt-2">
                Watt-hours (Wh)
                </h3>

               <p className="text-gray-700 leading-7 mt-4">
                    Watt-hours measure how much energy a battery can store. Each
                    Colar1000 unit comes with a 1,004.8Wh LiFePO4 battery, providing
                    stored energy to power your essential appliances and devices.
                    </p>

               <p className="text-gray-700 leading-7 mt-3">
                Your actual backup time will depend on the appliances you connect
                and how much power they consume.
                </p>

                <p className="text-sm font-semibold text-blue-900 mt-5">
                Think of watt-hours as the amount of energy stored for use.
                </p>
            </div>
            </div>

            <div className="rounded-3xl bg-gray-950 text-white p-7 md:p-10 mt-8">
            <h3 className="text-2xl font-extrabold">
                Does a Higher Wattage Mean Longer Runtime?
            </h3>

            <p className="text-gray-300 leading-8 mt-4">
                Not necessarily. A higher inverter rating gives you more
                potential power output, but it does not automatically mean
                the battery stores more energy.
            </p>

            <p className="text-gray-300 leading-8 mt-3">
                Runtime depends on the appliance's actual power consumption,
                usable battery energy, inverter efficiency and operating
                conditions.
            </p>
            </div>

            <div className="rounded-2xl border border-orange-200 bg-orange-50 p-6 mt-8">
            <p className="font-extrabold text-orange-950">
                Our Technical Promise
            </p>

            <p className="text-sm text-orange-900 leading-7 mt-2">
                We will not promise a particular appliance runtime or
                compatibility without checking the actual electrical
                requirements against the manufacturer's specifications.
                At Starntech, accurate information comes before a sale.
            </p>
            </div>
        </div>
        </section>


            {/* APPLIANCE COMPATIBILITY GUIDE */}
            <section className="bg-gray-50 py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-5">
                <div className="max-w-3xl mx-auto text-center">
                <p className="text-sm font-bold uppercase tracking-widest text-green-700">
                    Choose With Confidence
                </p>

                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-950 mt-4">
                    What Can Your Colar1000 Power?
                </h2>

                <p className="text-gray-600 leading-8 mt-5">
                    The answer depends on the wattage of your appliances, their
                    starting power requirements and the power station's inverter
                    capacity. Here is how to understand the difference.
                </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
                <div className="bg-white rounded-2xl border border-gray-200 p-6">
                    <div className="text-3xl">📱</div>
                    <h3 className="text-lg font-extrabold text-gray-950 mt-4">
                    Phones and Small Electronics
                    </h3>
                    <p className="text-sm text-gray-600 leading-7 mt-3">
                    Phone chargers, tablets and similar low-power devices
                    are examples of loads to consider. Check the charger's
                    actual input requirements.
                    </p>
                </div>

                <div className="bg-white rounded-2xl border border-gray-200 p-6">
                    <div className="text-3xl">💻</div>
                    <h3 className="text-lg font-extrabold text-gray-950 mt-4">
                    Laptops and Routers
                    </h3>
                    <p className="text-sm text-gray-600 leading-7 mt-3">
                    Many laptops and internet routers have relatively modest
                    power requirements. Check their power adapters and the
                    available output connections.
                    </p>
                </div>

                <div className="bg-white rounded-2xl border border-gray-200 p-6">
                    <div className="text-3xl">📺</div>
                    <h3 className="text-lg font-extrabold text-gray-950 mt-4">
                    Televisions and Lighting
                    </h3>
                    <p className="text-sm text-gray-600 leading-7 mt-3">
                    LED televisions and LED lighting may be suitable depending
                    on their individual wattage and the combined load.
                    </p>
                </div>

                <div className="bg-white rounded-2xl border border-gray-200 p-6">
                    <div className="text-3xl">🌀</div>
                    <h3 className="text-lg font-extrabold text-gray-950 mt-4">
                    Fans
                    </h3>
                    <p className="text-sm text-gray-600 leading-7 mt-3">
                    Fan compatibility depends on its motor type, running
                    consumption and starting surge. Check the fan's label
                    before connecting it.
                    </p>
                </div>

                <div className="bg-white rounded-2xl border border-gray-200 p-6">
                    <div className="text-3xl">🍹</div>
                    <h3 className="text-lg font-extrabold text-gray-950 mt-4">
                    Blenders and Small Motors
                    </h3>
                    <p className="text-sm text-gray-600 leading-7 mt-3">
                    Motor-driven appliances can draw considerably more power
                    when starting. Their running wattage alone is not enough
                    to determine compatibility.
                    </p>
                </div>
               
                </div>

                <div className="rounded-3xl bg-gray-950 text-white p-7 md:p-10 mt-10">
                <h3 className="text-2xl font-extrabold">
                    Check Before You Connect
                </h3>

                <p className="text-gray-300 leading-8 mt-4">
                    Add together the running wattage of appliances you intend
                    to use simultaneously. The combined load must remain within
                    the power station's rated output. Also check whether any
                    appliance requires extra starting power.
                </p>

                <p className="text-sm font-semibold text-green-300 mt-5">
                    Not sure whether your appliance is compatible? Ask Starntech
                    before placing your order.
                </p>
                </div>
            </div>
            </section>


            {freezerSection}


{/* SOLAR CHARGING GUIDE */}
<section className="bg-white py-16 md:py-24">
  <div className="max-w-7xl mx-auto px-5">
    <div className="max-w-3xl mx-auto text-center">
      <p className="text-sm font-bold uppercase tracking-widest text-green-700">
        Recharge with the Sun
      </p>

      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-950 mt-4">
        Charge Your Colar1000 with Solar Panels
      </h2>

      <p className="text-gray-600 leading-8 mt-5">
        You can recharge your portable power station using compatible
        solar panels. However, choosing the right panel involves more
        than looking at its advertised wattage.
      </p>
    </div>

    {/* CONNECTION DIAGRAM */}
    <div className="max-w-4xl mx-auto mt-12 rounded-3xl border border-gray-200 bg-gray-50 p-6 md:p-10">
      <h3 className="text-lg font-extrabold text-gray-950 text-center">
        How Solar Charging Works
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr] items-center gap-5 mt-8">
        <div className="rounded-2xl bg-white border border-gray-200 p-6 text-center">
          <div className="text-5xl">☀️</div>
          <h4 className="font-extrabold text-gray-950 mt-4">
            Solar Panel
          </h4>
          <p className="text-sm text-gray-600 mt-2">
            Captures energy from sunlight and produces DC electricity.
          </p>
        </div>

        <div className="text-center text-3xl font-extrabold text-green-700">
          →
        </div>

        <div className="rounded-2xl bg-green-50 border border-green-200 p-6 text-center">
          <div className="text-5xl">🔋</div>
          <h4 className="font-extrabold text-gray-950 mt-4">
            Colar1000
          </h4>
          <p className="text-sm text-gray-600 mt-2">
            Receives compatible solar input and stores energy in its battery.
          </p>
        </div>
      </div>

      <p className="text-xs text-gray-500 text-center mt-6 leading-6">
        Illustrative connection flow. Use the manufacturer's approved
        solar cable and connector. Do not connect a panel until its
        electrical specifications have been checked.
      </p>
    </div>

  
        {/* SOLAR PANEL ASSISTANCE */}
        <div className="max-w-3xl mx-auto mt-12">
        <div className="rounded-3xl border-2 border-green-200 bg-white p-7 md:p-10 text-center">
            <div className="text-4xl">☀️</div>

            <h3 className="text-2xl md:text-3xl font-extrabold text-gray-950 mt-4">
            Need a Solar Panel for Your {model.name}?
            </h3>

            <p className="text-gray-600 leading-8 mt-5">
            Not sure which solar panel is right for your power station?
            Don't worry. Starntech can help you choose a compatible solar
            panel based on your location, budget and charging needs.
            </p>

            <p className="text-gray-600 leading-8 mt-4">
            Whether you're considering a 320W, 400W or 500W panel,
            speak with us before purchasing. We'll help you find a
            suitable option for your Colar1000 model.
            </p>

            <div className="rounded-2xl bg-green-50 p-6 mt-7">
            <p className="text-lg font-extrabold text-green-900">
                Buy your power station from us, and let us help you
                get the right solar setup too.
            </p>
            </div>
        </div>
        </div>
        </div>
        </section>





      {/* FREE GIFT PROMOTION */}
            <section className="bg-green-50 py-16 md:py-20">
            <div className="max-w-5xl mx-auto px-5">
                <div className="rounded-3xl bg-white border-2 border-green-200 p-7 md:p-12 text-center shadow-sm">
                <p className="text-sm font-extrabold uppercase tracking-widest text-green-700">
                    Limited Christmas Gift Offer
                </p>

                <div className="text-5xl mt-5">🎁</div>

                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-950 mt-5">
                    Your Colar Solar Fan Is FREE!
                </h2>

                <p className="text-lg text-gray-600 leading-8 mt-5 max-w-2xl mx-auto">
                    Purchase {model.offer.toLowerCase()} and receive
                    one FREE 18-inch Colar Solar Fan as our Christmas gift to you.
                </p>

                <div className="bg-green-50 rounded-2xl p-6 mt-8 max-w-xl mx-auto">
                    <p className="text-sm font-bold uppercase text-green-800">
                    Your gift
                    </p>

                    <p className="text-2xl font-extrabold text-green-900 mt-2">
                    1 FREE 18-inch Colar Solar Fan
                    </p>
                </div>

                <a
                    href="#colar1000-order"
                    className="inline-block w-full sm:w-auto rounded-xl bg-green-700 hover:bg-green-800 text-white font-extrabold text-center px-10 py-4 mt-8 transition"
                >
                    Order Now
                </a>

                <p className="text-sm text-gray-500 mt-5 leading-6">
                    Abuja (FCT): Pay on Delivery in covered areas, subject to address
                    confirmation. Outside Abuja: advance payment is required before
                    dispatch.
                </p>
                </div>
            </div>
            </section>
        {/* ORDER FORM */}
        <section
            id="colar1000-order"
            className="bg-gray-50 py-16 md:py-24"
            >
        <div className="max-w-4xl mx-auto px-5">
          <Colar1000OrderForm
            initialPackage={model.id}
            isSubmitting={isSubmitting}
            onSubmit={handleOrderSubmit}
            />
        </div>
        </section>
      </main>
    </>
  );
}
