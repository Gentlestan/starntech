import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section className="bg-linear-to-b from-gray-50 to-white py-14 md:py-24">
      <div className="max-w-6xl mx-auto px-4">

        {/* HEADER */}
        <div className="text-center mb-10 md:mb-14">

          <p className="text-green-700 font-semibold tracking-wide text-sm md:text-base">
            Our Projects
          </p>

          <h1 className="text-3xl md:text-5xl font-bold mt-3 text-gray-900">
            Completed Installations
          </h1>

          <p className="text-gray-700 mt-4 max-w-2xl mx-auto text-base md:text-lg leading-7">
            Real solar, inverter, and security installations across Abuja and beyond.
          </p>

        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((p, index) => (
            <article
              key={p.slug}
              className="group bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300"
            >

              {/* IMAGE */}
              <div className="relative w-full h-52 overflow-hidden">

                <Image
                  src={p.images?.[0]}
                  alt={p.title}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 640px) 100vw,
                         (max-width: 1024px) 50vw,
                         33vw"
                  className="object-cover group-hover:scale-105 transition duration-500"
                />

                {/* subtle overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent" />

              </div>

              {/* CONTENT */}
              <div className="p-6">

                {/* TITLE (FIXED VISIBILITY) */}
                <h3 className="font-semibold text-lg md:text-xl text-gray-900 group-hover:text-green-700 transition leading-snug">
                  {p.title}
                </h3>

                {/* LOCATION */}
                <p className="text-sm text-green-700 font-medium mt-1">
                  {p.location}
                </p>

                {/* OVERVIEW */}
                <p className="text-gray-700 mt-3 text-sm md:text-[15px] leading-7">
                  {p.overview}
                </p>

                {/* COMPONENTS */}
                <div className="mt-4 text-xs text-gray-600">
                  <p className="font-semibold text-gray-800">
                    Key Components:
                  </p>

                  <ul className="list-disc ml-4 mt-1 space-y-1">
                    {p.components.slice(0, 2).map((c) => (
                      <li key={c}>{c}</li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <Link
                  href={`/projects/${p.slug}`}
                  className="inline-flex items-center mt-5 text-green-700 font-medium text-sm hover:underline"
                >
                  View Full Case Study →
                </Link>

              </div>

            </article>
          ))}

        </div>
      </div>
    </section>
  );
}