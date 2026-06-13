
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
        <p>Loading...</p>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-20">
        <h1 className="text-2xl font-bold">Project not found</h1>

        <Link
          href="/projects"
          className="inline-block mt-4 text-green-600 hover:underline"
        >
          ← Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-5xl mx-auto px-4">

        {/* BACK BUTTON */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-green-600 transition mb-8"
        >
          ← Back to All Projects
        </Link>

        {/* HEADER */}
        <div className="mb-10">
          <p className="text-green-600 font-medium">
            {project.location}
          </p>

          <h1 className="text-3xl md:text-4xl font-bold mt-2">
            {project.title}
          </h1>
        </div>

        {/* GALLERY */}
        <div className="grid md:grid-cols-3 gap-4">
          {project.images.map((img) => (
            <div
              key={img}
              className="relative h-64 rounded-xl overflow-hidden"
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
        <div className="mt-12 bg-white p-8 rounded-2xl shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">
            Project Overview
          </h2>

          <p className="text-gray-700 leading-7">
            {project.overview}
          </p>
        </div>

        {/* WHAT IT POWERS */}
        <div className="mt-8 bg-white p-8 rounded-2xl shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">
            What This System Powers
          </h2>

          <ul className="space-y-2 text-gray-700">
            {project.what_it_powers.map((item) => (
              <li key={item}>
                ✓ {item}
              </li>
            ))}
          </ul>
        </div>

        {/* COMPONENTS */}
        <div className="mt-8 bg-white p-8 rounded-2xl shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">
            Components Used
          </h2>

          <ul className="space-y-2 text-gray-700">
            {project.components.map((item) => (
              <li key={item}>
                • {item}
              </li>
            ))}
          </ul>
        </div>

        {/* CHALLENGE */}
        <div className="mt-8 bg-white p-8 rounded-2xl shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">
            Project Challenge
          </h2>

          <p className="text-gray-700 leading-7">
            {project.challenge}
          </p>
        </div>

        {/* SOLUTION */}
        <div className="mt-8 bg-white p-8 rounded-2xl shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">
            Solution Implemented
          </h2>

          <p className="text-gray-700 leading-7">
            {project.solution}
          </p>
        </div>

        {/* RESULT */}
        <div className="mt-8 bg-white p-8 rounded-2xl shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">
            Results Achieved
          </h2>

          <p className="text-gray-700 leading-7">
            {project.result}
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 bg-green-600 text-white rounded-2xl p-10 text-center">
          <h2 className="text-3xl font-bold">
            Need a Similar Installation?
          </h2>

          <p className="mt-4 text-green-100 max-w-2xl mx-auto">
            We design and install solar systems, inverter backup solutions,
            lithium battery systems, CCTV surveillance systems, and other
            energy solutions tailored to your specific requirements.
          </p>

          <a
            href="https://wa.me/2348062991395"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-8 bg-white text-green-700 font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition"
          >
            Request a Free Consultation
          </a>
        </div>

      </div>
    </section>
  );
}
