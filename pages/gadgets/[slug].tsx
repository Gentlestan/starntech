import dynamic from "next/dynamic";
import Head from "next/head";
import { useEffect, useState } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import Link from "next/link";
import { gadgets } from "@/data/gadgets";
import GadgetOrderForm from "@/components/gadgets/GadgetOrderForm";
import Testimonials from "@/components/gadgets/Testimonials";
import CameraUseCases from "@/components/gadgets/CameraUseCases";
import CameraFeatures from "@/components/gadgets/CameraFeatures";
import CameraHowItWorks from "@/components/gadgets/CameraHowItWorks";
import CameraFAQ from "@/components/gadgets/CameraFAQ";
import CameraSupport from "@/components/gadgets/CameraSupport";
import OrderNowButton from "@/components/gadgets/OrderNowButton";
// Colar components — dynamically loaded
const ColarFanIntro = dynamic(
  () => import("@/components/gadgets/colar/ColarFanIntro"),
  { ssr: true }
);

const ColarFanSizeSelector = dynamic(
  () => import("@/components/gadgets/colar/ColarFanSizeSelector"),
  { ssr: true }
);

const ColarFanHeatSection = dynamic(
  () => import("@/components/gadgets/colar/ColarFanHeatSection"),
  { ssr: true }
);

const ColarFanModels = dynamic(
  () => import("@/components/gadgets/colar/ColarFanModels"),
  { ssr: true }
);

const ColarFanBenefits = dynamic(
  () => import("@/components/gadgets/colar/ColarFanBenefits"),
  { ssr: true }
);

const ColarFanTrust = dynamic(
  () => import("@/components/gadgets/colar/ColarFanTrust"),
  { ssr: true }
);

const ColarFanFAQ = dynamic(
  () => import("@/components/gadgets/colar/ColarFanFAQ"),
  { ssr: true }
);



type Gadget = (typeof gadgets)[number];

type GadgetPageProps = {
  gadget: Gadget;
};

