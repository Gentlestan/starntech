import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "../../data/blog";

export default function Blog() {
  return (
    <section className="bg-linear-to-b from-gray-50 to-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">

        {/* HERO HEADER */}
        <div className="text-center mb-14 md:mb-16">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
            Solar Insights Blog
          </h1>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-base md:text-lg leading-7">
            Practical knowledge from real solar, inverter, and CCTV installations
            across Nigeria — simplified for homeowners and businesses.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {blogPosts.map((post, index) => (
            <article
              key={post.slug}
              className="group bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300"
            >

              {/* IMAGE */}
              <div className="relative w-full h-52 overflow-hidden">
                <Image
                  src={post.images?.[0]}
                  alt={post.title}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition duration-500"
                />

                {/* subtle overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
              </div>

              {/* CONTENT */}
              <div className="p-6">

                {/* TAGS */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {post.tags?.slice(0, 2).map((tag: string) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 bg-green-50 text-green-700 rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* TITLE */}
                <h2 className="font-semibold text-lg md:text-xl leading-snug group-hover:text-green-600 transition">
                  {post.title}
                </h2>

                {/* EXCERPT */}
                <p className="text-sm md:text-[15px] text-gray-600 mt-3 leading-6">
                  {post.excerpt}
                </p>

                {/* META */}
                <div className="flex items-center justify-between mt-5 text-xs text-gray-500">
                  <span>{post.date}</span>
                  <span>5 min read</span>
                </div>

                {/* CTA */}
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center mt-5 text-green-600 font-medium text-sm hover:underline"
                >
                  Read Article →
                </Link>

              </div>
            </article>
          ))}

        </div>

      </div>
    </section>
  );
}