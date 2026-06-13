import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { blogPosts } from "../../data/blog";
import ReactMarkdown from "react-markdown";

export default function BlogDetails() {
  const router = useRouter();
  const [progress, setProgress] = useState(0);

  const { slug } = router.query;

  const post =
    typeof slug === "string"
      ? blogPosts.find((p) => p.slug === slug)
      : null;

  // Scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const total =
        document.documentElement.scrollHeight - window.innerHeight;
      const current = window.scrollY;

      if (total > 0) {
        setProgress((current / total) * 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!router.isReady) {
    return <p className="p-10 text-gray-500">Loading...</p>;
  }

  if (!post) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-24 text-center">
        <h1 className="text-2xl font-bold text-gray-900">Post not found</h1>

        <Link href="/blog" className="text-green-600 mt-4 inline-block">
          ← Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <article className="bg-white text-gray-800">

      {/* PROGRESS BAR */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-100 z-50">
        <div
          className="h-full bg-green-600 transition-all"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* WHATSAPP FLOAT */}
      <a
        href="https://wa.me/2348062991395"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 bg-green-600 text-white px-5 py-3 rounded-full shadow-lg hover:bg-green-700 transition z-50 text-sm"
      >
        WhatsApp
      </a>

      {/* BACK BUTTON */}
      <div className="sticky top-4 z-40 max-w-4xl mx-auto px-4 pt-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-gray-700 hover:text-green-600 bg-white/90 backdrop-blur px-3 py-2 rounded-full shadow-sm border"
        >
          ← Back
        </Link>
      </div>

      {/* HERO */}
      <header className="bg-linear-to-b from-green-50 to-white py-14">
        <div className="max-w-4xl mx-auto px-4">

          <div className="flex flex-wrap gap-2 mb-5">
            {post.tags?.map((tag: string) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 bg-green-100 text-green-700 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>

          <h1 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight text-gray-900">
            {post.title}
          </h1>

          <div className="flex items-center gap-3 text-sm text-gray-500 mt-5">
            <span>{post.date}</span>
            <span>•</span>
            <span>5 min read</span>
          </div>

          <p className="text-gray-600 mt-6 text-base md:text-lg leading-7 max-w-3xl">
            {post.excerpt}
          </p>
        </div>
      </header>

      {/* IMAGES */}
      <section className="max-w-5xl mx-auto px-4 mt-12 grid md:grid-cols-2 gap-5">
        {post.images?.map((img: string) => (
          <div
            key={img}
            className="relative h-64 md:h-80 overflow-hidden rounded-2xl"
          >
            <Image
              src={img}
              alt={post.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover hover:scale-105 transition duration-500"
            />
          </div>
        ))}
      </section>

      {/* AUTHOR */}
      <section className="max-w-3xl mx-auto px-4 mt-12">
        <div className="bg-gray-50 border rounded-xl p-5 flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-green-600 text-white flex items-center justify-center font-bold">
            ST
          </div>

          <div>
            <p className="font-semibold text-gray-900">
              StarnTech Engineering Team
            </p>
            <p className="text-sm text-gray-600">
              Solar & Inverter Installation Experts in Nigeria
            </p>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-3xl mx-auto px-4 mt-12 pb-16">

        {/* HIGHLIGHT */}
        <div className="bg-gray-50 border-l-4 border-green-500 p-6 rounded-xl text-gray-700 mb-10 text-sm md:text-base">
          This article is based on real-world solar installations across Nigeria,
          showing how systems behave in actual field conditions compared to lab ratings.
        </div>

        {/* MARKDOWN */}
        <div className="text-gray-800 text-[16px] md:text-[17px] leading-8">
          <ReactMarkdown
            components={{
              h1: (props) => (
                <h1 className="text-3xl font-bold mt-10 mb-4 text-gray-900" {...props} />
              ),
              h2: (props) => (
                <h2 className="text-2xl font-semibold mt-10 mb-3 text-gray-900" {...props} />
              ),
              p: (props) => (
                <p className="mt-4 leading-7 text-gray-700" {...props} />
              ),
              li: (props) => (
                <li className="ml-5 list-disc mt-2 text-gray-700" {...props} />
              ),
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>
      </section>

      {/* RELATED */}
      <section className="bg-gray-50 py-14 mt-10">
        <div className="max-w-5xl mx-auto px-4">

          <h3 className="text-xl font-bold mb-6 text-gray-900">
            Related Articles
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {blogPosts
              .filter((p) => p.slug !== post.slug)
              .slice(0, 3)
              .map((item) => (
                <Link
                  key={item.slug}
                  href={`/blog/${item.slug}`}
                  className="bg-white rounded-xl p-5 border hover:shadow-md transition"
                >
                  <p className="font-semibold text-sm text-gray-900">
                    {item.title}
                  </p>

                  <p className="text-xs text-gray-500 mt-2">
                    {item.date}
                  </p>
                </Link>
              ))}
          </div>
        </div>
      </section>

    </article>
  );
}