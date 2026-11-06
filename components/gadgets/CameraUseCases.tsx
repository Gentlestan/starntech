import React from "react";
import Image from "next/image";

const useCases = [
  {
    title: "Home & Compound",
    description:
  "As a parent, once you know say your children dey okay, your mind go rest. Even when you travel or dey at work, you fit check on your home, see how your children dey and know whether your nanny dey take good care of them. No need to keep worrying throughout the day. Just check your camera from your phone and have peace of mind, wherever you dey. Oga sef, you fit check whether Madam don reach house safely! 😂",
    image: "/images/gadgets/usecase-house.jpg",
    alt: "Modern Nigerian residential house and compound",
  },
  {
    title: "Shops & Businesses",
    description:
  "You trust your workers, abi? No wahala! But you still need to know how dem dey attend to your customers, handle your goods and run your business when you no dey around. Something go missing? You fit play back recorded footage and check wetin happen and when e happen.",
    image: "/images/gadgets/usecase-business.jpg",
    alt: "Shopkeeper inside a Nigerian retail shop",
  },
  {
    title: "Construction Sites",
    description:
      "You fit trust your storekeeper, but e no mean say make you close your eyes! Cement, iron rods, electrical wires and other building materials dey move for site every day. With this camera, you fit check wetin dey happen for your site even when you no dey there.",
    image: "/images/gadgets/usecase-uncompleted.jpg",
    alt: "Uncompleted building at a Nigerian construction site",
  },
  {
    title: "Poultry & Farms",
    description:
  "You don invest money for your poultry and farm. No let wetin dey happen there take you by surprise! Check your birds, livestock and farm surroundings. Make sure say dem dey feed your animals well and keep everywhere clean. No let snake, other reptiles or disease wipe your investment. Still put eye for your boys! You fit review recorded footage to check wetin happen, before person pack your eggs or kill your chicken come tell you say e die.",
    image: "/images/gadgets/usecase-poultry.jpg",
    alt: "Poultry farm and agricultural property",
  },
];

export default function CameraUseCases() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-8 md:mb-10">
          <p className="text-sm font-bold uppercase tracking-wider text-green-700">
            More Than Home Security
          </p>

          <h2 className="text-2xl md:text-4xl font-extrabold text-gray-950 mt-2">
           One Solar Camera. Endless Ways to Protect What Matters.
          </h2>

          <p className="text-gray-600 mt-3 leading-7">
            Whether it's your home, business, construction site or farm,
            stay informed about what's happening even when you're away.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
          {useCases.map((item) => (
            <div
              key={item.title}
              className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative w-full aspect-[16/10]">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 560px"
                  className="object-cover"
                />
              </div>

              <div className="p-5 md:p-6">
                <h3 className="text-lg md:text-xl font-bold text-gray-950">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm md:text-base leading-7 mt-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}