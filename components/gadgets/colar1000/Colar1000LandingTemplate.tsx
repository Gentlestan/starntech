
import Head from "next/head";
import Colar1000TechnicalDetails from "./Colar1000TechnicalDetails";
import Colar1000OrderForm from "./Colar1000OrderForm";
import { useState, type ReactNode } from "react";
import type { Colar1000OrderData } from "./Colar1000OrderForm";
import Colar1000Warranty from "./Colar1000Warranty";
import Colar1000HeroCTA from "./ctas/Colar1000HeroCTA";
import Colar1000OrderCTA from "./ctas/Colar1000OrderCTA";
import type { Colar1000Model } from "./types";
import Colar1000StickyOrderButton from "./Colar1000StickyOrderButton";



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

  const pageDescription = `Discover the ${model.name} portable solar power station with ${model.output} inverter output and a 1,004.8Wh LiFePO4 battery. ${model.offer} and get a free 18-inch Colar solar fan.`;


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
                Reliable Backup Power with the {model.name}
                </h1>

                <p className="text-base md:text-lg font-semibold text-green-200 mt-4">
                Portable Solar Power Station
                </p>

                <p className="text-xl md:text-2xl font-bold text-green-300 mt-4">
                {model.output} Inverter Output
                <span className="mx-2 text-green-500">·</span>
                1,004.8Wh LiFePO4 Battery
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

             <Colar1000HeroCTA model={model} />

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
                {model.output} and 1,004.8Wh: What's the Difference?
            </h2>

           <p className="text-gray-600 leading-8 mt-5">
                These two ratings tell you different things: how much power
                the unit can supply and how much energy its battery stores.
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
                Watts tell you how much electrical power the inverter
                can supply at a time. The combined running wattage of
                connected appliances must stay within the unit's rated
                output. Appliances with motors may also require extra
                power when starting.
                </p>

                <p className="text-sm font-semibold text-green-900 mt-5">
                Watts determine how much power your appliances can draw.
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
                Watt-hours measure how much energy the battery stores.
                Each Colar1000 has a 1,004.8Wh LiFePO4 battery. The
                energy available determines how long your appliances
                can run.
                </p>

                <p className="text-sm font-semibold text-blue-900 mt-5">
                Watt-hours tell you how much stored energy is available.
                </p>
            </div>
            </div>

            <div className="rounded-3xl bg-gray-950 text-white p-7 md:p-10 mt-8">
            <h3 className="text-2xl font-extrabold">
                Does Higher Wattage Mean Longer Runtime?
            </h3>

            <p className="text-gray-300 leading-8 mt-4">
                No. A higher inverter rating means the unit can supply
                more power at a time, but it does not mean the battery
                stores more energy.
            </p>

            <p className="text-gray-300 leading-8 mt-3">
                Actual runtime depends on the appliances connected,
                their power consumption and the energy available from
                the battery.
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
                What Can It Power?
            </p>

            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-950 mt-4">
                Appliances You Can Run with the {model.name}
            </h2>

            <p className="text-gray-600 leading-8 mt-5">
                With {model.output} of inverter output and a 1,004.8Wh
                battery, the {model.name} can power a range of everyday
                appliances. What you can run together depends on their
                combined power requirements.
            </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
                <div className="text-3xl">📱</div>
                <h3 className="text-lg font-extrabold text-gray-950 mt-4">
                Phones and Small Electronics
                </h3>
                <p className="text-sm text-gray-600 leading-7 mt-3">
                Charge mobile phones, tablets and other small electronic
                devices.
                </p>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-6">
                <div className="text-3xl">💻</div>
                <h3 className="text-lg font-extrabold text-gray-950 mt-4">
                Laptops and Routers
                </h3>
                <p className="text-sm text-gray-600 leading-7 mt-3">
                Keep your laptops, Wi-Fi routers and other suitable
                office or communication devices running.
                </p>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-6">
                <div className="text-3xl">📺</div>
                <h3 className="text-lg font-extrabold text-gray-950 mt-4">
                TVs and LED Lighting
                </h3>
                <p className="text-sm text-gray-600 leading-7 mt-3">
                Power suitable televisions, LED bulbs and other
                low-power lighting appliances.
                </p>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-6">
                <div className="text-3xl">🌀</div>
                <h3 className="text-lg font-extrabold text-gray-950 mt-4">
                Fans
                </h3>
                <p className="text-sm text-gray-600 leading-7 mt-3">
                Run suitable standing fans, table fans and other
                fans whose power requirements are within the
                inverter's capacity.
                </p>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-6">
                <div className="text-3xl">🍹</div>
                <h3 className="text-lg font-extrabold text-gray-950 mt-4">
                Blenders and Small Appliances
                </h3>
                <p className="text-sm text-gray-600 leading-7 mt-3">
                Some small kitchen appliances may be suitable.
                Check their power ratings and starting requirements
                before connecting them.
                </p>
            </div>

            {model.id === "plus" && (
                <div className="bg-green-50 rounded-2xl border border-green-200 p-6">
                <div className="text-3xl">❄️</div>
                <h3 className="text-lg font-extrabold text-gray-950 mt-4">
                    Selected Refrigerators and Freezers
                </h3>
                <p className="text-sm text-gray-700 leading-7 mt-3">
                    The 500W Colar1000 Plus can power selected
                    refrigerators and chest freezers, including
                    suitable models featured in our compatibility
                    guide below.
                </p>
                <p className="text-sm font-semibold text-green-800 mt-4">
                    See the selected fridge and freezer models below.
                </p>
                </div>
            )}
            </div>

            <div className="rounded-3xl bg-gray-950 text-white p-7 md:p-10 mt-10">
            <h3 className="text-2xl font-extrabold">
                Planning to Run Multiple Appliances?
            </h3>

            <p className="text-gray-300 leading-8 mt-4">
                Add together the running wattage of the appliances
                you want to use at the same time. Their combined
                demand must stay within the {model.output} inverter
                output. Appliances with motors and compressors may
                also need extra power when starting.
            </p>

            <p className="text-sm font-semibold text-green-300 mt-5">
                Not sure whether your appliance is suitable? Send
                Starntech its model number or power rating so we
                can help you check before you order.
            </p>
            </div>
        </div>
        </section>



            {freezerSection}

{/* MID-PAGE ORDER CTA */}
<Colar1000OrderCTA model={model} variant="mid" />

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
            Choosing the right solar panel is important for getting
            the best charging performance from your Colar1000.
            Not every panel is suitable for every model.
            </p>

            <p className="text-gray-600 leading-8 mt-4">
            Tell us your Colar1000 model, location and charging
            needs. Our team will help you identify a suitable
            solar panel for your setup.
            </p>

            <div className="rounded-2xl bg-green-50 p-6 mt-7">
            <p className="text-lg font-extrabold text-green-900">
                Buy your Colar1000 from Starntech and let us help
                you choose the right solar setup.
            </p>
            </div>
        </div>
        </div>
        </div>
        </section>

       {/* FINAL ORDER INVITATION */}
        <Colar1000OrderCTA model={model} variant="final" />


             {/* WARRANTY SUPPORT */}
         <Colar1000Warranty />
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
      <Colar1000StickyOrderButton />
    </>
  );
}
