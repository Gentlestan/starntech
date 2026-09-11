import { useState } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import Link from "next/link";
import { gadgets } from "@/data/gadgets";
import GadgetOrderForm from "@/components/gadgets/GadgetOrderForm";

type Gadget = (typeof gadgets)[number];

type GadgetPageProps = {
  gadget: Gadget;
};

export default function GadgetPage({ gadget }: GadgetPageProps) {
  const [selectedMedia, setSelectedMedia] = useState(0);

  // Product media: video first when available, followed by images
  const media = gadget.media?.slice(0, 6) ?? [];

  // Detect whether the product has a bonus/free item
  const bonusItem = gadget.whats_in_the_box?.find((item) =>
    /free|bonus|clipper|gift/i.test(item)
  );

  const hasDiscount = gadget.comparePrice > gadget.price;

  const savings = hasDiscount
    ? gadget.comparePrice - gadget.price
    : 0;

  const hasLimitedStock =
    gadget.stock > 0 && gadget.stock <= 10;

  const selectedItem = media[selectedMedia];

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-6 md:py-12">
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
                    preload="metadata"
                    className="absolute inset-0 h-full w-full object-contain bg-black"
                  />
                ) : (
                  <Image
                    key={selectedItem.src}
                    src={selectedItem.src}
                    alt={`${gadget.name} - image ${selectedMedia + 1}`}
                    fill
                    priority={selectedMedia === 0}
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
                ⚡ Only {gadget.stock}{" "}
                {gadget.stock === 1 ? "unit" : "units"} available
              </div>
            )}

            {/* CATEGORY */}
            <p className="text-sm uppercase tracking-wide text-green-700 font-semibold mt-4">
              {gadget.category}
            </p>

            {/* TITLE */}
            <h1 className="text-3xl md:text-5xl font-extrabold text-gray-950 mt-2 leading-tight">
              {gadget.name}
            </h1>

            {/* SHORT DESCRIPTION */}
            {gadget.shortDescription && (
              <p className="text-gray-600 text-base md:text-lg leading-7 mt-4 max-w-xl">
                {gadget.shortDescription}
              </p>
            )}

            {/* PRICE */}
            <div className="mt-6">

              {hasDiscount && (
                <div className="flex items-center gap-3 flex-wrap">
                  <p className="text-sm md:text-base text-gray-400 line-through font-medium">
                    Market price: ₦
                    {gadget.comparePrice.toLocaleString("en-NG")}
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
                  ₦{gadget.price.toLocaleString("en-NG")}
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
                      ⚡ Only {gadget.stock}{" "}
                      {gadget.stock === 1 ? "unit" : "units"} currently
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
            <Link
              href={`/gadgets/${gadget.slug}#order`}
              className="w-full mt-6 inline-flex items-center justify-center px-6 py-4.5 rounded-xl bg-green-700 text-white font-bold text-base md:text-lg hover:bg-green-800 active:scale-[0.99] transition shadow-lg shadow-green-700/20"
            >
              Order Now — Pay on Delivery
              <span className="ml-2">→</span>
            </Link>

            <p className="text-xs text-gray-500 text-center mt-3">
              No online payment required. We confirm your order before
              dispatch.
            </p>
          </div>
        </div>

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

        {/* =========================
            PRODUCT DETAILS
        ========================== */}

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mt-14 md:mt-20">

          {/* FEATURES */}
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

                  <span className="leading-6">
                    {feature}
                  </span>
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
                const isBonus =
                  /free|bonus|clipper|gift/i.test(item);

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
                ₦{gadget.comparePrice.toLocaleString("en-NG")}
              </span>

              <span className="text-white text-2xl md:text-3xl font-extrabold">
                ₦{gadget.price.toLocaleString("en-NG")}
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
              ⚡ Only {gadget.stock}{" "}
              {gadget.stock === 1 ? "unit" : "units"} available
            </p>
          )}

          {gadget.freeDelivery && (
            <p className="text-green-100 text-sm font-semibold mt-2">
              🚚 Free nationwide delivery included
            </p>
          )}

          <Link
            href={`/gadgets/${gadget.slug}#order`}
            className="mt-6 inline-flex items-center justify-center bg-white text-green-800 px-7 py-4 rounded-xl font-bold hover:bg-gray-50 transition shadow-lg"
          >
            Order Now — Pay on Delivery
            <span className="ml-2">→</span>
          </Link>
        </div>

        {/* =========================
            ORDER SECTION
        ========================== */}

        <div
          id="order"
          className="mt-14 md:mt-20 scroll-mt-6"
        >
          <div className="bg-gray-950 rounded-3xl p-6 md:p-10 shadow-xl">

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

              {hasLimitedStock && (
                <div className="inline-flex items-center gap-2 mt-5 rounded-full bg-orange-500/10 border border-orange-500/20 px-4 py-2">
                  <span className="text-orange-300 text-sm font-bold">
                    ⚡ Only {gadget.stock}{" "}
                    {gadget.stock === 1 ? "unit" : "units"} available
                  </span>
                </div>
              )}

              {/* ORDER SUMMARY */}
              <div className="max-w-md mx-auto mt-6 rounded-2xl bg-white/5 border border-white/10 p-4">

                <div className="flex items-center justify-between gap-4">
                  <span className="text-gray-300 text-sm">
                    {gadget.name}
                  </span>

                  <span className="text-white font-bold">
                    ₦{gadget.price.toLocaleString("en-NG")}
                  </span>
                </div>

                {hasDiscount && (
                  <>
                    <div className="border-t border-white/10 mt-3 pt-3 flex items-center justify-between gap-4">
                      <span className="text-gray-400 text-sm">
                        Market price
                      </span>

                      <span className="text-gray-400 text-sm line-through">
                        ₦{gadget.comparePrice.toLocaleString("en-NG")}
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
            </div>

            {/* ORDER FORM */}
            <GadgetOrderForm
              productName={gadget.name}
              price={gadget.price}
            />
          </div>
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
                ₦{gadget.price.toLocaleString("en-NG")}
              </p>

              {hasDiscount && (
                <p className="text-xs text-gray-400 line-through">
                  ₦{gadget.comparePrice.toLocaleString("en-NG")}
                </p>
              )}
            </div>
          </div>

          <Link
            href={`/gadgets/${gadget.slug}#order`}
            className="flex-shrink-0 inline-flex items-center justify-center bg-green-700 hover:bg-green-800 text-white px-5 py-3 rounded-xl font-bold text-sm shadow-md shadow-green-700/20 transition"
          >
            Order Now →
          </Link>
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