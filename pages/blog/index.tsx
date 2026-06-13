import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "../../data/blog";
import ReactMarkdown from "react-markdown";

export default function BlogDetails() {
  const router = useRouter();

  if (!router.isReady) {
    return <p className="p-10 text-gray-600">Loading...</p>;
  }

  const { slug } = router.query;

  const post =
    typeof slug === "string"
      ? blogPosts.find((p) => p.slug === slug)
      : null;

  if (!post) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20">
        <h1 className="text-2xl font-bold text-gray-900">Post not found</h1>

        <Link
          href="/blog"
          className="inline-block mt-4 text-green-600 hover:underline"
        >
          ← Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <article className="bg-white">

      {/* BACK */}
      <div className="max-w-4xl mx-auto px-4 pt-10">
        <Link
          href="/blog"
          className="text-sm text-gray-600 hover:text-green-600"
        >
          ← Back to Blog
        </Link>
      </div>

      {/* HERO */}
      <div className="bg-linear-to-b from-green-50 to-white py-14 mt-4">
        <div className="max-w-4xl mx-auto px-4">

          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags?.map((tag: string) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 bg-green-100 text-green-700 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>

          <h1 className="text-3xl md:text-5xl font-bold leading-tight text-gray-900">
            {post.title}
          </h1>

          <p className="text-gray-500 mt-4 text-sm">
            {post.date} • 5 min read
          </p>

          <p className="text-gray-600 mt-6 text-lg leading-7">
            {post.excerpt}
          </p>
        </div>
      </div>

      {/* IMAGES */}
      <div className="max-w-5xl mx-auto px-4 mt-10 grid md:grid-cols-2 gap-4">
        {post.images?.map((img: string) => (
          <div key={img} className="relative h-72 overflow-hidden rounded-xl">
            <Image
              src={img}
              alt={post.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {/* CONTENT */}
      <div className="max-w-3xl mx-auto px-4 mt-12 pb-20">

        <div className="bg-gray-50 border-l-4 border-green-500 p-5 rounded-lg text-gray-700 mb-10 text-sm">
          Real-world solar installation insights based on field experience in Nigeria.
        </div>

        <div className="text-gray-700 leading-8 text-[16px]">
          <ReactMarkdown
            components={{
              h1: (props) => <h1 className="text-3xl font-bold mt-8 text-gray-900" {...props} />,
              h2: (props) => <h2 className="text-2xl font-semibold mt-8 text-gray-900" {...props} />,
              p: (props) => <p className="mt-4 leading-7 text-gray-700" {...props} />,
              li: (props) => <li className="ml-5 list-disc mt-2" {...props} />,
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>

        {/* CTA */}
        <div className="mt-16 bg-green-600 text-white rounded-2xl p-8 md:p-10 text-center">
          <h3 className="text-2xl font-bold">
            Need a Solar Installation?
          </h3>

          <p className="mt-3 text-green-100">
            We design reliable solar systems based on real field performance.
          </p>

          <a
            href="https://wa.me/2348062991395"
            className="inline-block mt-6 bg-white text-green-700 font-semibold px-6 py-3 rounded-lg"
          >
            Contact on WhatsApp
          </a>
        </div>

      </div>
    </article>
  );
}