export default function GadgetPage({ gadget }: GadgetPageProps) {
  const [selectedMedia, setSelectedMedia] = useState(0);
  const [selectedColour, setSelectedColour] = useState("Black");
  const [isOrderOpen, setIsOrderOpen] = useState(false);
  const [selectedVariantName, setSelectedVariantName] = useState("16-inch");

  useEffect(() => {
  if (window.location.hash === "#order") {
    setIsOrderOpen(true);
  }
}, []);


  const isV380Camera = gadget.slug === "v380-solar-camera";
  const hasColourPricing = "colourPrices" in gadget;
  const variants = "variants" in gadget ? gadget.variants : undefined;

const selectedVariant = variants?.find(
  (variant) => variant.name === selectedVariantName
) ?? variants?.[0];

// Filter the fan gallery to show the selected size.
// Other products retain their existing gallery behaviour.
const allMedia = gadget.media ?? [];


const variantMedia = selectedVariant
  ? allMedia.filter((item) =>
      item.src.includes(
        selectedVariant.name === "16-inch" ? "16-inch" : "18-inch"
      )
    )
  : [];

const orderedVariantMedia = [
  ...variantMedia.filter((item) => item.type === "image"),
  ...variantMedia.filter((item) => item.type === "video"),
];

const media = selectedVariant
  ? variantMedia.length > 0
    ? gadget.slug === "colarhome-solar-rechargeable-fan"
      ? orderedVariantMedia
      : variantMedia
    : allMedia
  : allMedia.slice(0, 6);


const bonusItem = gadget.whats_in_the_box?.find((item) =>
  /free|bonus|clipper|gift/i.test(item)
);

const selectedPrice =
  selectedVariant?.price ??
  gadget.colourPrices?.[
    selectedColour as keyof NonNullable<typeof gadget.colourPrices>
  ] ??
  gadget.price;

const selectedComparePrice =
  selectedVariant?.comparePrice ??
  gadget.colourComparePrices?.[
    selectedColour as keyof NonNullable<typeof gadget.colourComparePrices>
  ] ??
  gadget.comparePrice;

const selectedStock = selectedVariant?.stock ?? gadget.stock;

const hasDiscount = selectedComparePrice > selectedPrice;

const savings = hasDiscount
  ? selectedComparePrice - selectedPrice
  : 0;

const hasLimitedStock = selectedStock > 0 && selectedStock <= 10;

const selectedItem = media[selectedMedia];


// DYNAMIC SEO METADATA
const seoTitle =
  gadget.slug === "v380-solar-camera"
    ? "V380 Max 4G Solar Security Camera | Starntech"
    : gadget.slug === "colarhome-solar-rechargeable-fan"
      ? "ColarHome Solar Rechargeable Fan – 16-inch & 18-inch | Starntech"
      : `${gadget.name} | Starntech`;

const seoDescription =
  gadget.slug === "v380-solar-camera"
    ? "Monitor your property with the V380 Max 4G solar security camera. Enjoy night vision, motion alerts, two-way audio and solar-powered charging."
    : gadget.slug === "colarhome-solar-rechargeable-fan"
      ? "Compare the 16-inch CH-SF3 with a 6,000mAh battery and 18-inch CH-SF04 with a 12,000mAh battery. Both include a 25W solar panel. Pay on delivery."
      : gadget.shortDescription ||
        `Shop the ${gadget.name} at Starntech. Order conveniently with nationwide delivery.`;

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-6 md:py-12">
      {selectedItem.type === "video" &&
        selectedItem.src === "/videos/v380-demo-video.mp4" &&
        selectedItem.thumbnail && (
          <Head>
            <link
              rel="preload"
              as="image"
              href={selectedItem.thumbnail}
              fetchPriority="high"
            />
          </Head>
        )}
      <div className="max-w-6xl mx-auto px-4">

        {/* PREMIUM GALLERY ANIMATIONS */}
        <style jsx>{`
          @keyframes heroFloat {
            0%,
            100% {
              transform: translateY(0) scale(1);
            }

            50% {
              transform: translateY(-5px) scale(1.012);
            }
          }

          @keyframes imageReveal {
            from {
              opacity: 0;
              transform: scale(0.96);
            }

            to {
              opacity: 1;
              transform: scale(1);
            }
          }

          @keyframes thumbnailFloat {
            0%,
            100% {
              transform: translateY(0);
            }

            50% {
              transform: translateY(-2px);
            }
          }

          .hero-float {
            animation:
              heroFloat 4.5s ease-in-out infinite,
              imageReveal 0.5s ease-out;
          }

          .thumbnail-float {
            animation: thumbnailFloat 4s ease-in-out infinite;
          }

          .thumbnail-float:nth-child(2) {
            animation-delay: 0.3s;
          }

          .thumbnail-float:nth-child(3) {
            animation-delay: 0.6s;
          }

          .thumbnail-float:nth-child(4) {
            animation-delay: 0.9s;
          }

          .thumbnail-float:nth-child(5) {
            animation-delay: 1.2s;
          }

          .thumbnail-float:nth-child(6) {
            animation-delay: 1.5s;
          }

          @media (prefers-reduced-motion: reduce) {
            .hero-float,
            .thumbnail-float {
              animation: none;
            }
          }
        `}</style>

        {/* BACK LINK */}
        <Link
          href="/gadgets"
          className="inline-flex items-center text-sm text-green-700 hover:text-green-800 font-medium mb-6 md:mb-8 transition"
        >
          ← Back to Gadgets
        </Link>
        
          {gadget.slug === "colarhome-solar-rechargeable-fan" &&
            variants &&
            selectedVariant && (
              <ColarFanSizeSelector
                variants={variants}
                selectedVariantName={selectedVariantName}
                onSelect={(variantName) => {
                  setSelectedVariantName(variantName);
                  setSelectedMedia(0);
                }}
              />
            )}

        {/* =========================
            PRODUCT HERO
        ========================== */}

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">

          {/* =========================
              PRODUCT MEDIA GALLERY
          ========================== */}

          <div className="w-full">

            {/* MAIN MEDIA */}
            <div className="relative w-full aspect-square rounded-3xl overflow-hidden bg-white border border-gray-100 shadow-sm">

              {selectedItem ? (
                selectedItem.type === "video" ? (
                  <video
                    key={selectedItem.src}
                    src={selectedItem.src}
                    poster={selectedItem.thumbnail}
                    controls
                    playsInline
                    preload="none"
                    className="absolute inset-0 h-full w-full object-contain bg-black"
                  />
                ) : (
                 <Image
                  key={selectedItem.src}
                  src={selectedItem.src}
                  alt={`${gadget.name} - image ${selectedMedia + 1}`}
                  fill
                  loading="eager"
                  fetchPriority={selectedMedia === 0 ? "high" : "auto"}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="hero-float object-contain p-5 md:p-8"
                />
                )
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  Product media coming soon
                </div>
              )}

              {/* MOBILE MEDIA COUNTER */}
              {media.length > 1 && (
                <div className="absolute bottom-4 right-4 md:hidden bg-black/70 text-white text-xs font-medium px-3 py-1.5 rounded-full backdrop-blur-sm">
                  {selectedMedia + 1} / {media.length}
                </div>
              )}

              {/* PRODUCT LABEL */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-gray-700 text-[11px] font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-sm">
                {gadget.name}
              </div>

              {/* OFFER LABEL */}
              {gadget.offerLabel && (
                <div className="absolute top-4 right-4 bg-green-700 text-white text-[11px] font-extrabold uppercase tracking-wide px-3 py-1.5 rounded-full shadow-md">
                  🔥 {gadget.offerLabel}
                </div>
              )}
            </div>

            {/* THUMBNAILS */}
            {media.length > 1 && (
              <div className="grid grid-cols-5 gap-2.5 mt-4">
                {media.map((item, index) => (
                  <button
                    key={`${item.type}-${item.src}`}
                    type="button"
                    onClick={() => setSelectedMedia(index)}
                    aria-label={
                      item.type === "video"
                        ? `Watch ${gadget.name} video`
                        : `View product image ${index}`
                    }
                    aria-pressed={selectedMedia === index}
                    className={`
                      thumbnail-float
                      group
                      relative
                      aspect-square
                      rounded-xl
                      overflow-hidden
                      bg-white
                      border-2
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:scale-[1.03]
                      hover:shadow-md
                      focus:outline-none
                      focus:ring-2
                      focus:ring-green-600
                      focus:ring-offset-2
                      ${
                        selectedMedia === index
                          ? "border-green-700 shadow-md scale-[1.02]"
                          : "border-gray-100 hover:border-gray-300"
                      }
                    `}
                  >

                    {item.type === "video" ? (
                      <div className="relative h-full w-full bg-black">

                        {item.thumbnail && (
                          <Image
                            src={item.thumbnail}
                            alt={`${gadget.name} video thumbnail`}
                            fill
                            sizes="(max-width: 768px) 20vw, 10vw"
                            className="object-cover opacity-70"
                          />
                        )}

                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white/95 text-green-700 shadow-lg text-sm pl-0.5">
                            ▶
                          </span>
                        </div>

                        <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 bg-black/70 text-white text-[9px] font-bold px-2 py-0.5 rounded-full">
                          VIDEO
                        </span>
                      </div>
                    ) : (
                      <Image
                        src={item.src}
                        alt={`${gadget.name} thumbnail ${index}`}
                        fill
                        sizes="(max-width: 768px) 20vw, 10vw"
                        className="object-contain p-1.5 transition-transform duration-500 group-hover:scale-110"
                      />
                    )}

                    {selectedMedia === index && (
                      <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-5 h-1 rounded-full bg-green-700" />
                    )}
                  </button>
                ))}
              </div>
            )}

            <p className="text-xs text-gray-400 text-center mt-3">
              {media.length > 1
                ? `Select a ${media[selectedMedia]?.type === "video" ? "video or image" : "media item"} to explore ${gadget.name}`
                : `Product media of ${gadget.name}`}
            </p>
          </div>

          {/* =========================
              PRODUCT INFORMATION
          ========================== */}

          <div className="flex flex-col justify-center mt-2 lg:mt-0">

            {/* OFFER LABEL */}
            <div className="flex flex-wrap items-center gap-2">
              {gadget.offerLabel && (
                <div className="inline-flex w-fit items-center gap-2 bg-green-700 text-white rounded-full px-3.5 py-1.5 text-xs md:text-sm font-extrabold">
                  🔥 {gadget.offerLabel}
                </div>
              )}

              {bonusItem && (
                <div className="inline-flex w-fit items-center gap-2 bg-green-100 text-green-800 rounded-full px-3.5 py-1.5 text-xs md:text-sm font-bold">
                  🎁 Bonus Included
                </div>
              )}
            </div>

            {/* STOCK URGENCY */}
            {hasLimitedStock && (
              <div className="mt-4 inline-flex w-fit items-center gap-2 bg-orange-50 border border-orange-200 text-orange-800 rounded-lg px-3 py-2 text-sm font-bold">
                ⚡ Only {selectedStock}{" "}
                {selectedStock === 1 ? "unit" : "units"} available
              </div>
            )}

            {/* CATEGORY */}
            <p className="text-sm uppercase tracking-wide text-green-700 font-semibold mt-4">
              {gadget.category}
            </p>

          {/* TITLE AND PRODUCT INTRODUCTION */}
<div className="mt-2">
  {isV380Camera ? (
    <>
      <p className="text-sm font-bold uppercase tracking-wider text-green-700">
        V380 Max 4G Solar Security Camera
      </p>

      <h1 className="text-3xl md:text-5xl font-extrabold text-gray-950 mt-3 leading-tight">
        Let the Camera Be Your Eyes, Even When You're Not There.
      </h1>

      <p className="text-gray-700 text-base md:text-lg leading-7 mt-4 max-w-xl">
        Whether you're at home, running your business or away from
        your property, stay connected to what's happening around you.
        Monitor your surroundings from your phone, receive motion
        alerts and communicate through two-way audio.
      </p>

      <p className="text-gray-600 text-sm md:text-base leading-7 mt-3 max-w-xl">
        No Wi-Fi router required. Simply connect a 4G SIM card,
        enjoy solar-powered charging and monitor your property
        even at night.
      </p>
    </>
  ) : (
    <>
      {gadget.slug === "colarhome-solar-rechargeable-fan" ? (
        <ColarFanIntro />
      ) : (
        <>
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-950 mt-2 leading-tight">
            {gadget.name}
          </h1>

          {gadget.shortDescription && (
            <p className="text-gray-600 text-base md:text-lg leading-7 mt-4 max-w-xl">
              {gadget.shortDescription}
            </p>
          )}
        </>
      )}
    </>
  )}
</div>



        {gadget.slug !== "colarhome-solar-rechargeable-fan" &&
          variants &&
          selectedVariant && (
          <div className="mt-5 rounded-xl border border-gray-200 bg-white p-4">
            <h3 className="text-sm font-bold text-gray-900">
              Select Fan Size
            </h3>

            <div className="mt-3 grid grid-cols-2 gap-3">
              {variants.map((variant) => {
                const isSelected = selectedVariant.name === variant.name;

                return (
                  <button
                    key={variant.name}
                    type="button"
                    onClick={() => {
                      setSelectedVariantName(variant.name);
                      setSelectedMedia(0);
                    }}
                    aria-pressed={isSelected}
                    className={`rounded-xl border-2 p-3 text-left transition ${
                      isSelected
                        ? "border-green-700 bg-green-50 ring-2 ring-green-100"
                        : "border-gray-200 bg-white hover:border-gray-400"
                    }`}
                  >
                    <span className="block font-bold text-gray-900">
                      {variant.name}
                    </span>

                    <span className="block mt-1 text-sm font-bold text-green-800">
                      ₦{variant.price.toLocaleString("en-NG")}
                    </span>

                    <span className="block mt-1 text-xs text-gray-500">
                      {variant.model}
                    </span>

                    <span className="block mt-2 text-xs text-gray-500">
                      {variant.stock} available
                    </span>

                    {isSelected && (
                      <span className="block mt-2 text-xs font-bold text-green-700">
                        ✓ Selected
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        )}
                    
        {"colourAvailability" in gadget && gadget.colourAvailability && (
          <div className="mt-4 rounded-xl border border-gray-200 bg-white p-4">
            <h3 className="text-sm font-bold text-gray-900">
              Select Colour
            </h3>

            <div className="mt-3 flex flex-wrap gap-3">
              {gadget.colourAvailability.available.map((colour) => {
                const isSelected = selectedColour === colour;

                const colourPrice =
                  gadget.colourPrices?.[
                    colour as keyof NonNullable<typeof gadget.colourPrices>
                  ] ?? gadget.price;

                return (
                  <button
                    key={colour}
                    type="button"
                    onClick={() => setSelectedColour(colour)}
                    aria-pressed={isSelected}
                    className={`inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm font-semibold transition ${
                      isSelected
                        ? "border-blue-600 bg-blue-50 text-blue-800 ring-2 ring-blue-200"
                        : "border-gray-200 bg-white text-gray-700 hover:border-gray-400"
                    }`}
                  >
                    <span
                      className={`h-4 w-4 rounded-full border border-gray-400 ${
                        colour.toLowerCase() === "white"
                          ? "bg-white"
                          : "bg-black"
                      }`}
                    />

                    {colour}

                    <span className="font-bold">
                      — ₦{colourPrice.toLocaleString("en-NG")}
                    </span>

                    {isSelected && <span>✓</span>}
                  </button>
                );
              })}

              {gadget.colourAvailability.outOfStock.map((colour) => (
                <div
                  key={colour}
                  className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-500"
                >
                  <span className="h-4 w-4 rounded-full border border-gray-300 bg-white" />
                  <span className="line-through">{colour}</span>
                  — Out of Stock
                </div>
              ))}
            </div>

            <p className="mt-3 text-sm font-medium text-gray-600">
              {gadget.colourAvailability.notice}
            </p>
          </div>
        )}

            {/* PRICE */}
            <div className="mt-6">

              {hasDiscount && (
                <div className="flex items-center gap-3 flex-wrap">
                  <p className="text-sm md:text-base text-gray-400 line-through font-medium">
                    Market price: ₦
                    {selectedComparePrice.toLocaleString("en-NG")}
                  </p>

                  <span className="inline-flex items-center bg-green-100 text-green-800 rounded-full px-2.5 py-1 text-xs font-bold">
                    Save ₦{savings.toLocaleString("en-NG")}
                  </span>
                </div>
              )}

              <p className="text-xs uppercase tracking-wider font-semibold text-gray-500 mt-2">
                Special offer price
              </p>

              <div className="flex items-end gap-3 mt-1">
                <p className="text-4xl md:text-5xl font-extrabold text-gray-950">
                  ₦{selectedPrice.toLocaleString("en-NG")}
                </p>
              </div>

              <p className="text-sm text-gray-500 mt-2">
                Pay only when your order arrives.
              </p>
            </div>

            {/* QUICK BENEFIT STRIP */}
            <div className="grid grid-cols-3 gap-2 mt-6">

              <div className="rounded-xl bg-green-50 border border-green-100 p-3 text-center">
                <div className="text-lg">💳</div>
                <p className="text-[11px] md:text-xs font-semibold text-green-900 mt-1">
                  Pay on Delivery
                </p>
              </div>

              <div className="rounded-xl bg-green-50 border border-green-100 p-3 text-center">
                <div className="text-lg">🚚</div>
                <p className="text-[11px] md:text-xs font-semibold text-green-900 mt-1">
                  {gadget.freeDelivery
                    ? "Free Delivery"
                    : "Nationwide Delivery"}
                </p>
              </div>

              {bonusItem ? (
                <div className="rounded-xl bg-green-50 border border-green-100 p-3 text-center">
                  <div className="text-lg">🎁</div>
                  <p className="text-[11px] md:text-xs font-semibold text-green-900 mt-1">
                    Bonus Included
                  </p>
                </div>
              ) : (
                <div className="rounded-xl bg-green-50 border border-green-100 p-3 text-center">
                  <div className="text-lg">✓</div>
                  <p className="text-[11px] md:text-xs font-semibold text-green-900 mt-1">
                    Easy Ordering
                  </p>
                </div>
              )}
            </div>

            {/* PAYMENT */}
            {gadget.paymentDescription && (
              <div className="mt-5 rounded-2xl bg-green-50 border border-green-100 p-5">
                <div className="flex items-start gap-3">
                  <span className="text-xl">💳</span>

                  <div>
                    <h2 className="font-bold text-green-900">
                      Pay When Your Order Arrives
                    </h2>

                    <p className="text-sm text-green-800 mt-1 leading-6">
                      {gadget.paymentDescription}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* DELIVERY */}
            {gadget.deliveryDescription && (
              <div className="mt-3 rounded-2xl bg-white border border-gray-100 p-5">
                <div className="flex items-start gap-3">
                  <span className="text-xl">🚚</span>

                  <div>
                    <h2 className="font-bold text-gray-900">
                      {gadget.freeDelivery
                        ? "Free Nationwide Delivery"
                        : "Nationwide Delivery"}
                    </h2>

                    <p className="text-sm text-gray-600 mt-1 leading-6">
                      {gadget.deliveryDescription}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {gadget.cameraSupport && (
            <div className="mt-4 px-1 text-sm text-gray-500">
              <span className="font-semibold text-gray-700">
                Camera Support:
              </span>{" "}
              {gadget.cameraSupport}
            </div>
          )}

            {/* URGENCY BOX */}
            {(hasDiscount ||
              hasLimitedStock ||
              gadget.freeDelivery) && (
              <div className="mt-4 rounded-2xl border border-green-200 bg-green-50 p-4">
                <div className="flex flex-col gap-2 text-sm">

                  {hasDiscount && (
                    <p className="font-bold text-green-900">
                      🔥 Special offer: Save ₦
                      {savings.toLocaleString("en-NG")} on this order.
                    </p>
                  )}

                  {hasLimitedStock && (
                    <p className="font-semibold text-orange-800">
                      ⚡ Only {selectedStock}{" "}
                      {selectedStock === 1 ? "unit" : "units"} currently
                      available.
                    </p>
                  )}

                  {gadget.freeDelivery && (
                    <p className="font-semibold text-green-800">
                      🚚 Free nationwide delivery included.
                    </p>
                  )}
                </div>
              </div>
            )}

            {/* PRIMARY CTA */}
            <OrderNowButton
              slug={gadget.slug}
              onClick={() => setIsOrderOpen(true)}
              className="w-full mt-6 text-base md:text-lg shadow-lg shadow-green-700/20"
            />

            <p className="text-xs text-gray-500 text-center mt-3">
              No online payment required. We confirm your order before
              dispatch.
            </p>
          </div>
        </div>

        {gadget.slug === "colarhome-solar-rechargeable-fan" &&
          selectedVariant && (
            <ColarFanHeatSection
              imageSrc={
                media.find((item) => item.type === "image")?.src ??
                media.find((item) => item.type === "video")?.thumbnail
              }
              imageAlt={`${selectedVariant.name} ColarHome Solar Fan`}
              onOrderClick={() => setIsOrderOpen(true)}
            />
          )}


          {gadget.slug === "colarhome-solar-rechargeable-fan" &&
          variants && (
            <ColarFanModels
              variants={variants}
              selectedVariantName={selectedVariantName}
              onSelectVariant={(variantName) => {
                setSelectedVariantName(variantName);
                setSelectedMedia(0);
              }}
              onOrderClick={() => {
                setIsOrderOpen(true);

                document.getElementById("order")?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}
            />
          )}

        {/* =========================
            TRUST / BENEFIT STRIP
        ========================== */}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-12 md:mt-16">

          <div className="bg-white border border-gray-100 rounded-2xl p-4 text-center">
            <div className="text-2xl">🇳🇬</div>
            <h3 className="font-bold text-gray-900 text-sm mt-2">
              Nationwide
            </h3>
            <p className="text-xs text-gray-500 mt-1">
              We deliver across Nigeria
            </p>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-4 text-center">
            <div className="text-2xl">💳</div>
            <h3 className="font-bold text-gray-900 text-sm mt-2">
              Pay on Delivery
            </h3>
            <p className="text-xs text-gray-500 mt-1">
              Pay when your order arrives
            </p>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-4 text-center">
            <div className="text-2xl">📞</div>
            <h3 className="font-bold text-gray-900 text-sm mt-2">
              Order Confirmation
            </h3>
            <p className="text-xs text-gray-500 mt-1">
              We contact you before dispatch
            </p>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-4 text-center">
            <div className="text-2xl">🛍️</div>
            <h3 className="font-bold text-gray-900 text-sm mt-2">
              Genuine Store
            </h3>
            <p className="text-xs text-gray-500 mt-1">
              Shop with StarnTech Gadgets
            </p>
          </div>
        </div>


          {isV380Camera && (
      <>
        <CameraUseCases />F

        <div className="mt-8 mb-8 text-center">
          <OrderNowButton
            slug={gadget.slug}
            onClick={() => setIsOrderOpen(true)}
            className="w-full sm:w-auto text-base md:text-lg shadow-lg shadow-green-700/20"
          />
        </div>
      </>
    )}

    <Testimonials slug={gadget.slug} />

        {/* PRODUCT DETAILS GRID */}

          {gadget.slug === "v380-solar-camera" ? (
            <>
              {/* V380 SPECIFIC FEATURES */}
              <CameraFeatures />

              <div className="mt-8 mb-8 text-center">
                <OrderNowButton
                  slug={gadget.slug}
                  onClick={() => setIsOrderOpen(true)}
                  className="w-full sm:w-auto text-base md:text-lg shadow-lg shadow-green-700/20"
                />
              </div>
              

              {/* WHAT'S INCLUDED */}
              <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
                <p className="text-sm font-semibold text-green-700 uppercase tracking-wide">
                  In the package
                </p>

                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2">
                  What You Get
                </h2>

                <ul className="mt-6 space-y-4">
                  {gadget.whats_in_the_box.map((item) => {
                    const isBonus = /free|bonus|clipper|gift/i.test(item);

                    return (
                      <li
                        key={item}
                        className={`flex items-start gap-3 text-sm md:text-base ${
                          isBonus
                            ? "font-bold text-green-800 bg-green-50 rounded-xl p-3"
                            : "text-gray-700"
                        }`}
                      >
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 text-green-700 flex items-center justify-center text-xs font-bold">
                          ✓
                        </span>

                        <span className="leading-6">
                          {isBonus && "🎁 "}
                          {item}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
               <CameraHowItWorks />
               <CameraFAQ />

                  <div className="mt-8 mb-8 text-center">
                    <OrderNowButton
                      slug={gadget.slug}
                      onClick={() => setIsOrderOpen(true)}
                      className="w-full sm:w-auto text-base md:text-lg shadow-lg shadow-green-700/20"
                    />
                  </div>

               <CameraSupport />
              </>
              ) : gadget.slug === "colarhome-solar-rechargeable-fan" ? (
                <>
                  {/* SECTION 4: WHY CHOOSE COLAR */}
                  <ColarFanBenefits
                    imageSrc={media.find((item) => item.type === "image")?.src}
                    imageAlt={`${selectedVariant?.name ?? "ColarHome"} Solar Fan`}
                    selectedVariantName={selectedVariantName}
                    onOrderClick={() => {
                      setIsOrderOpen(true);
                      document.getElementById("order")?.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }}
                  />

                  {/* SECTION 5: WHY BUY FROM STARNTECH */}
                 <ColarFanTrust
                  imageSrc={media.find((item) => item.type === "image")?.src}
                  imageAlt={`${selectedVariant?.name ?? "ColarHome"} Solar Fan`}
                  onOrderClick={() => {
                    setIsOrderOpen(true);
                    document.getElementById("order")?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }}
                />

                {/* SECTION 6: FAQ AND FINAL ORDER */}
                  <ColarFanFAQ
                    imageSrc={media.find((item) => item.type === "image")?.src}
                    imageAlt={`${selectedVariant?.name ?? "ColarHome"} Solar Fan`}
                    selectedVariantName={selectedVariantName}
                    onOrderClick={() => {
                      setIsOrderOpen(true);

                      document.getElementById("order")?.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }}
                  />
                </>
              ) : (
            /* OTHER PRODUCTS: FEATURES AND PACKAGE SIDE BY SIDE */
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
              {/* GENERAL FEATURES */}
              <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
                <p className="text-sm font-semibold text-green-700 uppercase tracking-wide">
                  Why you'll love it
                </p>

                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2">
                  Key Features
                </h2>

                <ul className="mt-6 space-y-4">
                  {gadget.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-gray-700 text-sm md:text-base"
                    >
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 text-green-700 flex items-center justify-center text-xs font-bold">
                        ✓
                      </span>

                      <span className="leading-6">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* WHAT'S INCLUDED */}
              <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
                <p className="text-sm font-semibold text-green-700 uppercase tracking-wide">
                  In the package
                </p>

                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2">
                  What You Get
                </h2>

                <ul className="mt-6 space-y-4">
                  {gadget.whats_in_the_box.map((item) => {
                    const isBonus = /free|bonus|clipper|gift/i.test(item);

                    return (
                      <li
                        key={item}
                        className={`flex items-start gap-3 text-sm md:text-base ${
                          isBonus
                            ? "font-bold text-green-800 bg-green-50 rounded-xl p-3"
                            : "text-gray-700"
                        }`}
                      >
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 text-green-700 flex items-center justify-center text-xs font-bold">
                          ✓
                        </span>

                        <span className="leading-6">
                          {isBonus && "🎁 "}
                          {item}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          )}
        {/* =========================
            MID-PAGE CTA
        ========================== */}

        <div className="mt-12 md:mt-16 rounded-3xl bg-green-700 px-6 py-8 md:px-10 md:py-10 text-center">

          {gadget.offerLabel && (
            <p className="text-green-100 text-sm font-bold uppercase tracking-wide">
              🔥 {gadget.offerLabel}
            </p>
          )}

          <h2 className="text-2xl md:text-3xl font-extrabold text-white mt-2">
            Get {gadget.name} today
          </h2>

          {hasDiscount && (
            <div className="mt-4 flex items-center justify-center gap-3 flex-wrap">
              <span className="text-green-100 line-through text-sm">
                ₦{selectedComparePrice.toLocaleString("en-NG")}
              </span>

              <span className="text-white text-2xl md:text-3xl font-extrabold">
                ₦{selectedPrice.toLocaleString("en-NG")}
              </span>

              <span className="bg-white/15 text-white rounded-full px-3 py-1 text-xs font-bold">
                Save ₦{savings.toLocaleString("en-NG")}
              </span>
            </div>
          )}

          <p className="text-green-50 text-sm md:text-base mt-3 max-w-xl mx-auto">
            Order online and enjoy the convenience of paying when your
            order arrives.
          </p>

          {hasLimitedStock && (
            <p className="text-white text-sm font-bold mt-4">
              ⚡ Only {selectedStock}{" "}
              {selectedStock === 1 ? "unit" : "units"} available
            </p>
          )}

          {gadget.freeDelivery && (
            <p className="text-green-100 text-sm font-semibold mt-2">
              🚚 Free nationwide delivery included
            </p>
          )}

          <OrderNowButton
            slug={gadget.slug}
            onClick={() => setIsOrderOpen(true)}
            className="mt-6 bg-white text-green-800 px-7 py-4 hover:bg-gray-50 shadow-lg"
          />
        </div>

        {/* =========================
            ORDER SECTION
        ========================== */}

        <div
          id="order"
          className="mt-14 md:mt-20 scroll-mt-6"
        >
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">
              Ready to place your order?
            </h2>

            <p className="text-gray-600 text-sm md:text-base mt-2">
              Complete your order and pay when your camera arrives.
            </p>

            <button
              type="button"
              onClick={() => setIsOrderOpen((open) => !open)}
              aria-expanded={isOrderOpen}
              aria-controls="order-form-panel"
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-xl bg-green-700 px-7 py-3.5 text-white font-bold hover:bg-green-800 transition"
            >
              {isOrderOpen ? "Hide Order Form" : "Open Order Form"}
              <span>{isOrderOpen ? "↑" : "→"}</span>
            </button>
          </div>

                    {isOrderOpen && (
            <div
              id="order-form-panel"
              className="bg-gray-950 rounded-3xl p-6 md:p-10 shadow-xl"
            >
              {/* ORDER HEADER */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center rounded-full bg-green-500/10 border border-green-500/20 px-3 py-1.5">
                  <span className="text-green-400 font-semibold text-xs">
                    SECURE YOUR ORDER
                  </span>
                </div>

                <h2 className="text-2xl md:text-4xl font-extrabold text-white mt-4">
                  Order {gadget.name}
                </h2>

                <p className="text-gray-300 max-w-2xl mx-auto mt-4 leading-7">
                  Fill out the form below. We'll contact you to confirm your
                  order, location and delivery details before dispatch.
                </p>

                {"colourAvailability" in gadget &&
                  gadget.colourAvailability && (
                    <div className="mx-auto mt-5 max-w-md rounded-xl border border-green-500/30 bg-green-500/10 p-4 text-left">
                      <p className="font-bold text-white">
                        Available Colours:{" "}
                        {gadget.colourAvailability.available.join(", ")}
                      </p>

                      <p className="mt-1 text-sm text-gray-300">
                        {gadget.colourAvailability.notice}
                      </p>
                    </div>
                  )}

                {hasLimitedStock && (
                  <div className="inline-flex items-center gap-2 mt-5 rounded-full bg-orange-500/10 border border-orange-500/20 px-4 py-2">
                    <span className="text-orange-300 text-sm font-bold">
                      ⚡ Only {selectedStock}{" "}
                      {selectedStock === 1 ? "unit" : "units"} available
                    </span>
                  </div>
                )}
              </div>

              {/* ORDER SUMMARY */}
              <div className="max-w-md mx-auto mt-6 rounded-2xl bg-white/5 border border-white/10 p-4">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-gray-300 text-sm">
                    {gadget.name}
                  </span>

                  <span className="text-white font-bold">
                    ₦{selectedPrice.toLocaleString("en-NG")}
                  </span>
                </div>

                {hasDiscount && (
                  <>
                    <div className="border-t border-white/10 mt-3 pt-3 flex items-center justify-between gap-4">
                      <span className="text-gray-400 text-sm">
                        Market price
                      </span>

                      <span className="text-gray-400 text-sm line-through">
                        ₦{selectedComparePrice.toLocaleString("en-NG")}
                      </span>
                    </div>

                    <div className="border-t border-white/10 mt-3 pt-3 flex items-center justify-between gap-4">
                      <span className="text-green-400 text-sm font-semibold">
                        You save
                      </span>

                      <span className="text-green-400 text-sm font-bold">
                        ₦{savings.toLocaleString("en-NG")}
                      </span>
                    </div>
                  </>
                )}

                <div className="border-t border-white/10 mt-3 pt-3 flex items-center justify-between gap-4">
                  <span className="text-green-400 text-sm font-semibold">
                    Payment
                  </span>

                  <span className="text-gray-200 text-sm">
                    On Delivery
                  </span>
                </div>

                {gadget.freeDelivery && (
                  <div className="border-t border-white/10 mt-3 pt-3 flex items-center justify-between gap-4">
                    <span className="text-green-400 text-sm font-semibold">
                      Delivery
                    </span>

                    <span className="text-gray-200 text-sm">
                      FREE
                    </span>
                  </div>
                )}

                {bonusItem && (
                  <div className="border-t border-white/10 mt-3 pt-3 flex items-center justify-between gap-4">
                    <span className="text-green-400 text-sm font-semibold">
                      Bonus
                    </span>

                    <span className="text-gray-200 text-sm text-right">
                      Included
                    </span>
                  </div>
                )}
              </div>

              {/* ORDER FORM */}
              <GadgetOrderForm
                productName={gadget.name}
                price={selectedPrice}
                colour={hasColourPricing ? selectedColour : undefined}
                variant={selectedVariant?.name}
                model={selectedVariant?.model}
              />
            </div>
          )}
          </div>

        {/* FINAL REASSURANCE */}
        <div className="text-center mt-8 md:mt-10 pb-24 md:pb-4">
          <p className="text-sm text-gray-500">
            🔒 Your information is used only to process and confirm your
            order.
          </p>
        </div>
      </div>

      {/* =========================
          MOBILE STICKY CTA
      ========================== */}

      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 px-4 py-3 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
        <div className="flex items-center gap-3 max-w-6xl mx-auto">

          <div className="min-w-0 flex-1">
            <p className="text-[11px] text-gray-500 font-medium truncate">
              {gadget.name}
            </p>

            <div className="flex items-center gap-2">
              <p className="text-lg font-extrabold text-gray-950">
                ₦{selectedPrice.toLocaleString("en-NG")}
              </p>

              {hasDiscount && (
                <p className="text-xs text-gray-400 line-through">
                  ₦{selectedComparePrice.toLocaleString("en-NG")}
                </p>
              )}
            </div>
          </div>

          <OrderNowButton
            slug={gadget.slug}
            onClick={() => setIsOrderOpen(true)}
            className="flex-shrink-0 px-3 py-2.5 text-xs"
          />
        </div>
      </div>
    </section>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: gadgets.map((gadget) => ({
      params: {
        slug: gadget.slug,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<GadgetPageProps> = async ({
  params,
}) => {
  const slug = params?.slug;

  const gadget = gadgets.find((item) => item.slug === slug);

  if (!gadget) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      gadget,
    },
  };
};