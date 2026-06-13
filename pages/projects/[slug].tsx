import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { projects } from "@/data/projects";

export default function ProjectDetails() {
  const router = useRouter();

  const slug =
    typeof router.query.slug === "string"
      ? router.query.slug
      : undefined;

  const project = projects.find((p) => p.slug === slug);

  if (!router.isReady) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-20">
        <p className="text-gray-600">Loading...</p>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-20">
        <h1 className="text-2xl font-bold text-gray-900">Project not found</h1>

        <Link
          href="/projects"
          className="inline-block mt-4 text-green-700 hover:underline"
        >
          ← Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <section className="bg-linear-to-b from-gray-50 to-white py-14 md:py-20">
      <div className="max-w-5xl mx-auto px-4">

        {/* BACK BUTTON */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-green-700 transition mb-8"
        >
          ← Back to All Projects
        </Link>

        {/* HEADER */}
        <div className="mb-10">

          <p className="text-green-700 font-semibold text-sm md:text-base">
            {project.location}
          </p>

          <h1 className="text-3xl md:text-5xl font-bold mt-3 text-gray-900 leading-tight">
            {project.title}
          </h1>

        </div>

        {/* GALLERY */}
        <div className="grid md:grid-cols-3 gap-4">
          {project.images.map((img) => (
            <div
              key={img}
              className="relative h-64 md:h-72 rounded-xl overflow-hidden shadow-sm"
            >
              <Image
                src={img}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>

        {/* OVERVIEW */}
        <div className="mt-12 bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
            Project Overview
          </h2>

          <p className="text-gray-700 leading-7 text-sm md:text-[15px]">
            {project.overview}
          </p>
        </div>

        {/* WHAT IT POWERS */}
        <div className="mt-8 bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
            What This System Powers
          </h2>

          <ul className="space-y-2 text-gray-700 text-sm md:text-[15px]">
            {project.what_it_powers.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-green-600">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* COMPONENTS */}
        <div className="mt-8 bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
            Components Used
          </h2>

          <ul className="space-y-2 text-gray-700 text-sm md:text-[15px]">
            {project.components.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-gray-400">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* CHALLENGE */}
        <div className="mt-8 bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
            Challenge
          </h2>

          <p className="text-gray-700 leading-7 text-sm md:text-[15px]">
            {project.challenge}
          </p>
        </div>

        {/* SOLUTION */}
        <div className="mt-8 bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
            Solution
          </h2>

          <p className="text-gray-700 leading-7 text-sm md:text-[15px]">
            {project.solution}
          </p>
        </div>

        {/* RESULT */}
        <div className="mt-8 bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
            Results
          </h2>

          <p className="text-gray-700 leading-7 text-sm md:text-[15px]">
            {project.result}
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 bg-green-600 text-white rounded-2xl p-8 md:p-10 text-center">

          <h2 className="text-2xl md:text-3xl font-bold">
            Need a Similar Installation?
          </h2>

          <p className="mt-4 text-green-100 max-w-2xl mx-auto text-sm md:text-base leading-7">
            We design solar, inverter, lithium battery, and CCTV systems based on real field experience across Nigeria.
          </p>

          <a
            href="https://wa.me/2348062991395"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-8 bg-white text-green-700 font-semibold px-6 md:px-8 py-3 md:py-4 rounded-lg hover:bg-gray-100 transition"
          >
            Request a Free Consultation
          </a>

        </div>

      </div>
    </section>
  );
}