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
  const [selectedImage, setSelectedImage] = useState(0);

  // Use only the first 5 product images
  const images = gadget.images?.slice(0, 5) ?? [];

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-10 md:py-20">
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
          className="inline-flex items-center text-sm text-green-700 hover:text-green-800 font-medium mb-8 transition"
        >
          ← Back to Gadgets
        </Link>

        {/* PRODUCT HERO */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">

          {/* =========================
              PRODUCT IMAGE GALLERY
          ========================== */}
          <div className="w-full">

            {/* MAIN IMAGE */}
            <div className="relative w-full aspect-square rounded-3xl overflow-hidden bg-white border border-gray-100 shadow-sm">

              {images.length > 0 ? (
                <Image
                  key={images[selectedImage]}
                  src={images[selectedImage]}
                  alt={`${gadget.name} - image ${selectedImage + 1}`}
                  fill
                  priority={selectedImage === 0}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="hero-float object-contain p-5 md:p-8"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  Product image coming soon
                </div>
              )}

              {/* MOBILE IMAGE COUNTER */}
              {images.length > 1 && (
                <div className="absolute bottom-4 right-4 md:hidden bg-black/70 text-white text-xs font-medium px-3 py-1.5 rounded-full backdrop-blur-sm">
                  {selectedImage + 1} / {images.length}
                </div>
              )}

              {/* PRODUCT IMAGE LABEL */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-gray-700 text-[11px] font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-sm">
                {gadget.name}
              </div>
            </div>

            {/* THUMBNAILS */}
            {images.length > 1 && (
              <div className="grid grid-cols-5 gap-2.5 mt-4">
                {images.map((image, index) => (
                  <button
                    key={image}
                    type="button"
                    onClick={() => setSelectedImage(index)}
                    aria-label={`View product image ${index + 1}`}
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
                        selectedImage === index
                          ? "border-green-700 shadow-md scale-[1.02]"
                          : "border-gray-100 hover:border-gray-300"
                      }
                    `}
                  >
                    <Image
                      src={image}
                      alt={`${gadget.name} thumbnail ${index + 1}`}
                      fill
                      sizes="(max-width: 768px) 20vw, 10vw"
                      className="object-contain p-1.5 transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* SELECTED INDICATOR */}
                    {selectedImage === index && (
                      <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-5 h-1 rounded-full bg-green-700" />
                    )}
                  </button>
                ))}
              </div>
            )}

            {/* DYNAMIC GALLERY TEXT */}
            <p className="text-xs text-gray-400 text-center mt-3">
              {images.length > 1
                ? `Select an image to explore ${gadget.name}`
                : `Product image of ${gadget.name}`}
            </p>
          </div>

          {/* =========================
              PRODUCT INFORMATION
          ========================== */}
          <div className="flex flex-col justify-center mt-8 lg:mt-0">

            {/* CATEGORY */}
            <p className="text-sm uppercase tracking-wide text-green-700 font-semibold">
              {gadget.category}
            </p>

            {/* TITLE */}
            <h1 className="text-3xl md:text-5xl font-extrabold text-gray-950 mt-3 leading-tight">
              {gadget.name}
            </h1>

            {/* SHORT DESCRIPTION */}
            {gadget.shortDescription && (
              <p className="text-gray-600 text-base md:text-lg leading-7 mt-4">
                {gadget.shortDescription}
              </p>
            )}

            {/* DESCRIPTION */}
            <p className="text-gray-700 text-base leading-7 mt-4">
              {gadget.description}
            </p>

            {/* PRICE */}
            <div className="mt-6">
              <p className="text-3xl md:text-4xl font-bold text-gray-900">
                ₦{gadget.price.toLocaleString("en-NG")}
              </p>
            </div>

            {/* PAYMENT */}
            <div className="mt-6 rounded-2xl bg-green-50 border border-green-100 p-5">
              <div className="flex items-start gap-3">

                <span className="text-xl">
                  💳
                </span>

                <div>
                  <h2 className="font-semibold text-green-900">
                    Payment on Delivery
                  </h2>

                  <p className="text-sm text-green-800 mt-1 leading-6">
                    {gadget.paymentDescription}
                  </p>
                </div>

              </div>
            </div>

            {/* DELIVERY */}
            <div className="mt-4 rounded-2xl bg-white border border-gray-100 p-5">
              <div className="flex items-start gap-3">

                <span className="text-xl">
                  🚚
                </span>

                <div>
                  <h2 className="font-semibold text-gray-900">
                    Free Nationwide Delivery
                  </h2>

                  <p className="text-sm text-gray-600 mt-1 leading-6">
                    {gadget.deliveryDescription}
                  </p>
                </div>

              </div>
            </div>

            {/* PRIMARY CTA */}
            <Link
              href={`/gadgets/${gadget.slug}#order`}
              className="w-full mt-7 inline-flex items-center justify-center px-6 py-4 rounded-xl bg-green-700 text-white font-semibold hover:bg-green-800 transition"
            >
              Order Now
              <span className="ml-2">
                →
              </span>
            </Link>

            {/* WHATSAPP */}
            <a
              href="https://wa.me/2348062991395"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full mt-3 inline-flex items-center justify-center px-6 py-4 rounded-xl border border-green-700 text-green-700 font-semibold hover:bg-green-50 transition"
            >
              💬 Order via WhatsApp
            </a>

            <p className="text-xs text-gray-500 text-center mt-3">
              We will contact you to confirm your order before dispatch.
            </p>

          </div>
        </div>

        {/* =========================
            PRODUCT DETAILS
        ========================== */}
        <div className="grid md:grid-cols-2 gap-8 mt-16 md:mt-24">

          {/* FEATURES */}
          <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">

            <h2 className="text-2xl font-bold text-gray-900">
              Key Features
            </h2>

            <ul className="mt-5 space-y-3">
              {gadget.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 text-gray-700 text-sm md:text-base"
                >
                  <span className="text-green-700 font-bold">
                    ✓
                  </span>

                  <span>
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

          </div>

          {/* WHAT'S INCLUDED */}
          <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">

            <h2 className="text-2xl font-bold text-gray-900">
              What's Included
            </h2>

            <ul className="mt-5 space-y-3">
              {gadget.whats_in_the_box.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-gray-700 text-sm md:text-base"
                >
                  <span className="text-green-700 font-bold">
                    ✓
                  </span>

                  <span>
                    {item}
                  </span>
                </li>
              ))}
            </ul>

          </div>
        </div>

        {/* =========================
            ORDER SECTION
        ========================== */}
        <div
          id="order"
          className="mt-16 md:mt-24"
        >
          <div className="bg-gray-900 rounded-2xl p-7 md:p-10">

            {/* ORDER HEADER */}
            <div className="text-center mb-8">

              <p className="text-green-400 font-semibold text-sm">
                Ready to order?
              </p>

              <h2 className="text-2xl md:text-4xl font-bold text-white mt-2">
                Get {gadget.name}
              </h2>

              <p className="text-gray-300 max-w-2xl mx-auto mt-4 leading-7">
                Fill out the order form and we'll contact you to confirm
                your order, location and delivery details before dispatch.
              </p>

            </div>

            {/* ORDER FORM */}
            <GadgetOrderForm
              productName={gadget.name}
            />

          </div>
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

  const gadget = gadgets.find(
    (item) => item.slug === slug
  );

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