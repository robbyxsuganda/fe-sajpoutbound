import Image from "next/image";
import Link from "next/link";

interface RelatedBlogsProps {
  productData: {
    relatedBlogs: Array<{
      slug: string;
      image: string;
      date: string;
      source: string;
      title: string;
      excerpt: string;
    }>;
  };
}

export default function RelatedBlogs({ productData }: RelatedBlogsProps) {
  const relatedBlogs = productData.relatedBlogs;

  return (
    <section className="py-20 bg-gradient-to-br from-[var(--color-neutral-light-gray)]/20 to-[var(--color-neutral-white)]">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-neutral-black)] mb-6">
            Related{" "}
            <span className="text-[var(--color-primary)]">Articles</span>
          </h2>
          <p className="text-xl text-[var(--color-neutral-gray)] max-w-3xl mx-auto">
            Learn more about products and the Indonesian spice industry
          </p>
        </div>

        {/* Related Blogs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {relatedBlogs.map((blog) => (
            <div
              key={blog.slug}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:scale-105 border border-[var(--color-neutral-light-gray)]/50"
            >
              {/* Blog Image */}
              <Link href={`/blogs/${blog.slug}`} className="block">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    width={400}
                    height={256}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 bg-[var(--color-primary)]/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-white text-xs font-semibold">
                      Export
                    </span>
                  </div>
                </div>
              </Link>

              {/* Blog Content */}
              <div className="p-5">
                {/* Date and Source */}
                <div className="mb-3 space-y-1">
                  <p className="text-xs text-[var(--color-neutral-gray)]">
                    <span className="font-semibold">Date:</span> {blog.date}
                  </p>
                  <p className="text-xs text-[var(--color-neutral-gray)] truncate">
                    <span className="font-semibold">Source:</span> {blog.source}
                  </p>
                </div>

                {/* Title */}
                <Link href={`/blogs/${blog.slug}`}>
                  <h3 className="text-sm font-bold text-[var(--color-primary)] mb-3 leading-tight line-clamp-3 cursor-pointer group-hover:text-[var(--color-primary-dark)] transition-colors duration-200">
                    {blog.title}
                  </h3>
                </Link>

                {/* Excerpt */}
                <div className="bg-[var(--color-neutral-light-gray)]/40 rounded-lg p-3">
                  <p className="text-xs text-[var(--color-neutral-dark-gray)] leading-relaxed line-clamp-4">
                    &quot;{blog.excerpt}&quot;
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Blogs Button */}
        <div className="text-center mt-12">
          <Link
            href="/blogs"
            className="bg-[var(--color-primary)] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[var(--color-primary-light)] transition-all duration-300 hover:scale-105 shadow-lg flex items-center space-x-2 mx-auto w-fit"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
              />
            </svg>
            <span>View All Articles</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
