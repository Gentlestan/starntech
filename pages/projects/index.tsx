import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">

        {/* HEADER */}
        <div className="text-center mb-8">
          <p className="text-green-600 font-semibold">Our Projects</p>

          <h1 className="text-3xl md:text-4xl font-bold mt-2">
            Completed Installations
          </h1>

          <p className="text-gray-600 mt-4">
            Real solar, inverter, and security installations across Abuja.
          </p>
        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {projects.map((p) => (
            <div
              key={p.slug}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition"
            >

              {/* IMAGE */}
              <div className="relative w-full h-52">
                <Image
              src={p.images?.[0]}
              alt={p.title}
              fill
              priority={p.slug === projects[0].slug}
              sizes="(max-width: 640px) 100vw,
                    (max-width: 1024px) 50vw,
                    33vw"
              className="object-cover"
            />
              </div>

              {/* CONTENT */}
              <div className="p-5">

                <h3 className="font-semibold text-lg">{p.title}</h3>

                <p className="text-sm text-green-600 mt-1">
                  {p.location}
                </p>

                <p className="text-gray-600 mt-3 text-sm leading-6">
                  {p.overview}
                </p>

                {/* COMPONENT PREVIEW */}
                <div className="mt-4 text-xs text-gray-500">
                  <p className="font-medium">Key Components:</p>

                  <ul className="list-disc ml-4 mt-1">
                    {p.components.slice(0, 2).map((c) => (
                      <li key={c}>{c}</li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={`/projects/${p.slug}`}
                  className="mt-4 inline-block text-green-600 font-medium text-sm hover:underline"
                >
                  View Full Case Study →
                </Link>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}