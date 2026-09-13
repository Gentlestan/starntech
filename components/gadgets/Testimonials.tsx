import React from "react";

type Props = {
  slug: string;
};

type Review = {
  name: string;
  location: string;
  rating: number;
  title: string;
  text: string;
};

export default function Testimonials({ slug }: Props) {
  const reviews: Record<string, Review[]> = {
    "q16-wireless-earbuds": [
      {
        name: "Ifeanyi Ndimkoha",
        location: "Abuja",
        rating: 5,
        title: "Great sound",
        text: "The sound quality is really good for the price. Music is clear and the volume gets loud enough without sounding bad. I've been using mine every day and I'm impressed with it.",
      },
      {
        name: "Grade Peter",
        location: "Benue",
        rating: 5,
        title: "Battery is solid",
        text: "The battery has been one of my favourite things about the Q16. I can use it for quite a while before needing to charge again, which is very convenient when I'm out for the day.",
      },
      {
        name: "Odigie Sylvester",
        location: "Abuja",
        rating: 5,
        title: "Very comfortable",
        text: "I like how comfortable these are to wear. They sit securely without constantly falling out, and I can wear them for a long time without my ears getting uncomfortable. Very happy with the purchase.",
      },
    ],

    "y13-smart-watch": [
      {
        name: "Akanbi Babatunde",
        location: "Osogbo",
        rating: 4,
        title: "Looks really nice",
        text: "The watch looks even better in person. It has a nice premium appearance and doesn't look cheap at all. I've been wearing it almost every day and I really like how it looks on my wrist.",
      },
      {
        name: "Rotimi Philip",
        location: "Edo",
        rating: 5,
        title: "Notifications are useful",
        text: "I really like getting my notifications on the watch. I don't have to keep checking my phone every time a message comes in. The display is clear and the watch is easy to use.",
      },
      {
        name: "Odinaka Charles",
        location: "Enugu",
        rating: 5,
        title: "The free clipper was a nice surprise",
        text: "The watch itself is great, but I was honestly surprised to see the rechargeable clipper included as a free gift. It actually works well and is very convenient. Getting the clipper as a bonus made the deal even better.",
      },
    ],

    "wk89-smart-watch": [
      {
        name: "Godwin Mark",
        location: "Makurdi",
        rating: 5,
        title: "Calling feature is convenient",
        text: "The calling feature is actually very convenient. I can answer calls from the watch when my phone isn't close by, and the sound is clear enough. For the price, I'm impressed.",
      },
      {
        name: "Ayomide Adesuwa",
        location: "Lagos",
        rating: 5,
        title: "I really like the two straps",
        text: "I really like that it comes with two straps. I use the silicone one when I'm going out casually and the other one when I'm dressing up. It makes the watch look different depending on what I'm wearing.",
      },
      {
        name: "Ikechukwu Okafor",
        location: "Port Harcourt",
        rating: 4,
        title: "Big and clear display",
        text: "The display is one of my favourite things about this watch. It's big, clear and easy to read, especially when checking the time or notifications. The watch also looks much more expensive than I expected.",
      },
      {
        name: "Ibrahim A.",
        location: "Nasarawa",
        rating: 5,
        title: "Good value for money",
        text: "I was mainly buying the watch, so getting the rechargeable clipper as a free gift was a really nice bonus. The watch itself is great and the clipper actually came in useful. Good value for money.",
      },
    ],

    "v380-solar-camera": [
      {
        name: "Adebayo Ola",
        location: "Lokoja",
        rating: 5,
        title: "Great camera quality",
        text: "The camera quality is really good. The picture is clear during the day and I can see what is happening around the compound properly. For a solar camera, I'm impressed with the quality.",
      },
      {
        name: "Ifechukwu Enujuba",
        location: "Lagos",
        rating: 5,
        title: "Night vision is better than expected",
        text: "The night vision is better than I expected. Even at night, I can still see what is happening around the area clearly. I especially like that I don't need to switch on any light just to check the camera.",
      },
      {
        name: "Kunle A.",
        location: "Ilorin",
        rating: 5,
        title: "Remote viewing is very convenient",
        text: "Being able to view the camera from my phone is very convenient. Even when I'm not at home, I can open the app and check what is happening. The remote viewing is one of my favourite features.",
      },
    ],
  };

  const productReviews = reviews[slug];

  if (!productReviews) {
    return null;
  }

  return (
    <section className="mt-12 border-t border-gray-200 pt-10">
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900">
          What Our Customers Say
        </h2>

        <p className="mt-2 text-sm text-gray-600">
          Real feedback from customers who purchased this product.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {productReviews.map((review, index) => (
          <div
            key={`${review.name}-${index}`}
            className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
          >
            <div className="mb-3 flex items-center gap-1 text-yellow-500">
              {Array.from({ length: 5 }).map((_, starIndex) => (
                <span key={starIndex}>
                  {starIndex < review.rating ? "★" : "☆"}
                </span>
              ))}
            </div>

            <h3 className="mb-2 font-semibold text-gray-900">
              {review.title}
            </h3>

            <p className="text-sm leading-6 text-gray-600">
              {review.text}
            </p>

            <div className="mt-5 border-t border-gray-100 pt-4">
              <p className="font-medium text-gray-900">{review.name}</p>
              <p className="text-sm text-gray-500">{review.location}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}