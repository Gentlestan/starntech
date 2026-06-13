import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/data/blog";

export default function Blog() {
  return (
    <section className="bg-linear-to-b from-gray-50 via-white to-white py-12 sm:py-12 md:py-28">
      <div className="max-w-6xl mx-auto px-4">

        {/* HERO */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight text-gray-900">
            Solar Insights Blog
          </h1>

          <p className="text-gray-600 mt-4 sm:mt-5 max-w-2xl mx-auto px-2 text-base md:text-lg leading-7">
            Practical field experience from solar, inverter, and security installations across Nigeria.
          </p>
        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">

          {blogPosts.map((post, index) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block"
            >
              <article
                className={`relative bg-white rounded-2xl overflow-hidden border border-gray-100
                transition-all duration-300 hover:-translate-y-1 hover:shadow-xl
                ${
                  index === 0
                    ? "sm:col-span-2 lg:col-span-1"
                    : ""
                }`}
              >

                {/* IMAGE */}
                <div className="relative h-48 sm:h-52 md:h-56 w-full overflow-hidden">
                  <Image
                    src={post.images?.[0]}
                    alt={post.title}
                    fill
                    priority={index === 0}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-110 transition duration-500"
                  />

                  {/* soft overlay for premium feel */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/30 via-black/10 to-transparent" />
                </div>

                {/* CONTENT */}
                <div className="p-5 sm:p-6">

                  {/* TAGS */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.tags?.slice(0, 2).map((tag: string) => (
                      <span
                        key={tag}
                        className="text-[11px] sm:text-xs px-3 py-1 bg-green-50 text-green-700 rounded-full"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* TITLE */}
                  <h2 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 group-hover:text-green-600 transition leading-snug sm:leading-tight">
                    {post.title}
                  </h2>

                  {/* EXCERPT */}
                  <p className="text-sm sm:text-[15px] text-gray-600 mt-3 leading-6 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* META */}
                  <div className="flex items-center justify-between mt-5 text-[11px] sm:text-xs text-gray-500">
                    <span>{post.date}</span>
                    <span>5 min read</span>
                  </div>

                  {/* CTA */}
                  <div className="mt-5 text-green-600 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read article <span>→</span>
                  </div>

                </div>

                {/* premium ring effect */}
                <div className="absolute inset-0 rounded-2xl ring-1 ring-black/5 group-hover:ring-green-200 transition pointer-events-none" />

              </article>
            </Link>
          ))}

        </div>
      </div>
    </section>
  );
}